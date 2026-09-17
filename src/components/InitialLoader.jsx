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
            scale: 1.03,
            filter: "blur(8px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1A1A1A] text-white overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FBE87E]/10 blur-[120px] pointer-events-none" />

          {/* Logo Container with Soft Entrance & Glow */}
          <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(251,232,126,0.12)] flex items-center justify-center"
            >
              <Image
                src="/logo/bocheapprels2.webp"
                alt="boCHE Apparels Logo"
                width={220}
                height={66}
                priority
                className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-label text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FBE87E] uppercase"
            >
              Industrial Craft Garment Unit
            </motion.p>

            {/* Minimal Progress Line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "160px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-1 bg-white/15 rounded-full overflow-hidden mt-4"
            >
              <div
                className="h-full bg-[#FBE87E] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#FBE87E]"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>

          {/* Bottom Copyright watermark */}
          <div className="absolute bottom-6 font-label text-[10px] tracking-widest text-white/30 uppercase">
            From Fiber to Fashion
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
