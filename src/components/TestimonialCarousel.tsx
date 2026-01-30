"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
}

interface TestimonialCarouselProps {
  cards: Testimonial[];
  cta?: { label: string; href: string; variant?: "primary" };
  autoRotate?: boolean;
  intervalMs?: number;
}

export default function TestimonialCarousel({
  cards,
  cta,
  autoRotate = true,
  intervalMs = 6000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || cards.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [autoRotate, intervalMs, cards.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-surface rounded-card p-8 md:p-12 shadow-card max-w-3xl mx-auto">
                <p className="text-text font-body text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{card.quote}"
                </p>
                <p className="text-primary font-body font-semibold">— {card.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      {cards.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex ? "bg-primary w-8" : "bg-border"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows */}
      {cards.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-surface rounded-full shadow-card hover:bg-primary hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-surface rounded-full shadow-card hover:bg-primary hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* CTA */}
      {cta && (
        <div className="text-center mt-8">
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
        </div>
      )}
    </div>
  );
}
