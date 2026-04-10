"use client";

import MenuIcon from "@/assets/icons/menu.svg";
import XIcon from "@/assets/icons/x.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

const MOBILE_NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Offer", href: "/offer" },
  { label: "Contact", href: "/#contact" },
] as const;

export function MobileNav() {
  const pathname = usePathname();
  const menuId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOfferPage = pathname === "/offer";

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <button
        type="button"
        className="relative z-[70] inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur md:hidden"
        aria-expanded={isMenuOpen}
        aria-controls={menuId}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? (
          <XIcon className="size-6 shrink-0" aria-hidden />
        ) : (
          <MenuIcon className="size-6 shrink-0" aria-hidden />
        )}
      </button>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 mx-2 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            id={menuId}
            className="absolute top-12 z-50 mt-4 w-full rounded-2xl border border-white/15 bg-gray-900 p-4 shadow-xl backdrop-blur-md"
            aria-label="Main"
          >
            <ul className="flex flex-col gap-1">
              {MOBILE_NAV_LINKS.map((item) => {
                const isOfferCurrent = item.href === "/offer" && isOfferPage;
                const baseClass =
                  "block rounded-full px-4 py-3 text-center text-sm font-semibold transition";
                if (isOfferCurrent) {
                  return (
                    <li key={item.label}>
                      <span
                        className={`${baseClass} cursor-default bg-white/10 text-white`}
                        aria-current="page"
                      >
                        {item.label}
                      </span>
                    </li>
                  );
                }
                const className =
                  item.label === "Contact"
                    ? `${baseClass} bg-white text-gray-900 hover:bg-white/90`
                    : `${baseClass} text-white/80 hover:bg-white/10 hover:text-white`;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={className}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
