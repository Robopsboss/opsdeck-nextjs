import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Activity, ArrowRight, Cog, Package } from "lucide-react";

const HEALTH_CHECK_URL = "https://healthcheck.opsdeck.co.uk/";

type Door = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
};

const doors: Door[] = [
  {
    eyebrow: "Bespoke Platform",
    title: "A custom tool built around your business",
    body: "Quoting, dashboards, team management, automated invoicing — a bespoke AI platform configured to exactly how you work. Ongoing partnership, from £75/month.",
    cta: "Explore Platform Build",
    href: "/platform-build",
    icon: Cog,
  },
  {
    eyebrow: "Fixed-Price Services",
    title: "One-off jobs, done and delivered",
    body: "Websites, Google setup, AEO pages, review systems, compliance documents, sales and marketing strategy — fixed-price services from £97 to £750, each delivered to a deadline.",
    cta: "See all services & pricing",
    href: "/pricing",
    icon: Package,
  },
];

const cardClasses =
  "group bg-card rounded-xl p-8 border border-border hover:border-primary transition-colors flex flex-col h-full";

const DoorCard = ({ door }: { door: Door }) => {
  const Icon = door.icon;
  const inner = (
    <>
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
        {door.eyebrow}
      </span>
      <h3 className="text-xl font-bold mb-3 leading-snug">{door.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm flex-1">
        {door.body}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-6">
        {door.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </>
  );

  if (door.external) {
    return (
      <a
        href={door.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={door.href} className={cardClasses}>
      {inner}
    </Link>
  );
};

const ThreeWaysToStart = () => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Where to Start</h2>

      {/* Front door — full-width Health Check banner */}
      <a
        href={HEALTH_CHECK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-primary/5 border border-primary/20 hover:bg-primary/10 rounded-xl p-6 md:p-8 transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug">
              Start here: the free Business Health Check
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              A 10-minute scorecard that shows you exactly where you&apos;re
              losing time and what to fix first.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary whitespace-nowrap">
            Take the Health Check
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </a>

      {/* Two equal ways to act on what it finds */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 md:mt-8">
        {doors.map((door) => (
          <DoorCard key={door.eyebrow} door={door} />
        ))}
      </div>
    </div>
  </section>
);

export default ThreeWaysToStart;
