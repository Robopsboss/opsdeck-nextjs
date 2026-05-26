const results = [
  {
    description: "50sqm tarmac driveway, 10m edgings, 10m ACO drains, 35m block border",
    price: "£7,785",
    time: "quoted in under 1 minute",
  },
  {
    description: "40sqm porcelain patio, 25m porcelain border with 25sqm artificial grass",
    price: "£9,050",
    time: "quoted in under 1 minute",
  },
];

const RealResults = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Real Output, Real Speed</h2>
      <p className="text-muted-foreground text-lg mb-12">
        These are actual quote outputs from the engine — not mockups.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {results.map((r, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-8">
            <span className="text-xs font-bold tracking-widest text-primary mb-3 block">
              LANDSCAPING
            </span>
            <p className="text-foreground font-medium mb-4 leading-relaxed">
              {r.description}
            </p>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-black">{r.price}</span>
              <span className="text-sm text-muted-foreground">{r.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RealResults;
