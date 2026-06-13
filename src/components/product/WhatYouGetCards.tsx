type WhatYouGetCard = {
  name: string;
  body: string;
};

type WhatYouGetCardsProps = {
  title: string;
  intro?: string;
  cards: WhatYouGetCard[];
  footer?: string;
};

const WhatYouGetCards = ({ title, intro, cards, footer }: WhatYouGetCardsProps) => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
      {intro && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          {intro}
        </p>
      )}
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.name}
            className="bg-card rounded-xl p-8 border border-border flex flex-col"
          >
            <h3 className="text-lg md:text-xl font-bold text-primary mb-3 leading-snug">
              {card.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {card.body}
            </p>
          </div>
        ))}
      </div>
      {footer && (
        <p className="text-sm text-muted-foreground text-center mt-10 max-w-3xl mx-auto leading-relaxed">
          {footer}
        </p>
      )}
    </div>
  </section>
);

export default WhatYouGetCards;
