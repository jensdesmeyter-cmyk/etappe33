"use client";
import Image from 'next/image';
import photo from './assets/20251024_145621.jpg';
import { motion } from "framer-motion";
import LunchPopup from "./components/LunchPopup";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-gray-800 py-12 px-4 sm:px-8">
            <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-5xl font-bold  mb-6"
      >
      <h1 className="text-5xl font-bold mb-4 text-center text-[rgb(var(--color_58))] mb-12">Welkom bij Etappe 33</h1></motion.h1>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.6 }}
  transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
  className="w-96 h-1 bg-[rgb(var(--color_58))] rounded-full mb-16">
     <p className="text-xl text-white text-center">
        Ons restaurant opent vanaf 31 oktober 2025 zijn deuren! We kijken ernaar uit u te verwelkomen voor een onvergetelijke culinaire ervaring.
      </p>
      </motion.div>
       <motion.p
        initial={{ opacity: 0.01, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 2 }}
              >
      <Image src={photo} alt="restaurant" className='pt-12'/></motion.p>
       <LunchPopup />
    </main>
  );
}