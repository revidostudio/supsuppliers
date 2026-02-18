import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import FadeIn from "@/components/motion/FadeIn";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "labels" });
  return { title: t("title"), description: t("intro") };
}

export default async function LabelsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LabelsContent />;
}

function LabelsContent() {
  const t = useTranslations("labels");
  const cta = useTranslations("cta");

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
        description={t("intro")}
      />

      {/* Partner */}
      <Section bg="white" spacing="lg">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <SectionHeader
              title={t("partnerTitle")}
              subtitle={t("partnerDesc")}
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-surface-secondary rounded-2xl p-12 flex items-center justify-center">
              <p className="text-h1 font-heading font-black text-text-muted/30">
                Eshuis
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Process */}
      <Section bg="gray" spacing="md">
        <div className="max-w-3xl">
          <SectionHeader
            title={t("processTitle")}
            subtitle={t("processDesc")}
          />
        </div>
      </Section>

      {/* Volume Discount */}
      <CTASection
        title={t("volumeTitle")}
        description={t("volumeDesc")}
        buttonText={cta("requestQuote")}
        href="/offerte-aanvragen"
        variant="accent"
      />
    </>
  );
}
