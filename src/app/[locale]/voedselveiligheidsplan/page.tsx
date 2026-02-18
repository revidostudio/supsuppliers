import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Shield, ClipboardCheck, BadgeCheck, Search } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import IconCard from "@/components/ui/IconCard";
import CTASection from "@/components/ui/CTASection";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "voedselveiligheid" });
  return { title: t("title"), description: t("intro") };
}

export default async function VoedselveiligheidsplanPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VoedselveiligheidContent />;
}

function VoedselveiligheidContent() {
  const t = useTranslations("voedselveiligheid");
  const cta = useTranslations("cta");

  const certifications = [
    { key: "haccp" as const, icon: Shield },
    { key: "iso" as const, icon: ClipboardCheck },
    { key: "fssc" as const, icon: BadgeCheck },
    { key: "traceability" as const, icon: Search },
  ];

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
        description={t("intro")}
      />

      <Section bg="white" spacing="lg">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {certifications.map(({ key, icon }) => (
            <IconCard key={key} icon={icon} title={t(key)} />
          ))}
        </StaggerChildren>

        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <SectionHeader
              title={t("whatTitle")}
              subtitle={t("whatDesc")}
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <SectionHeader
              title={t("whyTitle")}
              subtitle={t("whyDesc")}
            />
          </FadeIn>
        </div>
      </Section>

      <CTASection
        title={cta("requestQuote")}
        buttonText={cta("requestQuote")}
        href="/offerte-aanvragen"
      />
    </>
  );
}
