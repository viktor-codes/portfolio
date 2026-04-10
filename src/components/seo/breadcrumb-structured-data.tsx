import { getSiteUrl } from "@/lib/site";

export interface BreadcrumbStructuredDataItem {
  name: string;
  /** Site path without domain, e.g. "/offer" or "/" for home. */
  path: string;
}

function itemUrl(base: string, path: string): string {
  if (path === "/" || path === "") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: readonly BreadcrumbStructuredDataItem[];
}) {
  const base = getSiteUrl();
  const itemListElement = items.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: itemUrl(base, crumb.path),
  }));

  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
