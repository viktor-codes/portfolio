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

export const SITE_NAME = "RuraMade";

/** SameAs profiles — keep in sync with footer social links. */
export const SITE_SAME_AS: readonly string[] = [
  "https://github.com/viktor-codes",
  "https://www.linkedin.com/in/viktor-codes/",
];
