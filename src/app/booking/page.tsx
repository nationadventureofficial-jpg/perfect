import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Party",
  description: "Book your pamper party or sleepover tent in Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Reserve your date with Perfectly Pampered Parties.",
  keywords: ["book pamper party Swansea", "book sleepover tent", "party booking", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Book a Party" subtitle="Ready to book? Fill out our booking form below.">
          <ContactForm
            form={{
              method: "POST",
              action: "/api/book",
              successMessage:
                "Your booking request has been successfully submitted. We will contact you shortly to confirm your party details. Thank you!",
              fields: [
                { type: "text", name: "name", label: "Name", required: true, placeholder: "Your full name" },
                { type: "email", name: "email", label: "Email", required: true, placeholder: "you@example.com" },
                { type: "tel", name: "telephone", label: "Telephone", required: true, placeholder: "+44 123 456 7890" },
                {
                  type: "select",
                  name: "package",
                  label: "PACKAGES",
                  required: true,
                  options: [
                    "GLITTER £450 - 8 GIRLS, £35 per additional guest",
                    "SPARKLE £475 - 8 GIRLS, £35 per additional guest",
                    "SPARKLING £650 - 8 GIRLS, £50 per additional guest",
                    "BRAID AND BRUSH £600 - 8 girls / £45 per additional guest",
                  ],
                },
                { type: "date", name: "event_date", label: "Select the event date", required: true },
                { type: "time", name: "event_time", label: "Event Time", required: true },
                {
                  type: "text",
                  name: "location",
                  label: "Party Location/Address",
                  required: true,
                  placeholder: "Street, City, Postcode",
                },
              ],
              submit: { label: "Submit Booking Request", variant: "primary" },
              helperText: "*Serving Swansea and surrounding areas within a 50 mile radius.",
            }}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
