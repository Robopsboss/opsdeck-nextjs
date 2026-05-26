import type { MetadataRoute } from "next";

const SITE_URL = "https://opsdeck.co.uk";

const routes: MetadataRoute.Sitemap = [
  { url: "/", changeFrequency: "weekly", priority: 1.0 },
  { url: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { url: "/bespoke-vs-off-the-shelf", changeFrequency: "monthly", priority: 0.8 },
  { url: "/honest-comparison", changeFrequency: "monthly", priority: 0.8 },
  { url: "/about", changeFrequency: "monthly", priority: 0.8 },
  { url: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { url: "/service-area", changeFrequency: "monthly", priority: 0.8 },
  { url: "/case-studies/birdwell", changeFrequency: "monthly", priority: 0.8 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    ...route,
    url: `${SITE_URL}${route.url}`,
  }));
}
