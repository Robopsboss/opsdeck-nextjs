import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ThreeViews from "@/components/landing/ThreeViews";
import JobFlow from "@/components/landing/JobFlow";
import BeforeAfter from "@/components/landing/BeforeAfter";
import ThreeWaysToStart from "@/components/landing/ThreeWaysToStart";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoItsFor from "@/components/landing/WhoItsFor";
import About from "@/components/landing/About";
import CTAFooter from "@/components/landing/CTAFooter";

const pageTitle =
  "OpsDeck — Field Operations Software for Scaffolding & Trades Firms";
const pageDescription =
  "OpsDeck runs your whole field operation from one place — jobs, crews, vehicles, handovers, hire weeks and invoicing, live on every phone. Built in Sheffield for scaffolding and trades firms.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://opsdeck.co.uk/",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OpsDeck",
    title: pageTitle,
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
        <ThreeViews />
        <JobFlow />
        <BeforeAfter />
        <ThreeWaysToStart />
        <HowItWorks />
        <WhoItsFor />
        <About />
        <CTAFooter />
      </div>
    </>
  );
}
