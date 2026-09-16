"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "@/data/companyData";

function ProductCatalogContent({ onOpenQuoteModal }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams ? searchParams.get("category") : null;

  const [selectedTab, setSelectedTab] = useState("All Products");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    if (categoryParam) {
      const lower = categoryParam.toLowerCase();
      if (lower.includes("women")) {
        setSelectedTab("Women's Wear");
      } else if (lower.includes("kid")) {
        setSelectedTab("Kids Wear");
      } else if (lower.includes("men")) {
        setSelectedTab("Men's Wear");
      }
    }
  }, [categoryParam]);

  const tabs = ["All Products", "Men's Wear", "Women's Wear", "Kids Wear"];

  // Men's Wear Catalog Data
  const mensProducts = [
    {
      id: "m-1",
      name: "T-shirts",
      category: "Men's Wear",
      image: "/images/products/t-shirt.webp",
      fabric: "180 GSM Combed Cotton Single Jersey",
      colors: ["Navy Blue", "White", "Black", "Heather Grey"],
      description: "Classic crewneck t-shirt with soft bio-wash finishing and twin-needle stitching.",
    },
    {
      id: "m-2",
      name: "Polo T-shirts",
      category: "Men's Wear",
      image: "/images/products/polo t-shirt.webp",
      fabric: "220 GSM Combed Cotton Pique",
      colors: ["White/Navy Collar", "Navy/White", "Grey/Black"],
      description: "Export-grade short-sleeve polo shirt with tipped ribbed collar and 2-button placket.",
    },
    {
      id: "m-3",
      name: "Printed T-shirts",
      category: "Men's Wear",
      image: "/images/products/printed t-shirt.webp",
      fabric: "180 GSM Organic Cotton",
      colors: ["Black/Silver Print", "Navy/Gold", "White/Black"],
      description: "Modern street-style printed tee with high-density discharge screen print.",
    },
    {
      id: "m-4",
      name: "Fashion T-shirts",
      category: "Men's Wear",
      image: "/images/products/fashion t-shirt.webp",
      fabric: "190 GSM Cotton Elastane Blend",
      colors: ["Maroon Burgundy", "Mustard", "Deep Teal"],
      description: "Slim-fit fashion crewneck with 5% elastane for optimal shape retention.",
    },
    {
      id: "m-5",
      name: "Long-sleeve T-shirts",
      category: "Men's Wear",
      image: "/images/products/long-sleeve t-shirt.webp",
      fabric: "200 GSM Ring-Spun Cotton",
      colors: ["Charcoal Grey", "Navy", "Forest Green"],
      description: "Tailored long-sleeve tee featuring rib-knit cuffs and twin-needle hem finishing.",
    },
    {
      id: "m-6",
      name: "Hoodies",
      category: "Men's Wear",
      image: "/images/products/hooodies.webp",
      fabric: "320 GSM Heavyweight Fleece",
      colors: ["Olive Green", "Black", "Tan", "Heather Grey"],
      description: "Premium pullover fleece hoodie with double-layer hood and kangaroo pocket.",
    },
    {
      id: "m-7",
      name: "Sports & Performance Styles",
      category: "Men's Wear",
      image: "/images/products/sports t-shirt.webp",
      fabric: "160 GSM Moisture-Wicking Polyester",
      colors: ["Royal Blue", "Electric Lime", "Jet Black"],
      description: "Athletic raglan-sleeve performance t-shirt with flatlock anti-chafing seams.",
    },
    {
      id: "m-8",
      name: "Track Suits & Activewear",
      category: "Men's Wear",
      image: "/images/products/track suite.webp",
      fabric: "240 GSM Polyester Elastane Knit",
      colors: ["Navy/White", "Black/Grey", "Charcoal"],
      description: "Full-zip activewear track suit tailored for athletic movement and warmth.",
    },
    {
      id: "m-9",
      name: "Shorts & Casual Bottoms",
      category: "Men's Wear",
      image: "/images/products/shorts.webp",
      fabric: "220 GSM French Terry Cotton",
      colors: ["Heather Grey", "Navy", "Black"],
      description: "Casual everyday sweat shorts with drawstring waist and deep side pockets.",
    },
  ];

  // Women's Wear Catalog Data
  const womensProducts = [
    {
      id: "w-1",
      name: "Dresses",
      category: "Women's Wear",
      image: "/images/products/dresses.webp",
      fabric: "150 GSM Cotton Poplin",
      colors: ["Summer Yellow", "Floral Pink", "Ivory"],
      description: "Breathable cotton summer dress with elegant fit and gathered waistline.",
    },
    {
      id: "w-2",
      name: "T-shirts",
      category: "Women's Wear",
      image: "/images/products/womens t-shirts.webp",
      fabric: "170 GSM Combed Cotton",
      colors: ["Blush Pink", "Navy Blue", "White"],
      description: "Tailored women's crewneck t-shirt with feminine silhouette cut and soft seam finishing.",
    },
    {
      id: "w-3",
      name: "Tops",
      category: "Women's Wear",
      image: "/images/products/womens top.webp",
      fabric: "190 GSM Modal Knit Blend",
      colors: ["Ivory White", "Beige", "Lavender"],
      description: "Modern fashion knit top crafted for effortless daily styling.",
    },
    {
      id: "w-4",
      name: "Sleeveless Tops",
      category: "Women's Wear",
      image: "/images/products/womens sleeveless tops.webp",
      fabric: "200 GSM 2x2 Cotton Rib",
      colors: ["Sage Green", "White", "Black"],
      description: "Form-fitting ribbed racerback sleeveless tank top with binding trim finish.",
    },
    {
      id: "w-5",
      name: "Skirts",
      category: "Women's Wear",
      image: "/images/products/womens skirts.webp",
      fabric: "180 GSM Cotton Twill",
      colors: ["Beige Tan", "Olive", "Charcoal"],
      description: "Structured A-line cotton skirt designed for modern casual wear.",
    },
    {
      id: "w-6",
      name: "Leggings",
      category: "Women's Wear",
      image: "/images/products/Leggings.webp",
      fabric: "230 GSM Cotton Elastane",
      colors: ["Jet Black", "Dark Grey", "Navy"],
      description: "Ultra-stretch opaque cotton leggings with wide comfortable elastic waistband.",
    },
    {
      id: "w-7",
      name: "Jackets",
      category: "Women's Wear",
      image: "/images/products/womens jackets.webp",
      fabric: "260 GSM Lightweight Cotton Fleece",
      colors: ["Olive Green", "Charcoal", "Sand"],
      description: "Casual zip-up jacket with front pockets and ribbed cuffs.",
    },
    {
      id: "w-8",
      name: "Fashion Garments",
      category: "Women's Wear",
      image: "/images/products/womens fashion garments.webp",
      fabric: "210 GSM Modal Rayon Blend",
      colors: ["Dusty Rose", "Mocha", "Emerald"],
      description: "Designer fashion top tailored with specialized finish and neck accents.",
    },
  ];

  // Kids Wear Catalog Data
  const kidsProducts = [
    {
      id: "k-1",
      name: "T-shirts",
      category: "Kids Wear",
      image: "/images/products/kids t-shirts.webp",
      fabric: "160 GSM Organic Cotton Jersey",
      colors: ["Sky Blue", "Bright Yellow", "Lilac"],
      description: "Soft-touch organic cotton crewneck t-shirt designed for sensitive skin.",
    },
    {
      id: "k-2",
      name: "Polo-style Garments",
      category: "Kids Wear",
      image: "/images/products/kids polo t-shirt.webp",
      fabric: "200 GSM Pique Knit",
      colors: ["Navy/Yellow Stripe", "Red/White", "Green/Navy"],
      description: "Durable yarn-dyed striped polo shirt for school and everyday wear.",
    },
    {
      id: "k-3",
      name: "Co-ord Sets",
      category: "Kids Wear",
      image: "/images/products/kids Co-ord sets.webp",
      fabric: "170 GSM Combed Cotton",
      colors: ["Dinosaur Print", "Safari Animal", "Space Theme"],
      description: "Two-piece matching printed t-shirt and elastic-waist shorts set.",
    },
    {
      id: "k-4",
      name: "Girls Co-ord Sets",
      category: "Kids Wear",
      image: "/images/products/girls cord-set.webp",
      fabric: "175 GSM Soft Jersey Blend",
      colors: ["Floral Pink", "Pastel Lavender", "Mint"],
      description: "Charming girls two-piece co-ord set with elastic waist and soft finish.",
    },
    {
      id: "k-5",
      name: "Top-and-Bottom Sets",
      category: "Kids Wear",
      image: "/images/products/kids top and bottom sets.webp",
      fabric: "180 GSM Ring-Spun Cotton",
      colors: ["Royal Blue Set", "Red/Navy", "Yellow Set"],
      description: "Comfortable top and bottom set tailored for active play.",
    },
    {
      id: "k-6",
      name: "Printed Sets",
      category: "Kids Wear",
      image: "/images/products/kids printed sets.webp",
      fabric: "175 GSM Single Jersey",
      colors: ["Pastel Yellow", "Mint Green", "Coral"],
      description: "Playful printed top and jogger set with soft eco-friendly water-based print.",
    },
    {
      id: "k-7",
      name: "Sleeveless Garments",
      category: "Kids Wear",
      image: "/images/products/kids sleeveless t-shirts.webp",
      fabric: "160 GSM Lightweight Cotton Rib",
      colors: ["White", "Bright Red", "Ocean Blue"],
      description: "Breathable sleeveless vest top crafted for warm weather comfort.",
    },
    {
      id: "k-8",
      name: "Long-sleeve Tops",
      category: "Kids Wear",
      image: "/images/products/kids long sleeve tops.webp",
      fabric: "190 GSM Interlock Cotton",
      colors: ["Navy Blue", "Heather Grey", "Olive"],
      description: "Cozy long-sleeve cotton jersey top with ribbed cuffs.",
    },
    {
      id: "k-9",
      name: "Baby & Toddler Rompers",
      category: "Kids Wear",
      image: "/images/products/kids rompers.webp",
      fabric: "180 GSM Super Soft Interlock",
      colors: ["Pastel Yellow", "Mint Green", "White"],
      description: "Infant snap-closure romper with nickel-free bottom press studs.",
    },
  ];

  const getFilteredProducts = () => {
    if (selectedTab === "Men's Wear") return mensProducts;
    if (selectedTab === "Women's Wear") return womensProducts;
    if (selectedTab === "Kids Wear") return kidsProducts;
    return [...mensProducts, ...womensProducts, ...kidsProducts];
  };

  const allFiltered = getFilteredProducts();
  const displayedProducts = allFiltered.slice(0, visibleCount);

  return (
    <section className="py-16 bg-[#F9F9F9] text-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Category Selector Tiles (2x2 grid on mobile, horizontal row on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md sm:max-w-none mx-auto font-label"
        >
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2.5 sm:gap-3">
            {tabs.map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <motion.button
                  key={tab}
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedTab(tab);
                    setVisibleCount(12);
                  }}
                  className={`py-3 px-4 sm:px-8 rounded-[14px] text-xs sm:text-sm font-bold text-center transition-colors cursor-pointer relative ${isActive
                      ? "bg-[#FBE87E] text-[#1A1A1A] border border-[#FBE87E] shadow-2xs"
                      : "bg-white text-[#1A1A1A] border border-[#CCCCCC] hover:border-[#1A1A1A] shadow-2xs"
                    }`}
                >
                  {tab}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Category Sub-Heading */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1"
        >
          <h3 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A] tracking-tight">
            {selectedTab}
          </h3>
        </motion.div>

        {/* Product Cards Grid (2 cards on mobile, 3 cards on tablet, 4 cards on desktop) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 font-label"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{
                  duration: 0.35,
                  delay: (index % 12) * 0.04,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col select-none"
              >
                {/* Product Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden shadow-xs">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {allFiltered.length > visibleCount && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center pt-6 font-label"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FBE87E] text-[#1A1A1A] font-black px-10 py-3.5 rounded-full text-xs tracking-widest uppercase transition-colors shadow-xs cursor-pointer"
            >
              LOAD MORE
            </motion.button>
          </motion.div>
        )}

        {/* High-Impact Yellow CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#FBE87E] rounded-3xl p-8 sm:p-10 border border-[#E0D069] shadow-md my-12 relative overflow-hidden font-label"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left Content */}
            <div className="space-y-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A] tracking-tight">
                Have a Garment Style in Mind?
              </h3>
              <p className="text-sm font-body text-[#1A1A1A]/80 font-semibold">
                Share your design or reference with our team.
              </p>
            </div>

            {/* Desktop Vertical Divider */}
            <div className="hidden lg:block w-[1px] h-12 bg-[#1A1A1A]/20 mx-2" />

            {/* Right Button: Only Call Us Now */}
            <div className="flex items-center justify-center w-full lg:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="btn-circle-hover-dark-white font-black px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase inline-flex items-center gap-2.5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer justify-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CALL US NOW: {COMPANY_INFO.contact.phone}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default function ProductCatalog(props) {
  return (
    <Suspense fallback={<div className="py-20 text-center font-label">Loading Products...</div>}>
      <ProductCatalogContent {...props} />
    </Suspense>
  );
}
