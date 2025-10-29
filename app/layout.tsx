import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import Logo from "./assets/logoch.png";
import ZenChefPopup from "./components/ZenChefPopup";

export const metadata = {
  title: "Etappe 33 | Restaurant & Tearoom Kluisbos",
  description:
    "Restaurant Etappe 33 — Geniet van heerlijke gerechten in een gezellig kader aan de rand van het Kluisbos.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Etappe 33",
    description:
      "Restaurant & Tearoom Etappe 33 — Kwaliteit, gezelligheid en smaak aan de rand van het Kluisbos.",
    url: "https://www.etappe33.be",
    siteName: "Etappe 33",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Etappe 33 logo",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
  <body className="bg-gray-50 text-gray-800">
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <Navbar />
    </header>

    <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">{children}</main>
       <ZenChefPopup/>
       <Footer />
  </body>
</html>

  );
}


