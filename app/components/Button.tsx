"use client";

import { motion } from "motion/react";
import { useMediaQuery } from "usehooks-ts";

export default function Button({ onClick }: { onClick: () => void }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <motion.button
      type="button"
      className={`bg-fuchsia-600 hover:bg-fuchsia-400 text-white px-4 py-2 rounded ${
        isMobile ? "rotate-90" : "rotate-0"
      } animate-pulse`}
      onClick={onClick}
      animate={{ scale: 1.2, rotate: 10, skewX: 10, skewY: 10 }}
      transition={{
        type: "spring",
        stiffness: 100,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      Cchorfah Click Me
    </motion.button>
  );
}
