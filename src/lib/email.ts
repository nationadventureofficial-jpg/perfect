import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  telephone?: string;
  message?: string;
  [key: string]: unknown;
};

const defaultToAddress = "hello@perfectlypamperedparties.co.uk";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    return null; // Return null instead of throwing - allows graceful fallback
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactEmail(payload: ContactPayload) {
  const transporter = getTransporter();

  const {
    name = "Website visitor",
    email,
    telephone,
    message,
    ...rest
  } = payload;

  const lines: string[] = [];
  lines.push(`Name: ${name}`);
  if (email) lines.push(`Email: ${email}`);
  if (telephone) lines.push(`Telephone: ${telephone}`);
  lines.push("");
  if (message) {
    lines.push("Message:");
    lines.push(message);
    lines.push("");
  }

  const extraKeys = Object.keys(rest);
  if (extraKeys.length > 0) {
    lines.push("Additional fields:");
    extraKeys.forEach((key) => {
      const value = rest[key];
      lines.push(`${key}: ${String(value)}`);
    });
  }

  const textBody = lines.join("\n");
  const toEmail = process.env.CONTACT_TO_EMAIL || defaultToAddress;

  // If SMTP is configured, send email. Otherwise, log to console (for Vercel logs)
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Perfectly Pampered Parties Website" <${process.env.SMTP_FROM || defaultToAddress}>`,
        to: toEmail,
        subject: "New enquiry from Perfectly Pampered Parties website",
        text: textBody,
      });
      console.log(`Email sent successfully to ${toEmail}`);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Log the data so it's not lost
      console.log("Form submission data (email failed):", textBody);
      throw error; // Re-throw so API route knows email failed
    }
  } else {
    // SMTP not configured - log the data to Vercel logs instead
    console.log("=".repeat(50));
    console.log("FORM SUBMISSION (SMTP not configured):");
    console.log(`To: ${toEmail}`);
    console.log("Subject: New enquiry from Perfectly Pampered Parties website");
    console.log(textBody);
    console.log("=".repeat(50));
    // Don't throw - allow form to succeed even without email
  }
}

