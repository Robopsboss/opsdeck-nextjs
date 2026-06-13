import { ArrowRight, Facebook } from "lucide-react";
import SiteFooter from "@/components/landing/SiteFooter";

const CTAFooter = () => (
  <>
    <section className="bg-cta text-cta-foreground">
      <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to save hours every week?
        </h2>
        <p className="text-cta-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Book a free 30-minute consultation. We&apos;ll look at your current quoting process and show you exactly what we can automate for your business. No commitment. No jargon. Just a straight conversation about whether we can help.
        </p>
        <a
          href="mailto:rob@opsdeck.co.uk"
          className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
        >
          Book a Free Consultation
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-cta-muted text-sm mt-5">
          <a
            href="https://healthcheck.opsdeck.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cta-foreground/90 hover:text-cta-foreground font-medium underline underline-offset-4 hover:no-underline transition-colors"
          >
            Or take the free Business Health Check first
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </p>
        <p className="text-cta-muted text-sm mt-5">
          Or call Rob directly — the person who built this and uses it every day in his own trades business.
          <br />
          <a href="tel:07837698283" className="text-cta-foreground font-medium hover:underline">
            07837 698 283
          </a>
        </p>
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
