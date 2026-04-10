"use client";

import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const isOfferPage = pathname === "/offer";

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-900 py-4">
      <div className="container relative z-[60] mx-auto flex items-center justify-between gap-3">
        <Link
          href="/#top"
          className="relative z-[70] shrink-0 transition hover:opacity-90"
        >
          <Image
            src="/ruramade-logo.svg"
            alt="RuraMade"
            width={180}
            height={100}
          />
        </Link>
        <nav
          className="hidden gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur md:flex"
          aria-label="Main"
        >
          <Link href="/#projects" className="nav-item">
            Projects
          </Link>
          <Link href="/#manifesto" className="nav-item">
            Manifesto
          </Link>
          <Link href="/#about" className="nav-item">
            About
          </Link>
          <Link href="/#faq" className="nav-item">
            FAQ
          </Link>
          {isOfferPage ? (
            <span
              className="nav-item cursor-default opacity-80"
              aria-current="page"
            >
              Offer
            </span>
          ) : (
            <Link href="/offer" className="nav-item">
              Offer
            </Link>
          )}
          <Link
            href="/#contact"
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
};
