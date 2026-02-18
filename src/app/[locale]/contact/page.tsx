import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MapPin, Mail, Phone, Building2, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { InputField, TextAreaField } from "@/components/ui/FormField";
import FadeIn from "@/components/motion/FadeIn";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("intro") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");

  return (
    <>
      <PageHero tag={t("title")} title={t("subtitle")} description={t("intro")} />

      <Section bg="white" spacing="lg">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            <h2 className="font-heading font-black text-h3 text-text-primary mb-8">
              {t("formTitle")}
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField label={t("firstName")} />
                <InputField label={t("lastName")} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label={t("email")} type="email" />
                <InputField label={t("phone")} type="tel" />
              </div>
              <InputField label={t("company")} />
              <InputField label={t("subject")} />
              <TextAreaField label={t("message")} rows={5} />
              <button
                type="button"
                className="bg-accent text-text-on-accent px-8 py-3 rounded-lg font-accent font-medium hover:bg-accent-hover transition-colors"
              >
                {t("send")}
              </button>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <h2 className="font-heading font-black text-h3 text-text-primary mb-8">
              {t("infoTitle")}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-accent font-medium text-text-primary mb-1">
                    {t("visitTitle")}
                  </h3>
                  <p className="text-text-body text-sm">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-accent font-medium text-text-primary mb-1">
                    E-mail
                  </h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-accent hover:text-accent-hover transition-colors text-sm"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-accent font-medium text-text-primary mb-1">
                    {t("phone")}
                  </h3>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-accent hover:text-accent-hover transition-colors text-sm"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-accent font-medium text-text-primary mb-1">
                    KVK
                  </h3>
                  <p className="text-text-body text-sm">{COMPANY.kvk}</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-accent font-medium hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
