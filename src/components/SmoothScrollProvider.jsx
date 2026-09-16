"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth inertial scrolling engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration inertia curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll events to window so Framer Motion whileInView & IntersectionObservers trigger instantly
    lenis.on("scroll", () => {
      window.dispatchEvent(new CustomEvent("scroll"));
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Initial resize and scroll dispatch to ensure Framer Motion whileInView detects elements on first load
    const timer1 = setTimeout(() => {
      lenis.resize();
      window.dispatchEvent(new Event("scroll"));
    }, 100);

    const timer2 = setTimeout(() => {
      lenis.resize();
      window.dispatchEvent(new Event("scroll"));
    }, 400);

    const handleLoad = () => {
      lenis.resize();
      window.dispatchEvent(new Event("scroll"));
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("load", handleLoad);
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  // Handle route navigation changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        lenisRef.current?.resize();
        window.dispatchEvent(new Event("scroll"));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}

