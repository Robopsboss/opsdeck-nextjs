import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Wrench, ShieldCheck, Users, Clock } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const timelineSteps = [
  {
    label: "The start",
    text: "Built a quoting tool for Infascape because nothing on the market could handle complex material calculations.",
  },
  {
    label: "It grew",
    text: "Added quoting, analytics, profit analysis, calendar view, job management. One problem at a time.",
  },
  {
    label: "The realisation",
    text: "Talking to other tradesmen, saw the same problems everywhere. Paper on walls, disconnected tools, evenings lost to admin.",
  },
  {
    label: "OpsDeck 2026",
    text: "Building bespoke automation platforms for trades businesses across the UK. Still using it every day in my own business.",
  },
];

const valueCards = [
  {
    icon: Wrench,
    heading: "Built by someone who uses it",
    body: "OpsDeck runs Infascape every day. I'm not selling something I built once and handed over.",
  },
  {
    icon: ShieldCheck,
    heading: "No corners cut",
    body: "Same principle as Infascape. Do it right or don't do it. Foundations matter in software too.",
  },
  {
    icon: Users,
    heading: "Direct partnership",
    body: "Every client works with me personally. Not a support team. Not a ticket system. Me.",
  },
  {
    icon: Clock,
    heading: "Evenings back",
    body: "I built this because I wanted my evenings back. That is what I want for every client too.",
  },
];

const pageTitle = "About Rob France — Built by a Tradesman for Trades Businesses | OpsDeck";
const pageDescription =
  "Rob France spent 20 years in the trades before building OpsDeck. Built by a tradesman, used every day in his own landscaping business, now building bespoke automation for trades businesses across the UK.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://opsdeck.co.uk/about",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
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
            about
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
            Built by a tradesman who got fed up doing it the hard way
          </h1>
          <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
            OpsDeck exists because I needed it. I spent twenty years in the trades watching evenings disappear into laptops and business owners lose hours to admin that should have been automated. Then I did something about it.
          </p>

          {/* Profile row */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold shrink-0">
              RF
            </div>
            <div>
              <p className="font-bold text-base">Rob France</p>
              <p className="text-hero-muted text-sm">Founder, OpsDeck Ltd</p>
              <p className="text-hero-muted text-sm">Owner, Infascape Ltd — Sheffield landscaping and surfacing</p>
              <p className="text-hero-muted/70 text-xs mt-0.5">Sheffield, South Yorkshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Twenty years */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Twenty years. Then enough was enough.
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I spent two decades working for someone else in the trades. I was good at the work. But I watched bad workmanship go unchallenged, corners get cut, and customers get let down — and nobody seemed to care as long as the money came in.
            </p>
            <p>
              So I left. I started Infascape Ltd and went out on my own. And I quickly realised I could do better — not just at the work, but at the whole thing. The preparation, the foundations, the attention to detail, the peace of mind for customers. I built Infascape on one principle: do it right or don&apos;t do it at all.
            </p>
            <p>
              We&apos;re still running on that principle today. Booked solid in Sheffield because word gets around when a job is built to last.
            </p>
          </div>

          {/* Pull quote */}
          <div className="mt-10 bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
            <p className="text-foreground text-base md:text-lg leading-relaxed italic">
              &ldquo;I&apos;ve been back to jobs done by other companies only two or three years earlier — already falling apart. That&apos;s why we don&apos;t cut corners. Foundations, infrastructure, quality throughout. A job should last. If it doesn&apos;t, what was the point?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The laptop problem */}
      <section className="bg-section-alt">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            The laptop problem.
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Running Infascape, I started to notice something. I was good at the work. I was building a reputation. But every evening I wasn&apos;t with my kids — I was on my laptop.
            </p>
            <p>
              I&apos;ve got a six year old and an eleven year old. Those evenings matter. And I was spending them typing up quotes, chasing invoices, keeping notes in my head because I hadn&apos;t got a system for any of it. A million things to remember and no platform to put them on.
            </p>
            <p>
              I started educating myself. Business coaching, AI tools, systems thinking. I understood that the problem wasn&apos;t the workload — it was the lack of automation. So I started building.
            </p>
          </div>

          {/* Stat cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <p className="text-4xl font-black text-primary mb-2">20+</p>
              <p className="text-muted-foreground text-sm">Years in the trades before founding OpsDeck</p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <p className="text-4xl font-black text-primary mb-2">43</p>
              <p className="text-muted-foreground text-sm">Age when he built a software platform from scratch</p>
            </div>
          </div>
        </div>
      </section>

      {/* How OpsDeck actually started */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How OpsDeck actually started.
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I didn&apos;t sit down and decide to build a software company. I built a quoting tool for myself — one that could handle the complex calculations Infascape needed. Area calculations, material quantities, productivity rates, margins. The stuff generic tools couldn&apos;t do.
            </p>
            <p>
              Then I added the ability to send quotes directly from the app. Then analytics. Then profit analysis. Then a calendar view. Then job management. Then a full dashboard. One problem at a time, one solution at a time, until I had something that ran my entire business.
            </p>
            <p>
              I was talking to other tradesmen about it and kept seeing the same thing — paper on walls, massive calendars, three separate apps that didn&apos;t talk to each other, business owners still doing everything the way it was done twenty years ago. I realised what I&apos;d built wasn&apos;t just useful for me. It was what everyone around me needed.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-12 relative">
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border md:left-[23px]" />
            <div className="space-y-10">
              {timelineSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 md:w-12 md:h-12 md:text-base">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">
                      {step.label}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters to you */}
      <section className="bg-section-alt">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why this matters to you.
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am not a software salesperson. I am a tradesman who built his own solution and now builds it for others. I use OpsDeck every single day in Infascape. When something isn&apos;t working, I feel it before any of my clients do.
            </p>
            <p>
              When I come to your business for a consultation, I am not reading from a script. I understand how a trades business runs because I run one. I understand the chaos of a job that overruns, a quote that takes too long, a team member who needs briefing at 7am before they drive to site. I have lived all of it.
            </p>
            <p>
              That is why the businesses I build for get something that actually works — not a generic tool adapted to fit them, but a platform built around how they already operate.
            </p>
          </div>

          {/* Value cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.heading}
                  className="bg-card rounded-xl p-8 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.heading}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cta text-cta-foreground">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to know if OpsDeck is right for your business?
          </h2>
          <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute consultation. I&apos;ll come to you, understand how your business runs, and tell you honestly what I can automate — and what it will cost.
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
  );
}
