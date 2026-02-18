"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isNl = locale === "nl";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/producten-samples" as const, label: isNl ? "Producten" : "Products" },
    { href: "/stappenplan" as const, label: isNl ? "Stappenplan" : "Process" },
    { href: "/bedrijf" as const, label: isNl ? "Bedrijf" : "Company" },
    { href: "/contact" as const, label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgb(0_0_0/0.05)] border-b border-[#e5e7eb]"
          : "bg-white border-b border-[#e5e7eb]/50"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0">
          <span className="font-display text-xl lg:text-2xl font-black tracking-tight text-[#0a0a0a] uppercase">
            Sup<span className="text-[#5BCEE0]">suppliers</span>
          </span>
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-body font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/offerte-aanvragen"
            className="inline-flex items-center px-6 py-2.5 bg-[#0a0a0a] text-white text-sm font-body font-semibold rounded-md hover:bg-[#1a1a1a] transition-colors duration-300"
          >
            {t("offerte")}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#0a0a0a]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40"
          >
            <nav className="container-site py-10 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-lg font-display font-bold text-[#0a0a0a] hover:text-[#5BCEE0] transition-colors border-b border-[#f0f0f0]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8">
                <Link
                  href="/offerte-aanvragen"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-[#0a0a0a] text-white px-6 py-4 rounded-md font-body font-semibold text-base"
                >
                  {t("offerte")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
