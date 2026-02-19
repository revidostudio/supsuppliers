import { type LucideIcon } from "lucide-react";
import { StaggerItem } from "@/components/motion/StaggerChildren";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
};

export default function IconCard({ icon: Icon, title, description }: IconCardProps) {
  return (
    <StaggerItem className="bg-surface-secondary rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 transition-colors">
      <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
      </div>
      <h3 className="font-display font-bold text-base uppercase text-text-primary">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-text-body mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </StaggerItem>
  );
}
