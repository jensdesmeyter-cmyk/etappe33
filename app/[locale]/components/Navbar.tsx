"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import photo from "../../assets/logoch.png";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const locale = pathname.split("/")[1] || "nl";
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: `/${locale}/menu`, label: t("menu") },
    { href: `/${locale}/lunch`, label: t("lunch") },
    { href: `/${locale}/tearoom`, label: t("tearoom") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/photos`, label: t("photos") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const languages = [
    { code: "nl", label: "Nederlands", flag: "NL" },
    { code: "fr", label: "Français", flag: "FR" },
  ];

  // FIXED: Added ': string' to newLocale
  const handleLanguageChange = (newLocale: string) => {
    setIsLangOpen(false);
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <nav className="border-b bg-[rgb(var(--color_58))] border-[#bda25c] fixed w-full top-0 z-50">
      <div className="w-full px-4 xl:px-8 py-3 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link href={`/${locale}`} className="text-[#c9b67a] font-serif flex-shrink-0">
          <Image
            src={photo}
            alt="Etappe 33 logo"
            width={120}
            height={120}
            className="bg-transparent object-contain"
            priority
          />
        </Link>

        {/* CENTER: Navigation Links */}
        <div className="hidden xl:flex flex-1 justify-center items-center gap-6 2xl:gap-10 text-xl 2xl:text-2xl font-medium whitespace-nowrap">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition relative py-2 ${
                pathname === href
                  ? "text-black after:w-full after:left-0"
                  : "text-white hover:text-black"
              } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[0px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* RIGHT: Actions (Reservation + Language) */}
        <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
          <Link
            href={`/${locale}/reservations`}
            className={`border border-white px-5 py-1.5 rounded-full transition text-lg 2xl:text-xl whitespace-nowrap ${
              pathname === `/${locale}/reservations`
                ? "bg-[#c9b67a] text-black border-[#c9b67a]"
                : "text-white hover:bg-[#c9b67a] hover:text-black"
            }`}
          >
            {t("reservatie")}
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 hover:text-black transition"
            >
              <ReactCountryFlag
                countryCode={locale === "nl" ? "NL" : "FR"}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "50%",
                }}
              />
              <ChevronDown size={18} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-md z-50 text-base">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 ${
                      locale === lang.code ? "font-semibold" : ""
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={lang.flag}
                      svg
                      style={{
                        width: "1.2em",
                        height: "1.2em",
                        borderRadius: "50%",
                      }}
                    />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile button */}
        <button
          className="xl:hidden text-white hover:text-black transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="xl:hidden border-t border-[#bda25c] bg-[rgb(var(--color_58))] flex flex-col items-center space-y-4 py-6 text-white text-2xl">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href={`/${locale}/reservations`}
            className="text-white border border-[#c9b67a] px-6 py-2 rounded-full hover:bg-[#c9b67a] hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            {t("reservatie")}
          </Link>

          <div className="flex space-x-4 mt-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center space-x-2 ${
                  locale === lang.code ? "text-[#c9b67a]" : "text-white"
                }`}
              >
                <ReactCountryFlag
                  countryCode={lang.flag}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "50%",
                  }}
                />
                <span>{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
