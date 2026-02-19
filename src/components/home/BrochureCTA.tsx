"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BrochureCTA() {
  const locale = useLocale();
  const isNl = locale === "nl";
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#5BCEE0]">
      {/* Geometric decoration */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-[#4AB8C9]/50 pointer-events-none"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="container-site py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: text + form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-black text-h1 lg:text-display uppercase text-[#0a0a0a] leading-[1.05] mb-6">
              {isNl ? "KLAAR OM UW EIGEN MERK TE LANCEREN?" : "READY TO LAUNCH YOUR OWN BRAND?"}
            </h2>
            <p className="font-body text-lg text-[#0a0a0a]/70 mb-10 max-w-lg">
              {isNl
                ? "Ontvang onze gratis brochure en ontdek alle mogelijkheden voor uw eigen supplementlijn."
                : "Receive our free brochure and discover all possibilities for your own supplement line."}
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={isNl ? "Uw e-mailadres" : "Your email address"}
                className="flex-1 px-5 py-4 rounded-md bg-white text-[#0a0a0a] placeholder:text-[#9ca3af] font-body text-base outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 transition-all"
              />
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-md font-body font-semibold text-base hover:bg-[#1a1a1a] transition-colors duration-300 whitespace-nowrap"
              >
                {isNl ? "Verstuur" : "Send"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right column: brochure mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rotate-2 drop-shadow-2xl hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/products/brochure-mockup.png"
                alt={
                  isNl
                    ? "Supsuppliers brochure met productoverzicht"
                    : "Supsuppliers brochure with product overview"
                }
                width={1024}
                height={782}
                className="w-full max-w-md lg:max-w-lg rounded-sm"
                priority={false}
              />
              {/* Subtle shine / gloss overlay */}
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
