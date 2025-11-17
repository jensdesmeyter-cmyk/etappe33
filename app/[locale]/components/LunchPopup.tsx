"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function LunchPopup() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("Lunchpopup");
  const pathname = usePathname();
    const locale = pathname.split("/")[1] || "nl";

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
      className="fixed bottom-6 right-6 bg-white text-black shadow-xl rounded-2xl p-4 sm:p-5 flex items-center mb-14 gap-4 z-50 w-[280px] sm:w-[320px]"
    >
      <div className="flex-1">
        <p className="text-sm sm:text-base font-semibold">
          {t("Week")}
        </p>
        <Link
          href={`/${locale}/lunch`}
          className="inline-block mt-2 text-xs sm:text-sm font-medium underline hover:text-black transition text-[rgb(var(--color_58))]"
        >
          {t("Lunch")}
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
