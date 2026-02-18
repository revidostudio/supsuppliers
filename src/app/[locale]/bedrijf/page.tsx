import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bedrijf" });
  return { title: t("title"), description: t("intro") };
}

export default async function BedrijfPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BedrijfContent />;
}

function BedrijfContent() {
  const t = useTranslations("bedrijf");
  const cta = useTranslations("cta");

  const whyItems = t("whyItems").split("|");

  return (
    <>
      <PageHero tag={t("title")} title={t("subtitle")} description={t("intro")} />

      {/* Mission & What We Do */}
      <Section bg="white" spacing="lg">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <h2 className="font-heading font-black text-h2 text-text-primary mb-4">
              {t("missionTitle")}
            </h2>
            <p className="text-text-body leading-relaxed text-lg">
              {t("missionDesc")}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="font-heading font-black text-h2 text-text-primary mb-4">
              {t("whatWeDoTitle")}
            </h2>
            <p className="text-text-body leading-relaxed text-lg">
              {t("whatWeDoDesc")}
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Why Supsuppliers */}
      <Section bg="gray" spacing="lg">
        <SectionHeader title={t("whyTitle")} align="center" />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-12">
          {whyItems.map((item) => (
            <StaggerItem key={item}>
              <div className="bg-surface-primary rounded-xl p-6 text-center shadow-card h-full">
                <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 text-text-on-accent" strokeWidth={3} />
                </span>
                <p className="font-accent font-medium text-sm text-text-primary">
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* CTA */}
      <CTASection
        title={cta("requestQuote")}
        buttonText={cta("requestQuote")}
        href="/offerte-aanvragen"
      />
    </>
  );
}
