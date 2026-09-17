"use client";

import { useState, useEffect, useRef } from "react";
import ProgressiveImage from "@/components/ProgressiveImage";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import QuoteModal from "@/components/QuoteModal";
import {
  CheckCircle2,
  Award,
  Globe,
  Heart,
  Building2,
  ArrowRight,
  ShieldCheck,
  Medal,
  Activity,
  PhoneCall,
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef(null);
  const qualityPolicyRef = useRef(null);
  const chairmanSectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress: qualityScrollProgress } = useScroll({
    target: qualityPolicyRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: chairmanScrollProgress } = useScroll({
    target: chairmanSectionRef,
    offset: ["start end", "end start"],
  });

  const shieldParallaxY = useTransform(qualityScrollProgress, [0, 1], ["-22%", "22%"]);
  const chairmanCardsY = useTransform(chairmanScrollProgress, [0, 1], ["-10%", "18%"]);

  const openQuoteModal = () => {
    if (typeof window !== "undefined") {
      window.open("/documents/COMPANY PROFILE.pdf", "_blank");
    }
  };
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Custom gentle landing ease curve matching Home Page: slow, velvety deceleration
  const GENTLE_EASE = [0.22, 1, 0.36, 1];

  const eyebrowVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: GENTLE_EASE },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: GENTLE_EASE },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: GENTLE_EASE, delay: custom * 0.1 },
    }),
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: GENTLE_EASE },
    },
  };

  const scaleStats = [
    {
      label: "FACTORY AREA",
      value: "15,000 Sq. Ft.",
      iconSrc: "/icons/factroy area.webp",
      iconAlt: "Factory Area",
      desc: "Modern apparel manufacturing facility",
    },
    {
      label: "PRODUCTION CAPACITY",
      value: "1,300,000+ Pcs / Month",
      iconSrc: "/icons/production capacity.webp",
      iconAlt: "Production Capacity",
      desc: "Includes Basic & Fashion Garments",
    },
    {
      label: "EXPERIENCE",
      value: "6 Years",
      iconSrc: "/icons/experience.webp",
      iconAlt: "Experience",
      desc: "Apparel manufacturing expertise",
    },
  ];

  const productCategories = [
    {
      category: "Men’s Wear",
      tag: "MEN'S COLLECTION",
      description: "Our men’s wear portfolio includes representative products built for durability, comfort, and style:",
      items: [
        "T-shirts",
        "Polo T-shirts",
        "Printed T-shirts",
        "Fashion T-shirts",
        "Long-sleeve T-shirts",
        "Hoodies",
        "Sports and performance-inspired styles",
      ],
    },
    {
      category: "Women’s Wear",
      tag: "WOMEN'S COLLECTION",
      description: "Our women’s wear portfolio includes representative styles crafted with precise fitting and premium fabric finish:",
      items: [
        "Dresses",
        "T-shirts",
        "Tops",
        "Sleeveless tops",
        "Skirts",
        "Leggings",
        "Jackets",
        "Fashion garments",
      ],
    },
    {
      category: "Kids Wear",
      tag: "KIDS & BABYWEAR",
      description: "Our kids wear portfolio includes comfortable, soft-touch garments tailored for safety and movement:",
      items: [
        "T-shirts",
        "Polo-style garments",
        "Co-ord sets",
        "Top-and-bottom sets",
        "Printed sets",
        "Sleeveless garments",
        "Long-sleeve tops",
        "Baby and toddler garments",
      ],
    },
  ];

  const manufacturingCapabilities = [
    {
      id: "knitting",
      title: "Knitting",
      subtitle: "Associated Knitting Unit",
      iconSrc: "/icons/kniting.webp",
      iconAlt: "Knitting",
      highlight: "10 imported machines • 3,000 kg / day capacity",
      description: "boCHE Apparels works with an associated knitting unit equipped with 10 imported knitting machines and an approximate knitting capacity of 3,000 kg per day.",
      points: [
        "Various qualities of jersey fabrics",
        "4-track design fabrics",
        "Lycra-related fabrics",
      ],
    },
    {
      id: "dyeing",
      title: "Dyeing & Fabric Processing",
      subtitle: "Advanced Fabric Treatment",
      iconSrc: "/icons/dyeing.webp",
      iconAlt: "Dyeing & Fabric Processing",
      highlight: "Hong Kong Imported Machinery",
      description: "Our associated fabric-processing capabilities are supported by high-spec processing systems ensuring color fastness and texture perfection:",
      points: [
        "Imported dyeing machines from Hong Kong",
        "Balloon squeezing equipment",
        "Air-relax drying systems",
      ],
    },
    {
      id: "printing",
      title: "Printing",
      subtitle: "Screen & Speciality Prints",
      iconSrc: "/icons/printing.webp",
      iconAlt: "Printing",
      highlight: "M&R Machinery from USA",
      description: "Printing support is available through an associated unit equipped with world-class automated machinery for high-density, pigment, and discharge prints:",
      points: [
        "Imported M&R machine from the USA",
        "High-definition multi-color prints",
        "Precision print alignment",
      ],
    },
    {
      id: "embroidery",
      title: "Embroidery",
      subtitle: "Precision Threadcraft",
      iconSrc: "/icons/embroidery.webp",
      iconAlt: "Embroidery",
      highlight: "4 Computerized Tajima Machines",
      description: "Embroidery support includes computerized embroidery machinery, design punching, and precision laser support:",
      points: [
        "4 computerized embroidery machines",
        "20-head machines",
        "TAJIMA machinery from Japan",
        "Embroidery design punching & laser support",
      ],
    },
    {
      id: "sewing",
      title: "Sewing & Production",
      subtitle: "Assembly & Craftsmanship",
      iconSrc: "/icons/sewing.webp",
      iconAlt: "Sewing & Production",
      highlight: "Siruba, Juki & Brother Machinery",
      description: "Our garment production setup uses industrial sewing machinery from established global leaders, operated by experienced technicians across all categories.",
      points: [
        "Automated stitching & seam finishing",
        "High-speed line efficiency",
        "Multi-category assembly expertise",
      ],
    },
    {
      id: "sampling",
      title: "Sampling",
      subtitle: "Product Development",
      iconSrc: "/icons/sampling.webp",
      iconAlt: "Sampling",
      highlight: "Rapid Prototyping & CAD Patterns",
      description: "A dedicated sampling department supports buyer specifications, customized garment requirements, and rapid turnaround for pre-production approval:",
      points: [
        "New pattern development",
        "Fabric & trim prototyping",
        "Buyer custom spec matching",
      ],
    },
    {
      id: "merchandising",
      title: "Merchandising",
      subtitle: "Seamless Execution",
      iconSrc: "/icons/merchandising.webp",
      iconAlt: "Merchandising",
      highlight: "Dedicated Account Managers",
      description: "Our merchandising team supports buyer requirements and meticulously coordinates different stages of garment production from yarn to shipment.",
      points: [
        "Clear buyer communication",
        "Production schedule tracking",
        "Supply chain synchronization",
      ],
    },
    {
      id: "qc",
      title: "Quality Control",
      subtitle: "Zero-Defect Commitment",
      iconSrc: "/icons/qualityh control.webp",
      iconAlt: "Quality Control",
      highlight: "Dedicated QC Technicians",
      description: "A dedicated quality-control department supports our focus on maintaining consistent garment standards throughout production.",
      points: [
        "100% inline & final audit",
        "Measurement & seam verification",
        "Strict adherence to buyer specs",
      ],
    },
  ];

  const qualityPolicies = [
    {
      number: "01",
      title: "Consistent Product Quality",
      desc: "We focus on maintaining consistency across garment production while ensuring products meet buyer specifications and requirements.",
    },
    {
      number: "02",
      title: "Dedicated Quality Control",
      desc: "Our manufacturing setup includes a dedicated quality-control department supported by experienced technicians.",
    },
    {
      number: "03",
      title: "Continuous Improvement",
      desc: "We continually review our quality objectives and explore developments in fabrics, accessories and fashion trends to strengthen our apparel manufacturing capabilities.",
    },
  ];

  const groupStats = [
    {
      number: "1863",
      title: "Beginning of the Business Legacy",
      desc: "A journey that began with jewellery and continued across generations.",
    },
    {
      number: "56",
      title: "Jewellery Outlets",
      desc: "Presence across India, the USA and GCC markets.",
    },
    {
      number: "302",
      title: "Financial Services Branches",
      desc: "The group’s NBFC operations have expanded across India.",
    },
    {
      number: "Multiple",
      title: "Diversified Business Presence",
      desc: "A growing portfolio spanning manufacturing, hospitality, finance, food, technology, tourism, retail and lifestyle businesses.",
    },
  ];

  const groupVentures = [
    {
      name: "Boby Chemmanur International Jewellers",
      desc: "The group’s flagship jewellery business and the foundation of the Chemmanur business legacy.",
      logo: "/group_logos/jewllery.webp",
    },
    {
      name: "boCHE Gold Loan",
      sub: "Chemmanur Credits and Investments Limited",
      desc: "The group’s financial-services venture operating in the NBFC sector.",
      logo: "/group_logos/boche gold loan.webp",
    },
    {
      name: "Malankara Credit Society",
      desc: "Financial-services and credit co-operative society venture operating under the group.",
      logo: "/group_logos/Malankara.webp",
    },
    {
      name: "Boby Oxygen Resorts",
      desc: "Hospitality and resort experiences developed under the group.",
      logo: "/group_logos/club oxygen.webp",
    },
    {
      name: "boCHE Tours & Travels",
      desc: "Travel and tourism services.",
      logo: "/group_logos/tours and travels.webp",
    },
    {
      name: "Phygicart.com",
      desc: "The group’s e-commerce venture.",
      logo: "/group_logos/phygicart.webp",
    },
    {
      name: "boCHE the Butcher",
      desc: "A meat retail and food-focused business venture.",
      logo: "/group_logos/butcher.webp",
    },
    {
      name: "boCHE Appliances",
      desc: "Home appliance products and related business operations.",
      logo: "/group_logos/appliances.webp",
    },
    {
      name: "boCHE & Shakesbierre",
      desc: "A lifestyle, food and beverage venture.",
      logo: "/group_logos/shakesbierre.webp",
    },
    {
      name: "boCHE 1000 Acre",
      desc: "A large-scale resort, entertainment and tourism destination.",
      logo: "/group_logos/boche 1000 acre.webp",
    },
    {
      name: "boCHE Toddy Pub",
      desc: "A hospitality and dining concept under the boCHE brand.",
      logo: "/group_logos/toddy  pub.webp",
    },
    {
      name: "boCHE Club",
      desc: "A lifestyle and entertainment-focused venture.",
      logo: "/group_logos/club.webp",
    },
    {
      name: "boCHE First Kiss",
      desc: "A baby wear brand and apparel venture.",
      logo: "/group_logos/firstkiss.webp",
    },
    {
      name: "boCHE Food Express",
      desc: "A food-service venture under the group.",
      logo: "/group_logos/food express.webp",
    },
    {
      name: "boCHE Tea",
      desc: "Tea products connected with the group’s plantation and related operations.",
      logo: "/group_logos/tea.webp",
    },
    {
      name: "boCHE Bhoomiputhra",
      desc: "The group's tea estate and agricultural plantation venture.",
      logo: "/group_logos/bhoomiputra-logo.webp",
    },
    {
      name: "boCHE Brahmi Tea",
      desc: "A specialized tea product under the boCHE brand.",
      logo: "/group_logos/brahmi tea.webp",
    },
    {
      name: "Mattanum Kuttanum",
      desc: "A food and lifestyle venture within the group portfolio.",
      logo: "/group_logos/mattanum kuttanum.webp",
    },
    {
      name: "boCHE Lens",
      desc: "Optical lens manufacturing and related operations.",
      logo: "/group_logos/boche lens.webp",
    },
    {
      name: "boCHE Apparels",
      desc: "Garment and apparel manufacturing activities within the group.",
      logo: "/group_logos/bohce apparles.webp",
    },
    {
      name: "Ciinfos",
      desc: "Information technology and digital solutions business.",
      logo: "/group_logos/ciinfos.webp",
    },
  ];

  const awards = [
    "PhD by World Records University",
    "Excellent Young Businessman Award",
    "Best Humanitarian Award",
    "Mother Teresa Award",
    "Vijayashree Award",
  ];

  return (
    <div className="bg-[#F9F9F9] text-[#1A1A1A] min-h-screen">
      {/* Title Banner */}
      <PageHeaderBanner
        title="About boCHE Apparels"
        subtitle="Apparel Manufacturing Built on Quality, Consistency & Trust"
        breadcrumb="About Us"
        bgImage="/images/about-title.webp"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">

        {/* SECTION 1 & 2: ABOUT BOCHE APPARELS & WHO WE ARE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: GENTLE_EASE }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={eyebrowVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-[#FBE87E] text-xs font-label font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>ABOUT BOCHE APPARELS</span>
            </motion.div>

            <motion.h2 variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl sm:text-4xl font-headline font-black text-[#1A1A1A] leading-tight">
              Apparel Manufacturing Built on Quality, Consistency & Trust
            </motion.h2>

            <p className="text-base font-body text-[#555555] leading-relaxed">
              <strong className="text-[#1A1A1A]">boCHE Apparels</strong>, part of <strong className="text-[#1A1A1A]">Boby Chemmanur International Group</strong>, is a prominent clothing manufacturing unit located in Tirupur, Tamil Nadu &amp; India. Specializing in high-quality apparel production, boCHE offers a wide range of garments including men’s, women’s, and children’s wear, along with custom designs and private label services. The factory is equipped with advanced technology and adheres to strict quality control standards to ensure the production of durable and stylish clothing. With a strong focus on sustainability and efficiency, boCHE Garments Factory caters to both domestic and international markets, delivering products that meet global quality and fashion standards.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.2 }}
              className="pt-4 border-t border-[#E5E5E2] space-y-4"
            >
              <h3 className="text-xl font-headline font-bold text-[#1A1A1A]">
                Who We Are — From Ideas to Finished Garments
              </h3>
              <p className="text-sm font-body text-[#555555] leading-relaxed">
                At boCHE Apparels, we focus on supporting customers throughout the apparel manufacturing process. Our production ecosystem brings together garment development, sampling, merchandising, sewing, production and quality control, supported by associated capabilities in knitting, dyeing, fabric processing, printing and embroidery.
              </p>
              <p className="text-sm font-body text-[#555555] leading-relaxed">
                With a strong understanding of changing fashion trends and buyer requirements, we continually work on new patterns, fabrics, accessories and garment development. Our goal is simple — to manufacture reliable apparel while building long-term relationships with the brands and businesses we serve.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Imagery */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: GENTLE_EASE }}
            className="lg:col-span-5 relative flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-out"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <ProgressiveImage
                src="/images/tailor.webp"
                alt="boCHE Apparels Master Tailor & Precision Craftsmanship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-label font-bold tracking-widest text-[#FBE87E] uppercase block">
                  TIRUPUR, TAMIL NADU
                </span>
                <p className="text-lg font-headline font-bold">
                  Precision Garment Manufacturing
                </p>
                <p className="text-xs font-body text-gray-300">
                  Buyer-focused apparel production ecosystem
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: OUR MANUFACTURING SCALE */}
        <section className="bg-white border border-[#E5E5E2] rounded-3xl p-8 sm:p-10 space-y-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: GENTLE_EASE }}
              className="text-xs font-label font-bold text-[#555555] tracking-[0.25em] uppercase block"
            >
              OUR MANUFACTURING SCALE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.1 }}
              className="text-3xl font-headline font-black text-[#1A1A1A]"
            >
              Infrastructure & Capacity Overview
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.2 }}
              className="text-sm font-body text-[#555555]"
            >
              Built for speed, capacity flexibility, and consistent manufacturing standards in India’s garment capital.
            </motion.p>
          </div>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 font-label"
          >
            {scaleStats.map((stat, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={cardChildVariants}
                  className="bg-white/90 backdrop-blur-md border border-[#E5E5E2] rounded-3xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 space-y-2.5 shadow-md group text-left"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#FBE87E] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
                    <ProgressiveImage src={stat.iconSrc} alt={stat.iconAlt} width={28} height={28} className="w-7 h-7 object-contain" />
                  </div>

                  <div className="text-xl sm:text-2xl font-headline font-extrabold text-[#1A1A1A] tracking-tight pt-1 leading-snug">
                    {typeof stat.value === "string" && stat.value.includes("\n") ? (
                      stat.value.split("\n").map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))
                    ) : (
                      stat.value
                    )}
                  </div>

                  <div className="text-xs font-label font-black text-[#1A1A1A] uppercase tracking-wider">
                    {stat.label}
                  </div>

                  <div className="text-xs font-body text-[#555555]">
                    {stat.desc}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* SECTION 4: OUR PRODUCT EXPERTISE */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: GENTLE_EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE87E] text-[#1A1A1A] text-xs font-label font-bold uppercase tracking-wider"
            >
              <ProgressiveImage src="/icons/mens wear.webp" alt="Garments for All Ages" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
              <span>GARMENTS FOR ALL AGES</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-headline font-black text-[#1A1A1A]"
            >
              Men’s, Women’s & Kids Wear Manufacturing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.2 }}
              className="text-base font-body text-[#555555]"
            >
              boCHE Apparels manufactures garments across three major apparel categories. We support buyer specifications and customized garment requirements across our product categories.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: GENTLE_EASE, delay: idx * 0.12 }}
                className="bg-white border border-[#E5E5E2] rounded-3xl p-7 space-y-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E5E5E2] pb-4">
                    <span className="text-[11px] font-label font-bold text-[#555555] tracking-widest uppercase">
                      {cat.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-[#E5E5E2] flex items-center justify-center overflow-hidden">
                      <ProgressiveImage
                        src={
                          idx === 0
                            ? "/icons/mens wear.webp"
                            : idx === 1
                            ? "/icons/womens wear.webp"
                            : "/icons/kids and babywear.webp"
                        }
                        alt={cat.category}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-[#1A1A1A]">
                    {cat.category}
                  </h3>
                  <p className="text-xs font-body text-[#555555] leading-relaxed">
                    {cat.description}
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {cat.items.map((item, itemIdx) => (
                      <motion.li
                        key={itemIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + itemIdx * 0.04 }}
                        className="flex items-center gap-2.5 text-xs font-label font-bold text-[#1A1A1A]"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#FBE87E] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#1A1A1A] stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5E5E2]">
                  <span className="text-[11px] font-label font-semibold text-[#555555] block">
                    Custom specifications supported
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5: MANUFACTURING CAPABILITIES */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: GENTLE_EASE }}
              className="text-xs font-label font-bold text-[#555555] tracking-[0.25em] uppercase block"
            >
              WHAT WE DO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-headline font-black text-[#1A1A1A]"
            >
              Integrated Apparel Manufacturing Capabilities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.2 }}
              className="text-base font-body text-[#555555]"
            >
              Our manufacturing ecosystem supports multiple stages of garment development and production with specialized machinery and trained technicians.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-label">
            {manufacturingCapabilities.map((cap, idx) => {
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: GENTLE_EASE, delay: idx * 0.08 }}
                  className="bg-white border border-[#E5E5E2] rounded-2xl p-6 space-y-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center shadow-md overflow-hidden">
                      <ProgressiveImage src={cap.iconSrc} alt={cap.iconAlt} width={32} height={32} className="w-8 h-8 object-contain" />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-[#555555] uppercase tracking-wider block">
                        {cap.subtitle}
                      </span>
                      <h3 className="text-lg font-headline font-bold text-[#1A1A1A]">
                        {cap.title}
                      </h3>
                    </div>

                    <div className="inline-block px-2.5 py-1 rounded bg-[#FBE87E]/30 text-[#1A1A1A] text-[11px] font-bold">
                      {cap.highlight}
                    </div>

                    <p className="text-xs font-body text-[#555555] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-[#E5E5E2]">
                    {cap.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="text-[11px] font-body text-[#1A1A1A] flex items-start gap-1.5">
                        <span className="text-[#1A1A1A] font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: QUALITY POLICY */}
        <section ref={qualityPolicyRef} className="bg-[#1A1A1A] text-white rounded-3xl p-8 sm:p-12 space-y-10 relative overflow-hidden shadow-2xl">
          <motion.div
            style={{
              y: shieldParallaxY,
              willChange: "transform",
            }}
            className="absolute right-0 top-0 pointer-events-none opacity-10 z-0"
          >
            <ShieldCheck className="w-96 h-96 text-white transform translate-x-20 -translate-y-20" />
          </motion.div>

          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: GENTLE_EASE }}
              className="text-xs font-label font-bold text-[#FBE87E] tracking-[0.25em] uppercase block"
            >
              OUR COMMITMENT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-headline font-black text-white"
            >
              Quality Policy & Manufacturing Standards
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.2 }}
              className="text-sm font-body text-gray-300 leading-relaxed"
            >
              At boCHE Apparels, quality is an integral part of garment manufacturing. Our focus is on maintaining consistent product standards, meeting buyer specifications and supporting reliable production.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 font-label">
            {qualityPolicies.map((pol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: GENTLE_EASE, delay: idx * 0.14 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 backdrop-blur-xs hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 ease-out cursor-pointer"
              >
                <span className="text-3xl font-headline font-black text-[#FBE87E]">
                  {pol.number}
                </span>
                <h3 className="text-base font-bold text-white">
                  {pol.title}
                </h3>
                <p className="text-xs font-body text-gray-300 leading-relaxed">
                  {pol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 7 & 8: OUR VISION & OUR MISSION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: GENTLE_EASE }}
            className="bg-white border border-[#E5E5E2] rounded-3xl p-8 space-y-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FBE87E] flex items-center justify-center shadow-sm overflow-hidden">
              <ProgressiveImage src="/icons/vision.webp" alt="Vision" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>

            <span className="text-xs font-label font-bold text-[#555555] tracking-widest uppercase block">
              OUR VISION
            </span>

            <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A]">
              Growing Through Quality, Integrity & Customer Delight
            </h2>

            <p className="text-sm font-body text-[#555555] leading-relaxed">
              Our vision is to continually grow as a producer of men’s wear, women’s wear and kids wear while remaining committed to:
            </p>

            <ul className="grid grid-cols-2 gap-3 pt-2 font-label">
              {["Quality", "Integrity", "Time", "Customer Delight"].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-[#F9F9F9] border border-[#E5E5E2] p-3 rounded-xl flex items-center gap-2 text-xs font-bold text-[#1A1A1A]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: GENTLE_EASE }}
            className="bg-white border border-[#E5E5E2] rounded-3xl p-8 space-y-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center shadow-sm overflow-hidden">
              <ProgressiveImage src="/icons/mission.webp" alt="Mission" width={32} height={32} className="w-8 h-8 object-contain" />
            </div>

            <span className="text-xs font-label font-bold text-[#555555] tracking-widest uppercase block">
              OUR MISSION
            </span>

            <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A]">
              Continuous Development in Apparel Manufacturing
            </h2>

            <p className="text-sm font-body text-[#555555] leading-relaxed">
              Our mission is to continually review our quality objectives and strengthen garment development through ongoing research and understanding of:
            </p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 font-label">
              {["Fabrics", "Accessories", "Fashion Trends", "Product Development", "Buyer Requirements"].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-[#F9F9F9] border border-[#E5E5E2] p-2.5 rounded-xl text-center text-xs font-bold text-[#1A1A1A]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xs font-body text-[#555555] pt-2 italic">
              Through continuous improvement, we aim to create garments that respond to changing markets and customer expectations.
            </p>
          </motion.div>
        </section>

        {/* SECTION 9 & 10: PART OF A LEGACY SINCE 1863 & GROUP AT A GLANCE */}
        <section className="space-y-12 bg-white border border-[#E5E5E2] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: GENTLE_EASE }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] text-[#FBE87E] text-xs font-label font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>OUR GROUP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-headline font-black text-[#1A1A1A] leading-tight">
                Part of a Legacy — Boby Chemmanur International Group
              </h2>

              {/* Mobile Group Logo Card (Shown right below heading on mobile < lg) */}
              <div className="block lg:hidden my-6">
                <GroupLogoCard GENTLE_EASE={GENTLE_EASE} />
              </div>

              <p className="text-base font-body text-[#555555] leading-relaxed">
                Founded as a small jewellery shop in <strong className="text-[#1A1A1A]">1863</strong>, the group has expanded and evolved over the years. Today, under the leadership of <strong className="text-[#1A1A1A]">boCHE</strong>, the fourth-generation heir, it stands as a globally renowned brand. The group now operates a network of <strong className="text-[#1A1A1A]">56 jewellery outlets across India, the USA, and the GCC</strong>.
              </p>

              <p className="text-base font-body text-[#555555] leading-relaxed">
                The group has successfully diversified into numerous sectors, establishing a strong presence in various industries both within India and abroad. This remarkable growth reflects its commitment to excellence, innovation, and a passion for offering high-quality products and services to customers worldwide.
              </p>

              <p className="text-sm font-body text-[#555555] leading-relaxed">
                Under the brand name <strong className="text-[#1A1A1A]">&ldquo;boCHE,&rdquo;</strong> the ventures continue to soar on the wings of trust and transparency, expanding into diversified business sectors such as NBFC (Non-Banking Financial Company with Reserve Bank of India License). It has <strong className="text-[#1A1A1A]">302 branches all over India</strong>, along with tea plantations and factories, resorts, an entertainment park on 1,000 acres, tours and travels, real estate, e-commerce, integrated meat stores, caravan tourism, jewellery manufacturing, garment factory, baby wear, restaurants, clubs, home appliances, breweries, optical lens manufacturing (Rx), insurance, IT, and more.
              </p>

              <p className="text-sm font-body text-[#1A1A1A] font-semibold pt-2 border-l-4 border-[#FBE87E] pl-4 italic">
                Ventures soaring on the wings of trust, transparency, and innovation across global markets.
              </p>
            </motion.div>

            {/* Desktop Large Group Logo Display (Hidden on mobile < lg, shown on lg+) */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <GroupLogoCard GENTLE_EASE={GENTLE_EASE} />
            </div>
          </div>

          {/* Group at a Glance Stats */}
          <div className="pt-8 border-t border-[#E5E5E2] space-y-6">
            <h3 className="text-2xl font-headline font-bold text-[#1A1A1A] text-center">
              Group at a Glance
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-label">
              {groupStats.map((gStat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: GENTLE_EASE, delay: idx * 0.1 }}
                  className="bg-[#F9F9F9] border border-[#E5E5E2] rounded-2xl p-6 space-y-2 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out cursor-pointer"
                >
                  <span className="text-3xl sm:text-4xl font-headline font-black text-[#1A1A1A] block">
                    {gStat.number}
                  </span>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">
                    {gStat.title}
                  </h4>
                  <p className="text-xs font-body text-[#555555] leading-relaxed">
                    {gStat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12: GROUP COMPANIES & VENTURES */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: GENTLE_EASE }}
              className="space-y-2"
            >
              <span className="text-xs font-label font-bold text-[#555555] tracking-[0.25em] uppercase block">
                GROUP PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline font-black text-[#1A1A1A]">
                Group Companies & Ventures
              </h2>
              <p className="text-sm font-body text-[#555555] max-w-2xl">
                Building Businesses Across Diverse Sectors — serving customers across retail, manufacturing, financial services, hospitality, and lifestyle.
              </p>
            </motion.div>
          </div>

          {/* Container: Horizontal Carousel on Mobile & Tablet (< lg), 4-Column Grid on Desktop (>= lg) */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: GENTLE_EASE }}
            className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-visible scrollbar-none pb-4 lg:pb-0 font-label -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {groupVentures.map((ven, idx) => (
              <motion.div
                key={idx}
                className="shrink-0 w-[82vw] max-w-[290px] sm:w-[320px] md:w-[350px] lg:w-auto bg-white border border-[#E5E5E2] rounded-2xl p-5 space-y-4 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  {/* Venture Logo Header */}
                  <div className="w-full h-32 sm:h-36 bg-[#FAFAFA] border border-[#E5E5E2] rounded-xl p-2 sm:p-3 flex items-center justify-center overflow-hidden shadow-2xs">
                    <ProgressiveImage
                      src={ven.logo}
                      alt={`${ven.name} Logo`}
                      width={320}
                      height={160}
                      className="max-h-24 sm:max-h-28 w-auto max-w-[95%] object-contain"
                      style={{ width: "auto", height: "auto" }} />
                  </div>

                  <div>
                    <h3 className="text-base font-headline font-bold text-[#1A1A1A] leading-snug">
                      {ven.name}
                    </h3>
                    {ven.sub && (
                      <span className="text-[11px] text-[#555555] font-semibold block mt-0.5">
                        {ven.sub}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-body text-[#555555] leading-relaxed">
                    {ven.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* OUR CHAIRMAN - DR. BOBY CHEMMANUR (boCHE) - UNIFIED COMPREHENSIVE SECTION */}
        <motion.section
          ref={chairmanSectionRef}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: GENTLE_EASE }}
          className="bg-[#1A1A1A] text-white rounded-3xl p-6 sm:p-12 pb-12 sm:pb-16 space-y-12 relative overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Comprehensive Leadership & Life Story */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: GENTLE_EASE }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE87E] text-[#1A1A1A] text-xs font-label font-bold uppercase tracking-wider"
              >
                <CrownIcon className="w-3.5 h-3.5" />
                <span>LEADERSHIP & VISION</span>
              </motion.div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl font-headline font-black text-white">
                  Dr. Boby Chemmanur — boCHE
                </h2>
                <p className="text-base font-label font-bold text-[#FBE87E] tracking-wider uppercase">
                  Entrepreneur • Business Leader • Philanthropist
                </p>
              </div>

              {/* Mobile Chairman Photo Card (Shown right below main heading on mobile < lg) */}
              <div className="block lg:hidden my-6">
                <ChairmanPhotoCard GENTLE_EASE={GENTLE_EASE} />
              </div>

              {/* Einstein Quote Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: GENTLE_EASE }}
                className="bg-white/5 border-l-4 border-[#FBE87E] p-4 rounded-r-2xl space-y-2"
              >
                <p className="text-xs sm:text-sm font-body italic text-gray-200 leading-relaxed">
                  &ldquo;Generations to come, it may be&rdquo;, Einstein had said of Mahatma Gandhi in 1944, &ldquo;will scarcely believe that such one as this ever in flesh and blood walked upon earth.&rdquo;
                </p>
                <p className="text-xs font-body text-gray-300 leading-relaxed pt-1">
                  Now we have started hearing from prominent people the same wordings about <strong className="text-white">boCHE</strong>! He is a huge business conglomerate, the Chemmanur International group, and a world famous philanthropist.
                </p>
              </motion.div>

              {/* Business Magazine Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.1 }}
                className="space-y-3"
              >
                <p className="text-sm font-body text-gray-300 leading-relaxed">
                  If we look at his versatile personality, we&apos;ll understand that the comparison made above is apt. This is what a famous business magazine wrote about boCHE recently:
                </p>
                <blockquote className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs sm:text-sm font-body text-[#FBE87E] italic leading-relaxed">
                  &ldquo;When quizzed about his favorite brand, he would only smile and point to his traditional attire — a white mundu (dhoti) and a simple short sleeved top — saying, &apos;this is the brand I&apos;m carrying now since the last few years.&apos;&rdquo;
                </blockquote>
              </motion.div>

              {/* Business Acumen */}
              <p className="text-sm font-body text-gray-300 leading-relaxed">
                It&apos;s his great business acumen that led Chemmanur International to grow into an international jewellery chain traversing 4 continents and catering to 19 crore people with an enviable annual turnover. His unique capabilities have won him several awards and accolades including PhD by World Records University, Excellent Young Businessman Award, Best Humanitarian Award, Mother Theresa Award, and Vijayashree Award.
              </p>

              {/* Social Services & Life Vision */}
              <p className="text-sm font-body text-gray-300 leading-relaxed">
                The contribution of Dr. Boby Chemmanur to the social services sector assumes immense value in today&apos;s world. boCHE is the founder of <strong className="text-white">Life Vision Charitable Trust</strong>. He shares the profit of his trade with the poor by starting Poor Homes wherever there are outlets of Chemmanur International Jewelers, providing shelter, food, clothing, and medicines for the needy.
              </p>

              {/* Marathon & Active Lifestyle */}
              <p className="text-sm font-body text-gray-300 leading-relaxed">
                He undertook a record-breaking <strong className="text-[#FBE87E]">812 km marathon in April 2014</strong> from Kasaragod to Thiruvananthapuram to create awareness for the world&apos;s largest blood bank. This initiative led to around 14 lakh blood donations and earned recognition in multiple record books including Kerala, India, Asia, and the UK.
              </p>

              {/* Conclusion & Motto */}
              <div className="pt-4 border-t border-white/20 space-y-3">
                <p className="text-sm font-body text-gray-300 leading-relaxed">
                  To conclude, it is impossible to fully capture the dynamic personality of boCHE in a short profile. From being a kung fu fighter and sharp shooter to a fitness enthusiast who runs 10 km daily, he continues to inspire with his motto:
                </p>
                <div className="text-2xl sm:text-3xl font-headline font-black text-[#FBE87E] italic pt-1">
                  &ldquo;Conquer the world with Love.&rdquo;
                </div>
              </div>
            </div>

            {/* Right Column: Chairman Photo & Awards Cards (Moving downwards with Parallax on Desktop) */}
            <motion.div
              style={{
                y: isDesktop ? chairmanCardsY : 0,
                willChange: isDesktop ? "transform" : "auto",
              }}
              className="lg:col-span-5 space-y-6 flex flex-col items-center lg:pt-14 w-full"
            >
              {/* Desktop Chairman Photo Card (Hidden on mobile < lg, shown on lg+) */}
              <div className="hidden lg:block w-full">
                <ChairmanPhotoCard GENTLE_EASE={GENTLE_EASE} />
              </div>

              {/* Awards Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: GENTLE_EASE, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 w-full max-w-sm backdrop-blur-md"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FBE87E] text-[#1A1A1A] flex items-center justify-center font-bold shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-headline font-bold text-white">
                      Awards & Recognition
                    </h3>
                    <p className="text-[11px] font-body text-gray-400">
                      Entrepreneurial & Humanitarian Excellence
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 font-label">
                  {awards.map((award, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                      transition={{ duration: 0.2 }}
                      className="bg-white/5 p-2 rounded-lg text-xs text-gray-200 font-semibold flex items-center gap-2 transition-colors duration-200 cursor-pointer"
                    >
                      <Medal className="w-3.5 h-3.5 text-[#FBE87E] shrink-0" />
                      <span>{award}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>


        {/* SECTION 19: CLOSING SECTION & CTA (Clean White Container) */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: GENTLE_EASE }}
          className="bg-white border border-[#E5E5E2] rounded-3xl p-8 sm:p-14 space-y-8 text-center relative overflow-hidden shadow-sm"
        >
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-label font-bold text-[#555555] tracking-[0.3em] uppercase block">
              A LEGACY. A VISION. A FUTURE.
            </span>

            <h2 className="text-3xl sm:text-5xl font-headline font-black text-[#1A1A1A] leading-tight">
              Manufacturing With Purpose. Growing With Trust.
            </h2>

            <p className="text-sm sm:text-base font-body text-[#555555] leading-relaxed">
              From a business legacy that began in <strong className="text-[#1A1A1A]">1863</strong> to today’s diversified Boby Chemmanur International Group, boCHE Apparels carries forward a culture of entrepreneurship, customer focus and continuous growth.
            </p>

            <p className="text-sm sm:text-base font-body text-[#555555] leading-relaxed">
              As part of this larger ecosystem, boCHE Apparels continues to strengthen its capabilities in garment manufacturing while working towards long-term relationships with brands, buyers and businesses.
            </p>

            <div className="py-6 border-y border-[#E5E5E2] grid grid-cols-1 sm:grid-cols-3 gap-4 font-headline text-base sm:text-lg font-bold text-[#1A1A1A]">
              <div>Quality in every garment.</div>
              <div>Consistency in every process.</div>
              <div>Trust in every partnership.</div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-label">
              <Link
                href="/catalog"
                className="btn-circle-hover font-black px-8 py-4 rounded-full text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>EXPLORE OUR PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="btn-circle-hover-inverted font-black px-8 py-4 rounded-full text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-md cursor-pointer no-underline"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}

// Inline Icon helper for leadership crown
function CrownIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

function GroupLogoCard({ GENTLE_EASE }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: GENTLE_EASE }}
      className="w-full flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-out"
    >
      <div className="relative w-full bg-[#1A1A1A] rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-between text-white shadow-2xl space-y-6">
        <div className="w-full flex items-center justify-center border-b border-white/20 pb-4">
          <span className="text-xs font-label text-[#FBE87E] font-bold tracking-widest uppercase">
            EST. 1863
          </span>
        </div>

        {/* Group Logo */}
        <a
          href="https://www.chemmanurinternationalgroup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 flex items-center justify-center w-full min-h-[90px] group cursor-pointer"
        >
          <ProgressiveImage
            src="/logo/group-logo.webp"
            alt="Boby Chemmanur International Group Official Logo"
            width={200}
            height={100}
            className="w-auto h-14 sm:h-20 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            style={{ width: "auto", height: "auto" }}
            priority />
        </a>

        <div className="space-y-2 text-center border-t border-white/20 pt-4 w-full">
          <span className="text-3xl sm:text-4xl font-headline font-black text-[#FBE87E] block">
            160+ Years
          </span>
          <p className="text-sm font-headline font-bold text-white">
            Boby Chemmanur International Group
          </p>
          <p className="text-xs font-body text-gray-300">
            Operations spanning India, USA, GCC and international markets.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ChairmanPhotoCard({ GENTLE_EASE }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: GENTLE_EASE }}
      className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-out mx-auto"
    >
      <ProgressiveImage
        src="/images/boche 1.webp"
        alt="Dr. Boby Chemmanur (boCHE) Chairman"
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
        priority
        sizes="(max-width: 768px) 100vw, 384px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
        <span className="text-xs font-label font-bold tracking-widest text-[#FBE87E] uppercase block">
          CHAIRMAN & FOUNDER
        </span>
        <p className="text-lg font-headline font-bold">
          Dr. Boby Chemmanur — boCHE
        </p>
        <p className="text-xs font-body text-gray-300">
          Boby Chemmanur International Group
        </p>
      </div>
    </motion.div>
  );
}


