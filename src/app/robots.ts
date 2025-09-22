import { siteInfo } from "@/content/siteInfo";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteInfo.siteURL}/sitemap.xml`,
  };
}
