import AboutPageClient from "@/components/AboutPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "about" });

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("About Us", "/about");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPageClient />
    </>
  );
}
