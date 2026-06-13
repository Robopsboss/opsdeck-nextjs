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

const STRIPE_URL = "https://buy.stripe.com/00wdRacoV4DT0x58xf5Rm06";
const CTA_LABEL = "Get Started — £147";

const pageTitle = "LinkedIn Profile Optimisation | OpsDeck";
const pageDescription =
  "A complete LinkedIn profile rewrite for trades business owners — written in your voice, structured to convert visitors into conversations. £147. Delivered in 5 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/linkedin-optimisation" },
  openGraph: {
    url: "https://opsdeck.co.uk/linkedin-optimisation",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "When did you last look at your LinkedIn profile through the eyes of a potential client who has never heard of you?",
  "What do they find in the first ten seconds — and does it give them a reason to stay or a reason to move on?",
  "How many people have visited your profile this month and left without making contact?",
];

const hookBody =
  "Most business owners on LinkedIn have a profile that reads like a CV. Job title. List of companies. A vague about section that says nothing a potential client needs to know. The problem is the mental model. A CV is written to impress a hiring manager. Your LinkedIn profile is read by potential clients and referral partners deciding whether you are worth a conversation. The moment someone sees your name — in a search, in a comment, in a connection request — they go to your profile. What they find in the next ten seconds determines whether they stay or move on.";

const features = [
  {
    feature: "Headline — rewritten",
    detail:
      'The most important line on your profile. Appears in search results, comment sections, and connection requests. Most headlines say "Director." Yours will say something that makes the right person stop.',
  },
  {
    feature: "About section — rewritten",
    detail:
      'Opens with the client\'s problem, not your history. Closes with a specific result and a clear call to action. A profile that opens with "I am passionate about" loses the reader before the second sentence.',
  },
  {
    feature: "Experience section — current role",
    detail:
      "Rewritten with a descriptive title and bullet points that each describe a result. Starts with a verb. Ends with a reason to reach out.",
  },
  {
    feature: "First-week action guide",
    detail:
      "Three specific actions in the first seven days. Who to connect with, what to switch on, where to point people. Not a course — one page, three moves.",
  },
];

const steps = [
  {
    title: "Order and receive the intake form",
    body: 'Email rob@opsdeck.co.uk with "LinkedIn Profile Optimisation". Form sent the same day — covers your clients, results, background, voice, and goals for LinkedIn.',
  },
  {
    title: "Complete the intake form",
    body: "Takes 15–20 minutes. The more specific you are with real results and real language, the more the profile sounds like you.",
  },
  {
    title: "We write your profile and action guide",
    body: "Every line in your voice, for your clients. Delivered within 5 working days.",
  },
  {
    title: "You paste it in and follow the action guide",
    body: "Ten minutes to update your profile. Three first-week actions. Live and working from day one.",
  },
];

const comparisonRows = [
  { without: "Rewrite it yourself — generic LinkedIn advice, no framework", with: "Built from your intake answers, written in your voice, structured to convert" },
  { without: '"Director" or "Founder" as a headline', with: "Headline that says what you do, who for, and one proof point" },
  { without: '"I am passionate about..." as an about section opener', with: "Opens with the client's problem — makes the right person stop and keep reading" },
  { without: "Experience section that reads like a CV", with: "Bullet points describing results and deliverables — starts with a verb" },
  { without: "No guidance on what to do after the rewrite", with: "First-week action guide — three specific moves that make the profile work from day one" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn Profile Optimisation",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/linkedin-optimisation",
  offers: { "@type": "Offer", price: "147", priceCurrency: "GBP" },
};

export default function LinkedInOptimisationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="LinkedIn Profile Optimisation"
          title="Every Day Someone Visits Your LinkedIn. Every Day Your Profile Sends Them Away."
          lead="Your profile needs to do sales work — attracting the right clients and establishing authority before you say a word."
          sub="£147. Written in your voice. Delivered in 5 working days."
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
          title="Ready to Make Your Profile Work?"
          body="£147. Written in your voice. First-week action guide included. 5-day delivery."
          ctaLabel={CTA_LABEL}
          ctaHref={STRIPE_URL}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with "LinkedIn Profile Optimisation". Intake form sent the same day.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
