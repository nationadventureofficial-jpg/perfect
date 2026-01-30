import { cn } from "@/lib/utils";

interface FeatureListProps {
  items: Array<{ title: string }>;
  style?: "chips" | "list";
  className?: string;
}

export default function FeatureList({ items, style = "chips", className }: FeatureListProps) {
  if (style === "chips") {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-accent/20 text-text rounded-full font-body text-sm font-medium"
          >
            {item.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2 font-body text-text">
          <span className="text-primary mt-1">•</span>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
