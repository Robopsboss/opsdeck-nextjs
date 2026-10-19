import Link from "next/link";
import { ArrowRight } from "lucide-react";

const trades = ["Scaffolding", "Tarmac & Surfacing", "Groundworks", "Roofing", "Insulation", "Fencing", "Landscaping"];

const WhoItsFor = () => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Built for trades firms with teams out on site
      </h2>
      <p className="text-hero-muted text-lg mb-3 leading-relaxed max-w-3xl">
        OpsDeck is for firms running multiple gangs or crews across multiple sites every day — where the office has to know who&apos;s where, what&apos;s done, what&apos;s been signed off and what&apos;s ready to invoice.
      </p>
      <p className="text-hero-muted text-lg mb-6 leading-relaxed max-w-3xl">
        Once a business has grown past diaries, spreadsheets and WhatsApp groups, things start slipping through the cracks — between the office, the lads on site and the people chasing the money. OpsDeck brings the whole operation into one place, without asking anyone to change how the job gets done.
      </p>
      <p className="text-hero-muted/70 text-sm mb-4">
        Just some of the trades we work with: {trades.join(" · ")}
      </p>
      <Link
        href="/scaffolding-software"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
      >
        Run a scaffolding firm? See OpsDeck for scaffolding
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default WhoItsFor;
