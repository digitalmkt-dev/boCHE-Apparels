"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import QuoteModal from "@/components/QuoteModal";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    if (typeof window !== "undefined") {
      window.open("/documents/COMPANY PROFILE.pdf", "_blank");
    }
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const posts = [
    {
      id: 1,
      title: "Understanding Sustainable Fiber Selection for 2026 Activewear",
      category: "Sustainability & Materials",
      date: "August 18, 2026",
      author: "Technical Merchandising Team",
      excerpt: "A deep dive into GOTS organic cotton blends, recycled polyester GSM metrics, and low-impact dyeing techniques that reduce carbon footprint.",
      image: "/images/fabric-sourcing.png",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "3D CAD Pattern Design & Rapid Prototype Execution",
      category: "Garment Engineering",
      date: "July 24, 2026",
      author: "CAD CAD Team",
      excerpt: "How 3D digital sampling reduces sample turnaround times from 3 weeks to 48 hours while eliminating fabric waste.",
      image: "/images/hero-factory.png",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Navigating Minimum Order Quantities (MOQ) for Fashion Startups",
      category: "Manufacturing Guide",
      date: "June 12, 2026",
      author: "Production Merchandiser",
      excerpt: "Key strategies for scaling trial batches starting at 300 Pcs into full-scale production without sacrificing quality control.",
      image: "/images/activewear.png",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen pb-16">
      <PageHeaderBanner
        title="Apparel Engineering Blog"
        subtitle="Technical guides, textile innovations, supply chain trends, and manufacturing insights from our engineering team in Tirupur."
        breadcrumb="Blog"
        bgImage="/images/hero-factory.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-12">

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[#E5E5E2] rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 shadow-sm flex flex-col justify-between group"
            >
              <div className="relative h-56 w-full bg-[#F3F3F1] overflow-hidden p-2">
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FBE87E] text-[#1A1A1A] text-[11px] font-label font-extrabold px-3 py-1 rounded-xl shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-xs font-body text-[#555555]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-headline font-bold text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs font-body text-[#555555] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5E2] flex items-center justify-between font-label">
                  <span className="text-xs text-[#1A1A1A] font-semibold flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    {post.author}
                  </span>

                  <button
                    onClick={openQuoteModal}
                    className="btn-circle-hover text-xs px-3.5 py-1.5 rounded-xl font-bold border-none cursor-pointer"
                  >
                    Read Article
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
