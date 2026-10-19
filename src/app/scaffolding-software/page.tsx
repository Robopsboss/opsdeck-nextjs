import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Camera,
  ClipboardCheck,
  Eye,
  FileCheck,
  HardHat,
  MessageCircle,
  Phone,
  Receipt,
  Truck,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import YourData from "@/components/landing/YourData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PAGE_URL = "https://opsdeck.co.uk/scaffolding-software";
const MAILTO = `mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("Scaffolding walkthrough")}`;
const CHECK_URL = "https://check.opsdeck.co.uk/";

const pageTitle =
  "Scaffolding Software for UK Scaffolding Firms — Built Around Your Yard | OpsDeck";
const pageDescription =
  "Scaffolding job management software built around how your firm already runs: surveys, erects, alterations, dismantles, hire-week tracking, handover certificates and two-stage invoicing. Running Hi-Point Access in Sheffield. From £250/month, unlimited users.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/scaffolding-software" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const flow = [
  { step: "Enquiry in", body: "Logged once, with the customer and site address — not in a diary and a notebook." },
  { step: "Survey booked", body: "Surveyor booked into the calendar, survey notes and photos attached to the job." },
  { step: "Quote out", body: "Quote sent from the job. When it's accepted, the job is ready to schedule." },
  { step: "Erect", body: "Gang and wagon allocated. PPE check and RAMS sign-on before the job opens. Handover certificate signed on site." },
  { step: "Invoice on erect", body: "The job goes green and the office gets a raise-invoice alert straight away — not at the end of the week." },
  { step: "Hire weeks tracked", body: "Every scaffold's hire period counted automatically. Over-hire flagged before it's missed." },
  { step: "Alterations", body: "Booked against the same job, so the history of every scaffold is in one place." },
  { step: "Dismantle & off-hire", body: "Off-hire checked against the hire weeks, and the second invoice raised with the hire rates on." },
];

const features = [
  { icon: CalendarClock, title: "Calendar by wagon and gang", body: "See the week's erects, alterations and dismantles allocated to each vehicle. Unallocated jobs stand out." },
  { icon: ClipboardCheck, title: "Surveys, erects, alterations, dismantles", body: "Every scaffold job type in your own terms, from first survey to final off-hire." },
  { icon: Receipt, title: "Hire-week tracking and two-stage invoicing", body: "Invoice on erect, track the hire, flag over-hire, invoice again on dismantle with the rates on." },
  { icon: FileCheck, title: "Handover certificates signed on site", body: "Signed on the phone at handover and stored on the job — not in a van or a filing cabinet." },
  { icon: HardHat, title: "PPE check and RAMS sign-on", body: "The job doesn't open until the gang has confirmed PPE and signed on to the RAMS — with an on-site safety check." },
  { icon: MessageCircle, title: "Job links by WhatsApp", body: "Each gang gets a link to their own job. No app to install, no logins, no training." },
  { icon: Camera, title: "Photos on the job, not in a group chat", body: "Site photos land on the right job straight away. No more printing, scanning and matching up." },
  { icon: Eye, title: "Access built around your firm", body: "Directors see everything. Surveyors get view-only. Admin rights by department. Built to how you're organised." },
  { icon: Truck, title: "Live from the yard to the office", body: "Who's out, what's up, what's done and what's ready to invoice — on your phone, without ringing round." },
];

const faqs = [
  {
    q: "What is the best software for a scaffolding company in the UK?",
    a: "It depends how your firm runs. Generic field service apps such as Jobber or BigChange suit firms happy to adapt their process to the software. Scaffolding has its own job flow — surveys, erects, alterations, dismantles, hire weeks and handover certificates — that generic tools don't model out of the box. OpsDeck builds the platform around how your scaffolding firm already works, and runs Hi-Point Access in Sheffield, which handles around 180 site visits a week through it.",
  },
  {
    q: "Does OpsDeck track scaffold hire weeks?",
    a: "Yes. Hire weeks are tracked automatically from the erect. Over-hire is flagged, and when the scaffold is off-hired the hire is checked so the second invoice goes out with the right hire rates on.",
  },
  {
    q: "Can scaffolders sign handover certificates on site?",
    a: "Yes. Handover certificates are signed on the phone at the scaffold and stored against the job, alongside the PPE check, RAMS sign-on and site photos.",
  },
  {
    q: "Do my scaffolders need to download an app?",
    a: "No. Each gang gets a link to their own job by WhatsApp. There's nothing to install, no login and no training — and they only see the job they've been sent.",
  },
  {
    q: "How much does scaffolding software cost?",
    a: "OpsDeck is priced by the number of operatives in the field, with unlimited users: £250/month for 1–10 operatives, £325 for 11–20, £400 for 21–30, £475 for 31–40 and £550 for 41–50. The build fee starts from £1,500 and is fixed in writing after a scoping call. Office staff, surveyors and directors never add to the bill.",
  },
  {
    q: "We already use spreadsheets and a diary. Do we have to change how we work?",
    a: "No. That's the point of OpsDeck. Rob comes and sees how your yard and office actually run — your job stages, your paperwork, your names for things — and the platform is built around that. You stop running on paper; you don't have to start running a different way.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Scaffolding Job Management Software",
    serviceType: "Field operations software for scaffolding companies",
    description: pageDescription,
    provider: { "@id": "https://opsdeck.co.uk/#organization" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: { "@type": "BusinessAudience", audienceType: "Scaffolding companies" },
    url: PAGE_URL,
    offers: {
      "@type": "Offer",
      price: "250",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "250",
        priceCurrency: "GBP",
        unitText: "per month for 1–10 field operatives, unlimited users",
      },
      url: "https://opsdeck.co.uk/pricing",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function ScaffoldingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero */}
        <section className="bg-hero-dark text-hero-foreground overflow-hidden">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
            <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
              <div>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-accent mb-4">
                  Scaffolding software
                </p>
                <h1 className="text-4xl md:text-5xl font-black leading-[1.08] mb-6">
                  Scaffolding job management, built around how your yard already runs.
                </h1>
                <p className="text-lg md:text-xl text-hero-muted leading-relaxed mb-8">
                  Surveys, erects, alterations and dismantles. Hire weeks tracked, over-hire flagged, handover certificates signed on site, invoices raised the moment a job goes green. Not an app you adapt to — a platform built around your firm.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={MAILTO}
                    className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Book a free 20-minute walkthrough
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:07837698283"
                    className="inline-flex items-center justify-center gap-2 border border-hero-foreground/25 font-semibold px-6 py-4 rounded-lg hover:bg-hero-foreground/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    07837 698 283
                  </a>
                </div>
                <p className="text-sm text-hero-muted">
                  Running Hi-Point Access in Sheffield — around 180 site visits and 100 new jobs a week.
                </p>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-hero-foreground/10 bg-background">
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-section-alt border-b border-border">
                    <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="relative aspect-[1476/856]">
                    <Image
                      src="/hero-fieldops-1.png"
                      alt="Scaffold calendar showing erects, alterations and dismantles allocated to each wagon for the week"
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      priority
                      className="object-cover object-left-top"
                    />
                  </div>
                </div>
                <p className="text-xs text-hero-muted mt-3">Real OpsDeck scaffold calendar, shown with demo data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job flow */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A scaffold job, start to finish</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
              Generic job management apps think a job is booked, done, invoiced. A scaffold isn&apos;t. It&apos;s surveyed, erected, altered, left on hire, dismantled and invoiced twice. OpsDeck follows the scaffold.
            </p>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {flow.map((f, i) => (
                <li key={f.step} className="rounded-xl border border-border bg-card p-5">
                  <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{f.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Features */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What&apos;s in it for a scaffolding firm</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl bg-card border border-border p-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="bg-hero-dark text-hero-foreground">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-5xl">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Proof</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Hi-Point Access: from filing cabinets to 180 site visits a week on one platform
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                ["~180", "site visits a week"],
                ["~100", "new jobs a week"],
                ["0", "printed site packs"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-hero-foreground/15 bg-hero-foreground/5 p-6">
                  <p className="text-4xl font-black text-accent mb-1">{n}</p>
                  <p className="text-hero-muted">{l}</p>
                </div>
              ))}
            </div>
            <p className="text-hero-muted text-lg leading-relaxed mb-8 max-w-3xl">
              Before OpsDeck, Hi-Point ran on job files in filing cabinets, a big diary, printouts on the wall and a printed site pack for every gang every morning. WhatsApp photos were printed, scanned and uploaded. Now every job — survey to off-hire — runs live, and invoices go out the moment a job goes green.
            </p>
            <Link
              href="/case-studies/hi-point"
              className="inline-flex items-center gap-2 font-semibold text-accent hover:underline underline-offset-4"
            >
              Read the Hi-Point case study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What it costs</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Priced by the number of operatives in the field — not per login. Directors, surveyors, office and yard staff never add to the bill.
            </p>
            <div className="rounded-xl border border-border overflow-hidden mb-6">
              {[
                ["1–10 operatives", "£250/month"],
                ["11–20 operatives", "£325/month"],
                ["21–30 operatives", "£400/month"],
                ["31–40 operatives", "£475/month"],
                ["41–50 operatives", "£550/month"],
                ["50+ operatives", "Scoped on a call"],
              ].map(([band, price], i) => (
                <div
                  key={band}
                  className={`flex justify-between px-6 py-4 ${i % 2 ? "bg-section-alt" : "bg-card"}`}
                >
                  <span>{band}</span>
                  <span className="font-bold">{price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Build fee from £1,500, fixed in writing after a scoping call. Rolling monthly, 30 days&apos; notice.{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">
                Full pricing
              </Link>
            </p>
          </div>
        </section>

        <YourData />

        {/* FAQ */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Scaffolding software questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="text-sm text-muted-foreground mt-8">
              Comparing options?{" "}
              <Link href="/honest-comparison" className="text-primary font-medium hover:underline">
                See how OpsDeck compares to Jobber, BigChange and others
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-hero-dark text-hero-foreground">
          <div className="container mx-auto px-6 py-20 md:py-24 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Bring one of last week&apos;s scaffold jobs.</h2>
            <p className="text-hero-muted text-lg leading-relaxed mb-8">
              In 20 minutes I&apos;ll show it running on OpsDeck — surveyed, erected, handed over, on hire and invoiced. No slides.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Book a free 20-minute walkthrough
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:07837698283"
                className="inline-flex items-center gap-2 border border-hero-foreground/25 font-semibold px-6 py-4 rounded-lg hover:bg-hero-foreground/10 transition-colors"
              >
                Call Rob: 07837 698 283
              </a>
            </div>
            <a
              href={CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-hero-foreground/90 underline underline-offset-4 hover:no-underline"
            >
              Not ready to talk? Take the 3-minute Field Ops Check
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
