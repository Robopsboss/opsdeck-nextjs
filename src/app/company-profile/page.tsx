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

const STRIPE_URL = "https://buy.stripe.com/dRm8wQcoVb2hbbJ9Bj5Rm08";
const CTA_LABEL = "Get Started — £147";

const pageTitle = "Company Profile Pack | OpsDeck";
const pageDescription =
  "A professional capability statement and project showcase for trades businesses — written for commercial conversations. £147. PDF and Word. Delivered in 5 working days.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/company-profile" },
  openGraph: {
    url: "https://opsdeck.co.uk/company-profile",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painPoints = [
  "The last time someone asked you to send over your company information — what did you actually send?",
  "A link to your website and hope? A photo of a recent job and a quick email?",
  "How many of those conversations quietly ended because the answer wasn't professional enough to move forward?",
];

const hookBody =
  "A facilities manager asks you to send something over before they consider you for a contract. A principal contractor wants your capability statement before adding you to their approved supplier list. These moments happen — and the businesses that win from them are the ones that have something professional ready to send. Most small service businesses have nothing, or they forward a website link which rarely does the job. A professional company profile says: we have been doing this long enough to know what a commercial client needs to see.";

const features = [
  {
    feature: "About Us section",
    detail:
      "Who you are, how long you have been trading, what you specialise in. Written to position you as a credible, established operation — not a sole trader with a van.",
  },
  {
    feature: "Credentials and accreditations",
    detail:
      "Your certifications, memberships, insurance level, and relevant qualifications — the section that tells a principal contractor you are approved-supplier-list ready.",
  },
  {
    feature: "Recent Projects — two or three mini case studies",
    detail:
      "Project type, location, scope, and outcome. Specific results do more selling than any About Us section ever will.",
  },
  {
    feature: "Professional PDF and Word",
    detail:
      "Two pages. Clean, professional layout. PDF for sending. Word version for updating as your credentials and case studies grow.",
  },
];

const steps = [
  {
    title: "Order and complete the intake form",
    body: 'Email rob@opsdeck.co.uk with "Company Profile Pack". Form covers your services, credentials, four reasons clients choose you, and two or three recent projects. Takes 20 minutes.',
  },
  {
    title: "We write your profile",
    body: "Every claim backed by your specific details. Every case study from your project information.",
  },
  {
    title: "You receive PDF and Word and start sending",
    body: "Delivered within 5 working days. The next time someone asks you to send something over — you have something worth sending.",
  },
];

const comparisonRows = [
  { without: "Send a link to the website and hope", with: "Two-page PDF written for the commercial conversation — not a general audience" },
  { without: "No credentials section — have to send them separately", with: "Credentials, accreditations, and insurance in one place" },
  { without: "No proof of previous work", with: "Two or three mini case studies — project type, scope, and outcome" },
  { without: "Nothing to send when someone asks", with: "Professional PDF ready to attach to any email in seconds" },
  { without: "Updated never — or built from scratch every time", with: "Word version — update credentials and case studies as your business grows" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Company Profile Pack",
  description: pageDescription,
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/company-profile",
  offers: { "@type": "Offer", price: "147", priceCurrency: "GBP" },
};

export default function CompanyProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <ProductHero
          eyebrow="Company Profile Pack"
          title="They Ask You to Send Something Over. You Have Nothing Worth Sending."
          lead="A professional capability statement and project showcase — everything a commercial client needs to see before they decide whether to call you."
          sub="£147. Word and PDF. Delivered in 5 working days."
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
          title="Ready to Have Something Worth Sending?"
          body="£147. Capability statement and project showcase. PDF and Word. 5-day delivery."
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
              {" "}with RAMS and Compliance Pack for £497.
            </>
          }
        />

        <SiteFooter />
      </div>
    </>
  );
}
