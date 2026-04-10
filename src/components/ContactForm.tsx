"use client";

import SendIcon from "@/assets/icons/send.svg";
import { Button } from "@/components/button";
import {
  ContactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId, useRef, useState } from "react";
import type { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type ApiStatus = "idle" | "success" | "error";

function fieldClassName(hasError: boolean, multiline = false): string {
  return twMerge(
    "w-full border-b-2 bg-transparent px-0 text-gray-900 outline-none transition placeholder:text-gray-900/40",
    multiline ? "min-h-[5.25rem] resize-y py-1.5" : "h-11",
    hasError
      ? "border-red-800/80 focus:border-red-900"
      : "border-gray-900/30 focus:border-gray-900/60",
  );
}

function RequiredMark() {
  return (
    <span className="font-semibold text-red-800" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const honeypotId = useId();

  const successRef = useRef<HTMLDivElement>(null);
  const [apiStatus, setApiStatus] = useState<ApiStatus>("idle");
  const [apiErrorMessage, setApiErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      companyWebsite: "",
    },
  });

  useEffect(() => {
    if (apiStatus === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [apiStatus]);

  const onValidSubmit = async (data: ContactFormValues) => {
    setApiErrorMessage("");
    setApiStatus("idle");

    if (data.companyWebsite.trim().length > 0) {
      setApiStatus("success");
      reset();
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          companyWebsite: data.companyWebsite,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setApiStatus("error");
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get("retry-after");
          const retryAfterSeconds = retryAfterHeader
            ? Number(retryAfterHeader)
            : NaN;
          setApiErrorMessage(
            Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0
              ? `Too many attempts. Please try again in ${Math.ceil(retryAfterSeconds)}s.`
              : (payload?.error ??
                  "Too many attempts. Please try again shortly."),
          );
          return;
        }

        if (response.status >= 500) {
          setApiErrorMessage(
            payload?.error ??
              "Something went wrong on my side. Please try again later or reach out via LinkedIn.",
          );
          return;
        }

        setApiErrorMessage(
          payload?.error ?? "Please check your details and try again.",
        );
        return;
      }

      setApiStatus("success");
      reset();
    } catch {
      setApiStatus("error");
      setApiErrorMessage(
        "Network error. Please try again, or reach out via LinkedIn.",
      );
    }
  };

  const onInvalidSubmit = (formErrors: FieldErrors<ContactFormValues>) => {
    setApiErrorMessage("");
    setApiStatus("idle");
    const order: (keyof ContactFormValues)[] = ["name", "email", "message"];
    for (const key of order) {
      if (formErrors[key]) {
        setFocus(key);
        break;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
      className="w-full"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor={nameId}
              className="mb-1 block text-sm font-semibold text-gray-900"
            >
              Name
              <RequiredMark />
              <span className="sr-only"> (required)</span>
            </label>
            <input
              type="text"
              autoComplete="name"
              readOnly={isSubmitting}
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? `${nameId}-error` : undefined}
              className={fieldClassName(Boolean(errors.name))}
              placeholder="Jane Murphy"
              {...register("name")}
              id={nameId}
            />
            {errors.name ? (
              <p
                id={`${nameId}-error`}
                className="mt-1 text-sm text-red-900"
                role="alert"
              >
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={emailId}
              className="mb-1 block text-sm font-semibold text-gray-900"
            >
              Email
              <RequiredMark />
              <span className="sr-only"> (required)</span>
            </label>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              readOnly={isSubmitting}
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? `${emailId}-error` : undefined}
              className={fieldClassName(Boolean(errors.email))}
              placeholder="you@business.ie"
              {...register("email")}
              id={emailId}
            />
            {errors.email ? (
              <p
                id={`${emailId}-error`}
                className="mt-1 text-sm text-red-900"
                role="alert"
              >
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={messageId}
              className="mb-1 block text-sm font-semibold text-gray-900"
            >
              Project details
              <RequiredMark />
              <span className="sr-only"> (required)</span>
            </label>
            <p className="mb-1.5 text-xs leading-snug text-gray-900/65">
              Scope, timeline, and a link to your site or socials if you have
              one.
            </p>
            <textarea
              readOnly={isSubmitting}
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={
                errors.message ? `${messageId}-error` : undefined
              }
              className={fieldClassName(Boolean(errors.message), true)}
              placeholder="e.g. New one-page site for a Dublin studio — booking enquiries, launch in March…"
              rows={3}
              {...register("message")}
              id={messageId}
            />
            {errors.message ? (
              <p
                id={`${messageId}-error`}
                className="mt-1 text-sm text-red-900"
                role="alert"
              >
                {errors.message.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor={honeypotId}>Company website</label>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("companyWebsite")}
            id={honeypotId}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <Button type="submit" disabled={isSubmitting}>
            <SendIcon className="size-5" aria-hidden />
            {isSubmitting ? "Sending..." : "Send My Enquiry"}
          </Button>

          <div
            ref={successRef}
            className="text-sm md:max-w-sm md:text-right"
            aria-live="polite"
            aria-atomic="true"
          >
            {apiStatus === "success" ? (
              <span className="font-semibold text-gray-900">
                Message received — I’ll reply within one business day.
              </span>
            ) : null}
            {apiStatus === "error" ? (
              <span className="text-gray-900/85">{apiErrorMessage}</span>
            ) : null}
          </div>
        </div>

        <p className="text-xs leading-snug text-gray-900/60">
          By sending this, you agree I’ll use your details only to respond to
          this enquiry — see{" "}
          <a
            href="/privacy"
            className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-900/80"
          >
            Privacy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
