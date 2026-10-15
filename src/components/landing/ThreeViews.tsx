import { ClipboardCheck, HardHat, Monitor } from "lucide-react";

const views = [
  {
    icon: Monitor,
    title: "The office",
    body: "Every job, stage and crew in one view. Holidays, vehicles and allocations in the same place. Hires running over flagged before they cost you. Council compliance pack downloads in one click.",
  },
  {
    icon: ClipboardCheck,
    title: "The foreman",
    body: "Opens a link and sees today's work. Handovers filled in and signed on site, digitally. Notes and completion marked from the scaffold.",
  },
  {
    icon: HardHat,
    title: "The lads",
    body: "Job details land on their phone. They can't open the job until PPE checks and the declaration are signed — timestamped, every time. Site photos go straight onto the right job, and time logs record themselves.",
  },
];

const ThreeViews = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        One operation. Three views.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {views.map((view) => (
          <div
            key={view.title}
            className="bg-card border border-border rounded-xl p-8 flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
              <view.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{view.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {view.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeViews;
