// boCHE Apparels - Official Verified Company Data

export const COMPANY_INFO = {
  name: "boCHE Apparels",
  legalName: "Boby Chemmanur Enterprises Pvt Ltd",
  groupName: "Boby Chemmanur International Group",
  gstin: "33AAJCB3348N1ZF",
  tagline: "Complete Apparel Manufacturing Solution — From Fiber to Fashion",
  description:
    "boCHE Apparels was established in 2020 by Boby Chemmanur International Group, India (registered as Boby Chemmanur Enterprises Pvt Ltd). Right from the beginning, we emerged as an organization striving for quality and retaining consistency, offering complete apparel manufacturing solutions from fiber to fashion.",
  foundedYear: 2020,
  yearsExperience: "6+ Years of Experience",
  annualCapacity: "Basic: 80,000 pcs/month | Fashion: 50,000 pcs/month",
  factoryArea: "15,000 Sq. Ft.",
  totalEmployees: "450+ Skilled Artisans & Technicians",
  onTimeDeliveryRate: "99.4%",
  defectRate: "< 0.3%",
  certifications: [
    { name: "Quality & Consistency" },
    { name: "100% Export Quality" },
  ],
  productionCapacity: {
    basicGarments: "80,000 pieces/month",
    fashionGarments: "50,000 pieces/month",
  },
  vision:
    "To continually grow as a producer of Men's wear, Women's wear, and Kids wear with emphasis on Quality, Integrity, Time, and Customer delight.",
  mission:
    "Review quality objectives regularly, develop high-profile garments, and conduct continuous research into fabrics, accessories, and fashion trends.",
  contact: {
    generalManager: "Prabhu Sabapathy",
    designation: "General Manager",
    email: "gm@bocheapparels.com",
    salesEmail: "gm@bocheapparels.com",
    phone: "+91 6235 000 902",
    hotline: "+91 6235 000 902",
    address:
      "Boby Chemmanur Enterprises Pvt Ltd, No. 10, Poonthottam, Murugampalayam, Kumar Nagar Extn, Tirupur - 641603, India",
    workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
    coordinates: { lat: 11.116383290607224, lng: 77.32746780022696 },
    mapEmbedUrl:
      "https://maps.google.com/maps?q=11.116383290607224,77.32746780022696&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
};

export const PRODUCT_CATEGORIES = [
  {
    id: "kids-wear",
    name: "Kids wear",
    description:
      "Kids co-ord sets, top & bottom sets, printed kids sets, long-sleeve tops, sleeveless garments, tank tops, baby/toddler garments, kids T-shirts, and polo-style garments.",
  },
  {
    id: "ladies-wear",
    name: "Ladies / women's wear",
    description:
      "Leggings, skirts, dresses, T-shirts, tops, sleeveless tops, jackets, and fashion dresses.",
  },
  {
    id: "mens-wear",
    name: "Men's wear",
    description:
      "Polo T-shirts, regular T-shirts, sports/performance-style T-shirts, printed T-shirts, branded T-shirts, hoodies, long-sleeve T-shirts, and gradient/fashion T-shirts.",
  },
];

export const SERVICES = [
  {
    id: "sampling",
    title: "Sampling",
    cardTitle: "Sampling",
    icon: "Scissors",
    shortDesc: "Dedicated sampling support for product development, new patterns and buyer-specific garment requirement.",
    description: "Dedicated sampling support for garment development and buyer requirements.",
    isAssociated: false,
    features: [
      "Separate Sampling department",
      "Buyer specifications accepted",
      "Regular development of new patterns"
    ],
  },
  {
    id: "merchandising",
    title: "Merchandising",
    cardTitle: "Merchandising",
    icon: "Shirt",
    shortDesc: "Dedicated merchandising team bridging between buyer and production.",
    description: "Dedicated merchandising support for coordinating buyer requirements and garment production.",
    isAssociated: false,
    features: [
      "Separate Merchandising department",
      "Buyer specifications accepted",
      "Supports complete garment manufacturing operations"
    ],
  },
  {
    id: "knitting",
    title: "Knitting",
    cardTitle: "Knitting",
    icon: "Layers",
    shortDesc: "Associated knitting capabilities supporting jersey, design fabrics and Lycra with imported machinery.",
    description: "Knitting support for jersey and design fabrics through an associated manufacturing unit.",
    isAssociated: true,
    associatedNote: "Associated Knitting Unit",
    features: [
      "Associated knitting unit",
      "10 imported knitting machines",
      "Approximate knitting capacity: 3,000 kg/day",
      "Supports various qualities of jersey",
      "Supports 4-track design fabrics",
      "Lycra fabric capability"
    ],
  },
  {
    id: "dyeing-fabric-processing",
    title: "Fabric Processing",
    cardTitle: "Fabric Processing",
    icon: "Layers",
    shortDesc: "Associated fabric-processing capabilities supported by imported dyeing, squeezing and air-relax drying equipment.",
    description: "Fabric-processing support through an associated unit equipped with imported dyeing and finishing machinery.",
    isAssociated: true,
    associatedNote: "Associated Fabric-Processing Unit",
    features: [
      "Associated fabric-processing unit",
      "Imported dyeing machines from Hong Kong",
      "Balloon squeezing machine",
      "Air relax dryer"
    ],
  },
  {
    id: "printing",
    title: "Printing",
    cardTitle: "Printing",
    icon: "Printer",
    shortDesc: "Printing support through an associated unit equipped with table printing and M&R machinery.",
    description: "Garment printing support through an associated printing facility.",
    isAssociated: true,
    associatedNote: "Associated Printing Unit",
    features: [
      "Associated printing unit",
      
    ],
  },
  {
    id: "embroidery",
    title: "Embroidery",
    cardTitle: "Embroidery",
    icon: "Scissors",
    shortDesc: "Computerized embroidery support using 20-head TAJIMA machines with design punching and laser support.",
    description: "Computerized embroidery support for customized garment designs.",
    isAssociated: true,
    associatedNote: "Associated Embroidery Unit",
    features: [
      "Embroidery supplier equipped with 4 computerized machines",
      "20-head TAJIMA embroidery machines from Japan",
      "In-house embroidery design punching support",
      "Laser unit for precision trimming and applique"
    ],
  },
  {
    id: "sewing-production",
    title: "Production",
    cardTitle: "Production",
    icon: "Cpu",
    shortDesc: "Garment production supported by industrial sewing machinery from SIRUBA, JUKI and BROTHER and experienced technicians.",
    description: "Garment production supported by established industrial sewing-machine brands and experienced technicians.",
    isAssociated: false,
    features: [
      "Industrial sewing machinery from SIRUBA, JUKI, and BROTHER",
      "Experienced technicians",
      "Separate production department"
    ],
  },
  {
    id: "quality-control",
    title: "Quality Control",
    cardTitle: "Quality Control",
    icon: "CheckCircle2",
    shortDesc: "Dedicated quality control focused on maintaining consistent garment standards throughout production.",
    description: "Dedicated quality-control support focused on maintaining consistent garment quality.",
    isAssociated: false,
    features: [
      "Separate Quality Control department",
      "Emphasis on consistent high-quality merchandise",
      "Quality as a core business focus",
      "Periodically reviewed quality objectives"
    ],
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: "mens-polo",
    name: "Men's Classic Polo T-Shirt",
    category: "Men's wear",
    fabric: "Jersey & Pique Knits",
    image: "/images/hero-factory.webp",
    description: "Export-quality polo T-shirt crafted with precision stitching, custom collar construction, and fade-resistant dyeing.",
    highlights: ["Custom Fitting", "Soft Touch", "Quality Stitching"],
  },
  {
    id: "kids-coord",
    name: "Kids Co-Ord & Top Set",
    category: "Kids wear",
    fabric: "Soft Cotton Jersey",
    image: "/images/fabric-sourcing.webp",
    description: "Vibrant and comfortable printed kids set designed for durability, freedom of movement, and skin-friendly comfort.",
    highlights: ["Printed Patterns", "Durable Stitch", "Skin Friendly"],
  },
  {
    id: "ladies-dress",
    name: "Ladies Fashion Dress & Top",
    category: "Ladies wear",
    fabric: "Lycra & Jersey Blends",
    image: "/images/activewear.webp",
    description: "Elegant ladies fashion dress tailored with precise silhouette fitting and high-grade fabric finishing.",
    highlights: ["Fashion Fit", "Lycra Stretch", "Export Finish"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "boCHE Apparels has consistently delivered outstanding apparel quality and met our exact buyer specifications across all our production runs.",
    clientName: "Domestic Client Partner",
    designation: "Merchandising Head",
    company: "Indian Retail Network",
  },
  {
    quote: "From fiber to fashion, boCHE Apparels provides swift response times and dependable manufacturing management for our apparel collections.",
    clientName: "Global Sourcing Lead",
    designation: "Sourcing Manager",
    company: "International Apparel Buyer",
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: "Quality & consistency",
    description: "Striving for uncompromised product quality, regular review of quality objectives, and precise buyer specification fulfillment.",
    stat: "100%",
    badge: "Quality First",
  },
  {
    title: "15,000 sq. ft. facility",
    description: "Structured manufacturing area with dedicated departments for sampling, merchandising, production, and quality control.",
    stat: "15k Sq Ft",
    badge: "Factory Scale",
  },
  {
    title: "Associated processing & printing",
    description: "State-of-the-art associated dyeing unit with Hong Kong machinery and M&R USA printing technology.",
    stat: "M&R USA",
    badge: "Technology",
  },
  {
    title: "6 years experience",
    description: "Established in 2020 under Boby Chemmanur International Group, India with constant growth in competitive markets.",
    stat: "2020",
    badge: "Established",
  },
];

export const CLIENTS = {
  overseas: [
    "Disney",
    "Brunotti",
    "Attires Mena",
    "LPP S.A.",
    "Micross",
    "Marbel Kidswear Maker",
    "Flying Machine",
    "Cotton Division",
    "Just Brands",
  ],
  domestic: [
    "boCHE Appliances",
    "Gini & Jony",
    "boCHE Club",
    "Indel Money",
    "FLF / Future Lifestyle Fashions",
    "Phygicart.com",
    "boCHE ShakesBierre",
    "Pantaloons",
  ],
};
