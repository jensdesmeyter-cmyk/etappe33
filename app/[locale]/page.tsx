"use client";
import Image from "next/image";
import Link from "next/link"; 
import photo from "../assets/20251024_145621.jpg";
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
        className="text-5xl font-bold mb-4 text-center text-[rgb(var(--color_58))] mb-12"
      >
        {t("title")}
      </motion.h1>

      {/* REPLACED SECTION: Valentine Link with Heart - BIGGER VERSION */}
      <Link href={`/${locale}/valentine`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // CHANGED: Increased padding (px-8 py-4) to make the "button" larger
          className="flex items-center justify-center gap-4 mb-16 px-8 py-4 bg-[rgb(var(--color_58))]/10 rounded-full cursor-pointer hover:bg-[rgb(var(--color_58))]/20 transition-colors"
        >
          {/* Beating Heart Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            // CHANGED: Increased width and height to w-8 h-8 (and w-10 h-10 on desktop)
            className="w-8 h-8 md:w-10 md:h-10 text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>

          {/* Text */}
          {/* CHANGED: Increased text size to text-2xl (and text-3xl on desktop) */}
          <p className="text-2xl md:text-3xl text-[rgb(var(--color_58))] font-medium">
            {t("valentine_available") || "Valentine menu now available"} 
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
          className="pt-12 w-full md:h-[90vh] lg:h-[80vh] object-cover"
        />
      </motion.div>

      <LunchPopup />
    </main>
  );
}