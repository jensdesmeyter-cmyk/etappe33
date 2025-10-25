import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject } = await req.json();

    // Create transporter for Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'info@etappe33.be',
        pass: process.env.ZOHO_PASSWORD, // store in Vercel environment variables
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'info@etappe33.be',
      subject: subject,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
