import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { COMPANY } from "@/lib/constants";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacybeleid" });
  return { title: t("title") };
}

export default async function PrivacybeleidPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacybeleidContent />;
}

function PrivacybeleidContent() {
  const t = useTranslations("privacybeleid");

  return (
    <>
      <PageHero title={t("title")} description={t("subtitle")} />

      <Section bg="white" spacing="lg">
        <div className="max-w-3xl">
          <p className="text-sm text-text-muted mb-16">{t("lastUpdated")}</p>

          {/* 1. Verantwoordelijke */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              1. Verantwoordelijke
            </h2>
            <p className="text-text-body leading-relaxed">
              {COMPANY.name} B.V., gevestigd aan {COMPANY.address}, is
              verantwoordelijk voor de verwerking van persoonsgegevens zoals
              weergegeven in deze privacyverklaring.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 2. Persoonsgegevens */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              2. Persoonsgegevens die wij verwerken
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              {COMPANY.name} verwerkt persoonsgegevens doordat u gebruik maakt
              van onze diensten en/of omdat u deze zelf aan ons verstrekt.
              Hieronder vindt u een overzicht:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-body leading-relaxed">
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Bedrijfsnaam</li>
              <li>Adresgegevens</li>
              <li>Overige gegevens die u actief verstrekt</li>
            </ul>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 3. Doel */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              3. Doel van de gegevensverwerking
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              Wij verwerken uw persoonsgegevens voor de volgende doelen:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-body leading-relaxed">
              <li>Het afhandelen van uw betaling en bestelling</li>
              <li>
                U te kunnen bellen of e-mailen over onze dienstverlening
              </li>
              <li>U te informeren over wijzigingen van onze diensten</li>
              <li>Het verzenden van onze nieuwsbrief en/of brochure</li>
            </ul>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 4. Bewaartermijn */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              4. Bewaartermijn
            </h2>
            <p className="text-text-body leading-relaxed">
              Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk
              is om de doelen te realiseren waarvoor uw gegevens worden
              verzameld.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 5. Delen met derden */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              5. Delen met derden
            </h2>
            <p className="text-text-body leading-relaxed">
              {COMPANY.name} verstrekt uitsluitend persoonsgegevens aan derden
              als dit nodig is voor de uitvoering van onze overeenkomst met u of
              om te voldoen aan een wettelijke verplichting.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 6. Cookies */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              6. Cookies
            </h2>
            <p className="text-text-body leading-relaxed">
              Onze website maakt gebruik van functionele en analytische cookies om
              de werking van de website te optimaliseren.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 7. Uw rechten */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              7. Uw rechten
            </h2>
            <p className="text-text-body leading-relaxed">
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren
              of te verwijderen. U kunt een verzoek indienen via{" "}
              {COMPANY.email}.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* 8. Contact */}
          <article>
            <h2 className="font-display font-bold text-xl text-text-primary mb-4 uppercase">
              8. Contact
            </h2>
            <p className="text-text-body leading-relaxed">
              Als u vragen heeft over deze privacyverklaring, neem dan contact
              met ons op via {COMPANY.email} of {COMPANY.phone}.
            </p>
          </article>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-text-muted">
              {COMPANY.name} B.V. | {COMPANY.address} | KVK: {COMPANY.kvk}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
