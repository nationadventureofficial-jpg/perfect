"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  submenu?: Array<{ label: string; href: string }>;
}

interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
  };
  nav?: NavItem[];
  cta?: {
    label: string;
    href: string;
    variant?: "primary" | "outline";
  };
  sticky?: boolean;
  background?: string;
  backdropBlur?: boolean;
}

export default function Header({
  logo = {
    src: "/img/perfectypartieslogo-1.png",
    alt: "Perfectly Pampered Parties",
  },
  nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    {
      label: "Pamper Parties",
      href: "/pamper-parties-swansea",
      submenu: [{ label: "Pamper Parties Pricing", href: "/packages" }],
    },
    {
      label: "Sleepover Tents",
      href: "/tent-pricing",
      submenu: [{ label: "Sleepover Tent Pricing", href: "/sleepover-tent-pricing" }],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  cta = { label: "Book Now", href: "/booking", variant: "primary" },
  sticky = true,
  background = "rgba(255,255,255,0.9)",
  backdropBlur = true,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (openDropdown) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    }

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <header
      className={cn(
        "w-full z-50 transition-all duration-300 relative",
        backdropBlur && "backdrop-blur-md"
      )}
      style={{ 
        background 
      }}
    >
      <div className="w-full px-6">
        <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-center min-h-[60px] py-1.5 relative">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => {
              if (item.submenu && item.submenu.length > 0) {
                return (
                  <div
                    key={item.label}
                    ref={(el) => {
                      dropdownRefs.current[item.label] = el;
                    }}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="flex items-center gap-1 relative">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-text hover:text-primary transition-colors font-body text-base font-medium whitespace-nowrap inline-block"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-text font-body text-base font-medium whitespace-nowrap inline-block">
                          {item.label}
                        </span>
                      )}
                      <button
                        className="text-text hover:text-primary transition-colors flex items-center justify-center w-4 h-4 flex-shrink-0"
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === item.label ? null : item.label);
                        }}
                      >
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openDropdown === item.label && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {openDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 pt-2 w-56 z-50"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="bg-surface rounded-card shadow-card border border-border py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-text hover:text-primary transition-colors font-body text-sm"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div key={item.href || item.label} className="flex items-center gap-6">
                  <Link
                    href={item.href || "#"}
                    className="text-text hover:text-primary transition-colors font-body text-base font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.label === "Contact" && (
                    <Link
                      href={cta.href}
                      className={cn(
                        "px-5 py-2 rounded-button font-body text-base font-medium transition-all",
                        cta.variant === "primary"
                          ? "bg-primary text-white hover:bg-primaryHover shadow-button"
                          : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                      )}
                    >
                      {cta.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute right-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-4 pt-4">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => {
                if (item.submenu && item.submenu.length > 0) {
                  const isSubmenuOpen = openDropdown === item.label;
                  return (
                    <div key={item.label}>
                      <div className="flex items-center justify-between">
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-text hover:text-primary transition-colors font-body text-base font-medium py-2 flex-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-text font-body text-base font-medium py-2 flex-1">
                            {item.label}
                          </span>
                        )}
                        <button
                          className="p-2 text-text hover:text-primary transition-colors"
                          onClick={() =>
                            setOpenDropdown(isSubmenuOpen ? null : item.label)
                          }
                          aria-label="Toggle submenu"
                        >
                          <svg
                            className={cn(
                              "w-4 h-4 transition-transform",
                              isSubmenuOpen && "rotate-180"
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      {isSubmenuOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block text-text hover:text-primary transition-colors font-body text-sm py-1"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href || item.label}
                    href={item.href || "#"}
                    className="text-text hover:text-primary transition-colors font-body text-base font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={cta.href}
                className={cn(
                  "px-6 py-2.5 rounded-button font-body text-sm font-medium transition-all text-center mt-4",
                  cta.variant === "primary"
                    ? "bg-primary text-white hover:bg-primaryHover shadow-button"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {cta.label}
              </Link>
            </nav>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}
