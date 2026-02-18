"use client";

import { motion } from "framer-motion";

const items = [
  "PostNL", "◆", "FSSC22000", "◆", "Eshuis", "◆", "ISO 22000", "◆",
  "HACCP", "◆", "BPA-vrij", "◆", "Made in NL", "◆",
  "PostNL", "◆", "FSSC22000", "◆", "Eshuis", "◆", "ISO 22000", "◆",
  "HACCP", "◆", "BPA-vrij", "◆", "Made in NL", "◆",
];

export default function TrustMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-[#e5e7eb] bg-[#f8f9fa] py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className={`mx-6 lg:mx-10 shrink-0 font-display font-bold text-sm uppercase tracking-[0.15em] ${
              item === "◆"
                ? "text-[#5BCEE0] text-xs"
                : "text-[#9ca3af]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
