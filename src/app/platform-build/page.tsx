import type { Metadata } from "next";
import { Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import ProductHero from "@/components/product/ProductHero";
import PainSection from "@/components/product/PainSection";
import HookSection from "@/components/product/HookSection";
import HowItWorksSteps from "@/components/product/HowItWorksSteps";
import ComparisonTable from "@/components/product/ComparisonTable";
import CTABlock from "@/components/product/CTABlock";

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Platform Build")}`;

const pageTitle =
  "Platform Build — Bespoke AI Platform for Trades Businesses | OpsDeck";
const pageDescription =
  "A bespoke AI platform built around how your trades business actually works — quoting, dashboard, team management, and invoicing automated. From £75/month. Free consultation first.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/platform-build" },
  openGraph: {
    url: "https://opsdeck.co.uk/platform-build",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const painQuestions = [
  "How many evenings this week did you spend on admin that should have been done during the day?",
  "If you took two days off tomorrow with no phone, what would fall through the cracks — and who would it fall on?",
  "How much work are you turning down or doing badly because the system that is supposed to support you is actually you?",
];

const features = [
  {
    feature: "Bespoke build from scratch",
    outcome: "No unused features, no gaps — built around your exact workflow",
  },
  {
    feature: "Voice or manual quoting",
    outcome: "Quotes built in minutes, not evenings",
  },
  {
    feature: "Adaptive price memory",
    outcome: "The platform remembers your materials, margins, and prices",
  },
  {
    feature: "Business dashboard",
    outcome: "Enquiries, jobs, calendar, and sales overview on one screen",
  },
  {
    feature: "Team and operative management",
    outcome: "Your team knows their schedule before they arrive on site",
  },
  {
    feature: "Automated invoicing",
    outcome: "Triggered at job completion — the payment delay disappears",
  },
  {
    feature: "Automated payment reminders",
    outcome: "You stop being the accounts department",
  },
  {
    feature: "Monthly subscription support",
    outcome: "Rob maintains and grows the platform as your business grows",
  },
];

const tiers = [
  {
    name: "AI Tools & Automation",
    monthly: "£75/month",
    setup: "£200",
    description:
      "Single-purpose automation — one specific task eliminated. The starting point.",
  },
  {
    name: "Quote Builder",
    monthly: "£100/month",
    setup: "£300",
    description:
      "Voice or manual quoting with adaptive memory. Every evening spent typing up quotes — gone.",
  },
  {
    name: "Quote Builder + Dashboard",
    monthly: "£150/month",
    setup: "£300",
    description:
      "Quoting plus full business dashboard — enquiries, jobs, calendar, sales, profit forecasting.",
    popular: true,
  },
  {
    name: "Full Operations Platform",
    monthly: "£250/month",
    setup: "£1,000",
    description:
      "Everything above plus team integration, operative management, multi-user access, fully custom workflow.",
    forTeams: true,
  },
];

const steps = [
  {
    title: "Consultation — one hour, no charge",
    body: 'Email rob@opsdeck.co.uk with "Platform Build". We arrange a one-hour walkthrough of your full workflow — every step, every bottleneck, everything that runs through you. This is a diagnostic, not a sales call.',
  },
  {
    title: "Scope of works — fixed price confirmed",
    body: "Within 5 working days you receive a complete written scope — exactly what will be built, what is not included, payment milestones, and costs. Nothing starts until you approve it in writing.",
  },
  {
    title: "Build begins — deposit paid",
    body: "Scope approved. First payment made. Build begins. Weekly updates throughout — what's done, what's next, any decisions needed from you.",
  },
  {
    title: "Two-week demo — you test it",
    body: "A working demo of the core functionality delivered for testing. You push it, you feedback in writing. One round of revisions included.",
  },
  {
    title: "Revisions, go-live, and handover",
    body: "Revisions completed. Full build tested with your real data. You sign off. Platform goes live. Full handover document and training call included.",
  },
  {
    title: "Monthly subscription — ongoing partnership",
    body: "Subscription begins from go-live. Rob maintains, monitors, and supports the platform. New functionality scoped when you're ready.",
  },
];

const comparisonRows = [
  {
    without: "Information lives in WhatsApp, your head, a spreadsheet, and a whiteboard — all out of sync",
    with: "One system. Every piece of information in one place, accessible to everyone who needs it",
  },
  {
    without: "Enquiries get missed when you're busy on site",
    with: "Enquiries logged automatically — nothing falls through the gap",
  },
  {
    without: "Quotes take hours and rely entirely on you",
    with: "Quotes built in minutes — the platform remembers your prices, materials, and margins",
  },
  {
    without: "Jobs get booked but the team finds out on the morning",
    with: "Every operative knows their schedule and job details before they arrive",
  },
  {
    without: "Invoices go out days after completion — sometimes weeks",
    with: "Invoicing triggered at job completion — the delay between finishing and getting paid disappears",
  },
  {
    without: "Chasing payment is a weekly task you do yourself",
    with: "Automated payment reminders — you stop being the accounts department",
  },
  {
    without: "You can't take a day off without things going wrong",
    with: "The platform runs the admin loop whether you're there or not",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OpsDeck Platform Build",
  description:
    "A bespoke AI platform built around how your trades business actually works — eliminating the admin that runs through the owner. Quoting, dashboard, team management, invoicing, and payment reminders.",
  provider: { "@id": "https://opsdeck.co.uk/#organization" },
  areaServed: "GB",
  url: "https://opsdeck.co.uk/platform-build",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Platform Build Tiers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "AI Tools & Automation",
        price: "75",
        priceCurrency: "GBP",
        description:
          "Single-purpose automation — one specific task eliminated. £75/month, setup from £200.",
      },
      {
        "@type": "Offer",
        name: "Quote Builder",
        price: "100",
        priceCurrency: "GBP",
        description:
          "Voice or manual quoting with adaptive memory. £100/month, setup from £300.",
      },
      {
        "@type": "Offer",
        name: "Quote Builder + Dashboard",
        price: "150",
        priceCurrency: "GBP",
        description:
          "Quoting plus full business dashboard — enquiries, jobs, calendar, sales, profit forecasting. £150/month, setup from £300.",
      },
      {
        "@type": "Offer",
        name: "Full Operations Platform",
        price: "250",
        priceCurrency: "GBP",
        description:
          "Everything plus team integration, operative management, multi-user access, fully custom workflow. £250/month, setup from £1,000.",
      },
    ],
  },
};

export default function PlatformBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Section 1 — Hero */}
        <ProductHero
          eyebrow="Platform Build"
          title="You Are the System. That Is the Problem."
          lead="A bespoke AI platform that becomes the deck you run your whole operation from — quotes, jobs, team and invoicing in one place, built around how your business actually works, not how a generic tool thinks it should."
          sub="From £75/month. Setup from £200. Consultation first."
          ctaHref={MAILTO}
          ctaVariant="amber"
        />

        {/* Section 2 — Pain */}
        <PainSection eyebrow="Sound familiar?" painPoints={painQuestions} />

        {/* Section 3 — Hook */}
        <HookSection
          eyebrow="The real problem"
          body="The problem is not that the business is busy. Busy is good. The problem is that the admin has not scaled with the business. The WhatsApp group, the spreadsheet, the whiteboard, and the notes on your phone were never a system — they were a workaround. And workarounds compound. A missed follow-up. An invoice sent four days late. A quote that sat in a thread and never got chased. Each one is a small leak — and together they cost far more than the time they take."
        />

        {/* Section 4 — What You Get (card grid, brief override) */}
        <section className="bg-background">
          <div className="container mx-auto px-6 pb-20 md:pb-28 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What You Get
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.feature}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">
                      {f.feature}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm ml-9">
                    {f.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Build Tiers */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
              Choose Your Starting Point
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
              The right tier is confirmed during the consultation — not before
              it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative bg-card rounded-2xl p-8 ${
                    tier.popular
                      ? "border-2 border-accent shadow-lg"
                      : "border border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  {tier.forTeams && (
                    <span className="absolute top-4 right-4 bg-tag-bg text-tag-fg text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      For Teams
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-black text-foreground mb-1">
                    {tier.monthly}
                  </div>
                  <div className="text-sm text-muted-foreground mb-5">
                    Setup from {tier.setup}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic text-center max-w-3xl mx-auto mt-10">
              Monthly subscription begins from go-live — not from when the
              build starts. You don&apos;t pay the monthly fee until the
              platform is live.
            </p>
          </div>
        </section>

        {/* Section 6 — How It Works */}
        <HowItWorksSteps title="How It Works" steps={steps} />

        {/* Section 7 — Comparison */}
        <ComparisonTable
          title="How This Compares to What You're Doing Now"
          withoutHeader="How It Works Now"
          withHeader="How It Works With the Platform"
          rows={comparisonRows}
        />

        {/* Section 8 — CTA Block */}
        <CTABlock
          title="Ready to Build the System?"
          body="From £75/month. Setup from £200. Consultation free, no obligation."
          ctaHref={MAILTO}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with the subject line "Platform Build". Nothing is built and nothing is invoiced until you approve the scope in writing.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
