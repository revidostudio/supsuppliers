import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://supsuppliers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [, value] of Object.entries(routing.pathnames)) {
    const nlPath = typeof value === "string" ? value : value.nl;
    const enPath = typeof value === "string" ? value : value.en;

    const nlUrl = `${BASE_URL}${nlPath === "/" ? "" : nlPath}`;
    const enUrl = `${BASE_URL}/en${enPath === "/" ? "" : enPath}`;

    entries.push({
      url: nlUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          nl: nlUrl,
          en: enUrl,
        },
      },
    });
  }

  return entries;
}
