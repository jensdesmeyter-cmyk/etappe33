"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from 'next/image';
import photo from '../assets/logoch.png';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="b border-b bg-[rgb(var(--color_58))] border-[#bda25c] fixed w-full top-0 z-50 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[#c9b67a] text-2xl font-serif">
           <Image src={photo}   alt="Etappe 33 logo"
  width={150}
  height={150}
  className="bg-transparent"
  priority/>
        </Link>
        {/* Desktop menu */}
         <div className="hidden md:flex space-x-8 text-white text-2xl">
      {[
        { href: "/menu", label: "Menu" },
        { href: "/lunch", label: "Lunch" },
        { href: "/tearoom", label: "Tearoom" },
        { href: "/about", label: "Over ons" },
        { href: "/photos", label: "Foto's" },
        { href: "/contact", label: "Contact" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`transition relative ${
            pathname === href
              ? "text-black after:w-full after:left-0"
              : "text-white hover:text-black"
          } after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0`}
        >
          {label}
        </Link>
      ))}

      <Link
        href="/reservations"
        className={`border border-white px-4 py-1 rounded-full transition ${
          pathname === "/reservations"
            ? "bg-[#c9b67a] text-black border-[#c9b67a]"
            : "text-white hover:bg-[#c9b67a] hover:text-black"
        }`}
      >
        Reserveer
      </Link>
    </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-white hover:text-black transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#bda25c] bg-[rgb(var(--color_58))] flex flex-col items-center space-y-4 py-6 text-white">
          <Link
            href="/menu"
            className="hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/lunch"
            className="hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Lunch
          </Link>
          <Link
            href="/tearoom"
            className="hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Tearoom
          </Link>
          <Link
            href="/about"
            className="hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Over ons
          </Link>
          <Link
            href="/photos"
            className="hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Foto&apos;s
          </Link>
          <Link
            href="/contact"
            className="hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/reservations"
            className="text-white border border-[#c9b67a] px-4 py-1 rounded-full hover:bg-black hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Reserveer
          </Link>
        </div>
      )}
    </nav>
  );
}
