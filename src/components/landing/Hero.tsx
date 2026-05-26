import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="bg-hero text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-32 max-w-4xl">
      <div className="flex items-center gap-3 mb-10">
        <Image
          src="/opsdeck-logo.png"
          alt="OpsDeck"
          width={48}
          height={48}
          className="w-12 h-12 rounded-lg"
        />
        <span className="text-xl font-bold">OpsDeck</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
        I find the admin task costing you the most time — and make it disappear.
      </h1>

      <p className="text-lg md:text-xl text-hero-muted font-medium mb-4 max-w-2xl leading-relaxed">
        From quoting and invoicing to job scheduling and team admin — built around how your business actually works, not how a generic tool thinks it should.
      </p>

      <p className="text-base text-hero-muted/70 mb-10 max-w-2xl leading-relaxed">
        Stop spending evenings on admin. Stop copy-pasting quotes. Stop wrestling with software that wasn&apos;t built for your trade. OpsDeck partners with you to build a custom tool that does the heavy lifting — so you can focus on the work.
      </p>

      <a
        href="mailto:rob@opsdeck.co.uk"
        className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
      >
        Book a Free Consultation
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </section>
);

export default Hero;
