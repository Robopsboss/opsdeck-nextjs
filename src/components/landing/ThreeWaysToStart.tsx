import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Activity, ArrowRight, Cog, FileSpreadsheet, Package } from "lucide-react";

const HEALTH_CHECK_URL = "https://healthcheck.opsdeck.co.uk/";

type Door = {
  title: string;
  body: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
  quote?: { text: string; source: string; href: string };
};

const doors: Door[] = [
  {
    title: "Field Ops Platform",
    body: "Jobs, crews, vehicles, site sign-offs and invoicing in one place — built around how your operation already runs. From £250/month, unlimited users.",
    cta: "Explore the Field Ops Platform",
    href: "/platform-build",
    icon: Cog,
    featured: true,
  },
  {
    title: "Admin Fix",
    body: "One admin task automated — like turning Excel pricing into branded quotes in 30 seconds. From £75/month.",
    cta: "See pricing",
    href: "/pricing",
    icon: FileSpreadsheet,
    quote: {
      text: "Our quotes used to sit in a pile waiting to be typed up. Now they go out the same day.",
      source: "Birdwell Insulation Ltd, Sheffield",
      href: "/case-studies/birdwell",
    },
  },
  {
    title: "Fixed-Price Services",
    body: "One-off jobs, done and delivered. Websites, Google setup, AEO pages, review systems, compliance documents, sales and marketing strategy — fixed-price services from £97 to £750, each delivered to a deadline.",
    cta: "See all services & pricing",
    href: "/pricing",
    icon: Package,
  },
];

const DoorCard = ({ door }: { door: Door }) => {
  const Icon = door.icon;
  const f = door.featured;
  return (
    <div
      className={`relative rounded-xl p-8 border flex flex-col h-full ${
        f
          ? "bg-primary text-primary-foreground border-primary shadow-lg"
          : "bg-card border-border"
      }`}
    >
      {f && (
        <span className="absolute -top-3 left-8 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Our main product
        </span>
      )}
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
          f ? "bg-primary-foreground/15" : "bg-secondary"
        }`}
      >
        <Icon className={`w-5 h-5 ${f ? "text-primary-foreground" : "text-primary"}`} />
      </div>
      <h3 className="text-xl font-bold mb-3 leading-snug">{door.title}</h3>
      <p
        className={`leading-relaxed text-sm flex-1 ${
          f ? "text-primary-foreground/90" : "text-muted-foreground"
        }`}
      >
        {door.body}
      </p>
      {door.quote && (
        <Link
          href={door.quote.href}
          className="block mt-5 border-l-2 border-primary/40 pl-4 text-sm italic text-muted-foreground hover:text-foreground transition-colors"
        >
          &ldquo;{door.quote.text}&rdquo;
          <span className="block not-italic font-medium mt-1">— {door.quote.source}</span>
        </Link>
      )}
      <Link
        href={door.href}
        className={`group inline-flex items-center gap-1.5 text-sm font-semibold mt-6 ${
          f ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {door.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
};

const ThreeWaysToStart = () => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Where to Start</h2>

      {/* Three ways to act on what it finds — platform featured */}
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {doors.map((door) => (
          <DoorCard key={door.title} door={door} />
        ))}
      </div>

      <a
        href={HEALTH_CHECK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <Activity className="w-4 h-4 text-primary" />
        Smaller business, not sure where to start? Take the free 10-minute Business Health Check
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  </section>
);

export default ThreeWaysToStart;
