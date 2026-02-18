import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Package, Truck, Factory } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import IconCard from "@/components/ui/IconCard";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "overigeInfo" });
  return { title: t("title"), description: t("deliveryDesc") };
}

export default async function OverigeInformatiePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OverigeInfoContent />;
}

function OverigeInfoContent() {
  const t = useTranslations("overigeInfo");

  const shippingMethods = [
    { icon: Package, titleKey: "postnlTitle" as const, descKey: "postnlDesc" as const },
    { icon: Truck, titleKey: "transportTitle" as const, descKey: "transportDesc" as const },
    { icon: Factory, titleKey: "pickupTitle" as const, descKey: "pickupDesc" as const },
  ];

  return (
    <>
      <PageHero
        tag={t("title")}
        title={t("subtitle")}
      />

      <Section bg="white" spacing="lg">
        <div className="max-w-3xl">
          <SectionHeader
            title={t("deliveryTitle")}
            subtitle={t("deliveryDesc")}
          />
        </div>
      </Section>

      <Section bg="gray" spacing="lg">
        <SectionHeader title={t("shippingTitle")} />
        <StaggerChildren className="grid md:grid-cols-3 gap-8 mt-12">
          {shippingMethods.map(({ icon, titleKey, descKey }) => (
            <IconCard
              key={titleKey}
              icon={icon}
              title={t(titleKey)}
              description={t(descKey)}
            />
          ))}
        </StaggerChildren>
      </Section>

      <Section bg="white" spacing="lg">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionHeader
              title={t("packingTitle")}
              subtitle={t("packingDesc")}
            />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
