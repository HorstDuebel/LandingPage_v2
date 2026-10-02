import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteRoutes.map((route) => {
    const path = route.path === "/" ? "/" : `${route.path.replace(/\/$/, "")}/`;
    return {
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
  });
}
