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

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Sales Process Document")}`;
const CTA_LABEL = "Book a Consultation";

const pageTitle = "Sales Process Document | OpsDeck";
const pageDescription =
  "A bespoke sales process built around how your business actually sells — first response scripts, follow-up sequence, and objection handling in your voice. £597.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/sales-process" },
  openGraph: {
    url: "https://opsdeck.co.uk/sales-process",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "Think about the last five quotes you sent that went quiet — what happened between sending the quote and the silence?",
  "When did you last follow up more than once?",
  'When a prospect says "I need to think about it" — what do you actually say next, and do you know whether it works?',
];

const hookBody =
  "Most businesses lose work they should be winning. The enquiry comes in, the meeting goes well, the quote goes out — and then silence. The problem is rarely the quality of the work. It is what happens before, during, and after the sales conversation. Most businesses are winging it — relying on personality, hoping for the best, with no system and no consistency. The businesses that win consistently focus on what happens before the room — the reputation, the reviews, the credibility signals that mean prospects have already half-decided before they call.";

const features = [
  {
    feature: "First response scripts — phone and email",
    detail:
      "Written in your voice for the moment an enquiry lands. The first 24 hours after an enquiry determine whether it converts. Most businesses have no consistent response — they just reply when they get round to it.",
  },
  {
    feature: "Five-stage follow-up sequence",
    detail:
      "Timing and exact messaging. Most work is won or lost here — not in the meeting, not in the quote, but in what happens after the quote goes out.",
  },
  {
    feature: "Objection handling guide",
    detail:
      "Your four most common objections answered in your voice. Price, timing, competitors, silence. Every one has a response that works. Most businesses are making it up in the moment and losing work they should be closing.",
  },
  {
    feature: "Consultation structure",
    detail:
      "A 30–45 minute framework that consistently moves a prospect towards a decision.",
  },
  {
    feature: "30-day check-in call",
    detail:
      "At 30 days — review what is working, what needs adjusting, and what objections have come up. Updates within the 30-day window at no extra cost.",
  },
];

const steps = [
  {
    title: "You enquire",
    body: 'Email rob@opsdeck.co.uk with "Sales Process Document". Pre-consultation questions sent the same day.',
  },
  {
    title: "Complete pre-consultation questions",
    body: "Your digital footprint, current follow-up process, how you run discovery meetings, common objections, and who your best and worst clients look like.",
  },
  {
    title: "60-minute consultation call",
    body: "A working session, not a sales pitch. Every stage of your current process reviewed — what is working, where leads are dropping, what your customers actually say.",
  },
  {
    title: "You receive your finished document",
    body: "Within 7 working days. Every script in your voice. Every objection handled in your language. Team-ready from the moment it arrives.",
  },
  {
    title: "30-day check-in",
    body: "Booked before we send the document. Review what moved and what needs adjusting.",
  },
];

const comparisonRows = [
  { without: "Generic scripts you adapt yourself", with: "Written in your voice, for your service, your objections" },
  { without: "Focuses on the conversation only", with: "Starts before the conversation — pre-sales influence first" },
  { without: "No follow-up or accountability", with: "30-day check-in built in" },
  { without: "You still have to implement from scratch", with: "Delivered ready to use — team-ready" },
  { without: "One size fits all", with: "Specific to your service, your customers, your objections" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sales Process Document",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/sales-process",
  offers: { "@type": "Offer", price: "597", priceCurrency: "GBP" },
};

export default function SalesProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Sales Process Document"
          title="You're Quoting the Right Work. Something Is Happening Between the Quote and the Answer."
          lead="A complete, bespoke sales process built around how your business actually sells — starting before the first conversation even takes place."
          sub="£597. 60-minute consultation included. Delivered in 7 working days."
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
          title="Ready to Stop Winging It?"
          body="£597. 60-minute consultation. 7-day delivery. 30-day check-in call."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "Sales Process Document". Pre-consultation questions sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
