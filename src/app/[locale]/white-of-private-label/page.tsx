import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Package, Tag } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CheckList from "@/components/ui/CheckList";
import CTASection from "@/components/ui/CTASection";
import FadeIn from "@/components/motion/FadeIn";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whitePrivateLabel" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function WhitePrivateLabelPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WhitePrivateLabelContent />;
}

function WhitePrivateLabelContent() {
  const t = useTranslations("whitePrivateLabel");
  const cta = useTranslations("cta");

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
        description={t("intro")}
      />

      {/* Comparison */}
      <Section bg="white" spacing="lg">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* White Label */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-surface-secondary rounded-2xl p-8 lg:p-10 border border-border h-full">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-black text-h2 text-text-primary mb-4">
                {t("whiteTitle")}
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                {t("whiteDesc")}
              </p>
              <CheckList items={t("whiteBenefits").split("|")} />
            </div>
          </FadeIn>

          {/* Private Label */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-surface-secondary rounded-2xl p-8 lg:p-10 border-2 border-accent h-full">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Tag className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-black text-h2 text-text-primary mb-4">
                {t("privateTitle")}
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                {t("privateDesc")}
              </p>
              <CheckList items={t("privateBenefits").split("|")} />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDesc")}
        buttonText={cta("requestQuote")}
        href="/offerte-aanvragen"
        variant="dark"
      />
    </>
  );
}
