"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import StatsCounter from "@/components/StatsCounter";
import RangeOfProducts from "@/components/RangeOfProducts";
import QualityPolicySection from "@/components/QualityPolicySection";
import ServicesShowcaseSection from "@/components/ServicesShowcaseSection";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import QuoteModal from "@/components/QuoteModal";

export default function HomePageClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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

      {/* About Us Section */}
      <AboutUsSection onOpenQuoteModal={openQuoteModal} />

      {/* Stats Counter Bar */}
      <StatsCounter />

      {/* Range of Products */}
      <RangeOfProducts />

      {/* Quality Policy Section */}
      <QualityPolicySection />

      {/* Services Showcase Section */}
      <ServicesShowcaseSection onOpenQuoteModal={openQuoteModal} />

      {/* Brand Collaborations Logos Carousel */}
      <ClientLogosCarousel />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
