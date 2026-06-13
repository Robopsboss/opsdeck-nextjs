import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://opsdeck.co.uk/#localbusiness",
  "name": "OpsDeck Ltd",
  "url": "https://opsdeck.co.uk",
  "telephone": "07837698283",
  "email": "rob@opsdeck.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19 Newton Vale",
    "addressLocality": "Sheffield",
    "postalCode": "S35 2YL",
    "addressCountry": "GB",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.4700095134979,
    "longitude": -1.472509614233739,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
    },
  ],
  "areaServed": [
    { "@type": "City", "name": "Sheffield" },
    { "@type": "AdministrativeArea", "name": "South Yorkshire" },
    { "@type": "Country", "name": "United Kingdom" },
  ],
  "founder": { "@type": "Person", "name": "Rob France" },
  "foundingDate": "2026",
  "legalName": "OpsDeck Ltd",
  "identifier": [
    { "@type": "PropertyValue", "name": "Companies House", "value": "17075735" },
    { "@type": "PropertyValue", "name": "ICO Registration", "value": "ZC126490" },
  ],
};

const faqItems = [
  {
    question: "Do you work with businesses outside Sheffield?",
    answer:
      "Yes — location is no barrier. We serve trades businesses across the whole of the UK. Businesses in Sheffield and South Yorkshire get an in-person consultation. Businesses elsewhere in the UK are served by video call. The process, the quality of the build, and the ongoing support are identical regardless of where you are based.",
  },
  {
    question: "How does a remote consultation work?",
    answer:
      "We book a video call at a time that suits you — usually 45 minutes to an hour. I ask you to walk me through your typical working day, your current tools, and where you are losing time. I record the call on Otter with your permission so nothing gets missed. Within a few days I send you a full written scope and fixed price proposal. You review it, ask questions, and decide whether to proceed. No commitment until you approve the scope in writing.",
  },
  {
    question: "Where exactly are you based?",
    answer:
      "OpsDeck Ltd is registered at 19 Newton Vale, Sheffield, S35 2YL, England. Company registration number 17075735. ICO registration number ZC126490.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Email rob@opsdeck.co.uk or call 07837 698 283. We respond to all enquiries within 24 hours on weekdays. For a free consultation, email or call directly — there is no online booking system, just a straight conversation.",
  },
  {
    question: "Do you visit businesses for the initial consultation?",
    answer:
      "For businesses in Sheffield and South Yorkshire, yes — we come to you at no cost. For businesses elsewhere in the UK, the initial consultation is by video call. Either way, the consultation is free and there is no commitment until you have seen and approved the full scope and cost.",
  },
];

const pageTitle = "Where We Work — Sheffield and UK-Wide | OpsDeck";
const pageDescription =
  "OpsDeck Ltd is based in Sheffield, South Yorkshire. We serve trades businesses across the whole of the UK — in person locally, remote by video call everywhere else.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/service-area" },
  openGraph: {
    url: "https://opsdeck.co.uk/service-area",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

export default function ServiceAreaPage() {
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
              Service area and contact
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              Where we work and how to reach us
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
              OpsDeck Ltd is based in Sheffield. We serve trades businesses and small businesses across the whole of the UK — in person locally, and by video call everywhere else.
            </p>
          </div>
        </section>

        {/* NAP Card */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    Registered business
                  </p>
                  <p className="text-foreground font-medium">
                    OpsDeck Ltd — Co. No. 17075735 — ICO Reg. ZC126490
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    Address
                  </p>
                  <p className="text-foreground">19 Newton Vale, Sheffield, S35 2YL, England</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    Phone
                  </p>
                  <a href="tel:07837698283" className="text-primary font-medium hover:underline">
                    07837 698 283
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    Email
                  </p>
                  <a href="mailto:rob@opsdeck.co.uk" className="text-primary font-medium hover:underline">
                    rob@opsdeck.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    Website
                  </p>
                  <p className="text-foreground">opsdeck.co.uk</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                    Founded
                  </p>
                  <p className="text-foreground">2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where we work */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Where we work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Local card */}
              <div className="bg-card rounded-xl border border-border border-t-4 border-t-emerald-500 p-8">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  Local
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Sheffield and South Yorkshire — in person
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We are based in Sheffield and cover South Yorkshire for in-person consultations. If you run a trades or service business in Sheffield, Barnsley, Rotherham, Doncaster, or the surrounding areas — we come to you. The consultation is free, we come to your premises, and we spend an hour understanding exactly how your business works before we ever quote you a penny.
                </p>
              </div>

              {/* UK-Wide card */}
              <div className="bg-card rounded-xl border border-border border-t-4 border-t-primary p-8">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                  <Globe className="w-3.5 h-3.5" />
                  UK-Wide
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Rest of the UK — remote consultation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Location is no barrier. We work with trades businesses across the whole of the UK via video call. A remote consultation works exactly the same way as an in-person one — we spend an hour understanding your business, your workflow, and your admin pain points. The only difference is you do not have to make us a brew. All builds are delivered and supported remotely regardless of location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hours and how to get in touch */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Hours and how to get in touch
            </h2>

            {/* Hours grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Monday to Friday
                </p>
                <p className="text-xl font-bold text-foreground">8am to 6pm</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Saturday
                </p>
                <p className="text-xl font-bold text-foreground">By arrangement</p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Sunday
                </p>
                <p className="text-xl font-bold text-foreground">Closed</p>
              </div>
            </div>

            {/* Contact table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="divide-y divide-border">
                <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                  <span className="text-muted-foreground text-sm sm:w-40 shrink-0">Phone</span>
                  <a href="tel:07837698283" className="text-foreground font-medium hover:text-primary transition-colors">
                    07837 698 283
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                  <span className="text-muted-foreground text-sm sm:w-40 shrink-0">Email</span>
                  <a href="mailto:rob@opsdeck.co.uk" className="text-foreground font-medium hover:text-primary transition-colors">
                    rob@opsdeck.co.uk
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                  <span className="text-muted-foreground text-sm sm:w-40 shrink-0">Website</span>
                  <span className="text-foreground">opsdeck.co.uk</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center px-6 py-4">
                  <span className="text-muted-foreground text-sm sm:w-40 shrink-0">Response time</span>
                  <span className="text-foreground">Within 24 hours on weekdays</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start px-6 py-4">
                  <span className="text-muted-foreground text-sm sm:w-40 shrink-0 mt-0.5">Support note</span>
                  <span className="text-foreground text-sm leading-relaxed">
                    For urgent platform issues — email{" "}
                    <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">
                      rob@opsdeck.co.uk
                    </a>{" "}
                    with URGENT in the subject line. We aim to respond to all urgent issues within 24 hours on weekdays.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Common questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
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
              Ready to start?
            </h2>
            <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free consultation. We will come to you, understand your business, and tell you honestly what we can build — and what it will cost.
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
    </>
  );
}
