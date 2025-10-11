import "./globals.css";
import Link from "next/link";
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
      <body className="bg-gray-50 text-gray-800">
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            {/* LOGO */}
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              Etappe 33
            </Link>

            {/* NAV LINKS */}
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/reservations">Reservations</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>

        <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
          <div className="max-w-6xl mx-auto text-center text-sm">
            © {new Date().getFullYear()} Etappe 33. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
