type Step = {
  title: string;
  body: string;
};

type HowItWorksStepsProps = {
  title: string;
  intro?: string;
  steps: Step[];
};

const HowItWorksSteps = ({ title, intro, steps }: HowItWorksStepsProps) => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          {intro}
        </p>
      )}
      <div className="relative mt-10">
        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border md:left-[23px]" />
        <ol className="space-y-12 md:space-y-14">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex items-start gap-6">
              <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 md:w-12 md:h-12 md:text-base">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 pt-1.5 md:pt-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default HowItWorksSteps;
