import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  Package,
  Search,
  Palette,
  Printer,
  FileText,
  MessageCircle,
  Settings,
  Truck,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import FadeIn from "@/components/motion/FadeIn";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "stappenplan" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function StappenplanPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StappenplanContent />;
}

function StappenplanContent() {
  const t = useTranslations("stappenplan");
  const cta = useTranslations("cta");

  const steps: { title: string; desc: string; icon: LucideIcon }[] = [
    { title: t("step1Title"), desc: t("step1Desc"), icon: Package },
    { title: t("step2Title"), desc: t("step2Desc"), icon: Search },
    { title: t("step3Title"), desc: t("step3Desc"), icon: Palette },
    { title: t("step4Title"), desc: t("step4Desc"), icon: Printer },
    { title: t("step5Title"), desc: t("step5Desc"), icon: FileText },
    { title: t("step6Title"), desc: t("step6Desc"), icon: MessageCircle },
    { title: t("step7Title"), desc: t("step7Desc"), icon: Settings },
    { title: t("step8Title"), desc: t("step8Desc"), icon: Truck },
  ];

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
      />

      <Section bg="white" spacing="lg">
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative flex gap-6 pb-14 last:pb-0">
                  {/* Vertical timeline line */}
                  {!isLast && (
                    <div className="absolute left-6 top-14 w-px h-[calc(100%-3.5rem)] bg-border" />
                  )}

                  {/* Numbered accent circle */}
                  <div className="w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center font-heading font-black text-base shrink-0 relative z-10">
                    {i + 1}
                  </div>

                  {/* Step content */}
                  <div className="pt-0.5">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                      <h3 className="font-heading font-bold text-lg text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <CTASection
        title={cta("requestQuote")}
        buttonText={cta("requestQuote")}
        href="/offerte-aanvragen"
        variant="accent"
      />
    </>
  );
}
