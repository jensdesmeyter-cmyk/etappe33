"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import photo from '../assets/IMG_6052.jpg';

export default function PhotoPage() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
      <h1 className="text-4xl font-bold mb-4 text-white text-center mb-12 py-12 px-6 sm:px-12">Foto&apos;s</h1>
      <p className="text-[rgb(var(--color_58))] text-2xl text-center mb-12">
        Comming soon
      </p></motion.h1>
    </section>
  );
}
