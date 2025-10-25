import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,    // use false for STARTTLS
  requireTLS: true, // enforce TLS
  auth: {
    user: "info@etappe33.be",
    pass: process.env.ZOHO_PASSWORD,
  },
});




export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info@etappe33.be",
      subject: subject || "Mail verzonden via de contact pagina",
      text: message,
      html: `<p>${message}</p><p>Van: ${name} (${email})</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
  let errorMessage = "Er is iets misgegaan";
  if (err instanceof Error) {
    errorMessage = err.message;
  }
  console.error("Email error:", errorMessage);
  return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
}

}
