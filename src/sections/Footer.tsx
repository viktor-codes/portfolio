"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import Image from "next/image";

const siteNavLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Offer", href: "/offer" },
  { label: "Contact", href: "/#contact" },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/viktor-codes",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/viktor-codes/",
  },
] as const;

const footerLinkClass =
  "font-semibold text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/80";

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
        <div className="flex justify-center pb-6 pt-10 md:hidden">
          <a
            href="/#top"
            className="mt-auto shrink-0 transition hover:opacity-90"
          >
            <Image
              src="/ruramade-logo.svg"
              alt="RuraMade"
              width={150}
              height={100}
              className=""
            />
          </a>
        </div>
        <div className="border-t border-white/15 pb-6 pt-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 md:grid-cols-3 md:gap-x-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Navigate
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {siteNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm ${footerLinkClass}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Legal
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm ${footerLinkClass}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {showCookieSettings ? (
                  <li>
                    <CookieSettingsButton
                      className={`cursor-pointer border-0 bg-transparent p-0 text-left text-sm ${footerLinkClass}`}
                    />
                  </li>
                ) : null}
              </ul>
            </div>

            <div className="col-span-2 flex flex-col border-t border-white/10 pt-8 md:col-span-1 md:h-full md:border-t-0 md:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Connect
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm ${footerLinkClass}`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRightIcon
                        className="size-4 shrink-0 text-white/50"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/#top"
                className="mt-auto hidden shrink-0 transition hover:opacity-90 md:block"
              >
                <Image
                  src="/ruramade-logo.svg"
                  alt="RuraMade"
                  width={150}
                  height={100}
                  className=""
                />
              </a>
            </div>
          </div>

          <div className="mt-10 flex w-full flex-col items-center gap-4 border-t border-white/10 pt-6 text-sm text-white/55">
            <p className="text-center">
              &copy; {new Date().getFullYear()} RuraMade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
