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
      <div className="container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-3xl">
          <p className="text-sm text-white/90 md:text-base">
            We use cookies to run the site and, with your permission, analytics
            to understand traffic. Analytics is off until you accept.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            className="h-11 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            onClick={openPreferences}
          >
            Manage preferences
          </button>
          <button
            type="button"
            className="h-11 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            onClick={rejectNonEssential}
          >
            Reject
          </button>
          <button
            type="button"
            className="h-11 rounded-xl bg-emerald-500 px-4 text-sm font-semibold text-gray-900 transition hover:bg-emerald-400"
            onClick={acceptAnalytics}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
