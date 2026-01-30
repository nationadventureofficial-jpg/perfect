import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PackageCard from "@/components/PackageCard";
import HighlightBanner from "@/components/HighlightBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleepover Tent Pricing | Swansea, Mumbles, Gower",
  description: "Sleepover tent pricing and packages for Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Kids teepee and tent hire options.",
  keywords: ["sleepover tent pricing Swansea", "sleepover tent Mumbles", "sleepover tent Gower", "tent hire", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function SleepoverTentPricingPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          id="sleepover-tent-pricing"
          anchor="sleepover-tent-pricing"
          title="Sleepover Tent Pricing"
          subtitle="Serving Swansea and surrounding areas in South Wales"
        >
          <div className="flex justify-center">
            <PackageCard
              id="sleepover-perfect-tents"
              badge="THE PERFECT SLEEPOVER TENTS"
              meta="Per tent pricing · DIY or full setup service"
              price="£30 / £40 per tent"
              finePrint="Price is subject to a distance fee · Deposit required"
              bullets={[
                "Personalised Perfectly sleepover board",
                "Tent, mattress & sleepover tray",
                "Mattress sheet, fleece blanket and cover for pillow",
                "Your chosen theme will include a range of matching items",
                "Example: string lighting, themed covers and pillows, bunting etc.",
              ]}
              highlight="Option 1: DIY setup – collect your set-up from our Landore warehouse and set it up yourself (£30 per tent). Option 2: Setup service – delivered, set up and collected for you within 5 miles (£40 per tent)."
              cta={{ label: "BOOK NOW", href: "/contact", variant: "primary" }}
              footerNote="The Perfect Sleepover Tents"
            />
          </div>
        </Section>

        {/* Add-ons section can be reintroduced later if needed */}
      </main>
      <Footer />
    </>
  );
}
