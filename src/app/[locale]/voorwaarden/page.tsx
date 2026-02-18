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
  const t = await getTranslations({ locale, namespace: "voorwaarden" });
  return { title: t("title") };
}

export default async function VoorwaardenPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VoorwaardenContent />;
}

function VoorwaardenContent() {
  const t = useTranslations("voorwaarden");

  return (
    <>
      <PageHero title={t("title")} description={t("subtitle")} />

      <Section bg="white" spacing="lg">
        <div className="max-w-3xl">
          <p className="text-sm text-text-muted mb-16">{t("lastUpdated")}</p>

          {/* Artikel 1 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 1 — Definities
            </h2>
            <p className="text-text-body leading-relaxed mb-4">
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-body leading-relaxed">
              <li>
                <strong>Supsuppliers:</strong> {COMPANY.name} B.V., gevestigd te
                Duiven, KVK-nummer {COMPANY.kvk}.
              </li>
              <li>
                <strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon
                die aan Supsuppliers een opdracht heeft verstrekt.
              </li>
              <li>
                <strong>Overeenkomst:</strong> de overeenkomst tussen
                Supsuppliers en de opdrachtgever.
              </li>
            </ul>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* Artikel 2 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 2 — Toepasselijkheid
            </h2>
            <p className="text-text-body leading-relaxed">
              Deze algemene voorwaarden zijn van toepassing op alle
              aanbiedingen, offertes, en overeenkomsten van Supsuppliers. Door
              het plaatsen van een bestelling gaat de opdrachtgever akkoord met
              deze voorwaarden.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* Artikel 3 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 3 — Offertes en aanbiedingen
            </h2>
            <p className="text-text-body leading-relaxed">
              Alle offertes en aanbiedingen van Supsuppliers zijn vrijblijvend,
              tenzij uitdrukkelijk anders is vermeld. Een offerte is geldig
              gedurende 30 dagen na dagtekening.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* Artikel 4 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 4 — Levering
            </h2>
            <p className="text-text-body leading-relaxed">
              Supsuppliers streeft ernaar bestellingen binnen 5 werkdagen te
              verzenden na ontvangst van betaling en labels. Genoemde levertijden
              zijn indicatief en gelden niet als fatale termijn.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* Artikel 5 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 5 — Betaling
            </h2>
            <p className="text-text-body leading-relaxed">
              Betaling dient te geschieden binnen 14 dagen na factuurdatum,
              tenzij anders overeengekomen. Bij niet-tijdige betaling is de
              opdrachtgever van rechtswege in verzuim.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* Artikel 6 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 6 — Aansprakelijkheid
            </h2>
            <p className="text-text-body leading-relaxed">
              De aansprakelijkheid van Supsuppliers is beperkt tot het
              factuurbedrag van de betreffende bestelling. Supsuppliers is niet
              aansprakelijk voor indirecte schade.
            </p>
          </article>

          <hr className="border-t border-border/50 my-12" />

          {/* Artikel 7 */}
          <article>
            <h2 className="font-heading font-bold text-xl text-text-primary mb-4">
              Artikel 7 — Toepasselijk recht
            </h2>
            <p className="text-text-body leading-relaxed">
              Op alle overeenkomsten tussen Supsuppliers en de opdrachtgever is
              Nederlands recht van toepassing. Geschillen worden voorgelegd aan
              de bevoegde rechter in het arrondissement Gelderland.
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
