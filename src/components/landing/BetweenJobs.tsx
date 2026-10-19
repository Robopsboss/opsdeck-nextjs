import { ArrowRight, Camera, FileSignature, PhoneCall, Receipt } from "lucide-react";

const FIELD_OPS_CHECK_URL = "https://check.opsdeck.co.uk/";

const gaps = [
  {
    icon: Receipt,
    title: "Done, but not invoiced",
    body: "The gang finished at half eight. The invoice goes out tomorrow — or Friday, in a batch. Every day it waits is money you've earned and can't touch.",
  },
  {
    icon: Camera,
    title: "Photos, but no home",
    body: "Pictures land in a WhatsApp group with no job attached. Someone in the office spends the afternoon matching them up — or doesn't.",
  },
  {
    icon: PhoneCall,
    title: "On site, but nobody knows",
    body: "The office rings round to find out what's started, what's finished and what's gone wrong. Every call is time not spent invoicing or planning.",
  },
  {
    icon: FileSignature,
    title: "Signed, but on paper",
    body: "Handovers, PPE checks and toolbox talks signed on a sheet that's in a van, a folder or the bin. Try finding one from three months ago.",
  },
];

const BetweenJobs = () => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
        Where the money goes
      </p>
      <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 max-w-3xl">
        The work on site isn&apos;t the problem. Everything between site and the office is.
      </h2>
      <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mb-12">
        Your lads do the job right. It&apos;s the gaps around the job — the chasing, the paperwork, the waiting to invoice — where time, margin and evenings disappear.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {gaps.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-hero-foreground/15 bg-hero-foreground/5 p-6"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-5">
              <g.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-bold mb-2 leading-snug">{g.title}</h3>
            <p className="text-hero-muted text-sm leading-relaxed">{g.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Find out what the gaps are costing you
          </h3>
          <p className="text-hero-muted leading-relaxed">
            Twelve tap-to-answer questions, three minutes. See how many office hours go on chasing job status, and how much finished work is sitting waiting to be invoiced. Results on screen straight away.
          </p>
        </div>
        <a
          href={FIELD_OPS_CHECK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-lg hover:bg-accent/90 transition-colors text-base whitespace-nowrap"
        >
          Take the Field Ops Check
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default BetweenJobs;
