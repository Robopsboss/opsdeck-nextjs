import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const audienceCards = [
  {
    label: "THE OWNER-OPERATOR",
    title: "You do the work and the admin",
    body: "Sole trader or small team. Quoting is complex, evenings are lost to paperwork. You need one tool that handles the admin so you can focus on the job.",
  },
  {
    label: "THE OPERATIONS MANAGER",
    title: "You manage a team in the field",
    body: "Scaffolding firm, groundworks company, multi-team trades business. You need your operatives briefed, jobs dispatched, completion notes filed — without chasing anyone by phone.",
  },
];

const offTheShelfPros = ["Quick to set up", "Low monthly cost", "Works well for simple jobs"];
const offTheShelfCons = [
  "Built for the average trade — not yours",
  "Complex quoting still done manually",
  "You adapt to the software",
  "Features you pay for but never use",
  "Field operatives still briefed by phone",
];
const opsDeckCons = ["Takes longer to set up", "Higher initial build cost"];
const opsDeckPros = [
  "Built around your exact trade and workflow",
  "Your pricing, margins, and materials built in",
  "The software adapts to you",
  "Only pay for what your business needs",
  "Evolves as your business grows",
  "Field operatives briefed automatically via WhatsApp",
];

const workflow = [
  "Job assigned to operative in OpsDeck the night before",
  "Operative receives WhatsApp with today's job sheet — address, spec, notes",
  "Operative uploads completion photos and notes via link — direct into the job file",
];

const offTheShelfFine = [
  {
    title: "You do simple, fast jobs with standard pricing",
    body: "If you're quoting two hours labour and a handful of parts, Jobber will do the job. The quoting complexity isn't there and you don't need bespoke automation. Save your money.",
  },
  {
    title: "You're just starting out and testing the market",
    body: "Early stage businesses are better served by cheap generic tools until the workflow is established. Bespoke automation is most valuable when you know exactly how your business runs.",
  },
];

const bespokeRight = [
  {
    title: "Your quotes involve complex material calculations",
    body: "Groundworks, landscaping, insulation, roofing, fencing — trades where materials need calculating by area, depth, or volume. Generic tools can't handle your pricing logic. You end up doing the hard part in a spreadsheet anyway.",
  },
  {
    title: "You're still pricing in Excel because nothing else fits",
    body: "If Excel is still your quoting tool, it's because generic software couldn't replicate your pricing model. That's not a problem with you — it's a problem with the software. Bespoke automation connects your Excel logic to a professional output.",
  },
  {
    title: "You manage operatives across multiple sites",
    body: "If your morning involves calling or messaging multiple operatives with job details, and your afternoon involves chasing them for completion notes — you need a field ops platform, not a generic job management tool.",
  },
  {
    title: "Admin is eating your evenings",
    body: "If you're regularly spending evenings typing up quotes, chasing payments, or copying information between systems — the generic tool you're using isn't solving the real problem. It's adding to it.",
  },
];

const proofs = [
  {
    client: "High Point Access Ltd — Scaffolding",
    problem:
      "Managing operatives, jobs, quotes and scheduling across separate tools. Operatives briefed by phone. Completion notes chased manually. Nothing joined up.",
    result:
      "Operatives receive a WhatsApp job sheet every morning. Photos and completion notes upload directly into the job file from site. One platform. Everything in one place.",
  },
  {
    client: "Birdwell Insulation Ltd — Sheffield",
    problem:
      "Pricing jobs in Excel, then waiting for admin to manually type each quote into a professional document. 15 minutes per quote, done in batches.",
    result:
      "Drag and drop the Excel file, branded quote ready in 30 seconds. Same day turnaround on every enquiry.",
  },
];

const faqs = [
  {
    q: "Is OpsDeck more expensive than Jobber?",
    a: "Monthly subscriptions start from £75/month — comparable to or cheaper than most off-the-shelf tools. The difference is the build cost upfront, which covers configuring the platform to your business. From £200 for a single tool, from £1,000 for a full field ops platform.",
  },
  {
    q: "Do my operatives need to download an app?",
    a: "No. The job sheet arrives via WhatsApp — something every operative already has on their phone. The upload link works directly in the browser. No app store, no training required, no resistance from the team.",
  },
  {
    q: "How long does the build take?",
    a: "Typically two to four weeks from the initial consultation to go-live, depending on complexity. You get a working demo at the two-week mark before the final payment is due.",
  },
  {
    q: "What if my business changes?",
    a: "The monthly subscription covers ongoing support and minor updates. New job types, integrations, or features are quoted as add-ons. The platform evolves with your business.",
  },
  {
    q: "What trades do you work with?",
    a: "Groundworks, landscaping, insulation, scaffolding, roofing, fencing, and any trade where quoting is complex and admin is manual. Owner-operators and multi-team businesses both.",
  },
  {
    q: "Do I have to commit before knowing the cost?",
    a: "No. The free consultation is exactly that — free. We scope the build, agree the price in writing, and nothing starts until you've approved it. No surprises.",
  },
];

const pageTitle = "Why Bespoke Automation Beats Off-the-Shelf Software — OpsDeck";
const pageDescription =
  "Generic software makes you adapt to it. OpsDeck adapts to you. See why trades businesses and field ops teams choose bespoke automation over Jobber and Tradify.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/bespoke-vs-off-the-shelf" },
  openGraph: {
    url: "https://opsdeck.co.uk/bespoke-vs-off-the-shelf",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BespokeVsOffTheShelfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero */}
        <section className="bg-hero text-hero-foreground">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Bespoke vs Off-the-Shelf
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              Why bespoke automation beats off-the-shelf software for trades businesses
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
              Jobber, Tradify, and tools like them are built for the average trades business. If your business is average, they work fine. If your quoting is complex, your jobs are multi-stage, or you&apos;ve already tried generic software and found it doesn&apos;t fit — read on.
            </p>
          </div>
        </section>

        {/* Callout */}
        <section className="bg-background">
          <div className="container mx-auto px-6 pt-16 md:pt-20 max-w-4xl">
            <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                The short answer
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Off-the-shelf software makes you adapt your business to fit the tool. Bespoke automation adapts the tool to fit your business. For simple trades, the difference doesn&apos;t matter. For complex trades — and for any business managing a team in the field — it&apos;s the difference between a tool you actually use and one that collects dust.
              </p>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Who this is for</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {audienceCards.map((c) => (
                <div
                  key={c.label}
                  className="bg-card rounded-xl p-8 border border-border flex flex-col"
                >
                  <span className="text-xs font-bold tracking-widest text-primary mb-2">
                    {c.label}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest comparison */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The honest comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Off-the-shelf */}
              <div className="bg-card rounded-xl p-8 border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-6">
                  Off-the-shelf — Jobber, Tradify, similar tools
                </h3>
                <ul className="space-y-3 mb-6">
                  {offTheShelfPros.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {offTheShelfCons.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* OpsDeck featured */}
              <div className="bg-card rounded-xl p-8 border-2 border-primary flex flex-col relative">
                <span className="absolute -top-3 left-8 inline-block bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-xl font-bold mb-6">OpsDeck — Bespoke automation</h3>
                <ul className="space-y-3 mb-6">
                  {opsDeckCons.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {opsDeckPros.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Field ops */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Full Field Ops Platform
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your operatives arrive briefed. Completion notes file themselves.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                If you&apos;re managing a team of operatives across multiple sites — scaffolders, groundworkers, fencing crews — the morning briefing alone is a significant time drain. Phone calls, WhatsApp messages, printed job sheets. Someone always has the wrong address. Someone always forgets to send photos back.
              </p>
              <p>
                The OpsDeck field ops platform removes all of that. Here&apos;s how a typical morning works for a client like High Point Access Ltd:
              </p>
            </div>

            {/* Workflow */}
            <div className="my-10 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-3 items-stretch">
              {workflow.map((step, i) => (
                <Fragment key={i}>
                  <div className="bg-card rounded-xl p-6 border border-border flex flex-col">
                    <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3">
                      {i + 1}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{step}</p>
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-primary">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                No phone calls. No chasing. No paper job sheets. Every completion note and photo lands directly in the job record in OpsDeck — ready for the client sign-off, the invoice, and the job history. The office knows the job is done before the operative has driven off site.
              </p>
              <p>
                For a scaffolding company managing forty operatives across multiple sites, that is hours saved every single day. Not a week — a day.
              </p>
            </div>
          </div>
        </section>

        {/* When off-the-shelf is fine */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">When off-the-shelf is fine</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {offTheShelfFine.map((c) => (
                <div
                  key={c.title}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When bespoke is right */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">When bespoke is the right call</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {bespokeRight.map((c) => (
                <div
                  key={c.title}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What it has meant for real businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {proofs.map((p) => (
                <div
                  key={p.client}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
                    {p.client}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Problem</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Result</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Common questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-cta text-cta-foreground">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not sure if bespoke is right for your business?
            </h2>
            <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free 30-minute consultation. We&apos;ll look at your current process and tell you honestly whether we can help — and whether the cost is justified.
            </p>
            <a
              href="mailto:rob@opsdeck.co.uk"
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
