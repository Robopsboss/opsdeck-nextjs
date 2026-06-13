import type { MetadataRoute } from "next";

const SITE_URL = "https://opsdeck.co.uk";

const routes: MetadataRoute.Sitemap = [
  { url: "/", changeFrequency: "weekly", priority: 1.0 },
  { url: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { url: "/faq", changeFrequency: "weekly", priority: 0.9 },
  { url: "/platform-build", changeFrequency: "monthly", priority: 0.9 },
  { url: "/website-build", changeFrequency: "monthly", priority: 0.8 },
  { url: "/gbp-setup", changeFrequency: "monthly", priority: 0.8 },
  { url: "/aeo-page-build", changeFrequency: "monthly", priority: 0.8 },
  { url: "/google-review-system", changeFrequency: "monthly", priority: 0.8 },
  { url: "/linkedin-optimisation", changeFrequency: "monthly", priority: 0.8 },
  { url: "/website-optimisation", changeFrequency: "monthly", priority: 0.8 },
  { url: "/priority-action-call", changeFrequency: "monthly", priority: 0.8 },
  { url: "/sales-process", changeFrequency: "monthly", priority: 0.8 },
  { url: "/marketing-strategy", changeFrequency: "monthly", priority: 0.8 },
  { url: "/rams-method-statement", changeFrequency: "monthly", priority: 0.8 },
  { url: "/compliance-pack", changeFrequency: "monthly", priority: 0.8 },
  { url: "/company-profile", changeFrequency: "monthly", priority: 0.8 },
  { url: "/tcs-template", changeFrequency: "monthly", priority: 0.8 },
  { url: "/commercial-readiness", changeFrequency: "monthly", priority: 0.9 },
  { url: "/bespoke-vs-off-the-shelf", changeFrequency: "monthly", priority: 0.8 },
  { url: "/honest-comparison", changeFrequency: "monthly", priority: 0.8 },
  { url: "/about", changeFrequency: "monthly", priority: 0.8 },
  { url: "/author/rob-france", changeFrequency: "monthly", priority: 0.7 },
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
