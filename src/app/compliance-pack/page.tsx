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

const STRIPE_URL = "https://buy.stripe.com/4gM7sM74B4DTbbJ5l35Rm0b";
const CTA_LABEL = "Get Started — £197";

const pageTitle = "Compliance Document Pack | OpsDeck";
const pageDescription =
  "Trade-specific H&S policy, COSHH assessment, and three toolbox talk templates — written for your business, ready to submit. £197. Delivered in 5 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/compliance-pack" },
  openGraph: {
    url: "https://opsdeck.co.uk/compliance-pack",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "If a commercial client asked for your Health and Safety policy tomorrow morning, how long would it take you to find something worth sending?",
  "If you have one, when did you last look at it — and does it actually reflect how you operate?",
  "How many approved supplier lists have you not made it onto because the compliance paperwork wasn't ready?",
];

const hookBody =
  "A principal contractor asks for your H&S policy before they will put you on their approved supplier list. A commercial client wants to see your COSHH assessments before you start on site. These are not unusual requests — they are standard requirements for any trades business doing commercial work or managing a team. Most small businesses either have nothing at all, or a generic policy downloaded from a template website that does not reflect their trade or activities. Experienced commercial clients can tell the difference immediately.";

const features = [
  {
    feature: "Health & Safety Policy — trade-specific",
    detail:
      "Statement of intent, responsibilities, risk assessment process, accident reporting, first aid. Written for your trade and signed by your director. A generic downloaded policy tells a commercial client you've never thought about H&S seriously.",
  },
  {
    feature: "COSHH Assessment Template",
    detail:
      "One completed assessment for your most commonly used substance, plus a blank template for each additional one. Hazard information, exposure routes, control measures, and PPE.",
  },
  {
    feature: "Toolbox Talk — Working at Height",
    detail:
      "Structured 10-minute briefing for operatives working above 2 metres. Sign-off sheet included. That signed sheet is your evidence if anything is ever disputed.",
  },
  {
    feature: "Toolbox Talk — Manual Handling",
    detail:
      "Risks of improper handling, correct technique, when to ask for help. Sign-off sheet included.",
  },
  {
    feature: "Toolbox Talk — Hand & Power Tools",
    detail:
      "Pre-use checks, guards, PPE, storage, and reporting damaged tools. Sign-off sheet included.",
  },
];

const steps = [
  {
    title: "Order and complete the intake form",
    body: 'Email rob@opsdeck.co.uk with "Compliance Document Pack". Covers your trade activities, team structure, first aider, and substances you regularly use. Takes 15 minutes.',
  },
  {
    title: "We write your documents",
    body: "Your H&S policy, COSHH assessment, and all three toolbox talks, specific to your trade and activities.",
  },
  {
    title: "You receive Word and PDF versions",
    body: "Delivered within 5 working days. PDFs ready to submit. Word versions to update as your team or activities change.",
  },
  {
    title: "Use toolbox talks before relevant work",
    body: "Brief your team in 10 minutes. Operatives sign the sheet. You have a record that the briefing took place.",
  },
];

const comparisonRows = [
  { without: "Same generic policy used by every trade", with: "Written for your specific trade and actual activities" },
  { without: "Placeholder fields left blank or irrelevant", with: "Every field completed with your specific details" },
  { without: "No toolbox talks — briefings happen informally", with: "Three structured toolbox talks with operative sign-off sheets" },
  { without: "H&S policy that doesn't reflect how you work", with: "Policy that matches your team structure, first aider, and review process" },
  { without: "Documents that look like this morning's download", with: "Documents that look like they belong to a business that takes H&S seriously" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Compliance Document Pack",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/compliance-pack",
  offers: { "@type": "Offer", price: "197", priceCurrency: "GBP" },
};

export default function CompliancePackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Compliance Document Pack"
          title="Someone Asks for Your H&S Policy. You Have Nothing to Send."
          lead="A complete compliance pack — H&S policy, COSHH assessments, and three toolbox talk templates — written for your trade and ready to use."
          sub="£197. Word and PDF. Delivered in 5 working days."
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
          title="Ready to Have the Documents Ready When Asked?"
          body="£197. H&S policy, COSHH assessment, three toolbox talks. Word and PDF. 5-day delivery."
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
              {" "}with RAMS and Company Profile for £497.
            </>
          }
        />

        <SiteFooter />
      </div>
    </>
  );
}
