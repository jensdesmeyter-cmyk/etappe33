"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image"; 
import Link from "next/link"; // 1. Imported Link
import { usePathname } from "next/navigation"; // 2. Imported usePathname
import photo from "../../../assets/Courtois.png";
import photo2 from "../../../assets/charle.png";

export default function WkEventPage() {
  const gold = "text-[rgb(var(--color_58))]";
  const t = useTranslations("WkEvent");

  // 3. Extracted locale from the URL so the button knows which language to use
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "nl";

  return (
    <section className="min-h-screen text-white py-12 px-6 sm:px-12 font-menu overflow-hidden">
      
      {/* Top Titles */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-bold mb-4 uppercase tracking-wide"
      >
        {t("title")}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`text-2xl text-center mt-6 mb-12 ${gold} uppercase`}
      >
        {t("subtitle")}
      </motion.h2>

      {/* Main Layout: 3 Columns on Desktop, Stacked on Mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-[1400px] mx-auto mt-8">
        
        {/* LEFT IMAGE: Charle BBQ (Adjusted width back to lg:w-1/4 for perfect 3-column fit) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hidden lg:block w-full lg:w-1/4 h-[600px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >
          <Image 
            src={photo2}
            alt="Charle enjoying BBQ"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CENTER CONTENT: The Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full lg:w-2/4 flex flex-col items-center gap-10"
        >
          {/* Dates Section */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-full text-center text-2xl md:text-3xl uppercase">
            <div>
              <p className="text-white text-center text-xl">{t("date1")}</p>
              <p className={`${gold} mt-4 text-center text-xl`}>{t("time")}</p>
            </div>
            <div>
              <p className="text-white text-center text-xl">{t("date2")}</p>
              <p className={`${gold} mt-4 text-center text-xl`}>{t("time")}</p>
            </div>
          </div>

          {/* Package Details Section */}
          <div className="bg-neutral-900/60 p-8 rounded-lg border border-[rgb(var(--color_58))]/30 text-center w-full max-w-2xl mt-4 shadow-lg backdrop-blur-sm">
            <p className="text-sm tracking-widest uppercase mb-2 text-gray-400">
              {t("packetDetailsLabel")}
            </p>
            <h3 className={`text-2xl text-center mt-8 mb-8 ${gold} font-bold uppercase`}>
              {t("packageTitle")}
            </h3>
            <p className="text-xl md:text-2xl mb-6 whitespace-pre-line font-medium leading-relaxed">
              {t("packageDetails")}
            </p>
            <div className={`text-3xl text-center mt-8 mb-4 ${gold} font-bold bg-black/40 inline-block px-8 py-3 rounded-md`}>
              {t("price")}
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE: Courtois (Adjusted width back to lg:w-1/4) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden lg:block w-full lg:w-1/4 h-[600px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        >
          <Image 
            src={photo}
            alt="Courtois"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>

      {/* 4. Aligned Call Button using <Link> instead of <a> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex justify-center w-full mt-16"
      >
        <Link
          href={`/${locale}/reservationbbq`}
          className="text-white border-2 border-white rounded-full hover:bg-[rgb(var(--color_58))] hover:border-[rgb(var(--color_58))] hover:text-black transition-all duration-300 font-semibold px-10 py-4 uppercase tracking-wider shadow-lg"
        >
          {t("callButton")}
        </Link>
      </motion.div>
    </section>
  );
}