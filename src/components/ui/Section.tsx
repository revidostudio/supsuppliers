import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  bg?: "white" | "gray" | "dark" | "accent";
  spacing?: "sm" | "md" | "lg";
  id?: string;
};

const bgMap = {
  white: "bg-surface-primary",
  gray: "bg-surface-secondary",
  dark: "bg-surface-black text-text-on-dark",
  accent: "bg-accent",
} as const;

const spacingMap = {
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-24",
  lg: "py-20 lg:py-32",
} as const;

export default function Section({
  children,
  className = "",
  bg = "white",
  spacing = "md",
  id,
}: SectionProps) {
  return (
    <section className={`${bgMap[bg]} ${spacingMap[spacing]} ${className}`} id={id}>
      <div className="container-site">{children}</div>
    </section>
  );
}
