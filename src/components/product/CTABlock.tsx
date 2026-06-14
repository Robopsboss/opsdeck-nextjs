import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type CTABlockProps = {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "white" | "amber";
  phone?: { label: string; tel: string };
  note?: ReactNode;
};

const ctaStyles = {
  white: "bg-background text-foreground hover:bg-background/90",
  amber: "bg-accent text-foreground hover:bg-accent/90",
};

const CTABlock = ({
  title,
  body,
  ctaLabel = "Book a Free Consultation",
  ctaHref = "mailto:rob@opsdeck.co.uk",
  ctaVariant = "white",
  phone,
  note,
}: CTABlockProps) => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="text-hero-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        {body}
      </p>
      <a
        href={ctaHref}
        className={`inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-colors text-base ${ctaStyles[ctaVariant]}`}
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
      {(phone || note) && (
        <p className="text-hero-muted text-sm mt-6">
          {note}
          {note && phone && <br />}
          {phone && (
            <a
              href={`tel:${phone.tel}`}
              className="text-hero-foreground font-medium hover:underline"
            >
              {phone.label}
            </a>
          )}
        </p>
      )}
    </div>
  </section>
);

export default CTABlock;
