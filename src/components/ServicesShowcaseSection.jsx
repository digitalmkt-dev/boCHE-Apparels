"use client";

import Link from "next/link";
import ProgressiveImage from "@/components/ProgressiveImage";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesShowcaseSection() {
  const GENTLE_LANDING_EASE = [0.22, 1, 0.36, 1];

  const servicesData = [
    {
      id: "merchandising",
      title: "Merchandising",
      image: "/images/merchandising.webp",
    },
    {
      id: "sampling",
      title: "Sampling",
      image: "/images/sampling.webp",
    },
    {
      id: "knitting",
      title: "Knitting",
      image: "/images/service-knitting.webp",
      tag: "Associated Unit",
    },
    {
      id: "dyeing-fabric-processing",
      title: "Fabric Processing",
      image: "/images/dying.webp",
      tag: "Associated Unit",
    },
    {
      id: "printing",
      title: "Printing",
      image: "/images/printing .webp",
      tag: "Associated Unit",
    },
    {
      id: "embroidery",
      title: "Embroidery",
      image: "/images/service-embroidery-facility.webp",
      tag: "Associated Unit",
    },
    {
      id: "sewing-production",
      title: "Production",
      image: "/images/sewing and production .webp",
    },
    {
      id: "quality-control",
      title: "Quality Control",
      image: "/images/service-quality-control.webp",
    },
  ];

  return (
    <section className="relative bg-[#F7F7F5] py-20 lg:py-24 border-b border-[#E5E5E2] text-[#171717]">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          {/* <motion.p
            initial={{ opacity: 0, y: -10, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: GENTLE_LANDING_EASE }}
            className="text-[10px] sm:text-xs font-label font-bold uppercase tracking-[0.35em] text-[#555]"
          >
            INTEGRATED APPAREL MANUFACTURING CAPABILITIES
          </motion.p> */}

          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: GENTLE_LANDING_EASE, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-headline font-black tracking-tight text-[#171717] leading-tight"
          >
            Our Manufacturing Services
          </motion.h2>
        </div>

        {/* 8 Visual Service Photo Cards (4x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {servicesData.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: GENTLE_LANDING_EASE,
                  delay: 0.08 + idx * 0.07,
                }}
              >
                {/* Non-clickable Image Frame with Service Title */}
                <div className="relative w-full aspect-[4/3.2] rounded-[24px] overflow-hidden bg-[#EAEAEA] shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-black/5">
                  <ProgressiveImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center" />

                  {/* Dark gradient overlay at bottom for title readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-85" />

                  {/* Associated Tag Badge Top Right */}
                  {service.tag && (
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-[#FBE36B] text-[#171717] font-label font-bold text-[9.5px] uppercase tracking-wider shadow-xs">
                      {service.tag}
                    </div>
                  )}

                  {/* Overlay Service Title inside Image Frame */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-lg sm:text-xl font-headline font-black text-white tracking-tight leading-snug drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single Centered Button taking user to Facilities & Services Page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: GENTLE_LANDING_EASE, delay: 0.35 }}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            title="Explore Our Facilities & Services"
            className="btn-circle-hover inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-transparent shadow-sm text-xs font-label font-bold tracking-widest text-[#171717] bg-[#FBE36B] cursor-pointer"
          >
            <span>EXPLORE OUR FACILITIES & SERVICES</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
