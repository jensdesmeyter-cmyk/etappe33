"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  // Tekst ophalen met HTML-tags intact
  const description = t.raw("description"); 

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-6 py-6 text-white text-center font-menu">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6 pt-6 text-[rgb(var(--color_58))]"
      >
        {t("title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-2xl leading-relaxed text-gray-300"
        dangerouslySetInnerHTML={{
          __html: description.replace(
            /<highlight>(.*?)<\/highlight>/g,
            `<span class="text-[rgb(var(--color_58))] font-semibold">$1</span>`
          ),
        }}
      />
    </section>
  );
}



