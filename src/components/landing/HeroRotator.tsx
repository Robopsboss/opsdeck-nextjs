"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Index 0 mirrors the static first frame that the parent server-renders
// underneath this overlay (so it's in the HTML without JS / for crawlers).
// This client overlay layers the JS-only crossfade on top and cycles through
// all three frames. Frame 0's alt is left empty here because the server-
// rendered base already carries the descriptive alt text.
const SCREENS = [
  { src: "/hero-ops-agent.png", alt: "" },
  {
    src: "/hero-profit.png",
    alt: "OpsDeck profit analysis, showing margins and forecasting across jobs",
  },
  {
    src: "/hero-voice-quote.png",
    alt: "OpsDeck voice quoting, turning a spoken job description into a priced quote",
  },
];

const HOLD_MS = 3500;

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
