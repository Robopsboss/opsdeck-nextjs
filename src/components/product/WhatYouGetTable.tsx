import { Check } from "lucide-react";

type FeatureRow = {
  feature: string;
  detail: string;
};

type WhatYouGetTableProps = {
  title: string;
  intro?: string;
  rows: FeatureRow[];
};

const WhatYouGetTable = ({ title, intro, rows }: WhatYouGetTableProps) => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          {intro}
        </p>
      )}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <ul className="divide-y divide-border">
          {rows.map((row) => (
            <li
              key={row.feature}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 p-6 md:p-8"
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </span>
                <h3 className="text-base font-bold text-primary leading-snug">
                  {row.feature}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {row.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhatYouGetTable;
