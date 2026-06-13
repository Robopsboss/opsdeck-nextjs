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

const STRIPE_URL = "https://buy.stripe.com/aFa7sMbkR2vLbbJ00J5Rm09";
const CTA_LABEL = "Get Started — £97";

const pageTitle = "Terms & Conditions Template | OpsDeck";
const pageDescription =
  "A trade-specific T&Cs document covering payment, scope, variations, liability, and disputes — ready to use from the day it arrives. £97. Delivered in 3 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/tcs-template" },
  openGraph: {
    url: "https://opsdeck.co.uk/tcs-template",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "Have you ever finished a job and had a client tell you that something was included when it wasn't?",
  "Have you ever had a final payment withheld over a minor snag that turned into a three-week argument?",
  "Have you ever done the work, sent the invoice, and waited — with nothing in writing to back you up?",
];

const hookBody =
  "A client says the quote included something it did not. A deposit dispute turns into a conversation you cannot win because there is nothing signed. A job runs over and the client withholds final payment claiming you never agreed a completion date. These situations happen regularly to service businesses without T&Cs. They almost never happen to businesses that have them. T&Cs are not bureaucracy. They are the document that ends arguments before they start.";

const features = [
  {
    feature: "Payment terms clause",
    detail:
      "Deposit, interim, and final payment structure. Late payment interest built in. Right to suspend works for non-payment. Without this in writing, a client who wants to delay payment has nothing stopping them.",
  },
  {
    feature: "Variations clause",
    detail:
      "Any change to agreed scope requires written agreement. No obligation to carry out variations at original rates.",
  },
  {
    feature: "Cancellation clause",
    detail:
      "What the client owes if they cancel before or after commencement. You've booked the job, ordered materials, and turned down other work — without this clause, that cost is yours to absorb.",
  },
  {
    feature: "Defects liability clause",
    detail:
      "Reporting window for workmanship defects. What you are responsible for and what you are not — fair wear and tear, third party damage, incorrect use.",
  },
  {
    feature: "Word and PDF",
    detail:
      "Word version to customise and update. PDF to attach to every quote you send from now on.",
  },
];

const steps = [
  {
    title: "Order",
    body: 'Email rob@opsdeck.co.uk with "T&Cs Template". Short intake form — your business details, payment structure, defects liability period, and insurance level. Five minutes.',
  },
  {
    title: "We complete your template",
    body: "Every field populated with your specific details. Any clause that does not apply is removed. Delivered as Word and PDF within 3 working days.",
  },
  {
    title: "Attach it to every quote from now on",
    body: 'Add one line to your quote: "This quotation is subject to our Terms and Conditions of Business, attached." Every client who accepts a quote has acknowledged your terms.',
  },
];

const comparisonRows = [
  { without: "Client disputes what was included in the quote", with: "Scope and variation clause prevents the argument before it starts" },
  { without: 'Client withholds payment — work "isn\'t finished"', with: 'Completion, payment, and defects clauses define what "finished" means' },
  { without: "No right to charge interest on late payment", with: "Late Payment Act interest built into the payment clause" },
  { without: "No process for handling changes mid-project", with: "Variation clause — written agreement required, rates re-negotiable" },
  { without: "Generic download that may not match your trade", with: "Written for service businesses — every clause relevant to how you work" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Terms & Conditions Template",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/tcs-template",
  offers: { "@type": "Offer", price: "97", priceCurrency: "GBP" },
};

export default function TCsTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Terms & Conditions Template"
          title="The Client Says It Was Included. You Have Nothing in Writing to Say Otherwise."
          lead="A trade-specific Terms & Conditions document — covering payment, scope, variations, liability, and disputes — ready to use from the day it arrives."
          sub="£97. Word and PDF. Delivered in 3 working days."
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
          title="Ready to Protect Your Business?"
          body="£97. Payment, scope, variations, liability, disputes. Word and PDF. 3-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note="Not legal advice. For contracts of significant value, have a solicitor review before first use."
        />

        <SiteFooter />
      </div>
    </>
  );
}
