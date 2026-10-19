import { DatabaseBackup, KeyRound, LifeBuoy, MapPin, ShieldCheck, Users } from "lucide-react";

const points = [
  {
    icon: KeyRound,
    title: "Your data is yours",
    body: "Everything your firm puts into OpsDeck belongs to you. You have full access to it at all times, and if you ever leave, it goes with you. We own the code — never your data.",
  },
  {
    icon: MapPin,
    title: "Stored in London",
    body: "Your data is held in a London data centre, inside the UK — not shipped off to the other side of the world.",
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
    title: "Secure sign-in, ICO registered",
    body: "Office logins run through a dedicated, industry-standard authentication provider. Opsdeck Ltd is registered with the ICO (ZC126490).",
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
