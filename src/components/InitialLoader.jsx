"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage to avoid repeating on every internal page navigation
    const hasSeenLoader = typeof window !== "undefined" && sessionStorage.getItem("boche_loader_seen");

    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Disable body scroll while loader is active
    document.body.style.overflow = "hidden";

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Fade out loader after 1.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
      sessionStorage.setItem("boche_loader_seen", "true");
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1A1A1A] text-white overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#FBE87E]/10 blur-[100px] pointer-events-none" />

          {/* Clean Logo Display (No Blur Card Box) */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/logo/bocheapprels2.webp"
                alt="boCHE Apparels Logo"
                width={260}
                height={80}
                priority
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            {/* Minimal Progress Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-44 sm:w-52 h-1 bg-white/20 rounded-full overflow-hidden mt-6"
            >
              <div
                className="h-full bg-[#FBE87E] rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#FBE87E]"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* Group Designation Text */}
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-label text-xs sm:text-sm font-bold tracking-[0.18em] text-[#FBE87E] uppercase mt-4"
            >
              Boby Chemmanur International Group
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
