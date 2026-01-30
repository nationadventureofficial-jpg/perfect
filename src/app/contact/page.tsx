import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Perfectly Pampered Parties for pamper parties and sleepover tents in Swansea, Mumbles, Gower, Mayhill, Townhill, Port Talbot and Penard. Book your kids party today.",
  keywords: ["pamper party Swansea", "sleepover tent Swansea", "contact", "book party", "Mumbles", "Gower", "Mayhill", "Townhill", "Port Talbot", "Penard"],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Contact Us" subtitle="We'd love to hear from you! Get in touch to book your pamper party.">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="font-body text-base text-mutedText mb-6">
                Have questions about our pamper parties? Want to book an event? Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Service Area</h4>
                  <p className="font-body text-sm text-mutedText">
                    Serving Swansea and surrounding areas within a 50 mile radius
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2">Booking</h4>
                  <p className="font-body text-sm text-mutedText">
                    To book a party, please visit our <a href="/booking" className="text-primary hover:underline">booking page</a> or contact us directly.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm
                form={{
                  method: "POST",
                  action: "https://formsubmit.co/hello@perfectlypamperedparties.co.uk",
                  successMessage: "Your message has been sent successfully! We'll get back to you soon.",
                  fields: [
                    { type: "text", name: "name", label: "Name", required: true, placeholder: "Your full name" },
                    { type: "email", name: "email", label: "Email", required: true, placeholder: "you@example.com" },
                    { type: "tel", name: "telephone", label: "Telephone", required: true, placeholder: "+44 123 456 7890" },
                    {
                      type: "textarea",
                      name: "message",
                      label: "Message",
                      required: true,
                      rows: 5,
                      placeholder: "Tell us about your party or ask any questions...",
                    },
                  ],
                  submit: { label: "Send Message", variant: "primary" },
                }}
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
