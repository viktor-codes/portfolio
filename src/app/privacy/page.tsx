import type { Metadata } from "next";

import { PrivacyPolicyIntroAndData } from "@/components/privacy/privacy-policy-intro-and-data";
import { PrivacyPolicyRightsAndContact } from "@/components/privacy/privacy-policy-rights-and-contact";
import { PrivacyPolicyTransfersRetention } from "@/components/privacy/privacy-policy-transfers-retention";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How this portfolio site handles personal data, cookies, and analytics (GDPR-aligned).",
};

export default function PrivacyPage() {
  return (
    <div className="text-prettypy-12 container flex flex-col items-center justify-center md:py-16">
      <h1 className="mt-8font-serif text-3xl font-semibold md:text-4xl">
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
