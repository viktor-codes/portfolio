"use client";

import SendIcon from "@/assets/icons/send.svg";
import { Button } from "@/components/button";
import { useId, useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  companyWebsite: string; // honeypot
}

function isEmailLike(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const honeypotId = useId();

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
    companyWebsite: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const canSubmit = useMemo(() => {
    const hasRequired =
      values.email.trim().length > 0 && values.message.trim().length > 0;
    return (
      hasRequired && isEmailLike(values.email) && submitState !== "submitting"
    );
  }, [submitState, values.email, values.message]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (submitState === "success") {
      setSubmitState("idle");
    }

    if (values.companyWebsite.trim().length > 0) {
      // honeypot hit — pretend success to avoid giving feedback to bots
      setSubmitState("success");
      return;
    }

    if (!canSubmit) {
      setSubmitState("error");
      setErrorMessage("Please check your details and try again.");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim() || undefined,
          email: values.email.trim(),
          message: values.message.trim(),
          companyWebsite: values.companyWebsite.trim(),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setSubmitState("error");
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get("retry-after");
          const retryAfterSeconds = retryAfterHeader
            ? Number(retryAfterHeader)
            : NaN;
          setErrorMessage(
            Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0
              ? `Too many attempts. Please try again in ${Math.ceil(retryAfterSeconds)}s.`
              : (payload?.error ??
                  "Too many attempts. Please try again shortly."),
          );
          return;
        }

        if (response.status >= 500) {
          setErrorMessage(
            payload?.error ??
              "Something went wrong on my side. Please try again later or reach out via LinkedIn.",
          );
          return;
        }

        setErrorMessage(
          payload?.error ?? "Please check your details and try again.",
        );
        return;
      }

      setSubmitState("success");
      setValues({
        name: "",
        email: "",
        message: "",
        companyWebsite: "",
      });
    } catch {
      setSubmitState("error");
      setErrorMessage(
        "Network error. Please try again, or reach out via LinkedIn.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="grid grid-cols-1 gap-10">
        <div className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor={nameId} className="sr-only">
              Your name
            </label>
            <input
              id={nameId}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) =>
                setValues((v) => ({ ...v, name: e.target.value }))
              }
              className="h-12 w-full border-b-2 border-gray-900/30 bg-transparent px-0 text-gray-900 outline-none transition placeholder:text-gray-900/40 focus:border-gray-900/60"
              placeholder="Your name"
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label htmlFor={emailId} className="sr-only">
              Your email
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) =>
                setValues((v) => ({ ...v, email: e.target.value }))
              }
              className="h-12 w-full border-b-2 border-gray-900/30 bg-transparent px-0 text-gray-900 outline-none transition placeholder:text-gray-900/40 focus:border-gray-900/60"
              placeholder="Your email"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <label htmlFor={messageId} className="sr-only">
              Your message
            </label>
            <textarea
              id={messageId}
              name="message"
              value={values.message}
              onChange={(e) =>
                setValues((v) => ({ ...v, message: e.target.value }))
              }
              className="min-h-28 w-full resize-y border-b-2 border-gray-900/30 bg-transparent px-0 py-2 text-gray-900 outline-none transition placeholder:text-gray-900/40 focus:border-gray-900/60"
              placeholder="What you need (e.g. new site, redesign, booking form, API), your timeline, and link to your current site or socials if any"
              required
            />
          </div>
        </div>

        {/* honeypot */}
        <div className="hidden">
          <label htmlFor={honeypotId}>Company website</label>
          <input
            id={honeypotId}
            name="companyWebsite"
            value={values.companyWebsite}
            onChange={(e) =>
              setValues((v) => ({ ...v, companyWebsite: e.target.value }))
            }
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button type="submit" disabled={!canSubmit}>
            <SendIcon className="size-5" />
            {submitState === "submitting" ? "Sending..." : "Send My Enquiry"}
          </Button>

          <div className="text-sm" aria-live="polite" aria-atomic="true">
            {submitState === "success" ? (
              <span className="font-semibold text-gray-900">
                Message sent. I’ll get back to you soon.
              </span>
            ) : null}
            {submitState === "error" ? (
              <span className="text-gray-900/80">{errorMessage}</span>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}
