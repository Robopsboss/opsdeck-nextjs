import { DatabaseBackup, KeyRound, LifeBuoy, MapPin, ShieldCheck, Users } from "lucide-react";

const points = [
  {
    icon: KeyRound,
    title: "Your data is yours",
    body: "Everything your firm puts into OpsDeck belongs to you — it says so in the contract. You can have a full export whenever you ask. If you ever leave, we hold it for 30 days so you can take it with you, then delete it. We own the code — never your data.",
  },
  {
    icon: MapPin,
    title: "Stored in London",
    body: "Your data is held in a London data centre, encrypted in transit and at rest, and walled off from every other firm on the platform.",
  },
  {
    icon: DatabaseBackup,
    title: "Backed up every day",
    body: "Automatic daily backups on a paid, production-grade database plan. A bad day in the office doesn't wipe out your job history.",
  },
  {
    icon: Users,
    title: "Everyone sees only what they should",
    body: "Access is built around your firm: directors with full control, view-only for surveyors, admin rights by department. Operatives don't get a login at all — just the job link for their own job.",
  },
  {
    icon: ShieldCheck,
    title: "UK GDPR in the contract",
    body: "Every contract sets out the data processing terms: you're the controller, we're the processor, we only use your data to run your platform, and we'd tell you within 72 hours of a breach. Office sign-in runs through a SOC 2 Type II certified provider. ICO registered (ZC126490).",
  },
  {
    icon: LifeBuoy,
    title: "Not a one-man risk",
    body: "Rob builds and runs your platform — and there's a backup software engineer on hand, so your operation keeps running if he's ever out of action.",
  },
];

const YourData = () => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
        Your data
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl leading-tight">
        Your jobs, your records, your business — safe and yours to keep.
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
        Moving your whole operation onto a smaller supplier is a fair thing to be careful about. Here&apos;s exactly how your data is looked after.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map((p) => (
          <div key={p.title} className="rounded-xl bg-card border border-border p-6">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default YourData;
