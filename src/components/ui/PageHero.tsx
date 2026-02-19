import FadeIn from "@/components/motion/FadeIn";

type PageHeroProps = {
  tag?: string;
  title: string;
  description?: string;
};

export default function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-[#f8f9fa] border-b border-[#e5e7eb] overflow-hidden">
      {/* Geometric grid — matches homepage hero */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="page-hero-grid"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
      </svg>

      {/* Turquoise accent orb — top right */}
      <div
        className="absolute -top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,_#5BCEE0_0%,_#2A8A9A_40%,_transparent_70%)]" />
      </div>

      {/* Diagonal accent line */}
      <div
        className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5BCEE0]/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="noise-overlay" />

      <div className="container-site py-16 lg:py-24 relative z-10">
        <FadeIn direction="up" delay={0.1}>
          {tag && (
            <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#5BCEE0] mb-4">
              {tag}
            </p>
          )}
          <h1 className="font-display font-black text-h1 lg:text-display uppercase text-[#0a0a0a] leading-[1.05] max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="font-body text-lg text-[#6b7280] max-w-2xl mt-6 leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
