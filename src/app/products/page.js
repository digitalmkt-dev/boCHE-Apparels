import CatalogPageClient from "@/components/CatalogPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "products" });

export default function ProductsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Products", "/products");

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
