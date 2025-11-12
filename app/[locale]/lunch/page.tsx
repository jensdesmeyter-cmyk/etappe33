"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function LunchPage() {
  const gold = "text-[rgb(var(--color_58))]";
  const t = useTranslations("Lunch");

  return (
    <section className="min-h-screen text-white py-12 px-6 sm:px-12 font-menu">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {t("title")}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className={`text-2xl text-center mb-12 ${gold}`}>
          {t("menuTitle")}
        </h2>

        <p className="text-white text-center mb-12 leading-relaxed whitespace-pre-line text-xl">
          {t("menuText")}
        </p>

        <p className={`${gold} mt-4 text-center text-xl`}>
          {t("price")}
        </p>

        <p className="italic text-center text-white mt-6">
          {t("nolunch")}
        </p>
        
        <p className="italic text-center text-white mt-6">
          {t("allergens")}
        </p>
      </motion.div>
    </section>
  );
}



