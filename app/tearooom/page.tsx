    export default function TearoomPage() {
  const gold = "text-yellow-500";

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-3xl text-center font-bold mb-4">Onze Menu</h1>
        <p className="text-yellow-500 text-center mb-12r">
        Proef onze heerlijke gerechten
      </p>
        <h1 className={`text-5xl font-serif text-center mb-12 ${gold}`}>
          À la Carte
        </h1>

        {/* Fingerfood */}
        <section>
          <h2 className={`text-3xl text-center mb-12 ${gold}`}>Fingerfood</h2>
          <p className="italic text-center mb-12 text-gray-800 mb-6">
            Deze gerechten zijn perfect om te delen
          </p>
          <ul className="space-y-3 mb-12">
            <MenuItem name="Chorizokroketjes (6 st.)" price="€14" />
            <MenuItem name="Aperitiefplankje mix van warm en koud" price="€28" />
            <MenuItem name="Calamares met verse tartaar (8 st.)" price="€14" />
            <MenuItem
              name="Cougonettes van kabeljauw met verse tartaar (4 st.)"
              price="€18"
            />
            <MenuItem name="Gelakt buikspek" price="€14" />
          </ul>
        </section>

        {/* Voorgerechten */}
        <section>
          <h2 className={`text-3xl mb-2 text-center mb-12  ${gold}`}>Voorgerechten</h2>
          <p className="italic text-gray-800 text-center mb-12  mb-6">
            Een gevarieerd menu van smaakvolle gerechten die dagelijks lokaal
            worden ingekocht
          </p>
          <ul className="space-y-3">
            <MenuItem name="Scampi v/d Chef (6 st.)" price="€21" />
            <MenuItem name="Garnaalkroketten (1 of 2 st.)" price="1 st. €12 / 2 st. €24" />
            <MenuItem name="Kaaskroketten (1 of 2 st.)" price="1 st. €10 / 2 st. €20" />
            <MenuItem name="Duo van kaas- en garnaalkroket" price="€22" />
            <MenuItem name="Carpaccio van rundsfilet" price="€19" />
          </ul>
        </section>

        {/* Hoofdgerechten - Vlees */}
        <section>
          <h2 className={`text-3xl mb-2 text-center mb-12 ${gold}`}>Hoofdgerechten</h2>
          <h3 className={`text-2xl mt-4 mb-3 text-center mb-12 ${gold}`}>Vlees</h3>
          <ul className="space-y-3">
            <MenuItem name="Côte à l'os (saus naar keuze)" price="€38" />
            <MenuItem name="Carpaccio van rundsfilet" price="€29" />
            <MenuItem name="Rundsburger Haagsehoek" price="€24" />
            <MenuItem name="Filet pur van rund (saus naar keuze)" price="€35" />
            <MenuItem name="Steak tartaar" price="€29" />
            <MenuItem
              name="Lamskroontje – met mosterdsausje en gratin"
              price="€38"
            />
            <MenuItem name="Saus naar keuze: Peper / Champignon / Béarnaise" price="€3" />
          </ul>

          <h3 className={`text-2xl mt-8 mb-3 text-center mb-12  ${gold}`}>Vis</h3>
          <ul className="space-y-3">
            <MenuItem name="Scampi v/d Chef" price="€30" />
            <MenuItem
              name="Op vel gebakken kabeljauwhaasje met mosterdmousseline"
              price="€34"
            />
            <MenuItem name="Gegratineerd vispannetje" price="€30" />
            <MenuItem name="Kikkerbilletjes" price="€32" />
            <MenuItem name="Garnaalkroketten (1-3 st.)" price="1 €12 / 2 €24 / 3 €36" />
          </ul>

          <h3 className={`text-2xl mt-8 mb-3 text-center mb-12 ${gold}`}>Vegetarisch</h3>
          <ul className="space-y-3">
            <MenuItem name="Pasta met seizoensgroentjes" price="€20" />
            <MenuItem name="Cannelloni Vegi / Arrabiata" price="€24" />
            <MenuItem name="Kaaskroketten (1-3 st.)" price="1 €10 / 2 €20 / 3 €30" />
          </ul>
        </section>

        {/* Salades */}
        <section>
          <h2 className={`text-3xl mb-3 text-center mb-12 ${gold}`}>Salades</h2>
          <ul className="space-y-3">
            <MenuItem
              name="Salade Haagse Hoek (gerookte zalm, scampi en garnalen)"
              price="€30"
            />
            <MenuItem
              name="Salade geitenkaas met spek en appel"
              price="€26"
            />
            <MenuItem name="Salade tomaat garnaal" price="€38" />
          </ul>
        </section>

        {/* Kids */}
        <section>
          <h2 className={`text-3xl mb-3 text-center mb-12 ${gold}`}>Kids</h2>
          <ul className="space-y-3">
            <MenuItem name="Frikandel met frietjes" price="€12" />
            <MenuItem name="Kipnuggets met frietjes" price="€14" />
            <MenuItem name="Balletjes in tomatensaus met frietjes" price="€15" />
          </ul>
        </section>

        {/* Suggesties */}
        <section>
          <h2 className={`text-3xl mb-3 text-center mb-12 ${gold}`}>Suggesties</h2>
          <ul className="space-y-3">
            <MenuItem name="Pluma van licht gegaard varken" price="€30" />
            <MenuItem name="Zeetong meunière" price="€38" />
            <MenuItem name="Roggevleugel met botersaus en kappers" price="€34" />
          </ul>
        </section>

        {/* Desserts */}
        <section>
          <h2 className={`text-3xl mb-3 text-center mb-12 ${gold}`}>Desserts</h2>
          <ul className="space-y-3">
            <MenuItem name="Dame blanche" price="€10" />
            <MenuItem name="Coupe advocaat" price="€10" />
            <MenuItem name="Coupe brésilienne" price="€10" />
            <MenuItem name="Coupe aardbeien" price="€14" />
            <MenuItem name="Crème brulée" price="€9" />
            <MenuItem name="Moelleux met vanille-ijs" price="€10" />
            <MenuItem name="Kinderijsje" price="€6" />
            <MenuItem name="Nathalie's sabayon" price="€12" />
          </ul>
        </section>

        {/* Menu Haagsehoek */}
        <section>
          <h2 className={`text-3xl mb-3 text-center mb-12 ${gold}`}>Menu Haagsehoek</h2>
          <p className="text-gray-800 text-center mb-12 leading-relaxed whitespace-pre-line">
            Glaasje cava, biertje Haagse Hoek of alcoholvrije cocktail met amuse
            {"\n"}***{"\n"}
            voorgerecht:{"\n"}
            Kroket van Zwezerik of Gebakken coquilles met gekarameliseerd witloof
            {"\n"}***{"\n"}
            hoofgerecht:{"\n"}
            Vispannetje of Pluma van traag gegaard varken
            {"\n"}***{"\n"}
            dessert: Dessert van het huis
            {"\n"}***{"\n"}
            Koffie of thee
          </p>
          <p className={`${gold} mt-4 text-xl text-center mb-12 `}>
            €59 P.P. / €74 P.P. incl. aangepaste dranken
          </p>
          <p className="text-sm text-gray-800 text-center mb-12 ">
            (dranken inbegrepen tot aan de koffie)
          </p>
        </section>
      </div>
    </div>
  );
}

// Reusable menu item component
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex justify-between border-b border-gray-700 pb-1">
      <span className="text-gray-800">{name}</span>
      <span className="text-[#d4af37] font-medium">{price}</span>
    </li>
  );
}

