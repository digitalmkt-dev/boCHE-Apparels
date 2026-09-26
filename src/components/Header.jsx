"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const knownBannerPages = ["/about", "/catalog", "/services", "/contact", "/sustainability", "/blog", "/products"];
  const isBannerPage = knownBannerPages.includes(pathname);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "PRODUCTS", href: "/catalog" },
    { name: "FACILITIES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="z-50 font-label">
      {/* =========================================================================
          MODE A: HOME PAGE HEADER (Floating Pill -> Scrolled Sticky Header)
         ========================================================================= */}
      {isHomePage ? (
        <>
          {/* 1. FLOATING PILL HEADER (Top of Home Page) */}
          <div
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-8 transition-all duration-300 ease-in-out ${
              isScrolled
                ? "-translate-y-full opacity-0 pointer-events-none"
                : "translate-y-0 opacity-100 pointer-events-auto"
            }`}
          >
            <div className="w-full max-w-7xl rounded-full bg-white/95 backdrop-blur-md border border-[#E5E5E2] shadow-2xl py-2.5 sm:py-5 px-4 sm:px-10 mt-2.5 sm:mt-5 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" title="boCHE Apparels Home" className="flex items-center gap-3 group">
                <Image
                  src="/logo/bocheapprels.webp"
                  alt="boCHE Apparels Logo"
                  title="boCHE Apparels Logo"
                  width={220}
                  height={60}
                  unoptimized
                  className="h-9 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  priority />
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-7 sm:gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      title={link.name}
                      className={`text-sm font-black tracking-wider transition-colors relative py-1.5 group ${
                        isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#FBE87E] rounded-full origin-left transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 opacity-80"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-4">
                <a
                  href="/documents/COMPANY PROFILE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download E-Brochure PDF"
                  className="hidden sm:inline-flex items-center gap-2.5 btn-circle-hover font-black px-7 py-3.5 rounded-full text-xs tracking-wider border-none active:scale-95 cursor-pointer no-underline text-[#1A1A1A]"
                >
                  <span>E-BROCHURE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#EAEAEA] rounded-full transition-colors border-none cursor-pointer"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. FULL-WIDTH STICKY HEADER (Scrolled State on Home Page) */}
          <div
            className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E5E2] shadow-md transition-all duration-500 ease-in-out ${
              isScrolled
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2.5 sm:py-4 flex items-center justify-between">
              <Link href="/" title="boCHE Apparels Home" className="flex items-center gap-3 group">
                <Image
                  src="/logo/bocheapprels.webp"
                  alt="boCHE Apparels Logo"
                  title="boCHE Apparels Logo"
                  width={200}
                  height={54}
                  unoptimized
                  className="h-9 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  priority />
              </Link>

              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      title={link.name}
                      className={`text-sm font-black tracking-wider transition-colors relative py-1.5 group ${
                        isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#FBE87E] rounded-full origin-left transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 opacity-80"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4">
                <a
                  href="/documents/COMPANY PROFILE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download E-Brochure PDF"
                  className="hidden sm:inline-flex items-center gap-2.5 btn-circle-hover font-black px-7 py-3 rounded-full text-xs tracking-wider border-none active:scale-95 cursor-pointer no-underline text-[#1A1A1A]"
                >
                  <span>E-BROCHURE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#EAEAEA] rounded-full transition-colors border-none cursor-pointer"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* =========================================================================
           MODE B: ALL OTHER INNER PAGES (Title Banner Integrated Header -> Solid Secondary Color Header)
           Matches Image 1 (Title Banner integrated) & Image 2 (Solid #1A1A1A secondary background when scrolling)
           ========================================================================= */
        <div
          className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ease-in-out ${
            isScrolled || !isBannerPage
              ? "bg-[#1A1A1A] text-white border-b border-[#2A2A2A] shadow-xl py-2.5 sm:py-4"
              : "bg-transparent text-white border-b border-white/10 py-3 sm:py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" title="boCHE Apparels Home" className="flex items-center gap-3 group">
              <Image
                src="/logo/bocheapprels2.webp"
                alt="boCHE Apparels Logo"
                title="boCHE Apparels Logo"
                width={200}
                height={54}
                unoptimized
                className="h-9 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority />
            </Link>

            {/* Desktop Nav Links in White Text */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    title={link.name}
                    className={`text-sm font-black tracking-wider transition-colors relative py-1.5 group ${
                      isActive ? "text-[#FBE87E]" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {/* Left-to-Right Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#FBE87E] rounded-full origin-left transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 opacity-90"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="flex items-center gap-4">
              <a
                href="/documents/COMPANY PROFILE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download E-Brochure PDF"
                className="hidden sm:inline-flex items-center gap-2.5 btn-circle-hover-light font-black px-7 py-3 rounded-full text-xs tracking-wider border-none active:scale-95 cursor-pointer no-underline text-white"
              >
                <span>E-BROCHURE</span>
                <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors border-none cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          FULL-LENGTH RIGHT SLIDE-OVER NAVIGATION DRAWER (Mobile / Small Devices)
         ========================================================================= */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm sm:max-w-md bg-white shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[#E5E5E2] flex items-center justify-between bg-[#F9F9F9]">
          <Link href="/" title="boCHE Apparels Home" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
            <Image
              src={isHomePage ? "/logo/bocheapprels.webp" : "/logo/bocheapprels2.webp"}
              alt="boCHE Apparels Logo"
              title="boCHE Apparels Logo"
              width={180}
              height={50}
              unoptimized
              className="h-13 sm:h-11 w-auto object-contain" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#FBE87E] border border-[#E5E5E2] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <div className="text-[11px] font-bold text-[#555555] uppercase tracking-widest px-2">
            Navigation Menu
          </div>

          <nav className="flex flex-col space-y-2 font-label">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  title={link.name}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-black tracking-wider transition-all ${
                    isActive
                      ? "bg-[#FBE87E] text-[#1A1A1A] shadow-sm"
                      : "text-[#1A1A1A] hover:bg-[#F3F3F1]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Footer Actions */}
        <div className="p-6 border-t border-[#E5E5E2] bg-[#F9F9F9] space-y-4">
          <a
            href="/documents/COMPANY PROFILE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download E-Brochure PDF"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full btn-circle-hover font-black px-6 py-4 rounded-full text-xs tracking-wider border-none flex items-center justify-center gap-2.5 shadow-lg cursor-pointer no-underline text-[#1A1A1A]"
          >
            <span>E-BROCHURE</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="pt-2 text-xs font-body text-[#555555] space-y-1.5 px-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>{COMPANY_INFO.contact.salesEmail}</span>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
