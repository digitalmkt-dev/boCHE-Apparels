"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import StatsCounter from "@/components/StatsCounter";
import RangeOfProducts from "@/components/RangeOfProducts";
import QualityPolicySection from "@/components/QualityPolicySection";
import ServicesShowcaseSection from "@/components/ServicesShowcaseSection";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteModal from "@/components/QuoteModal";
import { Phone } from "lucide-react";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const GENTLE_LANDING_EASE = [0.22, 1, 0.36, 1];

  const openQuoteModal = () => {
    if (typeof window !== "undefined") {
      window.open("/documents/COMPANY PROFILE.pdf", "_blank");
    }
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection onOpenQuoteModal={openQuoteModal} />

      {/* About Us Section (Immediately after Hero) */}
      <AboutUsSection onOpenQuoteModal={openQuoteModal} />

      {/* Stats Counter Bar */}
      <StatsCounter />

      {/* Range of Products (Garments for All Ages) */}
      <RangeOfProducts />

      {/* Quality Policy Section */}
      <QualityPolicySection />

      {/* Services Showcase Section (Integrated Apparel Manufacturing Capabilities) */}
      <ServicesShowcaseSection onOpenQuoteModal={openQuoteModal} />

      {/* Brand Collaborations Logos Carousel (International & Domestic) */}
      <ClientLogosCarousel />

      {/* Final Contact CTA Banner */}
      <section className="py-16 bg-[#FBE87E] text-[#1A1A1A] border-b border-[#E0D069]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-headline font-black tracking-tight text-[#1A1A1A] leading-tight">
            Ready to Bring Your Garment Designs to Life?
          </h2>
          <p className="text-[#1A1A1A]/80 font-body text-base max-w-3xl mx-auto font-medium leading-relaxed">
            Connect with the boCHE Apparels team to discuss your garment requirements, product development, sampling, customization, and manufacturing needs.
          </p>
          <div className="flex items-center justify-center pt-2 font-label">
            <a
              href="tel:+916235000902"
              className="bg-white/40 hover:bg-white text-[#1A1A1A] font-black border border-[#1A1A1A]/20 px-9 py-4 rounded-full text-xs tracking-wider shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>CALL US: +91 6235 000 902</span>
            </a>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
