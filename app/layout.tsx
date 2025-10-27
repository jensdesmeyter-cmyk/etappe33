import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
import Logo from "./assets/logoch.png";
import ZenChefPopup from "./components/ZenChefPopup";

export const metadata: Metadata = {
   title: "Etappe 33 – Restaurant & Tearoom",
  description:
    "Geniet van heerlijke gerechten, desserts en warme sfeer bij Etappe 33. Reserveer binnenkort eenvoudig online via Zenchef.",
  openGraph: {
    title: "Etappe 33 – Restaurant & Tearoom",
    description:
      "Geniet van heerlijke gerechten, desserts en warme sfeer bij Etappe 33.",
    url: "https://www.etappe33.be",
    siteName: "Etappe 33",
    images: [
      {
        url: Logo.src,
        width: 1200,
        height: 630,
        alt: "Etappe 33 restaurant sfeerbeeld",
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


