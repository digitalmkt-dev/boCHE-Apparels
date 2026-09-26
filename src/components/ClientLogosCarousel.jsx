"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const INTERNATIONAL_LOGOS = [
  { name: "Brunotti", logo: "/logo/int-client/brunottii.webp" },
  { name: "Flying Machine", logo: "/logo/int-client/fly%20machine.webp" },
  { name: "Attires", logo: "/logo/int-client/attires.webp" },
  { name: "LPP S.A.", logo: "/logo/int-client/llp.webp" },
  { name: "Just Brands", logo: "/logo/int-client/just%20brands.webp" },
  { name: "Cotton Division", logo: "/logo/int-client/cotton%20division.webp" },
  { name: "Micross", logo: "/logo/int-client/micross.webp" },
  { name: "Marbel", logo: "/logo/int-client/marbel.webp" },
  { name: "K Apparels", logo: "/logo/int-client/k.webp" },
];

export const DOMESTIC_LOGOS = [
  { name: "Pantaloons", logo: "/logo/dom-client/pantaloons.webp" },
  { name: "Gini & Jony", logo: "/logo/dom-client/gini%20%26%20jony.webp" },
  { name: "FLF Future Lifestyle", logo: "/logo/dom-client/FlF.webp" },
  { name: "boCHE Appliances", logo: "/logo/dom-client/boche%20aa.webp" },
  { name: "boCHE Club", logo: "/logo/dom-client/club.webp" },
  { name: "Indel Money", logo: "/logo/dom-client/indial%20mony.webp" },
  { name: "Phygicart", logo: "/logo/dom-client/phygcart.webp" },
  { name: "boCHE ShakesBierre", logo: "/logo/dom-client/shakesbierre.webp" },
];

// Combine all international and domestic brand logos into one unified list
const ALL_LOGOS = [...INTERNATIONAL_LOGOS, ...DOMESTIC_LOGOS];

export default function ClientLogosCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Duplicate list 3 times for a continuous, seamless loop
  const marqueeLogos = [...ALL_LOGOS, ...ALL_LOGOS, ...ALL_LOGOS];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] text-[#1A1A1A] border border-[#E5E5E2] overflow-hidden relative rounded-3xl shadow-sm">
      {/* Soft ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FBE87E]/15 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FBE87E]/10 rounded-full filter blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-headline font-black tracking-tight text-[#171717] leading-tight"
          >
            Brands we have collaborated with
          </motion.h2>


        </div>

        {/* Carousel Container */}
        <div
          className="relative group py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Edge Blur Mask Overlays */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Side Scroll Buttons */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#E5E5E2] shadow-md text-[#1A1A1A] flex items-center justify-center hover:bg-[#FBE87E] transition-all duration-200 cursor-pointer opacity-70 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#E5E5E2] shadow-md text-[#1A1A1A] flex items-center justify-center hover:bg-[#FBE87E] transition-all duration-200 cursor-pointer opacity-70 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Marquee Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center overflow-x-auto no-scrollbar py-4 scroll-smooth"
          >
            <div
              className={`flex items-center gap-8 sm:gap-14 md:gap-16 shrink-0 ${
                isHovered ? "[animation-play-state:paused]" : ""
              }`}
              style={{
                display: "flex",
                width: "max-content",
                animation: "smoothMarquee 35s linear infinite",
              }}
            >
              {marqueeLogos.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="w-32 sm:w-44 md:w-52 h-20 sm:h-28 shrink-0 flex items-center justify-center px-3 sm:px-4 bg-transparent transition-all duration-300 group/logo"
                >
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    title={`${item.name} logo`}
                    className="max-h-12 sm:max-h-16 md:max-h-20 max-w-full object-contain transition-all duration-300 group-hover/logo:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Keyframes for Infinite Scrolling Carousel */}
      <style jsx global>{`
        @keyframes smoothMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
