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



      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
