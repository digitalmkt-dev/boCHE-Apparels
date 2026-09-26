"use client";

import Link from "next/link";
import ProgressiveImage from "@/components/ProgressiveImage";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/companyData";

const iconMap = {
  knitting: "/icons/kniting.webp",
  "dyeing-fabric-processing": "/icons/dyeing.webp",
  printing: "/icons/printing.webp",
  embroidery: "/icons/embroidery.webp",
  "sewing-production": "/icons/sewing.webp",
  sampling: "/icons/sampling.webp",
  merchandising: "/icons/merchandising.webp",
  "quality-control": "/icons/qualityh control.webp",
};

export default function CapabilitiesGrid({ onOpenQuoteModal }) {
  return (
    <section className="py-20 bg-[#F3F3F1] text-[#1A1A1A] relative border-b border-[#E5E5E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FBE87E] border border-[#E0D069] text-[#1A1A1A] text-xs font-label font-bold">
            <span>INTEGRATED APPAREL MANUFACTURING CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-headline font-black tracking-tight text-[#171717] leading-tight">
            Complete apparel manufacturing services
          </h2>
          <p className="text-[#555555] font-body text-base leading-relaxed text-justify">
            boCHE Apparels provides complete garment manufacturing support across Merchandising, Sampling, Knitting, Fabric Processing, Printing, Embroidery, Production, and Quality Control for Men's, Women's, and Kids Wear.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const iconSrc = iconMap[service.id];
            return (
              <div
                key={service.id}
                className="bg-[#FFFFFF] border border-[#E5E5E2] rounded-3xl p-7 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FBE87E] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors duration-300 shadow-sm overflow-hidden">
                      {iconSrc ? (
                        <ProgressiveImage src={iconSrc} alt={service.title} width={32} height={32} className="w-8 h-8 object-contain" />
                      ) : (
                        <span className="text-[#1A1A1A] group-hover:text-[#FBE87E] text-xs font-bold">{service.title[0]}</span>
                      )}
                    </div>
                    {service.isAssociated && (
                      <span className="px-2.5 py-1 rounded-full bg-[#F7F7F5] border border-[#E5E5E2] text-[10px] font-label font-bold text-[#666]">
                        {service.associatedNote}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-headline font-bold text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#555555] font-body text-xs sm:text-sm leading-relaxed text-left">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-[#E5E5E2]">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-body text-[#1A1A1A]">
                        <CheckCircle2 className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E5E2] flex items-center justify-between font-label">
                  <Link
                    href={`/services#${service.id}`}
                    title={`View ${service.title} Technical Specifications`}
                    className="text-xs font-extrabold text-[#1A1A1A] hover:text-[#555555] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Technical Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="/documents/COMPANY PROFILE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download E-Brochure PDF"
                    className="btn-circle-hover text-[11px] px-4 py-2 rounded-xl font-bold border border-transparent shadow-sm cursor-pointer no-underline text-[#1A1A1A]"
                  >
                    E-Brochure
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
