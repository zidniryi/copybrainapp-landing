import type { MetadataRoute } from "next";

const SITE_URL = "https://copybrainapp.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/download", priority: 0.9 },
    { path: "/docs", priority: 0.6 },
    { path: "/privacy", priority: 0.4 },
    { path: "/terms", priority: 0.4 },
    { path: "/accessibility", priority: 0.4 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
