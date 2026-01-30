import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery of pamper parties and sleepover tents across Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. See our kids party themes and setups.",
  keywords: ["pamper party gallery Swansea", "sleepover tent photos", "party gallery", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

const GALLERY_IMAGES = [
  { src: "/img/pamper-party-new-1.png", alt: "Pamper party nail painting" },
  { src: "/img/pamper-party-new-2.png", alt: "Pamper parties rule – foot spa" },
  { src: "/img/pamper-party-new-3.png", alt: "Pamper party group in robes" },
  { src: "/img/pamper-party-new-4.png", alt: "Glitter tattoos at pamper party" },
  { src: "/img/pamper-party-new-5.png", alt: "Nail painting at pamper party" },
  { src: "/img/pamper-party-new-6.png", alt: "Face glitter at pamper party" },
  { src: "/img/pamper-party-new-7.png", alt: "Nail art at pamper party" },
  { src: "/img/pamper-party-new-8.png", alt: "Photo booth at pamper party" },
  { src: "/img/about-hero.jpg", alt: "About Perfectly Pampered Parties" },
  { src: "/img/Drama-Llama-1.jpg", alt: "Drama Llama themed party" },
  { src: "/img/Flamingo-Paradise-1.jpg", alt: "Flamingo Paradise themed party" },
  { src: "/img/rose-gold-tents-1.jpg", alt: "Rose gold sleepover tents" },
  { src: "/img/Wizards-Theme-1.jpg", alt: "Wizards theme party" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Gallery" kicker="Moment Captured">
          <Gallery
            images={GALLERY_IMAGES}
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            lightbox={true}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
