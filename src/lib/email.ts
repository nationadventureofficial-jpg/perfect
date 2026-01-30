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
    throw new Error("SMTP environment variables are not fully configured");
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

  await transporter.sendMail({
    from: `"Perfectly Pampered Parties Website" <${process.env.SMTP_FROM || defaultToAddress}>`,
    to: process.env.CONTACT_TO_EMAIL || defaultToAddress,
    subject: "New enquiry from Perfectly Pampered Parties website",
    text: textBody,
  });
}

