"use client";
import Image from "next/image";
import Link from "next/link"; 
import photo from "../assets/affiche.jpg";//"../assets/20251024_145621.jpg";
import { motion } from "framer-motion";
import LunchPopup from "./components/LunchPopup";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const t = useTranslations("Home");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "nl";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-800 py-12 px-4 sm:px-8">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center text-[rgb(var(--color_58))] mb-12"
      >
        {t("title")}
      </motion.h1>

      {/* BBQ & WK Event Link with Bouncing Football */}
      <Link href={`/${locale}/bbq`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-4 mb-16 px-8 py-4 bg-[rgb(var(--color_58))]/10 rounded-full cursor-pointer hover:bg-[rgb(var(--color_58))]/20 border border-[rgb(var(--color_58))]/30 transition-colors shadow-[0_0_15px_rgba(201,182,122,0.2)] hover:shadow-[0_0_25px_rgba(201,182,122,0.4)]"
        >
          {/* Unmistakable Football Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 md:w-10 md:h-10 text-[rgb(var(--color_58))]"
            animate={{ 
              y: [0, -12, 0], // Bouncing up and down
              rotate: [0, 20, -20, 0] // Slight wobble
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          >
            {/* Outer Circle */}
            <circle cx="12" cy="12" r="10" />
            {/* Center Pentagon (Filled) */}
            <polygon points="12 7 16 10 14.5 15 9.5 15 8 10" fill="currentColor" />
            {/* Connecting Lines to make the Hexagons */}
            <line x1="12" y1="7" x2="12" y2="2" />
            <line x1="16" y1="10" x2="21.5" y2="8.5" />
            <line x1="14.5" y1="15" x2="17.5" y2="20.5" />
            <line x1="9.5" y1="15" x2="6.5" y2="20.5" />
            <line x1="8" y1="10" x2="2.5" y2="8.5" />
          </motion.svg>

          {/* Text */}
          <p className="text-2xl md:text-3xl text-[rgb(var(--color_58))] font-medium uppercase tracking-wide">
            {t("wk_bbq_available") || "Culinaire WK-BBQ Nu Beschikbaar!"} 
          </p>
        </motion.div>
      </Link>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0.01, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 2 }}
        className="w-full"
      >
        <Image
          src={photo}
          alt="restaurant"
          //className="pt-12 w-full md:h-[90vh] lg:h-[80vh] object-cover"
        />
      </motion.div>

      <LunchPopup />
    </main>
  );
}