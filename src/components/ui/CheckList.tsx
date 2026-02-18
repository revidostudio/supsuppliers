import { Check } from "lucide-react";

type CheckListProps = {
  items: string[];
  light?: boolean;
};

export default function CheckList({ items, light = false }: CheckListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-5 h-5 mt-0.5 bg-accent rounded-full flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-black" strokeWidth={3} />
          </span>
          <span
            className={`text-sm leading-relaxed ${
              light ? "text-white/80" : "text-text-body"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
