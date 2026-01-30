import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import HighlightBanner from "@/components/HighlightBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Offers",
  description: "Special offers on pamper parties and sleepover tents in Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Save on your next kids party.",
  keywords: ["pamper party offers Swansea", "sleepover tent deals", "party offers", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function SpecialOffersPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Special Offers" kicker="Limited Time Deals">
          <div className="max-w-4xl mx-auto space-y-8">
            <HighlightBanner
              title="Try Our New Braid & Brush Package!"
              content={[
                "Let the creativity and glam shine together! Braid and brush is the perfect blend of artistic fun and fabulous makeovers.",
                "While the girls sit around a colorful table painting their own pre-drawn canvases, our professional glam crew adds a splash of style with vibrant braid-in hair extensions—all happening at the same time for non-stop fun!",
                "Each girl takes home a reusable 'Color Me' plastic mug—ready to be colored, erased, and designed again and again!",
              ]}
              price="£600"
              finePrint="* Not including gratuity"
              meta="8 GIRLS / £45 per additional guest | ALL PACKAGES ( 1 hour 40 minutes )"
              cta={{ label: "Book Now", href: "/contact", variant: "primary" }}
              note="Payment can be made by bank transfer, card payment, or cash"
            />
            <div className="bg-secondary/20 rounded-card p-8 border-2 border-secondary/30">
              <h3 className="font-display text-2xl font-bold mb-4">Referral Discount</h3>
              <p className="font-body text-base leading-relaxed text-text mb-4">
                Refer a friend and both parties receive 10% off their next booking! Terms and
                conditions apply.
              </p>
            </div>
            <div className="bg-primary/10 rounded-card p-8 border-2 border-primary/20">
              <h3 className="font-display text-2xl font-bold mb-4">Seasonal Promotions</h3>
              <p className="font-body text-base leading-relaxed text-text mb-4">
                Keep an eye on our social media for seasonal promotions and special holiday
                packages throughout the year!
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
