import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "productenSamples" });
  return { title: t("title"), description: t("intro") };
}

export default async function ProductenSamplesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProductenSamplesContent />;
}

function ProductenSamplesContent() {
  const t = useTranslations("productenSamples");
  const cta = useTranslations("cta");

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
        description={t("intro")}
      />

      {/* Quality */}
      <Section bg="white" spacing="md">
        <div className="max-w-3xl">
          <SectionHeader
            title={t("qualityTitle")}
            subtitle={t("qualityDesc")}
          />
        </div>
      </Section>

      {/* Assortment */}
      <Section bg="gray" spacing="md">
        <SectionHeader
          title={t("assortmentTitle")}
          subtitle={t("assortmentDesc")}
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {t("assortmentItems")
            .split("|")
            .map((item) => (
              <StaggerItem key={item}>
                <div className="bg-surface-primary rounded-xl p-5 border border-border hover:border-accent/30 hover:-translate-y-0.5 transition-all">
                  <p className="font-body font-medium text-text-primary">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
        </StaggerChildren>
      </Section>

      {/* Packaging */}
      <Section bg="white" spacing="md">
        <div className="max-w-3xl">
          <SectionHeader
            title={t("packagingTitle")}
            subtitle={t("packagingDesc")}
          />
        </div>
      </Section>

      {/* Samples CTA */}
      <CTASection
        title={t("samplesTitle")}
        description={t("samplesDesc")}
        buttonText={cta("orderSamples")}
        href="/offerte-aanvragen"
        variant="accent"
      />
    </>
  );
}
