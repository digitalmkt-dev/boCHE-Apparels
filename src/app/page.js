import HomePageClient from "@/components/HomePageClient";
import { constructMetadata, generateOrganizationSchema, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "home" });

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema("Home", "/");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomePageClient />
    </>
  );
}
