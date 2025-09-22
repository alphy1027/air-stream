import { navLinks } from "@/content/navLinks";
import { services } from "@/content/services";
import { siteInfo } from "@/content/siteInfo";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = navLinks.map((navLink) => ({
    url: `${siteInfo.siteURL}${navLink.to}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteInfo.siteURL}/services/${service.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
