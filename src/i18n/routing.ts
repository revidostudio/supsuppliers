import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/white-of-private-label": {
      nl: "/white-of-private-label",
      en: "/white-or-private-label",
    },
    "/producten-samples": {
      nl: "/producten-samples",
      en: "/products-samples",
    },
    "/voedselveiligheidsplan": {
      nl: "/voedselveiligheidsplan",
      en: "/food-safety-plan",
    },
    "/design": "/design",
    "/labels": "/labels",
    "/shakebekers-drinkflessen": {
      nl: "/shakebekers-drinkflessen",
      en: "/shaker-cups-bottles",
    },
    "/overige-informatie": {
      nl: "/overige-informatie",
      en: "/additional-information",
    },
    "/stappenplan": {
      nl: "/stappenplan",
      en: "/step-by-step",
    },
    "/bedrijf": {
      nl: "/bedrijf",
      en: "/company",
    },
    "/contact": "/contact",
    "/offerte-aanvragen": {
      nl: "/offerte-aanvragen",
      en: "/request-quote",
    },
    "/voorwaarden": {
      nl: "/voorwaarden",
      en: "/terms-and-conditions",
    },
    "/privacybeleid": {
      nl: "/privacybeleid",
      en: "/privacy-policy",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
