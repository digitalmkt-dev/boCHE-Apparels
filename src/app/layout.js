import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { siteConfig, generateOrganizationSchema } from "@/data/seoMetadata";

const siteUrl = siteConfig.url;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "boCHE Apparels | Garment Manufacturer in Tirupur",
    template: "%s | boCHE Apparels",
  },
  description: siteConfig.description,
  keywords: [
    "boCHE Apparels",
    "Garment Manufacturer",
    "Custom Apparel Manufacturing",
    "Industrial Apparel Manufacturing Unit",
    "Tirupur Garment Manufacturer",
    "T-shirt Manufacturer",
    "Men's Wear Manufacturer",
    "Women's Wear Manufacturer",
    "Children's Wear Manufacturer",
    "Boby Chemmanur Apparel",
  ],
  authors: [{ name: "boCHE Apparels", url: siteUrl }],
  creator: "boCHE Apparels",
  publisher: siteConfig.legalName,
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "boCHE Apparels | Garment Manufacturer in Tirupur",
    description: siteConfig.description,
    url: siteUrl,
    siteName: "boCHE Apparels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "boCHE Apparels | Garment Manufacturer in Tirupur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "boCHE Apparels | Garment Manufacturer in Tirupur",
    description: siteConfig.description,
    images: [`${siteUrl}/og-image.png`],
    creator: "@bocheapparels",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = generateOrganizationSchema();

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
        <meta name="theme-color" content="#FBE87E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800;900&family=Libre+Franklin:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
