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

const STRIPE_URL = "https://buy.stripe.com/4gM00k9cJ8U97Zx14N5Rm07";
const CTA_LABEL = "Get Started — £397";

const pageTitle = "Website Optimisation Pack | OpsDeck";
const pageDescription =
  "A full audit, needle mover identification, and content rewrite for your existing website — no rebuild required. Delivered in 5 working days. £397.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/website-optimisation" },
  openGraph: {
    url: "https://opsdeck.co.uk/website-optimisation",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "When did you last get an enquiry from a complete stranger who found you through Google?",
  "If you search your own service in your town, does your website appear — and if it does, does it give a visitor any reason to contact you instead of the next result?",
  "How many people have visited your website this month and left without getting in touch?",
];

const hookBody =
  "You have a website. It went live and nothing much happened. A trickle of enquiries — mostly from people who already knew you. The temptation is to blame the platform or the design. But the platform is not the problem. The design is not the problem. A website written for everyone speaks loudly to no one. It describes the business rather than solving the reader's problem. And almost always, it avoids the one question every potential client wants answered before anything else: how much does this cost? These are not design problems. They are content problems. And they can be fixed without rebuilding a thing.";

const features = [
  {
    feature: "Needle mover identification",
    detail:
      "The three changes that would have the biggest immediate impact on enquiries — identified before a single word is touched.",
  },
  {
    feature: "Homepage headline and opening paragraph rewritten",
    detail:
      "Specific and written for your target client. A stranger lands on it and knows immediately what you do, who for, and why they should stay.",
  },
  {
    feature: "Pricing page structure and copy",
    detail:
      "Transparent, specific, and honest. Hiding your prices doesn't protect you from competitors. It sends every serious buyer to one who doesn't hide theirs.",
  },
  {
    feature: "Service pages rewritten",
    detail:
      "Written to answer the questions buyers actually ask before they commit — not a description of what you do.",
  },
  {
    feature: "Meta titles and descriptions for all key pages",
    detail:
      "What appears in search results determines whether the right person clicks. Most businesses leave this blank or let it default to something useless.",
  },
];

const steps = [
  {
    title: "You enquire",
    body: 'Email rob@opsdeck.co.uk with "Website Optimisation Pack". Intake form sent the same day — your URL, services, pricing approach, and best clients.',
  },
  {
    title: "We audit your site",
    body: "A full 15-point review of your current site. Every area rated pass, fail, or partial with a specific action noted.",
  },
  {
    title: "We identify your needle movers",
    body: "The three changes that create the most immediate impact. In most cases, pricing transparency is one of them.",
  },
  {
    title: "We rewrite the key pages and deliver",
    body: "Homepage, pricing, service pages, and meta descriptions. One formatted document. Delivered within 5 working days of your completed intake.",
  },
];

const comparisonRows = [
  { without: "Rewrite at random and hope something lands", with: "Three specific changes prioritised before a single word is touched" },
  { without: "Generic copy that describes the business to everyone", with: "Content written specifically for your best client — in their language, about their problem" },
  { without: "No pricing on the site — clients have to call", with: "Pricing page rewritten to be transparent, specific, and honest — the highest-trust signal online" },
  { without: "No way of knowing whether changes made any difference", with: "30 and 90 day test and measure plan built in" },
  { without: "Weeks of your time — if it ever gets done", with: "Delivered in 5 working days" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Optimisation Pack",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/website-optimisation",
  offers: { "@type": "Offer", price: "397", priceCurrency: "GBP" },
};

export default function WebsiteOptimisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Website Optimisation Pack"
          title="Your Website Is Live. It's Just Not Working."
          lead="A full audit, needle mover identification, and content rewrite — done for you in 5 working days."
          sub="£397. No rebuild required."
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
          title="Ready to Make Your Website Work?"
          body="£397. 15-point audit. Needle movers identified. Full content rewrite. 5-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "Website Optimisation Pack". Intake form sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
