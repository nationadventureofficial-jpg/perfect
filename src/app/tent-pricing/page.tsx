import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleepover Tents | Swansea, Mumbles, Gower",
  description: "Sleepover tent hire in Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Kids teepee and sleepover tent setups for your home.",
  keywords: ["sleepover tent Swansea", "sleepover tent Mumbles", "sleepover tent Gower", "kids teepee", "tent hire Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function TentPricingPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          title="Sleepover Tent/TeePee Hire"
          subtitle="We offer a great range of themed children's sleepover tents in Swansea"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 font-body text-base leading-relaxed text-text">
              <p>
                We offer a great range of themed children's sleepover tents in Swansea. All of our tents are made by us.
              </p>
              <p>
                Our tents are perfect for children's indoor sleepover camp outs, and they are also great for children's parties too! We have great packages, perfect for your parties and sleepovers. Don't worry about the hassle of setting up before the indoor tent party, as we will do the set up for you. We will be back with you the very next day for clean up and collect, making it a very stress-free party.
              </p>
              <p>
                Our children's sleepover tents in Swansea include a wide range of items that tie together to make the perfect sleepover. Find out more about our children's sleepover packages and book your party today.
              </p>
              <p>
                Our children's sleepover tents don't just have to be for sleepovers. They are perfect for daytime parties too!
              </p>
              <p>
                Why not book our tents for the kids to hang out in at your child's birthday party or movie party. We take the hassle out of the setup and clean up too, setting up the tents in the preferred area when we come to deliver and packing and clearing away the tents and accessories when we come to collect the next day.
              </p>
              <p>
                Book your children's sleepover tents in Swansea today.
              </p>
              <p>
                For prices please call us or contact us through the booking system form Prices vary on the amount of tents/teepees you hire.
              </p>
            </div>

            {/* 3 Images in a row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src="/img/tentssleepover.png"
                  alt="Sleepover tent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src="/img/pamper party.png"
                  alt="Pamper party"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src="/img/tentssleepover.png"
                  alt="Sleepover tent setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Link
                href="/sleepover-tent-pricing"
                className="inline-block px-6 py-3 bg-primary text-white rounded-button font-body text-base font-medium hover:bg-primaryHover shadow-button transition-all duration-300"
              >
                View Sleepover Tent Pricing
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
