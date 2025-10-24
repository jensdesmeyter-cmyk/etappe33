"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your photos from /public or /assets
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
    <section className="min-h-screen flex flex-col items-center justify-center text-white font-menu px-6 py-12">
       <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6 text-[rgb(var(--color_58))]"
      >
        Foto&apos;s
      </motion.h1>

      <div className="relative w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={photos[current]}
              alt={`Etappe33 photo ${current + 1}`}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={nextPhoto}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
        >
          <ChevronRight size={36} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === current ? "bg-[rgb(var(--color_58))]" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

