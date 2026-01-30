import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import PackageCard from "@/components/PackageCard";
import StarsAnimation from "@/components/StarsAnimation";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PlayfulGallery from "@/components/PlayfulGallery";
import TeamSection from "@/components/TeamSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pamper Party & Sleepover Tents | Swansea, Mumbles, Gower",
  description: "Mobile pamper parties and sleepover tents across Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Kids spa parties with mini manis, braids, glitter tattoos and magical tent setups.",
  keywords: ["pamper party Swansea", "pamper party Mumbles", "pamper party Gower", "sleepover tent Swansea", "sleepover tent Mumbles", "kids party Mayhill", "Townhill", "Port Talbot", "Penard"],
  openGraph: {
    title: "Perfectly Pampered Parties | Pamper Party & Sleepover Tents | Swansea, Mumbles, Gower",
    description: "Mobile pamper parties and sleepover tents in Swansea, Mumbles, Gower and across South Wales.",
    type: "website",
    images: ["https://sparklingkidsparty.com/wp-content/uploads/2024/06/sparkling-web.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <StarsAnimation count={60} />
      <Header />
      <main className="relative" style={{ zIndex: 10 }}>
        <HeroSlider
          slides={[
            {
              headline: "Welcome to\nPerfectly Pampered Parties",
              subheadline: "Creating magical pamper party experiences for boys and girls in Swansea",
              textAlign: { mobile: "center", desktop: "left" },
              logo: {
                src: "/img/perfectypartieslogo-1.png",
                alt: "Perfectly Pampered Parties",
                width: 313,
                height: 125,
              },
              primaryCta: { label: "Book Now!", href: "/contact" },
              secondaryCta: { label: "View Packages", href: "/packages", variant: "outline" },
              decorations: [
                { assetId: "bubbles-1", position: "top-right", opacity: 0.9, scale: 0.75 },
                { assetId: "stars-1", position: "bottom-left", opacity: 0.9, scale: 0.75 },
                { assetId: "stars-1", position: "top-left", opacity: 0.7, scale: 0.6 },
                { assetId: "bubbles-1", position: "bottom-right", opacity: 0.8, scale: 0.65 },
              ],
              background: {
                type: "gradient",
                value:
                  "radial-gradient(circle at 20% 20%, rgba(255,79,184,0.25), transparent 50%), radial-gradient(circle at 80% 10%, rgba(255,209,102,0.28), transparent 50%), radial-gradient(circle at 50% 80%, rgba(255,182,193,0.2), transparent 50%), linear-gradient(180deg, #fff0f8 0%, #fff7fc 50%, #ffffff 100%)",
              },
            },
            {
              headline: "Let the magic\nStart with us!",
              subheadline: "We pamper your child and their friends at our unique experiential spa!",
              textAlign: { mobile: "center", desktop: "center" },
              primaryCta: { label: "Book Now!", href: "/contact" },
              secondaryCta: { label: "View Packages", href: "/packages", variant: "outline" },
              media: {
                type: "image",
                src: "https://sparklingkidsparty.com/wp-content/uploads/2024/06/sparkling-web.jpg",
                alt: "Kids spa party",
              },
              decorations: [
                { assetId: "bubbles-1", position: "top-right", opacity: 0.9, scale: 0.75 },
                { assetId: "stars-1", position: "bottom-left", opacity: 0.9, scale: 0.75 },
              ],
              background: {
                type: "gradient",
                value:
                  "radial-gradient(circle at 20% 20%, rgba(255,79,184,0.18), transparent 40%), radial-gradient(circle at 80% 10%, rgba(255,209,102,0.22), transparent 45%), linear-gradient(180deg, #ffffff 0%, #fff7fc 100%)",
              },
            },
            {
              headline: "Magical Sleepover\nTents & Experiences!",
              subheadline: "Transform your home into a dreamy sleepover paradise with our beautiful tent setups!",
              textAlign: { mobile: "center", desktop: "center" },
              primaryCta: { label: "View Tents", href: "/tent-pricing" },
              secondaryCta: { label: "Book Now!", href: "/contact", variant: "outline" },
              media: {
                type: "image",
                src: "https://sparklingkidsparty.com/wp-content/uploads/2024/06/sparkling-web.jpg",
                alt: "Sleepover tents",
              },
              decorations: [
                { assetId: "stars-1", position: "top-right", opacity: 0.9, scale: 0.75 },
                { assetId: "bubbles-1", position: "bottom-left", opacity: 0.9, scale: 0.75 },
              ],
              background: {
                type: "gradient",
                value:
                  "radial-gradient(circle at 20% 20%, rgba(255,79,184,0.18), transparent 40%), radial-gradient(circle at 80% 10%, rgba(255,209,102,0.22), transparent 45%), linear-gradient(180deg, #fff7fc 0%, #ffffff 100%)",
              },
            },
          ]}
          autoRotate={true}
          intervalMs={15000}
        />

        <Section
          id="about"
          title="About Us"
          titleFont="decorative"
          titleColor="#ff4fb8"
          subtitle="Perfectly Pampered Parties - Swansea"
          subtitleColor="#ff4fb8"
          className="relative z-10"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Kids Pampered Parties, Mumbles, Gower and the whole of Swansea</h3>
              <p className="font-body text-base leading-relaxed text-text mb-4">
                Do you want to do something a little different for your little princess this year, or has your daughter heard about these awesome pampered parties? If you've ever planned a kid's party, you know how expensive and stressful it can be to set everything up and figure out how to keep the kids occupied so nobody gets bored. What can you do to make your child's birthday truly memorable and the talk of the mothers' group and the classroom?
              </p>
              <p className="font-body text-base leading-relaxed text-text mb-4">
                Why not consult the professionals? With over 4 years of experience, Perfectly Pampered Parties has thrown kid-friendly events. Whether your party is princess, unicorn, or fairy themed, we specialize in only kids pampered parties for ages 4+ and can help you create an unforgettable experience.
              </p>
              <p className="font-body text-base leading-relaxed text-text mb-4">
                Every child will receive perfect pampering and have an amazing day.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Who We Are</h3>
              <p className="font-body text-base leading-relaxed text-text">
                <strong>Since 2018, Perfectly Pampered Parties</strong> has created a lavish atmosphere for boys and girls to celebrate life's luxuries. <strong>We will always work with you and help you make your party the best, most creative and beautiful for your child and their friends!</strong> <em>Call Perfectly Pampered Parties</em> to discuss your next celebration!
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          title="Celebrate your child's birthday party"
          titleFont="decorative"
          titleColor="#ff4fb8"
          subtitle="Perfectly Pampered Parties offers:"
          className="relative z-10"
        >
          <div className="max-w-6xl mx-auto mb-12">
            {/* Fun Image Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 max-w-4xl mx-auto">
              {/* Pamper parties */}
              <div>
                <Link href="/pamper-parties-swansea" className="group block">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/img/pamper party.png"
                      alt="Pamper party"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm py-2 text-center">
                      <span className="text-sm md:text-base font-body font-semibold text-white">
                        Click here for more pamper party info
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Kids teepees / tents */}
              <div>
                <Link href="/tent-pricing" className="group block">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/img/tents.png"
                      alt="Kids teepees and sleepover tents"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm py-2 text-center">
                      <span className="text-sm md:text-base font-body font-semibold text-white">
                        Click here for more kids teepee info
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Playful Gallery Section */}
        <PlayfulGallery
          images={[
            { src: "/img/gallery-rose-gold-tents.jpg", alt: "Rose gold sleepover tents" },
            { src: "/img/gallery-flamingo.jpg", alt: "Flamingo theme pamper party" },
            { src: "/img/pamper-party-new-1.png", alt: "Pamper party nail painting" },
            { src: "/img/pamper-party-new-2.png", alt: "Pamper parties rule – foot spa" },
            { src: "/img/gallery-robes.jpg", alt: "Kids in spa robes at pamper party" },
            { src: "/img/gallery-dolls.jpg", alt: "Surprise dolls theme party" },
            { src: "/img/gallery-llama.jpg", alt: "Drama Llama theme party" },
            { src: "/img/pamper-party-new-3.png", alt: "Pamper party group in robes" },
            { src: "/img/gallery-safari.jpg", alt: "Safari theme party" },
            { src: "/img/pamper-party-new-4.png", alt: "Glitter tattoos at pamper party" },
          ]}
        />

        <Section
          id="kids-pampered-parties"
          title="Kids Pampered Parties"
          titleFont="decorative"
          titleColor="#ff4fb8"
          subtitle="Kids Pampered Parties Swansea, Mumbles & Gower"
          subtitleColor="#ff4fb8"
          className="relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 font-body text-base leading-relaxed text-text">
                <p>
                  Our pamper parties are designed to make your little one and their friends feel like royalty. With a variety of delightful activities, including mini-manicures, face painting, and soothing facials, every child will leave feeling pampered and happy.
                </p>
                <p>
                  Our experienced staff ensures a safe and enjoyable environment, allowing parents to sit back and watch their children have a blast. Book a Kids Pamper Party with us and give your child the magical experience they deserve.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/pamper party.png"
                  alt="Kids pampered party"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="team"
          className="relative z-10"
        >
          <TeamSection
            members={[
              { name: "Rebecca", role: "Owner/Director", image: "/img/person-silhouette.svg" },
              { name: "Kelsey", role: "Mini-mani & Pedi Stylist", image: "/img/person-silhouette.svg" },
              { name: "Kez", role: "Mini-mani & Pedi Stylist", image: "/img/person-silhouette.svg" },
              { name: "Katie", role: "Mini-mani & Pedi Stylist", image: "/img/person-silhouette.svg" },
            ]}
          />
        </Section>

      </main>
      <Footer />
    </>
  );
}
