"use client";
import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactPage() {
const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(t("error"));
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
        <div className="max-w-4xl mx-auto space-y-16">
          <h1 className="text-4xl text-center text-white font-serif mb-8">
            {t("title")}
          </h1>

          {/* Contact form */}
          <section className="p-8 rounded-2xl shadow-lg bg-white">
            <h2 className="text-2xl text-[rgb(var(--color_58))] mb-6">
              {t("formTitle")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  {t("message")}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg text-black border border-gray-700 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[rgb(var(--color_58))] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#e5c166] transition"
              >
                {status === "sending" ? t("sending") : t("send")}
              </button>

              {status === "success" && (
                <p className="text-green-500 mt-2">{t("success")}</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2">{errorMsg}</p>
              )}
            </form>
          </section>

          {/* Opening hours */}
          <section>
            <h2 className="text-2xl text-[rgb(var(--color_58))] mb-4">{t("hoursTitle")}</h2>
            <ul className="text-white space-y-1">
              <li>{t("lunch")}</li>
              <li>{t("tearoom")}</li>
              <li>{t("dinner")}</li>
            </ul>
          </section>

          {/* Contact info */}
          <section>
            <div>
              <h2 className="text-2xl text-[rgb(var(--color_58))] mb-4">{t("infoTitle")}</h2>
              <ul className="space-y-1 text-sm">
                <li>
                  {t("address")}{" "}
                  <a
                    href="https://maps.app.goo.gl/BeLdLUGgKSRDBFpd6"
                    className="text-white hover:underline"
                  >
                    Bergstraat 33, 9690 Kluisbergen
                  </a>
                </li>
                <li>
                  {t("phone")}{" "}
                  <a href="tel:+32493452595" className="text-white hover:underline">
                    +32 493 45 25 95
                  </a>
                </li>
                <li>
                  {t("emailLabel")}{" "}
                  <a href="mailto:info@etappe33.be" className="text-white hover:underline">
                    info@etappe33.be
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Social media */}
          <section>
            <h2 className="text-2xl text-[rgb(var(--color_58))] mb-4">{t("follow")}</h2>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61583098465408"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/YOURPAGE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </section>

          {/* Google Maps */}
          <section>
            <h2 className="text-2xl text-[rgb(var(--color_58))] mb-4">{t("location")}</h2>
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
      </motion.div>
    </div>
  );
}

