"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: { mobile: number; tablet: number; desktop: number };
  lightbox?: boolean;
}

export default function Gallery({
  images,
  columns = { mobile: 2, tablet: 3, desktop: 4 },
  lightbox = true,
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    if (lightbox) {
      setSelectedImage(index);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images.length]);

  const gridClassMap: Record<number, { base: string; md: string; lg: string }> = {
    1: { base: "grid-cols-1", md: "md:grid-cols-1", lg: "lg:grid-cols-1" },
    2: { base: "grid-cols-2", md: "md:grid-cols-2", lg: "lg:grid-cols-2" },
    3: { base: "grid-cols-3", md: "md:grid-cols-3", lg: "lg:grid-cols-3" },
    4: { base: "grid-cols-4", md: "md:grid-cols-4", lg: "lg:grid-cols-4" },
  };

  const mobileClasses = gridClassMap[columns.mobile] || gridClassMap[2];
  const tabletClasses = gridClassMap[columns.tablet] || gridClassMap[3];
  const desktopClasses = gridClassMap[columns.desktop] || gridClassMap[4];

  return (
    <>
      <div
        className={cn(
          "grid gap-2.5 md:gap-3.5",
          mobileClasses.base,
          tabletClasses.md,
          desktopClasses.lg
        )}
      >
        {images.map((image, index) => {
          const isValidUrl = image.src && !image.src.startsWith('PLACEHOLDER') && (image.src.startsWith('http') || image.src.startsWith('/'));
          return (
            <button
              key={index}
              className={cn(
                "relative aspect-square overflow-hidden rounded-2xl cursor-pointer group",
                "transition-transform duration-300 hover:scale-[1.03]",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
              onClick={() => openLightbox(index)}
              aria-label={`Open gallery image ${index + 1} of ${images.length}`}
            >
              {isValidUrl ? (
                <>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  {/* Dark overlay with zoom icon on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                  <span className="text-mutedText font-body text-sm text-center px-4">{image.alt}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox && selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
          }}
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-all z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-all z-10"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-all z-10"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {images[selectedImage].src && !images[selectedImage].src.startsWith('PLACEHOLDER') && (images[selectedImage].src.startsWith('http') || images[selectedImage].src.startsWith('/')) ? (
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full bg-black/50 flex items-center justify-center">
                <span className="text-white font-body">{images[selectedImage].alt}</span>
              </div>
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-body bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
