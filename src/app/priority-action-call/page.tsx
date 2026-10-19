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

const STRIPE_URL = "https://buy.stripe.com/00w4gA4Wt4DTfrZdRz5Rm02";
const CTA_LABEL = "Get Started — £97";

const pageTitle = "Priority Action Call | OpsDeck";
const pageDescription =
  "A 30-minute strategy call built around your business. Rob reviews how you win and run work before the call, identifies your single highest-priority area and tells you exactly what to fix first. £97.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/priority-action-call" },
  openGraph: {
    url: "https://opsdeck.co.uk/priority-action-call",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "How many times have you started fixing something, only to realise three months later it wasn't the real problem?",
  "How much time have you spent improving the wrong thing while the actual issue kept costing you?",
  "How much longer can you afford to keep working on your business without knowing what is actually holding it back?",
];

const hookBody =
  "You know some things in the business are working and some aren't. The problem is not motivation — it is clarity. Without someone who has reviewed hundreds of these results telling you which red area is costing you the most, the report is information without direction. That is where most businesses stop. Six months later nothing has changed and the same problems are still running.";

const features = [
  {
    feature: "Pre-call review of your website, Google profile and how you win work",
    detail:
      "Rob reads your full results before you speak. You don't spend the first ten minutes explaining your situation — the call starts with him already knowing what is broken.",
  },
  {
    feature: "Your single highest-priority area identified",
    detail:
      "Not a list of everything that needs doing. The one area that, fixed first, creates the most immediate improvement. Without this, most business owners spend months fixing the second or third problem while the first one keeps bleeding.",
  },
  {
    feature: "A specific recommendation for what to do",
    detail:
      'Not "improve your marketing." A concrete next step — what to do, in what order, and why it matters more than the other areas.',
  },
  {
    feature: "Honest assessment — what is fixable quickly vs what takes time",
    detail:
      "You leave knowing which is which so you can act immediately on what is actionable.",
  },
];

const steps = [
  {
    title: "Pay for your call",
    body: "Complete payment on this page. It takes a minute.",
  },
  {
    title: "Tell Rob about your business",
    body: 'Email rob@opsdeck.co.uk with your website address and a couple of lines on what feels stuck. Subject line: "Priority Action Call". Rob reviews it before you speak.',
  },
  {
    title: "Your 30-minute call",
    body: "Rob walks you through his findings, names your highest-priority area, and gives you a specific recommendation. Calls booked within 3 working days of payment.",
  },
];

const comparisonRows = [
  { without: "Read the report and try to figure it out yourself", with: "30 minutes with someone who reviewed your specific results before the call" },
  { without: "Generic business advice from Google", with: "Specific to your business and your context" },
  { without: "Try to fix everything at once", with: "One priority identified — the change that creates the most momentum first" },
  { without: "Spend months on the wrong problem", with: "Leave knowing exactly what to fix first and why" },
  { without: "A sales call disguised as advice", with: "A working session — the output is a recommendation, not a pitch" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Priority Action Call",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/priority-action-call",
  offers: { "@type": "Offer", price: "97", priceCurrency: "GBP" },
};

export default function PriorityActionCallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Priority Action Call"
          title="You Know Something Is Off. You Just Don't Know Which Problem to Fix First."
          lead="A focused 30-minute strategy call — Rob reviews your business before the call and tells you exactly what is costing you the most and what to do about it."
          sub="£97. 30 minutes. No fluff."
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
          title="Ready to Know What to Fix First?"
          body="£97. One call. One clear priority. One next step."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note="Run crews on site? Take the free 3-minute Field Ops Check at check.opsdeck.co.uk first."
        />

        <SiteFooter />
      </div>
    </>
  );
}
