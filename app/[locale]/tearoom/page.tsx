"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

// 1. Import Data
import tearoomDataNL from "@/app/content/tearoom-nl.json";
import tearoomDataFR from "@/app/content/tearoom-fr.json";

export default function TearoomPage() {
  const gold = "text-[rgb(var(--color_58))]";
  const locale = useLocale();

  // 2. Select Language
  const t = locale === "fr" ? tearoomDataFR : tearoomDataNL;

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8 font-menu">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto space-y-16">
          <h1 className="text-4xl text-center font-bold mb-4">
            {t.title}
          </h1>
          <p className={`text-3xl text-center mb-12 ${gold}`}>
            {t.hours}
          </p>

          {/* PANCAKES */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t.pancakesTitle}
            </h2>
            <ul className="space-y-3 mb-12">
              {(t.pancakes || []).map((item, idx) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* DESSERTS */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t.dessertsTitle}
            </h2>
            <ul className="space-y-3 mb-12">
              {(t.desserts || []).map((item, idx) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* STARTERS */}
          <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t.startersTitle}
            </h2>
            <ul className="space-y-3 mb-12">
              {(t.starters || []).map((item, idx) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>

          {/* SMALL BITES */}
 {/*         <section>
            <h2 className={`text-2xl text-center mb-12 ${gold}`}>
              {t.smallBitesTitle}
            </h2>
            <ul className="space-y-3 mb-12">
              {(t.smallBites || []).map((item, idx) => (
                <MenuItem key={idx} name={item.name} price={item.price} />
              ))}
            </ul>
          </section>
*/}
          <p className="italic text-center text-white">
            {t.allergenNote}
          </p>
        </div>
      </motion.div>
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