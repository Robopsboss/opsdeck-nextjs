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

const STRIPE_URL = "https://buy.stripe.com/4gMdRaex3c6lfrZ4gZ5Rm03";
const CTA_LABEL = "Get Started — £297";

const pageTitle = "Google Business Profile Setup & Optimisation | OpsDeck";
const pageDescription =
  "A fully set up and optimised Google Business Profile for trades businesses. Every field, every category, direct review link, and handover guide. £297. Delivered in 5 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/gbp-setup" },
  openGraph: {
    url: "https://opsdeck.co.uk/gbp-setup",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "When someone in your area typed your service into Google this morning, did they find you or the business down the road?",
  "If they found you, was your profile complete enough to make them call?",
  "How many potential clients have clicked on a competitor with more photos, more reviews, and all the right information?",
];

const hookBody =
  "Most small businesses either have no Google Business Profile at all, or one that was set up years ago and never touched since. Wrong address. Missing services. No photos. No review link. Every one of those gaps is a reason for Google to show someone else instead of you — and a reason for a potential client to click away if they do find you. Google actively rewards profiles that are complete, consistent, and regularly updated. An incomplete profile doesn't just underperform. It tells Google you're not serious.";

const features = [
  {
    feature: "Primary and additional categories set correctly",
    detail:
      "Category selection directly affects which searches your profile appears in. Most businesses use one generic category. The right combination significantly increases visibility.",
  },
  {
    feature: "Professional business description written for you",
    detail:
      "Written for your specific trade, location, and best client — not a generic paragraph. The description that appears in search results, written to convert.",
  },
  {
    feature: "Direct review link — created and tested",
    detail:
      "The link you send to every client after a completed job. One click takes them to the review form. Without it, most happy clients simply never get around to it.",
  },
  {
    feature: "NAP consistency confirmed",
    detail:
      "Name, Address, Phone confirmed as identical across your website and Google. One mismatched phone number is enough to cost you position in local search.",
  },
  {
    feature: "Handover document",
    detail:
      "Everything done, your direct review link, and a weekly and monthly guide for keeping the profile active. Delivered as a PDF.",
  },
];

const steps = [
  {
    title: "Order and complete the intake form",
    body: 'Email rob@opsdeck.co.uk with "GBP Setup & Optimisation". Short form covering your business details, services, service area, and hours. Takes ten minutes.',
  },
  {
    title: "Grant access",
    body: "For a full setup, you grant access via an email invitation — no risk to your account ownership.",
  },
  {
    title: "We complete your profile",
    body: "Every field set. Description written. Your photos uploaded (you supply them — guidance on what to shoot included). Review link created and tested. NAP confirmed. Delivered within 5 working days.",
  },
  {
    title: "You receive your handover document",
    body: "PDF confirming everything done, your direct review link, and your ongoing guide.",
  },
];

const comparisonRows = [
  { without: "Profile shows up but without enough information to convert", with: "Every field complete — potential clients get everything they need to call" },
  { without: "Wrong or missing categories — appears in the wrong searches", with: "Primary and additional categories set correctly for maximum relevant visibility" },
  { without: "No business description, or a generic one", with: "Professional description written for your trade, location, and ideal client" },
  { without: "No review link — clients have to search for it themselves", with: "Direct review link created, tested, and ready to send after every completed job" },
  { without: "NAP inconsistency across website and Google", with: "NAP confirmed identical — trust signal established for Google and AI search tools" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Setup & Optimisation",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/gbp-setup",
  offers: { "@type": "Offer", price: "297", priceCurrency: "GBP" },
};

export default function GBPSetupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="GBP Setup & Optimisation"
          title="Your Business Is on Google. Just Not Where Anyone Can Find It."
          lead="A fully set up and optimised Google Business Profile — every field, every category, every photo, your direct review link, and a handover guide showing you how to keep it working."
          sub="£297. Done for you. Delivered in 5 working days."
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
          title="Ready to Get Found?"
          body="£297. Every field complete. Review link ready. 5-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "GBP Setup & Optimisation". We send your intake form the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
