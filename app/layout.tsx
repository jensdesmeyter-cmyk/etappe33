import "./globals.css";
import type { Metadata } from "next";
import Footer from "./[locale]/components/Footer"
import Navbar from "./[locale]/components/Navbar";
import Logo from "./assets/logoch.png";
import ZenChefPopup from "./[locale]/components/ZenChefPopup";

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
  <body>
    <header></header>
    <main>{children}</main>
  </body>
</html>

  );
}


