import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Perfectly Pampered Parties – pamper parties and sleepover tents in Swansea, Mumbles, Gower and across South Wales.",
  keywords: ["privacy policy", "Perfectly Pampered Parties", "pamper party Swansea", "Mumbles", "Gower"],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Privacy Policy">
          <div className="max-w-3xl mx-auto space-y-6 font-body text-base leading-relaxed text-text">
            <div>
              <h3 className="font-display text-xl font-bold mb-3">1. Introduction</h3>
              <p className="text-mutedText">
                Perfectly Pampered Parties ("we", "our", "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and safeguard your
                personal information.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">2. Information We Collect</h3>
              <p className="text-mutedText">
                We collect information that you provide to us when booking a party, contacting us,
                or subscribing to our newsletter. This may include your name, email address, phone
                number, address, and event details.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">3. How We Use Your Information</h3>
              <p className="text-mutedText">
                We use your information to process bookings, communicate with you about your event,
                send you marketing communications (with your consent), and improve our services.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">4. Data Security</h3>
              <p className="text-mutedText">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">5. Your Rights</h3>
              <p className="text-mutedText">
                You have the right to access, correct, or delete your personal information. You can
                also opt-out of marketing communications at any time by contacting us.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">6. Cookies</h3>
              <p className="text-mutedText">
                Our website may use cookies to enhance your browsing experience. You can set your
                browser to refuse cookies, but this may affect website functionality.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-3">7. Contact Us</h3>
              <p className="text-mutedText">
                If you have any questions about this Privacy Policy, please contact us at
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
