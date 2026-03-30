"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

import { useConsent } from "@/components/cookie-consent/consent-context";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function Ga4RouteTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstNavigation = useRef(true);

  useEffect(() => {
    const gtag = window.gtag;
    if (typeof gtag !== "function") return;

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    if (isFirstNavigation.current) {
      isFirstNavigation.current = false;
      return;
    }

    gtag("config", measurementId, {
      page_path: pagePath,
    });
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function AnalyticsGate() {
  const { hydrationStatus, categories } = useConsent();
  const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();

  if (hydrationStatus !== "ready" || !categories.analytics) {
    return null;
  }

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: true });
        `}
      </Script>
      <Suspense fallback={null}>
        <Ga4RouteTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
