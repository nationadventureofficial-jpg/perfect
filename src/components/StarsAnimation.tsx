"use client";

import { useEffect, useRef, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  baseOpacity: number;
  initialY: number;
}

interface StarsAnimationProps {
  count?: number;
  className?: string;
}

export default function StarsAnimation({ count = 60, className = "" }: StarsAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const animationFrameRef = useRef<number>();

  // Initialize stars
  useEffect(() => {
    const initialStars: Star[] = Array.from({ length: count }, (_, i) => {
      // Create more variation in sizes - some small, some medium, some large
      const sizeRandom = Math.random();
      let size;
      if (sizeRandom < 0.5) {
        // 50% small stars
        size = Math.random() * 2 + 1;
      } else if (sizeRandom < 0.85) {
        // 35% medium stars
        size = Math.random() * 3 + 3;
      } else {
        // 15% large stars
        size = Math.random() * 4 + 6;
      }
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        speed: Math.random() * 0.3 + 0.1,
        baseOpacity: Math.random() * 0.6 + 0.4,
        initialY: Math.random() * 100,
      };
    });
    setStars(initialStars);
  }, [count]);

  // Handle scroll with requestAnimationFrame for smooth updates
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate stars based on scroll
  useEffect(() => {
    if (stars.length === 0) return;

    const animate = () => {
      setStars((prevStars) => {
        if (prevStars.length === 0) return prevStars;
        
        return prevStars.map((star) => {
          // Move stars upward as you scroll down (parallax effect)
          // Stars move at different speeds for depth
          const parallaxOffset = (scrollY * star.speed) / 10;
          let newY = star.initialY - parallaxOffset;
          
          // Reset star position when it goes off screen (wrap around)
          if (newY < -10) {
            newY = 110;
          } else if (newY > 110) {
            newY = -10;
          }

          // Twinkling effect using sine wave
          const time = Date.now() * 0.001;
          const twinkle = Math.sin(time * 2 + star.id) * 0.3;
          const newOpacity = Math.max(0.2, Math.min(1, star.baseOpacity + twinkle));

          return {
            ...star,
            y: newY,
            opacity: newOpacity,
          };
        });
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [stars.length, scrollY]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            opacity: star.opacity,
            transform: `translate(-50%, -50%)`,
            willChange: "transform, opacity",
          }}
        >
          <svg
            width={star.size * 2}
            height={star.size * 2}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: `drop-shadow(0 0 ${star.size}px rgba(255, 79, 184, 0.8)) drop-shadow(0 0 ${star.size * 2}px rgba(255, 79, 184, 0.5))`,
            }}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="rgba(255, 79, 184, 0.9)"
              stroke="rgba(255, 79, 184, 0.6)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
