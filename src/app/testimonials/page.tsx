import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Reviews and testimonials from parents and children about Perfectly Pampered Parties – pamper parties and sleepover tents in Swansea, Mumbles, Gower and across South Wales.",
  keywords: ["pamper party reviews Swansea", "testimonials", "party reviews", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Parent Testimonials" kicker="What Our Customers Say">
          <TestimonialCarousel
            cards={[
              {
                quote:
                  "Amazing experience for the girls! We celebrated my daughters 9th birthday with them and it was incredible! The set up, hair, nails, masks.. it was all great!",
                name: "Sandra Amorós",
              },
              {
                quote:
                  "My daughter's 7th birthday was so special and truly the easiest birthday ever. The team helped my girls get their glam on. The prices were great and worth it every £. If you're looking for a great kids spa birthday at home, I would definitely recommend!",
                name: "Hazel T",
              },
              {
                quote: "The team was great! They kept the girls entertained the whole time!",
                name: "Patrica Rudner",
              },
              {
                quote:
                  "Perfectly Pampered Parties made my daughter's birthday unforgettable! The spa setup was stunning, and the DIY activities kept the girls entertained. Thank you!",
                name: "Amy",
              },
              {
                quote:
                  "Absolutely fantastic service! The girls had the best time and the attention to detail was incredible. Highly recommend!",
                name: "Sarah M",
              },
              {
                quote:
                  "We've used Perfectly Pampered Parties twice now and both times have been perfect. The staff are so patient and kind with the children.",
                name: "Emma L",
              },
            ]}
            cta={{ label: "Book Your Party", href: "/contact", variant: "primary" }}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
