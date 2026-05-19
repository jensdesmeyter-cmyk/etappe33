import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Vul hier weer even je hardcoded key in voor de test!
    const resend = new Resend("re_Nwnvbq5U_J6kmgHZ9hZECByGe5fFwjZ2T");

    const body = await request.json();
    const { name, email, phone, persons, date, message } = body;

    if (!name || !email || !phone || !persons || !date) {
      return NextResponse.json(
        { success: false, error: "Niet alle verplichte velden zijn ingevuld." },
        { status: 400 }
      );
    }

    const formattedDate = date === "15_june" 
      ? "Maandag 15 Juni" 
      : date === "21_june" 
      ? "Zondag 21 Juni" 
      : date;

    // LET OP DE AANPASSING HIER: We vangen nu { data, error } apart op
    const { data, error } = await resend.emails.send({
      from: "Etappe 33 <info@etappe33.be>",
      to: "info@etappe33.be",
      subject: `Nieuwe WK-BBQ Reservering: ${name} (${persons} pers.)`,
      html: `
        <h2>Nieuwe reserveringsaanvraag (WK-BBQ)</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoonnummer:</strong> ${phone}</p>
        <p><strong>Aantal personen:</strong> ${persons}</p>
        <p><strong>Datum:</strong> ${formattedDate}</p>
        <p><strong>Opmerkingen:</strong><br/>${message || "Geen"}</p>
      `,
    });

    // Als Resend een fout teruggeeft (bijv. domein niet geverifieerd), sturen we die naar de frontend!
    if (error) {
      console.error("Resend weigert de mail:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    // Alleen als er GEEN error is, sturen we succes terug
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Server crash:", error);
    return NextResponse.json(
      { success: false, error: "Er is een serverfout opgetreden." },
      { status: 500 }
    );
  }
}