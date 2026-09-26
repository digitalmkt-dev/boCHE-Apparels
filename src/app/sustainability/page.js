import SustainabilityPageClient from "@/components/SustainabilityPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "sustainability" });

export default function SustainabilityPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("CSR & Sustainability", "/sustainability");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SustainabilityPageClient />
    </>
  );
}
