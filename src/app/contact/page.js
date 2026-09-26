import ContactPageClient from "@/components/ContactPageClient";
import { constructMetadata, generateBreadcrumbSchema } from "@/data/seoMetadata";

export const metadata = constructMetadata({ pageKey: "contact" });

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema("Contact Us", "/contact");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
