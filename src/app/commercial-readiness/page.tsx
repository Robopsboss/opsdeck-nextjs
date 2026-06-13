import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import ProductHero from "@/components/product/ProductHero";
import PainSection from "@/components/product/PainSection";
import HookSection from "@/components/product/HookSection";
import WhatYouGetCards from "@/components/product/WhatYouGetCards";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import ComparisonTable from "@/components/product/ComparisonTable";
import CTABlock from "@/components/product/CTABlock";

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Commercial Readiness Pack")}`;
const CTA_LABEL = "Get the Pack — £497";

const pageTitle = "Commercial Readiness Pack | OpsDeck";
const pageDescription =
  "RAMS & Method Statement, Compliance Document Pack, and Company Profile — three trade-specific documents from one intake. Everything needed for a commercial submission. £497.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/commercial-readiness" },
  openGraph: {
    url: "https://opsdeck.co.uk/commercial-readiness",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "When was the last time a principal contractor asked for all three documents in the same email — and how long did it take you to pull a response together?",
  "How many approved supplier lists are you missing from because one of the three was never ready when the other two were?",
  "If that email arrived this afternoon, could you reply today — or would the contract be gone before your paperwork was?",
];

const hookBody =
  "Commercial work is not won on price. It is won on trust. Trust is established before the first meeting — by the paperwork you can produce, the documents you can send, and the professional impression you make before anyone has set foot on your site. The businesses that win from commercial opportunities have three things ready. The businesses that lose those contracts are scrambling at the last minute — or sending something generic that signals they have never thought about it seriously.";

const cards = [
  {
    name: "RAMS & Method Statement",
    body: "Trade-specific risk assessment and method statement — your actual hazards, your actual controls, your actual sequence of works. PDF to submit immediately. Word to update per project. Required by most principal contractors before works commence.",
  },
  {
    name: "Compliance Document Pack",
    body: "H&S policy, COSHH assessment, and three toolbox talk templates — all written for your trade. Required for approved supplier lists. Evidence of a safety-conscious business before anyone sets foot on your site.",
  },
  {
    name: "Company Profile Pack",
    body: 'Two-page capability statement — who you are, your credentials, your recent projects, why you. The document that turns "can you send something over" into a shortlisted supplier.',
  },
];

const steps = [
  {
    title: "Order and complete the intake form",
    body: 'Email rob@opsdeck.co.uk with "Commercial Readiness Pack". One form captures everything needed for all three documents. Takes 15–20 minutes.',
  },
  {
    title: "We build all three documents",
    body: "RAMS, compliance pack, and company profile built in a single session from your intake. Every section specific to your trade and your business. No placeholders.",
  },
  {
    title: "You receive PDF and Word versions of all three",
    body: "Delivered within 5 working days. PDFs ready to submit immediately. Word versions yours to update as your team, credentials, and projects grow.",
  },
  {
    title: "You submit with confidence",
    body: "The next time a principal contractor asks for your RAMS, a client asks for your H&S policy, or a facilities manager asks you to send something over — you send it the same day.",
  },
];

const comparisonRows = [
  { without: "Scramble to produce paperwork when a contractor asks", with: "Three documents ready to send the same day you receive them" },
  { without: "Three separate orders, three separate intakes, three separate waits", with: "One intake. All three documents. One delivery." },
  { without: "Buy them separately at £591", with: "£497 as a bundle — saving £94" },
  { without: "Generic downloads that signal you haven't thought about it", with: "Trade-specific documents that signal the standard of the business before you set foot on site" },
  { without: "Nothing to send when a commercial client asks for your company information", with: "Professional capability statement ready to attach to any email in seconds" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Readiness Pack",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/commercial-readiness",
  offers: { "@type": "Offer", price: "497", priceCurrency: "GBP" },
};

export default function CommercialReadinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Commercial Readiness Pack"
          title="A Principal Contractor Just Asked for Your RAMS, Your H&S Policy, and a Capability Statement."
          lead="RAMS & Method Statement, Compliance Document Pack, and Company Profile — three documents, one intake, everything needed for a commercial submission."
          sub="£497. Bundle saving £94. Delivered in 5 working days."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
        />

        <PainSection eyebrow="Sound familiar?" painPoints={painPoints} />

        <HookSection eyebrow="The real problem" body={hookBody} />

        <WhatYouGetCards
          title="What You Get"
          cards={cards}
          footer="All three delivered from one intake form. You answer it once. We build all three."
        />

        <HowItWorksSteps title="How It Works" steps={steps} />

        <ComparisonTable
          title="What Makes This Different"
          withoutHeader="Without the Pack"
          withHeader="With the Commercial Readiness Pack"
          rows={comparisonRows}
        />

        <CTABlock
          title="Ready to Win the Commercial Work You Should Already Be Winning?"
          body="£497. Saving £94 on individual prices. One intake. Delivered in 5 working days."
          ctaLabel={CTA_LABEL}
          ctaHref={MAILTO}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "Commercial Readiness Pack". Intake form sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
