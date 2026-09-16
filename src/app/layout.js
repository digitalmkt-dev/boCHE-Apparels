import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export const metadata = {
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
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  openGraph: {
    title: "boCHE Apparels | Industrial Craft Garment Unit",
    description: "Precision garment manufacturing, automated Gerber cutting, 6.5M+ annual capacity.",
    url: "https://bocheapparels.com",
    siteName: "boCHE Apparels",
    type: "website",
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
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpeg" />
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
