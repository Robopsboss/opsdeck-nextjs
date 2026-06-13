"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const LEAVE_DELAY_MS = 250;

const learnLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Bespoke", href: "/bespoke-vs-off-the-shelf" },
  { label: "Honest Comparison", href: "/honest-comparison" },
  { label: "Case Studies", href: "/case-studies/birdwell" },
];

const servicesFeatured = {
  label: "Platform Build",
  href: "/platform-build",
  blurb: "Bespoke AI platform built around your business",
};

const servicesGroups = [
  {
    name: "Get Found & Win Work",
    links: [
      { label: "Website Build", href: "/website-build" },
      { label: "GBP Setup & Optimisation", href: "/gbp-setup" },
      { label: "AEO Page Build", href: "/aeo-page-build" },
      { label: "Google Review System", href: "/google-review-system" },
      { label: "LinkedIn Optimisation", href: "/linkedin-optimisation" },
      { label: "Website Optimisation Pack", href: "/website-optimisation" },
    ],
  },
  {
    name: "Strategy & Sales",
    links: [
      { label: "Priority Action Call", href: "/priority-action-call" },
      { label: "Sales Process Document", href: "/sales-process" },
      { label: "6 Month Marketing Strategy", href: "/marketing-strategy" },
    ],
  },
  {
    name: "Compliance & Commercial",
    links: [
      { label: "Commercial Readiness Pack", href: "/commercial-readiness" },
      { label: "RAMS & Method Statement", href: "/rams-method-statement" },
      { label: "Compliance Pack", href: "/compliance-pack" },
      { label: "Company Profile Pack", href: "/company-profile" },
      { label: "Terms & Conditions Template", href: "/tcs-template" },
    ],
  },
];

const Navbar = () => {
  const [learnOpen, setLearnOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState<boolean[]>(
    servicesGroups.map(() => false)
  );

  const learnRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const learnLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openLearn = () => {
    if (learnLeaveTimerRef.current) {
      clearTimeout(learnLeaveTimerRef.current);
      learnLeaveTimerRef.current = null;
    }
    setLearnOpen(true);
  };

  const closeLearn = () => {
    learnLeaveTimerRef.current = setTimeout(() => {
      setLearnOpen(false);
    }, LEAVE_DELAY_MS);
  };

  const openServices = () => {
    if (servicesLeaveTimerRef.current) {
      clearTimeout(servicesLeaveTimerRef.current);
      servicesLeaveTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    servicesLeaveTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, LEAVE_DELAY_MS);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setLearnOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (learnLeaveTimerRef.current) clearTimeout(learnLeaveTimerRef.current);
      if (servicesLeaveTimerRef.current) clearTimeout(servicesLeaveTimerRef.current);
    };
  }, []);

  const toggleMobileGroup = (i: number) => {
    setMobileGroupsOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const linkClasses =
    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4 relative">
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
          <Link href="/faq" className={linkClasses}>
            FAQ
          </Link>

          {/* Services mega-menu — panel always rendered for SEO; CSS toggles visibility.
              Panel positioning context is the navbar container (relative), not this wrapper,
              so it anchors to the container's right edge and stays inside the viewport. */}
          <div
            ref={servicesRef}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              onClick={() => setServicesOpen((o) => !o)}
              className={`${linkClasses} inline-flex items-center gap-1`}
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="services-dropdown"
              role="menu"
              aria-hidden={!servicesOpen}
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              className={`absolute top-full right-6 mt-1 w-[640px] max-w-[calc(100vw-3rem)] rounded-lg border border-border bg-card shadow-lg p-6 z-50 transition-opacity duration-150 ${
                servicesOpen
                  ? "opacity-100 visible pointer-events-auto"
                  : "opacity-0 invisible pointer-events-none"
              }`}
            >
              {/* Featured — Platform Build */}
              <Link
                href={servicesFeatured.href}
                className="group flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary mb-0.5">
                    {servicesFeatured.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {servicesFeatured.blurb}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>

              {/* 3 group columns */}
              <div className="grid grid-cols-3 gap-6 mt-6">
                {servicesGroups.map((group) => (
                  <div key={group.name}>
                    <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-3">
                      {group.name}
                    </p>
                    <ul className="space-y-0.5">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            role="menuitem"
                            className="block px-2 py-1.5 -mx-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learn dropdown */}
          <div
            ref={learnRef}
            className="relative"
            onMouseEnter={openLearn}
            onMouseLeave={closeLearn}
          >
            <button
              onClick={() => setLearnOpen((o) => !o)}
              className={`${linkClasses} inline-flex items-center gap-1`}
              aria-expanded={learnOpen}
            >
              Learn
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  learnOpen ? "rotate-180" : ""
                }`}
              />
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
            <Link
              href="/faq"
              className="py-2 text-base font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>

            {/* Mobile Services accordion */}
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="py-2 text-base font-medium text-foreground inline-flex items-center justify-between w-full"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-panel"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id="mobile-services-panel"
              aria-hidden={!mobileServicesOpen}
              className={`pl-4 ml-1 border-l border-border overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? "max-h-[2400px] mb-2" : "max-h-0"
              }`}
            >
              {/* Featured */}
              <Link
                href={servicesFeatured.href}
                className="block p-3 mt-2 mb-3 rounded-lg bg-primary/5 border border-primary/20"
                onClick={() => setMobileOpen(false)}
              >
                <p className="text-sm font-bold text-primary">
                  {servicesFeatured.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {servicesFeatured.blurb}
                </p>
              </Link>

              {servicesGroups.map((group, i) => (
                <div key={group.name} className="mb-1">
                  <button
                    onClick={() => toggleMobileGroup(i)}
                    className="w-full inline-flex items-center justify-between py-2"
                    aria-expanded={mobileGroupsOpen[i]}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {group.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${
                        mobileGroupsOpen[i] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    aria-hidden={!mobileGroupsOpen[i]}
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileGroupsOpen[i] ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    <ul className="pb-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block py-1.5 text-sm text-muted-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Learn */}
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
