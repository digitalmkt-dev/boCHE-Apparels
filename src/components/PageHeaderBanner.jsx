"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getBlurDataURL } from "@/utils/blurUtils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeaderBanner({ title, subtitle, breadcrumb, bgImage = "/images/hero-factory.webp" }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#1A1A1A] text-white overflow-hidden pt-36 sm:pt-40 pb-16 sm:pb-20 border-b border-[#2A2A2A]">
      {/* Background Image with Slow Parallax Scroll Effect */}
      <div
        className="absolute inset-0 w-full h-[135%] -top-[15%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.05)`,
        }}
      >
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center opacity-70"
         placeholder="blur" blurDataURL={getBlurDataURL(bgImage)} />
      </div>

      {/* Secondary Color Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-[#1A1A1A]/60 z-1 pointer-events-none" />

      {/* Foreground Text Content (Scrolls Faster) */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * -0.08}px, 0)`,
        }}
      >
        {/* Main Banner Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight">
          {title}
        </h1>

        {/* Subtitle / Description if provided */}
        {subtitle && (
          <p className="text-slate-300 font-body text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-label font-bold text-slate-300">
          <Link href="/" className="hover:text-[#FBE87E] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-[#FBE87E]" />
          <span className="text-[#FBE87E]">{breadcrumb || title}</span>
        </div>
      </div>
    </div>
  );
}
