const trades = ["Groundworks", "Landscaping", "Insulation", "Roofing", "Fencing", "Scaffolding"];

const WhoItsFor = () => (
  <section className="bg-hero-dark text-hero-foreground">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Built for trades businesses with real operations to run
      </h2>
      <p className="text-hero-muted text-lg mb-3 leading-relaxed max-w-3xl">
        OpsDeck isn&apos;t for simple, repeatable work. It&apos;s for firms where the work is genuinely complex — materials and specifications that have to be calculated right, more than one person involved in pricing and delivery, and jobs that move between the office and the sites.
      </p>
      <p className="text-hero-muted text-lg mb-6 leading-relaxed max-w-3xl">
        Once a business has grown past spreadsheets and informal systems, things start slipping through the cracks — between the people quoting, the people running the jobs, and the people chasing the money. OpsDeck brings the whole operation into one place.
      </p>
      <p className="text-hero-muted/70 text-sm">
        Just some of the trades we work with: {trades.join(" · ")}
      </p>
    </div>
  </section>
);

export default WhoItsFor;
