"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StatsCounter() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // High-Speed Fast Parallax movement for background thread images
  const yParallaxDesktop = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const yParallaxMobile = useTransform(scrollYProgress, [0, 1], [-180, 180]);

  const stats = [
    {
      label: "FACTORY AREA",
      value: "15,000 Sq. Ft.",
      iconSrc: "/icons/factroy area.webp",
      iconAlt: "Factory Area",
      desc: "Modern apparel manufacturing facility",
    },
    {
      label: "PRODUCTION CAPACITY",
      value: "Basic: 80,000 pcs/month\nFashion: 50,000 pcs/month",
      iconSrc: "/icons/production capacity.webp",
      iconAlt: "Production Capacity",
      desc: "Garment manufacturing capability",
    },
    {
      label: "EXPERIENCE",
      value: "6 Years",
      iconSrc: "/icons/experience.webp",
      iconAlt: "Experience",
      desc: "Apparel manufacturing expertise",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 bg-[#F9F9F9] text-[#1A1A1A] border-b border-[#E5E5E2] relative overflow-hidden"
    >
      {/* Horizontal Thread Background for Landscape / Desktop (md and above) */}
      <motion.div
        style={{ y: yParallaxDesktop, willChange: "transform" }}
        className="hidden md:block absolute inset-0 -top-[50%] -bottom-[50%] w-full h-[200%] z-0 pointer-events-none"
      >
        <Image
          src="/images/thread-bg.webp"
          alt="boCHE Apparel Horizontal Thread Background"
          fill
          className="object-cover object-center opacity-100"
          sizes="(min-width: 768px) 100vw, 1px"
        />
      </motion.div>

      {/* Vertical Thread Background for All Vertical / Mobile / Portrait Viewports (below md) */}
      <motion.div
        style={{ y: yParallaxMobile, willChange: "transform" }}
        className="block md:hidden absolute inset-0 -top-48 -bottom-48 w-full h-[calc(100%+384px)] z-0 pointer-events-none"
      >
        <Image
          src="/images/thread-bgvrt.webp"
          alt="boCHE Apparel Vertical Thread Background"
          fill
          className="object-cover object-center opacity-100"
          sizes="(max-width: 768px) 100vw, 1px"
          priority
        />
      </motion.div>

      {/* Stats Cards Grid (White Cards Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md border border-[#E5E5E2] rounded-3xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 text-center lg:text-left space-y-2.5 shadow-md group"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#FBE87E] flex items-center justify-center mx-auto lg:mx-0 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                  <Image src={stat.iconSrc} alt={stat.iconAlt} width={28} height={28} className="w-7 h-7 object-contain" />
                </div>

                <div className="text-xl sm:text-2xl font-headline font-extrabold text-[#1A1A1A] tracking-tight pt-1 leading-snug">
                  {typeof stat.value === "string" && stat.value.includes("\n") ? (
                    stat.value.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))
                  ) : (
                    stat.value
                  )}
                </div>

                <div className="text-xs font-label font-black text-[#1A1A1A] uppercase tracking-wider">
                  {stat.label}
                </div>

                <div className="text-[11.5px] font-body text-[#555555]">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
