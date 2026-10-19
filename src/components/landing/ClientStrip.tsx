import Image from "next/image";

const clients = [
  { name: "Hi-Point Access", src: "/logos/hi-point-access.png", w: 567, h: 750, box: "h-14" },
  { name: "7 Hills Scaffolding", src: "/logos/7-hills-scaffolding.png", w: 978, h: 690, box: "h-14" },
  { name: "Birdwell Insulation", src: "/logos/birdwell-insulation.png", w: 1207, h: 191, box: "h-7" },
];

const ClientStrip = () => (
  <section className="bg-background border-b border-border">
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <p className="text-center text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
        Running at Sheffield trades firms
      </p>
      <ul className="flex flex-wrap items-end justify-center gap-x-12 gap-y-6">
        {clients.map((c) => (
          <li key={c.name} className="flex flex-col items-center gap-2">
            <div className="h-14 flex items-center">
              <Image
                src={c.src}
                alt={`${c.name} logo`}
                width={c.w}
                height={c.h}
                className={`${c.box} w-auto`}
              />
            </div>
            <span className="text-xs text-muted-foreground">{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ClientStrip;
