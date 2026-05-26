"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const LEAVE_DELAY_MS = 250;

const learnLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Bespoke", href: "/bespoke-vs-off-the-shelf" },
  { label: "Honest Comparison", href: "/honest-comparison" },
  { label: "Case Studies", href: "/case-studies/birdwell" },
];

const Navbar = () => {
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const learnRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openLearn = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setLearnOpen(true);
  };

  const closeLearn = () => {
    leaveTimerRef.current = setTimeout(() => {
      setLearnOpen(false);
    }, LEAVE_DELAY_MS);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setLearnOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  const linkClasses =
    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          aria-label="OpsDeck home"
        >
          <Image
            src="/opsdeck-logo.png"
            alt="OpsDeck"
            width={36}
            height={36}
            className="w-9 h-9 rounded-lg"
            priority
          />
          <span className="text-lg font-bold text-foreground">OpsDeck</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <Link href="/pricing" className={linkClasses}>
            Pricing
          </Link>

          <div
            ref={learnRef}
            className="relative"
            onMouseEnter={openLearn}
            onMouseLeave={closeLearn}
          >
            <button
              onClick={() => setLearnOpen((o) => !o)}
              className={`${linkClasses} inline-flex items-center gap-1`}
            >
              Learn
              <ChevronDown className="w-4 h-4" />
            </button>
            {learnOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-card shadow-lg py-2 z-50">
                {learnLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setLearnOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className={linkClasses}>
            About
          </Link>
          <a href="mailto:rob@opsdeck.co.uk" className={linkClasses}>
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="py-2 text-base font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="py-2 text-base font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <button
              onClick={() => setMobileLearnOpen((o) => !o)}
              className="py-2 text-base font-medium text-foreground inline-flex items-center justify-between w-full"
              aria-expanded={mobileLearnOpen}
            >
              <span>Learn</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileLearnOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileLearnOpen && (
              <div className="pl-4 flex flex-col gap-1 border-l border-border ml-1 mb-1">
                {learnLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-sm text-muted-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/about"
              className="py-2 text-base font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <a
              href="mailto:rob@opsdeck.co.uk"
              className="py-2 text-base font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
