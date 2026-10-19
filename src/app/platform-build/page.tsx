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
import YourData from "@/components/landing/YourData";

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Platform Build")}`;

const pageTitle =
  "Field Operations Platform for Trades Firms — Jobs, Crews, Site Sign-offs & Invoicing | OpsDeck";
const pageDescription =
  "Run your whole field operation from one platform — enquiries, jobs, crews, vehicles, PPE checks, site handovers and invoicing, live on every phone. Built around how your trades firm already works. From £250/month for 1–10 operatives, unlimited users.";

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
  "How many times today did someone ring round to find out whether a job was actually done?",
  "If you took two days off tomorrow with no phone, which jobs would stall — and who would it all fall on?",
  "Are you about to hire another ops manager just to keep track of the work you already have?",
];

const features = [
  {
    feature: "Enquiries and quotes in one place",
    outcome: "Private, commercial and one-off enquiries logged and quoted. Accepted quotes become jobs automatically — nothing typed twice",
  },
  {
    feature: "Job file from enquiry to completion",
    outcome: "Every job moves through clear stages, with documents, drawings and notes attached to the job, not buried in folders",
  },
  {
    feature: "Surveys, crews and vehicles allocated",
    outcome: "Allocate surveys to staff and jobs to operatives and vehicles from the office, a tablet or your phone",
  },
  {
    feature: "Job details sent to every operative's phone",
    outcome: "The office sends each operative a job link by WhatsApp — nothing to install, no training, and they only see their own job",
  },
  {
    feature: "PPE checks and declarations before work starts",
    outcome: "The job stays locked until the PPE check and declaration are signed — timestamped, every time",
  },
  {
    feature: "Handovers signed on site",
    outcome: "Handover completed and signed on site, then emailed to the customer automatically",
  },
  {
    feature: "Photos and site notes straight to the office",
    outcome: "Site photos and notes land on the right job, so the office knows when a job is live and when it's finished",
  },
  {
    feature: "Live calendar that turns green",
    outcome: "See every job, crew and vehicle for the day — jobs change colour as they're completed, from wherever you are",
  },
  {
    feature: "Invoice the moment a job is done",
    outcome: "A raise-invoice alert as soon as a job goes green — invoicing runs through the day instead of piling up at the end of it",
  },
  {
    feature: "Toolbox talks, RAMS and method statements in one click",
    outcome: "Sent to every operative to read and declare — every signature on record, no WhatsApp groups",
  },
  {
    feature: "Vehicles, MOTs and holidays tracked",
    outcome: "Vehicle checks, MOT dates and staff holidays sit alongside the jobs they affect",
  },
  {
    feature: "Built around your operation, supported monthly",
    outcome: "Configured to your trade and workflow, then maintained and grown by Rob as your business grows",
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
  },
  {
    name: "Full Operations Platform",
    monthly: "From £250/month",
    setup: "£1,500",
    description:
      "The full field operations platform — jobs, crews, vehicles, PPE checks, site handovers, toolbox talks and invoice flags, plus everything above. Unlimited users. Monthly fee banded by operatives — £250 for 1–10 up to £550 for 41–50.",
    popular: true,
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
    without: "Ringing round the lads to find out what's done",
    with: "Live job status on the calendar — jobs turn green as they're completed",
  },
  {
    without: "Jobs get booked but the team finds out on the morning",
    with: "Every operative knows their schedule and job details before they arrive",
  },
  {
    without: "Invoices go out days after completion — sometimes weeks",
    with: "Invoice flagged the moment the job is signed off — admin knows what to raise and for how much",
  },
  {
    without: "Paper sign-off sheets and toolbox talks chased round WhatsApp",
    with: "PPE checks, declarations and toolbox talks signed digitally — every record kept",
  },
  {
    without: "You can't take a day off without things going wrong",
    with: "The platform runs the admin loop whether you're there or not",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OpsDeck Field Operations Platform",
  serviceType: "Field operations software for trades businesses",
  description:
    "A field operations platform for UK trades firms with operatives on site — enquiries and quotes, job files, crew and vehicle allocation, job details on operatives' phones, PPE checks and declarations, site handovers signed on site, photos and notes to the office, a live calendar, invoice flags, toolbox talks and RAMS, vehicle and holiday tracking. Configured to each firm's workflow. Running Hi-Point Access's scaffolding operation in Sheffield.",
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
          "Everything plus team integration, operative management, unlimited users, fully custom workflow. From £250/month for 1–10 operatives up to £550/month for 41–50; build fee from £1,500, fixed after a scoping call.",
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
          eyebrow="Field Ops Platform"
          title="You Are the System. That Is the Problem."
          lead="Not off-the-shelf software you log into and adapt to. We map how your operation already runs and build the platform around it — enquiries, jobs, crews, vehicles, PPE checks, site handovers and invoicing in one place. Run the whole field operation from your phone, without hiring another ops manager. Running Hi-Point Access's scaffolding operation in Sheffield today."
          sub="From £250/month for 1–10 operatives, unlimited users. Smaller admin tools from £75/month. Consultation first."
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

        {/* Section 8 — Your data */}
        <YourData />

        {/* Section 9 — CTA Block */}
        <CTABlock
          title="Ready to Build the System?"
          body="Field Ops Platform from £250/month for 1–10 operatives, unlimited users. Smaller admin tools from £75/month. Consultation free, no obligation."
          ctaHref={MAILTO}
          ctaVariant="amber"
          note={'Email rob@opsdeck.co.uk with the subject line "Platform Build". Nothing is built and nothing is invoiced until you approve the scope in writing.'}
        />

        <SiteFooter />
      </div>
    </>
  );
}
