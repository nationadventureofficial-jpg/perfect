import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  newsletter?: {
    title: string;
    description: string;
    form?: {
      action: string;
      fields: Array<{ type: string; name: string; label: string; placeholder?: string; required?: boolean }>;
      submit: { label: string; variant?: string };
    };
  };
  about?: {
    title: string;
    text: string;
  };
  social?: {
    title: string;
    links: Array<{ label: string; href: string }>;
  };
  contact?: {
    title: string;
    items: string[];
  };
  copyright?: string;
}

export default function Footer({
  newsletter = {
    title: "Subscribe Our Newsletter",
    description: "Stay updated with our latest party packages and special offers.",
    form: {
      action: "/api/subscribe",
      fields: [{ type: "email", name: "email", label: "Email", placeholder: "you@example.com", required: true }],
      submit: { label: "Subscribe", variant: "primary" },
    },
  },
  about = {
    title: "About",
    text: "Seems like the little ones are growing and little girls love acting like grown-up. Rather than taking them to the salon, we bring the pampering to your house.",
  },
  social = {
    title: "Follow Us",
    links: [{ label: "Instagram", href: "https://www.instagram.com/sparkling_kidsparty/" }],
  },
  contact = {
    title: "Contact Info",
    items: [
      "Swansea, UK",
      "Contact us for bookings",
      "info@perfectlypamperedparties.co.uk",
      "Mon - Sat: 09:00 AM - 05:00 PM",
      "Appointments available",
      "Serving Swansea and surrounding areas within 50 miles",
    ],
  },
  copyright = "Copyright © 2026 Perfectly Pampered Parties, All rights reserved.",
}: FooterProps) {
  return (
    <footer className="bg-pink-50 border-t border-border mt-20">
      <div className="w-full px-6 py-12">
        <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="inline-block">
              <Image
                src="/img/perfectypartieslogo-1.png"
                alt="Perfectly Pampered Parties"
                width={120}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">{about.title}</h3>
            <p className="text-mutedText text-sm font-body leading-relaxed">{about.text}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">{contact.title}</h3>
            <ul className="space-y-2">
              {contact.items.map((item, index) => (
                <li key={index} className="text-mutedText text-sm font-body">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-mutedText text-sm font-body">
            {copyright}
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
