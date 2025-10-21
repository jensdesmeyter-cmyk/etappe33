import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color_58))] text-white border-t border-[#bda25c] mt-20">
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 - Logo or title */}
        <div>
          <h3 className="text-black text-2xl font-serif mb-3">Etappe 33</h3>
          <p className="text-sm leading-relaxed">
            Een verfijnde keuken met aandacht voor lokale producten en warme gastvrijheid.
          </p>
        </div>

        {/* Column 2 - Contact info */}
        <div>
          <h4 className="text-black text-lg mb-3">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Adres:<a href="https://maps.app.goo.gl/BeLdLUGgKSRDBFpd6" className="text-black hover:underline"> Bergstraat 33, 9690 Kluisbergen</a></li>
            <li>Telefoon: <a href="tel:+32493452595" className="text-black hover:underline">+32 493 45 25 95</a></li>
            <li>E-mail: <a href="mailto:info@etappe33.be" className="text-black hover:underline">info@etappe33.be</a></li>
          </ul>
        </div>

        {/* Column 3 - Opening hours */}
        <div>
          <h4 className="text-black text-lg mb-3">Openingsuren</h4>
          <ul className="text-sm space-y-1">
            <li>Dinsdag – Donderdag: Gesloten</li>
            <li>Vrijdag - Maandag: 11:30 – 14:00 (lunch)</li>
            <li>Vrijdag - Maandag: 14:00 – 18:00 (tearoom)</li>
            <li>Vrijdag - Maandaag: 18:30 – 21:00</li>
          </ul>
        </div>

        {/* Column 4 - Social & links */}
        <div>
          <h4 className="text-black text-lg mb-3">Volg ons</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=100046240693901"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/YOURPAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <h4 className="text-black text-lg mb-3">Snelle links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-black transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/lunch" className="hover:text-black transition">
                Lunch
              </Link>
            </li>
            <li>
              <Link href="/tearoom" className="hover:text-black transition">
                Tearoom
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black transition">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/photos" className="hover:text-black transition">
                Foto&apos;s
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Etappe 33. Alle rechten voorbehouden. Made by Jens De Smeyter
      </div>
    </footer>
  );
}
