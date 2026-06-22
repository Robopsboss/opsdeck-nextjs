import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle = "Case Studies — Real Results for Trades Businesses | OpsDeck";
const pageDescription =
  "Real trades businesses, real operations — see what changed when Birdwell Insulation and Hi-Point Access partnered with OpsDeck.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    url: "https://opsdeck.co.uk/case-studies",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

// Add a new case study here and a card renders automatically.
const caseStudies = [
  {
    href: "/case-studies/birdwell",
    title: "Birdwell Insulation",
    summary:
      "How a Sheffield insulation firm went from 15-minute admin bottlenecks to professional quotes in under 30 seconds.",
  },
  {
    href: "/case-studies/hi-point",
    title: "Hi-Point Access",
    summary:
      "How a Sheffield scaffolding firm took its whole operation off paper — enquiry to dismantle.",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-dark text-hero-foreground">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Case Studies
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-hero-muted font-medium max-w-2xl leading-relaxed">
            Real trades businesses, real operations — here&apos;s what changed.
          </p>
        </div>
      </section>

      {/* Body — case study cards */}
      <section className="bg-background flex-1">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="group flex flex-col bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {study.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {study.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  Read the case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-hero-dark text-hero-foreground">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want results like this for your business?
          </h2>
          <a
            href="mailto:rob@opsdeck.co.uk"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
          >
            Book a Free Partnership Discovery Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
