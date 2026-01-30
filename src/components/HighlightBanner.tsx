import Link from "next/link";
import { cn } from "@/lib/utils";

interface HighlightBannerProps {
  title: string;
  content: string[];
  price?: string;
  finePrint?: string;
  meta?: string;
  cta: { label: string; href: string; variant?: "primary" };
  note?: string;
}

export default function HighlightBanner({
  title,
  content,
  price,
  finePrint,
  meta,
  cta,
  note,
}: HighlightBannerProps) {
  return (
    <div className="mt-12 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-card p-8 md:p-12 border-2 border-primary/20">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-text mb-4">{title}</h3>
      
      <div className="space-y-3 mb-6">
        {content.map((paragraph, index) => (
          <p key={index} className="text-text font-body text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {price && (
        <div className="mb-4">
          <p className="font-display text-3xl md:text-4xl font-bold text-text mb-1">{price}</p>
          {finePrint && (
            <p className="text-mutedText font-body text-xs">{finePrint}</p>
          )}
        </div>
      )}

      {meta && (
        <p className="text-mutedText font-body text-sm mb-6">{meta}</p>
      )}

      <Link
        href={cta.href}
        className={cn(
          "inline-block px-8 py-3 rounded-button font-body text-base font-medium transition-all",
          cta.variant === "primary"
            ? "bg-primary text-white hover:bg-primaryHover shadow-button hover:shadow-lg"
            : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
        )}
      >
        {cta.label}
      </Link>

      {note && (
        <p className="text-mutedText font-body text-xs mt-4">{note}</p>
      )}
    </div>
  );
}
