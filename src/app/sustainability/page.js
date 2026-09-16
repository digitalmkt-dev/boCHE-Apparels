"use client";

import { useState } from "react";
import Image from "next/image";
import SustainabilitySection from "@/components/SustainabilitySection";
import QuoteModal from "@/components/QuoteModal";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { ShieldCheck, Award, Heart, Sun } from "lucide-react";

export default function SustainabilityPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    if (typeof window !== "undefined") {
      window.open("/documents/COMPANY PROFILE.pdf", "_blank");
    }
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen pb-16">
      {/* Title Banner matching Texora Image 1 */}
      <PageHeaderBanner
        title="CSR & Sustainability"
        subtitle="Protecting our planet and advancing worker welfare through clean energy, closed-loop water treatment, and zero-waste garment production."
        breadcrumb="CSR"
        bgImage="/images/fabric-sourcing.png"
      />

      <div className="pt-8">
        {/* Sustainability Pillars Component */}
        <SustainabilitySection />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Labor Standards & Ethics */}
        <div className="bg-white border border-[#E5E5E2] rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FBE87E] text-[#1A1A1A] text-xs font-label font-bold border border-[#E0D069]">
              <ShieldCheck className="w-4 h-4 text-[#1A1A1A]" />
              <span>WRAP GOLD & SEDEX SMETA COMPLIANCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-extrabold text-[#1A1A1A]">
              Ethical Labor & Fair Wages Policy
            </h2>

            <p className="text-[#555555] font-body text-sm leading-relaxed">
              We guarantee a safe, comfortable, and empowering workplace for all 450+ artisans. Our factory floor features centralized climate control, ergonomic workstation design, free healthcare, and strict adherence to fair living wages without forced or child labor.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-body text-[#1A1A1A] pt-2">
              <li className="bg-[#F9F9F9] p-3 rounded-2xl border border-[#E5E5E2] flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span>On-site Medical Care & Health Insurance</span>
              </li>
              <li className="bg-[#F9F9F9] p-3 rounded-2xl border border-[#E5E5E2] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span>Equal Opportunity & Zero Discrimination</span>
              </li>
              <li className="bg-[#F9F9F9] p-3 rounded-2xl border border-[#E5E5E2] flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span>Filtered Air Ventilation & Ergonomic Seating</span>
              </li>
              <li className="bg-[#F9F9F9] p-3 rounded-2xl border border-[#E5E5E2] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span>Skill Training & Apprenticeship Programs</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#E5E5E2] p-2 bg-[#F9F9F9]">
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <Image
                src="/images/activewear.png"
                alt="Ethical Apparel Production"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
