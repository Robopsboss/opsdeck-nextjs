import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  "Enquiry in",
  "Quote sent",
  "Quote accepted",
  "Job created automatically",
  "Crew & vehicle allocated",
  "Handover signed on site",
  "Flagged to invoice",
];

const JobFlow = () => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight">
        From enquiry to job completion — it all works together.
      </h2>
      <ol className="flex flex-col lg:flex-row lg:items-stretch gap-2 lg:gap-1">
        {steps.map((step, i) => (
          <Fragment key={step}>
            <li className="flex-1 flex items-center gap-3 lg:flex-col lg:items-start lg:justify-between rounded-lg border border-hero-foreground/15 bg-hero-foreground/5 px-4 py-3 lg:py-4">
              <span className="text-xs font-bold tabular-nums text-hero-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-semibold text-sm leading-snug">{step}</span>
            </li>
            {i < steps.length - 1 && (
              <li aria-hidden="true" className="flex justify-center items-center text-hero-muted">
                <ArrowDown className="w-4 h-4 lg:hidden" />
                <ArrowRight className="w-4 h-4 hidden lg:block" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
      <p className="text-hero-muted text-lg mt-10">
        One enquiry starts it. Nothing gets typed twice.
      </p>
    </div>
  </section>
);

export default JobFlow;
