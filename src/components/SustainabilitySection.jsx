import ProgressiveImage from "@/components/ProgressiveImage";

import Link from "next/link";
import { SUSTAINABILITY_PILLARS } from "@/data/companyData";
import { Leaf, ArrowRight } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="py-20 bg-[#F3F3F1] text-[#1A1A1A] border-b border-[#E5E5E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-[#E5E5E2] shadow-xl p-2 bg-[#FFFFFF]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <ProgressiveImage
                  src="/images/fabric-sourcing.webp"
                  alt="boCHE Apparels Eco Friendly Fabrics"
                  fill
                  className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E5E2] rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 font-label">
                    <div className="w-10 h-10 rounded-xl bg-[#FBE87E] text-[#1A1A1A] flex items-center justify-center shrink-0 shadow-sm">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A1A1A]">GOTS & OEKO-TEX Certified</h4>
                      <p className="text-xs font-body text-[#555555]">100% Organic Cotton & Zero Non-Toxic Dyes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FBE87E] border border-[#E0D069] text-[#1A1A1A] text-xs font-label font-bold">
              <Leaf className="w-3.5 h-3.5" />
              <span>SUSTAINABLE APPAREL ENGINEERING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-headline font-black tracking-tight text-[#171717] leading-tight">
              Ethical garment production & environmental stewardship
            </h2>

            <p className="text-[#555555] font-body text-sm sm:text-base leading-relaxed text-justify">
              At boCHE Apparels, sustainability is not an afterthought—it is baked into our manufacturing DNA. From organic yarn sourcing to 95% water recycling, we empower global brands to build eco-conscious fashion lines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
                <div key={idx} className="bg-[#FFFFFF] border border-[#E5E5E2] rounded-2xl p-5 space-y-2 shadow-sm">
                  <div className="flex justify-between items-center font-label">
                    <span className="text-xs font-bold text-[#1A1A1A] bg-[#FBE87E] px-2.5 py-0.5 rounded-lg">
                      {pillar.badge}
                    </span>
                    <span className="text-lg font-headline font-black text-[#1A1A1A]">{pillar.stat}</span>
                  </div>
                  <h3 className="text-sm font-headline font-bold text-[#1A1A1A]">{pillar.title}</h3>
                  <p className="text-xs font-body text-[#555555] leading-normal text-left">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 font-label">
              <Link
                href="/sustainability"
                title="Read Full ESG & Sustainability Policy"
                className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#555555] font-extrabold text-sm"
              >
                <span>Read Full ESG & Sustainability Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
