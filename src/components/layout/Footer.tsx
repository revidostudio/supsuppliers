import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  return (
    <>
      {/* Brochure CTA Section */}
      <section className="py-24 bg-[#5BCEE0]" id="brochure-aanvragen">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-h2 uppercase text-[#0a0a0a] mb-4">
              {t("footer.brochureTitle")}
            </h2>
            <p className="text-[#0a0a0a]/60 font-body text-body-lg mb-8 max-w-xl mx-auto">
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
                  className="bg-[#0a0a0a]/10 text-[#0a0a0a] text-xs font-body font-medium px-3.5 py-1.5 rounded-full tracking-wide"
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
                  className="flex-1 px-4 py-3 rounded-md bg-white text-[#0a0a0a] placeholder:text-[#9ca3af] font-body text-sm focus:ring-2 focus:ring-[#0a0a0a]/20 focus:bg-white outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder={t("footer.lastName")}
                  className="flex-1 px-4 py-3 rounded-md bg-white text-[#0a0a0a] placeholder:text-[#9ca3af] font-body text-sm focus:ring-2 focus:ring-[#0a0a0a]/20 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <input
                  type="email"
                  placeholder={t("footer.email")}
                  className="flex-1 px-4 py-3 rounded-md bg-white text-[#0a0a0a] placeholder:text-[#9ca3af] font-body text-sm focus:ring-2 focus:ring-[#0a0a0a]/20 focus:bg-white outline-none transition-all"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-8 py-3 rounded-md font-body font-semibold text-sm hover:bg-[#1a1a1a] transition-colors whitespace-nowrap"
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
      <footer className="bg-[#0a0a0a] text-white">
        <div className="container-site py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand & Social */}
            <div>
              <Link
                href="/"
                className="inline-block mb-5"
              >
                <span className="font-display text-xl font-black tracking-tight uppercase">
                  Sup<span className="text-[#5BCEE0]">suppliers</span>
                </span>
              </Link>
              <p className="text-white/40 font-body text-sm leading-relaxed mb-5">
                {t("footer.tagline", {
                  defaultMessage:
                    "Jouw partner in supplementen met eigen merk.",
                })}
              </p>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-[#5BCEE0] transition-colors duration-200 text-sm font-body"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Eigen merk opzetten */}
            <div>
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-5 text-white/60">
                {t("footer.eigenMerk")}
              </h3>
              <ul className="space-y-3 text-sm font-body">
                <li>
                  <Link
                    href="/white-of-private-label"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("nav.whiteOfPrivateLabel")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/producten-samples"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("nav.productenSamples")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/design"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("nav.design")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/labels"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("nav.labels")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shakebekers-drinkflessen"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("nav.shakebekersDrinkflessen")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stappenplan"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("nav.stappenplan")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-5 text-white/60">
                {t("footer.contactTitle")}
              </h3>
              <ul className="space-y-3 text-sm font-body">
                <li className="flex items-start gap-2.5 text-white/40">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#5BCEE0]" />
                  <span>{COMPANY.address}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-2.5 text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[#5BCEE0]" />
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center gap-2.5 text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-[#5BCEE0]" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="text-white/20 pt-1 text-xs">
                  KVK: {COMPANY.kvk}
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-5 text-white/60">
                Legal
              </h3>
              <ul className="space-y-3 text-sm font-body">
                <li>
                  <Link
                    href="/voorwaarden"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacybeleid"
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-200"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25 font-body">
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
