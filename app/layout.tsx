import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etappe 33",
  description: "Fine dining restaurant in the heart of the city",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
