import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pageTitle = "Frequently Asked Questions | OpsDeck";
const pageDescription =
  "Straight answers about the OpsDeck platform, done-for-you services, pricing, delivery times, contracts, and data ownership — for UK trades businesses.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "https://opsdeck.co.uk/faq",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

type FaqEntry = { q: string; a: string };
type FaqSection = { name: string; entries: FaqEntry[] };

const sections: FaqSection[] = [
  {
    name: "About OpsDeck",
    entries: [
      {
        q: "What is OpsDeck?",
        a: "OpsDeck is a Sheffield-based company that builds AI-powered admin tools and delivers done-for-you growth and compliance services for UK trades businesses. There are two sides to it: a bespoke platform (quoting, dashboards, team management, and invoicing built around how your business actually works, from £75/month) and fixed-price services from £97 to £750 — websites, Google Business Profile setup, AEO pages, review systems, compliance documents, and sales and marketing strategy.",
      },
      {
        q: "Who is behind OpsDeck?",
        a: "Rob France. He runs Infascape, a landscaping and surfacing company in Sheffield, and built OpsDeck because he needed it in his own business first. He still uses it every day, and he works directly with every customer — there is no account manager layer between you and the person who builds your tools.",
      },
      {
        q: "Who is OpsDeck for?",
        a: "Trades businesses where the quote itself is complicated — where materials need calculating, specifications matter, and a wrong number costs money. Groundworks, landscaping, insulation, roofing, fencing, and similar trades. If you're quoting two hours of labour and a call-out fee, generic tools like Tradify or Jobber will serve you well. If your quotes take time and brainpower to get right, OpsDeck was built for you.",
      },
      {
        q: "What area does OpsDeck cover?",
        a: "OpsDeck is based in Sheffield and works with trades businesses across the whole of the UK. The platform and all services are delivered remotely — consultations happen by phone or video call, and documents are delivered digitally.",
      },
      {
        q: "What is the free Business Health Check?",
        a: "A free online assessment at healthcheck.opsdeck.co.uk that takes 10–15 minutes and scores the key areas of your business — your results are emailed to you immediately. It's the best starting point if you know something is off but aren't sure what to fix first. If you want an expert read on your results, the [Priority Action Call](/priority-action-call) (£97) is a 30-minute call where Rob reviews your results before you speak and tells you exactly what to fix first.",
      },
    ],
  },
  {
    name: "The OpsDeck Platform",
    entries: [
      {
        q: "How much does the OpsDeck platform cost?",
        a: "Monthly subscriptions run from £75 to £250 per month depending on tier, with one-off setup fees from £200 to £1,000 or more depending on complexity. All costs are agreed in writing before you pay anything. Full breakdown on the [pricing page](/pricing).",
      },
      {
        q: "What are the platform tiers?",
        a: "Four tiers: AI Tools & Automation (£75/month — single-purpose automation), Quote Builder (£100/month — voice or manual quoting with adaptive price memory), Quote Builder + Dashboard (£150/month — quoting plus full business dashboard, the most popular tier), and Full Operations Platform (£250/month — everything plus team integration, operative management, and multi-user access). The right tier is confirmed during a free consultation, not before it.",
      },
      {
        q: "How does the build process work?",
        a: "Six steps: a free one-hour consultation walking through your workflow; a complete written scope with fixed costs within 5 working days; build begins on scope approval; a working demo delivered for you to test, with one round of revisions included; revisions, go-live, and full handover with a training call; then the monthly subscription begins. Nothing is built and nothing is invoiced until you approve the scope in writing.",
      },
      {
        q: "When does the monthly subscription start?",
        a: "From go-live — not from when the build starts. You don't pay a monthly fee for a platform that isn't live yet.",
      },
      {
        q: "How do payments work?",
        a: "The setup fee is split across three milestones: one third on scope approval, one third when you sign off the two-week demo, and the final third at go-live. No large upfront payment, and you only pay each stage when you're satisfied with what's been delivered.",
      },
      {
        q: "Are there annual contracts?",
        a: "No. The subscription is rolling monthly with 30 days' notice. No 12-month lock-in, no exit fees.",
      },
      {
        q: "Does the price change as my team grows?",
        a: "No. OpsDeck pricing is per organisation, not per seat. Generic tools charge per user, so three users today becomes triple the bill at eight users. Your OpsDeck price stays the same as your team grows.",
      },
      {
        q: "What's included in the monthly subscription?",
        a: "Hosting, monitoring, support, bug fixes, and minor updates. The subscription is an ongoing partnership — Rob maintains the platform and new functionality is scoped whenever you're ready to grow it.",
      },
      {
        q: "Who owns the platform and data once it is built?",
        a: "Your data is yours always and can be exported in full at any time. The underlying platform is operated and maintained by OpsDeck on your behalf. Full terms are set out in the scope of works document before any build begins.",
      },
      {
        q: "Can I upgrade my tier later?",
        a: "Yes. Most customers start with the tier that solves their biggest problem and add functionality as the business grows. Upgrades are scoped and agreed in writing the same way as the original build.",
      },
      {
        q: "What happens if I want to cancel?",
        a: "Give 30 days' notice. Your data is exported in full and handed to you. No penalties, no exit fees.",
      },
    ],
  },
  {
    name: "Done-For-You Services",
    entries: [
      {
        q: "What services does OpsDeck offer besides the platform?",
        a: "Fourteen fixed-price services across three areas. Getting found and winning work: [Website Build](/website-build) (from £750), [GBP Setup & Optimisation](/gbp-setup) (£297), [AEO Page Build](/aeo-page-build) (£397), [Google Review System](/google-review-system) (£147), [LinkedIn Profile Optimisation](/linkedin-optimisation) (£147), and the [Website Optimisation Pack](/website-optimisation) (£397). Strategy and sales: [Priority Action Call](/priority-action-call) (£97), [Sales Process Document](/sales-process) (£597), and [6 Month Marketing Strategy](/marketing-strategy) (£597). Compliance and commercial: [RAMS & Method Statement Pack](/rams-method-statement) (£247), [Compliance Document Pack](/compliance-pack) (£197), [Company Profile Pack](/company-profile) (£147), [Terms & Conditions Template](/tcs-template) (£97), and the [Commercial Readiness Pack](/commercial-readiness) bundle (£497).",
      },
      {
        q: "How do I order a service?",
        a: "Most services are pay-and-go: click Get Started on the service page, complete payment, and email rob@opsdeck.co.uk with the subject line shown on the page — your intake form is sent the same day. Four services start with a free conversation instead, because they need scoping first: the Website Build, Sales Process Document, 6 Month Marketing Strategy, and Commercial Readiness Pack.",
      },
      {
        q: "How long do services take to deliver?",
        a: "Between 3 and 15 working days from your completed intake form, depending on the service. The fastest are the Google Review System and T&Cs Template at 3 working days; most document and optimisation services are 5; the AEO Page Build and strategy documents are 7; a full Website Build is 10–15. Every service page states its delivery time, and the clock starts when your intake form is complete.",
      },
      {
        q: "What is AEO and why does it matter?",
        a: "AEO is Answer Engine Optimisation — structuring your website so AI tools like ChatGPT, Google AI Overviews, and Perplexity can find, read, and cite it when someone asks them to recommend a service in your area. These tools are already the first place many buyers look, and they recommend businesses whose sites directly answer buyer questions about pricing, services, and reputation. Businesses without that structure simply don't appear, regardless of how good their work is.",
      },
      {
        q: "What's the difference between the Website Build and the Website Optimisation Pack?",
        a: "The Website Build (from £750) is a complete new site, written and built from scratch on Next.js, AEO-ready from day one. The Website Optimisation Pack (£397) keeps your existing site and fixes the content — a 15-point audit, identification of the three highest-impact changes, and a rewrite of your homepage, pricing, and service page copy. If your site's bones are fine but it isn't generating enquiries, optimise. If there's no site or it's beyond saving, build.",
      },
      {
        q: "What is the Commercial Readiness Pack?",
        a: "A bundle of the three documents principal contractors and commercial clients ask for: the RAMS & Method Statement Pack, the Compliance Document Pack, and the Company Profile Pack. Bought separately they cost £591; the bundle is £497 — and all three are built from a single intake form, so you answer everything once. Full details on the [Commercial Readiness Pack page](/commercial-readiness).",
      },
      {
        q: "Are the compliance documents and T&Cs legal advice?",
        a: "No. They are professionally written, trade-specific working documents — not legal advice. For contracts of significant value, have a solicitor review your T&Cs before first use.",
      },
      {
        q: "Are the documents generic templates with my logo on?",
        a: "No — that's exactly the problem they exist to solve. Every document is written from your intake form: your trade's actual hazards and controls in the RAMS, your team structure and first aider in the H&S policy, your real projects in the company profile, your voice in the scripts and templates. Experienced commercial clients can spot a downloaded template in thirty seconds; these are written so they never have to.",
      },
    ],
  },
  {
    name: "Working With OpsDeck",
    entries: [
      {
        q: "Do I need to be technical to use any of this?",
        a: "No. The platform is built around how you already work — you don't change your process, OpsDeck automates it. Services are delivered as finished documents, completed profiles, or ready-to-publish pages, with a handover guide where there's anything to maintain. Everything is explained in plain English; there's no jargon at any stage.",
      },
      {
        q: "Why should I trust a small company over an established software provider?",
        a: "Because the established providers sell you their process; OpsDeck builds around yours. Tradify and Jobber are good products for simple, repeatable jobs — OpsDeck says so openly on its [pricing page](/pricing). But they're built for the average trade, priced per seat, and can't be customised without developer day rates. OpsDeck is built by a tradesman who uses it daily in his own business, every build is bespoke, pricing is per organisation, and you deal directly with the person who built it. Read how that worked for [Birdwell Insulation](/case-studies/birdwell).",
      },
      {
        q: "Can I see it working before I commit?",
        a: "Yes, three ways: real quote outputs are shown on the [homepage](/), live demos are on the [OpsDeck Facebook page](https://www.facebook.com/opsdeck), and a working demo of your own build is delivered for testing before go-live — with a revision round included and the final payment milestone only due at launch.",
      },
      {
        q: "What if my question isn't answered here?",
        a: "Email rob@opsdeck.co.uk or call 07837 698 283 — you'll be speaking to the person who builds the tools, not a sales team. Or start with the free Business Health Check at healthcheck.opsdeck.co.uk.",
      },
    ],
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const stripMarkdownLinks = (s: string) =>
  s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

const renderAnswer = (text: string) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>
      );
    }
    const [, label, url] = match;
    const isExternal =
      url.startsWith("http") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:");
    if (isExternal) {
      parts.push(
        <a
          key={key++}
          href={url}
          target={url.startsWith("http") ? "_blank" : undefined}
          rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-primary hover:underline"
        >
          {label}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={key++}
          href={url}
          className="text-primary hover:underline"
        >
          {label}
        </Link>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return <>{parts}</>;
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.flatMap((section) =>
    section.entries.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdownLinks(entry.a),
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero */}
        <section className="bg-hero-dark text-hero-foreground">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-3xl">
              Straight answers about the OpsDeck platform, our done-for-you services, pricing, and how we work. If your question isn&apos;t here, email{" "}
              <a
                href="mailto:rob@opsdeck.co.uk"
                className="text-hero-foreground font-medium underline hover:no-underline"
              >
                rob@opsdeck.co.uk
              </a>
              {" "}and you&apos;ll get a straight answer there too.
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="bg-background flex-1">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            {sections.map((section, sIndex) => (
              <div
                key={section.name}
                className={sIndex > 0 ? "mt-12 md:mt-16" : ""}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {section.name}
                </h2>
                <Accordion type="multiple" className="w-full">
                  {section.entries.map((entry) => {
                    const id = slugify(entry.q);
                    return (
                      <AccordionItem key={id} value={id} id={id}>
                        <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground py-5">
                          {entry.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pr-6">
                          {renderAnswer(entry.a)}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-hero-dark text-hero-foreground">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Email{" "}
              <a
                href="mailto:rob@opsdeck.co.uk"
                className="text-hero-foreground font-medium underline hover:no-underline"
              >
                rob@opsdeck.co.uk
              </a>
              {" "}or call{" "}
              <a
                href="tel:07837698283"
                className="text-hero-foreground font-medium underline hover:no-underline"
              >
                07837 698 283
              </a>
              {" "}— you&apos;ll speak directly to Rob.
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
