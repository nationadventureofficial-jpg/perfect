import Link from "next/link";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  id: string;
  badge: string;
  meta: string;
  price: string;
  finePrint?: string;
  highlight?: string;
  bullets: string[];
  cta: { label: string; href: string; variant?: "primary" };
  footerNote?: string;
}

export default function PackageCard({
  badge,
  meta,
  price,
  finePrint,
  highlight,
  bullets,
  cta,
  footerNote,
}: PackageCardProps) {
  return (
    <div className="bg-surface rounded-card p-6 md:p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {badge && (
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 bg-primary text-white rounded-full font-decorative text-xl font-bold">
            {badge}
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <p className="text-mutedText font-body text-sm mb-2">{meta}</p>
        <p className="font-display text-3xl md:text-4xl font-bold text-text mb-1">{price}</p>
        {finePrint && (
          <p className="text-mutedText font-body text-xs">{finePrint}</p>
        )}
      </div>

      {highlight && (
        <div className="mb-6 p-4 bg-secondary/20 rounded-input border border-secondary/30">
          <p className="text-text font-body text-sm font-medium">{highlight}</p>
        </div>
      )}

      <ul className="flex-1 space-y-2 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 font-body text-sm text-text">
            <span className="text-primary mt-1">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link
          href={cta.href}
          className={cn(
            "block w-full px-6 py-3 rounded-button font-body text-sm font-medium transition-all text-center",
            cta.variant === "primary"
              ? "bg-primary text-white hover:bg-primaryHover shadow-button hover:shadow-lg"
              : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
          )}
        >
          {cta.label}
        </Link>
        {footerNote && (
          <p className="text-mutedText font-body text-xs text-center mt-3">{footerNote}</p>
        )}
      </div>
    </div>
  );
}
