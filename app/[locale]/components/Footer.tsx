"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "nl";

  const quickLinks = [
    { href: `/${locale}`, label: t("links.home") },
    { href: `/${locale}/menu`, label: t("links.menu") },
    { href: `/${locale}/lunch`, label: t("links.lunch") },
    { href: `/${locale}/tearoom`, label: t("links.tearoom") },
    { href: `/${locale}/about`, label: t("links.about") },
    { href: `/${locale}/photos`, label: t("links.photos") },
    { href: `/${locale}/contact`, label: t("links.contact") },
  ];

  return (
    <footer className="bg-[rgb(var(--color_58))] text-white border-t border-[#bda25c] mt-20">
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - About */}
        <div>
          <h3 className="text-black text-2xl font-serif mb-3">Etappe 33</h3>
          <p className="text-sm leading-relaxed">{t("aboutText")}</p>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h4 className="text-black text-lg mb-3">{t("contact.title")}</h4>
          <ul className="space-y-1 text-sm">
            <li>
              {t("contact.address")}{" "}
              <a
                href="https://maps.app.goo.gl/BeLdLUGgKSRDBFpd6"
                className="text-black hover:underline"
              >
                Bergstraat 33, 9690 Kluisbergen
              </a>
            </li>
            <li>
              {t("contact.phone")}{" "}
              <a
                href="tel:+32493452595"
                className="text-black hover:underline"
              >
                +32 493 45 25 95
              </a>
            </li>
            <li>
              {t("contact.email")}{" "}
              <a
                href="mailto:info@etappe33.be"
                className="text-black hover:underline"
              >
                info@etappe33.be
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Opening hours */}
        <div>
          <h4 className="text-black text-lg mb-3">{t("hours.title")}</h4>
          <ul className="text-sm space-y-1">
            <li>{t("hours.closed")}</li>
            <li>{t("hours.lunch")}</li>
            <li>{t("hours.tearoom")}</li>
            <li>{t("hours.dinner")}</li>
            <li>{t("hours.holiday")}</li>
          </ul>
        </div>

        {/* Column 4 - Social & Links */}
        <div>
          <h4 className="text-black text-lg mb-3">{t("social.title")}</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61583098465408"
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

          <h4 className="text-black text-lg mb-3">{t("links.title")}</h4>
          <ul className="text-sm space-y-1">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-black transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Etappe 33. - BTW: BE0773 412 078 {t("rights")}
      </div>
    </footer>
  );
}

