import nodemailer from "nodemailer";

const MAX_LENGTH = { namn: 200, email: 320, amne: 300, meddelande: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const fields = {};
  for (const [key, max] of Object.entries(MAX_LENGTH)) {
    const value = typeof req.body?.[key] === "string" ? req.body[key].trim() : "";
    if (!value || value.length > max) {
      return res.status(400).json({ error: "Alla fält måste fyllas i korrekt" });
    }
    fields[key] = value;
  }
  const { namn, email, amne, meddelande } = fields;
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "Ogiltig e-postadress" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      // Gmail only sends from the authenticated account; the visitor goes in Reply-To
      from: `"Portfolio kontakt" <${process.env.GMAIL_USER}>`,
      to: "johan.w.rutberg@gmail.com",
      replyTo: { name: namn, address: email },
      subject: `[Portfolio] ${amne.replace(/[\r\n]+/g, " ")}`,
      text: `Namn: ${namn}\nE-post: ${email}\nÄmne: ${amne}\n\n${meddelande}`
    });
    return res.status(200).json({ message: "E-post skickad framgångsrikt" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ error: "Något gick fel" });
  }
}
