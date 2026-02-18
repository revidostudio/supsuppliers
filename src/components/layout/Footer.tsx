import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  return (
    <>
      {/* Brochure CTA Section */}
      <section className="py-24 bg-accent" id="brochure-aanvragen">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-black text-h2 text-text-on-accent mb-4">
              {t("footer.brochureTitle")}
            </h2>
            <p className="text-text-on-accent/70 text-body-lg mb-8 max-w-xl mx-auto">
              {t("footer.brochureSubtitle", {
                defaultMessage: "",
              })}
            </p>

            {/* USP Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {[
                t("usps.laagdrempeligContact"),
                t("usps.hoogwaardigeKwaliteit"),
                t("usps.korteLevertijden"),
                t("usps.lageAfnames"),
                t("usps.productenOpMaat"),
                t("usps.ontzorgtAZ"),
              ].map((usp) => (
                <span
                  key={usp}
                  className="bg-black/10 text-text-on-accent text-xs font-accent font-medium px-3.5 py-1.5 rounded-full tracking-wide"
                >
                  {usp}
                </span>
              ))}
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder={t("footer.firstName")}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-text-body placeholder:text-text-muted text-sm focus:ring-2 focus:ring-black/20 focus:bg-white outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder={t("footer.lastName")}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-text-body placeholder:text-text-muted text-sm focus:ring-2 focus:ring-black/20 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <input
                  type="email"
                  placeholder={t("footer.email")}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-text-body placeholder:text-text-muted text-sm focus:ring-2 focus:ring-black/20 focus:bg-white outline-none transition-all"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-surface-black text-text-on-dark px-8 py-3 rounded-lg font-accent font-semibold text-sm hover:bg-surface-dark transition-colors whitespace-nowrap"
                >
                  {t("footer.brochureBtn")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-white">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand & Social */}
            <div>
              <Link
                href="/"
                className="text-2xl font-heading font-black tracking-tight block mb-5"
              >
                Sup<span className="text-accent">suppliers</span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {t("footer.tagline", {
                  defaultMessage:
                    "Jouw partner in supplementen met eigen merk.",
                })}
              </p>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors duration-200 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Eigen merk opzetten */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-5 text-white">
                {t("footer.eigenMerk")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/white-of-private-label"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("nav.whiteOfPrivateLabel")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/producten-samples"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("nav.productenSamples")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/design"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("nav.design")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/labels"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("nav.labels")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shakebekers-drinkflessen"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("nav.shakebekersDrinkflessen")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stappenplan"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("nav.stappenplan")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-5 text-white">
                {t("footer.contactTitle")}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5 text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  <span>{COMPANY.address}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-accent" />
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center gap-2.5 text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-accent" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="text-white/30 pt-1 text-xs">
                  KVK: {COMPANY.kvk}
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-5 text-white">
                Legal
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/voorwaarden"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacybeleid"
                    className="text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <span>
              &copy; {new Date().getFullYear()} Supsuppliers.{" "}
              {t("footer.allRightsReserved")}
            </span>
            <span>{t("footer.copyright")}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
