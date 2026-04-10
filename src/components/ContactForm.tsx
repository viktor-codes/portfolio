"use client";

import SendIcon from "@/assets/icons/send.svg";
import { buttonVariants } from "@/components/button";
import {
  CONTACT_FORM_BUTTON_CELEBRATION_MS,
  contactFormFieldsPresence,
  contactFormSubmitLabelPresence,
  contactFormSuccessIllustration,
  contactFormSuccessPanel,
  CONTACT_FORM_SUCCESS_ILLUSTRATION_LAYOUT,
  CONTACT_FORM_SUCCESS_ILLUSTRATION_SRC,
} from "@/lib/motion/contact-form-reveal";
import {
  ContactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { FieldErrors } from "react-hook-form";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type ApiStatus = "idle" | "success" | "error";

export type ContactFormProps = {
  /** Development only: start with the thank-you panel visible (from `/?contactSuccess=1`). */
  showSuccessPreview?: boolean;
};

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

function SubmitSpinner() {
  return (
    <span
      className="inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-white/35 border-t-white"
      aria-hidden
    />
  );
}

function CheckIcon() {
  return (
    <svg
      className="size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactForm({ showSuccessPreview = false }: ContactFormProps) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const honeypotId = useId();

  const successRef = useRef<HTMLDivElement>(null);
  const celebrationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [apiStatus, setApiStatus] = useState<ApiStatus>(() =>
    showSuccessPreview ? "success" : "idle",
  );
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  const [isButtonSuccess, setIsButtonSuccess] = useState(false);

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

  const scheduleSuccessPanel = useCallback(() => {
    reset();
    setIsButtonSuccess(true);
    if (celebrationTimerRef.current) {
      clearTimeout(celebrationTimerRef.current);
    }
    celebrationTimerRef.current = setTimeout(() => {
      setIsButtonSuccess(false);
      setApiStatus("success");
      celebrationTimerRef.current = null;
    }, CONTACT_FORM_BUTTON_CELEBRATION_MS);
  }, [reset]);

  useEffect(() => {
    return () => {
      if (celebrationTimerRef.current) {
        clearTimeout(celebrationTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (apiStatus === "success" && successRef.current) {
      successRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [apiStatus]);

  const onValidSubmit = async (data: ContactFormValues) => {
    setApiErrorMessage("");
    setApiStatus("idle");
    setIsButtonSuccess(false);

    if (data.companyWebsite.trim().length > 0) {
      scheduleSuccessPanel();
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

      scheduleSuccessPanel();
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

  const handleSendAnother = () => {
    setApiStatus("idle");
    setApiErrorMessage("");
    setIsButtonSuccess(false);
  };

  const isFieldsLocked = isSubmitting || isButtonSuccess;

  return (
    <form
      onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
      className="w-full"
      noValidate
    >
      <motion.div layout className="grid grid-cols-1">
        <AnimatePresence mode="wait" initial={false}>
          {apiStatus === "success" ? (
            <motion.div
              key="success-panel"
              ref={successRef}
              initial={contactFormSuccessPanel.initial}
              animate={contactFormSuccessPanel.animate}
              exit={contactFormSuccessPanel.exit}
              transition={contactFormSuccessPanel.transition}
              className="flex flex-col gap-4 rounded-xl bg-white/55 p-5 text-gray-900 backdrop-blur-md"
              role="status"
              aria-live="polite"
            >
              <motion.div
                className={twMerge(
                  "mx-auto aspect-square w-full overflow-hidden",
                  CONTACT_FORM_SUCCESS_ILLUSTRATION_LAYOUT.wrapperMaxWidthClass,
                )}
                initial={contactFormSuccessIllustration.initial}
                animate={contactFormSuccessIllustration.animate}
                transition={contactFormSuccessIllustration.transition}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- SVG: predictable sizing vs next/image + motion layout */}
                <img
                  src={CONTACT_FORM_SUCCESS_ILLUSTRATION_SRC}
                  alt=""
                  width={CONTACT_FORM_SUCCESS_ILLUSTRATION_LAYOUT.imgWidth}
                  height={CONTACT_FORM_SUCCESS_ILLUSTRATION_LAYOUT.imgHeight}
                  decoding="async"
                  fetchPriority="high"
                  className="block h-full w-full select-none object-contain object-center"
                />
              </motion.div>
              <p className="text-base font-semibold leading-snug">
                Thanks — your message is on its way.
              </p>
              <p className="text-sm leading-relaxed text-gray-900/75">
                I’ll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={handleSendAnother}
                className={twMerge(
                  buttonVariants.outline,
                  "border-gray-900/25 text-gray-900 hover:bg-gray-900/10",
                )}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form-fields"
              layout
              initial={contactFormFieldsPresence.initial}
              animate={contactFormFieldsPresence.animate}
              exit={contactFormFieldsPresence.exit}
              transition={contactFormFieldsPresence.transition}
              className="grid grid-cols-1 gap-5"
            >
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
                    readOnly={isFieldsLocked}
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={
                      errors.name ? `${nameId}-error` : undefined
                    }
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
                    readOnly={isFieldsLocked}
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={
                      errors.email ? `${emailId}-error` : undefined
                    }
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
                    Scope, timeline, and a link to your site or socials if you
                    have one.
                  </p>
                  <textarea
                    readOnly={isFieldsLocked}
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
                <motion.button
                  type="submit"
                  disabled={isFieldsLocked}
                  aria-busy={isSubmitting}
                  aria-label={
                    isButtonSuccess ? "Message sent successfully" : undefined
                  }
                  className={twMerge(
                    buttonVariants.primary,
                    "relative min-w-[14rem] overflow-hidden",
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={
                        isSubmitting
                          ? "loading"
                          : isButtonSuccess
                            ? "success"
                            : "idle"
                      }
                      initial={contactFormSubmitLabelPresence.initial}
                      animate={contactFormSubmitLabelPresence.animate}
                      exit={contactFormSubmitLabelPresence.exit}
                      transition={
                        isButtonSuccess
                          ? contactFormSubmitLabelPresence.transitionSuccessSpring
                          : contactFormSubmitLabelPresence.transitionDefault
                      }
                      className="inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <SubmitSpinner />
                          Sending…
                        </>
                      ) : isButtonSuccess ? (
                        <>
                          <CheckIcon />
                          Sent!
                        </>
                      ) : (
                        <>
                          <SendIcon className="size-5 shrink-0" aria-hidden />
                          Send My Enquiry
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </div>

              {apiStatus === "error" && apiErrorMessage ? (
                <p
                  className="text-sm font-medium text-red-900"
                  role="alert"
                  aria-live="assertive"
                >
                  {apiErrorMessage}
                </p>
              ) : null}

              <p className="text-xs leading-snug text-gray-900/60">
                By sending this, you agree I’ll use your details only to respond
                to this enquiry — see{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-gray-900 underline underline-offset-2 hover:text-gray-900/80"
                >
                  Privacy
                </a>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </form>
  );
}
