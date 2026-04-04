"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { CONTACT_TEL_HREF } from "@/lib/contact";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/viktor-codes",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/viktor-codes/",
  },
];

type FooterProps = {
  /** When false, hides cookie settings (e.g. global-error has no ConsentProvider). */
  showCookieSettings?: boolean;
};

export const Footer = ({ showCookieSettings = true }: FooterProps) => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"
        aria-hidden
      />
      <div className="container relative">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <div className="text-white/70">&copy; 2026. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            <a
              href="/privacy"
              className="font-semibold text-white/70 transition hover:text-white"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="font-semibold text-white/70 transition hover:text-white"
            >
              Terms
            </a>
            <a
              href={CONTACT_TEL_HREF}
              className="font-semibold text-white/70 transition hover:text-white"
            >
              Call
            </a>
            {showCookieSettings ? (
              <CookieSettingsButton className="font-semibold text-white/70 transition hover:text-white" />
            ) : null}
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
