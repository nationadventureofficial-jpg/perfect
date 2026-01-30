import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Perfectly Pampered Parties | Pamper Party & Sleepover Tents | Swansea, Mumbles, Gower",
    template: "%s | Perfectly Pampered Parties",
  },
  description: "Mobile pamper parties and sleepover tents in Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Kids spa parties and tent hire for South Wales.",
  keywords: ["pamper party", "Swansea", "Mumbles", "Gower", "sleepover tent", "Mayhill", "Townhill", "Port Talbot", "Penard", "kids party", "spa party", "Perfectly Pampered Parties"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
