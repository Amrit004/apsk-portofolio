"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [bgColor, setBgColor] = useState("#030014");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Check theme after mount
    if (typeof window !== "undefined") {
      const isLight = document.documentElement.classList.contains("light");
      setBgColor(isLight ? "#ffffff" : "#030014");
    }

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: bgColor }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-lg font-medium gradient-text"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}
