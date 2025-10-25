"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "../assets/20251024_145621.jpg";
import photo2 from "../assets/20251023_123623.jpg";
import photo3 from "../assets/20251023_123638.jpg";
import photo4 from "../assets/20251023_123656.jpg";
import photo5 from "../assets/20251024_143811.jpg";
import photo6 from "../assets/20251024_144218.jpg";
import photo7 from "../assets/20251023_123617.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

export default function PhotosPage() {
  const [current, setCurrent] = useState(0);

  // Automatically switch photos every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () =>
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="min-h-screen flex flex-col items-center text-white font-menu px-4 sm:px-6 py-12">
      {/* Title with motion */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold mb-10 text-[rgb(var(--color_58))] text-center"
      >
        Foto&apos;s
      </motion.h1>

      {/* Main photo container */}
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl mt-20 overflow-hidden flex items-center justify-center aspect-[4/3] sm:aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={photos[current]}
              alt={`Etappe33 foto ${current + 1}`}
              className="object-contain w-full h-full rounded-2xl"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextPhoto}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 sm:p-3 rounded-full transition"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition ${
                index === current ? "bg-[rgb(var(--color_58))]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



