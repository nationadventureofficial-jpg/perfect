import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { decorations } from "@/theme/decorations";

interface SectionProps {
  id?: string;
  anchor?: string;
  title?: string;
  titleFont?: "display" | "decorative";
  titleColor?: string;
  kicker?: string;
  subtitle?: string;
  subtitleColor?: string;
  children: ReactNode;
  className?: string;
  background?: string;
  decoration?: {
    assetId: keyof typeof decorations;
    position: "behind-title" | "top-right" | "bottom-left" | "top-left" | "bottom-right";
    opacity?: number;
    scale?: number;
  };
}

export default function Section({
  id,
  anchor,
  title,
  titleFont = "display",
  titleColor,
  kicker,
  subtitle,
  subtitleColor,
  children,
  className,
  background,
  decoration,
}: SectionProps) {
  const sectionId = anchor || id;

  return (
    <section
      id={sectionId}
      className={cn("relative py-14 md:py-22", className)}
      style={{ background, zIndex: 10, position: "relative" }}
    >
      <div className="w-full px-6">
        <div className="max-w-[1600px] mx-auto">
        {(title || kicker) && (
          <div className="relative mb-12 text-center">
            {decoration && decoration.position === "behind-title" && (
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity: decoration.opacity || 0.7,
                  transform: `scale(${decoration.scale || 1})`,
                }}
              >
                <Image
                  src={decorations[decoration.assetId].src}
                  alt={decorations[decoration.assetId].alt}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            )}
            {kicker && (
              <p className="text-primary font-decorative text-2xl md:text-3xl font-bold mb-2">
                {kicker}
              </p>
            )}
            {title && (
              <h2 
                className={cn(
                  "font-bold relative z-10",
                  titleFont === "decorative" 
                    ? "font-decorative text-[2.344rem] md:text-[2.813rem] lg:text-[3.75rem]"
                    : "font-display text-3xl md:text-4xl lg:text-5xl",
                  titleColor || "text-text"
                )}
                style={titleColor ? { color: titleColor } : undefined}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p 
                className={cn(
                  "font-body text-base md:text-lg mt-4 max-w-2xl mx-auto",
                  subtitleColor || "text-mutedText"
                )}
                style={subtitleColor ? { color: subtitleColor } : undefined}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
        </div>
      </div>
    </section>
  );
}
