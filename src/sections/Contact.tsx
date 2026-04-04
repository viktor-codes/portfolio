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
          {/*
            Mobile: headline → form → contacts → social (form right after the promise).
            md+: two columns unchanged — left stack + form spanning full height; social
            stays bottom-aligned vs the form via row 3 minmax(0,1fr) + self-end.
          */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:grid-rows-[auto_auto_minmax(0,1fr)] md:items-stretch md:gap-x-8 md:gap-y-4">
            <h2 className="col-start-1 row-start-1 text-balance font-serif text-3xl leading-tight md:text-4xl">
              Tell me about your project — I’ll reply within one business day.
            </h2>

            <div className="col-start-1 row-start-2 w-full max-w-xl text-left md:col-start-2 md:row-span-3 md:row-start-1 md:max-w-none md:justify-self-stretch">
              <ContactForm />
            </div>

            <div className="col-start-1 row-start-3 flex flex-col items-center gap-4 text-sm font-semibold md:items-start md:text-base">
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

            <div className="col-start-1 row-start-4 flex items-center justify-center gap-4 md:row-start-3 md:justify-start md:self-end md:pt-8">
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
        </div>
      </div>
    </div>
  );
};
