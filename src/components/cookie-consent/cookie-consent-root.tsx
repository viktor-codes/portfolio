"use client";

import { AnalyticsGate } from "@/components/cookie-consent/analytics-gate";
import { ConsentProvider } from "@/components/cookie-consent/consent-context";
import { CookieConsentBanner } from "@/components/cookie-consent/cookie-consent-banner";
import { ManagePreferencesModal } from "@/components/cookie-consent/manage-preferences-modal";

type CookieConsentRootProps = {
  children: React.ReactNode;
};

export function CookieConsentRoot({ children }: CookieConsentRootProps) {
  return (
    <ConsentProvider>
      {children}
      <CookieConsentBanner />
      <ManagePreferencesModal />
      <AnalyticsGate />
    </ConsentProvider>
  );
}
