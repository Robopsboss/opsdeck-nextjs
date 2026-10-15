import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import HeroRotator from "./HeroRotator";

const Hero = () => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Image
            src="/opsdeck-logo.png"
            alt="OpsDeck"
            width={48}
            height={48}
            className="w-12 h-12 rounded-lg"
          />
          <span className="text-xl font-bold">OpsDeck</span>
        </div>

        <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-hero-muted mb-4">
          For trades firms with operatives out in the field
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
          Run the whole operation from your phone — without hiring another ops manager.
        </h1>

        <p className="text-lg md:text-xl text-hero-muted font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Enquiry in, quote out, job created, handover signed on site. No more spreadsheets for one thing, diaries for another and forms everywhere else — the whole operation runs digitally, live on every phone. Running Hi-Point Access&apos;s scaffolding operation in Sheffield today.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:rob@opsdeck.co.uk?subject=20-minute%20OpsDeck%20walkthrough"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors text-base"
          >
            Book a free 20-minute walkthrough
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:07837698283"
            className="inline-flex items-center gap-1.5 text-sm text-hero-muted hover:text-hero-foreground transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Or call Rob: 07837 698 283
          </a>
        </div>
      </div>

      <div className="relative mt-14 md:mt-20">
        <div
          className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full -z-10"
          aria-hidden="true"
        />
        {/* Device/browser frame — static server markup, always in the HTML */}
        <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-hero-foreground/10 bg-background">
          <div className="flex items-center gap-1.5 px-4 py-3 bg-section-alt border-b border-border">
            <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="relative aspect-[1476/856]">
            {/* First frame — server-rendered, present without JS (crawlable) */}
            <Image
              src="/hero-fieldops-1.png"
              alt="Weekly scaffold calendar showing erects, dismantles and alterations allocated to each vehicle"
              fill
              sizes="(min-width: 1152px) 1104px, 100vw"
              priority
              className="object-cover"
            />
            {/* Rotation/crossfade through the other frames — JS enhancement */}
            <HeroRotator />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
