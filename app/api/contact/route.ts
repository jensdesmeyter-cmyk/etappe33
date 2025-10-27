import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Niet alle velden zijn ingevuld" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Etappe 33 <info@etappe33.be>", // test sender
      to: "info@etappe33.be",
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error: "Er is een fout opgetreden" }, { status: 500 });
  }
}

