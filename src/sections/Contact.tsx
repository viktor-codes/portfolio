/* eslint-disable react/no-unescaped-entities */

import { ContactForm } from "@/components/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_TEL_HREF,
  CONTACT_TEL_LABEL,
} from "@/lib/contact";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4.5 7.5h15v9h-15v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m5 8 7 6 7-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7.5 4.5h2.2c.5 0 .9.4 1 .9l.6 2.8c.1.5-.1 1-.5 1.2l-1.6 1c1 2.1 2.6 3.7 4.7 4.7l1-1.6c.3-.4.8-.6 1.2-.5l2.8.6c.5.1.9.5.9 1v2.2c0 .6-.4 1-1 1C11.1 21 3 12.9 3 6.5c0-.6.4-1 1-1h3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.3 0-1.2.4-2.1 1-2.9-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.6.8 1 1.8 1 2.9 0 4.1-2.4 5-4.7 5.3.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 10.2H6.2V18h2.1v-7.8ZM7.25 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM18 13.2c0-2.2-1.2-3.2-2.9-3.2-1.3 0-1.9.7-2.2 1.2v-1h-2V18h2v-4c0-1 .2-2 1.4-2s1.2 1.1 1.2 2V18h2.1v-4.8Z"
      />
    </svg>
  );
}

export const ContactSection = () => {
  return (
    <div id="contact" className="scroll-mt-24 py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            <div className="md:max-w-sm">
              <h2 className="text-balance font-serif text-3xl leading-tight md:text-4xl">
                Let’s discuss on something{" "}
                <span className="text-emerald-700">cool</span> together
              </h2>
              <div className="mt-8 space-y-3 text-sm font-semibold md:text-base">
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="inline-flex items-center gap-2 text-gray-900/80 transition hover:text-gray-900"
                >
                  <MailIcon className="size-5" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={CONTACT_TEL_HREF}
                  className="inline-flex items-center gap-2 text-gray-900/80 transition hover:text-gray-900"
                >
                  <PhoneIcon className="size-5" />
                  {CONTACT_TEL_LABEL}
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
                <a
                  href="https://www.linkedin.com/in/viktor-codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-gray-900/10 text-gray-900 transition hover:bg-gray-900/15"
                >
                  <LinkedInIcon className="size-5" />
                </a>
                <a
                  href="https://github.com/viktor-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex size-11 items-center justify-center rounded-full bg-gray-900/10 text-gray-900 transition hover:bg-gray-900/15"
                >
                  <GitHubIcon className="size-5" />
                </a>
              </div>
            </div>

            <div className="w-full max-w-xl rounded-3xl bg-white/90 p-6 text-left shadow-sm ring-1 ring-gray-900/10 backdrop-blur md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
