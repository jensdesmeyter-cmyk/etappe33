"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from 'next/image';
import photo from '../assets/logoch.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="b border-b bg-[rgb(var(--color_58))] border-[#bda25c] fixed w-full top-0 z-50">
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
          <Link href="/menu" className="hover:text-black transition">
            Menu
          </Link>
          <Link href="/lunch" className="hover:text-black transition">
            Lunch
          </Link>
          <Link href="/tearoom" className="hover:text-black transition">
            Tearoom
          </Link>
          <Link href="/about" className="hover:text-black  transition">
            Over ons
          </Link>
          <Link href="/photos" className="hover:text-black  transition">
            Foto&apos;s
          </Link>
          <Link href="/contact" className="hover:text-black  transition">
            Contact
          </Link>
          <Link
            href="/reservations"
            className="text-white border border-white px-4 py-1 rounded-full hover:bg-[#c9b67a] hover:text-black transition"
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
        <div className="md:hidden border-t border-[#bda25c] bg-[rgb(var(--color_58))] flex flex-col items-center space-y-4 py-6 text-gray-300">
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
