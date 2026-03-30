import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How this portfolio site handles personal data, cookies, and analytics.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 font-serif text-3xl font-semibold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Last updated: 30 March 2026
        </p>

        <div className="mt-10 max-w-3xl space-y-4 text-white/80">
          <h2 className="mt-8 text-xl font-semibold text-white first:mt-0">
            Who we are
          </h2>
          <p className="leading-relaxed">
            This website is a personal portfolio. For questions about this policy
            or your data, use the contact options in the &quot;Privacy contact&quot;
            section below.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            What data we collect
          </h2>
          <p className="leading-relaxed">
            We may process the following when you use the site:
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              <span className="font-semibold text-white">Contact form:</span>{" "}
              email address and message (required to respond); name if you
              choose to provide it; phone if you choose to provide it.
            </li>
            <li>
              <span className="font-semibold text-white">Technical data:</span>{" "}
              information typical of web servers and email delivery (for example
              IP address and user agent) when you submit the contact form, to
              operate the service and prevent abuse.
            </li>
            <li>
              <span className="font-semibold text-white">
                Cookies / local storage:
              </span>{" "}
              essential data needed to remember your cookie choices; optional
              analytics cookies only if you consent.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-white">
            Why we use your data
          </h2>
          <p className="leading-relaxed">
            We use contact details solely to read and reply to your message. We
            do not use the contact form for marketing lists unless you explicitly
            ask us to.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            We do not sell your data
          </h2>
          <p className="leading-relaxed">
            We do not sell your personal information. We do not share it for
            behavioural advertising.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            Email delivery (processor)
          </h2>
          <p className="leading-relaxed">
            Contact form submissions are sent using{" "}
            <a
              href="https://resend.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resend
            </a>
            , which acts as an email delivery provider (processor) on our
            behalf. Resend processes the data needed to deliver the message to
            the inbox we configure. See Resend&apos;s documentation and privacy
            information for how they handle service data.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            Cookies and analytics
          </h2>
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Essential:</span> we use
            local storage (or similar) to remember your cookie preferences so we
            do not ask you on every visit.
          </p>
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Analytics:</span> we use
            Google Analytics 4 only if you click &quot;Accept analytics&quot; or
            enable analytics in the preferences panel. Until then, no Google
            Analytics scripts are loaded.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            Retention
          </h2>
          <p className="leading-relaxed">
            Emails received via the contact form are kept only as long as needed
            to respond and manage follow-up related to your request, unless a
            longer period is required by law.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">Your rights</h2>
          <p className="leading-relaxed">
            Depending on applicable law (including the GDPR if it applies), you
            may have rights such as access, rectification, erasure, restriction,
            objection, and data portability. Contact us using the details below
            to exercise these rights.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            Privacy contact
          </h2>
          <p>
            For privacy-related requests, use the{" "}
            <Link href="/#contact" className="text-emerald-400 hover:text-emerald-300">
              contact form
            </Link>{" "}
            on this site and include &quot;Privacy request&quot; in your message.
          </p>
        </div>
      </div>
    </div>
  );
}
