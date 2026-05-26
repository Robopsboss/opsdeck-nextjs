import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle = "OpsDeck — Real Results for Trades Businesses";
const pageDescription =
  "See how trades businesses like Birdwell Insulation Ltd and High Point Access Ltd save hours every week with OpsDeck.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/case-studies/birdwell" },
  openGraph: {
    url: "https://opsdeck.co.uk/case-studies/birdwell",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

export default function CaseStudyBirdwellPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
            Birdwell Insulation — How OpsDeck transformed their quoting process
          </h1>
          <p className="text-lg md:text-xl text-hero-muted font-medium max-w-2xl leading-relaxed">
            From 15-minute admin bottlenecks to professional quotes in under 30 seconds.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background flex-1">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Birdwell Insulation Ltd are Sheffield-based insulation installers and sheet metal engineers, delivering industrial insulation, ductwork, plantrooms, and cladding across South Yorkshire since 1993.
            </p>
            <p>
              Like most specialist contractors, Birdwell receive enquiries, price the job, and need to get a professional quote back to the customer. Their contracts managers would work out the figures in Excel, send a quick price back to the customer to confirm interest, then the Excel sheet would join a pile waiting to be typed up properly.
            </p>
            <p>
              That typing up fell to an admin person who would work through the pile in batches — extracting figures, copying in addresses, matching the right spec, formatting it into a branded Word document. Around 15 minutes per quote. Time consuming, disconnected from the original pricing work, and always a step behind.
            </p>
            <p className="text-foreground font-semibold text-xl">
              Now the process is unrecognisable.
            </p>
            <p>
              The contracts manager prices the job in Excel as normal, drags and drops the spreadsheet into OpsDeck&apos;s custom converter, and a fully branded professional quote document is ready in under 30 seconds. Same day. Same hour. Sometimes within minutes of the enquiry arriving.
            </p>
            <p>
              The admin bottleneck is gone. The pile no longer exists. And Birdwell are winning more work because professional, detailed quotes are landing in customers&apos; inboxes the same day — not days later when the admin pile gets cleared.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want results like this for your business?
            </h2>
            <a
              href="mailto:rob@opsdeck.co.uk"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-base"
            >
              Book a Free Partnership Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
