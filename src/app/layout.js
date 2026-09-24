import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bocheapparels.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "boCHE Apparels | Industrial Apparel Manufacturing Unit",
  description:
    "Prominent apparel manufacturing unit located in Tirupur, India. Specializing in high-quality apparel production, offering a wide range of garments including men’s, women’s, and children’s wear.",
  keywords: [
    "boCHE Apparels",
    "Garment Manufacturer",
    "Apparel OEM ODM",
    "Industrial Apparel Manufacturing Unit",
    "Tirupur Garment Manufacturer",
    "T-shirt Manufacturer",
    "Men's Wear Manufacturer",
    "Women's Wear Manufacturer",
    "Children's Wear Manufacturer",
  ],
  authors: [{ name: "boCHE Apparels" }],
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "boCHE Apparels | Industrial Apparel Manufacturing Unit",
    description:
      "Prominent apparel manufacturing unit located in Tirupur, India. Specializing in high-quality apparel production, offering a wide range of garments including men’s, women’s, and children’s wear.",
    url: siteUrl,
    siteName: "boCHE Apparels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "boCHE Apparels | Industrial Apparel Manufacturing Unit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "boCHE Apparels | Industrial Apparel Manufacturing Unit",
    description:
      "Prominent apparel manufacturing unit located in Tirupur, India. Specializing in high-quality apparel production, offering a wide range of garments including men’s, women’s, and children’s wear.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.webp" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.webp" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="boCHE Apparels | Industrial Apparel Manufacturing Unit" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800;900&family=Libre+Franklin:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col font-body bg-[#F9F9F9] text-[#1A1A1A]"
        suppressHydrationWarning
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
