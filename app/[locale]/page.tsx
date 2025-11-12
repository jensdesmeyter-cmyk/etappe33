"use client";
import Image from 'next/image';
import photo from '../assets/20251024_145621.jpg';
import { motion } from "framer-motion";
import LunchPopup from "./components/LunchPopup";
import { useTranslations } from "next-intl";


export default function Home() {
   const t = useTranslations("Home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-800 py-12 px-4 sm:px-8">
            <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4 text-center text-[rgb(var(--color_58))] mb-12"
      >
     {t("title")}</motion.h1>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.6 }}
  transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
  className="w-96 h-1 bg-[rgb(var(--color_58))] rounded-full mb-16">
     <p className="text-xl text-white text-center">
         {t("opening")}
      </p>
      </motion.div>
       <motion.p
        initial={{ opacity: 0.01, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 2 }}
              >
      <Image src={photo} alt="restaurant" className='pt-12 w-full md:h-[90vh] lg:h-[80vh] object-cover'/></motion.p>
       <LunchPopup />
    </main>
  );
}