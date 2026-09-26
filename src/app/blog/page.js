import BlogPageClient from "@/components/BlogPageClient";
import { constructMetadata, generateBreadcrumbSchema, generateArticleSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "blog" });

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Blog & Insights", "/blog");
  const articleSchema = generateArticleSchema({
    title: "Apparel Sourcing, Textile Engineering & Sustainable Manufacturing Guides",
    description: "Technical guides, textile innovations, supply chain trends, and manufacturing insights from boCHE Apparels in Tirupur, India.",
    url: "https://bocheapparels.com/blog",
    datePublished: "2024-01-15T08:00:00+05:30",
    dateModified: "2026-09-26T10:00:00+05:30",
    image: "/images/hero-factory.webp",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPageClient />
    </>
  );
}
