"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      whileHover={{ opacity: 1 }}
      onClick={scrollToContent}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer group"
      aria-label="Scroll to content"
    >
      <span className="text-sm transition-opacity">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
      >
        <motion.div className="w-1.5 h-3 bg-current rounded-full" />
      </motion.div>
    </motion.button>
  );
}
