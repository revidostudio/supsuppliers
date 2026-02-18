import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://supsuppliers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Object.entries(routing.pathnames);
  const entries: MetadataRoute.Sitemap = [];

  for (const [key, value] of paths) {
    for (const locale of routing.locales) {
      let pathname: string;
      if (typeof value === "string") {
        pathname = value;
      } else {
        pathname = value[locale];
      }

      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      const url = `${BASE_URL}${prefix}${pathname === "/" ? "" : pathname}`;

      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: key === "/" ? "weekly" : "monthly",
        priority: key === "/" ? 1.0 : key === "/offerte-aanvragen" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
