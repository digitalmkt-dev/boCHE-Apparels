"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import QuoteModal from "@/components/QuoteModal";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { Globe, Building2, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

// ============================================================================
// USER-ADDED BRAND LOGO DATASETS
// ============================================================================

export const INTERNATIONAL_CLIENTS = [
  {
    id: "brunotti",
    name: "Brunotti",
    logo: "/logo/int-client/brunottii.webp",
  },
  {
    id: "flying-machine",
    name: "Flying Machine",
    logo: "/logo/int-client/fly%20machine.webp",
  },
  {
    id: "attires",
    name: "Attires",
    logo: "/logo/int-client/attires.webp",
  },
  {
    id: "lpp",
    name: "LPP S.A.",
    logo: "/logo/int-client/llp.webp",
  },
  {
    id: "just-brands",
    name: "Just Brands",
    logo: "/logo/int-client/just%20brands.webp",
  },
  {
    id: "cotton-division",
    name: "Cotton Division",
    logo: "/logo/int-client/cotton%20division.webp",
  },
  {
    id: "micross",
    name: "Micross",
    logo: "/logo/int-client/micross.webp",
  },
  {
    id: "marbel",
    name: "Marbel",
    logo: "/logo/int-client/marbel.webp",
  },
  {
    id: "k-apparels",
    name: "K Apparels",
    logo: "/logo/int-client/k.webp",
  },
];

export const DOMESTIC_CLIENTS = [
  {
    id: "pantaloons",
    name: "Pantaloons",
    logo: "/logo/dom-client/pantaloons.webp",
  },
  {
    id: "gini-jony",
    name: "Gini & Jony",
    logo: "/logo/dom-client/gini%20%26%20jony.webp",
  },
  {
    id: "flf",
    name: "Future Lifestyle Fashions",
    logo: "/logo/dom-client/FlF.webp",
  },
  {
    id: "boche-appliances",
    name: "boCHE Appliances",
    logo: "/logo/dom-client/boche%20aa.webp",
  },
  {
    id: "boche-club",
    name: "boCHE Club Oxygen",
    logo: "/logo/dom-client/club.webp",
  },
  {
    id: "indel-money",
    name: "Indel Money",
    logo: "/logo/dom-client/indial%20mony.webp",
  },
  {
    id: "phygicart",
    name: "Phygicart",
    logo: "/logo/dom-client/phygcart.webp",
  },
  {
    id: "boche-shakesbierre",
    name: "boCHE ShakesBierre",
    logo: "/logo/dom-client/shakesbierre.webp",
  },
];

export default function ClientsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const openQuoteModal = (brand = null) => {
    setSelectedBrand(brand);
    if (typeof window !== "undefined") {
      window.open("/documents/COMPANY PROFILE.pdf", "_blank");
    }
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen pb-20 font-body">
      {/* Title Banner */}
      <PageHeaderBanner
        title="Our Clients"
        subtitle="Trusted by international apparel buyers, global brands, and premier domestic retail networks."
        breadcrumb="Clients"
        bgImage="/images/clients-titile.webp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-12">
        {/* GRID 1: INTERNATIONAL BRANDS */}
        <section className="space-y-8">
          <div className="border-b border-[#E5E5E2] pb-4">
            <div className="flex items-center gap-2 text-xs font-label font-bold text-[#555555] uppercase tracking-widest mb-1">
              <Globe className="w-4 h-4 text-[#1A1A1A]" />
              GLOBAL MARKETS
            </div>
            <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A]">
              International Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {INTERNATIONAL_CLIENTS.map((brand, idx) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                onClick={() => openQuoteModal(brand)}
                className="bg-white border border-[#E5E5E2] rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[140px] sm:min-h-[160px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-16 sm:max-h-20 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* GRID 2: DOMESTIC / LOCAL BRANDS */}
        <section className="space-y-8">
          <div className="border-b border-[#E5E5E2] pb-4">
            <div className="flex items-center gap-2 text-xs font-label font-bold text-[#555555] uppercase tracking-widest mb-1">
              <Building2 className="w-4 h-4 text-[#1A1A1A]" />
              INDIAN MARKET
            </div>
            <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A]">
              Domestic Brands
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {DOMESTIC_CLIENTS.map((brand, idx) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                onClick={() => openQuoteModal(brand)}
                className="bg-white border border-[#E5E5E2] rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[140px] sm:min-h-[160px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-16 sm:max-h-20 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <div className="bg-[#1A1A1A] text-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBE87E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-headline font-black text-[#FFFFFF]">
              Partner with boCHE Apparels for Your Next Apparel Line
            </h2>
            <p className="text-xs sm:text-sm text-[#CCCCCC]">
              Get end-to-end fabric sourcing, pattern drafting, sampling, and high-volume garment production delivered on time.
            </p>
          </div>

          <div className="pt-2 relative z-10 flex items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="btn-circle-hover-yellow-white font-label font-black px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-2.5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>CALL NOW: {COMPANY_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        preselectedBrand={selectedBrand}
      />
    </div>
  );
}
