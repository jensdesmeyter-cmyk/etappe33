"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ReservationPage() {
  const t = useTranslations("ReservationWK");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      // Make sure you have an API route that handles these new fields!
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", persons: "", date: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || t("error")); // Dit toont de melding uit de backend
      }
    } catch (err: unknown) {
      let message = t("error");
      if (err instanceof Error) message = err.message;
      setStatus("error");
      setErrorMsg(message);
    }
  };

  return (
    <div className="min-h-screen text-[rgb(var(--color_58))] py-16 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto space-y-16">
          <h1 className="text-4xl text-center text-white font-serif mb-8">
            {t("title")}
          </h1>

          {/* Reservation form */}
          <section className="p-8 rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl text-[rgb(var(--color_58))] mb-6">
              {t("formTitle")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-[rgb(var(--color_58))] mb-1">
                  {t("name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Email & Phone side-by-side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[rgb(var(--color_58))] mb-1">
                    {t("email")}
                  </label>
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
                  <label className="block text-[rgb(var(--color_58))] mb-1">
                    {t("phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Persons & Date side-by-side on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[rgb(var(--color_58))] mb-1">
                    {t("persons")}
                  </label>
                  <input
                    type="number"
                    name="persons"
                    min="1"
                    value={formData.persons}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-[rgb(var(--color_58))] mb-1">
                    {t("date")}
                  </label>
                  <select
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37] bg-white"
                  >
                    <option value="" disabled>{t("datePlaceholder")}</option>
                    <option value="15_june">{t("dateOption1")}</option>
                    <option value="21_june">{t("dateOption2")}</option>
                  </select>
                </div>
              </div>

              {/* Message / Remarks */}
              <div>
                <label className="block text-[rgb(var(--color_58))] mb-1">
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[rgb(var(--color_58))] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#e5c166] transition mt-4"
              >
                {status === "sending" ? t("sending") : t("send")}
              </button>

              {status === "success" && (
                <p className="text-green-500 mt-2 text-center font-medium">{t("success")}</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2 text-center font-medium">{errorMsg}</p>
              )}
            </form>
          </section>
        </div>
      </motion.div>
    </div>
  );
}