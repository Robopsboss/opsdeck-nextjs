import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle = "Hi-Point Access — How OpsDeck took their whole operation off paper | OpsDeck";
const pageDescription =
  "From printed job packs and WhatsApp photo hunts to one job file, live on every phone — see how OpsDeck took Hi-Point Access off paper, enquiry to dismantle.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/case-studies/hi-point" },
  openGraph: {
    url: "https://opsdeck.co.uk/case-studies/hi-point",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

export default function CaseStudyHiPointPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-dark text-hero-foreground">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
            Hi-Point Access — How OpsDeck took their whole operation off paper
          </h1>
          <p className="text-lg md:text-xl text-hero-muted font-medium max-w-2xl leading-relaxed">
            From printed job packs and WhatsApp photo hunts to one job file, live on every phone — enquiry to dismantle.
          </p>

          {/* Client mark — who this is about */}
          <div className="mt-10 inline-flex items-center rounded-xl bg-card p-4">
            <Image
              src="/hi-point-logo.jpg"
              alt="Hi-Point Access Ltd"
              width={595}
              height={780}
              className="h-20 w-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background flex-1">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Hi-Point Access Ltd are Sheffield-based scaffolding and access specialists, working across South Yorkshire on council frameworks and private contracts.
            </p>
            <p>
              Like most established scaffolding firms, Hi-Point&apos;s work was never the problem — the admin wrapped around it was. Every council job arrived as a stack of paper: requisitions, asbestos reports, drawings and compliance sheets, all printed, filed by hand, then gathered up by hand again every time something had to go back to the council portal.
            </p>
            <p>
              Site photos came in over WhatsApp with no fixed home, so the office spent hours matching pictures to the right job. Handover sheets were printed off separate software, signed on paper, and stored in folders. Inspection dates were typed into spreadsheets manually. The whole job tracker lived in a spreadsheet and a diary — always a step behind the work happening on site.
            </p>
            <p className="text-foreground font-semibold text-xl">
              Now the operation is unrecognisable.
            </p>
            <p>
              Every job lives in one file from the moment it lands to the day it&apos;s dismantled. Documents drag and drop straight onto the job — no printing, no folders, no re-gathering for the portal. Operatives upload site photos straight from their phone onto the right job, compressed automatically. Foremen open a link, see their work, add notes and mark it complete from site. The office sees every job, every stage and every team allocation in one place — and the full council compliance pack downloads in a single click.
            </p>
            <p>
              The paper&apos;s gone. The spreadsheet&apos;s gone. The WhatsApp photo hunt is gone. And the office has its time back to run the business instead of chasing it.
            </p>
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
