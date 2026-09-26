const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bocheapparels.com";

export const siteConfig = {
  name: "boCHE Apparels",
  legalName: "Boby Chemmanur Enterprises Pvt Ltd",
  groupName: "Boby Chemmanur International Group",
  url: SITE_URL,
  ogImage: `${SITE_URL}/og-image.png`,
  favicon: `${SITE_URL}/favicon.webp`,
  description:
    "Prominent apparel manufacturing unit located in Tirupur, India. Specializing in high-quality apparel production, offering a wide range of garments including men’s, women’s, and children’s wear.",
  phone: "+91 6235 000 902",
  email: "gm@bocheapparels.com",
  address: {
    street: "Poonthottam, Murugampalayam Extn, Kumarnagar",
    city: "Tirupur",
    region: "Tamil Nadu",
    postalCode: "641603",
    country: "IN",
    formatted: "Boby Chemmanur Enterprises Pvt Ltd, Poonthottam, Murugampalayam Extn, Kumarnagar, Tirupur, India - 641603",
  },
  coordinates: {
    latitude: 11.116383290607224,
    longitude: 77.32746780022696,
  },
};

export const pagesSeo = {
  home: {
    title: "boCHE Apparels | Garment Manufacturer in Tirupur",
    description:
      "Leading apparel manufacturing unit in Tirupur, India. Custom garment production for Men's, Women's, and Kids wear with global export quality.",
    path: "/",
    keywords: [
      "boCHE Apparels",
      "Garment Manufacturer Tirupur",
      "Apparel Manufacturing Unit India",
      "Custom Garment Manufacturer",
      "Custom Clothing Production",
      "T-shirt Manufacturer Tirupur",
      "Boby Chemmanur Apparel",
      "Kids Wear Wholesale Production",
      "Mens Wear Garment Factory",
      "Womens Garment Manufacturer",
    ],
  },
  about: {
    title: "About Us — Garment Factory in Tirupur",
    description:
      "boCHE Apparels, part of Boby Chemmanur International Group, is a premier apparel manufacturing unit in Tirupur, India for men's, women's & kids wear.",
    path: "/about",
    keywords: [
      "About boCHE Apparels",
      "Boby Chemmanur Enterprises",
      "Tirupur Apparel Manufacturing",
      "Garment Factory Legacy",
      "Custom Apparel Supplier",
      "Dr Boby Chemmanur",
      "Boby Chemmanur Group",
    ],
  },
  catalog: {
    title: "Apparel Catalog — Men, Women & Kids",
    description:
      "Explore boCHE Apparels' product catalog: T-shirts, polo tees, co-ord sets, leggings, and custom knitted garments for global buyers.",
    path: "/catalog",
    keywords: [
      "Apparel Product Catalog",
      "Kids Wear Wholesale",
      "Mens T-shirts Bulk",
      "Womens Leggings Manufacturer",
      "Knitted Garments Catalog",
      "boCHE Products",
      "Polo Tees Bulk Manufacturer",
    ],
  },
  products: {
    title: "Garment Collection & Product Range",
    description:
      "Browse custom manufactured garments from boCHE Apparels: T-shirts, polo tees, activewear, ladies dresses, leggings, and kids sets.",
    path: "/products",
    keywords: [
      "Garment Range",
      "Custom Apparel Collection",
      "Tirupur Garments Wholesale",
      "Kids Wear Production",
      "Activewear Manufacturer",
    ],
  },
  services: {
    title: "Apparel Manufacturing Facilities",
    description:
      "Complete apparel manufacturing facilities in Tirupur: Sampling, Knitting, Fabric Processing, Printing, Embroidery, Production & Quality Control.",
    path: "/services",
    keywords: [
      "Garment Knitting Facility",
      "Fabric Dyeing Tirupur",
      "Apparel Printing Unit",
      "Garment Embroidery",
      "Sampling & Merchandising",
      "Quality Control Apparel",
      "Tirupur Textile Services",
    ],
  },
  sustainability: {
    title: "CSR & Sustainable Apparel Policy",
    description:
      "Our sustainability commitment: GOTS organic cotton, closed-loop water treatment, zero non-toxic dyes, and ethical labor standards in Tirupur.",
    path: "/sustainability",
    keywords: [
      "Sustainable Garment Manufacturing",
      "Organic Cotton Manufacturer",
      "GOTS Certified Factory",
      "Eco Friendly Fashion Production",
      "Ethical Garment Factory India",
      "Zero Toxic Dye Garments",
    ],
  },
  contact: {
    title: "Contact Us | Garment Factory Quote",
    description:
      "Get in touch with boCHE Apparels for custom garment quotes, bulk inquiries, private label orders, and factory visits in Tirupur, India.",
    path: "/contact",
    keywords: [
      "Contact Garment Manufacturer",
      "Garment Factory Tirupur Address",
      "Get Garment Manufacturing Quote",
      "boCHE Apparels Phone Email",
      "Apparel Factory Inquiry",
    ],
  },
  blog: {
    title: "Apparel Sourcing & Textile Insights",
    description:
      "Read the latest garment manufacturing trends, sustainable fabric guides, 3D CAD pattern design insights, and apparel sourcing tips from boCHE Apparels.",
    path: "/blog",
    keywords: [
      "Garment Sourcing Blog",
      "Apparel Manufacturing Insights",
      "Sustainable Fashion Guide",
      "Tirupur Textile News",
      "boCHE Blog",
    ],
  },
};

/**
 * Generates Next.js Metadata object for any given route
 */
export function constructMetadata({ pageKey, title, description, keywords, canonicalPath, image }) {
  const pageSeo = pagesSeo[pageKey] || pagesSeo.home;

  const metaTitle = title || pageSeo.title;
  const metaDescription = description || pageSeo.description;
  const metaKeywords = keywords || pageSeo.keywords;
  const path = canonicalPath || pageSeo.path;
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImageUrl = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.name, url: SITE_URL }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: pageKey === "home" ? metaTitle : `${metaTitle} | ${siteConfig.name}`,
      description: metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 1200,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageKey === "home" ? metaTitle : `${metaTitle} | ${siteConfig.name}`,
      description: metaDescription,
      images: [ogImageUrl],
      creator: "@bocheapparels",
    },
  };
}

/**
 * Generates JSON-LD Structured Data Schema for search engines and AI LLM crawlers
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "ClothingStore"],
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: ["boCHE Apparels", "Boby Chemmanur Apparel", "boCHE Garments"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo/bocheapprels.webp`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: "1863",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["English", "Tamil", "Hindi"],
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.groupName,
      url: "https://www.chemmanurinternationalgroup.com/",
    },
    knowsAbout: [
      "Apparel Manufacturing",
      "Garment Export Production",
      "Custom T-shirt Production",
      "Textile Knitting and Dyeing",
      "Kids Wear Manufacturing",
      "Women's Wear Manufacturing",
    ],
    sameAs: [
      "https://www.facebook.com/bocheapparels",
      "https://www.instagram.com/bocheapparels",
      "https://www.linkedin.com/company/boche-apparels",
    ],
  };
}

/**
 * Generates WebSite Schema for Search Engines & AI LLMs
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: `${SITE_URL}/logo/bocheapprels.webp`,
    },
    inLanguage: "en-US",
  };
}

/**
 * Generates Service Schema for Manufacturing Facilities
 */
export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#service`,
    name: "Apparel & Garment Manufacturing Services",
    serviceType: "Garment Manufacturing",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    description: "Complete garment manufacturing services including Sampling, Merchandising, Knitting, Fabric Dyeing, Printing, Embroidery, Sewing, and Quality Assurance.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manufacturing Capabilities",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Garment Sampling & Pattern Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Textile Knitting & Fabric Processing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Screen Printing & Embroidery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bulk Sewing & Assembly" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AQL 2.5 Quality Assurance Control" } },
      ],
    },
  };
}

/**
 * Generates Product ItemList Schema for Catalog & Products Page
 */
export function generateProductCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/catalog#productlist`,
    name: "boCHE Apparels Manufactured Products",
    description: "Full range of manufactured apparel including Men's Wear, Women's Wear, and Kids Wear.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Men's T-Shirts & Polo Tees",
          description: "High-grade 100% cotton crew neck T-shirts and polo tees for men.",
          brand: { "@type": "Brand", name: siteConfig.name },
          category: "Men's Wear",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Women's Tops, Tees & Leggings",
          description: "Premium knitwear, casual tops, leggings, and co-ord sets for women.",
          brand: { "@type": "Brand", name: siteConfig.name },
          category: "Women's Wear",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Kids Wear & Polo Tees",
          description: "Soft cotton kids polo tees, sleeveless tops, and pyjama sets.",
          brand: { "@type": "Brand", name: siteConfig.name },
          category: "Kids Wear",
        },
      },
    ],
  };
}

/**
 * Generates Article / BlogPosting Schema with author, publisher, and freshness dates
 */
export function generateArticleSchema({ title, description, url, datePublished, dateModified, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url || SITE_URL}/#article`,
    headline: title || siteConfig.name,
    description: description || siteConfig.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url || SITE_URL,
    },
    inLanguage: "en-US",
    datePublished: datePublished || "2024-01-15T08:00:00+05:30",
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/bocheapprels.webp`,
      },
    },
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : siteConfig.ogImage,
  };
}

/**
 * Generates BreadcrumbList Schema for any page
 */
export function generateBreadcrumbSchema(pageName, pagePath) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...(pagePath !== "/"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: `${SITE_URL}${pagePath}`,
            },
          ]
        : []),
    ],
  };
}

