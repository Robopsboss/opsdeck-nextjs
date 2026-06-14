import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import ProductHero from "@/components/product/ProductHero";
import PainSection from "@/components/product/PainSection";
import HookSection from "@/components/product/HookSection";
import WhatYouGetTable from "@/components/product/WhatYouGetTable";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import ComparisonTable from "@/components/product/ComparisonTable";
import CTABlock from "@/components/product/CTABlock";

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Website Build")}`;
const MAINTENANCE_MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Website Maintenance")}`;
const CTA_LABEL = "Book a Free Scoping Call";

const pageTitle = "Website Build | OpsDeck";
const pageDescription =
  "A professionally built, AEO-ready website written for your trades business — structured for Google and AI recommendation from day one. From £750.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/website-build" },
  openGraph: {
    url: "https://opsdeck.co.uk/website-build",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "When did you last Google your own business name and see what a stranger sees?",
  "If a potential client found you and a competitor in the same search — why did they call them and not you?",
  "If someone searched for your service in your area right now, would you appear?",
];

const hookBody =
  "A website that exists is not the same as a website that works. The gap is almost always the same — vague messaging, no pricing, nothing that tells a visitor why they should contact you instead of the next result. And the businesses without the right structure are invisible to AI tools altogether. ChatGPT, Google AI Overviews, and Perplexity are already the first place buyers look. They recommend businesses structured to be found. They ignore the rest.";

const features = [
  {
    feature: "Homepage — headline, trust signals, clear CTA",
    detail:
      "A visitor decides in seconds. Right now that decision is probably going in the wrong direction — and you'll never know about it.",
  },
  {
    feature: "FAQ page — your most powerful AEO asset",
    detail:
      "The questions your clients type into Google and ChatGPT, answered directly on your site. This is how AI tools decide who to recommend. Without this page, your competitors are getting recommended instead of you every day.",
  },
  {
    feature: "Pricing transparency",
    detail:
      "Businesses that publish starting prices get more qualified enquiries. Hiding your prices sends every serious buyer to a competitor who doesn't.",
  },
  {
    feature: "AEO-ready structure from day one",
    detail:
      "AI tools recommend local businesses directly. To be recommended you need to be structured correctly — built in from the start, not retrofitted later.",
  },
  {
    feature: "Full handover pack on go-live",
    detail:
      "How to request changes, what OpsDeck manages, and how to build your Google presence from day one.",
  },
];

const steps = [
  {
    title: "You enquire",
    body: 'Email rob@opsdeck.co.uk with "Website Build". We arrange a short discovery call to understand your business and what the site needs to achieve.',
  },
  {
    title: "We scope, write, and you approve",
    body: "Fixed quote confirmed. Every page written and sent as Word documents before the build starts. One round of revisions included.",
  },
  {
    title: "We build and launch",
    body: "Next.js, AEO-ready, mobile-optimised. Google Analytics and Search Console set up. Domain pointed. Site goes live.",
  },
  {
    title: "You receive your handover pack",
    body: "Everything needed to keep the site performing. Delivered in 10–15 working days from completed intake.",
  },
];

const comparisonRows = [
  { without: "You design it yourself from a template", with: "Built and written for you — ready to launch" },
  { without: "Generic layout used by thousands of businesses", with: "Specific to your service, your location, your clients" },
  { without: "Basic SEO at best", with: "AEO-ready from day one — structured for AI recommendation" },
  { without: "Slow load times on shared hosting", with: "Next.js — fast, performant, properly indexed" },
  { without: "Ongoing monthly platform fees", with: "You own it — no platform lock-in" },
  { without: "No support after setup", with: "Full handover pack and quarterly maintenance available" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Build",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/website-build",
  offers: { "@type": "Offer", price: "750", priceCurrency: "GBP" },
};

export default function WebsiteBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Website Build"
          title="You're Winning Work on Reputation. You're Losing It Before You've Even Had the Chance."
          lead="A professionally built, AEO-ready website — written and delivered for your business from scratch."
          sub="From £750. Fixed quote before we start."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
        />

        <PainSection eyebrow="Sound familiar?" painPoints={painPoints} />

        <HookSection eyebrow="The real problem" body={hookBody} />

        <WhatYouGetTable title="What You Get" rows={features} />

        <HowItWorksSteps title="How It Works" steps={steps} />

        <ComparisonTable title="What Makes This Different" rows={comparisonRows} />

        {/* Optional after-sale add-on */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Optional add-on
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                After your site is built — optional quarterly maintenance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your website is live, you can keep it performing with the Website Quarterly Maintenance Package — £75 per quarter. Four structured health checks a year covering analytics, Google indexing, page speed, broken links, contact details, forms, SSL, and more. Minor fixes (broken links, updated phone numbers, typos, swapped images, meta updates) are included in the £75 — completed the same week as the check. Anything larger is quoted separately before any work begins. Optional, rolling, 30 days&apos; notice to cancel. Details confirmed at go-live.
              </p>
              <a
                href={MAINTENANCE_MAILTO}
                className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline mt-5"
              >
                Ask about maintenance
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <CTABlock
          title="Ready to Stop Being Invisible?"
          body="From £750. Fixed quote before we start. Delivered in 10–15 working days."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with the subject line "Website Build".'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
