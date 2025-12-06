"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import menuDataNL from "@/app/content/menu-nl.json";
import menuDataFR from "@/app/content/menu-fr.json";

export default function MenuPage() {
  const gold = "text-[rgb(var(--color_58))]";
  const locale = useLocale();
  const t = locale === "fr" ? menuDataFR : menuDataNL;

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8 font-menu">
      <div className="max-w-2xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Page Title */}
          <h1 className="text-4xl text-center font-bold mb-4">{t.title}</h1>

          {/* Menu Etappe 33 */}
          <section>
            <h2 className={`text-2xl text-center mt-12 mb-12 ${gold}`}>
              {t.etappeTitle}
            </h2>
            <p className="text-white text-center mb-12 leading-relaxed whitespace-pre-line text-xl">
              {t.etappeText}
            </p>
            <p className={`${gold} mt-4 text-center text-xl`}>
              {t.etappePrice}
            </p>
            <p className="text-white text-center text-xl">
              {t.etappeDrinks}
            </p>
          </section>

          {/* À la Carte Header */}
          <h1 className={`text-4xl text-center mt-12 mb-12 ${gold}`}>
            {t.aLaCarte}
          </h1>

          {/* STARTERS & APPETIZERS */}
          <MenuSection title={t.startersTitle} items={t.starters || []} gold={gold} />
          <MenuSection title={t.appetizersTitle} items={t.appetizers || []} gold={gold} />

          {/* HOOFDGERECHTEN Header */}
          <h2 className={`text-3xl text-center font-bold mt-16 mb-8 text-white`}>
            {t.mainTitle}
          </h2>

          {/* MAINS */}
          <MenuSection title={t.fishTitle} items={t.fish || []} gold={gold} />
          <MenuSection title={t.meatTitle} items={t.meat || []} gold={gold} />
          <MenuSection title={t.gameTitle} items={t.game || []} gold={gold} />
          <MenuSection title={t.vegiTitle} items={t.vegi || []} gold={gold} />
          <MenuSection title={t.saladsTitle} items={t.salads || []} gold={gold} />
          <MenuSection title={t.kidsTitle} items={t.kids || []} gold={gold} />
          
          {/* DESSERTS */}
          <MenuSection title={t.dessertsTitle} items={t.desserts || []} gold={gold} />

          {/* Allergenen */}
          <p className="italic text-center text-white mt-8">{t.allergens}</p>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable component that handles Title + List together
function MenuSection({
  title,
  items,
  gold,
}: {
  title: string;
  items: { name: string; price: string }[];
  gold: string;
}) {
  // If list is empty, don't show the section or the title
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-12">
      {/* Title is displayed here, just above the list */}
      <h3 className={`text-2xl text-center mb-6 ${gold}`}>{title}</h3>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex font-menu text-xl justify-between border-b border-[rgb(var(--color_58))] pb-1"
          >
            <span className="text-white">{item.name}</span>
            <span className="text-[rgb(var(--color_58))] font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}