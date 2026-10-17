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

const CHECKED = "October 2026";

const criteria = [
  {
    label: "Who adapts to who",
    generic: "Your team adapts to the software's job stages, forms and screens",
    opsdeck: "Built around the way your operation already runs — your stages, your paperwork, your trade",
  },
  {
    label: "How operatives get their work",
    generic: "Typically each field worker has a login on the vendor's mobile app",
    opsdeck: "Job link sent by WhatsApp — nothing to install, no training, and they only see their own job",
  },
  {
    label: "How it's priced",
    generic: "Per user, or a price you only get after a sales call",
    opsdeck: "Published bands by number of field operatives — £250/month for 1–10. Unlimited users",
  },
  {
    label: "Contract",
    generic: "Varies — some bill annually or ask for a 12-month commitment",
    opsdeck: "Rolling monthly, 30 days' notice, no exit fees",
  },
  {
    label: "Trade-specific steps",
    generic: "Configured within the options the product already has",
    opsdeck: "Built in — e.g. PPE lock before a job opens, hire-week tracking for scaffolders, council compliance packs",
  },
  {
    label: "Who you deal with",
    generic: "The vendor's sales, onboarding and support teams",
    opsdeck: "Rob France — the person who builds and maintains your platform",
  },
  {
    label: "Size and track record",
    generic: "Established vendors with large customer bases and ready-made integrations",
    opsdeck: "A small Sheffield company. Live at Hi-Point Access. Fewer off-the-shelf integrations",
  },
];

const tools = [
  {
    name: "Jobber",
    pricing:
      "Published plans tiered by number of users, with extra users charged on top. Advertised in US dollars on its main pricing page — check Jobber's UK site for GBP.",
    fit: "Service businesses running a high volume of quick, repeatable jobs that want strong customer booking, reminders and a client portal out of the box.",
    watch: "You work the Jobber way. Every team member who needs access is a user, so the bill grows with the team.",
  },
  {
    name: "Joblogic",
    pricing:
      "Per user, billed annually. Independent UK comparisons list it from around £45 per user per month.",
    fit: "UK service and maintenance contractors with a team of engineers and planned, repeat contract work.",
    watch: "Annual billing, and per-user pricing that rises with every engineer and office user you add.",
  },
  {
    name: "BigChange",
    pricing:
      "Not published. The pricing page asks you to request pricing; fleet, dashcam and fuel card options are listed as extras.",
    fit: "Larger mobile workforces where vehicles and fleet tracking are a big part of the operation.",
    watch: "You only see a price after a demo. Ask for the full first-year cost, including setup and extras, in writing.",
  },
  {
    name: "simPRO",
    pricing: "Not published — quote only after a sales call.",
    fit: "Larger, contract-heavy firms that want project, stock and service management in one established system.",
    watch: "Ask for the total first-year cost including setup and training before you commit.",
  },
  {
    name: "Commusoft",
    pricing: "Not published — quote only. Independent UK comparisons report a 12-month contract.",
    fit: "Established service firms with ten or more staff that want a full off-the-shelf job management system.",
    watch: "Twelve-month commitment and per-user costs as you grow. Get the full first-year figure in writing.",
  },
];

const stickWith = [
  "You want something you can sign up to and use tomorrow",
  "Your process already matches the standard way these tools work",
  "You rely on a large library of ready-made integrations",
  "You'd rather buy from a large, established vendor",
];

const chooseOpsDeck = [
  "Your process works — it just lives in spreadsheets, diaries and WhatsApp",
  "Your lads won't use another app, and you don't want them seeing office data",
  "Your team is growing and per-user bills keep climbing",
  "Your trade has steps generic tools don't handle well — PPE sign-off, hire weeks, council packs",
  "You're about to hire another ops manager just to keep track of the work",
];

const proofs = [
  {
    client: "Hi-Point Access Ltd — Sheffield scaffolding",
    before:
      "Council jobs arrived as stacks of paper. Site photos came in over WhatsApp with no fixed home. Handover sheets were printed and signed on paper. The job tracker lived in a spreadsheet and a diary.",
    result:
      "One job file from enquiry to completion. Operatives get their job link by WhatsApp, photos land on the right job, handovers are signed digitally on site, and the council compliance pack downloads in one click.",
    href: "/case-studies/hi-point",
  },
  {
    client: "Birdwell Insulation Ltd — Sheffield",
    before:
      "Contracts managers priced in Excel, then waited for admin to type each quote up. 15 minutes per quote, done in batches.",
    result:
      "Drag and drop the Excel file — a branded quote in 30 seconds, built around the pricing spreadsheet they already used.",
    href: "/case-studies/birdwell",
  },
];

const faqs = [
  {
    q: "Is OpsDeck an alternative to Jobber, Joblogic or BigChange?",
    a: "Yes, for trades firms with operatives in the field. The difference is the approach: Jobber, Joblogic, BigChange, simPRO and Commusoft are off-the-shelf platforms, so your team adapts to how the software works. OpsDeck is built around how your operation already runs, so your team keeps working the way they do now — just without the paper, spreadsheets and WhatsApp groups.",
  },
  {
    q: "Do we have to change how we work?",
    a: "No. The build starts with a one-hour walkthrough of how your operation runs today — your job stages, your paperwork, how the lads get briefed and how the office tracks it. The platform is then built to match that. You don't reorganise the business to fit the software.",
  },
  {
    q: "Do my operatives need to download an app?",
    a: "No. The office sends each operative their job link by WhatsApp, which they already use. There's nothing to install and no training, and the link only opens that operative's job, so they never see information the office doesn't want them to.",
  },
  {
    q: "Is OpsDeck cheaper than Jobber or Joblogic?",
    a: "It depends on your headcount. For a very small team, an off-the-shelf tool can cost less per month. OpsDeck has a build fee from £1,500, then a monthly fee banded by field operatives with unlimited users — £250/month for 1–10 operatives up to £550 for 41–50 — so office staff, managers and admin never add to the bill. Compare the full first-year cost for your actual team, including setup and training, before deciding.",
  },
  {
    q: "What's the risk of going with a smaller provider?",
    a: "Fair question. OpsDeck limits it in three ways: you test a working demo before go-live and the final payment is only due at launch; the subscription is rolling monthly with 30 days' notice and no exit fees; and your data can be exported in full at any time.",
  },
  {
    q: "How do I know which is right for my business?",
    a: "Book a free consultation. We'll look at how your operation runs and tell you honestly whether a bespoke platform is justified — or whether an off-the-shelf tool would serve you just as well for less.",
  },
];

const pageTitle =
  "Jobber, Joblogic, BigChange, simPRO & Commusoft vs OpsDeck — An Honest Comparison";
const pageDescription =
  "An honest comparison of field service platforms for UK trades firms — Jobber, Joblogic, BigChange, simPRO and Commusoft vs OpsDeck. Off-the-shelf tools make you adapt to them; OpsDeck is built around how your operation already works. Including when you should choose them over us.";

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
              Jobber, Joblogic, BigChange, simPRO, Commusoft — or OpsDeck?
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
              These are good, established platforms, and for plenty of firms they&apos;re the right answer. This page isn&apos;t a hit piece. The real difference is simple: with an off-the-shelf platform, your business adapts to the software. With OpsDeck, the software is built around the system that already works for you.
            </p>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-background">
          <div className="container mx-auto px-6 pt-16 md:pt-20 max-w-4xl">
            <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
              <p className="text-foreground text-base md:text-lg leading-relaxed italic mb-4">
                &ldquo;Most firms already have a way of running jobs that works. It just lives in spreadsheets, diaries and WhatsApp. They shouldn&apos;t have to adapt to me — I build around the systems they already use.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Rob France</span>, founder of OpsDeck and owner of Infascape Ltd, a Sheffield landscaping company.
              </p>
            </div>
          </div>
        </section>

        {/* Criteria table */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to compare when choosing field operations software
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Seven things that decide whether a platform actually gets used by the office and the lads — and what it really costs as you grow.
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="hidden md:grid grid-cols-[1fr_1.4fr_1.4fr] bg-section-alt border-b border-border">
                <div className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Criteria
                </div>
                <div className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Off-the-shelf platforms
                </div>
                <div className="px-5 py-4 text-xs font-bold tracking-widest uppercase text-primary">
                  OpsDeck
                </div>
              </div>
              {criteria.map((c) => (
                <div
                  key={c.label}
                  className="grid md:grid-cols-[1fr_1.4fr_1.4fr] border-b border-border last:border-b-0"
                >
                  <div className="px-5 pt-5 md:py-5 font-bold text-foreground text-sm">
                    {c.label}
                  </div>
                  <div className="px-5 pt-2 md:py-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="md:hidden font-semibold text-foreground">Off-the-shelf: </span>
                    {c.generic}
                  </div>
                  <div className="px-5 pt-2 pb-5 md:py-5 text-sm text-foreground font-medium leading-relaxed">
                    <span className="md:hidden font-semibold text-primary">OpsDeck: </span>
                    {c.opsdeck}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Each platform */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The platforms, one by one
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Pricing models checked {CHECKED} from each vendor&apos;s public pricing page and independent UK comparisons. Prices change — always get the current figure from the vendor.
            </p>
            <div className="space-y-6">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <h3 className="text-xl font-bold mb-5">{t.name}</h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="font-semibold text-foreground mb-1">How it&apos;s priced</p>
                      <p className="text-muted-foreground">{t.pricing}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Strongest fit</p>
                      <p className="text-muted-foreground">{t.fit}</p>
                    </div>
                    <div className="border-l-4 border-accent bg-accent/10 rounded-r-md p-4">
                      <p className="font-semibold text-foreground mb-1">Worth knowing</p>
                      <p className="text-foreground/80">{t.watch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right choice */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Which is the right call for you?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-lg font-bold mb-5">
                  Choose an off-the-shelf platform if…
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
                  OpsDeck
                </span>
                <h3 className="text-lg font-bold mb-5">Choose OpsDeck if…</h3>
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
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Built around how they already worked
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {proofs.map((p) => (
                <Link
                  key={p.client}
                  href={p.href}
                  className="group bg-card rounded-xl p-8 border border-border hover:border-primary transition-colors flex flex-col"
                >
                  <p className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
                    {p.client}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Before</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.before}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">Now</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.result}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-6">
                    Read the case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
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
              Tried off-the-shelf software and ended up back on WhatsApp?
            </h2>
            <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free 20-minute walkthrough. We&apos;ll look at how your operation runs and tell you honestly whether OpsDeck is the right fit — or whether one of the platforms above would serve you better.
            </p>
            <a
              href={`mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("20-minute OpsDeck walkthrough")}`}
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
            >
              Book a free 20-minute walkthrough
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
