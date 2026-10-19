import { MessageSquare, Wrench, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "We come to you",
    body: "We start with a free consultation to walk through how your operation runs today — enquiries, jobs, crews, paperwork — and where the office is losing time.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "We build around you",
    body: "No off-the-shelf software. We build the platform around the way your operation already works — your job stages, your paperwork, your trade. You don't change your process — we take it off paper.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Your whole operation goes live",
    body: "The office stops chasing, the lads stop printing, and you can see the whole operation from your phone. And it's an ongoing partnership — we keep building as your business grows.",
  },
];

const HowItWorks = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
      <p className="text-muted-foreground text-lg mb-16">
        We find the admin task costing you the most time — and make it disappear.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div key={step.num} className="relative">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="absolute top-0 right-0 text-6xl font-black text-step-number select-none leading-none">
              {step.num}
            </span>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
