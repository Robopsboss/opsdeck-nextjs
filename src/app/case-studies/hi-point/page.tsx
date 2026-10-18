import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check, X } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle =
  "Scaffolding Operations Software in Sheffield: How Hi-Point Access Runs 180 Site Visits a Week Without Paper | OpsDeck";
const pageDescription =
  "Hi-Point Access, a Sheffield scaffolding firm on council frameworks and private contracts, runs around 180 site visits and 100 new jobs a week through OpsDeck — no filing cabinets, no printed site packs, no WhatsApp photo hunts.";

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

// Client quote — set once Hi-Point approves the wording. Renders only when set.
const clientQuote: { text: string; name: string; role: string } | null = null;

const stats = [
  { label: "Trade", value: "Scaffolding and access" },
  { label: "Location", value: "Sheffield, South Yorkshire" },
  { label: "Work", value: "Council frameworks, private and commercial" },
  { label: "Site visits", value: "Around 180 a week" },
  { label: "New jobs", value: "Around 100 created a week" },
  { label: "Platform", value: "OpsDeck Field Ops Platform" },
];

const beforeAfter = [
  {
    before: "A printed job package in a filing cabinet for every job",
    after: "One digital job file per job, from enquiry to completion",
  },
  {
    before: "A huge diary and printouts pinned all over the wall",
    after: "A live calendar of every job, crew and vehicle — jobs turn green when done",
  },
  {
    before: "A stack of printed site packs handed to each gang every morning",
    after: "Each operative gets their job link by WhatsApp — only their job, nothing to install",
  },
  {
    before: "Site photos sent over WhatsApp, printed, scanned and uploaded by hand",
    after: "Photos go straight from site onto the right job",
  },
  {
    before: "Handovers on paper, scanned and uploaded to the handover system",
    after: "Handovers filled in and signed on site, sent to the customer automatically",
  },
  {
    before: "Council paperwork gathered up by hand for the portal",
    after: "The full council compliance pack downloads in one click",
  },
];

const takeaways = [
  "At around 180 site visits a week, paper isn't just slow — it means the office can't see the operation as it happens.",
  "The process Hi-Point already had — a job file per job, a diary, a site pack for the lads — was sound. OpsDeck rebuilt that process digitally instead of asking them to adopt a new one.",
  "Operatives didn't need training or a new app. The job link arrives on WhatsApp, which the lads already use.",
  "Once photos and handovers come straight back from site, the office knows a job is finished — and ready to invoice — the same day.",
];

const faqs = [
  {
    q: "How does a scaffolding firm manage 180 site visits a week without paper?",
    a: "At Hi-Point Access, every job has one digital job file in OpsDeck holding its documents, drawings, photos and notes. Jobs are allocated to gangs and vehicles on a live calendar, each operative receives their job link on their phone, and photos, notes and signed handovers come straight back to the job from site. The office sees the whole week's work in one place instead of in a diary, filing cabinets and printouts.",
  },
  {
    q: "How do scaffolders get their job details on site?",
    a: "The office sends each operative a job link by WhatsApp. It opens only that operative's job — address, details and what needs doing — so there's no app to install, no training, and no access to office information. It replaces the printed site pack each gang used to carry.",
  },
  {
    q: "Does it work with council framework jobs?",
    a: "Yes. Hi-Point's council work arrives through the council's own portal and is created as a job in OpsDeck alongside private and commercial work, with requisitions, asbestos reports, drawings and compliance sheets attached to the job file. The full compliance pack downloads in one click when it needs to go back to the council.",
  },
  {
    q: "How long did Hi-Point have to change the way they work?",
    a: "They didn't have to change it. OpsDeck was built around the process Hi-Point already ran — a job file per job, a diary of work, a site pack for each gang — and moved it off paper. The steps stayed the same; the printing, scanning and chasing went.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How Hi-Point Access runs around 180 scaffolding site visits a week without paper",
    description: pageDescription,
    url: "https://opsdeck.co.uk/case-studies/hi-point",
    author: { "@id": "https://opsdeck.co.uk/author/rob-france#person" },
    publisher: { "@id": "https://opsdeck.co.uk/#organization" },
    about: {
      "@type": "Service",
      name: "OpsDeck Field Operations Platform",
      provider: { "@id": "https://opsdeck.co.uk/#organization" },
      url: "https://opsdeck.co.uk/platform-build",
    },
    mentions: {
      "@type": "Organization",
      name: "Hi-Point Access Ltd",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sheffield",
        addressRegion: "South Yorkshire",
        addressCountry: "GB",
      },
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

export default function CaseStudyHiPointPage() {
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
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Case Study · Scaffolding · Sheffield
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              How Hi-Point Access runs around 180 site visits a week without paper
            </h1>
            <p className="text-lg md:text-xl text-hero-muted font-medium max-w-2xl leading-relaxed">
              From filing cabinets, a wall of printouts and a stack of site packs every morning — to one job file per job, live on every phone. Enquiry to completion.
            </p>

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

        {/* Quick stats */}
        <section className="bg-section-alt border-b border-border">
          <div className="container mx-auto px-6 py-12 max-w-4xl">
            <dl className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">
                    {s.label}
                  </dt>
                  <dd className="text-foreground font-semibold leading-snug">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* The challenge */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The challenge</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi-Point Access Ltd are Sheffield-based scaffolding and access specialists, working across South Yorkshire on council frameworks and private contracts. They run around 180 site visits a week and create around 100 new jobs every week.
              </p>
              <p>
                Like most established scaffolding firms, Hi-Point&apos;s work was never the problem — the admin wrapped around it was. Every job had its own printed job package — photos, what the lads needed, the job details — kept in filing cabinets stocked to the eyeballs. The work for the week lived in a huge diary, with printouts pinned all over the wall.
              </p>
              <p>
                Every morning, each gang was handed a printed site pack for every job they were doing. A gang doing five jobs a day carried five packs. Site photos came back over WhatsApp, were printed, then scanned and uploaded to the computer before the handover could be done. Council jobs added requisitions, asbestos reports, drawings and compliance sheets — all printed, filed by hand, then gathered up again every time something had to go back to the council portal.
              </p>
            </div>
          </div>
        </section>

        {/* The approach */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The approach</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi-Point&apos;s process already worked. A job file per job, a diary of who was going where, a pack for the lads — that&apos;s a sound way to run scaffolding. The problem was that all of it was paper. So OpsDeck wasn&apos;t built to replace their process with a new one. It was built to run the same process digitally.
              </p>
              <p>
                Every job now lives in one file from the moment it lands to the day it&apos;s complete. Documents drag and drop straight onto the job. Jobs are allocated to gangs and vehicles on a live calendar. Each operative gets their job link on WhatsApp — the app they already use — so there was no new app to roll out and no training. Operatives upload site photos straight from their phone onto the right job. Foremen open their link, see their work, add notes and mark it complete from site.
              </p>
            </div>

            <div className="mt-12 rounded-xl overflow-hidden border border-border shadow-sm bg-background">
              <div className="relative aspect-[1476/856]">
                <Image
                  src="/hero-fieldops-1.png"
                  alt="Weekly scaffold calendar showing erects, dismantles and alterations allocated to each vehicle, with completed jobs in green"
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              The weekly calendar: every job allocated to a vehicle, turning green as it&apos;s completed. Shown with demo data.
            </p>
          </div>
        </section>

        {/* Before / after */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Before and after</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="hidden md:grid grid-cols-2 bg-section-alt border-b border-border">
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Before OpsDeck
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary">
                  With OpsDeck
                </div>
              </div>
              {beforeAfter.map((row) => (
                <div
                  key={row.before}
                  className="grid md:grid-cols-2 border-b border-border last:border-b-0"
                >
                  <div className="flex items-start gap-3 px-6 pt-5 pb-2 md:py-5 text-muted-foreground">
                    <X className="w-4 h-4 mt-1 shrink-0" aria-label="Before" />
                    <span>{row.before}</span>
                  </div>
                  <div className="flex items-start gap-3 px-6 pt-2 pb-5 md:py-5 font-semibold text-foreground">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-primary" aria-label="With OpsDeck" />
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The result</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Around 180 site visits and 100 new jobs a week now run through one platform. The office sees every job, every stage and every allocation in one place, from a computer, tablet or phone. Handovers are signed on site. The full council compliance pack downloads in a single click.
              </p>
              <p className="text-foreground font-semibold text-xl">
                The paper&apos;s gone. The spreadsheet&apos;s gone. The WhatsApp photo hunt is gone. And the office has its time back to run the business instead of chasing it.
              </p>
            </div>

            {clientQuote && (
              <figure className="mt-10 bg-background border-l-4 border-primary rounded-r-xl p-6 md:p-8">
                <blockquote className="text-foreground text-lg leading-relaxed italic">
                  &ldquo;{clientQuote.text}&rdquo;
                </blockquote>
                <figcaption className="text-sm text-muted-foreground mt-4">
                  <span className="font-semibold text-foreground">{clientQuote.name}</span>, {clientQuote.role}, Hi-Point Access Ltd
                </figcaption>
              </figure>
            )}
          </div>
        </section>

        {/* Takeaways */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What this means for other field ops firms
            </h2>
            <ul className="space-y-4">
              {takeaways.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              See everything the platform does on the{" "}
              <Link href="/platform-build" className="text-primary font-semibold hover:underline">
                Field Ops Platform page
              </Link>
              , or how it compares to off-the-shelf tools in our{" "}
              <Link href="/honest-comparison" className="text-primary font-semibold hover:underline">
                honest comparison
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Questions about this project</h2>
            <div className="space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-hero-dark text-hero-foreground">
          <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Running a field operation on paper and WhatsApp?
            </h2>
            <p className="text-hero-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free 20-minute walkthrough. We&apos;ll look at how your operation runs today and show you what it looks like on OpsDeck.
            </p>
            <a
              href={`mailto:rob@opsdeck.co.uk?subject=${encodeURIComponent("20-minute OpsDeck walkthrough")}`}
              className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
            >
              Book a free 20-minute walkthrough
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-hero-muted text-sm mt-5">
              Or call Rob: <a href="tel:07837698283" className="text-hero-foreground font-medium hover:underline">07837 698 283</a>
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
