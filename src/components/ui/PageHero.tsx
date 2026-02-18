import FadeIn from "@/components/motion/FadeIn";

type PageHeroProps = {
  tag?: string;
  title: string;
  description?: string;
};

export default function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <section className="bg-surface-black text-text-on-dark">
      <div className="container-site py-20 lg:py-28">
        <FadeIn direction="up" delay={0.1}>
          {tag && (
            <p className="text-accent font-accent font-medium uppercase tracking-widest text-sm mb-4">
              {tag}
            </p>
          )}
          <h1 className="font-heading font-black text-h1 lg:text-display leading-tight max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/60 max-w-2xl mt-6 leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
