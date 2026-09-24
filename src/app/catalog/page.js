"use client";

import { useState } from "react";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteModal from "@/components/QuoteModal";
import PageHeaderBanner from "@/components/PageHeaderBanner";

export default function CatalogPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    if (typeof window !== "undefined") {
      window.open("/documents/COMPANY PROFILE.pdf", "_blank");
    }
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen">
      {/* Header Banner */}
      <PageHeaderBanner
        title="Products"
        breadcrumb="Products"
        bgImage="/images/product_titile.webp"
      />

      <ProductCatalog onOpenQuoteModal={openQuoteModal} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
