import type { MetadataRoute } from "next";
import { getSiteUrl, SITEMAP_LAST_MODIFIED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: SITEMAP_LAST_MODIFIED.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: SITEMAP_LAST_MODIFIED.privacy,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/offer`,
      lastModified: SITEMAP_LAST_MODIFIED.offer,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: SITEMAP_LAST_MODIFIED.terms,
      changeFrequency: "yearly",
      priority: 0.25,
    },
  ];
}

