import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import HeroRotator from "./HeroRotator";

const proof = [
  "Running Hi-Point Access's scaffolding operation in Sheffield",
  "Built by a tradesman with 20+ years on site",
  "No app for the lads — job links on WhatsApp",
];

const Hero = () => (
  <section className="bg-hero-dark text-hero-foreground overflow-hidden">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-accent mb-4">
            For trades firms with operatives out in the field
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] mb-6">
            Run the whole operation from your phone — without hiring another ops manager.
          </h1>

          <p className="text-lg md:text-xl text-hero-muted font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Enquiry in, quote out, job created, handover signed on site, invoice raised the moment it&apos;s done. No more spreadsheets for one thing, diaries for another and forms everywhere else — the whole operation runs live on every phone.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
            <a
              href="mailto:rob@opsdeck.co.uk?subject=20-minute%20OpsDeck%20walkthrough"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-lg hover:bg-accent/90 transition-colors text-base"
            >
              Book a free 20-minute walkthrough
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:07837698283"
              className="inline-flex items-center gap-2 border border-hero-foreground/25 text-hero-foreground font-semibold px-6 py-4 rounded-lg hover:bg-hero-foreground/10 transition-colors text-base"
            >
              <Phone className="w-4 h-4" />
              07837 698 283
            </a>
          </div>

          <ul className="flex flex-col gap-2 text-sm text-hero-muted items-center lg:items-start">
            {proof.map((p) => (
              <li key={p} className="flex items-start gap-2 text-left">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Product */}
        <div className="relative">
          <div
            className="absolute -inset-6 bg-primary/25 blur-3xl rounded-full -z-10"
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
                sizes="(min-width: 1024px) 600px, 100vw"
                priority
                className="object-cover object-left-top"
              />
              {/* Rotation/crossfade through the other frames — JS enhancement */}
              <HeroRotator />
            </div>
          </div>
          <p className="text-xs text-hero-muted mt-3 text-center lg:text-left">
            Real OpsDeck screens, shown with demo data.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
