import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SocialProof = () => (
  <section className="bg-section-alt border-y border-border">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl text-center">
      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground leading-tight mb-6">
        &ldquo;Our quotes used to sit in a pile waiting to be typed up. Now they go out the same day.&rdquo;
      </blockquote>
      <p className="text-muted-foreground font-medium mb-10">
        — Birdwell Insulation Ltd, Sheffield
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
        Birdwell Insulation&apos;s contracts managers were pricing jobs in Excel, then waiting for admin to manually type each quote into a professional document. 15 minutes per quote, done in batches. Now they drag and drop the Excel file into OpsDeck. A branded, professional quote is ready in 30 seconds. Enquiry in, quote out — same day.
      </p>

      <Link
        href="/case-studies/birdwell"
        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
      >
        Read the full case study
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default SocialProof;
