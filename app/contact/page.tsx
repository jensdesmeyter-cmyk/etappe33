"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // This example uses Formspree — you can replace with EmailJS or your backend later
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else throw new Error();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className=" min-h-screen text-yellow-500 py-16 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-5xl text-center text-[#d4af37] font-serif mb-8">
          Contacteer Ons
        </h1>

        {/* Contact form */}
        <section className="p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl text-[#d4af37] mb-6">Stuur ons een bericht</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-800 mb-1">Naam</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1">E-mailadres</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1">Bericht</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg  text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#d4af37] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#e5c166] transition"
            >
              {status === "sending" ? "Versturen..." : "Verstuur bericht"}
            </button>

            {status === "success" && (
              <p className="text-green-500 mt-2">Bedankt! Je bericht is verzonden.</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-2">Er ging iets mis. Probeer opnieuw.</p>
            )}
          </form>
        </section>

        {/* Opening hours */}
        <section>
          <h2 className="text-2xl text-[#d4af37] mb-4">Openingsuren</h2>
          <ul className="text-gray-400 space-y-1">
            <li>Maandag – Dinsdag: Gesloten</li>
            <li>Woensdag – Vrijdag: 11:30 – 14:30 / 17:30 – 22:00</li>
            <li>Zaterdag: 11:30 – 22:00</li>
            <li>Zondag: 11:30 – 21:00</li>
          </ul>
        </section>

        {/* Social media links */}
        <section>
          <h2 className="text-2xl text-[#d4af37] mb-4">Volg ons</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100046240693901"
              target="_blank"
              className="bg-[#1877f2] text-white py-2 px-4 rounded-lg hover:opacity-80 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/YOURPAGE"
              target="_blank"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-80 transition"
            >
              Instagram
            </a>
          </div>
        </section>

        {/* Google Maps */}
        <section>
          <h2 className="text-2xl text-[#d4af37] mb-4">Locatie</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.8839832292592!2d3.481682412155483!3d50.75918486496803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c319d890ff05dd%3A0xb0e6e8529f92e276!2sEtappe%2033!5e0!3m2!1sen!2sbe!4v1760263761654!5m2!1sen!2sbe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
