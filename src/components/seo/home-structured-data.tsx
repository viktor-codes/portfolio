import { faqEntries } from "@/lib/faq-data";
import { getSiteUrl, SITE_NAME, SITE_SAME_AS } from "@/lib/site";

const SERVICE_DESCRIPTION =
  "Bespoke web design and website development for small businesses in Ireland. Fast Next.js sites, SEO fundamentals, forms and integrations — based in the Irish Midlands, working nationwide.";

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
      // JSON-L-LD must match visible FAQ copy (see faq-data.ts).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
