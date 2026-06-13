import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Question")}`;
const HEALTH_CHECK_URL = "https://healthcheck.opsdeck.co.uk/";

const pageTitle = "Policy & Ethics | OpsDeck";
const pageDescription =
  "How OpsDeck operates — scope, pricing ethics, AI use, data, platform reliability, and how to raise a concern. Clear commitments in writing for UK trades businesses.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/policy-ethics" },
  openGraph: {
    url: "https://opsdeck.co.uk/policy-ethics",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "Do you offer refunds?",
    a: "Work is delivered against a scope or product description agreed before you pay. Because the work is bespoke and begins on approval, our position reflects work already carried out — but your statutory rights as a customer always apply. If something we deliver is genuinely not as described or not fit for the purpose we stated, we put it right. If you are unsure before ordering, talk to us first — we would rather make sure it is the right fit than take an order that is not.",
  },
  {
    q: "What are you responsible for, and what am I responsible for?",
    a: "We are responsible for delivering exactly what we describe, to the standard we describe. You are responsible for implementing it in your business. A sales process or marketing strategy only works if it is used — we build it properly; you run it.",
  },
  {
    q: "Will you ever quote a price before understanding my job?",
    a: "No. Platform setup is quoted only after a free consultation. Service prices are fixed and published upfront. We never guess at a price before we understand the work.",
  },
  {
    q: "Do you use AI to do the work?",
    a: "Yes — OpsDeck builds AI tools and uses AI in delivering work, always with human review and Rob's personal oversight. We are open about it.",
  },
  {
    q: "What happens if the platform goes down?",
    a: "The monthly subscription covers hosting, monitoring, and support. If downtime exceeds 48 continuous hours, that month's subscription is reduced by half, as set out in the Master Service Agreement.",
  },
  {
    q: "How do I raise a problem?",
    a: "Email rob@opsdeck.co.uk or call 07837 698 283. You deal directly with Rob.",
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://opsdeck.co.uk/policy-ethics#webpage",
      url: "https://opsdeck.co.uk/policy-ethics",
      name: "Policy & Ethics",
      description: pageDescription,
      about: { "@id": "https://opsdeck.co.uk/#organization" },
      publisher: { "@id": "https://opsdeck.co.uk/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const Section = ({
  children,
  alt = false,
}: {
  children: ReactNode;
  alt?: boolean;
}) => (
  <section className={alt ? "bg-section-alt" : "bg-background"}>
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      {children}
    </div>
  </section>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
    {children}
  </h2>
);

const Body = ({ children }: { children: ReactNode }) => (
  <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
    {children}
  </div>
);

const inlineLink = "text-primary hover:underline font-medium";

export default function PolicyEthicsPage() {
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
              Policy &amp; Ethics
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              How we operate — clearly, and in writing
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-3xl">
              A straight account of how OpsDeck works, what we commit to, and how we handle the things that matter — for clients deciding whether to trust us with their business, and so there are no surprises later.
            </p>
          </div>
        </section>

        {/* 1 — How We Work */}
        <Section>
          <H2>How We Work</H2>
          <Body>
            <p>
              Every piece of work OpsDeck delivers starts with a written scope. For platform builds, that is a full scope of works agreed and signed off before any payment is taken or any build begins — exactly what will be built, what is not included, and the cost. For fixed-price services, the deliverable and price are stated upfront on the product page before you order. We do not start work, and we do not invoice, until what we are delivering is clear and agreed. Nothing is open-ended.
            </p>
          </Body>
        </Section>

        {/* 2 — What We Deliver and What's Yours to Run */}
        <Section alt>
          <H2>What We Deliver and What&apos;s Yours to Run</H2>
          <Body>
            <p>
              We are precise about what we deliver. When we say we will build something, we build exactly that. When we deliver a document, a profile, or a set of pages, it is delivered as described on the product page — no exaggeration, no overselling, no claims we cannot stand behind. We never mis-sell.
            </p>
            <p>
              What happens after delivery is where the line sits. Many of our services — a sales process, a marketing strategy, a review system, an optimised profile — only produce results if they are used. We give you the tool, the document, or the system, built properly and ready to work. Putting it into practice in your business is yours to do. We are responsible for delivering what we promised to the standard we promised. We are honest that results from sales, marketing, and growth work depend on the business implementing and sticking with it.
            </p>
            <p>
              Your statutory rights as a customer are unaffected by anything on this page. If something we deliver is genuinely not as described or not fit for the purpose we stated, we put it right — that is both your legal right and how we choose to operate.
            </p>
          </Body>
        </Section>

        {/* 3 — Pricing and Estimate Ethics */}
        <Section>
          <H2>Pricing and Estimate Ethics</H2>
          <Body>
            <p>
              All costs are agreed in writing before you pay anything. Platform setup fees are quoted individually after a free consultation, never guessed at before we understand the work. Service prices are fixed and published. We never quote a build fee before understanding the job — any company that prices before scoping is guessing, and you pay for that guess. No hidden costs, no escalation after the fact. If scope changes after approval, the change is quoted separately and agreed before it is built.
            </p>
          </Body>
        </Section>

        {/* 4 — Platform Reliability */}
        <Section alt>
          <H2>Platform Reliability</H2>
          <Body>
            <p>
              For platform clients on a monthly subscription, the subscription covers hosting, monitoring, support, bug fixes, and minor updates. Where platform downtime exceeds 48 continuous hours, the affected month&apos;s subscription is reduced by half. This is set out in the Master Service Agreement provided to every platform client.
            </p>
          </Body>
        </Section>

        {/* 5 — Use of AI */}
        <Section>
          <H2>Use of AI</H2>
          <Body>
            <p>
              OpsDeck builds AI-powered tools, and we use AI in our own work — in building platforms and in producing documents and content. Every deliverable is reviewed and stands behind Rob France personally. AI is a tool we use to do the work faster and better; it does not replace the judgement, oversight, or accountability of the person delivering it. We are open about this because we think you should know how the work is made.
            </p>
          </Body>
        </Section>

        {/* 6 — Licensing, Insurance and Registration */}
        <Section alt>
          <H2>Licensing, Insurance and Registration</H2>
          <Body>
            <p>
              OpsDeck Ltd is a UK registered company (Company No.{" "}
              <span className="whitespace-nowrap">17075735</span>) and is registered with the Information Commissioner&apos;s Office (ICO Registration No.{" "}
              <span className="whitespace-nowrap">ZC126490</span>) for the handling of data.
            </p>
          </Body>
        </Section>

        {/* 7 — Your Data */}
        <Section>
          <H2>Your Data</H2>
          <Body>
            <p>
              Your data is yours. It can be exported in full at any time and is never locked in a proprietary format. OpsDeck is ICO registered and handles personal and business data in line with UK data protection requirements. Full detail is in our{" "}
              <Link href="/privacy-policy" className={inlineLink}>
                Privacy Policy
              </Link>
              .
            </p>
          </Body>
        </Section>

        {/* 8 — Raising a Concern */}
        <Section alt>
          <H2>Raising a Concern</H2>
          <Body>
            <p>
              If something is not right, the fastest route is straight to Rob — email{" "}
              <a href="mailto:rob@opsdeck.co.uk" className={inlineLink}>
                rob@opsdeck.co.uk
              </a>{" "}
              or call{" "}
              <a href="tel:07837698283" className={inlineLink}>
                07837 698 283
              </a>
              . You deal directly with the person who built and delivered the work, not a support queue. We would always rather hear about a problem early and put it right than have you sit on it.
            </p>
          </Body>
        </Section>

        {/* 9 — FAQ */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
              Frequently asked
            </h2>
            <Accordion type="multiple" className="w-full">
              {faqs.map((f) => {
                const id = slugify(f.q);
                return (
                  <AccordionItem key={id} value={id} id={id}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pr-6">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-cta text-cta-foreground">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions before you commit?
            </h2>
            <p className="text-cta-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              The best place to start if you&apos;re not sure is the free Business Health Check, or a straight conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-background/90 transition-colors text-base"
              >
                Take the Health Check
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 text-cta-foreground font-medium underline underline-offset-4 hover:no-underline"
              >
                Book a consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
