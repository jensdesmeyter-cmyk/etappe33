import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";
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
  <body className="bg-gray-50 text-gray-800">
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <Navbar />
    </header>

    <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">{children}</main>

       <Footer />
  </body>
</html>

  );
}
