"use client";

import { useEffect, useId, useState } from "react";

import { useConsent } from "@/components/cookie-consent/consent-context";

export function ManagePreferencesModal() {
  const id = useId();
  const {
    isPreferencesOpen,
    closePreferences,
    categories,
    savePreferences,
    hasStoredConsent,
  } = useConsent();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(
    categories.analytics,
  );

  useEffect(() => {
    if (isPreferencesOpen) {
      setAnalyticsEnabled(categories.analytics);
    }
  }, [isPreferencesOpen, categories.analytics]);

  useEffect(() => {
    if (!isPreferencesOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closePreferences();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPreferencesOpen, closePreferences]);

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close dialog"
        onClick={closePreferences}
      />
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/15 bg-gray-900 p-6 shadow-xl">
        <h2
          id={`${id}-title`}
          className="font-serif text-xl font-semibold text-white"
        >
          Cookie preferences
        </h2>
        <p className="mt-2 text-sm text-white/70">
          Essential cookies are always on. You can enable or disable analytics
          cookies. We only load Google Analytics after you opt in.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="text-sm font-semibold text-white">Essential</p>
              <p className="mt-1 text-xs text-white/60">
                Required for the site to work (e.g. storing your consent
                choice).
              </p>
            </div>
            <span className="shrink-0 text-xs font-semibold text-emerald-400">
              Always on
            </span>
          </div>

          <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <span className="text-sm font-semibold text-white">
                Analytics
              </span>
              <p className="mt-1 text-xs text-white/60">
                Helps us understand how visitors use the site (Google Analytics
                4).
              </p>
            </div>
            <input
              type="checkbox"
              className="mt-1 size-4 rounded border-white/30 bg-gray-800 text-emerald-500 focus:ring-emerald-500"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="h-11 rounded-xl border border-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            onClick={closePreferences}
          >
            Cancel
          </button>
          <button
            type="button"
            className="h-11 rounded-xl bg-emerald-500 px-4 text-sm font-semibold text-gray-900 transition hover:bg-emerald-400"
            onClick={() => savePreferences({ analytics: analyticsEnabled })}
          >
            {hasStoredConsent ? "Save preferences" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
