import { faqEntries } from "@/lib/faq-data";
import { getSiteUrl, SITE_NAME, SITE_SAME_AS } from "@/lib/site";

const SERVICE_DESCRIPTION =
  "Custom Next.js websites for Irish businesses — built to bring customers, not just look pretty. Launch typically under two weeks. Fixed-fee, SEO-ready, mobile-first. Based in the Midlands.";

const HOME_PAGE_NAME = "Web design for leads & enquiries — Ireland";

export function HomeStructuredData() {
  const base = getSiteUrl();
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: SITE_NAME,
      inLanguage: "en-IE",
      publisher: { "@id": `${base}/#business` },
      mainEntityOfPage: { "@id": `${base}/#webpage` },
    },
    {
      "@type": "WebPage",
      "@id": `${base}/#webpage`,
      url: `${base}/`,
      name: HOME_PAGE_NAME,
      description: SERVICE_DESCRIPTION,
      inLanguage: "en-IE",
      isPartOf: { "@id": `${base}/#website` },
      about: { "@id": `${base}/#business` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${base}/og.jpg`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${base}/#business`,
      name: SITE_NAME,
      url: base,
      image: `${base}/og.jpg`,
      description: SERVICE_DESCRIPTION,
      areaServed: {
        "@type": "Country",
        name: "Ireland",
      },
      serviceType: [
        "Web design",
        "Website development",
        "Landing page design",
        "Next.js development",
      ],
      sameAs: [...SITE_SAME_AS],
    },
    {
      "@type": "FAQPage",
      "@id": `${base}/#faq`,
      url: `${base}/`,
      mainEntity: faqEntries.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer,
        },
      })),
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD FAQ must match visible FAQ copy (see faq-data.ts).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
