"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stepsNl = [
  {
    num: "01",
    title: "Samples bestellen",
    desc: "Proef voordat u beslist. Bestel ons samplepakket en test smaak, textuur en kwaliteit van onze supplementen. Zo weet u precies wat u aan uw klanten aanbiedt.",
    cta: "Bekijk samples",
    href: "/producten-samples" as const,
    image: "/images/products/verpakking.png",
  },
  {
    num: "02",
    title: "Productkeuze",
    desc: "Kies uit ons uitgebreide assortiment: whey protein, pre-workout, creatine, plantaardige eiwitten en meer. White label of private label — u bepaalt.",
    cta: "Bekijk producten",
    href: "/producten-samples" as const,
    image: "/images/products/group-products-1.png",
  },
  {
    num: "03",
    title: "Labeldesign",
    desc: "Uw merk verdient een professionele uitstraling. Kies uit drie designpakketten of lever uw eigen artwork aan. Wij zorgen voor drukklare bestanden.",
    cta: "Design opties",
    href: "/design" as const,
    image: "/images/products/private-label.png",
  },
  {
    num: "04",
    title: "Offerte",
    desc: "Ontvang een offerte op maat. Transparante prijzen, geen verborgen kosten. Binnen twee werkdagen nemen wij contact op met een passend voorstel.",
    cta: "Offerte aanvragen",
    href: "/offerte-aanvragen" as const,
    image: "/images/products/brochure-mockup.png",
  },
  {
    num: "05",
    title: "Levering",
    desc: "Productie, verpakking en verzending — alles onder één dak. Via PostNL of transport, inclusief track & trace. Uw supplementlijn, klaar voor de markt.",
    cta: "Meer over levering",
    href: "/overige-informatie" as const,
    image: "/images/logos/postnl.png",
  },
];

const stepsEn = [
  {
    num: "01",
    title: "Order samples",
    desc: "Taste before you commit. Order our sample package and test the flavor, texture, and quality of our supplements. Know exactly what you offer your customers.",
    cta: "View samples",
    href: "/producten-samples" as const,
    image: "/images/products/verpakking.png",
  },
  {
    num: "02",
    title: "Product selection",
    desc: "Choose from our extensive range: whey protein, pre-workout, creatine, plant-based proteins, and more. White label or private label — you decide.",
    cta: "View products",
    href: "/producten-samples" as const,
    image: "/images/products/group-products-1.png",
  },
  {
    num: "03",
    title: "Label design",
    desc: "Your brand deserves a professional look. Choose from three design packages or supply your own artwork. We handle print-ready files.",
    cta: "Design options",
    href: "/design" as const,
    image: "/images/products/private-label.png",
  },
  {
    num: "04",
    title: "Quote",
    desc: "Receive a tailored quote. Transparent pricing, no hidden costs. Within two business days, we'll contact you with a fitting proposal.",
    cta: "Request quote",
    href: "/offerte-aanvragen" as const,
    image: "/images/products/brochure-mockup.png",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Production, packaging, and shipping — all under one roof. Via PostNL or transport, including track & trace. Your supplement line, ready for market.",
    cta: "More about delivery",
    href: "/overige-informatie" as const,
    image: "/images/logos/postnl.png",
  },
];

export default function ProcessSteps() {
  const locale = useLocale();
  const isNl = locale === "nl";
  const steps = isNl ? stepsNl : stepsEn;
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-white overflow-hidden">
      {/* Section title */}
      <div className="container-site mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#5BCEE0] mb-4">
            {isNl ? "HOE HET WERKT" : "HOW IT WORKS"}
          </p>
          <h2 className="font-display font-black text-h1 lg:text-display uppercase text-[#0a0a0a] leading-[1.05]">
            {isNl ? (
              <>5 STAPPEN NAAR<br /><span className="text-[#5BCEE0]">UW EIGEN MERK</span></>
            ) : (
              <>5 STEPS TO<br /><span className="text-[#5BCEE0]">YOUR OWN BRAND</span></>
            )}
          </h2>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="container-site mb-12">
        <div className="h-px bg-[#e5e7eb] relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#5BCEE0]"
            animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ height: "2px", top: "-0.5px" }}
          />
        </div>
      </div>

      {/* Step navigation tabs */}
      <div className="container-site mb-12 lg:mb-16">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 px-5 py-2.5 rounded-md text-sm font-body font-medium transition-all duration-300 ${
                active === i
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-[#f8f9fa] text-[#6b7280] hover:bg-[#e5e7eb]"
              }`}
            >
              {step.num}. {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="container-site">
        {/* Mobile image — shown above content on small screens */}
        <div className="lg:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-img-${active}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full flex items-center justify-center"
              style={{ height: "200px" }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full bg-[#5BCEE0]/[0.06] blur-3xl" />
              </div>
              <Image
                src={steps[active].image}
                alt={steps[active].title}
                width={280}
                height={200}
                className="object-contain relative z-10 drop-shadow-lg"
                style={{ maxHeight: "180px", width: "auto" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — large number with product image */}
          <div className="relative hidden lg:block" style={{ minHeight: "340px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                {/* Giant ghosted step number */}
                <span
                  className="font-display font-black text-[14vw] leading-none text-[#0a0a0a]/[0.04] select-none block"
                  aria-hidden="true"
                >
                  {steps[active].num}
                </span>

                {/* Product image overlapping the number */}
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  {/* Soft radial glow behind image */}
                  <div className="absolute w-64 h-64 rounded-full bg-[#5BCEE0]/[0.07] blur-3xl" />
                  <Image
                    src={steps[active].image}
                    alt={steps[active].title}
                    width={400}
                    height={340}
                    className="object-contain relative z-10 drop-shadow-xl"
                    style={{ maxHeight: "300px", width: "auto" }}
                    priority
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — content */}
          <motion.div
            key={`content-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-display font-black text-h2 lg:text-h1 uppercase text-[#0a0a0a] mb-6">
              {steps[active].title}
            </h3>
            <p className="font-body text-lg text-[#6b7280] leading-relaxed mb-8 max-w-lg">
              {steps[active].desc}
            </p>
            <Link
              href={steps[active].href}
              className="group inline-flex items-center gap-2 text-[#0a0a0a] font-body font-semibold text-base border-b-2 border-[#5BCEE0] pb-1 hover:text-[#5BCEE0] transition-colors duration-300"
            >
              {steps[active].cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
