"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function About() {
  const locale = useLocale();
  const isNl = locale === "nl";
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-[#f8f9fa] overflow-hidden">
      {/* Diagonal geometric decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#e5e7eb]/30 pointer-events-none"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — decorative stacked text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="font-display font-black text-[6vw] leading-[0.85] uppercase select-none">
              {["SUP", "SUP", "PLI", "ERS"].map((word, i) => (
                <span
                  key={i}
                  className="block"
                  style={{
                    WebkitTextStroke: "2px rgba(91, 206, 224, 0.15)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#5BCEE0] mb-4">
              {isNl ? "OVER ONS" : "ABOUT US"}
            </p>
            <h2 className="font-display font-black text-h1 uppercase text-[#0a0a0a] mb-8">
              SUPSUPPLIERS
            </h2>

            <div className="space-y-5 font-body text-base lg:text-lg text-[#3a3a3a] leading-relaxed max-w-lg">
              <p>
                {isNl
                  ? "Gevestigd in Duiven, produceren wij poedervormige voedingssupplementen voor merken die willen groeien. Van whey protein tot plantaardige formules — alles FSSC22000 gecertificeerd."
                  : "Based in Duiven, we produce powdered nutritional supplements for brands that want to grow. From whey protein to plant-based formulas — all FSSC22000 certified."}
              </p>
              <p>
                {isNl
                  ? "Geen enorme minimale afnames. Geen eindeloze wachttijden. Wel: persoonlijke begeleiding, scherpe prijzen en een partner die meedenkt van formulering tot fulfillment."
                  : "No massive minimum orders. No endless wait times. Instead: personal guidance, competitive pricing, and a partner that thinks along from formulation to fulfillment."}
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/bedrijf"
                className="group inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-md font-body font-semibold text-base hover:bg-[#1a1a1a] transition-all duration-300"
              >
                {isNl ? "Meer over ons" : "More about us"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
