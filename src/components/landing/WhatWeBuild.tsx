import { Zap, FileText, Bot } from "lucide-react";

const cards = [
  {
    icon: Bot,
    label: "AI TOOLS & AUTOMATION",
    title: "Single purpose tools that save hours",
    body: "Converters, automators, and AI utilities built around one specific task that's costing you time. If you've got a process that's manual and repetitive — we automate it.",
  },
  {
    icon: Zap,
    label: "QUOTE BUILDER",
    title: "Quote any job in under a minute",
    body: "Speak or type the job spec. Your custom engine generates a full professional quote instantly, built around your exact pricing and margins. Send it direct from the app.",
  },
  {
    icon: FileText,
    label: "QUOTE BUILDER + DASHBOARD",
    title: "Run your pipeline from one place",
    body: "Everything in the Quote Builder plus a full business dashboard — enquiries, jobs, calendar, sales overview, and profit forecasting. Know exactly where your business stands at any moment.",
  },
  {
    icon: Bot,
    label: "FULL FIELD OPS PLATFORM",
    title: "Your entire operation in one platform",
    body: "Everything in the dashboard tier plus team management, direct messaging, multi-user access, and a fully bespoke build configured to your exact trade and workflow. This is OpsDeck at full power.",
  },
];

const WhatWeBuild = () => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Build</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-card rounded-xl p-8 border border-border flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
              <card.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-bold tracking-widest text-primary mb-2">
              {card.label}
            </span>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm flex-1">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeBuild;
