import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Perfectly Pampered Parties – mobile pamper parties and sleepover tents across Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Kids spa parties since 2018.",
  keywords: ["pamper party Swansea", "Perfectly Pampered Parties", "about us", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard", "kids party"],
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <Section
          title="About Perfectly Pampered Parties"
          titleFont="decorative"
          titleColor="#ff4fb8"
          kicker="Our Story"
          className="relative z-10"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Top row with image and story */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card shadow-pink-200/70">
                <Image
                  src="/img/about-hero.jpg"
                  alt="Perfectly Pampered Parties pamper party"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="space-y-4 font-body text-base leading-relaxed text-text">
                <p className="text-primary font-decorative text-2xl md:text-3xl font-bold">
                  A mum on a mission to make parties magical
                </p>
                <p>
                  Perfectly Pampered Parties was created by <strong>Rebecca Forshaw</strong> in 2018 – a hard-working mum
                  of two who understands just how stressful kids’ parties can be! Six years of life lessons have helped
                  her find the right ideas for truly making your little ones feel special on their birthday.
                </p>
                <p>
                  After qualifying as a beauty technician, Rebecca set out to offer the <strong>best kids pampered
                  party experience in South Wales</strong>. Today, Perfectly Pampered Parties brings the fun, the glam
                  and the organisation – so you don’t have to.
                </p>
              </div>
            </div>

            {/* Highlight card */}
            <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-3xl p-8 md:p-10 shadow-card border border-primary/15">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
                A Family-Owned Party Experience
              </h3>
              <p className="font-body text-base leading-relaxed text-text text-center max-w-3xl mx-auto">
                Perfectly Pampered Parties is a <strong>family owned and operated business</strong> with party packages
                built around a “leave it all up to us” approach. Simply choose a package, plan the date, and let us do
                the rest! We’ll bring the set-up, the sparkle and the fun – so you can relax and enjoy watching your
                children make memories that last.
              </p>
            </div>

            {/* Mission section */}
            <div className="bg-accent/10 rounded-3xl p-8 md:p-10 border border-accent/30 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />

              <div className="relative z-10 space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary flex items-center gap-3">
                  <span className="text-3xl md:text-4xl">✨</span>
                  <span>Our Mission</span>
                </h3>
                <p className="font-body text-base leading-relaxed text-text">
                  Our mission is simple: to turn ordinary living rooms into <strong>mini luxury spas</strong> where
                  giggles, glitter and gorgeous memories are guaranteed. Every detail – from the robes and cushions to
                  the music and manicures – is designed to make your child feel like the <strong>star of the show</strong>.
                </p>
                <p className="font-body text-base leading-relaxed text-text">
                  We create parties that are <strong>effortless for parents</strong> and unforgettable for kids. You
                  relax, we bring the magic – and together we give your little one a birthday they’ll be talking about
                  all year.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
