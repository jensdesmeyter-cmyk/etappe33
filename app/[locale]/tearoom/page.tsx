"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function TearoomPage() {
  const t = useTranslations("Tearoom");
  const gold = "text-[rgb(var(--color_58))]";

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8 font-menu">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto space-y-16">
          <h1 className="text-4xl text-center font-bold mb-4">
            {t("title")}
          </h1>
          <p className={`text-3xl text-center mb-12 ${gold}`}>
            {t("hours")}
          </p>

          {/* PANCAKES */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t("pancakes.title")}
            </h2>
            <ul className="space-y-3 mb-12">
              {t.raw("pancakes.items").map((item: any, idx: number) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* DESSERTS */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t("desserts.title")}
            </h2>
            <ul className="space-y-3 mb-12">
              {t.raw("desserts.items").map((item: any, idx: number) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* STARTERS */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t("starters.title")}
            </h2>
            <ul className="space-y-3 mb-12">
              {t.raw("starters.items").map((item: any, idx: number) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* SMALL BITES */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t("smallBites.title")}
            </h2>
            <ul className="space-y-3 mb-12">
              {t.raw("smallBites.items").map((item: any, idx: number) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          <p className="italic text-center text-white">
            {t("allergenNote")}
          </p>
        </div>
      </motion.h1>
    </div>
  );
}

// Reusable menu item component
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex font-menu text-xl justify-between border-b border-[rgb(var(--color_58))] pb-1">
      <span className="text-white">{name}</span>
      <span className="text-[rgb(var(--color_58))] font-medium">{price}</span>
    </li>
  );
}
