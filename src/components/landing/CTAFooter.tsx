import { ArrowRight, Facebook, ShieldCheck } from "lucide-react";
import SiteFooter from "@/components/landing/SiteFooter";

const CTAFooter = () => (
  <>
    <section className="bg-hero-dark text-hero-foreground">
      <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
          The 20-minute walkthrough
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6">
          Bring one of last week&apos;s jobs.
        </h2>
        <p className="text-hero-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          In 20 minutes I&apos;ll show you that job running on OpsDeck — booked in, sent to the lads, PPE checked, handover signed on site and flagged to invoice. No slides, no sales script. Just your job, on the system, with the person who built it.
        </p>
        <ul className="grid sm:grid-cols-3 gap-3 text-sm text-hero-foreground/90 mb-10 text-left max-w-2xl mx-auto">
          <li className="rounded-lg bg-hero-foreground/5 border border-hero-foreground/15 px-4 py-3">Phone or video — from the van is fine</li>
          <li className="rounded-lg bg-hero-foreground/5 border border-hero-foreground/15 px-4 py-3">Built around how you already work</li>
          <li className="rounded-lg bg-hero-foreground/5 border border-hero-foreground/15 px-4 py-3">Straight answer on whether it fits</li>
        </ul>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:rob@opsdeck.co.uk?subject=20-minute%20OpsDeck%20walkthrough"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-base"
          >
            Book a free 20-minute walkthrough
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:07837698283"
            className="inline-flex items-center gap-2 border border-hero-foreground/25 text-hero-foreground font-semibold px-6 py-4 rounded-lg hover:bg-hero-foreground/10 transition-colors text-base"
          >
            Call Rob: 07837 698 283
          </a>
        </div>
        <p className="text-hero-muted text-sm mt-6">
          <a
            href="https://check.opsdeck.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-hero-foreground/90 hover:text-hero-foreground font-medium underline underline-offset-4 hover:no-underline transition-colors"
          >
            Not ready to talk? Take the 3-minute Field Ops Check first
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </p>
        <div className="mt-10 pt-8 border-t border-hero-foreground/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-hero-muted">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent" />ICO registered · ZC126490</span>
          <span>Opsdeck Ltd · Company No. 17075735</span>
          <span>Built and supported in Sheffield</span>
        </div>
      </div>
    </section>

    <footer className="bg-hero text-hero-muted text-sm text-center py-6 px-6">
      <p className="flex flex-wrap items-center justify-center gap-2 mb-3">
        <span>See OpsDeck in action — watch real demos on our Facebook page.</span>
        <a
          href="https://www.facebook.com/opsdeck"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpsDeck on Facebook"
          className="inline-flex items-center text-hero-foreground hover:text-hero-foreground/80 transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
      </p>
      <p>
        <a href="mailto:rob@opsdeck.co.uk" className="hover:text-hero-foreground transition-colors">
          rob@opsdeck.co.uk
        </a>
        {" · "}Based in Sheffield, working with trades businesses across the UK
      </p>
    </footer>

    <SiteFooter />
  </>
);

export default CTAFooter;
