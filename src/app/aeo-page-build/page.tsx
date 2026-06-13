import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import ProductHero from "@/components/product/ProductHero";
import PainSection from "@/components/product/PainSection";
import HookSection from "@/components/product/HookSection";
import WhatYouGetTable from "@/components/product/WhatYouGetTable";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import ComparisonTable from "@/components/product/ComparisonTable";
import CTABlock from "@/components/product/CTABlock";

const STRIPE_URL = "https://buy.stripe.com/eVq6oI88FgmBfrZ5l35Rm04";
const CTA_LABEL = "Get Started — £397";

const pageTitle = "AEO Page Build — 9 Pages | OpsDeck";
const pageDescription =
  "Nine AEO-optimised pages written for your trades business — structured so AI tools can find, read, and recommend you, with schema markup included. £397. Delivered in 7 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/aeo-page-build" },
  openGraph: {
    url: "https://opsdeck.co.uk/aeo-page-build",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "Have you ever asked ChatGPT or Google AI to recommend a service in your area and watched a competitor appear instead of you?",
  "Do you know why your website is invisible to AI tools that are already sending buyers to other businesses?",
  "How many enquiries are going to competitors today because they are structured for AI recommendation and you are not?",
];

const hookBody =
  "There are two types of business online right now. The ones AI tools recommend when someone searches for their service in their area. And the ones that do not appear — regardless of how good the work is, how long they have been trading, or how many satisfied customers they have. The difference is not reputation. It is whether the website is structured to answer the questions AI systems look for before they recommend a business. Most websites have none of these in a format AI can use.";

const features = [
  {
    feature: "Pricing Page",
    detail:
      "AI avoids recommending businesses it cannot answer cost questions about. This is the single highest-impact AEO page any service business can have. Without it, every buyer who asks AI is sent somewhere else.",
  },
  {
    feature: "FAQ Page",
    detail:
      "The most directly usable AEO asset. AI scans FAQ content to find direct answers to buyer questions. A strong FAQ page becomes a citation source. Every question you fail to answer is a question AI answers by recommending a competitor who does.",
  },
  {
    feature: "Case Study Page",
    detail:
      "The format AI trusts most for proof. One specific, structured case study with real numbers outperforms twenty generic testimonials.",
  },
  {
    feature: "Individual Service Pages",
    detail:
      "One dedicated page per main service. Generic service pages perform poorly. Dedicated pages with deep, specific content are how AI identifies and recommends specialists.",
  },
  {
    feature: "Reviews & Reputation Page",
    detail:
      "AI builds a trust score from your reputation. This page gives it one structured, trusted source to cite — rather than piecing together scattered information.",
  },
  {
    feature: "Ready-to-paste schema markup with every page",
    detail:
      "The structured code behind the page that tells AI systems exactly what they're reading — your prices, your FAQs, your reviews. It's one of the highest-leverage technical moves a website can make, and most agencies either skip it or charge extra. Every page arrives with its schema block ready to hand to your developer.",
  },
];

const steps = [
  {
    title: "You enquire",
    body: 'Email rob@opsdeck.co.uk with "AEO Page Build". We send your intake form the same day.',
  },
  {
    title: "Complete the intake form",
    body: "Your real prices, review counts, credentials, service areas, and the questions your customers ask most. Real numbers only — vague inputs produce vague pages AI will not cite. Takes 20–30 minutes.",
  },
  {
    title: "We build all nine pages",
    body: "Every page written specifically for your business. Your pricing with your real figures. Your reviews with your actual ratings. Delivered within 7 working days of your completed intake.",
  },
  {
    title: "You receive your document and publish",
    body: "One formatted document. All nine pages, clearly labelled. Each includes a note on where it belongs on your site and its ready-to-paste schema markup. Hand to your developer or publish directly.",
  },
];

const comparisonRows = [
  { without: "You write the pages yourself — from scratch", with: "Written using a proven AEO framework — done for you" },
  { without: "Generic content that describes services vaguely", with: "Specific content built around your real prices, reviews, and proof" },
  { without: "No structure — AI cannot extract answers", with: "Every page structured so AI can find, read, and cite it" },
  { without: "No schema markup — AI guesses what your page means", with: "Schema markup included with every page — the technical trust layer most providers skip" },
  { without: "5 generic FAQ questions", with: "Minimum 20 questions — the ones buyers actually ask AI" },
  { without: "No pricing transparency", with: "Pricing page built first — the single highest-impact AEO page" },
  { without: "Takes weeks — if it gets done at all", with: "Delivered within 7 working days of completed intake" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO Page Build — 9 Pages",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/aeo-page-build",
  offers: { "@type": "Offer", price: "397", priceCurrency: "GBP" },
};

export default function AEOPageBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="AEO Page Build — 9 Pages"
          title="AI Is Recommending Your Competitors. This Changes That."
          lead="Nine complete AEO-optimised pages written for your business — ready to publish."
          sub="£397. Done for you. Delivered in 7 working days."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
        />

        <PainSection eyebrow="Sound familiar?" painPoints={painPoints} />

        <HookSection eyebrow="The real problem" body={hookBody} />

        <WhatYouGetTable title="What You Get" rows={features} />

        <HowItWorksSteps title="How It Works" steps={steps} />

        <ComparisonTable title="What Makes This Different" rows={comparisonRows} />

        <CTABlock
          title="Ready to Be Recommended?"
          body="£397. 9 pages. Done for you. 7-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "AEO Page Build". Intake form sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
