/* eslint-disable react/no-unescaped-entities */

import GitHubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin-icon.svg";
import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import { ContactForm } from "@/components/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_TEL_HREF,
  CONTACT_TEL_LABEL,
} from "@/lib/contact";

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
