import { Check } from "lucide-react";

type ComparisonRow = {
  without: string;
  with: string;
};

type ComparisonTableProps = {
  title: string;
  intro?: string;
  withoutHeader?: string;
  withHeader?: string;
  rows: ComparisonRow[];
};

const ComparisonTable = ({
  title,
  intro,
  withoutHeader = "Without OpsDeck",
  withHeader = "With OpsDeck",
  rows,
}: ComparisonTableProps) => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          {intro}
        </p>
      )}
      <div className="rounded-2xl border border-border overflow-hidden bg-card mt-8">
        <div className="hidden md:grid md:grid-cols-2">
          <div className="bg-secondary px-6 py-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {withoutHeader}
          </div>
          <div className="bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground">
            {withHeader}
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 ${
              i === 0 ? "md:border-t" : "border-t"
            } border-border`}
          >
            <div className="p-6 text-muted-foreground leading-relaxed md:border-r border-border">
              <span className="md:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                {withoutHeader}
              </span>
              {row.without}
            </div>
            <div className="p-6 bg-primary/5 text-foreground leading-relaxed border-t md:border-t-0 border-border">
              <span className="md:hidden text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                {withHeader}
              </span>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>{row.with}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonTable;
