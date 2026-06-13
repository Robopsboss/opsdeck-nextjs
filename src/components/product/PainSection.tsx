type PainSectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  painPoints: string[];
};

const PainSection = ({ eyebrow, title, intro, painPoints }: PainSectionProps) => (
  <section className="bg-background">
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
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-8">
          {intro}
        </p>
      )}
      <div className="bg-section-alt border-l-4 border-primary rounded-r-xl p-6 md:p-8">
        <ul className="space-y-5 md:space-y-6">
          {painPoints.map((p) => (
            <li
              key={p}
              className="text-foreground text-base md:text-lg leading-relaxed"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PainSection;
