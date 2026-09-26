"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, PhoneCall, MessageCircle, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close popup menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappNumber = "916235000902";
  const whatsappMessage = encodeURIComponent(
    "Hello boCHE Apparels! I would like to inquire about garment manufacturing for my brand."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneUrl = `tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none font-label"
    >
      {/* 1. Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto group relative w-12 h-12 rounded-full bg-[#1A1A1A] text-white border border-white/20 shadow-xl flex items-center justify-center hover:bg-[#FBE87E] hover:text-[#1A1A1A] hover:border-[#FBE87E] transition-all duration-300 cursor-pointer active:scale-95"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#1A1A1A] text-white text-[11px] font-bold tracking-wider uppercase shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-white/10">
              Scroll to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Popover Contact Options Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto w-64 bg-[#1A1A1A]/95 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-2xl space-y-2 mb-1"
          >
            <div className="px-2 py-1 flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] font-bold text-[#FBE87E] uppercase tracking-widest">
                Choose Contact Option
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer border-none bg-transparent p-1"
                aria-label="Close menu"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Option 1: Call Now */}
            <a
              href={phoneUrl}
              title="Call boCHE Apparels"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#FBE87E] text-white hover:text-[#1A1A1A] transition-all duration-200 group no-underline"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FBE87E] text-[#1A1A1A] flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A] group-hover:text-[#FBE87E] transition-colors">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black tracking-wider uppercase leading-none">
                  Call Now
                </span>
                <span className="text-[11px] font-body opacity-80 mt-1 leading-tight">
                  {COMPANY_INFO.contact.phone}
                </span>
              </div>
            </a>

            {/* Option 2: WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp with boCHE Apparels"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-[#25D366] text-white transition-all duration-200 group no-underline"
            >
              <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-4 h-4 fill-current text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black tracking-wider uppercase leading-none">
                  WhatsApp
                </span>
                <span className="text-[11px] font-body opacity-80 mt-1 leading-tight">
                  Instant Inquiry Chat
                </span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Floating Contact Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Contact options"
        className={`pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full border shadow-xl transition-all duration-300 cursor-pointer active:scale-95 ${
          isMenuOpen
            ? "bg-[#FBE87E] text-[#1A1A1A] border-[#1A1A1A]/30"
            : "bg-[#1A1A1A] text-white border-white/40 hover:border-[#FBE87E] hover:bg-[#222222]"
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
        </div>

        <span className="text-xs font-bold tracking-wider uppercase pr-1">
          Contact Us
        </span>
      </motion.button>
    </div>
  );
}
