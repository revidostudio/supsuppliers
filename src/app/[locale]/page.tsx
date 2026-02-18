import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Tag,
  Package,
  TrendingDown,
  BadgeCheck,
  Palette,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import Section from "@/components/ui/Section";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "nl"
        ? "Supsuppliers | Uw Partner in Supplementen & Private Label"
        : "Supsuppliers | Your Partner in Supplements & Private Label",
    description:
      locale === "nl"
        ? "Supsuppliers is de Nederlandse leverancier van poedervormige voeding en voedingssupplementen. White label & private label, lage afname, FSSC22000 gecertificeerd."
        : "Supsuppliers is the Dutch supplier of powdered nutrition and dietary supplements. White label & private label, low minimum orders, FSSC22000 certified.",
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations();
  const locale = useLocale();
  const isNl = locale === "nl";

  const usps = [
    {
      icon: Tag,
      nl: "Private label",
      en: "Private label",
      sub: { nl: "(op maat)", en: "(custom)" },
    },
    {
      icon: Package,
      nl: "White label",
      en: "White label",
      sub: { nl: "(vanuit voorraad)", en: "(from stock)" },
    },
    {
      icon: TrendingDown,
      nl: "Lage afname",
      en: "Low MOQ",
      sub: { nl: "", en: "" },
    },
    {
      icon: BadgeCheck,
      nl: "Hoogwaardige kwaliteit",
      en: "Premium quality",
      sub: { nl: "", en: "" },
    },
    {
      icon: Palette,
      nl: "Design op maat",
      en: "Custom design",
      sub: { nl: "", en: "" },
    },
    {
      icon: MessageCircle,
      nl: "Laagdrempelig contact",
      en: "Easy contact",
      sub: { nl: "", en: "" },
    },
  ];

  const steps = isNl
    ? [
        "Samples bestellen",
        "Productkeuze",
        "Labeldesign",
        "Offerte",
        "Levering",
      ]
    : [
        "Order samples",
        "Product selection",
        "Label design",
        "Quote",
        "Delivery",
      ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-surface-black text-text-on-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-accent/5" />
        <div className="container-site py-28 lg:py-40 relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-accent font-accent font-semibold uppercase tracking-[0.2em] text-sm mb-6">
                {isNl
                  ? "Nederlandse supplementen leverancier"
                  : "Dutch supplement supplier"}
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <h1 className="font-heading font-black text-h1 lg:text-display leading-[1.05] mb-8">
                {isNl ? (
                  <>
                    Uw partner in{" "}
                    <span className="text-accent">supplementen</span> &{" "}
                    <span className="text-accent">private label</span>
                  </>
                ) : (
                  <>
                    Your partner in{" "}
                    <span className="text-accent">supplements</span> &{" "}
                    <span className="text-accent">private label</span>
                  </>
                )}
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.35}>
              <p className="text-body-lg text-text-muted mb-12 leading-relaxed max-w-2xl">
                {isNl
                  ? "Supsuppliers is de Nederlandse leverancier van poedervormige voeding en voedingssupplementen. White label & private label, lage afname, FSSC22000 gecertificeerd."
                  : "Supsuppliers is the Dutch supplier of powdered nutrition and dietary supplements. White label & private label, low minimum orders, FSSC22000 certified."}
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/offerte-aanvragen"
                  className="inline-flex items-center gap-2 bg-accent text-text-on-accent px-8 py-4 rounded-lg font-accent font-semibold text-base hover:bg-accent-hover transition-all hover:gap-3"
                >
                  {t("cta.requestQuote")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bedrijf"
                  className="border border-white/20 text-text-on-dark px-8 py-4 rounded-lg font-accent font-medium text-base hover:border-accent hover:text-accent transition-colors"
                >
                  {t("cta.moreAbout")}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── USP Cards ── */}
      <Section bg="white" spacing="md">
        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          staggerDelay={0.07}
        >
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <StaggerItem
                key={i}
                className="border border-black/[0.06] rounded-xl p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-sm text-text-primary leading-tight">
                  {isNl ? usp.nl : usp.en}
                </h3>
                {usp.sub[locale as "nl" | "en"] && (
                  <p className="text-xs text-text-muted mt-1">
                    {usp.sub[locale as "nl" | "en"]}
                  </p>
                )}
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* ── 5 Steps ── */}
      <Section bg="gray" spacing="lg">
        <div className="text-center">
          <FadeIn>
            <h2 className="font-heading font-black text-h2 lg:text-h1 text-text-primary mb-2">
              {isNl ? "In 5 stappen uw eigen" : "Your own supplement line"}
            </h2>
            <h2 className="font-heading font-black text-h2 lg:text-h1 text-accent mb-14">
              {isNl ? "SUPPLEMENTENLIJN" : "IN 5 STEPS"}
            </h2>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-14"
            staggerDelay={0.1}
          >
            {steps.map((step, i) => (
              <StaggerItem
                key={i}
                className="bg-surface-primary rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-11 h-11 bg-accent text-text-on-accent rounded-full flex items-center justify-center font-heading font-black text-lg mb-4 mx-auto">
                  {i + 1}
                </div>
                <p className="font-accent font-medium text-sm text-text-primary">
                  {step}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.6}>
            <Link
              href="/offerte-aanvragen"
              className="inline-flex items-center gap-2 bg-accent text-text-on-accent px-10 py-4 rounded-lg font-accent font-semibold text-base hover:bg-accent-hover transition-all hover:gap-3"
            >
              {t("cta.requestQuote")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* ── About ── */}
      <Section bg="white" spacing="lg">
        <FadeIn className="max-w-3xl" direction="left">
          <p className="text-accent font-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            {isNl ? "Over" : "About"}
          </p>
          <h2 className="font-heading font-black text-h1 text-text-primary mb-8">
            SUPSUPPLIERS
          </h2>
          <p className="text-body-lg text-text-body leading-relaxed mb-10">
            {isNl
              ? "Supsuppliers is de Nederlandse leverancier van poedervormige voeding en voedingssupplementen. Supsuppliers biedt de mogelijkheid tot het realiseren van een private-label en staat aan de basis van de ontwikkeling, productie en verpakking van o.a: Wei-eiwitshakes, maaltijdshakes (Soylent), pre-workouts, post-workouts, BCAA's, creatine, plantaardige eiwitproducten, weight-gainers enz."
              : "Supsuppliers is the Dutch supplier of powdered nutrition and dietary supplements. Supsuppliers offers the possibility to create a private label and is the foundation for the development, production and packaging of: Whey protein shakes, meal shakes, pre-workouts, post-workouts, BCAAs, creatine, plant-based protein products, weight gainers, and more."}
          </p>
          <Link
            href="/bedrijf"
            className="inline-flex items-center gap-2 border-2 border-text-primary text-text-primary px-8 py-3 rounded-lg font-accent font-semibold hover:bg-text-primary hover:text-text-on-dark transition-colors"
          >
            {t("cta.moreAbout")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </Section>

      {/* ── Partners ── */}
      <Section bg="gray" spacing="sm">
        <FadeIn>
          <h2 className="font-heading font-black text-h3 text-text-primary text-center mb-10 uppercase tracking-wide">
            {isNl ? "Onze partners" : "Our partners"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            {["PostNL", "Eshuis", "FSSC22000"].map((partner) => (
              <div
                key={partner}
                className="text-text-muted/40 font-heading font-bold text-xl tracking-wide select-none"
              >
                {partner}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ── Shaker & Bottle ── */}
      <Section bg="dark" spacing="lg">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn direction="left">
            <p className="text-accent font-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              {isNl ? "Merchandise" : "Merchandise"}
            </p>
            <h2 className="font-heading font-black text-h2 text-white mb-2">
              {isNl ? "Shakebeker" : "Shaker cup"}
            </h2>
            <h3 className="font-secondary text-h3 text-accent mb-6">
              {isNl ? "met jouw logo" : "with your logo"}
            </h3>
            <p className="text-text-muted leading-relaxed mb-8">
              {isNl
                ? "Geef jouw merk een extra boost door te kiezen voor bedrukte shakebekers. Wij leveren hoge kwaliteit bekers tegen een laag tarief met een snelle levertijd."
                : "Give your brand an extra boost by choosing custom printed shaker cups. We deliver high quality cups at a low rate with fast delivery."}
            </p>
            <Link
              href="/shakebekers-drinkflessen"
              className="inline-flex items-center gap-2 bg-accent text-text-on-accent px-6 py-3 rounded-lg font-accent font-semibold hover:bg-accent-hover transition-all hover:gap-3"
            >
              {t("cta.requestSample")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <FadeIn direction="right">
            <p className="text-accent font-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              {isNl ? "Merchandise" : "Merchandise"}
            </p>
            <h2 className="font-heading font-black text-h2 text-white mb-2">
              {isNl ? "Drinkfles" : "Drink bottle"}
            </h2>
            <h3 className="font-secondary text-h3 text-accent mb-6">
              {isNl ? "met jouw logo" : "with your logo"}
            </h3>
            <p className="text-text-muted leading-relaxed mb-8">
              {isNl
                ? "Onze drinkflessen zijn gemaakt van duurzaam BPA-vrij titran. We bieden scherpe prijzen en snelle levering voor gepersonaliseerde drinkflessen."
                : "Our drink bottles are made from durable BPA-free titan. We offer sharp prices and fast delivery for personalized drink bottles."}
            </p>
            <Link
              href="/shakebekers-drinkflessen"
              className="inline-flex items-center gap-2 bg-accent text-text-on-accent px-6 py-3 rounded-lg font-accent font-semibold hover:bg-accent-hover transition-all hover:gap-3"
            >
              {t("cta.requestSample")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
