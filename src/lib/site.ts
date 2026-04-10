/**
 * Canonical site URL for SEO, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL=https://ruramade.dev in production (e.g. Vercel).
 */
export function getSiteUrl(): string {
  const publicUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (publicUrl) return publicUrl.replace(/\/+$/, "");

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) return `https://${productionHost}`;

  const vercelHost = process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

/**
 * Absolute canonical URL for a path. Root uses trailing slash to match sitemap home URL.
 */
export function getCanonicalUrl(pathname: string): string {
  const base = getSiteUrl();
  const normalized =
    pathname === "/" || pathname === ""
      ? "/"
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  if (normalized === "/") {
    return `${base}/`;
  }
  return `${base}${normalized}`;
}

/**
 * Last substantive content updates for sitemap lastModified.
 * Keep privacy/terms in sync with on-page “Last updated” lines when you edit those pages.
 */
export const SITEMAP_LAST_MODIFIED = {
  home: new Date("2026-04-10T12:00:00.000Z"),
  offer: new Date("2026-04-10T12:00:00.000Z"),
  privacy: new Date("2026-03-30T12:00:00.000Z"),
  terms: new Date("2026-03-31T12:00:00.000Z"),
} as const;

export const SITE_NAME = "RuraMade";

/** SameAs profiles — keep in sync with footer social links. */
export const SITE_SAME_AS: readonly string[] = [
  "https://github.com/viktor-codes",
  "https://www.linkedin.com/in/viktor-codes/",
];
