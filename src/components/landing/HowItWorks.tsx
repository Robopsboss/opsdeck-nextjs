import { MessageSquare, Wrench, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "We come to you",
    body: "We start with a free consultation to understand your business, your quoting process, and where you're losing time.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "We build around you",
    body: "No off-the-shelf software. We build a custom tool configured to your exact pricing rules, job types, and materials. You don't change your process — we automate it.",
  },
  {
    num: "03",
    icon: Zap,
    title: "You save hours every week",
    body: "Your tool is live. This isn't a one-off build — it's an ongoing partnership. Quotes that used to take 30 minutes now take under a minute. Admin that used to eat your evenings is gone.",
  },
];

const HowItWorks = () => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">How It Works</h2>
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
