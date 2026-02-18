import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HomeContent from "./HomeContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "nl"
        ? "Supsuppliers | Uw Partner in Supplementen & Private Label"
        : "Supsuppliers | Your Partner in Supplements & Private Label",
    description:
      locale === "nl"
        ? "Supsuppliers is de Nederlandse leverancier van poedervormige voeding en voedingssupplementen. White label & private label, lage afname, FSSC22000 gecertificeerd."
        : "Supsuppliers is the Dutch supplier of powdered nutrition and dietary supplements. White label & private label, low minimum orders, FSSC22000 certified.",
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}
