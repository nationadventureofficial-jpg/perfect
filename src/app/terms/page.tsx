import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for Perfectly Pampered Parties – pamper parties and sleepover tents in Swansea, Mumbles, Gower and across South Wales.",
  keywords: ["terms and conditions", "Perfectly Pampered Parties", "pamper party Swansea", "Mumbles", "Gower"],
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Terms and Conditions">
          <div className="max-w-3xl mx-auto space-y-6 font-body text-base leading-relaxed text-text">
            <div>
              <h3 className="font-display text-xl font-bold mb-3">1. Booking and Payment</h3>
              <p className="text-mutedText">
                All bookings are subject to availability. A deposit may be required to secure your
                booking. Full payment is due on the day of the event unless otherwise agreed.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">2. Cancellation Policy</h3>
              <p className="text-mutedText">
                Cancellations made more than 7 days before the event will receive a full refund
                minus any processing fees. Cancellations made within 7 days may be subject to a
                cancellation fee.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">3. Health and Safety</h3>
              <p className="text-mutedText">
                We use water-based, non-toxic products suitable for children. Please inform us of
                any allergies or skin sensitivities before the event. We maintain high standards of
                hygiene and safety at all times.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">4. Liability</h3>
              <p className="text-mutedText">
                Perfectly Pampered Parties is fully insured. However, we cannot be held responsible
                for any damage to property or personal belongings during the event.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">5. Service Area</h3>
              <p className="text-mutedText">
                We serve Swansea and surrounding areas within a 50 mile radius. Additional travel
                charges may apply for locations outside this area.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">6. Changes to Bookings</h3>
              <p className="text-mutedText">
                Changes to bookings are subject to availability. Please contact us as soon as
                possible if you need to make changes.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">7. Contact</h3>
              <p className="text-mutedText">
                For any questions about these terms, please contact us at
                info@perfectlypamperedparties.co.uk
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
