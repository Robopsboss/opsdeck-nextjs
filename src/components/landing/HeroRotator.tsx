"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Index 0 mirrors the static first frame that the parent server-renders
// underneath this overlay (so it's in the HTML without JS / for crawlers).
// This client overlay layers the JS-only crossfade on top and cycles through
// all four frames. Frame 0's alt is left empty here because the server-
// rendered base already carries the descriptive alt text.
const SCREENS = [
  { src: "/hero-fieldops-1.png", alt: "" },
  {
    src: "/hero-fieldops-2.png",
    alt: "Scaffold job list tracking every job from booked to dismantled, with hire weeks and overruns flagged",
  },
  {
    src: "/hero-fieldops-3.png",
    alt: "Invoice screen flagging scaffold jobs ready to invoice and hires that ran over, with full invoice history",
  },
  {
    src: "/hero-fieldops-4.png",
    alt: "OpsDeck scaffolding dashboard: today's vehicle runs, hires ending soon, hires running over, permits and handovers",
  },
];

const HOLD_MS = 3000;

const HeroRotator = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SCREENS.length);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SCREENS.map((screen, i) => (
        <Image
          key={screen.src}
          src={screen.src}
          alt={screen.alt}
          fill
          sizes="(min-width: 1152px) 1104px, 100vw"
          aria-hidden={i === active && screen.alt ? undefined : true}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroRotator;
