import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_A4DC8tGV_AtotvesyPCog24ps2wp54TUd');

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@etappe33.be',
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail sending error:", error);
    return NextResponse.json({ success: false, error: "Email sending failed" }, { status: 500 });
  }
}


