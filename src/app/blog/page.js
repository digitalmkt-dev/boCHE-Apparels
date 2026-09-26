import BlogPageClient from "@/components/BlogPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "blog" });

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Blog & Insights", "/blog");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPageClient />
    </>
  );
}
