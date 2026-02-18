"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

export default function HomeFooter() {
  const t = useTranslations();
  const locale = useLocale();
  const isNl = locale === "nl";

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1a1a1a]">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <span className="font-display text-xl font-black tracking-tight uppercase">
                Sup<span className="text-[#5BCEE0]">suppliers</span>
              </span>
            </Link>
            <p className="text-white/40 font-body text-sm leading-relaxed mb-5 max-w-xs">
              {isNl
                ? "Uw partner in supplementen & private label. Gevestigd in Duiven, Nederland."
                : "Your partner in supplements & private label. Based in Duiven, Netherlands."}
            </p>
            <a
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#5BCEE0] transition-colors duration-300 text-sm font-body"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-5 text-white/60">
              {isNl ? "Navigatie" : "Navigation"}
            </h3>
            <ul className="space-y-3 text-sm font-body">
              {[
                { href: "/producten-samples" as const, label: isNl ? "Producten & Samples" : "Products & Samples" },
                { href: "/white-of-private-label" as const, label: isNl ? "White of Private label" : "White or Private label" },
                { href: "/stappenplan" as const, label: isNl ? "Stappenplan" : "Step-by-step" },
                { href: "/design" as const, label: "Design" },
                { href: "/labels" as const, label: "Labels" },
                { href: "/bedrijf" as const, label: isNl ? "Bedrijf" : "Company" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-[#5BCEE0] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-5 text-white/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm font-body">
              <li className="flex items-start gap-2.5 text-white/40">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#5BCEE0]" />
                <span>{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 text-white/40 hover:text-[#5BCEE0] transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#5BCEE0]" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white/40 hover:text-[#5BCEE0] transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#5BCEE0]" />
                  {COMPANY.phone}
                </a>
              </li>
              <li className="pt-3 space-y-2">
                <Link
                  href="/voorwaarden"
                  className="block text-white/30 hover:text-[#5BCEE0] transition-colors duration-300 text-xs"
                >
                  {t("footer.terms")}
                </Link>
                <Link
                  href="/privacybeleid"
                  className="block text-white/30 hover:text-[#5BCEE0] transition-colors duration-300 text-xs"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container-site py-6 text-center">
          <span className="font-body text-xs text-white/25">
            &copy; {new Date().getFullYear()} Supsuppliers. {t("footer.allRightsReserved")}
          </span>
        </div>
      </div>
    </footer>
  );
}
