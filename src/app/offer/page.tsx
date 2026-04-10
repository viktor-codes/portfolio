import type { Metadata } from "next";
import { BreadcrumbStructuredData } from "@/components/seo/breadcrumb-structured-data";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { Button } from "@/components/button";
import { Card } from "@/components/Card";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import {
  STARTER_OFFER_DEPOSIT_EUR,
  STARTER_OFFER_PDF_FILENAME,
  STARTER_OFFER_PDF_HREF,
  STARTER_OFFER_PRICE_EUR,
  starterOfferClientProvides,
  starterOfferExcludedItems,
  starterOfferIncludedItems,
  starterOfferNextSteps,
} from "@/lib/starter-offer";
import { getCanonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website & Landing Page for Irish SMEs — Starter Offer",
  description:
    "Fixed-fee website creation in Ireland: one-page Next.js site, contact form, email, SEO basics, deploy — €650, ~7–10 working days. Irish Midlands; remote nationwide.",
  alternates: {
    canonical: getCanonicalUrl("/offer"),
  },
  openGraph: {
    title: "Website & landing page offer for Irish businesses | RuraMade",
    description:
      "Fixed fee €650. Professional web design scope: responsive page, form, SEO fundamentals, analytics, deploy — in writing.",
    locale: "en_IE",
  },
};

export default function OfferPage() {
  return (
    <div id="top">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Starter offer", path: "/offer" },
        ]}
      />
      <Header />
      <main
        id="main"
        tabIndex={-1}
        className="pb-20 pt-28 outline-none lg:pt-32"
      >
        <div className="container max-w-3xl">
          <p className="text-center font-semibold uppercase tracking-widest text-emerald-300">
            Service proposal
          </p>
          <h1 className="mt-4 text-balance text-center font-serif text-3xl md:text-5xl">
            Landing page for small business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/65 md:text-lg">
            Starter offer · fixed fee · one page. A fast, mobile-friendly site
            with a contact form, email notifications, and deployment on Vercel.
            You keep your domain — you own everything provided.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="rounded-2xl border border-white/15 bg-white/5 px-8 py-5 text-center">
              <div className="font-serif text-4xl text-white md:text-5xl">
                €{STARTER_OFFER_PRICE_EUR}
              </div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/50">
                Fixed fee · scope in writing
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              variant="inverse"
              href="/#contact"
              className="sm:min-w-[11rem]"
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              href={STARTER_OFFER_PDF_HREF}
              download={STARTER_OFFER_PDF_FILENAME}
              className="sm:min-w-[11rem]"
            >
              Download PDF
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-white/45">
            Stack: Next.js · Resend · Vercel · forms · GA4 or agreed analytics ·
            HTTPS included.
          </p>
        </div>

        <div className="container mt-16 max-w-3xl space-y-16 lg:mt-24">
          <section id="what-you-get" className="scroll-mt-28">
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              What you get
            </h2>
            <Card className="mt-6 p-6 md:p-8">
              <ul className="flex flex-col gap-4">
                {starterOfferIncludedItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-white/70 md:text-base"
                  >
                    <CheckIcon
                      className="mt-0.5 size-5 shrink-0 text-emerald-400 md:size-6"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <section id="out-of-scope" className="scroll-mt-28">
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              Out of scope
            </h2>
            <Card className="mt-6 p-6 md:p-8">
              <ul className="list-inside list-disc space-y-2 text-sm text-white/65 md:text-base">
                {starterOfferExcludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-6 text-sm text-white/50">
                Anything outside &quot;What you get&quot; is quoted in writing
                first. Verbal requests are not in scope until confirmed by
                email.
              </p>
            </Card>
          </section>

          <section id="what-you-provide" className="scroll-mt-28">
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              What you provide
            </h2>
            <Card className="mt-6 p-6 md:p-8">
              <ol className="list-inside list-decimal space-y-3 text-sm text-white/70 md:text-base">
                {starterOfferClientProvides.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-white/50">
                Your delays pause the schedule. Content and deposit must both be
                received before the build begins.
              </p>
            </Card>
          </section>

          <section id="timeline-investment" className="scroll-mt-28">
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              Timeline &amp; investment
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card className="p-6 md:p-8">
                <h3 className="font-semibold text-emerald-300">Timeline</h3>
                <p className="mt-2 text-white/70">
                  <span className="font-semibold text-white">
                    7–10 working days
                  </span>{" "}
                  after content + deposit are received. Both are required to
                  begin.
                </p>
              </Card>
              <Card className="p-6 md:p-8">
                <h3 className="font-semibold text-emerald-300">
                  Payment · SEPA
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  <li>
                    To start (50%):{" "}
                    <span className="font-semibold text-white">
                      €{STARTER_OFFER_DEPOSIT_EUR}
                    </span>
                  </li>
                  <li>
                    Before go-live (50%):{" "}
                    <span className="font-semibold text-white">
                      €{STARTER_OFFER_DEPOSIT_EUR}
                    </span>
                  </li>
                  <li className="pt-2 font-semibold text-white">
                    Total: €{STARTER_OFFER_PRICE_EUR}
                  </li>
                </ul>
              </Card>
            </div>
            <p className="mt-4 text-sm text-white/45">
              Fees in EUR. VAT on the invoice per your registration status.
              Invoice with bank details is issued on agreement. Tell me before
              payment if your accountant needs a specific format.
            </p>
          </section>

          <section id="next-steps" className="">
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              Next steps
            </h2>
            <Card className="mt-6 p-6 md:p-8">
              <ol className="space-y-6">
                {starterOfferNextSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-sm font-bold text-emerald-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-semibold text-white">
                        {step.title}
                      </div>
                      <p className="mt-1 text-sm text-white/55">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>
          </section>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Button variant="inverse" href="/#contact">
              Contact Me
            </Button>
            <Button
              variant="outline"
              href={STARTER_OFFER_PDF_HREF}
              download={STARTER_OFFER_PDF_FILENAME}
            >
              Download PDF
            </Button>
          </div>

          <p className="text-center text-xs text-white/40">
            This page is a summary for convenience. The signed brief and terms
            define the final agreement.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
