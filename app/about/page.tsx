"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-6 py-6 text-white text-center font-menu">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6 pt-6 text-[rgb(var(--color_58))]"
      >
        Over Etappe 33
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-2xl leading-relaxed text-gray-300"
      >
        Aan de rand van het Kluisbos, in een uniek en sfeervol kader, heten Maxim, Eddy
        en Ann u van harte welkom in <span className="text-[rgb(var(--color_58))] font-semibold">Restaurant Etappe33</span>.
        <br />
        <br />
        Wij brengen een toegankelijke en smaakvolle keuken waarin kwaliteit en service centraal staan.
        Maxim ontvangt u met de glimlach als gastheer, terwijl Eddy in de keuken zorgt voor culinaire verfijning
        die uw smaakpapillen prikkelt.
        <br />
        <br />
        Kom genieten van onze gerechten in een ontspannen sfeer — wij verwelkomen u graag op vrijdag,
        zaterdag, zondag en maandag, doorlopend van 11u30 tot 21u00 tijdens de herfst- en winterperiode.
      </motion.p>
    </section>
  );
}

