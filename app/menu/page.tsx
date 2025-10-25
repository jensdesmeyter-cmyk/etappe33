"use client";
import { motion } from "framer-motion";
export default function MenuPage() {
  const gold = "text-[rgb(var(--color_58))]";

  return (
    
    <div className="min-h-screen text-white py-12 px-4 sm:px-8 font-menu">
      <div className="max-w-2xl mx-auto space-y-16">
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        <h1 className="text-4xl text-center font-bold mb-4">Onze Menu</h1>
        <p className={`text-3xl  text-center mb-12 ${gold}`}>
          Proef onze heerlijke gerechten
        </p>

        <h1 className={`text-2xl text-center mb-12 ${gold}`}>À la Carte</h1>

        {/* STARTERS OM TE DELEN */}
        <section>
          <h2 className={`text-2xl text-center mb-12 ${gold}`}>
            Starters om te delen
          </h2>
          <ul className="space-y-3 mb-12">
            <MenuItem name="Aperitiefplank Etappe 33 mix warm en koud" price="€28" />
            <MenuItem name="Chorizokroketjes (8 st.)" price="€14" />
            <MenuItem name="Calamares met verse tartaar (8 st.)" price="€14" />
            <MenuItem name="Cougonettes van kabeljauw met verse tartaar (6 st.)" price="€16" />
            <MenuItem name="Gelakt buikspek" price="€12" />
            <MenuItem name="Camembert uit de oven met plukbrood" price="€14" />
            <MenuItem name="Bruschetta’s met Iberico ham" price="€16" />
            <MenuItem name="Bruschetta’s Vegi" price="€10" />
          </ul>
        </section>

        {/* VOORGERECHTEN */}
        <section>
          <h2 className={`text-2xl text-center mb-12 ${gold}`}>Voorgerechten</h2>
          <ul className="space-y-3">
            <MenuItem name="Scampi’s Etappe 33 (6 st.)" price="€20" />
            <MenuItem name="Garnaalkroketten (1 of 2 st.)" price="€10/€20" />
            <MenuItem name="Kaaskroketten (1 of 2 st.)" price="€8/€16" />
            <MenuItem name="Coquilles / gekarameliseerd witloof / gedroogde Iberico ham" price="€24" />
            <MenuItem name="Duo van wildpastei / toast / uienconfituur" price="€18" />
          </ul>
        </section>

        {/* HOOFDGERECHTEN */}
        <section>
          <h2 className={`text-2xl text-center mt-12 mb-12 ${gold}`}>Hoofdgerechten</h2>

          {/* VIS */}
          <h3 className={`text-2xl mt-4 mb-6 text-center ${gold}`}>Vis</h3>
          <ul className="space-y-3">
            <MenuItem name="Zeebaars / ratatouille groenten / puree" price="€30" />
            <MenuItem name="Scampi’s Etappe 33" price="€28" />
            <MenuItem name="Gegratineerd vispannetje" price="€30" />
            <MenuItem name="Op vel gebakken kabeljauwhaasje / prei / mosterdsausje / puree" price="€34" />
            <MenuItem name="Kikkerbilletjes" price="€32" />
            <MenuItem name="Zeetong Meunière" price="€38" />
            <MenuItem name="Garnaalkroketten / fris slaatje (1, 2 of 3 st.)" price="€12/€24 /€36" />
          </ul>

          {/* VLEES */}
          <h3 className={`text-2xl mt-10 mb-6 text-center ${gold}`}>Vlees</h3>
          <ul className="space-y-3">
            <MenuItem name="Filet pur van WIT BLAUW rund (250 gr.)" price="€35" />
            <MenuItem name="Côte à l’os van WIT BLAUW rund (2 pers.)" price="€76" />
            <MenuItem name="Lamskroontje / mosterdsausje / seizoensgroenten" price="€38" />
            <MenuItem name="Traag gegaarde Pluma" price="€30" />
            <MenuItem name="Rundswangen gekonfijt" price="€32" />
            <MenuItem name="Rundsburger Etappe 33" price="€26" />
          </ul>

          <p className="text-center text-white mt-4 text-xl">
            Sauzen: pepersaus, champignonsaus en kruidenboter <span className={gold}>€3</span>
          </p>

          {/* WILD */}
          <h3 className={`text-2xl mt-10 mb-6 text-center ${gold}`}>Wild</h3>
          <ul className="space-y-3">
            <MenuItem name="Hertenkalffilet / seizoensgroenten / veenbessensausje / amandelkroketten" price="€38" />
            <MenuItem name="Fazantfilet / fine champagnesausje / seizoensgroenten / amandelkroketten" price="€34" />
            <MenuItem name="Stoofpotje van Everzwijn / witloofslaatje / amandelkroketten" price="€30" />
          </ul>
        </section>

        {/* VEGETARISCH */}
        <section>
          <h2 className={`text-2xl text-center mb-12 mt-12 ${gold}`}>Vegetarisch</h2>
          <ul className="space-y-3">
            <MenuItem name="Cannelloni Vegi / Arrabiata" price="€22" />
            <MenuItem name="Kaaskroketten / fris slaatje (1, 2 of 3 st.)" price="€10/€20/€30" />
            <MenuItem name="Halloumi gebakken / fris slaatje" price="€24" />
          </ul>
        </section>

        {/* SALADES */}
        <section>
          <h2 className={`text-2xl text-center mb-12 mt-12 ${gold}`}>Salades</h2>
          <ul className="space-y-3">
            <MenuItem name="Salade Etappe 33 / gerookte zalm / scampi’s / grijze garnalen" price="€30" />
            <MenuItem name="Salade geitenkaas / spek / appel" price="€26" />
          </ul>
        </section>

        {/* KIDS */}
        <section>
          <h2 className={`text-2xl text-center mb-12 mt-12 ${gold}`}>Kids</h2>
          <ul className="space-y-3">
            <MenuItem name="Kipnuggets / frietjes" price="€14" />
            <MenuItem name="Kinderspaghetti" price="€16" />
            <MenuItem name="Frikandel / frietjes" price="€12" />
            <MenuItem name="Kindersteak / frietjes" price="€18" />
          </ul>
        </section>

        {/* DESSERTS */}
        <section>
          <h2 className={`text-2xl text-center mb-12 mt-12 ${gold}`}>Desserts</h2>
          <ul className="space-y-3">
            <MenuItem name="Dame blanche" price="€10" />
            <MenuItem name="Coupe advocaat" price="€10" />
            <MenuItem name="Coupe brésilienne" price="€10" />
            <MenuItem name="Crème brûlée" price="€9" />
            <MenuItem name="Moelleux / bolletje vanille-ijs" price="€14" />
            <MenuItem name="Kinderijsje" price="€6" />
            <MenuItem name="Sabayon" price="€12" />
            <MenuItem name="Duo van sorbet" price="€10" />
          </ul>
        </section>

        {/* MENU ETAPPE 33 */}
        <section>
          <h2 className={`text-2xl text-center mt-12 mb-12 ${gold}`}>Menu Etappe 33</h2>
          <p className="text-white text-center mb-12 leading-relaxed whitespace-pre-line text-xl">
            Cava of Biertje Haagse Hoek of Mocktail{"\n"}***{"\n"}
            Voorgerecht:{"\n"}
            Duo van wildpastei / toast / uienconfituur{"\n"}OF{"\n"}
            Kabeljauwhaasje / mosterdsausje / prei{"\n"}***{"\n"}
            Hoofdgerecht:{"\n"}
            Zeebaars / ratatouille groenten / boter-limoensausje / puree{"\n"}OF{"\n"}
            Hertenkalffilet / seizoensgroenten / veenbessensausje / amandelkroketten{"\n"}***{"\n"}
            Dessert: Cheesecake met citrus{"\n"}***{"\n"}
            Koffie of Thee
          </p>
          <p className={`${gold} mt-4 text-center text-xl`}>
            €59 p.p. / €79 All-In
          </p>
          <p className="text-white text-center text-xl">
            Dranken inbegrepen tot de koffie
          </p>
        </section>
        </motion.h1>
      </div>
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

