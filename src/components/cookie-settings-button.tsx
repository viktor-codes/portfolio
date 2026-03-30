"use client";

import { useConsent } from "@/components/cookie-consent/consent-context";

type CookieSettingsButtonProps = {
  className?: string;
};

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  const { openPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className}
    >
      Cookie settings
    </button>
  );
}
