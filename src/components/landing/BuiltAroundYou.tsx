import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

const rows = [
  {
    them: "Sign up, log in, then work out how their app wants you to run jobs",
    us: "We come out first and see how your jobs actually run — enquiry to invoice",
  },
  {
    them: "Your job stages squeezed into their template",
    us: "Your stages, your names, your trade — the way the office already talks",
  },
  {
    them: "Your paperwork rebuilt to fit their fields",
    us: "Your handovers, PPE checks and forms built in as you already use them",
  },
  {
    them: "An app for every operative, plus training to go with it",
    us: "Operatives get a job link on WhatsApp. No app, no login, no training",
  },
  {
    them: "Need something it doesn't do? Join the feature-request queue",
    us: "Need something new? We build it — your platform grows with the business",
  },
  {
    them: "Support ticket to a helpdesk",
    us: "You deal with the person who built it",
  },
];

const BuiltAroundYou = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
        Not off the shelf
      </p>
      <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 max-w-4xl">
        Other platforms make you change how you work. We build around how you already work.
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
        Jobber, BigChange and the rest are good apps — built for everyone, so you adapt to them. OpsDeck isn&apos;t an app you download and figure out. We sit down, map how your operation runs, and build the platform around it. Your office keeps working the way it works — it just stops running on paper, diaries and WhatsApp.
      </p>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:block bg-section-alt px-6 py-4 text-sm font-bold text-muted-foreground border-b border-border">
            Typical off-the-shelf field service app
          </div>
          <div className="hidden md:block bg-primary px-6 py-4 text-sm font-bold text-primary-foreground border-b border-border">
            OpsDeck
          </div>
          {rows.map((r, i) => (
            <div key={r.us} className="contents">
              <div
                className={`flex items-start gap-3 px-6 pt-5 pb-2 md:py-5 bg-section-alt text-muted-foreground text-sm leading-relaxed ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <X className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground/70" />
                <span>
                  <span className="md:hidden font-semibold">Off the shelf: </span>
                  {r.them}
                </span>
              </div>
              <div
                className={`flex items-start gap-3 px-6 pt-2 pb-5 md:py-5 bg-section-alt md:bg-background text-foreground text-sm font-medium leading-relaxed ${
                  i > 0 ? "md:border-t md:border-border" : ""
                }`}
              >
                <Check className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>
                  <span className="md:hidden font-bold text-primary">OpsDeck: </span>
                  {r.us}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center rounded-xl bg-section-alt border border-border p-6 md:p-8">
        <div>
          <h3 className="text-xl font-bold mb-2">
            Built around you doesn&apos;t mean starting from a blank page.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            The core — jobs, calendar, crews, site sign-offs and invoicing — is proven, running around 180 site visits a week at Hi-Point Access. We shape it around your operation, so you get bespoke without the bespoke price tag or the year-long build. From £250/month, unlimited users.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <Link
            href="/honest-comparison"
            className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
          >
            OpsDeck vs Jobber, BigChange &amp; others
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/bespoke-vs-off-the-shelf"
            className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
          >
            Why built-around-you beats off the shelf
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default BuiltAroundYou;
