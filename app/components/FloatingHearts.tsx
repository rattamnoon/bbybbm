"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Heart shape, could be emoji or SVG
const Heart = ({ size = 16 }: { size?: number }) => (
  <span style={{ fontSize: size, display: "inline-block" }}>🩷</span>
);

type FloatingHeart = {
  id: number;
  x: number; // percent 0-100
  size: number;
  duration: number;
  delay: number;
  rotate: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // สุ่มค่าต่างๆ
      const x = Math.random() * 90 + 5; // 5% ถึง 95%
      const size = Math.random() * 24 + 24; // 24px - 48px
      const duration = Math.random() * 1.5 + 2.5; // 2.5s - 4s
      const delay = Math.random() * 0.8; // 0-0.8s
      const rotate = (Math.random() - 0.5) * 60; // -30 ถึง 30 องศา
      const id = idRef.current++;
      setHearts((prev) => [...prev, { id, x, size, duration, delay, rotate }]);
    }, 350); // ความถี่หัวใจเกิดใหม่
    return () => clearInterval(interval);
  }, []);

  // ลบหัวใจเมื่อ animation จบ
  const handleComplete = (id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      <AnimatePresence>
        {hearts?.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              y: 0,
              opacity: 0.7,
              scale: 0.8,
              x: `${heart.x}vw`,
              rotate: heart.rotate,
            }}
            animate={{
              y: -window.innerHeight * 0.95,
              opacity: [0.7, 1, 0],
              scale: [0.8, 1.1, 0.7],
              x: `${heart.x}vw`,
              rotate: heart.rotate + (Math.random() - 0.5) * 40,
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
            onAnimationComplete={() => handleComplete(heart.id)}
          >
            <Heart size={heart.size} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
