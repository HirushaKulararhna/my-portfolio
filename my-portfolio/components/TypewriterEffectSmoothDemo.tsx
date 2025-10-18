"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TypewriterEffectSmoothDemo() {
  const texts = ["Hirusha Kularathna", "Software Engineer"];
  const colors = ["#ec4899", "#3b82f6"]; // pink, blue

  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = async () => {
      setVisible(true);
      await new Promise((res) => setTimeout(res, 3000)); // stay visible for 3s
      setVisible(false);
      await new Promise((res) => setTimeout(res, 1000)); // wait before next
      setTextIndex((prev) => (prev + 1) % texts.length);
    };
    const timer = setTimeout(cycle, 0);
    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] text-center">
      <p className="text-neutral-600 dark:text-pink-200 text-5xl font-bold mb-6">
        Hello, I'm
      </p>

      {/* Typewriter Smooth Animation */}
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={texts[textIndex]}
              initial={{ width: "0%" }}
              animate={{ width: "fit-content" }}
              exit={{ width: "0%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="overflow-hidden inline-block"
            >
              <motion.span
                className="text-4xl md:text-6xl font-bold whitespace-nowrap"
                style={{ color: colors[textIndex] }}
              >
                {texts[textIndex]}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blinking Cursor — same height as text */}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="inline-block ml-2 align-middle"
          style={{
            width: "4px",
            height: "3em", // matches text height exactly
            backgroundColor: colors[textIndex],
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
        <button className="w-40 h-12 rounded-xl bg-black border dark:border-white text-white text-sm font-medium hover:opacity-80 transition">
          Hire Me
        </button>
        <button className="w-40 h-12 rounded-xl bg-white text-black border border-black text-sm font-medium hover:bg-gray-100 transition">
          Download CV
        </button>
      </div>
    </div>
  );
}
