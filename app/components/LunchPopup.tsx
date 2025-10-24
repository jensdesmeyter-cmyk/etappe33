"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function LunchPopup() {
  const [visible, setVisible] = useState(false);

  // Show popup a few seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 bg-white text-black shadow-xl rounded-2xl p-4 sm:p-5 flex items-center gap-4 z-50 w-[280px] sm:w-[320px]"
    >
      <div className="flex-1">
        <p className="text-sm sm:text-base font-semibold">
          Ontdek onze lunchmenu van deze week!
        </p>
        <Link
          href="/lunch"
          className="inline-block mt-2 text-xs sm:text-sm font-medium underline hover:text-black transition text-[rgb(var(--color_58))]"
        >
          Bekijk lunch
        </Link>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="p-1 hover:bg-black/10 rounded-full transition"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
}
