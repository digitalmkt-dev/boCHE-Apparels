import CatalogPageClient from "@/components/CatalogPageClient";
import { constructMetadata, generateBreadcrumbSchema, generateProductCatalogSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "catalog" });

export default function CatalogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Products", "/catalog");
  const productCatalogSchema = generateProductCatalogSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCatalogSchema) }}
      />
      <CatalogPageClient />
    </>
  );
}
