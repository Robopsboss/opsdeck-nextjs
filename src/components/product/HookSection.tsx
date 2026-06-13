type HookSectionProps = {
  eyebrow?: string;
  title?: string;
  body: string;
};

const HookSection = ({ eyebrow, title, body }: HookSectionProps) => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      {eyebrow && (
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {title}
        </h2>
      )}
      <div className="bg-card border border-border border-l-4 border-l-primary rounded-r-xl p-6 md:p-8">
        <p className="text-foreground text-base md:text-lg leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  </section>
);

export default HookSection;
