"use client";

import { Calistoga, Inter } from "next/font/google";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/button";
import { ErrorPageChrome } from "@/components/error-page-chrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-sans text-white antialiased",
        )}
      >
        <ErrorPageChrome showCookieSettingsInFooter={false}>
          <div className="container mx-auto px-4 text-center">
            <p className="font-serif text-5xl text-white md:text-6xl">
              Error
            </p>
            <h1 className="mt-4 font-serif text-2xl text-white md:text-3xl">
              Something went wrong
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-white/70">
              A critical error occurred while loading the app. You can try
              again or return to the homepage.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button type="button" variant="inverse" onClick={() => reset()}>
                Try again
              </Button>
              <Button href="/" variant="outline">
                Back to home
              </Button>
            </div>
          </div>
        </ErrorPageChrome>
      </body>
    </html>
  );
}
