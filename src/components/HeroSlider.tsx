"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { decorations } from "@/theme/decorations";

interface HeroSlide {
  headline: string;
  subheadline?: string;
  textAlign?: { mobile: "left" | "center" | "right"; desktop: "left" | "center" | "right" };
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string; variant?: "outline" };
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
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
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoRotate?: boolean;
  intervalMs?: number;
  minHeight?: { mobile: number; desktop: number };
}

export default function HeroSlider({
  slides,
  autoRotate = true,
  intervalMs = 6000,
  minHeight = { mobile: 560, desktop: 640 },
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [autoRotate, intervalMs, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: `${minHeight.mobile}px`,
        zIndex: 10,
        position: "relative",
        background: "linear-gradient(180deg, #fff0f8 0%, #fff7fc 50%, #ffffff 100%)",
      }}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            style={{
              background: slide.background?.value || "linear-gradient(180deg, #ffffff 0%, #fff7fc 100%)",
              minHeight: "100%",
            }}
          >
            {/* Decorative overlays */}
            {slide.decorations?.map((dec, decIndex) => {
              const decoration = decorations[dec.assetId];
              const positionClasses = {
                "top-right": "top-0 right-0",
                "bottom-left": "bottom-0 left-0",
                "top-left": "top-0 left-0",
                "bottom-right": "bottom-0 right-0",
              };
              return (
                <div
                  key={decIndex}
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
                      slide.textAlign?.mobile === "center" && "text-center",
                      slide.textAlign?.mobile === "right" && "text-right",
                      slide.logo ? "lg:text-left" : "lg:text-left"
                    )}
                  >
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                      {slide.headline.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < slide.headline.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    {slide.subheadline && (
                      <p className="text-mutedText font-body text-lg md:text-xl max-w-xl">
                        {slide.subheadline}
                      </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {slide.primaryCta && (
                        <Link
                          href={slide.primaryCta.href}
                          className={cn(
                            "px-8 py-4 rounded-button font-body text-base font-medium transition-all text-center",
                            "bg-primary text-white hover:bg-primaryHover shadow-button"
                          )}
                        >
                          {slide.primaryCta.label}
                        </Link>
                      )}
                      {slide.secondaryCta && (
                        <Link
                          href={slide.secondaryCta.href}
                          className={cn(
                            "px-8 py-4 rounded-button font-body text-base font-medium transition-all text-center",
                            "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                          )}
                        >
                          {slide.secondaryCta.label}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Media or Logo */}
                  {slide.media ? (
                    <div className="relative h-[400px] lg:h-full lg:min-h-[500px] rounded-card overflow-hidden shadow-card">
                      <Image
                        src={slide.media.src}
                        alt={slide.media.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ) : slide.logo ? (
                    <div className="relative h-[400px] lg:h-full lg:min-h-[500px] flex items-center justify-center">
                      <Image
                        src={slide.logo.src}
                        alt={slide.logo.alt}
                        width={slide.logo.width || 250}
                        height={slide.logo.height || 100}
                        className="h-auto w-auto"
                        priority={index === 0}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center px-4 py-2 rounded-full bg-white/92 backdrop-blur-md shadow-2xl ring-1 ring-primary/12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary/90 hover:bg-primary w-9 h-3.5 shadow-lg shadow-primary/50"
                  : "bg-primary/70 hover:bg-primary/80 w-3.5 h-3.5 ring-1 ring-primary/40 shadow-md shadow-black/20"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
