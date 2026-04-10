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

type ContactSectionProps = {
  /** Development only: open `/?contactSuccess=1#contact` to preview the thank-you state. */
  showSuccessPreview?: boolean;
};

export const ContactSection = ({
  showSuccessPreview = false,
}: ContactSectionProps) => {
  return (
    <div id="contact" className="py-16 lg:py-24">
      <div className="container rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400">
        <div className="relative z-0 py-8 text-center text-gray-900 md:text-left">
          {/*
            Mobile: headline → form → mail & phone stacked, social row below (tight gap).
            md+: same column layout, closer spacing vs old separate grid rows + pt-8 gap.
          */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_minmax(0,24rem)] md:grid-rows-[auto_auto_minmax(0,1fr)] md:items-stretch md:gap-x-8 md:gap-y-4">
            <h2 className="col-start-1 row-start-1 text-balance font-serif text-3xl leading-tight md:text-4xl">
              Tell me about your project — I’ll reply within one business day.
            </h2>

            <div className="col-start-1 row-start-2 w-full min-w-0 max-w-xl text-left md:col-start-2 md:row-span-3 md:row-start-1 md:max-w-none md:justify-self-stretch">
              <ContactForm showSuccessPreview={showSuccessPreview} />
            </div>

            <div className="col-start-1 row-start-3 flex w-full flex-col items-center gap-3 text-sm font-semibold md:w-auto md:items-start md:self-end md:pt-8 md:text-base">
              <div className="mb-8 flex flex-col items-center gap-4 md:mb-0 md:items-start">
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="inline-flex items-center gap-2 text-gray-900/80 transition hover:text-gray-900"
                >
                  <MailIcon className="size-5 shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={CONTACT_TEL_HREF}
                  className="inline-flex items-center gap-2 text-gray-900/80 transition hover:text-gray-900"
                >
                  <PhoneIcon className="size-5 shrink-0" />
                  {CONTACT_TEL_LABEL}
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
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
    </div>
  );
};
