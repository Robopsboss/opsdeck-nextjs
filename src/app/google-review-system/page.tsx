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

const STRIPE_URL = "https://buy.stripe.com/dRm8wQgFb4DT1B9fZH5Rm05";
const CTA_LABEL = "Get Started — £147";

const pageTitle = "Google Review System | OpsDeck";
const pageDescription =
  "A done-for-you review request system for trades businesses — direct link, templates in your voice, follow-up sequence, and response guides. £147. Ready in 3 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/google-review-system" },
  openGraph: {
    url: "https://opsdeck.co.uk/google-review-system",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "How many of your last ten completed jobs resulted in a Google review?",
  "When someone searches your trade in your area, is the first thing they see your 12 reviews — or a competitor with 94?",
  "If a potential client compared you side by side, would your review count make them more or less likely to call you first?",
];

const hookBody =
  "The businesses with 80, 90, or 100 Google reviews are not doing better work than you. In almost every case, they are just better at asking. They have a direct link, a message template, and a habit of sending both within 24 hours of finishing a job. That is the entire difference between 12 reviews and 94. Reviews compound — Google ranks businesses with more reviews higher in local search, clients trust them more before they call, and AI search tools weight review volume as a primary trust signal.";

const features = [
  {
    feature: "Your direct Google review link — set up and tested",
    detail:
      "When a client clicks it they go directly to the review form. One click and they're writing. This single change doubles response rates compared to asking verbally.",
  },
  {
    feature: "Text message template — written in your voice",
    detail:
      "Sent within 24 hours of completing a job. Personal, brief, with your direct link. Every day you wait is a day the feeling fades and the review doesn't happen.",
  },
  {
    feature: "One follow-up message for non-responders",
    detail:
      "Sent 5–7 days after the first request. No pressure — just a reminder. Most second conversions come from this message.",
  },
  {
    feature: "Negative review response template",
    detail:
      "How to acknowledge, de-escalate, and take the conversation offline. Your response to a negative review is read by future clients as much as the review itself.",
  },
  {
    feature: "One-page system guide",
    detail:
      "Where to save the link, how to brief your team, how to make the request automatic after every completed job.",
  },
];

const steps = [
  {
    title: "Order and send your details",
    body: 'Email rob@opsdeck.co.uk with "Google Review System". Short intake form — five minutes.',
  },
  {
    title: "We build your system",
    body: "Direct review link set up and tested. Every template written in your voice. Delivered as a single Word document within 3 working days.",
  },
  {
    title: "Send your first request after the next job",
    body: "Copy the template, personalise the name and job, paste your link, send. The system runs from there — same message, same link, same habit, after every job.",
  },
];

const comparisonRows = [
  { without: "Ask verbally — forgotten by the time they get home", with: "Direct link sent within 24 hours — one click to the review form" },
  { without: 'Send a vague "please leave us a review" message', with: "Personal message written in your voice with a direct link — converts significantly higher" },
  { without: "No follow-up for non-responders", with: "One follow-up message at 5–7 days — the right tone, the right timing" },
  { without: "No consistent process", with: "One-page system guide — the habit, the setup, how to brief your team" },
  { without: "Written yourself when you get round to it", with: "Written in your voice, for your service, ready to use the same day it arrives" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Review System",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/google-review-system",
  offers: { "@type": "Offer", price: "147", priceCurrency: "GBP" },
};

export default function GoogleReviewSystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Google Review System"
          title="Your Clients Are Happy. None of Them Have Left a Review."
          lead="A done-for-you review request system — direct link, templates, follow-up sequence, and response guides — ready to use after every completed job."
          sub="£147. Done for you. Delivered in 3 working days."
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
          title="Ready to Start Collecting Reviews?"
          body="£147. Direct link. Templates in your voice. System guide. 3-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "Google Review System". Intake form sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
