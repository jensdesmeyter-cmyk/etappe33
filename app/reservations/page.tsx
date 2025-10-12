export default function ReservationsPage() {
  return (
    <section>
      <h1 className="text-3xl text-yellow-500 font-bold mb-4 text-center py-12 px-6 sm:px-12">Reservaties</h1>
      <p className="text-gray-800 mb-4 text-center">
        Reserveer nu met 10% korting met kortingscode: Warme baco
      </p>

      {/* Zenchef widget placeholder */}
      <div className="border rounded-lg bg-black p-6 text-center shadow-sm">
        <p>Reservation widget will appear here (Zenchef integration soon).</p>
      </div>
    </section>
  );
}
