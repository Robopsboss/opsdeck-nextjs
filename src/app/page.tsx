import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ThreeWaysToStart from "@/components/landing/ThreeWaysToStart";
import RealResults from "@/components/landing/RealResults";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoItsFor from "@/components/landing/WhoItsFor";
import About from "@/components/landing/About";
import CTAFooter from "@/components/landing/CTAFooter";

const pageDescription =
  "Bespoke automation tools for UK trades businesses. Quoting, invoicing, job scheduling built around how you work. From £75/month.";

export const metadata: Metadata = {
  title: "OpsDeck — Admin Automation for Trades",
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://opsdeck.co.uk/",
    title: "OpsDeck — Admin Automation for Trades",
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://opsdeck.co.uk/#organization",
  name: "OpsDeck",
  url: "https://opsdeck.co.uk",
  logo: "https://opsdeck.co.uk/favicon.ico",
  description:
    "Bespoke AI automation tools for UK trades businesses. Built around how your business actually works.",
  founder: {
    "@type": "Person",
    name: "Rob France",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sheffield",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "07837698283",
    email: "rob@opsdeck.co.uk",
    contactType: "customer service",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <SocialProof />
        <ThreeWaysToStart />
        <RealResults />
        <HowItWorks />
        <WhoItsFor />
        <About />
        <CTAFooter />
      </div>
    </>
  );
}
