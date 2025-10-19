export default function TearoomPage() {
  const gold = "text-[rgb(var(--color_58))]";

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8 font-menu">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-6xl text-center font-bold mb-4">Tea Room</h1>
        <p className={`text-4xl text-center mb-12 ${gold}`}>
          Van 14u tot 18u
        </p>

        {/* Pannenkoeken */}
        <section>
          <h2 className={`text-4xl text-center mb-12 ${gold}`}>Pannenkoeken</h2>
          <ul className="space-y-3 mb-12">
            <MenuItem name="Met boter & suiker" price="€6" />
            <MenuItem name="Met vanille-ijs" price="€8" />
            <MenuItem name="Met warme chocoladesaus & vanille-ijs" price="€10" />
            <MenuItem name="Met Nutella" price="€8" />
            <MenuItem name="Met vanille-ijs & slagroom" price="€8" />
            <MenuItem name="Met confituur" price="€8" />
          </ul>
        </section>

        {/* Ice Cream’s */}
        <section>
          <h2 className={`text-4xl text-center mb-12 ${gold}`}>Ice Cream’s</h2>
          <ul className="space-y-3 mb-12">
            <MenuItem name="Dame blanche" price="€10" />
            <MenuItem name="Coupe brésilienne" price="€10" />
            <MenuItem name="Crème brulée" price="€8" />
            <MenuItem name="Moelleux met bolletje vanille-ijs" price="€14" />
            <MenuItem name="Kinderijsje" price="€6" />
            <MenuItem name="Sabayon" price="€14" />
            <MenuItem name="Duo van sorbet" price="€10" />
          </ul>
        </section>

        {/* Starters om te delen */}
        <section>
          <h2 className={`text-4xl text-center mb-12 ${gold}`}>Starters om te delen</h2>
          <ul className="space-y-3 mb-12">
            <MenuItem name="Aperitiefplank Etappe 33 mix warm en koud" price="€28" />
            <MenuItem name="Chorizokroketjes (8st)" price="€14" />
            <MenuItem name="Calamares met verse tartaar (8st)" price="€14" />
            <MenuItem name="Cougonettes van kabeljauw met verse tartaar (6st)" price="€16" />
            <MenuItem name="Gelakt buikspek" price="€12" />
            <MenuItem name="Camembert uit de oven met plukbrood" price="€14" />
            <MenuItem name="Bruschetta’s met Iberico ham" price="€16" />
            <MenuItem name="Bruschetta’s Vegi" price="€10" />
            <MenuItem name="Kaas / Salami & Olijven" price="€10" />
          </ul>
        </section>

        {/* Klein hongertje */}
        <section>
          <h2 className={`text-4xl text-center mb-12 ${gold}`}>Klein Hongertje</h2>
          <ul className="space-y-3 mb-12">
            <MenuItem name="Wafel croques Etappe 33 (Ham, kaas en fris slaatje)" price="" />
            <MenuItem name="Wafel croques Club Etappe 33 (Ei, spek en fris slaatje)" price="" />
            <MenuItem name="Wafel croques Italiaans (Mozzarella, tomaat en basilicum)" price="" />
            <MenuItem name="Spaghetti klein" price="€16" />
            <MenuItem name="Spaghetti groot" price="€24" />
            <MenuItem name="Salade Etappe 33 (gerookte zalm, scampi’s, grijze garnalen, brood)" price="€30" />
            <MenuItem name="Salade geitenkaas (spek, appel, brood)" price="€26" />
            <MenuItem name="Garnaalkroketten (1,2 of 3 stuks) met fris slaatje & brood" price="€12 / €24 / €36" />
            <MenuItem name="Kaaskroketten (1,2 of 3 stuks) met fris slaatje & brood" price="€10 / €20 / €30" />
          </ul>
        </section>
      </div>
    </div>
  );
}

// Reusable menu item component
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex font-menu text-4xl justify-between border-b border-[rgb(var(--color_58))] pb-1">
      <span className="text-white">{name}</span>
      <span className="text-[rgb(var(--color_58))] font-medium">{price}</span>
    </li>
  );
}
