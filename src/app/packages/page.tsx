import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PackageCard from "@/components/PackageCard";
import HighlightBanner from "@/components/HighlightBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pamper Party Packages | Swansea, Mumbles, Gower",
  description: "Pamper party packages in Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Glitter, Perfectly Pampered and Really Pampered party options. Book your kids spa party.",
  keywords: ["pamper party packages Swansea", "pamper party Mumbles", "pamper party Gower", "kids spa party", "glitter party", "party packages Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          id="packages"
          anchor="packages"
          title="Pamper Party Packages"
          subtitle="Serving Swansea and surrounding areas in South Wales"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <PackageCard
              id="package-glitter"
              badge="GLITTER PAMPER PARTY"
              meta="Up to 8 children · approx 1.5 hours · extra guests £12.50 each"
              price="£140"
              finePrint="Price is subject to a distance fee · Deposit required"
              bullets={[
                "Pink bubbles served in champagne flutes on arrival",
                "Use of robes and headbands",
                "Personalised birthday frame for photos",
                "Relaxing face mask, cool cucumbers, finish with warm towel",
                "Nails shape & polish on hands",
                "Glitter tattoo each",
                "Festival glitter",
              ]}
              highlight="Includes a birthday gift for the birthday child and your favourite music played throughout."
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="Glitter Pamper Party"
            />

            <PackageCard
              id="package-perfectly-pampered"
              badge="PERFECTLY PAMPERED PARTY"
              meta="Up to 8 children · approx 2 hours · extra guests £15 each"
              price="£160"
              finePrint="Price is subject to a distance fee · Deposit required"
              bullets={[
                "Pink bubbles served in champagne flutes on arrival",
                "Use of robes and headbands",
                "Personalised birthday frame for photos",
                "Relaxing face mask, cool cucumbers, finish with warm towel",
                "Nails shape & polish on hands",
                "Foot soak and mini foot massage with choice of polish on toes",
                "Glitter tattoo each",
              ]}
              highlight="Includes a birthday gift for the birthday child and your favourite music played throughout."
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="Perfectly Pampered Party"
            />

            <PackageCard
              id="package-really-pampered"
              badge="REALLY PAMPERED PARTY"
              meta="Up to 8 children · approx 2 hours · extra guests £15 each"
              price="£190"
              finePrint="Price is subject to a distance fee · Deposit required"
              bullets={[
                "Pink bubbles served in champagne flutes on arrival",
                "Use of robes and headbands",
                "Personalised birthday frame for photos",
                "Relaxing face mask, cool cucumbers, finish with warm towel",
                "Nails shape & polish on hands",
                "Light up Hollywood box",
                "Hair tidy with a clip-in coloured hair extension",
                "Age appropriate makeup",
                "Glitter tattoo each",
              ]}
              highlight="Includes a birthday gift for the birthday child and your favourite music played throughout."
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="Really Pampered Party"
            />

            <PackageCard
              id="package-really-pampered-braids"
              badge="REALLY PAMPERED WITH BRAIDS"
              meta="Up to 8 children · approx 2 hours · extra guests £15 each"
              price="£230"
              finePrint="Price is subject to a distance fee · Deposit required"
              bullets={[
                "Pink bubbles served in champagne flutes on arrival",
                "Use of robes and headbands",
                "Personalised birthday frame for photos",
                "Relaxing face mask, cool cucumbers, finish with warm towel",
                "Nails shape & polish on hands",
                "Light up Hollywood box & director's chair",
                "Choice of hairstyle including hair braids + clip-in extensions",
                "Age appropriate makeup",
                "Glitter tattoo each",
              ]}
              highlight="Includes a birthday gift for the birthday child and your favourite music played throughout."
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="Really Pampered Party with Braids"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
