import FadeIn from "@/components/motion/FadeIn";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeIn className={align === "center" ? "text-center" : ""}>
      <h2
        className={`font-heading font-black text-h2 lg:text-h1 ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-text-body"}`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
