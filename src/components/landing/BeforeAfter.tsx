import { Check, X } from "lucide-react";

const rows = [
  { before: "Printed job packs and paper filing", after: "One job file, enquiry to completion" },
  { before: "WhatsApp photo hunts", after: "Photos saved to the right job from site" },
  { before: "Paper handover sheets", after: "Filled in and signed digitally on site" },
  { before: "Ringing round to find out what's done", after: "Live job status on every screen, from every phone" },
  {
    before: "Invoices batched at the end of the day — or caught up the next morning",
    after: "Invoice raised the moment a job goes green — even before 9am",
  },
  { before: "Paper sign-off sheets", after: "Timestamped PPE checks and time logs" },
  {
    before: "Toolbox talks and RAMS chased round WhatsApp",
    after: "Sent in one click, every signed declaration on record",
  },
  {
    before: "Separate spreadsheets for holidays, vehicles and jobs",
    after: "Everything in one place, working together",
  },
];

const BeforeAfter = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Before OpsDeck / After OpsDeck
      </h2>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="hidden md:grid grid-cols-2 bg-section-alt border-b border-border">
          <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Before OpsDeck
          </div>
          <div className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary">
            After OpsDeck
          </div>
        </div>
        {rows.map((row) => (
          <div
            key={row.before}
            className="grid md:grid-cols-2 border-b border-border last:border-b-0"
          >
            <div className="flex items-start gap-3 px-6 pt-5 pb-2 md:py-5 text-muted-foreground">
              <X className="w-4 h-4 mt-0.5 shrink-0" aria-label="Before" />
              <span>{row.before}</span>
            </div>
            <div className="flex items-start gap-3 px-6 pt-2 pb-5 md:py-5 font-semibold text-foreground">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-label="After" />
              <span>{row.after}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;
