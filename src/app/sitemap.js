const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bocheapparels.com";

export default async function sitemap() {
  const routes = [
    { url: "", lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "/catalog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "/products", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "/sustainability", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
