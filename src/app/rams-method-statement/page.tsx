import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import ProductHero from "@/components/product/ProductHero";
import PainSection from "@/components/product/PainSection";
import HookSection from "@/components/product/HookSection";
import WhatYouGetTable from "@/components/product/WhatYouGetTable";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import ComparisonTable from "@/components/product/ComparisonTable";
import CTABlock from "@/components/product/CTABlock";

const STRIPE_URL = "https://buy.stripe.com/28E4gA3Sp4DTa7F6p75Rm0a";
const CTA_LABEL = "Get Started — £247";

const pageTitle = "RAMS & Method Statement Pack | OpsDeck";
const pageDescription =
  "A trade-specific risk assessment and method statement written for your business — ready to submit as PDF, editable for every future project in Word. £247. 5-day delivery.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/rams-method-statement" },
  openGraph: {
    url: "https://opsdeck.co.uk/rams-method-statement",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "If a principal contractor called you today and asked to see your RAMS before approving you for a contract — could you send them something that would pass scrutiny?",
  "Have you ever lost a commercial job because your paperwork was not up to standard?",
  "How many commercial contracts are you simply not quoting for because you know the compliance documents aren't ready?",
];

const hookBody =
  "A principal contractor asks to see your RAMS before they will let you on site. You send them something you downloaded from Google two years ago with your logo on it. They look at it for thirty seconds and tell you it does not meet their requirements. The contract goes to someone else. This happens more than it should — not because the business cannot do the work, but because the paperwork does not reflect the trade or the specific risks involved. A generic template does not demonstrate competence. It demonstrates that you have not thought about the job.";

const features = [
  {
    feature: "Risk assessment — trade-specific",
    detail:
      "Hazard identification and risk ratings specific to your trade activities — not generic office hazards. A specific RAMS tells a principal contractor you understand the job. A generic one tells them you downloaded something.",
  },
  {
    feature: "Method statement — written for your work",
    detail:
      "Step-by-step sequence of works written around how your business actually operates. Scope, operatives, qualifications, plant and equipment, site rules.",
  },
  {
    feature: "Emergency arrangements section",
    detail:
      "First aider, first aid kit, nearest hospital, fire procedure. The section most generic templates leave blank — completed with your specific details.",
  },
  {
    feature: "PDF — ready to submit",
    detail:
      "Professionally formatted. Looks like a document from a business that knows what it is doing — because the difference between shortlisted and rejected is exactly that.",
  },
  {
    feature: "Word document — editable for every project",
    detail:
      "Update project details and operative list for each new job. The structure stays. Every commercial quote you send from here has the paperwork ready before it is asked for.",
  },
];

const steps = [
  {
    title: "Order and complete the intake form",
    body: 'Email rob@opsdeck.co.uk with "RAMS & Method Statement Pack". Intake covers your trade, work activities, team, qualifications, PPE, and specific hazards. Takes 15–20 minutes.',
  },
  {
    title: "We write your RAMS",
    body: "Every hazard specific to your activities. Every control measure reflecting how you actually manage risk. Not a template with your name on it.",
  },
  {
    title: "You receive PDF and Word versions",
    body: "Delivered within 5 working days. PDF ready to submit. Word document yours to update for every future project.",
  },
  {
    title: "You submit with confidence",
    body: "Send the PDF to the principal contractor as part of your pre-works package.",
  },
];

const comparisonRows = [
  { without: "Generic template — same hazards for every trade", with: "Trade-specific risk assessment — the actual hazards your operatives face" },
  { without: "Placeholder scope of works", with: "Method statement written around how your jobs actually run" },
  { without: "Blank emergency arrangements section", with: "Completed with your specific details — first aider, hospital, muster point" },
  { without: "No operative sign-off page", with: "Sign-off page included — required by most principal contractors" },
  { without: "PDF only — cannot be updated per project", with: "PDF and Word — update the Word version for every new project in minutes" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RAMS & Method Statement Pack",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/rams-method-statement",
  offers: { "@type": "Offer", price: "247", priceCurrency: "GBP" },
};

export default function RAMSMethodStatementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="RAMS & Method Statement Pack"
          title="The Contract Is There. Your Paperwork Is Costing You It."
          lead="A complete, trade-specific risk assessment and method statement — written for your business, ready to submit, and editable for every future project."
          sub="£247. PDF and Word. Delivered in 5 working days."
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
          title="Ready to Submit With Confidence?"
          body="£247. Trade-specific. PDF and Word. Ready to submit. 5-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note={
            <>
              Also available as part of the{" "}
              <Link
                href="/commercial-readiness"
                className="text-cta-foreground font-medium underline hover:no-underline"
              >
                Commercial Readiness Pack
              </Link>
              {" "}— RAMS, Compliance Pack, and Company Profile for £497.
            </>
          }
        />

        <SiteFooter />
      </div>
    </>
  );
}
