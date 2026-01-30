import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import FeatureList from "@/components/FeatureList";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pamper Parties | Swansea, Mumbles, Gower",
  description: "Mobile pamper parties across Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. We bring the kids spa experience to your home.",
  keywords: ["pamper party Swansea", "pamper party Mumbles", "pamper party Gower", "mobile pamper party", "kids spa party", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function PamperPartiesSwanseaPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          title="Pamper Parties in Swansea"
          kicker="Spa at Home"
          subtitle="We bring the full spa experience directly to your home in Swansea and surrounding areas"
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-body text-base leading-relaxed text-text">
                <p>
                  Perfectly Pampered Parties specializes in bringing the ultimate pamper
                  experience to your home in Swansea. No need to travel - we come to you!
                </p>
                <p>
                  Our mobile spa setup transforms any space into a sophisticated pamper party
                  venue. We provide everything needed for a complete spa experience, from
                  professional styling to DIY activities.
                </p>
                <p>
                  Serving Swansea and surrounding areas within a 50 mile radius, we make it easy
                  to create unforgettable memories for your little ones.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-4">What's Included</h3>
                <FeatureList
                  style="list"
                  items={[
                    { title: "Professional hair styling and braiding" },
                    { title: "Mini manicures with water-based nail polish" },
                    { title: "Face masks and skincare" },
                    { title: "Glitter tattoos and face gems" },
                    { title: "DIY bracelet making" },
                    { title: "All equipment and materials provided" },
                    { title: "Professional setup and cleanup" },
                  ]}
                />
              </div>
            </div>

            <div className="bg-primary/10 rounded-card p-8 border-2 border-primary/20 space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Convenience</h4>
                    <p className="font-body text-sm text-mutedText">
                      We come to you - no need to organize transport or worry about venue
                      availability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Professional Service</h4>
                    <p className="font-body text-sm text-mutedText">
                      Our experienced team ensures every child feels special and has a wonderful
                      time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">All-Inclusive</h4>
                    <p className="font-body text-sm text-mutedText">
                      We bring everything needed - you just need to provide the space and the
                      children!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Flexible Packages</h4>
                    <p className="font-body text-sm text-mutedText">
                      Choose from our range of packages to suit your budget and party size.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA to pamper party pricing */}
              <div className="pt-2 flex justify-center">
                <Link
                  href="/packages"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-button font-body text-base font-medium hover:bg-primaryHover shadow-button transition-all duration-300"
                >
                  View Pamper Party Pricing
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
