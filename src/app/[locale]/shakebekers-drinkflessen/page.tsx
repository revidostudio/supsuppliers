import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GlassWater, Droplets, ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "shakebekers" });
  return { title: t("title"), description: t("intro") };
}

export default async function ShakebekersDrinkflessenPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ShakebekersContent />;
}

function ShakebekersContent() {
  const t = useTranslations("shakebekers");
  const cta = useTranslations("cta");

  const products = [
    {
      icon: GlassWater,
      title: t("shakerTitle"),
      desc: t("shakerDesc"),
    },
    {
      icon: Droplets,
      title: t("bottleTitle"),
      desc: t("bottleDesc"),
    },
  ];

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
        description={t("intro")}
      />

      {/* Products */}
      <Section bg="white" spacing="lg">
        <div className="grid md:grid-cols-2 gap-16">
          {products.map((product, i) => (
            <FadeIn key={product.title} delay={i * 0.15}>
              <div className="bg-surface-secondary rounded-2xl aspect-square flex items-center justify-center mb-8">
                <product.icon className="w-20 h-20 text-accent" strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-black text-h2 text-text-primary mb-4">
                {product.title}
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                {product.desc}
              </p>
              <Link
                href="/offerte-aanvragen"
                className="inline-flex items-center gap-2 bg-accent text-black px-8 py-3 rounded-lg font-accent font-medium hover:bg-accent-hover transition-all hover:gap-3"
              >
                {cta("requestSample")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="gray" spacing="md">
        <SectionHeader
          title={t("benefitsTitle")}
          align="center"
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
          {t("benefits")
            .split("|")
            .map((benefit) => (
              <StaggerItem key={benefit}>
                <div className="bg-surface-primary rounded-xl p-5 text-center shadow-card h-full">
                  <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-4 h-4 text-black" strokeWidth={3} />
                  </span>
                  <p className="font-accent font-medium text-sm text-text-primary">
                    {benefit}
                  </p>
                </div>
              </StaggerItem>
            ))}
        </StaggerChildren>
      </Section>
    </>
  );
}
