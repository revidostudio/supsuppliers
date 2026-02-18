import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "design" });
  return { title: t("title"), description: t("intro") };
}

export default async function DesignPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DesignContent />;
}

function DesignContent() {
  const t = useTranslations("design");
  const cta = useTranslations("cta");

  const tiers = [
    {
      title: t("basicTitle"),
      price: t("basicPrice"),
      desc: t("basicDesc"),
      features: t("basicFeatures").split("|"),
      highlight: false,
    },
    {
      title: t("standardTitle"),
      price: t("standardPrice"),
      desc: t("standardDesc"),
      features: t("standardFeatures").split("|"),
      highlight: true,
    },
    {
      title: t("premiumTitle"),
      price: t("premiumPrice"),
      desc: t("premiumDesc"),
      features: t("premiumFeatures").split("|"),
      highlight: false,
    },
  ];

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
        description={t("intro")}
      />

      {/* Pricing Tiers */}
      <Section bg="white" spacing="lg">
        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <StaggerItem key={tier.title}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlight
                    ? "bg-surface-black text-text-on-dark ring-2 ring-accent"
                    : "bg-surface-secondary text-text-primary"
                }`}
              >
                <h3 className="font-heading font-bold text-h4 mb-2">
                  {tier.title}
                </h3>
                <p className="text-h1 font-heading font-black text-accent mb-4">
                  {tier.price}
                </p>
                <p
                  className={`leading-relaxed mb-6 ${
                    tier.highlight ? "text-white/60" : "text-text-body"
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-5 h-5 mt-0.5 bg-accent rounded-full flex items-center justify-center shrink-0">
                        <Check
                          className="w-3 h-3 text-black"
                          strokeWidth={3}
                        />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          tier.highlight ? "text-white/80" : "text-text-body"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/offerte-aanvragen"
                  className={`block text-center px-6 py-3 rounded-lg font-accent font-medium transition-colors ${
                    tier.highlight
                      ? "bg-accent text-black hover:bg-accent-hover"
                      : "border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-text-on-dark"
                  }`}
                >
                  {cta("requestQuote")}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Additional Services */}
      <CTASection
        title={t("extraTitle")}
        description={t("extraDesc")}
        buttonText={cta("contactUs")}
        href="/contact"
      />
    </>
  );
}
