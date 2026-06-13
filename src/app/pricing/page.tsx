import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const priceUp = [
  "Complexity of the build and number of features required",
  "Number of different job types needing separate logic",
  "Number of integrations with external tools required",
  "Bespoke engine logic — custom productivity rates, area calculations, material configs",
  "Number of user seats above standard allowance",
  "Size and operational complexity of the business",
];

const priceDown = [
  "Single-purpose automation with no complex logic",
  "Single trade type with standard repeatable pricing",
  "Self-sufficient client needing minimal ongoing support",
  "No complex calculations or custom integrations required",
  "Smaller team with straightforward workflows",
];

const tiers = [
  {
    name: "AI Tools and Automation",
    monthly: "£75/month",
    setup: "From £200",
    features:
      "Single-purpose automators, Excel to document converters, AI utilities. Ideal for one specific task costing you time.",
  },
  {
    name: "Quote Builder",
    monthly: "£100/month",
    setup: "From £300",
    features:
      "Voice or manual quoting with adaptive memory, AI quote summary, send quotes direct from the app.",
  },
  {
    name: "Quote Builder and Dashboard",
    monthly: "£150/month",
    setup: "From £300",
    features:
      "Everything in Tier 2 plus enquiries management, jobs tab, calendar view, sales overview, and profit forecasting.",
    popular: true,
  },
  {
    name: "Full Operations Platform",
    monthly: "£250/month",
    setup: "From £1,000",
    features:
      "Everything in Tier 3 plus team and operative integration, WhatsApp job dispatch, multi-user access, and a fully bespoke build configured to your exact trade and workflow.",
    forTeams: true,
  },
];

const serviceGroups = [
  {
    name: "Get Found & Win Work",
    services: [
      { name: "Website Build", href: "/website-build", price: "From £750", delivery: "10–15 working days" },
      { name: "GBP Setup & Optimisation", href: "/gbp-setup", price: "£297", delivery: "5 working days" },
      { name: "AEO Page Build — 9 Pages", href: "/aeo-page-build", price: "£397", delivery: "7 working days" },
      { name: "Google Review System", href: "/google-review-system", price: "£147", delivery: "3 working days" },
      { name: "LinkedIn Profile Optimisation", href: "/linkedin-optimisation", price: "£147", delivery: "5 working days" },
      { name: "Website Optimisation Pack", href: "/website-optimisation", price: "£397", delivery: "5 working days" },
    ],
  },
  {
    name: "Strategy & Sales",
    services: [
      { name: "Priority Action Call", href: "/priority-action-call", price: "£97", delivery: "Booked within 3 working days" },
      { name: "Sales Process Document", href: "/sales-process", price: "£597", delivery: "7 working days" },
      { name: "6 Month Marketing Strategy", href: "/marketing-strategy", price: "£597", delivery: "7 working days" },
    ],
  },
  {
    name: "Compliance & Commercial",
    services: [
      { name: "Commercial Readiness Pack", href: "/commercial-readiness", note: "bundle, saves £94", price: "£497", delivery: "5 working days" },
      { name: "RAMS & Method Statement Pack", href: "/rams-method-statement", price: "£247", delivery: "5 working days" },
      { name: "Compliance Document Pack", href: "/compliance-pack", price: "£197", delivery: "5 working days" },
      { name: "Company Profile Pack", href: "/company-profile", price: "£147", delivery: "5 working days" },
      { name: "Terms & Conditions Template", href: "/tcs-template", price: "£97", delivery: "3 working days" },
    ],
  },
];

const stages = [
  {
    n: "1",
    title: "On scope approval",
    fee: "One third of build fee",
    detail: "Build begins on receipt",
  },
  {
    n: "2",
    title: "Two-week demo sign-off",
    fee: "One third of build fee",
    detail: "Triggered when you approve the working demo",
  },
  {
    n: "3",
    title: "Go-live",
    fee: "Final third of build fee",
    detail: "Monthly subscription begins from this date",
  },
];

const hidden = [
  {
    title: "Per-user pricing that escalates",
    body: "Most generic tools charge per seat. Three users today, eight users next year. Your monthly cost nearly triples. OpsDeck pricing is per organisation not per seat.",
  },
  {
    title: "Annual contracts and exit fees",
    body: "Many platforms lock you into 12-month contracts. Cancelling early means penalties. OpsDeck is rolling monthly with 30 days notice.",
  },
  {
    title: "Charges for updates and new features",
    body: "Some platforms charge extra for platform updates or new functionality. OpsDeck bug fixes and minor updates are included in the monthly subscription.",
  },
  {
    title: "No customisation without expensive developer rates",
    body: "Off-the-shelf tools cannot be customised without paying developer day rates. With OpsDeck, every build is already configured to your business from day one.",
  },
  {
    title: "Data locked in proprietary formats",
    body: "Some platforms make it difficult or impossible to export your data if you leave. With OpsDeck, your data is yours and can be exported in full at any time.",
  },
];

const faqs = [
  {
    q: "How much does OpsDeck cost?",
    a: "Monthly subscriptions range from £75 to £250 per month depending on your tier. One-off setup fees range from £200 to £1,000 or more depending on complexity. All costs are agreed in writing before any payment is committed.",
  },
  {
    q: "Do you offer one-off services as well as the platform?",
    a: "Yes. OpsDeck delivers done-for-you services at fixed prices from £97 to £750 — websites, Google Business Profile setup, AEO pages, review systems, compliance documents, and sales and marketing strategy. Every price is published above and every service has its own page. No quotes needed except the Website Build, which is fixed-quoted before work starts.",
  },
  {
    q: "Is the setup fee a one-off cost?",
    a: "Yes. You pay the setup fee once, split across three staged payments tied to delivery milestones. After that you pay only the monthly subscription.",
  },
  {
    q: "Are there annual contracts?",
    a: "No. Monthly subscriptions are rolling with 30 days notice. No annual lock-ins and no early exit fees.",
  },
  {
    q: "Does the price change as my team grows?",
    a: "For most team sizes no — pricing is per organisation not per seat. For very large teams this is discussed at scope stage and reflected in the initial quote rather than appearing as a hidden escalation later.",
  },
  {
    q: "Can I upgrade my tier later?",
    a: "Yes. Moving from a lower tier to a higher tier is quoted as an add-on. The additional build cost covers the new features — the monthly subscription adjusts to the new tier from that point.",
  },
  {
    q: "What happens if I need a new job type added?",
    a: "New job types are quoted as add-ons outside the monthly subscription. Config-only changes from £200 plus a £50 per month subscription increase. New engine logic from £500 to £600 plus £50 per month increase. Always scoped and agreed in writing before any work begins.",
  },
  {
    q: "Who owns the platform and data once it is built?",
    a: "Your data is yours always and can be exported in full at any time. The underlying platform is operated and maintained by OpsDeck on your behalf. Full terms are set out in the scope of works document before any build begins.",
  },
  {
    q: "Do you offer any flexibility on payment terms?",
    a: "The standard staged payment structure is the default. If you have specific requirements, that is a conversation for the consultation. Nothing is assumed — everything is agreed in writing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "OpsDeck",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Bespoke business automation software for UK trades businesses. Includes AI tools, quote builders, job dashboards, and full field operations platforms.",
      url: "https://opsdeck.co.uk",
      provider: {
        "@type": "Organization",
        name: "OpsDeck Ltd",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sheffield",
          addressCountry: "GB",
        },
      },
      offers: [
        { "@type": "Offer", name: "AI Tools and Automation", price: "75", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "75", priceCurrency: "GBP", unitText: "MONTH" } },
        { "@type": "Offer", name: "Quote Builder", price: "100", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "100", priceCurrency: "GBP", unitText: "MONTH" } },
        { "@type": "Offer", name: "Quote Builder and Dashboard", price: "150", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "150", priceCurrency: "GBP", unitText: "MONTH" } },
        { "@type": "Offer", name: "Full Operations Platform", price: "250", priceCurrency: "GBP", priceSpecification: { "@type": "UnitPriceSpecification", price: "250", priceCurrency: "GBP", unitText: "MONTH" } },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does OpsDeck cost?", acceptedAnswer: { "@type": "Answer", text: "OpsDeck monthly subscriptions range from £75 to £250 per month. One-off setup fees range from £200 to £1,000 or more depending on complexity. All costs are agreed in writing before any payment is committed." } },
        { "@type": "Question", name: "Do you offer one-off services as well as the platform?", acceptedAnswer: { "@type": "Answer", text: "Yes. OpsDeck delivers done-for-you services at fixed prices from £97 to £750 — websites, Google Business Profile setup, AEO pages, review systems, compliance documents, and sales and marketing strategy. Every price is published above and every service has its own page. No quotes needed except the Website Build, which is fixed-quoted before work starts." } },
        { "@type": "Question", name: "Does OpsDeck charge per user?", acceptedAnswer: { "@type": "Answer", text: "No. OpsDeck pricing is per organisation not per seat. Your team can grow without the monthly fee automatically increasing." } },
        { "@type": "Question", name: "Are there annual contracts?", acceptedAnswer: { "@type": "Answer", text: "No. OpsDeck subscriptions are rolling monthly with 30 days notice. No annual lock-ins and no early exit fees." } },
      ],
    },
  ],
};

const pageTitle = "How Much Does Business Automation Software Cost? | OpsDeck Pricing";
const pageDescription =
  "OpsDeck monthly subscriptions from £75 to £250 per month. Setup fees from £200 to £1,000. All costs agreed in writing before you pay anything. Honest pricing for trades businesses.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: "https://opsdeck.co.uk/pricing",
    title: pageTitle,
    description:
      "OpsDeck monthly subscriptions from £75 to £250 per month. Setup fees from £200 to £1,000. All costs agreed in writing before you pay anything.",
    images: ["/og-image.png"],
  },
};

export default function PricingPage() {
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
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Pricing
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-8">
              How much does OpsDeck cost? Here is the honest answer.
            </h1>
            <div className="bg-card/10 border-l-4 border-accent rounded-r-lg p-6 mb-8 backdrop-blur-sm">
              <p className="text-hero-foreground text-base md:text-lg leading-relaxed">
                Monthly platform subscriptions from <strong>£75 to £250 per month</strong>, with one-off setup fees from <strong>£200 to £1,000 or more</strong> depending on complexity. Done-for-you services — websites, Google setup, compliance documents, sales and marketing strategy — from <strong>£97 to £750</strong> as one-off fixed prices. All costs are agreed in writing before you pay anything — no surprises, no hidden escalations.
              </p>
            </div>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-3xl">
              Most software companies hide their pricing or give you a range so wide it tells you nothing. This page gives you real numbers, explains exactly what drives the cost up or down, and shows you what you are actually paying for over 12 months compared to the alternatives.
            </p>
          </div>
        </section>

        {/* Drivers */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl border border-border border-t-4 border-t-amber-500 p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
                  Factors that increase cost
                </p>
                <ul className="space-y-3">
                  {priceUp.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-amber-500 font-bold shrink-0 mt-0.5">↑</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border border-t-4 border-t-green-600 p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-4">
                  Factors that reduce cost
                </p>
                <ul className="space-y-3">
                  {priceDown.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-green-600 font-bold shrink-0 mt-0.5">↓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cheaper / More expensive */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Why some providers are cheaper
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Generic off-the-shelf tools like Tradify and Jobber start from £35 to £55 per user per month. They are not bespoke and they are not built around your business. For trades doing simple repeatable jobs with standard pricing, they work well and represent good value. For trades where quoting is complex — where materials need calculating, specifications matter, and a wrong number costs you money — they run out of capability and you end up back in a spreadsheet for the hard part. Cheaper is not always worse. But it is always a different product.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Why some providers are more expensive
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Full custom software agencies charge between £10,000 and £50,000 for bespoke builds, with ongoing day rates for changes. OpsDeck sits between generic tools and full custom development — bespoke configuration at a fraction of custom build costs because we build on a proven platform rather than from scratch.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center">
              Pricing
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Every tier includes a bespoke build configured to your business. Setup fees are one-off. Monthly fees are rolling with no annual contract.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    tier.popular
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "bg-card text-foreground border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  {tier.forTeams && (
                    <span className="absolute top-4 right-4 bg-tag-bg text-tag-fg text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      For Teams
                    </span>
                  )}
                  <h3 className={`font-bold text-lg mb-3 ${tier.popular ? "" : "text-foreground"}`}>
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-black mb-1">{tier.monthly}</div>
                  <div
                    className={`text-sm mb-5 ${
                      tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    Setup {tier.setup}
                  </div>
                  <p
                    className={`text-sm leading-relaxed mb-6 flex-1 ${
                      tier.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    {tier.features}
                  </p>
                  <a
                    href="mailto:rob@opsdeck.co.uk"
                    className={`inline-flex items-center justify-center gap-2 w-full font-semibold px-3 py-2.5 rounded-lg transition-colors text-sm ${
                      tier.popular
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    Book a Free Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic leading-relaxed mt-8 max-w-3xl">
              Setup fees are quoted individually after your free consultation. The figures shown are starting points — your exact price is always agreed before any work begins.
            </p>
          </div>
        </section>

        {/* Done-For-You Services */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 text-center">
              Done-For-You Services — Fixed Prices
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Alongside the platform, OpsDeck delivers one-off services at fixed prices. Every price below is the full price — no quotes needed, no upsells. Click any service for the full breakdown.
            </p>
            <div className="space-y-10 md:space-y-12">
              {serviceGroups.map((group) => (
                <div key={group.name}>
                  <h3 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">
                    {group.name}
                  </h3>
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    <ul className="divide-y divide-border">
                      {group.services.map((service) => (
                        <li
                          key={service.href}
                          className="p-4 md:px-6 md:py-4 flex flex-col md:grid md:grid-cols-[2fr_auto_auto] md:gap-8 md:items-center gap-1"
                        >
                          <div>
                            <Link
                              href={service.href}
                              className="text-foreground font-semibold hover:text-primary transition-colors"
                            >
                              {service.name}
                            </Link>
                            {"note" in service && service.note && (
                              <span className="text-xs text-muted-foreground ml-2">
                                — {service.note}
                              </span>
                            )}
                          </div>
                          <span className="text-foreground font-bold whitespace-nowrap md:text-right">
                            {service.price}
                          </span>
                          <span className="text-muted-foreground text-sm whitespace-nowrap md:text-right">
                            {service.delivery}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto mt-10 leading-relaxed">
              Every service has its own page with exactly what you get, how it works, and how it compares. Free Business Health Check available at healthcheck.opsdeck.co.uk if you&apos;re not sure where to start.
            </p>
          </div>
        </section>

        {/* 12-month comparison */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              What does it actually cost over 12 months?
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Before comparing tools, look at what you actually pay over a full year — not just the monthly headline figure. Generic tools price per user. As your team grows, so does your bill.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl border-2 border-primary p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">OpsDeck Quote Builder</p>
                <div className="text-2xl md:text-3xl font-black text-foreground mb-2">
                  ~ £1,500
                </div>
                <p className="text-sm text-muted-foreground mb-5">Year 1 total — £300 setup plus 12 months at £100 per month</p>
                <p className="text-muted-foreground leading-relaxed">
                  Custom quoting engine built around your exact pricing logic, unlimited quotes, AI summaries, direct sending, ongoing support and hosting. Price does not change as your team grows.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Tradify or Jobber equivalent</p>
                <div className="text-2xl md:text-3xl font-black text-foreground mb-2">
                  £1,500–£1,900 <span className="text-base font-semibold text-muted-foreground">(3 users)</span>
                </div>
                <div className="text-lg font-bold text-foreground mb-2">
                  £4,000–£5,500 <span className="text-sm font-semibold text-muted-foreground">(8 users)</span>
                </div>
                <p className="text-xs text-muted-foreground italic mb-5">Source: current 2026 pricing from Tradify and Jobber websites</p>
                <p className="text-muted-foreground leading-relaxed">
                  Standard job management built for the average trade. Manual quoting. No custom logic. Per-user pricing that escalates as your team grows.
                </p>
              </div>
            </div>
            <p className="text-center text-foreground font-semibold mt-8">
              Same rough cost at 3 users. Nearly triple the cost at 8 users. OpsDeck pricing does not escalate with headcount.
            </p>
          </div>
        </section>

        {/* Payments */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              How payments work
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              No large upfront payment. The build fee is split across three milestones — you only pay when you are satisfied with what has been delivered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stages.map((s) => (
                <div key={s.n} className="bg-card rounded-2xl border border-border p-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-4">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-primary font-semibold mb-2">{s.fee}</p>
                  <p className="text-sm text-muted-foreground">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden costs */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 text-center">
              Hidden costs to watch for in this industry
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              These are the costs that do not appear in competitor headline pricing but appear on your invoice later.
            </p>
            <div className="space-y-4">
              {hidden.map((item) => (
                <div key={item.title} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-10 text-center">
              Common pricing questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-foreground font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
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
              Book your free 30-minute consultation
            </h2>
            <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              No hard sell. We will look at your business, identify the admin task costing you the most time, and give you a clear written scope before any cost is committed.
            </p>
            <a
              href="mailto:rob@opsdeck.co.uk"
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-cta-muted text-sm mt-6">
              Free. No obligation. Scope agreed before you pay anything.
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
