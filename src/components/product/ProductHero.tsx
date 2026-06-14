import { ArrowRight } from "lucide-react";

type ProductHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "white" | "amber";
};

const ctaStyles = {
  white: "bg-background text-foreground hover:bg-background/90",
  amber: "bg-accent text-foreground hover:bg-accent/90",
};

const ProductHero = ({
  eyebrow,
  title,
  lead,
  sub,
  ctaLabel = "Book a Free Consultation",
  ctaHref = "mailto:rob@opsdeck.co.uk",
  ctaVariant = "white",
}: ProductHeroProps) => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          {eyebrow}
        </p>
      )}

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
        {title}
      </h1>

      {lead && (
        <p className="text-lg md:text-xl text-hero-muted italic mb-4 max-w-2xl leading-relaxed">
          {lead}
        </p>
      )}

      {sub && (
        <p className="text-base text-hero-muted/70 mb-10 max-w-2xl leading-relaxed">
          {sub}
        </p>
      )}

      <a
        href={ctaHref}
        className={`inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-colors text-base ${ctaStyles[ctaVariant]}`}
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </section>
);

export default ProductHero;
