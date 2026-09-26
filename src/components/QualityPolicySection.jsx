"use client";

import { useRef } from "react";
import ProgressiveImage from "@/components/ProgressiveImage";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function QualityPolicySection() {
  const GENTLE_LANDING_EASE = [0.22, 1, 0.36, 1];
  const sectionRef = useRef(null);

  // Direct GPU-synced scroll parallax (works 100% smooth on vertical & mobile screens with zero jitter)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Direct GPU-synced scroll parallax with deep, dramatic motion amplitude
  const imageY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["25px", "-35px"]);

  const qualitySteps = [
    {
      id: "01",
      title: "Consistent Product Quality",
      desc: "We focus on maintaining consistent quality across garment production while ensuring products meet buyer specifications and requirements.",
    },
    {
      id: "02",
      title: "Dedicated Quality Control",
      desc: "Our production setup includes a dedicated quality control department supported by experienced technicians to maintain product standards throughout manufacturing chain.",
    },
    {
      id: "03",
      title: "Continuous Improvement",
      desc: "We continually review our quality objectives and update us with new trends and technolegies in fabric, trims and garment manufacturing capabilities.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FFFFFF] py-20 lg:py-28 border-b border-[#E5E5E2] text-[#171717] overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card Frame with Hardware-Accelerated Parallax Inner Image */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: GENTLE_LANDING_EASE }}
            className="lg:col-span-6 flex justify-center relative"
          >
            {/* Main Quality Inspection Image Frame */}
            <div className="relative w-full max-w-[530px] aspect-[4/4.2] sm:h-[540px] lg:h-[580px] rounded-[30px] sm:rounded-[36px] overflow-hidden bg-[#EAEAEA] shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-black/5">
              
              {/* Inner Parallax Image Box: GPU compositing layer (translateZ=0) for 100% butter-smooth vertical mobile scroll */}
              <motion.div
                style={{
                  y: imageY,
                  willChange: "transform",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
                className="relative w-full h-[140%] -top-[20%]"
              >
                <ProgressiveImage
                  src="/images/quality-inspection.webp"
                  alt="boCHE Apparels Garment Quality Inspection and Standards Policy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 530px"
                  className="object-cover object-center" />
              </motion.div>

              {/* Floating Quality Assurance Badge */}
              <motion.div
                style={{
                  y: badgeY,
                  willChange: "transform",
                }}
                className="absolute bottom-6 left-6 right-6 sm:right-auto z-20 bg-white/95 backdrop-blur-md border border-[#E5E5E2] rounded-2xl p-4 shadow-xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FBE36B] text-[#171717] flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-[#666]">
                    INSPECTION STANDARDS
                  </p>
                  <p className="text-xs sm:text-sm font-headline font-black text-[#171717] leading-snug">
                    Dedicated Quality Control
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Title, Intro & 3 Quality Steps */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Header Block */}
            <div className="space-y-2">
              

              <motion.h2
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: GENTLE_LANDING_EASE, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-headline font-black tracking-tight text-[#171717] leading-tight"
              >
                Quality Policy
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: GENTLE_LANDING_EASE }}
                className="text-[11px] sm:text-xs lg:text-sm font-label font-bold uppercase tracking-[0.25em] text-[#555555] mt-2.5 sm:mt-3 block"
              >
                QUALITY AT EVERY STAGE
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: GENTLE_LANDING_EASE, delay: 0.2 }}
                className="pt-1 text-xs sm:text-sm font-body text-[#555] leading-relaxed max-w-xl text-justify"
              >
                At boCHE Apparels, quality is an integral part of every stage of garment manufacturing. Our focus is on maintaining consistent product standards, meeting buyer specifications and supporting reliable, timely production.
              </motion.p>
            </div>

            {/* 3 Quality Steps List */}
            <div className="space-y-5 pt-2">
              {qualitySteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    ease: GENTLE_LANDING_EASE,
                    delay: 0.3 + idx * 0.15,
                  }}
                  className="flex items-start gap-5 sm:gap-6 pt-5 border-t border-[#E5E5E2]"
                >
                  {/* Step Number */}
                  <span className="text-4xl sm:text-[46px] font-headline font-black text-[#FBE36B] leading-none shrink-0 tracking-tight">
                    {step.id}
                  </span>

                  {/* Vertical Separator */}
                  <div className="w-[1.5px] h-11 bg-[#E5E5E2] shrink-0 mt-1" />

                  {/* Step Content */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-headline font-black text-[#171717] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-body text-[#666] leading-relaxed text-left">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>



          </div>

        </div>
      </div>
    </section>
  );
}
