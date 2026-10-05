import type { MetadataRoute } from "next";
import { projects } from "./portfolio/projects";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/portfolio", "/contact", ...projects.map((project) => `/portfolio/${project.slug}`)].map((path) => ({ url: `${siteUrl}${path}` }));
}
