import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import OfferteForm from "./OfferteForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "offerte" });
  return { title: t("title"), description: t("intro") };
}

export default async function OfferteAanvragenPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OfferteContent />;
}

function OfferteContent() {
  const t = useTranslations("offerte");

  return (
    <>
      <PageHero tag={t("title")} title={t("subtitle")} description={t("intro")} />
      <Section bg="white" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <OfferteForm />
        </div>
      </Section>
    </>
  );
}
