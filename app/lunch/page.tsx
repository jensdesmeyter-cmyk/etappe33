    export default function LunchPage() {
  const gold = "text-yellow-500";

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-5xl text-center font-bold mb-4">Lunch</h1>
        <p className="text-[rgb(var(--color_58))] text-center text-4xl mb-12r">
        Comming soon
      </p>
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

