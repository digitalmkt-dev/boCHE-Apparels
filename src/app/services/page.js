import ServicesPageClient from "@/components/ServicesPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "services" });

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Facilities & Services", "/services");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
