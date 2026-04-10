"use client";

import { useConsent } from "@/components/cookie-consent/consent-context";

export function CookieConsentBanner() {
  const {
    hydrationStatus,
    isBannerVisible,
    acceptAnalytics,
    rejectNonEssential,
    openPreferences,
  } = useConsent();

  if (hydrationStatus !== "ready" || !isBannerVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-white/10 bg-gray-950/95 p-4 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md md:p-5"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="container flex flex-col items-center gap-3 text-center sm:gap-4">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs leading-snug sm:text-sm md:text-base md:leading-normal">
            <span className="font-semibold text-white">
              Essential cookies keep this site running.
            </span>{" "}
            <span className="text-white/85">
              Analytics is optional — it stays off until you opt in below.
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2">
          <button
            type="button"
            className="h-10 w-full rounded-xl border border-white/15 px-3 text-xs font-semibold text-white transition hover:bg-white/10 sm:h-11 sm:w-auto sm:px-4 sm:text-sm"
            onClick={openPreferences}
          >
            <span className="sm:hidden">Preferences</span>
            <span className="hidden sm:inline">Manage preferences</span>
          </button>
          <button
            type="button"
            className="h-10 w-full rounded-xl border border-white/15 px-3 text-xs font-semibold text-white transition hover:bg-white/10 sm:h-11 sm:w-auto sm:px-4 sm:text-sm"
            onClick={rejectNonEssential}
          >
            Reject
          </button>
          <button
            type="button"
            className="h-10 w-full rounded-xl bg-emerald-500 px-3 text-xs font-semibold text-gray-900 transition hover:bg-emerald-400 sm:h-11 sm:w-auto sm:px-4 sm:text-sm"
            onClick={acceptAnalytics}
          >
            <span className="sm:hidden">Accept</span>
            <span className="hidden sm:inline">Accept analytics</span>
          </button>
        </div>
      </div>
    </div>
  );
}
