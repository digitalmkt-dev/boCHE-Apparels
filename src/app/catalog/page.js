import CatalogPageClient from "@/components/CatalogPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "catalog" });

export default function CatalogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Products", "/catalog");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CatalogPageClient />
    </>
  );
}
