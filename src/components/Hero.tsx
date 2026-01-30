"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { decorations } from "@/theme/decorations";

interface HeroProps {
  headline: string;
  subheadline?: string;
  textAlign?: { mobile: "left" | "center" | "right"; desktop: "left" | "center" | "right" };
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string; variant?: "outline" };
  media?: {
    type: "image";
    src: string;
    alt: string;
  };
  decorations?: Array<{
    assetId: keyof typeof decorations;
    position: "top-right" | "bottom-left" | "top-left" | "bottom-right";
    opacity?: number;
    scale?: number;
  }>;
  background?: {
    type: "gradient";
    value: string;
  };
  minHeight?: { mobile: number; desktop: number };
}

export default function Hero({
  headline,
  subheadline,
  textAlign = { mobile: "left", desktop: "left" },
  primaryCta,
  secondaryCta,
  media,
  decorations: heroDecorations,
  background,
  minHeight = { mobile: 560, desktop: 640 },
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: `${minHeight.mobile}px`,
        background: background?.value,
        zIndex: 10,
        position: "relative",
      }}
    >
      {/* Decorative overlays */}
      {heroDecorations?.map((dec, index) => {
        const decoration = decorations[dec.assetId];
        const positionClasses = {
          "top-right": "top-0 right-0",
          "bottom-left": "bottom-0 left-0",
          "top-left": "top-0 left-0",
          "bottom-right": "bottom-0 right-0",
        };
        return (
          <div
            key={index}
            className={cn("absolute pointer-events-none", positionClasses[dec.position])}
            style={{
              opacity: dec.opacity || 0.9,
              transform: `scale(${dec.scale || 0.75})`,
            }}
          >
            <Image
              src={decoration.src}
              alt={decoration.alt}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        );
      })}

      <div className="w-full px-6 h-full">
        <div className="max-w-[1600px] mx-auto h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full min-h-[560px] lg:min-h-[640px]">
          {/* Content */}
          <div
            className={cn(
              "flex flex-col justify-center space-y-6",
              textAlign.mobile === "center" && "text-center",
              textAlign.mobile === "right" && "text-right",
              "lg:text-left"
            )}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
            {subheadline && (
              <p className="text-mutedText font-body text-lg md:text-xl max-w-xl">
                {subheadline}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className={cn(
                    "px-8 py-4 rounded-button font-body text-base font-medium transition-all text-center",
                    "bg-primary text-white hover:bg-primaryHover shadow-button"
                  )}
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    "px-8 py-4 rounded-button font-body text-base font-medium transition-all text-center",
                    "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  )}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Media */}
          {media && (
            <div className="relative h-[400px] lg:h-full lg:min-h-[500px] rounded-card overflow-hidden shadow-card">
              <Image
                src={media.src}
                alt={media.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
