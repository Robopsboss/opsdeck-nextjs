import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle = "Rob France — Founder, OpsDeck Ltd";
const pageDescription =
  "Rob France spent 4 years running a trades business before building OpsDeck. Founder of OpsDeck Ltd and owner of Infascape, Sheffield.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/author/rob-france" },
  openGraph: {
    url: "https://opsdeck.co.uk/author/rob-france",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const expertise = [
  {
    title: "Trades quoting systems",
    body: "Complex material calculations, margin logic, and automated job reference generation for landscaping and surfacing workflows.",
  },
  {
    title: "Admin automation",
    body: "Converting manual paper-based processes into automated workflows — quoting, scheduling, invoicing, and reporting without back-office staff.",
  },
  {
    title: "Job and project management",
    body: "End-to-end job tracking for landscaping, surfacing, and groundworks — from enquiry through to payment.",
  },
  {
    title: "Software onboarding",
    body: "Structured discovery and configuration of bespoke platforms for small UK trades businesses with no in-house tech resource.",
  },
  {
    title: "Lean trades operations",
    body: "Running a trades business at full capacity without a full-time admin function — using systems and automation instead.",
  },
  {
    title: "Trades business development",
    body: "Applying structured sales and growth methodology to owner-operated trades companies.",
  },
];

const timeline = [
  {
    date: "2022",
    title: "Founded RCF Property Solutions",
    body: "Started trading as a Sheffield-based landscaping and surfacing operator. Ran all quoting, scheduling, and admin without a dedicated system from day one.",
  },
  {
    date: "April 2024",
    title: "Incorporated Infascape Ltd",
    body: "Formalised the business under a new company. Same trade, same focus, sharper structure. Began growing the customer base across Sheffield and South Yorkshire.",
  },
  {
    date: "Late 2025",
    title: "Started building OpsDeck",
    body: "Identified that no off-the-shelf platform could handle real trades quoting complexity. Started 500+ hours of evenings and weekends building a bespoke solution — using Infascape as the live test environment.",
  },
  {
    date: "2026",
    title: "OpsDeck Ltd Incorporated",
    body: "OpsDeck registered as a standalone company. Platform ready for external clients.",
  },
  {
    date: "January 2026",
    title: "First paying customer",
    body: "Birdwell Insulation Ltd became OpsDeck's first paying external customer.",
  },
  {
    date: "April 2026",
    title: "First full Field Ops platform client",
    body: "Hi-Point Access Ltd onboarded onto the full pipeline, job management, and FieldOps module. Infascape booked to capacity through late 2026 running on OpsDeck as its sole operating platform.",
  },
];

const topics = [
  "Trades quoting software",
  "Admin automation for tradespeople",
  "SaaS for SME trades businesses",
  "Landscaping operations",
  "Material cost calculations",
  "Multi-tenant SaaS architecture",
  "Trades business founder stories",
  "Digital transformation for trades",
  "UK small business operations",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://opsdeck.co.uk/author/rob-france#person",
  name: "Rob France",
  jobTitle: "Founder",
  worksFor: { "@id": "https://opsdeck.co.uk/#organization" },
  url: "https://opsdeck.co.uk/author/rob-france",
  image: "https://opsdeck.co.uk/rob-france.jpg",
  sameAs: ["https://www.linkedin.com/in/robert-france-391bb4269/"],
  knowsAbout: [
    "trades business automation",
    "quoting systems for tradespeople",
    "landscaping business management",
    "small business admin software UK",
  ],
};

export default function AuthorRobFrancePage() {
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
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-5xl">
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                  Founder
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-3">
                  Rob France
                </h1>
                <p className="text-hero-muted text-base md:text-lg mb-6">
                  Founder, OpsDeck Ltd · Owner, Infascape Ltd
                </p>
                <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
                  Rob France spent four years running a Sheffield landscaping and surfacing business before building the platform he could never find on the market. He is the founder of OpsDeck Ltd — a platform built around real trades workflows, not hypothetical ones — and still runs Infascape Ltd, where OpsDeck is the production system managing every job, quote, and operative.
                </p>
              </div>
              <div className="shrink-0 w-48 md:w-64 lg:w-72 mx-auto md:mx-0">
                <Image
                  src="/rob-france.jpg"
                  alt="Rob France, Founder of OpsDeck"
                  width={320}
                  height={320}
                  className="rounded-2xl border-4 border-white/15 w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Biography</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Rob France started in trade in 2022, operating as RCF Property Solutions before incorporating as Infascape Ltd in April 2024 — the same business, formalised. From the outset, Rob ran the company without an admin function, handling quoting, scheduling, job management, and invoicing himself. He used every off-the-shelf tool on the market. None of them handled the complexity of trades quoting — multi-product material calculations, variable margins, live labour rates — without collapsing into spreadsheets.
              </p>
              <p>
                In late 2025, Rob started building OpsDeck. Not as a side project, but as the operating system for his own business — built in the evenings and at weekends, logging over 500 hours of development while running Infascape at full capacity. The platform now manages Infascape&apos;s entire workflow: quoting, job tracking, operative allocation, client communications, and reporting. Infascape has been booked to capacity through late 2026. That is the proof of concept.
              </p>
              <p>
                OpsDeck Ltd was incorporated to take that system to other trades businesses. Rob&apos;s approach is practitioner-first — he onboards customers through a structured discovery process, maps their existing workflows, and configures OpsDeck around the specifics of their trade rather than expecting trades businesses to adapt to generic software logic. Current customers include Birdwell Insulation Ltd and Hi-Point Access Ltd.
              </p>
              <p>
                What separates Rob from typical SaaS founders is the absence of a gap between builder and user. Every feature in OpsDeck exists because Rob needed it first. He is currently enrolled in structured sales training through ActionCOACH Sheffield, applying the same systematic discipline to business development that he applied to the platform build itself.
              </p>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Areas of expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((e) => (
                <div
                  key={e.title}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {e.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials callout */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
            <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Practitioner credibility
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Rob holds no formal trade qualifications and no software development certificates. His credibility is grounded in four years of running a trades business, 500+ hours of hands-on platform development, and a live production system that runs a real company with real customers. He does not claim credentials he does not hold.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Experience timeline</h2>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              <ol className="space-y-10">
                {timeline.map((t) => (
                  <li key={t.date} className="relative pl-8">
                    <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">
                      {t.date}
                    </p>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {t.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {t.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Topics covered */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Topics covered</h2>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <span
                  key={t}
                  className="bg-tag-bg text-tag-fg text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured content */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured content</h2>
            <Link
              href="/blog/why-every-quoting-tool-failed"
              className="group block bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary transition-colors"
            >
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
                Article · June 2026
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                Why Every Quoting Tool I Tried Failed My Trades Business — And What I Built Instead
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rob France on four years of admin chaos, the tools that failed, building OpsDeck from scratch, and what it actually took to get off the laptop at night.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* Professional links */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Professional links</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/robert-france-391bb4269/"
                  rel="author noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn — Robert France</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span className="font-medium">OpsDeck — opsdeck.co.uk</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:rob@opsdeck.co.uk"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">rob@opsdeck.co.uk</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
