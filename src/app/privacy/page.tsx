import type { Metadata } from "next";
import { BreadcrumbStructuredData } from "@/components/seo/breadcrumb-structured-data";
import { PrivacyPolicyIntroAndData } from "@/components/privacy/privacy-policy-intro-and-data";
import { PrivacyPolicyRightsAndContact } from "@/components/privacy/privacy-policy-rights-and-contact";
import { PrivacyPolicyTransfersRetention } from "@/components/privacy/privacy-policy-transfers-retention";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How this portfolio site handles personal data, cookies, and analytics (GDPR-aligned).",
  alternates: {
    canonical: getCanonicalUrl("/privacy"),
  },
};

export default function PrivacyPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-12 md:py-16">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <h1 className="font-serif text-3xl font-semibold md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-white/60">Last updated: 30 March 2026</p>

      <div className="mt-10 max-w-3xl space-y-4 text-white/80">
        <PrivacyPolicyIntroAndData />
        <PrivacyPolicyTransfersRetention />
        <PrivacyPolicyRightsAndContact />
      </div>
    </div>
  );
}
