import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle = "Privacy Policy — OpsDeck";
const pageDescription =
  "OpsDeck's Privacy Policy explains how we collect, use, store and protect your personal data when you use our platform or website.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    url: "https://opsdeck.co.uk/privacy-policy",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="text-hero-muted text-base">Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background flex-1">
        <div className="container mx-auto px-6 py-14 md:py-20 max-w-3xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p className="italic text-foreground/80 border-l-4 border-primary pl-4">
              This Privacy Policy explains how Opsdeck Ltd collects, uses, stores and
              protects your personal data when you use our platform or website. Please
              read it carefully.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Who We Are</h2>
              <p className="mb-3">
                Opsdeck Ltd is a private limited company registered in England and Wales
                (Company No. 17075735). We provide cloud-based field operations and
                business management software to trade and construction businesses.
              </p>
              <p className="mb-3">
                We are registered with the Information Commissioner&apos;s Office (ICO). ICO
                Registration No: <strong className="text-foreground">ZC126490</strong>.
              </p>
              <p className="font-semibold text-foreground">Contact details for data protection queries:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email: <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">rob@opsdeck.co.uk</a></li>
                <li>Post: Opsdeck Ltd, 19 Newton Vale, S35 2YL</li>
                <li>Phone: 07837 698 283</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. What Data We Collect</h2>

              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2.1 Data you provide directly</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and job title</li>
                <li>Business name and address</li>
                <li>Email address and phone number</li>
                <li>Login credentials (managed securely via Clerk)</li>
                <li>Payment information (processed securely via Stripe — we do not store card details)</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-5 mb-2">2.2 Data uploaded to the platform</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Job information, documents and files uploaded by your organisation</li>
                <li>Photos taken on site and uploaded by your team</li>
                <li>Any personal data contained within documents you upload — this remains your responsibility as Data Controller</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-5 mb-2">2.3 Data collected automatically</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Browser type, device type and operating system</li>
                <li>IP address and approximate location</li>
                <li>Pages visited and features used within the platform</li>
                <li>Login times and session data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Data</h2>
              <p className="mb-3">We use your personal data only for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and maintain the OpsDeck platform and services</li>
                <li>To manage your account and authenticate your identity</li>
                <li>To process payments and send invoices and receipts</li>
                <li>To communicate with you about your account, updates and support</li>
                <li>To improve the platform based on usage patterns</li>
                <li>To comply with our legal obligations</li>
              </ul>
              <p className="mt-3 font-semibold text-foreground">
                We do not use your data for marketing to third parties. We do not sell your data. Ever.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Legal Basis for Processing</h2>
              <p className="mb-3">Under UK GDPR we process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Contract</strong> — processing necessary to deliver the services you have contracted with us</li>
                <li><strong className="text-foreground">Legal obligation</strong> — processing required to comply with applicable law</li>
                <li><strong className="text-foreground">Legitimate interests</strong> — improving and securing our platform, where this does not override your rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Who We Share Your Data With</h2>
              <p className="mb-4">
                We use the following third-party sub-processors to deliver our services. These providers are bound by their own data protection obligations:
              </p>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-secondary text-foreground">
                    <tr>
                      <th className="text-left font-semibold px-4 py-3">Provider</th>
                      <th className="text-left font-semibold px-4 py-3">Purpose</th>
                      <th className="text-left font-semibold px-4 py-3">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="px-4 py-3">Supabase Inc</td><td className="px-4 py-3">Database and file storage</td><td className="px-4 py-3">EU (Frankfurt)</td></tr>
                    <tr><td className="px-4 py-3">Clerk Inc</td><td className="px-4 py-3">Authentication and user management</td><td className="px-4 py-3">EU infrastructure</td></tr>
                    <tr><td className="px-4 py-3">Netlify Inc</td><td className="px-4 py-3">Platform hosting and serverless functions</td><td className="px-4 py-3">EU infrastructure</td></tr>
                    <tr><td className="px-4 py-3">Stripe Inc</td><td className="px-4 py-3">Payment processing</td><td className="px-4 py-3">EU infrastructure</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">We do not share your data with any other third parties unless required to do so by law.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Data Retention</h2>
              <p className="mb-3">We retain your personal data for as long as your account is active. On termination of your subscription:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your data is retained for 30 days during which you may request an export</li>
                <li>After 30 days all data is permanently and irreversibly deleted</li>
                <li>Financial records are retained for 7 years as required by HMRC</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Your Rights</h2>
              <p className="mb-3">Under UK GDPR you have the following rights in relation to your personal data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-foreground">Right of access</strong> — request a copy of the data we hold about you</li>
                <li><strong className="text-foreground">Right to rectification</strong> — request correction of inaccurate data</li>
                <li><strong className="text-foreground">Right to erasure</strong> — request deletion of your data in certain circumstances</li>
                <li><strong className="text-foreground">Right to restrict processing</strong> — request we limit how we use your data</li>
                <li><strong className="text-foreground">Right to data portability</strong> — request your data in a machine-readable format</li>
                <li><strong className="text-foreground">Right to object</strong> — object to processing based on legitimate interests</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights please contact us at{" "}
                <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">rob@opsdeck.co.uk</a>. We will respond within 30 days.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the ICO at ico.org.uk or by calling 0303 123 1113.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Security</h2>
              <p className="mb-3">We implement appropriate technical and organisational measures to protect your data including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Row Level Security on all database tables — your data is isolated from other customers</li>
                <li>All data encrypted in transit using TLS</li>
                <li>All data encrypted at rest</li>
                <li>Authentication handled by Clerk — SOC 2 Type II compliant</li>
                <li>Access controls limiting who within our team can access your data</li>
              </ul>
              <p className="mt-3">
                No method of transmission or storage is 100% secure. In the event of a data breach we will notify affected parties and the ICO as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Cookies</h2>
              <p className="mb-3">
                Our platform uses essential cookies required for authentication and session management. These cannot be disabled as they are necessary for the platform to function.
              </p>
              <p>We do not use advertising or tracking cookies. We do not use Google Analytics or similar tracking tools.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Changes to This Policy</h2>
              <p className="mb-3">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by email or via a notice within the platform. The date at the top of this document indicates when it was last updated.
              </p>
              <p>Continued use of the platform following notification of changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">11. Contact Us</h2>
              <p className="mb-3">For any data protection queries or to exercise your rights please contact:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rob — Opsdeck Ltd</li>
                <li>Email: <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">rob@opsdeck.co.uk</a></li>
                <li>Post: 19 Newton Vale, S35 2YL</li>
                <li>Phone: 07837 698 283</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6 text-sm text-muted-foreground">
              Opsdeck Ltd | 19 Newton Vale, S35 2YL | 07837 698 283 | rob@opsdeck.co.uk<br />
              opsdeck.co.uk | Company No. 17075735 | ICO Registration No. ZC126490 | Registered in England &amp; Wales
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
