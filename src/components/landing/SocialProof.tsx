import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SocialProof = () => (
  <section className="bg-section-alt border-y border-border">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl text-center">
      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground leading-tight mb-6">
        &ldquo;The paper&apos;s gone. The spreadsheet&apos;s gone. The WhatsApp photo hunt is gone.&rdquo;
      </blockquote>
      <p className="text-muted-foreground font-medium mb-10">
        Hi-Point Access — Sheffield scaffolding
      </p>

      <Link
        href="/case-studies/hi-point"
        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
      >
        Read the case study
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default SocialProof;
