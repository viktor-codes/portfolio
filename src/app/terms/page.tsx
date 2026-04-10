import type { Metadata } from "next";
import { BreadcrumbStructuredData } from "@/components/seo/breadcrumb-structured-data";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using ruramade.dev and contacting RuraMade (Ireland).",
  alternates: {
    canonical: getCanonicalUrl("/terms"),
  },
};

export default function TermsPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-12 md:py-16">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
      />
      <h1 className="mt-8 font-serif text-3xl font-semibold md:text-4xl">
        Terms
      </h1>
      <p className="mt-2 text-sm text-white/60">Last updated: 31 March 2026</p>

      <div className="mt-10 w-full max-w-3xl space-y-6 text-white/80">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">Summary</h2>
          <p>
            This website is provided “as is” for informational purposes. By
            using it, you agree to behave lawfully and not attempt to disrupt
            the site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">No warranties</h2>
          <p>
            I do my best to keep the content accurate and the site available,
            but I don’t guarantee it will be error-free or uninterrupted.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, I’m not liable for any
            losses arising from use of this site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">Third-party links</h2>
          <p>
            Links to third-party sites are provided for convenience. I’m not
            responsible for their content or policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">Changes</h2>
          <p>
            I may update these terms from time to time. The “Last updated” date
            reflects the latest version.
          </p>
        </section>
      </div>
    </div>
  );
}

