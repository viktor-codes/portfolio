import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 font-serif text-3xl font-semibold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Last updated: 30 March 2026
        </p>

        <div className="mt-10 max-w-3xl space-y-4 text-white/80">
          <PrivacyPolicyIntroAndData />
          <PrivacyPolicyTransfersRetention />
          <PrivacyPolicyRightsAndContact />
        </div>
      </div>
    </div>
  );
}
