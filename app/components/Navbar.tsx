"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="b border-b bg-white border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[#d4af37] text-2xl font-serif">
          Etappe 33
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link href="/" className="hover:text-[#d4af37] transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-[#d4af37] transition">
            Menu
          </Link>
          <Link href="/about" className="hover:text-[#d4af37] transition">
            Over ons
          </Link>
          <Link href="/contact" className="hover:text-[#d4af37] transition">
            Contact
          </Link>
          <Link
            href="/reservations"
            className="text-[#d4af37] border border-[#d4af37] px-4 py-1 rounded-full hover:bg-[#d4af37] hover:text-black transition"
          >
            Reserveer
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#d4af37] transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 flex flex-col items-center space-y-4 py-6 text-gray-300">
          <Link
            href="/"
            className="hover:text-[#d4af37] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="hover:text-[#d4af37] transition"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#d4af37] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
           <Link
            href="/about"
            className="hover:text-[#d4af37] transition"
            onClick={() => setIsOpen(false)}
          >
            Over ons
          </Link>
          <Link
            href="/reservations"
            className="text-[#d4af37] border border-[#d4af37] px-4 py-1 rounded-full hover:bg-[#d4af37] hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            Reserveer
          </Link>
        </div>
      )}
    </nav>
  );
}
