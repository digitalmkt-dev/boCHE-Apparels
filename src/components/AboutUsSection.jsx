"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AboutUsSection({ onOpenQuoteModal }) {
  const headlineText = "Trusted Apparel Manufacturer in Tirupur, India";
  const words = headlineText.split(" ");

  const highlights = [
    "Men's, Women's & Kids Wear Manufacturing",
    "Buyer-Specific Garment Customization",
    "Modern Apparel Manufacturing Technology",
    "Experienced Production & Merchandising Team",
  ];

  const featureCards = [
    {
      iconSrc: "/icons/customized garment manufacturing.webp",
      iconAlt: "Customized Garment Manufacturing",
      title: "Customized Garment Manufacturing",
      desc: "Inovative new product development and deliverign coustomer specifications across mutiple garment categories. ",
    },
    {
      iconSrc: "/icons/integrated apparel production.webp",
      iconAlt: "Integrated Apparel Production",
      title: "Integrated Apparel Production",
      desc: "Manufacturing service across knitting, dyeing, printing, embroidery and production through boCHE Apparels.",
    },
  ];

  // Custom gentle landing ease curve: slow, velvety deceleration
  const GENTLE_LANDING_EASE = [0.22, 1, 0.36, 1];

  // Container variants for heading letters stagger
  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.1,
      },
    },
  };

  // Slow & smooth letter variants (slides gently left to right)
  const letterVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: GENTLE_LANDING_EASE,
      },
    },
  };

  // Points variant (slow slide up & soft landing one by one)
  const pointVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: GENTLE_LANDING_EASE,
        delay: 0.5 + i * 0.12,
      },
    }),
  };

  // Feature cards variant (slow slide up & soft landing one by one)
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: GENTLE_LANDING_EASE,
        delay: 1.0 + i * 0.16,
      },
    }),
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F9F9] text-[#1A1A1A] border-b border-[#E5E5E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* Left Column: Content & Features */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4 flex flex-col items-start text-left">

            {/* Secondary Heading */}
            {/* <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: GENTLE_LANDING_EASE }}
              className="text-[20px] sm:text-md font-label font-bold tracking-[0.1em] text-[#555] uppercase block"
            >
              ABOUT us
            </motion.p> */}

            {/* Headline with Slow Letter-by-Letter Left to Right Slide Animation */}
            <motion.h2
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-headline font-black text-[#1A1A1A] leading-[1.18] tracking-tight flex flex-wrap justify-start gap-x-2.5 gap-y-1 w-full lg:max-w-[520px] text-left"
            >
              {words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h2>

            {/* Mobile Image / Logo Card (Shown below heading on mobile < lg) */}
            <div className="block lg:hidden w-full py-4">
              <ImageCardLayout GENTLE_LANDING_EASE={GENTLE_LANDING_EASE} />
            </div>

            {/* Subtext Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: GENTLE_LANDING_EASE, delay: 0.35 }}
              className="text-sm sm:text-base font-body text-[#555555] leading-relaxed w-full lg:max-w-[500px] text-left"
            >
              {"boCHE Apparels is a garment manufacturing company in Tirupur, India, delivering reliable apparel manufacturing solution for men's wear, women's wear and kids wear. We combine skilled production, modern machinery, buyer-specific customization and a strong focus on consistent product quality and timely delivery."}
            </motion.p>

            {/* Checklist 2x2 Grid - Slow & Smooth Slide UP One by One */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 pt-1 font-label w-full lg:max-w-[500px] text-left">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={pointVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FBE87E] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 text-[#1A1A1A] stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div> */}

            {/* Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: GENTLE_LANDING_EASE, delay: 0.9 }}
              className="pt-2 origin-left w-full"
            >
              <div className="border-t border-[#E5E5E2] w-full lg:max-w-[500px]" />
            </motion.div>

            {/* 2 Feature Cards with Content-Matched Icons (Scissors & Factory) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1 font-label w-full lg:max-w-[500px] text-left">
              {featureCards.map((card, idx) => {
                return (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                      <Image src={card.iconSrc} alt={card.iconAlt} width={28} height={28} className="w-7 h-7 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-[12px] font-body text-[#555555] leading-snug mt-1">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button Row (Centered on stacked views < lg, Left-aligned on desktop >= lg) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: GENTLE_LANDING_EASE, delay: 1.3 }}
              className="pt-6 flex items-center justify-center lg:justify-start w-full font-label"
            >
              <Link
                href="/about"
                className="btn-circle-hover px-8 py-3.5 rounded-full text-xs font-black tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>EXPLORE MORE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Overlapping Images Layout (Desktop only >= lg) */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-end pt-8 lg:pt-0 w-full">
            <ImageCardLayout GENTLE_LANDING_EASE={GENTLE_LANDING_EASE} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Image/Logo Card Component
function ImageCardLayout({ GENTLE_LANDING_EASE }) {
  return (
    <div className="relative flex items-end justify-center lg:justify-end mx-auto lg:mx-0 px-2 sm:px-6 lg:px-0 lg:pr-8 xl:pr-12">
      {/* Overlapping Left Image (Artisan/Worker) */}
      <motion.div
        initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, ease: GENTLE_LANDING_EASE, delay: 0.65 }}
        className="relative z-10 w-36 sm:w-48 md:w-52 lg:w-[190px] xl:w-[230px] h-[240px] sm:h-[300px] md:h-[320px] lg:h-[290px] xl:h-[340px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl border-4 border-white shrink-0 -mr-8 sm:-mr-10 lg:-mr-10 xl:-mr-12 mb-4 sm:mb-6"
      >
        <Image
          src="/images/about-artisan.webp"
          alt="Precision Artisan Garment Quality Control"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 144px, (max-width: 1280px) 190px, 230px"
        />
      </motion.div>

      {/* Main Tall Right Image (Inspectors & Fabric) */}
      <motion.div
        initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, ease: GENTLE_LANDING_EASE, delay: 0.2 }}
        className="relative z-0 w-48 sm:w-68 md:w-72 lg:w-[270px] xl:w-[320px] h-[330px] sm:h-[420px] md:h-[440px] lg:h-[420px] xl:h-[490px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white shrink-0"
      >
        <Image
          src="/images/about-inspectors.webp"
          alt="Texora Apparel Quality Inspection"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 192px, (max-width: 1280px) 270px, 320px"
        />
      </motion.div>

      {/* Vertical Side Label */}
      <div className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 hidden sm:block">
        <p className="text-[11px] font-headline font-black tracking-[0.25em] text-[#1A1A1A]/40 transform rotate-90 origin-center whitespace-nowrap">
          <span className="lowercase">bo</span>CHE APPARELS
        </p>
      </div>
    </div>
  );
}

