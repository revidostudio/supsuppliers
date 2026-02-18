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
        className={`font-display font-black text-h2 lg:text-h1 uppercase leading-[1.1] ${
          light ? "text-white" : "text-[#0a0a0a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-body text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-[#6b7280]"}`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
