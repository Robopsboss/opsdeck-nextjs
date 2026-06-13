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

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("6 Month Marketing Strategy")}`;
const CTA_LABEL = "Book a Consultation";

const pageTitle = "6 Month Marketing Strategy | OpsDeck";
const pageDescription =
  "A complete six month marketing plan built around your target client — 16 week content calendar, post templates in your voice, and a 3-month check-in call. £597.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/marketing-strategy" },
  openGraph: {
    url: "https://opsdeck.co.uk/marketing-strategy",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "How many of your recent posts directly led to an enquiry?",
  "Do you know which platform is actually generating interest in your business — and which is just eating your time?",
  "If you stopped posting tomorrow, would your enquiry volume change at all?",
];

const hookBody =
  'Most businesses have no marketing plan. They post when they remember, stop when they get busy, and have no clear idea what is actually generating enquiries. They try a platform, get no results, blame the platform, and move on to the next one. The problem is starting in the wrong place. Most businesses start with "what should I post?" The right question is "who am I posting for?" Get that wrong and everything else is noise — consistent, well-intentioned, time-consuming noise that produces nothing.';

const features = [
  {
    feature: "Target market definition",
    detail:
      "Your smallest viable market identified — the specific client you are speaking to loudly and specifically. Marketing to everyone is the reason most content produces nothing.",
  },
  {
    feature: "16 week content calendar",
    detail:
      "Every week mapped out — theme, content pillar, LinkedIn post topic, Facebook post topic. You will never again stare at a blank screen wondering what to post.",
  },
  {
    feature: "Post templates in your voice",
    detail:
      "Pain, prize, and news post structures written in your language — ready to adapt and publish. Not generic copy.",
  },
  {
    feature: "Test and measure framework",
    detail:
      "What to track, where to find it, and what to do with the data. The monthly review process that sharpens the strategy over time.",
  },
  {
    feature: "3-month check-in call — booked at the start",
    detail:
      "At the halfway point — review what is working, adjust what is not, and set up the second three months.",
  },
];

const steps = [
  {
    title: "You enquire",
    body: 'Email rob@opsdeck.co.uk with "6 Month Marketing Strategy". Pre-consultation questions sent the same day.',
  },
  {
    title: "Complete pre-consultation questions",
    body: "Your business, target clients, current marketing, what has generated enquiries, and what you want the next six months to achieve.",
  },
  {
    title: "45-minute consultation call",
    body: "A working session. We define your target market, nail your positioning statement, choose your platforms, and map the content approach. The document is the output, not the process.",
  },
  {
    title: "You receive your finished strategy",
    body: "Within 7 working days. Target market definition, platform strategy, 16 week calendar, post templates, and test and measure framework.",
  },
  {
    title: "3-month check-in call",
    body: "Review performance, sharpen the second half.",
  },
];

const comparisonRows = [
  { without: "No plan — post when you remember, stop when busy", with: "A complete six month system — every week planned, every platform chosen" },
  { without: "Generic content aimed at everyone", with: "Specific content built for your smallest viable market" },
  { without: "You guess what to post and when", with: "16 week calendar mapped out — theme, platform, post type" },
  { without: "No idea what is working or why", with: "Test and measure framework — monthly review built in" },
  { without: "Posts written in generic marketing language", with: "Templates written in your voice — ready to adapt and publish" },
  { without: "You figure it out alone", with: "Consultation included — strategy built with you, not handed to you" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "6 Month Marketing Strategy",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/marketing-strategy",
  offers: { "@type": "Offer", price: "597", priceCurrency: "GBP" },
};

export default function MarketingStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="6 Month Marketing Strategy"
          title="You're Posting. Nothing Is Coming Back."
          lead="A complete six month marketing plan built on proven principles — done with you, written for your business."
          sub="£597. Consultation included. Delivered in 7 working days."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
        />

        <PainSection eyebrow="Sound familiar?" painPoints={painPoints} />

        <HookSection eyebrow="The real problem" body={hookBody} />

        <WhatYouGetTable title="What You Get" rows={features} />

        <HowItWorksSteps title="How It Works" steps={steps} />

        <ComparisonTable title="What Makes This Different" rows={comparisonRows} />

        <CTABlock
          title="Ready to Stop Guessing?"
          body="£597. Consultation included. 16 week calendar. Post templates. 3-month check-in call."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "6 Month Marketing Strategy". Pre-consultation questions sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
