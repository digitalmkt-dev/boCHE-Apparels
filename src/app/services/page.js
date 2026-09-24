"use client";

import ProgressiveImage from "@/components/ProgressiveImage";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/companyData";
import PageHeaderBanner from "@/components/PageHeaderBanner";

const facilityImages = {
  knitting: "/images/service-knitting.webp",
  "dyeing-fabric-processing": "/images/dying.webp",
  printing: "/images/printing .webp",
  embroidery: "/images/service-embroidery.webp",
  "sewing-production": "/images/sewing and production .webp",
  sampling: "/images/sampling.webp",
  merchandising: "/images/merchandising.webp",
  "quality-checking": "/images/quality control.webp",
  "quality-control": "/images/quality control.webp",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen pb-20">
      {/* Title Banner */}
      <PageHeaderBanner
        title="Facilities"
        breadcrumb="Facilities"
        bgImage="/images/facilties titile.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-12">
        {/* Responsive 3-Card Grid Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            const imgSrc = facilityImages[service.id] || "/images/service-knitting.webp";

            // Badge text matching mockup
            const badgeText = service.associatedNote
              ? service.associatedNote.toUpperCase()
              : service.isAssociated
              ? "ASSOCIATED MANUFACTURING UNIT"
              : "IN-HOUSE FACILITY";

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-[#E5E5E2] rounded-[24px] p-5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out h-full group cursor-pointer"
              >
                <div>
                  {/* Top Image Container */}
                  <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-[#EAEAEA] shadow-2xs mb-4 shrink-0">
                    <ProgressiveImage
                      src={imgSrc}
                      alt={service.title}
                      fill
                      priority={index < 3}
                      unoptimized
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>

                  {/* Top Yellow Pill Badge */}
                  <div className="mb-2.5">
                    <span className="inline-block bg-[#FBE87E] text-[#1A1A1A] font-headline font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs">
                      {badgeText}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h2 className="text-xl sm:text-2xl font-headline font-black text-[#1A1A1A] tracking-tight mb-2 leading-tight">
                    {service.title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm font-body text-[#555555] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
