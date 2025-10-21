"use client";
import Image from 'next/image';
import photo from './assets/etappe-33-een-mooi-terras-op-de-kluis.png';
import { motion } from "framer-motion";


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
  className="w-96 h-1 bg-[rgb(var(--color_58))] rounded-full mb-6">
     <p className="text-xl text-white text-center">
        Onze website is voorlopig nog onder constructie.
      </p>
      </motion.div>
       <motion.p
        initial={{ opacity: 0.01, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 2 }}
              >
      <Image src={photo} alt="restaurant" className='pt-12'/></motion.p>
    </main>
  );
}