import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tools = [
  {
    name: "Tradify",
    description: "Job management for trades. Highly rated in the UK.",
    good: "Tradify is genuinely good at what it does — tracking jobs from enquiry to invoice, scheduling, and syncing with accounting. For an electrician or plumber doing straightforward jobs with standard pricing, it works well and the price is reasonable.",
    short: "Quoting is manual. You enter your materials and it saves them — but there is no automation. Every quote still requires you to manually key in the job. No productivity rates, no area calculations, no logic that works the quote out for you. For complex trades, you end up back in a spreadsheet for the hard part anyway.",
  },
  {
    name: "Jobber",
    description: "Built for high-volume field service teams.",
    good: "Jobber excels at customer communication and scheduling — client self-service portals, automated follow-ups, and real-time job tracking. For businesses doing a high volume of quick, repeatable jobs it is a strong choice.",
    short: "It is built around a standard job type. If your quoting involves complex material calculations, site measurements feeding into pricing logic, or trade-specific productivity rates — Jobber does not accommodate that. You are forced to work around it rather than with it.",
  },
  {
    name: "Powered Now",
    description: "The UK's self-described number one job management software for trades.",
    good: "Powered Now is mobile-first and popular with smaller trades businesses in the UK. Good for day-to-day organisation, quote and invoice management, and drag-and-drop scheduling.",
    short: "Like Tradify, it is built for the average trade. The quoting tool works for simple jobs. For trades where the quote itself is the complicated part — where materials need calculating by area, depth, or volume — the tool runs out of capability and you are back doing the complex bit manually.",
  },
];

const genericSteps = [
  "Open new quote",
  "Manually select each material",
  "Manually enter quantities",
  "Check your spreadsheet for rates",
  "Calculate totals",
  "Format and send",
];

const opsDeckSteps = [
  "Enter site measurements",
  "Platform calculates materials",
  "Margins and rates applied automatically",
  "Review and send",
];

const stickWith = [
  "Standard pricing, no complex calculations",
  "Small number of job types",
  "No team to manage in the field",
  "High volume of quick repeatable jobs",
];

const chooseOpsDeck = [
  "Quoting involves area, volume, or material calculations",
  "You have tried generic tools and gone back to Excel",
  "You manage operatives across multiple sites",
  "Admin is still eating your evenings",
  "You need the platform built around your trade",
];

const proofs = [
  {
    client: "Birdwell Insulation Ltd — Sheffield",
    before:
      "Previously using Excel for pricing and manual document creation for every quote. 15 minutes per quote done in batches. Generic tools could not replicate their quoting logic.",
    result:
      "Drag and drop the Excel file, branded professional quote in 30 seconds. Same day turnaround on every enquiry.",
  },
  {
    client: "High Point Access Ltd — Scaffolding",
    before:
      "Using separate tools for pipeline, scheduling, and communication. Nothing joined up. Operatives briefed by phone. Completion notes chased manually.",
    result:
      "One platform. Operatives receive a WhatsApp job sheet every morning. Photos and completion notes upload directly into the job file from site.",
  },
];

const faqs = [
  {
    q: "Are you saying Tradify and Jobber are bad products?",
    a: "No — they are good products for the businesses they are built for. The honest answer is that they are built for the average trade. If your business is more complex than average — in its quoting, its job types, or its field operations — they run out of capability. That is not a criticism, it is just the reality of what off-the-shelf software can and cannot do.",
  },
  {
    q: "Is OpsDeck more expensive?",
    a: "The monthly subscription starts from £75/month — comparable to or cheaper than Tradify and Jobber. The difference is the upfront build cost, from £200 for a single tool to £1,000 for a full field ops platform. That build cost covers configuring the platform to your exact business. Generic tools have no equivalent because they are not built around you.",
  },
  {
    q: "Can't I just customise Tradify to fit my business?",
    a: "To a point. You can add your materials, set your rates, and configure job types. What you cannot do is add the intelligence — the productivity rates, the area calculations, the logic that works the quote out automatically. That layer does not exist in generic tools. It has to be built.",
  },
  {
    q: "What trades does OpsDeck work for?",
    a: "Groundworks, landscaping, surfacing, insulation, scaffolding, roofing, fencing — any trade where the quote involves material calculations and the jobs are complex. Also works for service businesses with a team in the field that need operatives briefed and completion notes filed automatically.",
  },
  {
    q: "How do I know if it is right for my business?",
    a: "Book a free consultation. We will look at your current process honestly and tell you whether bespoke automation is justified — or whether a generic tool would serve you just as well for less money. We would rather tell you the truth upfront than sell you something you do not need.",
  },
];

const pageTitle = "Tradify, Jobber, Powered Now vs OpsDeck — An Honest Comparison";
const pageDescription =
  "Tradify and Jobber are good tools. But they do half the job for complex trades businesses. Here is an honest comparison — including when you should choose them over us.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/honest-comparison" },
  openGraph: {
    url: "https://opsdeck.co.uk/honest-comparison",
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

export default function HonestComparisonPage() {
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
              Honest Comparison
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              Tradify, Jobber, Powered Now — good tools that do half the job
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
              This page is not a hit piece. Tradify is a solid product. Jobber is well built. Powered Now works for thousands of trades businesses. But there is a specific type of trades business for which none of them are enough — and if you have found your way here, you probably already know which type you are.
            </p>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-background">
          <div className="container mx-auto px-6 pt-16 md:pt-20 max-w-4xl">
            <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
              <p className="text-foreground text-base md:text-lg leading-relaxed italic mb-4">
                &ldquo;Before I built OpsDeck I was using separate tools that each did one thing. They were fine in isolation but none of them talked to each other and none of them did the complex part — the quoting. I needed something that did the entire job that my business specifically needed to function at its highest level. So I built it.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Rob France</span>, founder of OpsDeck and owner of Infascape Ltd — a Sheffield landscaping company. Built OpsDeck after experiencing exactly this problem in his own trades business.
              </p>
            </div>
          </div>
        </section>

        {/* What the generic tools do well */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What the generic tools do well
            </h2>
            <div className="space-y-6">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{t.description}</p>
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-foreground mb-2">What it does well</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{t.good}</p>
                  </div>
                  <div className="border-l-4 border-accent bg-accent/10 rounded-r-md p-4">
                    <p className="text-sm font-semibold text-accent-foreground mb-2" style={{ color: "hsl(var(--accent))" }}>
                      Where it falls short
                    </p>
                    <p className="text-foreground/80 leading-relaxed text-sm">{t.short}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manual vs automation */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              The real difference — manual entry vs automation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Generic tools save your data. OpsDeck uses it.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              <p>
                Every tool on the market will save your materials list. That is table stakes. The difference is what happens when you start a new quote.
              </p>
              <p>
                With Tradify or Jobber — you select your materials, enter the quantities manually, and build the quote line by line. Every time. The tool remembers what you charge for things. It does not work anything out for you.
              </p>
              <p>
                With OpsDeck — you enter the site measurements. The platform calculates the materials required based on your productivity rates, works out the quantities automatically, applies your margins, and generates a complete quote. The intelligence is built in. You provide the numbers from site. The platform does the rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Generic */}
              <div className="bg-card rounded-xl p-8 border border-border flex flex-col">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-destructive mb-5">
                  Generic tool quoting
                </span>
                <ol className="space-y-3 mb-6 flex-1">
                  {genericSteps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-base font-bold text-destructive">
                  20 to 45 minutes per quote
                </p>
              </div>

              {/* OpsDeck */}
              <div className="bg-card rounded-xl p-8 border-2 border-primary flex flex-col">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-5">
                  OpsDeck quoting
                </span>
                <ol className="space-y-3 mb-6 flex-1">
                  {opsDeckSteps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-base font-bold text-primary">
                  Under 1 minute per quote
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When generic tools are the right choice */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              When the generic tools are the right choice
            </h2>
            <div className="border border-border rounded-xl p-8 bg-card">
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-3">
                An honest note
              </p>
              <p className="text-foreground leading-relaxed">
                We will always tell you honestly if OpsDeck is not the right fit. If you do simple, repeatable jobs with standard pricing — an electrician quoting two hours labour and parts, a plumber doing a boiler service — Tradify or Jobber will serve you well at a lower cost. Bespoke automation is most valuable when the quoting is complex and the admin is eating your time. If that is not you, save your money.
              </p>
            </div>
          </div>
        </section>

        {/* When OpsDeck is the right call */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              When OpsDeck is the right call
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-lg font-bold mb-5">
                  Stick with generic tools if — your jobs are simple and repeatable
                </h3>
                <ul className="space-y-3">
                  {stickWith.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-8 border-2 border-primary relative">
                <span className="absolute -top-3 left-8 inline-block bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-lg font-bold mb-5">
                  Choose OpsDeck if — your jobs are complex and bespoke
                </h3>
                <ul className="space-y-3">
                  {chooseOpsDeck.map((item) => (
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

        {/* Proof */}
        <section className="bg-background">
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
                    <p className="text-sm font-semibold text-foreground mb-1">Before</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.before}</p>
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
        <section className="bg-section-alt">
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
              Already tried generic software and found it doesn&apos;t fit?
            </h2>
            <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free 30-minute consultation. We will look at your current process and tell you honestly what we can automate — and whether the cost is justified for your business.
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
