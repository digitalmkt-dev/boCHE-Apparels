"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection({ onOpenQuoteModal }) {
  const heroSlides = [
    {
      image: "/images/hero-1.webp",
      mobileImage: "/images/hero-1-vert.webp",
      badge: "boCHE APPARELS",
      title: "Complete Apparel Manufacturing",
      highlight: "From Fiber to Fashion",
      desc: "boCHE Apparels provides integrated apparel manufacturing support across supply chain management",
      mobileDesc: "boCHE Apparels provides integrated apparel manufacturing support across supply chain management",
      buttonText: "EXPLORE ABOUT US",
      buttonLink: "/about",
    },
    {
      image: "/images/hero-2.webp",
      mobileImage: "/images/hero-2-vert.webp",
      badge: "APPAREL MANUFACTURING EXPERTISE",
      title: "Precision in Standards",
      highlight: "Consistency in Every Garment",
      desc: "boCHE Apparels combines modern machinery, experienced technicians and dedicated production teams to deliver reliable garment manufacturing for men’s, women’s and kids wear.",
      mobileDesc: "boCHE Apparels combines modern machinery, experienced technicians and dedicated production teams to deliver reliable garment manufacturing for men’s, women’s and kids wear.",
      buttonText: "EXPLORE FACILITIES",
      buttonLink: "/services",
    },
    {
      image: "/images/hero-3.webp",
      mobileImage: "/images/hero-3-vert.webp",
      badge: "MEN • WOMEN • KIDS WEAR",
      title: "Apparel for Every Generation",
      highlight: "Made to Buyer Specification",
      desc: "From everyday garment to fashion styles, we manufacture with atmost care with support for customized designs, new patterns and buyer-specific requirements.",
      mobileDesc: "From everyday garments to fashion styles, we manufacture with atmost care with support for customized designs, new patterns and buyer-specific requirements.",
      buttonText: "VIEW PRODUCTS",
      buttonLink: "/catalog",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="relative h-[100svh] min-h-[100svh] h-[100dvh] min-h-[100dvh] md:min-h-screen flex items-end md:items-center justify-start md:justify-center bg-[#1A1A1A] text-white overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-32 xl:pt-36 2xl:pt-44 pb-20 sm:pb-24">
      {/* Background Image Slideshow with Direct Image-to-Image Cross-Dissolve */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        const objectPositionClass =
          "object-center sm:object-[center_20%] lg:object-[center_15%]";

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Vertical Image for Mobile (when mobileImage is provided) */}
            {slide.mobileImage ? (
              <>
                <Image
                  src={slide.mobileImage}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 1px"
                  priority={index === 0}
                  className={`md:hidden object-cover object-center ${
                    isActive ? "animate-hero-zoom" : "scale-108"
                  }`}
                />
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 768px) 100vw, 1px"
                  priority={index === 0}
                  className={`hidden md:block object-cover ${objectPositionClass} ${
                    isActive ? "animate-hero-zoom" : "scale-108"
                  }`}
                />
              </>
            ) : (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                className={`object-cover ${objectPositionClass} ${
                  isActive ? "animate-hero-zoom" : "scale-108"
                }`}
              />
            )}
          </div>
        );
      })}

      {/* Dark Overlay Gradients: Subtle Soft Shading Confined ONLY to Text Overlay Area */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-black/65 via-black/25 to-transparent z-15 pointer-events-none" />
      <div className="md:hidden absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/75 via-black/35 to-transparent z-15 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div key={currentSlide} className="max-w-3xl space-y-3 sm:space-y-3.5 md:space-y-5">
          {/* Top Pill Badge */}
          <div className="animate-hero-slide-down inline-flex items-center gap-2 bg-[#FBE87E] text-[#1A1A1A] border-none rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-label font-black tracking-wider uppercase shadow-md">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1A1A1A] animate-pulse" />
            <span>{activeSlide.badge}</span>
          </div>

          {/* Main Giant Headline (Fluid scaling for laptops and large displays) */}
          <h1 className="animate-hero-slide-down-delay text-2.5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-headline font-black text-[#FFFFFF] tracking-tight leading-tight md:leading-[1.1] 2xl:leading-[1.08] [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
            {activeSlide.title}
            <br />
            <span className="text-[#FBE87E] [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">{activeSlide.highlight}</span>
          </h1>

          {/* Description - Desktop */}
          <p className="hidden md:block animate-hero-slide-down-delay-2 text-slate-100 font-body text-sm lg:text-base 2xl:text-lg leading-relaxed max-w-xl xl:max-w-2xl font-light [text-shadow:0_1.5px_6px_rgba(0,0,0,0.5)]">
            {activeSlide.desc}
          </p>

          {/* Description - Mobile Concise Version */}
          <p className="md:hidden animate-hero-slide-down-delay-2 text-slate-100 font-body text-xs sm:text-sm leading-relaxed max-w-xl font-light [text-shadow:0_1.5px_6px_rgba(0,0,0,0.5)]">
            {activeSlide.mobileDesc}
          </p>

          {/* Primary Action Button */}
          <div className="animate-hero-slide-up pt-2 sm:pt-3 md:pt-3 flex flex-wrap items-center gap-4 font-label">
            <Link
              href={activeSlide.buttonLink}
              className="btn-circle-hover font-black px-6 py-3 sm:px-8 sm:py-3.5 2xl:px-9 2xl:py-4 rounded-full text-xs tracking-wider border-none shadow-2xl flex items-center gap-2.5 active:scale-95 cursor-pointer no-underline text-[#1A1A1A]"
            >
              <span>{activeSlide.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FBE87E] text-white hover:text-[#1A1A1A] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="flex items-center gap-2.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer border-none ${idx === currentSlide
                ? "w-8 bg-[#FBE87E]"
                : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FBE87E] text-white hover:text-[#1A1A1A] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
