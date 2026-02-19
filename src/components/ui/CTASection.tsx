import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

type CTASectionProps = {
  title: string;
  description?: string;
  buttonText: string;
  href: "/" | "/offerte-aanvragen" | "/contact" | "/bedrijf" | "/shakebekers-drinkflessen";
  variant?: "dark" | "accent";
};

export default function CTASection({
  title,
  description,
  buttonText,
  href,
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={`${isDark ? "bg-surface-black" : "bg-accent"} py-16 lg:py-24`}
    >
      <div className="container-site text-center">
        <FadeIn>
          <h2
            className={`font-display font-black text-h2 lg:text-h1 uppercase mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-lg max-w-xl mx-auto mb-8 ${
                isDark ? "text-white/60" : "text-black/70"
              }`}
            >
              {description}
            </p>
          )}
          <Link
            href={href}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-body font-semibold text-base transition-all hover:gap-3 ${
              isDark
                ? "bg-accent text-black hover:bg-accent-hover"
                : "bg-black text-white hover:bg-surface-dark"
            }`}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
