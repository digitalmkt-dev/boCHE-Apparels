import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bocheapparels.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "boCHE Apparels | Industrial Craft Garment Manufacturing Unit",
  description:
    "boCHE Apparels is a premier full-service garment manufacturing unit delivering end-to-end apparel OEM/ODM solutions, activewear, corporate uniforms, and sustainable clothing for global brands.",
  keywords: [
    "boCHE Apparels",
    "Garment Manufacturer",
    "Apparel OEM ODM",
    "Activewear Manufacturing",
    "Industrial Craft",
    "T-shirt Manufacturer",
    "Corporate Uniforms Manufacturer",
    "WRAP Gold Certified Factory",
    "Organic Cotton Garment Facility",
  ],
  authors: [{ name: "boCHE Apparels" }],
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "boCHE Apparels | Industrial Craft Garment Manufacturing Unit",
    description:
      "Premier full-service garment manufacturing unit delivering end-to-end apparel OEM/ODM solutions, activewear, corporate uniforms, and sustainable clothing.",
    url: siteUrl,
    siteName: "boCHE Apparels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "boCHE Apparels Logo & Industrial Craft Unit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "boCHE Apparels | Industrial Craft Garment Manufacturing Unit",
    description:
      "Premier full-service garment manufacturing unit delivering end-to-end apparel OEM/ODM solutions.",
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
        <meta property="og:image:alt" content="boCHE Apparels Logo & Industrial Craft Unit" />
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
