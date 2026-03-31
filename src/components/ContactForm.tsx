"use client";

import { useId, useMemo, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  companyWebsite: string; // honeypot
}

function isEmailLike(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();
  const honeypotId = useId();

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
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
          phone: values.phone.trim() || undefined,
          message: values.message.trim(),
          companyWebsite: values.companyWebsite.trim(),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setSubmitState("error");
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get("retry-after");
          const retryAfterSeconds = retryAfterHeader
            ? Number(retryAfterHeader)
            : NaN;
          setErrorMessage(
            Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0
              ? `Too many attempts. Please try again in ${Math.ceil(retryAfterSeconds)}s.`
              : payload?.error ?? "Too many attempts. Please try again shortly.",
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

        setErrorMessage(payload?.error ?? "Please check your details and try again.");
        return;
      }

      setSubmitState("success");
      setValues({
        name: "",
        email: "",
        phone: "",
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
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-1.5">
          <label htmlFor={nameId} className="text-sm font-semibold">
            Name (optional)
          </label>
          <input
            id={nameId}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="h-12 rounded-xl border border-gray-900/15 bg-white px-4 text-gray-900 outline-none transition placeholder:text-gray-900/50 focus:ring-2 focus:ring-gray-900/30"
            placeholder="Jane Doe"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-1.5">
            <label htmlFor={emailId} className="text-sm font-semibold">
              Email
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
              className="h-12 rounded-xl border border-gray-900/15 bg-white px-4 text-gray-900 outline-none transition placeholder:text-gray-900/50 focus:ring-2 focus:ring-gray-900/30"
              placeholder="jane@company.com"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-1.5">
            <label htmlFor={phoneId} className="text-sm font-semibold">
              Phone (optional)
            </label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) =>
                setValues((v) => ({ ...v, phone: e.target.value }))
              }
              className="h-12 rounded-xl border border-gray-900/15 bg-white px-4 text-gray-900 outline-none transition placeholder:text-gray-900/50 focus:ring-2 focus:ring-gray-900/30"
              placeholder="+353 87 123 4567"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1.5">
          <label htmlFor={messageId} className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id={messageId}
            name="message"
            value={values.message}
            onChange={(e) =>
              setValues((v) => ({ ...v, message: e.target.value }))
            }
            className="min-h-32 resize-y rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-900/50 focus:ring-2 focus:ring-gray-900/30"
            placeholder="Tell me what you’re building and what ‘done’ looks like."
            required
          />
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

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={!canSubmit}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gray-900 px-6 font-semibold text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitState === "submitting" ? "Sending..." : "Send message"}
          </button>

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
