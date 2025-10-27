"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ZenChefPopup() {
  const [visible, setVisible] = useState(false);

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Load Zenchef SDK dynamically
  useEffect(() => {
    if (!visible) return;

    const existingScript = document.getElementById("zenchef-sdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "zenchef-sdk";
      script.src = "https://sdk.zenchef.com/v1/sdk.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
        >
          {/* Zenchef Widget */}
          <div
            className="zc-widget-config"
            data-restaurant="379665"
            data-open="2000"
            data-primary-color="ae9a64"
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



