"use client";

export function fadeInUp(element: HTMLElement, delay: number = 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-fade-up");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
}

export function initScrollAnimations() {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll("[data-animate='fade-up']");
  elements.forEach((element, index) => {
    fadeInUp(element as HTMLElement, index * 100);
  });
}
