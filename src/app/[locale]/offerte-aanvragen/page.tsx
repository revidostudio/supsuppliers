import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { InputField, SelectField, TextAreaField } from "@/components/ui/FormField";
import FadeIn from "@/components/motion/FadeIn";

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

  const productTypes = t("productTypes").split("|");
  const labelTypes = t("labelTypes").split("|");

  return (
    <>
      <PageHero tag={t("title")} title={t("subtitle")} description={t("intro")} />

      <Section bg="white" spacing="lg">
        <div className="max-w-3xl mx-auto">
          {/* Personal Info Card */}
          <FadeIn>
            <div className="bg-surface-secondary rounded-2xl p-6 lg:p-8 mb-8">
              <h2 className="font-heading font-black text-h3 text-text-primary mb-6">
                {t("personalTitle")}
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <InputField label={t("firstName")} required />
                  <InputField label={t("lastName")} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField label={t("email")} type="email" required />
                  <InputField label={t("phone")} type="tel" />
                </div>
                <InputField label={t("company")} />
              </div>
            </div>
          </FadeIn>

          {/* Product Info Card */}
          <FadeIn delay={0.1}>
            <div className="bg-surface-secondary rounded-2xl p-6 lg:p-8 mb-8">
              <h2 className="font-heading font-black text-h3 text-text-primary mb-6">
                {t("productTitle")}
              </h2>
              <div className="space-y-4">
                <SelectField
                  label={t("productType")}
                  options={productTypes}
                  required
                />
                <SelectField
                  label={t("labelType")}
                  options={labelTypes}
                  required
                />
                <InputField label={t("quantity")} />
                <TextAreaField label={t("remarks")} rows={4} />
              </div>
            </div>
          </FadeIn>

          {/* Submit */}
          <FadeIn delay={0.2}>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 bg-accent text-text-on-accent py-4 rounded-lg font-accent font-medium text-lg hover:bg-accent-hover transition-all hover:gap-3"
            >
              {t("send")}
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-text-muted mt-4 text-center">
              {t("disclaimer")}
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
