"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ZenChefPopup() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "nl";
  const lang = locale === "fr" ? "fr" : "nl";

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Load Zenchef SDK dynamically once
  useEffect(() => {
    if (!visible) return;

    const existingScript = document.getElementById("zenchef-sdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "zenchef-sdk";
      script.src = "https://sdk.zenchef.com/v1/sdk.min.js";
      script.async = true;
      script.onload = () => {
        // Initialize Zenchef after script loads
        if ((window as any).Zenchef) {
          (window as any).Zenchef.init();
        }
      };
      document.body.appendChild(script);
    } else {
      // If already loaded, reinitialize the widget
      if ((window as any).Zenchef) {
        (window as any).Zenchef.init();
      }
    }
  }, [visible]);

  // 🔄 Reload Zenchef when language changes
  useEffect(() => {
    if (!visible) return;
    const widget = document.querySelector(".zc-widget-config");
    if (widget && (window as any).Zenchef) {
      // Remove old widget iframe
      document
        .querySelectorAll("iframe[src*='zenchef']")
        .forEach((iframe) => iframe.remove());

      // Wait briefly, then reinit in the new language
      setTimeout(() => {
        (window as any).Zenchef.init();
      }, 300);
    }
  }, [lang, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={lang} // 👈 Important: force React to remount when lang changes
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="zc-widget-config"
            data-restaurant="379665"
            data-open="2000"
            data-primary-color="ae9a64"
            data-lang={lang}
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}





