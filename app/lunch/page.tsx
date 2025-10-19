    export default function LunchPage() {
  const gold = "text-yellow-500";

  return (
      <section>
      <h1 className="text-4xl font-bold mb-4 text-white text-center mb-12 py-12 px-6 sm:px-12">Lunch</h1>
      <p className="text-[rgb(var(--color_58))] text-2xl text-center mb-12">
        Comming soon
      </p>
    </section>

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

