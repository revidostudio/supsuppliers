import FadeIn from "@/components/motion/FadeIn";

type PageHeroProps = {
  tag?: string;
  title: string;
  description?: string;
};

export default function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <section className="bg-[#f8f9fa] border-b border-[#e5e7eb]">
      <div className="container-site py-16 lg:py-24">
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
