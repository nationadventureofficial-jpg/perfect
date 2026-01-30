"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

interface PlayfulGalleryProps {
  images: GalleryImage[];
}

export default function PlayfulGallery({ images }: PlayfulGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
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
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        className="relative overflow-hidden pt-[60px] pb-[80px] md:pt-[90px] md:pb-[120px]"
        style={{
          backgroundColor: "#4F86C6",
        }}
      >
        <div className="w-full px-6">
          <div className="max-w-[1100px] mx-auto">
            {/* Heading */}
            <div className="text-center mb-12" style={{ marginBottom: "50px" }}>
              <h2
                className="font-display font-bold text-white text-[32px] md:text-[42px]"
                style={{
                  letterSpacing: "0.5px",
                  marginBottom: "12px",
                }}
              >
                Gallery
              </h2>
              {/* Decorative wave underline */}
              <div className="flex justify-center mt-3">
                <svg
                  width="180"
                  height="12"
                  viewBox="0 0 180 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8C15 4, 25 10, 35 6C45 2, 55 8, 65 5C75 2, 85 9, 95 6C105 3, 115 10, 125 7C135 4, 145 11, 155 8C165 5, 175 11, 175 11"
                    stroke="#AEE6FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative Elements */}
            {/* Balloon Character - Top Left */}
            <div
              className="absolute pointer-events-none hidden md:block"
              style={{
                left: "-20px",
                top: "20px",
                width: "200px",
                zIndex: 1,
              }}
            >
              <Image
                src="/img/globo2-min.png"
                alt="Balloon decoration"
                width={200}
                height={260}
                className="h-auto w-auto"
              />
            </div>

            {/* Cloud Left */}
            <div
              className="absolute pointer-events-none hidden lg:block"
              style={{
                left: "-40px",
                top: "120px",
                width: "120px",
              }}
            >
              <Image
                src="/img/globo1-min.png"
                alt="Cloud decoration"
                width={120}
                height={80}
                className="h-auto w-auto"
              />
            </div>

            {/* Cloud Right */}
            <div
              className="absolute pointer-events-none hidden lg:block"
              style={{
                right: "-30px",
                top: "160px",
                width: "140px",
              }}
            >
              <Image
                src="/img/globo1-min.png"
                alt="Cloud decoration"
                width={140}
                height={90}
                className="h-auto w-auto"
              />
            </div>

            {/* Confetti Stars - Top Right */}
            <div
              className="absolute pointer-events-none hidden md:block"
              style={{
                right: "-40px",
                top: "40px",
              }}
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 10 L 52 20 L 62 20 L 54 26 L 56 36 L 50 30 L 44 36 L 46 26 L 38 20 L 48 20 Z"
                  fill="#FFD700"
                />
                <path
                  d="M 70 50 L 71 55 L 76 55 L 72 58 L 73 63 L 70 60 L 67 63 L 68 58 L 64 55 L 69 55 Z"
                  fill="#FFB6D9"
                />
                <circle cx="80" cy="30" r="4" fill="#FFD700" />
                <circle cx="85" cy="45" r="3" fill="#FFB6D9" />
              </svg>
            </div>

            {/* Gallery Grid */}
            <div
              className={cn(
                "grid gap-2.5 md:gap-3.5",
                "grid-cols-2",
                "md:grid-cols-3",
                "lg:grid-cols-5"
              )}
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className={cn(
                    "relative aspect-square overflow-hidden",
                    "bg-white",
                    "hover:scale-[1.03] transition-transform duration-250 ease-out",
                    "focus:outline-none focus:ring-2 focus:ring-[#FFD166] focus:ring-offset-4",
                    "group"
                  )}
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100",
                      "transition-opacity duration-250 ease-out",
                      "flex items-center justify-center"
                    )}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-90"
                    >
                      <path
                        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-10">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={1200}
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
