"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: gradient orbs move slower than scroll
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

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
    <>
      {/* Hero section */}
      <section ref={sectionRef} className="relative flex flex-col justify-center overflow-hidden bg-white">
        {/* ─── Animated gradient background ─── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Large turquoise orb — top right */}
          <motion.div
            style={{ y: orbY, rotate: orbRotate }}
            className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.07]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.07 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle,_#5BCEE0_0%,_#2A8A9A_40%,_transparent_70%)]" />
          </motion.div>

          {/* Smaller accent orb — center left */}
          <motion.div
            style={{ y: orbY }}
            className="absolute top-[30%] -left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full opacity-[0.04]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.04 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle,_#5BCEE0_0%,_transparent_60%)]" />
          </motion.div>

          {/* Geometric grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0a0a0a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* Diagonal accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5BCEE0]/20 to-transparent origin-left"
          />

          {/* Abstract molecule/supplement shape — decorative dots */}
          <motion.div
            style={{ y: orbY }}
            className="absolute top-[15%] right-[8%] hidden lg:block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="opacity-[0.08]">
              {/* Hexagonal molecular structure */}
              <circle cx="100" cy="40" r="8" fill="#5BCEE0" />
              <circle cx="140" cy="70" r="6" fill="#5BCEE0" />
              <circle cx="140" cy="120" r="8" fill="#5BCEE0" />
              <circle cx="100" cy="150" r="6" fill="#5BCEE0" />
              <circle cx="60" cy="120" r="8" fill="#5BCEE0" />
              <circle cx="60" cy="70" r="6" fill="#5BCEE0" />
              <line x1="100" y1="40" x2="140" y2="70" stroke="#5BCEE0" strokeWidth="1.5" />
              <line x1="140" y1="70" x2="140" y2="120" stroke="#5BCEE0" strokeWidth="1.5" />
              <line x1="140" y1="120" x2="100" y2="150" stroke="#5BCEE0" strokeWidth="1.5" />
              <line x1="100" y1="150" x2="60" y2="120" stroke="#5BCEE0" strokeWidth="1.5" />
              <line x1="60" y1="120" x2="60" y2="70" stroke="#5BCEE0" strokeWidth="1.5" />
              <line x1="60" y1="70" x2="100" y2="40" stroke="#5BCEE0" strokeWidth="1.5" />
              {/* Inner connections */}
              <circle cx="100" cy="95" r="4" fill="#2A8A9A" />
              <line x1="100" y1="40" x2="100" y2="95" stroke="#2A8A9A" strokeWidth="1" opacity="0.5" />
              <line x1="140" y1="120" x2="100" y2="95" stroke="#2A8A9A" strokeWidth="1" opacity="0.5" />
              <line x1="60" y1="120" x2="100" y2="95" stroke="#2A8A9A" strokeWidth="1" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Second molecule — bottom left */}
          <motion.div
            style={{ y: orbY }}
            className="absolute bottom-[20%] left-[5%] hidden lg:block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-[0.06]">
              <circle cx="60" cy="30" r="6" fill="#5BCEE0" />
              <circle cx="90" cy="60" r="5" fill="#5BCEE0" />
              <circle cx="75" cy="95" r="6" fill="#5BCEE0" />
              <circle cx="40" cy="90" r="5" fill="#5BCEE0" />
              <circle cx="30" cy="55" r="6" fill="#5BCEE0" />
              <line x1="60" y1="30" x2="90" y2="60" stroke="#5BCEE0" strokeWidth="1" />
              <line x1="90" y1="60" x2="75" y2="95" stroke="#5BCEE0" strokeWidth="1" />
              <line x1="75" y1="95" x2="40" y2="90" stroke="#5BCEE0" strokeWidth="1" />
              <line x1="40" y1="90" x2="30" y2="55" stroke="#5BCEE0" strokeWidth="1" />
              <line x1="30" y1="55" x2="60" y2="30" stroke="#5BCEE0" strokeWidth="1" />
            </svg>
          </motion.div>
        </div>

        <div className="noise-overlay" />

        {/* Background decorative text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-display font-black uppercase text-[15vw] leading-none text-[#0a0a0a]/[0.02] whitespace-nowrap">
            SUPPLEMENTEN
          </span>
        </div>

        {/* Content */}
        <div className="container-site pt-28 pb-16 lg:pt-36 lg:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column — text content */}
            <div className="max-w-2xl">
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
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/offerte-aanvragen"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5BCEE0] text-[#0a0a0a] px-8 py-4 rounded-md font-body font-semibold text-base hover:bg-[#4AB8C9] transition-all duration-300"
                >
                  {isNl ? "Offerte aanvragen" : "Request quote"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/bedrijf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#0a0a0a] text-[#0a0a0a] px-8 py-4 rounded-md font-body font-medium text-base hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
                >
                  {isNl ? "Over Supsuppliers" : "About Supsuppliers"}
                </Link>
              </motion.div>
            </div>

            {/* Right column — product image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center lg:justify-end order-last"
            >
              {/* Glow effect behind product */}
              <div
                className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,_#5BCEE0_0%,_transparent_70%)] opacity-[0.08] blur-3xl"
                aria-hidden="true"
              />
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative drop-shadow-[0_20px_40px_rgba(91,206,224,0.15)]"
              >
                <Image
                  src="/images/products/group-products-1.png"
                  alt={
                    isNl
                      ? "Supsuppliers whey isolate producten met turquoise branding"
                      : "Supsuppliers whey isolate products with turquoise branding"
                  }
                  width={600}
                  height={700}
                  priority
                  className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-[#9ca3af]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar — separate from hero */}
      <div ref={statsRef} className="relative z-10 border-y border-[#e5e7eb] bg-white">
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
    </>
  );
}
