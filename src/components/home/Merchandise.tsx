"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const cards = {
  nl: [
    {
      title: "SHAKEBEKER",
      subtitle: "met jouw logo",
      desc: "BPA-vrij, diverse kleuren, volledig personaliseerbaar. Lage afname, snelle levering.",
    },
    {
      title: "DRINKFLES",
      subtitle: "met jouw logo",
      desc: "Duurzaam tritan materiaal. Scherpe prijzen voor gepersonaliseerde drinkflessen.",
    },
  ],
  en: [
    {
      title: "SHAKER CUP",
      subtitle: "with your logo",
      desc: "BPA-free, various colors, fully customizable. Low minimum orders, fast delivery.",
    },
    {
      title: "DRINK BOTTLE",
      subtitle: "with your logo",
      desc: "Durable tritan material. Competitive prices for personalized drink bottles.",
    },
  ],
};

export default function Merchandise() {
  const locale = useLocale();
  const isNl = locale === "nl";
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const items = isNl ? cards.nl : cards.en;

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#5BCEE0] mb-4">
            MERCHANDISE
          </p>
          <h2 className="font-display font-black text-h1 uppercase text-[#0a0a0a]">
            {isNl ? "SHAKERS & FLESSEN" : "SHAKERS & BOTTLES"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <Link
                href="/shakebekers-drinkflessen"
                className="group block bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl p-8 lg:p-10 transition-all duration-500 hover:shadow-glow hover:border-[#5BCEE0]/30 hover:-translate-y-1"
              >
                {/* Placeholder image area */}
                <div className="w-full h-48 lg:h-56 bg-[#e5e7eb]/50 rounded-lg mb-8 flex items-center justify-center overflow-hidden">
                  <span className="font-display font-black text-6xl text-[#0a0a0a]/[0.06] select-none group-hover:scale-105 transition-transform duration-500">
                    {card.title === "SHAKEBEKER" || card.title === "SHAKER CUP" ? "🥤" : "🍶"}
                  </span>
                </div>

                <h3 className="font-display font-black text-h3 uppercase text-[#0a0a0a] mb-1">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-[#5BCEE0] font-medium mb-4">
                  {card.subtitle}
                </p>
                <p className="font-body text-base text-[#6b7280] leading-relaxed mb-6">
                  {card.desc}
                </p>

                <span className="inline-flex items-center gap-2 text-[#0a0a0a] font-body font-semibold text-sm border-b border-transparent group-hover:border-[#5BCEE0] transition-all duration-300">
                  {isNl ? "Bekijk opties" : "View options"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
