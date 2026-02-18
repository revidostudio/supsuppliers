"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const eigenMerkLinks = [
    { href: "/white-of-private-label" as const, label: t("whiteOfPrivateLabel") },
    { href: "/producten-samples" as const, label: t("productenSamples") },
    { href: "/voedselveiligheidsplan" as const, label: t("voedselveiligheidsplan") },
    { href: "/design" as const, label: t("design") },
    { href: "/labels" as const, label: t("labels") },
    { href: "/shakebekers-drinkflessen" as const, label: t("shakebekersDrinkflessen") },
    { href: "/overige-informatie" as const, label: t("overigeInformatie") },
    { href: "/stappenplan" as const, label: t("stappenplan") },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-surface-black text-text-on-dark sticky top-0 z-40">
      <div className="container-site flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-heading font-black tracking-tight shrink-0"
        >
          Sup<span className="text-accent">suppliers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-accent">
          <Link
            href="/"
            className="text-white/80 hover:text-accent transition-colors duration-200"
          >
            {t("home")}
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-white/80 hover:text-accent transition-colors duration-200">
              {t("products")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  activeDropdown === "products" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                activeDropdown === "products"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="bg-surface-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 min-w-[220px]">
                <Link
                  href="/white-of-private-label"
                  className="block px-5 py-2.5 text-sm text-white/70 hover:text-accent hover:bg-white/5 transition-colors duration-150"
                >
                  {t("whiteLabel")}
                </Link>
                <Link
                  href="/producten-samples"
                  className="block px-5 py-2.5 text-sm text-white/70 hover:text-accent hover:bg-white/5 transition-colors duration-150"
                >
                  {t("privateLabel")}
                </Link>
              </div>
            </div>
          </div>

          {/* Eigen Merk Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("eigen-merk")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-white/80 hover:text-accent transition-colors duration-200">
              {t("eigenMerk")}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  activeDropdown === "eigen-merk" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                activeDropdown === "eigen-merk"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="bg-surface-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 min-w-[260px]">
                {eigenMerkLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 text-sm text-white/70 hover:text-accent hover:bg-white/5 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/bedrijf"
            className="text-white/80 hover:text-accent transition-colors duration-200"
          >
            {t("bedrijf")}
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-accent transition-colors duration-200"
          >
            {t("contact")}
          </Link>

          <LanguageSwitcher />

          <Link
            href="/offerte-aanvragen"
            className="bg-accent text-text-on-accent px-6 py-2.5 rounded-lg font-medium hover:bg-accent-hover transition-colors duration-200"
          >
            {t("offerte")}
          </Link>
        </nav>

        {/* Mobile: Language + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white/80 hover:text-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-surface-black/98 backdrop-blur-lg z-50 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container-site py-8 space-y-1 overflow-y-auto max-h-full">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-white/80 hover:text-accent transition-colors duration-200 font-accent text-base"
          >
            {t("home")}
          </Link>

          <div className="h-px bg-white/5 my-2" />

          {/* Producten group */}
          <div className="py-3">
            <p className="text-[11px] uppercase text-white/40 tracking-widest mb-3 font-accent">
              {t("products")}
            </p>
            <Link
              href="/white-of-private-label"
              onClick={() => setMobileOpen(false)}
              className="block py-2 pl-4 text-sm text-white/70 hover:text-accent transition-colors duration-200"
            >
              {t("whiteOfPrivateLabel")}
            </Link>
            <Link
              href="/producten-samples"
              onClick={() => setMobileOpen(false)}
              className="block py-2 pl-4 text-sm text-white/70 hover:text-accent transition-colors duration-200"
            >
              {t("productenSamples")}
            </Link>
          </div>

          <div className="h-px bg-white/5 my-2" />

          {/* Eigen merk group */}
          <div className="py-3">
            <p className="text-[11px] uppercase text-white/40 tracking-widest mb-3 font-accent">
              {t("eigenMerk")}
            </p>
            {eigenMerkLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 pl-4 text-sm text-white/70 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-px bg-white/5 my-2" />

          <Link
            href="/bedrijf"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-white/80 hover:text-accent transition-colors duration-200 font-accent text-base"
          >
            {t("bedrijf")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-white/80 hover:text-accent transition-colors duration-200 font-accent text-base"
          >
            {t("contact")}
          </Link>

          <div className="pt-6">
            <Link
              href="/offerte-aanvragen"
              onClick={() => setMobileOpen(false)}
              className="block bg-accent text-text-on-accent px-6 py-3.5 rounded-lg font-medium text-center hover:bg-accent-hover transition-colors duration-200"
            >
              {t("offerte")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
