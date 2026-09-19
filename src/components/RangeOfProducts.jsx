"use client";

import ProgressiveImage from "@/components/ProgressiveImage";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "01",
    name: "Men's Wear",
    image: "/images/range-mens.webp",
    alt: "boCHE Apparels Men's Wear Garment Manufacturing Range",
    link: "/catalog?category=mens",
    objectPosition: "center center",
  },
  {
    id: "02",
    name: "Women's Wear",
    image: "/images/range-womens.webp",
    alt: "boCHE Apparels Women's Wear Garment Manufacturing Range",
    link: "/catalog?category=womens",
    objectPosition: "center center",
  },
  {
    id: "03",
    name: "Kids Wear",
    image: "/images/range-kids.webp",
    alt: "boCHE Apparels Kids Wear Garment Manufacturing Range",
    link: "/catalog?category=kids",
    objectPosition: "center center",
  },
];

// Custom gentle landing ease curve matching AboutUsSection: slow, velvety deceleration
const GENTLE_LANDING_EASE = [0.22, 1, 0.36, 1];

export default function RangeOfProducts() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-20 lg:py-24 border-b border-[#E5E5E2]">
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* ================= HEADER ================= */}

        <div className="relative mb-16 lg:mb-20">
          <div className="mx-auto text-center">
            {/* Eyebrow Badge */}
            

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_LANDING_EASE, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-headline font-black tracking-tight text-[#171717] leading-tight"
            >
              Range of Products
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: GENTLE_LANDING_EASE }}
              className="text-[11px] sm:text-xs lg:text-sm font-label font-bold uppercase tracking-[0.25em] text-[#555555] mt-2.5 sm:mt-3 block"
            >
              GARMENTS FOR ALL AGES
            </motion.p>
          </div>


        </div>

        {/* =====================================================
            EXACT DESKTOP EDITORIAL COMPOSITION
        ===================================================== */}

        {/* =====================================================
            RESPONSIVE DESKTOP EDITORIAL COMPOSITION (Laptops & Large Displays)
        ===================================================== */}

        <div className="relative mx-auto hidden h-[560px] xl:h-[600px] 2xl:h-[660px] max-w-[1020px] xl:max-w-[1140px] 2xl:max-w-[1260px] xl:block">
          {/* ================= MEN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: GENTLE_LANDING_EASE, delay: 0.15 }}
            className="absolute left-0 top-[50px] xl:top-[60px] 2xl:top-[70px] z-10 h-[470px] xl:h-[510px] 2xl:h-[560px] w-[300px] xl:w-[335px] 2xl:w-[370px]"
          >
            {/* circle — overhangs the top-left corner of the image */}
            <div className="pointer-events-none absolute -left-[8%] 2xl:-left-[12%] -top-[8%] z-0 h-[32%] w-[46%] rounded-full bg-[#FBE36B]/70" />

            {/* MEN text */}
            <span
              className="pointer-events-none absolute right-full top-1/2 z-0 mr-1.5 xl:mr-2 2xl:mr-3 -translate-y-1/2 whitespace-nowrap text-[48px] xl:text-[62px] 2xl:text-[88px] font-black leading-none tracking-[0.04em] text-[#171717]/[0.08]"
              style={{ writingMode: "vertical-rl" }}
            >
              MEN
            </span>

            <ProductCard category={categories[0]} />
          </motion.div>

          {/* ================= WOMEN ================= */}

          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: GENTLE_LANDING_EASE, delay: 0.3 }}
            className="absolute left-1/2 top-0 z-20 h-[520px] xl:h-[565px] 2xl:h-[620px] w-[330px] xl:w-[370px] 2xl:w-[410px] -translate-x-1/2"
          >
            {/* WOMEN text */}
            <span className="pointer-events-none absolute left-1/2 top-full z-0 mt-2 2xl:mt-3 -translate-x-1/2 whitespace-nowrap text-[48px] xl:text-[62px] 2xl:text-[88px] font-black leading-none tracking-[0.02em] text-[#171717]/[0.08]">
              WOMEN
            </span>

            <ProductCard category={categories[1]} />
          </motion.div>

          {/* ================= KIDS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: GENTLE_LANDING_EASE, delay: 0.45 }}
            className="absolute right-0 top-[70px] xl:top-[80px] 2xl:top-[90px] z-10 h-[450px] xl:h-[490px] 2xl:h-[540px] w-[300px] xl:w-[335px] 2xl:w-[370px]"
          >
            {/* circle — overhangs the bottom-right corner of the image */}
            <div className="pointer-events-none absolute -right-[8%] 2xl:-right-[12%] -bottom-[8%] z-0 h-[32%] w-[46%] rounded-full bg-[#FBE36B]/70" />

            {/* KIDS text */}
            <span
              className="pointer-events-none absolute left-full top-1/2 z-0 ml-1.5 xl:ml-2 2xl:ml-3 -translate-y-1/2 whitespace-nowrap text-[48px] xl:text-[62px] 2xl:text-[88px] font-black leading-none tracking-[0.04em] text-[#171717]/[0.08]"
              style={{ writingMode: "vertical-rl" }}
            >
              KIDS
            </span>

            <ProductCard category={categories[2]} />
          </motion.div>
        </div>

        {/* =====================================================
            TABLET
        ===================================================== */}

        <div className="hidden grid-cols-3 gap-4 lg:grid xl:hidden">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: GENTLE_LANDING_EASE, delay: 0.2 + idx * 0.15 }}
              className="h-[480px]"
            >
              <ProductCard category={category} />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: GENTLE_LANDING_EASE, delay: 0.15 }}
          className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-5 lg:hidden scrollbar-hide"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="h-[480px] w-[84vw] max-w-[350px] shrink-0"
            >
              <ProductCard category={category} />
            </div>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: GENTLE_LANDING_EASE, delay: 0.4 }}
          className="relative mt-12 pt-6 lg:mt-20 lg:pt-8 lg:border-t lg:border-[#DEDEDB] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        >
          {/* Left */}
          <div className="hidden items-center gap-4 lg:flex">
            <span className="h-px w-7 bg-black/30" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#777] font-label">
              FABRIC • FASHION • MANUFACTURING
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Link
              href="/products"
              className="btn-circle-hover font-black px-8 py-3.5 sm:px-9 sm:py-4 rounded-full text-xs font-label uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-md cursor-pointer border-none"
            >
              <span>VIEW OUR PRODUCT RANGES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>


        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   PRODUCT CARD (CLEAN EDITORIAL CARD WITH STANDARD HOVER SCALE)
============================================================= */

function ProductCard({ category }) {
  return (
    <Link
      href={category.link}
      className="group relative block h-full w-full overflow-hidden rounded-[28px] bg-[#ddd] shadow-[0_16px_38px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_24px_50px_rgba(0,0,0,0.16)]"
    >
      {/* IMAGE */}

      <ProgressiveImage
        src={category.image}
        alt={category.alt}
        fill
        sizes="(max-width: 768px) 84vw, (max-width: 1280px) 33vw, 410px"
        className="object-cover transition-transform duration-[750ms] ease-out group-hover:scale-[1.045]"
        style={{
          objectPosition: category.objectPosition,
        }} />

      {/* GRADIENT */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.58) 16%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0) 58%)",
        }}
      />

      {/* CONTENT */}

      <div className="absolute bottom-0 left-0 right-0 z-20 p-[27px]">
        <div className="pr-[65px]">
          {/* Title */}

          <h3 className="text-[29px] font-black leading-none tracking-[-0.035em] text-white font-headline">
            {category.name}
          </h3>

          {/* Explore */}

          <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.24em] text-white/85 font-label">
            EXPLORE COLLECTION
          </p>
        </div>

        {/* Arrow */}

        <div className="absolute bottom-[25px] right-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#FBE36B] text-[#171717] transition-all duration-500 group-hover:bg-white shadow-md">
          <ArrowRight className="h-5 w-5 stroke-[2.4] transition-transform duration-500 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}