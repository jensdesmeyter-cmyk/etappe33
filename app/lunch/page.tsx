  "use client";
import { motion } from "framer-motion";
  export default function LunchPage() {
  const gold = "text-[rgb(var(--color_58))]";

  return (
      <section>
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
      <h1 className="text-4xl font-bold mb-4 text-white text-center mb-12 py-12 px-6 sm:px-12">Lunch</h1>
     </motion.h1>
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
          <h2 className={`text-2xl text-center mb-12 ${gold}`}>Lunch Menu</h2>
          <p className="text-white text-center mb-12 leading-relaxed whitespace-pre-line text-xl">
            Mosselen{"\n"}OF{"\n"}
           Steak met frietjes{"\n"}***{"\n"}
            Dessert: Hazelnoten praline chocolade gebakje{"\n"}***{"\n"}
            Koffie of Thee
          </p>
          <p className={`${gold} mt-4 text-center text-xl`}>
            €24 p.p
          </p>
          <p className="italic text-center text-white">Voor allergenen info kunt u terecht bij ons personeel</p>
          </motion.div>
        </section>
        

  );
}


