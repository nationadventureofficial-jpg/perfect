import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PackageCard from "@/components/PackageCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Princess Parties | Swansea, Mumbles, Gower",
  description: "Princess pamper parties across Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Royal-themed kids spa parties for your little princess.",
  keywords: ["princess party Swansea", "princess pamper party", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard", "kids princess party"],
};

export default function PrincessPartiesSwanseaPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          title="Princess Parties in Swansea"
          kicker="Royal Treatment"
          subtitle="Make your little princess feel like royalty with our special princess-themed pamper parties!"
        >
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <div className="space-y-4 font-body text-base leading-relaxed text-text">
              <p>
                Our Princess Parties are perfect for little ones who dream of being royalty! We
                bring the magic of a royal spa experience directly to your home in Swansea.
              </p>
              <p>
                Each princess will receive the full pamper treatment with a royal twist - think
                tiara hair styling, princess-themed nail art, and glittery makeovers fit for a
                queen!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <PackageCard
              id="princess-basic"
              badge="PRINCESS"
              meta="8 GIRLS / £40 per additional guest"
              price="£500"
              finePrint="* Not including gratuity"
              bullets={[
                "Princess tiara hair styling",
                "Royal nail art with princess themes",
                "Glittery face gems and temporary tattoos",
                "Princess-themed face masks",
                "DIY princess accessories",
                "Princess robes and accessories",
                "Royal photo opportunities",
              ]}
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="ALL PACKAGES ( 1 hour 40 minutes )"
            />
            <PackageCard
              id="princess-deluxe"
              badge="ROYAL"
              meta="8 GIRLS / £50 per additional guest"
              price="£650"
              finePrint="* Not including gratuity"
              highlight="Includes: Princess gift bag, personalized tiara, royal certificate, and professional photos"
              bullets={[
                "All Princess package features",
                "Personalized princess tiara",
                "Royal certificate for each guest",
                "Professional photo session",
                "Princess gift bag with goodies",
                "Extra DIY activities",
                "Extended party time (2 hours)",
              ]}
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="ALL PACKAGES ( 2 hours )"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
