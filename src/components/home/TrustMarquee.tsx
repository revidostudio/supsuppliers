"use client";

import Image from "next/image";

type MarqueeItem =
  | { type: "logo"; src: string; alt: string; width: number; height: number }
  | { type: "badge"; label: string };

const items: MarqueeItem[] = [
  {
    type: "logo",
    src: "/images/logos/postnl.png",
    alt: "PostNL",
    width: 100,
    height: 28,
  },
  {
    type: "logo",
    src: "/images/logos/fssc-22000.png",
    alt: "FSSC 22000",
    width: 80,
    height: 32,
  },
  {
    type: "logo",
    src: "/images/logos/eshuis.jpg",
    alt: "Eshuis",
    width: 80,
    height: 32,
  },
  {
    type: "logo",
    src: "/images/logos/partner-1.png",
    alt: "Maatwerk Transport",
    width: 100,
    height: 28,
  },
  { type: "badge", label: "ISO 22000" },
  { type: "badge", label: "HACCP" },
  {
    type: "logo",
    src: "/images/logos/partner-2.png",
    alt: "Partner",
    width: 80,
    height: 28,
  },
  { type: "badge", label: "BPA-vrij" },
  {
    type: "logo",
    src: "/images/logos/partner-3.png",
    alt: "Partner",
    width: 80,
    height: 28,
  },
  { type: "badge", label: "Made in NL" },
];

/* Duplicate the array so the animation wraps seamlessly at -50% */
const doubled = [...items, ...items];

function MarqueeItemEl({ item }: { item: MarqueeItem }) {
  if (item.type === "logo") {
    return (
      <span className="mx-6 lg:mx-10 shrink-0 inline-flex items-center">
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="h-7 w-auto object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          draggable={false}
        />
      </span>
    );
  }

  return (
    <span className="mx-6 lg:mx-10 shrink-0 inline-flex items-center">
      <span className="rounded-full border border-[#d1d5db] bg-white px-4 py-1 font-display text-xs font-bold uppercase tracking-[0.15em] text-[#6b7280] transition-all duration-300 hover:border-[#5BCEE0] hover:text-[#2A8A9A]">
        {item.label}
      </span>
    </span>
  );
}

export default function TrustMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-[#e5e7eb] bg-[#f8f9fa] py-5">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {doubled.map((item, i) => (
          <MarqueeItemEl key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
