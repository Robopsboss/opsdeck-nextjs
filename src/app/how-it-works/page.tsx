import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    num: "01",
    title: "Free consultation — we come to you",
    body: "I come to your business — your office, your site, your showroom — and spend about an hour understanding how you work. I will ask you to walk me through a typical working day. What happens from the moment an enquiry comes in to the moment a job is invoiced and paid. Where you lose time. What you are doing manually that you shouldn't be. What tool you're using that doesn't quite fit. I record the conversation on Otter so nothing gets missed. The recording stays private and is only used to build your scope.",
    note: "No cost. No commitment. Just a straight conversation about whether we can help.",
  },
  {
    num: "02",
    title: "Scope of works and fixed price proposal",
    body: "Within a few days of the consultation, I send you a full written scope of works. Every feature listed. Every deliverable named. Everything that is not included clearly stated. And a fixed build fee — not an estimate, not a range. A number. You read it, ask questions, push back on anything that doesn't look right. Nothing moves forward until you are completely happy with what is being built and what it costs. Scope changes after approval are quoted separately. Nothing outside the agreed scope gets built without a written agreement first.",
    note: "Fixed price. No surprises. You know the full cost before committing.",
  },
  {
    num: "03",
    title: "Stage 1 deposit — build begins",
    body: "Once you approve the scope, I invoice for the Stage 1 deposit — typically one third of the build fee. Build begins on receipt. You nominate one point of contact for feedback and sign-off during the build.",
    note: "Stage 1 deposit. Build starts. Typically one third of the agreed build fee.",
  },
  {
    num: "04",
    title: "Two-week demo — you see it working",
    body: "Two weeks into the build, I show you a working demo. Not a mockup or a wireframe — the actual platform, live, with your branding, your job types, and your pricing logic built in. You test it. You give feedback. If something isn't right, we fix it before the final delivery. The second payment is only triggered when you are happy with the demo.",
    note: "Stage 2 payment triggered when you sign off the demo.",
  },
  {
    num: "05",
    title: "Full delivery and go-live",
    body: "The complete build is delivered. We walk through everything together — every feature, every workflow, every setting. Your team gets shown how to use it. You go live. The final payment is triggered on go-live. Monthly subscription starts from this date.",
    note: "Stage 3 payment on go-live. Monthly subscription begins.",
  },
  {
    num: "06",
    title: "Ongoing partnership — not a one-off build",
    body: "This is where most software companies leave you. OpsDeck doesn't. The monthly subscription covers hosting, bug fixes, and minor updates. As your business grows and changes, the platform evolves with it. New job types, integrations, or features are quoted as add-ons. You always know what something costs before it gets built.",
    note: "Monthly subscription from go-live. Ongoing support, hosting, and evolution included.",
  },
];

const included = [
  "Bug fixes on our code",
  "Hosting costs covered",
  "Price and rate updates to existing config",
  "Email support within 24 hours on weekdays",
  "Minor updates and improvements",
];

const chargedSeparately = [
  "New job types or automations",
  "New document templates",
  "New integrations",
  "Additional user seats — £49 per month",
  "On-site training beyond initial onboarding",
];

const faqs = [
  {
    q: "How long does the full build take?",
    a: "Typically two to four weeks from deposit to go-live, depending on complexity. Simpler builds are faster. A full field ops platform with team integration takes longer. Your scope will include an estimated timeline before you commit.",
  },
  {
    q: "What if I want changes after the scope is agreed?",
    a: "Any feature outside the agreed scope is logged and quoted separately. It will not delay the Phase 1 delivery. You get what was agreed on time, and anything extra is scoped and priced before it gets built.",
  },
  {
    q: "What do I need to provide before the build starts?",
    a: "Depending on your tier — company details, logo, product or materials list, pricing rates, and one nominated point of contact. We guide you through everything you need to provide and when.",
  },
  {
    q: "Is there a contract?",
    a: "The scope of works document is your contract. It defines exactly what is being built, what is not included, the fixed price, and the payment milestones. Nothing starts until it is approved in writing.",
  },
  {
    q: "Can I cancel the monthly subscription?",
    a: "Yes. There is no minimum term on the monthly subscription. You own your data at all times and can export it if you leave. We retain rights to the underlying platform — you receive a licence to use it.",
  },
  {
    q: "What happens if something breaks?",
    a: "If it is our code, it is our problem. Bug fixes on our builds are included in the monthly subscription. Email us and we respond within 24 hours on weekdays.",
  },
];

const pageTitle = "How It Works — From First Conversation to Go-Live | OpsDeck";
const pageDescription =
  "No surprises, no hidden costs. Here is exactly what happens from your free consultation to go-live — every step, every payment milestone, every commitment explained upfront.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    url: "https://opsdeck.co.uk/how-it-works",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HowItWorksPage() {
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
              how it works
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
              From first conversation to go-live — here is exactly what happens
            </h1>
            <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-2xl">
              No surprises. No hidden steps. No commitment until you have seen the full scope and agreed every penny of the cost. Here is the complete process from start to finish.
            </p>
          </div>
        </section>

        {/* Callout */}
        <section className="bg-background">
          <div className="container mx-auto px-6 pt-16 md:pt-20 max-w-4xl">
            <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Before we start
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Read this page before your consultation. Every client who arrives knowing what to expect gets more from the meeting — and gets a better build as a result.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border md:left-[23px]" />
              <div className="space-y-14">
                {steps.map((step) => (
                  <div key={step.num} className="relative flex items-start gap-6">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 md:w-12 md:h-12 md:text-base">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                        {step.body}
                      </p>
                      <div className="bg-section-alt border-l-4 border-accent rounded-r-md p-4">
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {step.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What is and isn&apos;t included in the monthly subscription
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-lg font-bold mb-5">Included</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-lg font-bold mb-5">Charged separately</h3>
                <ul className="space-y-3">
                  {chargedSeparately.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Honest note */}
        <section className="bg-background">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
            <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                One rule we never break
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                We never quote a build fee before a fact-find. Scope first, price second. Any company that quotes you a price before understanding exactly what you need is guessing — and you will pay for that guess one way or another. We will always understand your business before we give you a number.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-section-alt">
          <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Common questions about the process</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                    {f.a}
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
