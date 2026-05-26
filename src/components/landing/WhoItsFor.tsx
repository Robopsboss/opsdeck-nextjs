const trades = ["Groundworks", "Landscaping", "Insulation", "Roofing", "Fencing"];

const WhoItsFor = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Built for Trades That Deal With Complex Jobs
      </h2>
      <p className="text-muted-foreground text-lg mb-3 leading-relaxed max-w-3xl">
        OpsDeck isn&apos;t for electricians quoting two hours labour. It&apos;s for trades where the quote itself is complicated — where materials need calculating, specifications matter, where a wrong number costs you money.
      </p>
      <p className="text-foreground font-semibold text-lg mb-6">
        {trades.join(" · ")}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        If your quotes take time and brain power to get right, we can help.
      </p>
    </div>
  </section>
);

export default WhoItsFor;
