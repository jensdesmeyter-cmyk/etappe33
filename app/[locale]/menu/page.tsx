"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MenuPage() {
  const t = useTranslations("Menu");
  const gold = "text-[rgb(var(--color_58))]";

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8 font-menu">
      <div className="max-w-2xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="text-4xl text-center font-bold mb-4">{t("title")}</h1>

          {/* Menu Etappe 33 */}
          <section>
            <h2 className={`text-2xl text-center mt-12 mb-12 ${gold}`}>{t("etappeTitle")}</h2>
            <p className="text-white text-center mb-12 leading-relaxed whitespace-pre-line text-xl">
              {t("etappeText")}
            </p>
            <p className={`${gold} mt-4 text-center text-xl`}>{t("etappePrice")}</p>
            <p className="text-white text-center text-xl">{t("etappeDrinks")}</p>
          </section>

          {/* À la Carte */}
          <h1 className={`text-4xl text-center mt-12 mb-12 ${gold}`}>{t("aLaCarte")}</h1>

          {/* Starters */}
          <MenuSection title={t("startersTitle")} items={t.raw("starters")} gold={gold} />

          {/* Voorgerechten */}
          <MenuSection title={t("appetizersTitle")} items={t.raw("appetizers")} gold={gold} />

          {/* Hoofdgerechten - Vis */}
          <h2 className={`text-2xl text-center mt-12 mb-6 ${gold}`}>{t("mainTitle")}</h2>
          <MenuSection title={t("fishTitle")} items={t.raw("fish")} gold={gold} />

          {/* Vlees */}
          <MenuSection title={t("meatTitle")} items={t.raw("meat")} gold={gold} />

          {/* Wild */}
          <MenuSection title={t("gameTitle")} items={t.raw("game")} gold={gold} />

          {/* Vegetarisch */}
          <MenuSection title={t("vegiTitle")} items={t.raw("vegi")} gold={gold} />

          {/* Salades */}
          <MenuSection title={t("saladsTitle")} items={t.raw("salads")} gold={gold} />

          {/* Kids */}
          <MenuSection title={t("kidsTitle")} items={t.raw("kids")} gold={gold} />

          {/* Desserts */}
          <MenuSection title={t("dessertsTitle")} items={t.raw("desserts")} gold={gold} />

          {/* Allergenen */}
          <p className="italic text-center text-white mt-8">{t("allergens")}</p>
        </motion.div>
      </div>
    </div>
  );
}

function MenuSection({
  title,
  items,
  gold,
}: {
  title: string;
  items: { name: string; price: string }[];
  gold: string;
}) {
  return (
    <section className="mt-12">
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

