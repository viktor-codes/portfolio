"use client";

import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

type ErrorPageChromeProps = {
  children: React.ReactNode;
  /** Global error boundary renders outside ConsentProvider — omit cookie UI. */
  showCookieSettingsInFooter?: boolean;
};

export function ErrorPageChrome({
  children,
  showCookieSettingsInFooter = true,
}: ErrorPageChromeProps) {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-gray-900 text-white antialiased"
    >
      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-1 flex-col justify-center pt-24 pb-12 outline-none md:pt-28 md:pb-16"
      >
        {children}
      </main>
      <Footer showCookieSettings={showCookieSettingsInFooter} />
    </div>
  );
}
