"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ReservationsPage() {
  const t = useTranslations("Reservation");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[rgb(var(--color_58))] mb-6"
      >
        {t("title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-white max-w-3xl mb-8"
      >
        {t("description1")}
        <br />
        {t("description2")}{" "}
        <span className="text-[rgb(var(--color_58))] font-semibold">
          +32 493 45 25 95
        </span>
        .
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="tel:+32493452595"
          className="text-white border border-white rounded-full hover:bg-[#c9b67a] hover:text-black transition font-semibold px-6 py-3"
        >
          {t("callButton")}
        </a>
      </motion.div>
    </div>
  );
}

