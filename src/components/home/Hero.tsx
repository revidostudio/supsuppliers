"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import CountUp from "./CountUp";

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const locale = useLocale();
  const isNl = locale === "nl";
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const stats = isNl
    ? [
        { value: "250", suffix: "kg", label: "Min. afname whey" },
        { value: "5", suffix: " stappen", label: "Van idee tot product" },
        { value: "FSSC", suffix: "22000", label: "Gecertificeerde productie" },
        { value: "A", suffix: "–Z", label: "Volledig ontzorgd" },
      ]
    : [
        { value: "250", suffix: "kg", label: "Min. order whey" },
        { value: "5", suffix: " steps", label: "From idea to product" },
        { value: "FSSC", suffix: "22000", label: "Certified production" },
        { value: "A", suffix: "–Z", label: "Fully managed" },
      ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(91,206,224,0.06)_0%,_transparent_60%)]" />
      <div className="noise-overlay" />

      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display font-black uppercase text-[15vw] leading-none text-[#0a0a0a]/[0.03] whitespace-nowrap">
          SUPPLEMENTEN
        </span>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: headlineY }}
        className="container-site pt-32 pb-16 lg:pt-40 lg:pb-20 relative z-10"
      >
        <div className="max-w-4xl">
          {/* Top label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#5BCEE0] mb-6 lg:mb-8"
          >
            {isNl ? "NEDERLANDSE SUPPLEMENT LEVERANCIER" : "DUTCH SUPPLEMENT SUPPLIER"}
          </motion.p>

          {/* Headline with clip-reveal */}
          <h1 className="font-display font-black text-display uppercase leading-[1.05] text-[#0a0a0a] mb-6 lg:mb-8">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                {isNl ? "UW MERK." : "YOUR BRAND."}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                {isNl ? (
                  <>ONZE <span className="text-[#5BCEE0]">EXPERTISE</span>.</>
                ) : (
                  <>OUR <span className="text-[#5BCEE0]">EXPERTISE</span>.</>
                )}
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-lg lg:text-xl text-[#6b7280] max-w-2xl mb-10 lg:mb-12 leading-relaxed"
          >
            {isNl
              ? "Van formulering tot levering. Uw eigen supplementlijn in 5 stappen."
              : "From formulation to delivery. Your own supplement line in 5 steps."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/offerte-aanvragen"
              className="group inline-flex items-center gap-2 bg-[#5BCEE0] text-[#0a0a0a] px-8 py-4 rounded-md font-body font-semibold text-base hover:bg-[#4AB8C9] transition-all duration-300"
            >
              {isNl ? "Offerte aanvragen" : "Request quote"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/bedrijf"
              className="inline-flex items-center gap-2 border-2 border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 rounded-md font-body font-medium text-base hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
            >
              {isNl ? "Over Supsuppliers" : "About Supsuppliers"}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <div ref={statsRef} className="relative z-10 border-t border-[#e5e7eb]">
        <div className="container-site py-8 lg:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="font-display font-black text-2xl lg:text-3xl text-[#0a0a0a] uppercase">
                  {stat.value === "250" ? (
                    <CountUp end={250} inView={statsInView} suffix="kg" />
                  ) : stat.value === "5" ? (
                    <CountUp end={5} inView={statsInView} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}<span className="text-[#5BCEE0]">{stat.suffix}</span></span>
                  )}
                </div>
                <p className="font-body text-sm text-[#6b7280] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#9ca3af]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
