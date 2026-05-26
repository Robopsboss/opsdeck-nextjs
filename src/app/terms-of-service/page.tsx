import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";

const pageTitle = "Terms of Service — OpsDeck";
const pageDescription =
  "OpsDeck's Terms of Service govern your use of the OpsDeck platform and website. Read them carefully before using our services.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    url: "https://opsdeck.co.uk/terms-of-service",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-hero-muted text-base">Last updated: April 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background flex-1">
        <div className="container mx-auto px-6 py-14 md:py-20 max-w-3xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p className="italic text-foreground/80 border-l-4 border-primary pl-4">
              These Terms of Service govern your use of the OpsDeck platform and website. By accessing or using OpsDeck you agree to be bound by these terms. If you do not agree please do not use the platform.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. About OpsDeck</h2>
              <p className="mb-3">
                OpsDeck is a cloud-based field operations and business management platform provided by Opsdeck Ltd, a private limited company registered in England and Wales (Company No. 17075735).
              </p>
              <p>
                The platform is designed for use by trade and construction businesses and their authorised employees. It is not intended for personal or consumer use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Accepting These Terms</h2>
              <p className="mb-3">By creating an account, accessing the platform, or using any of our services you confirm that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You are authorised to enter into agreements on behalf of your organisation</li>
                <li>Your organisation is a business and not a consumer</li>
                <li>You are at least 18 years of age</li>
                <li>All information you provide is accurate and up to date</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Your Account</h2>
              <p className="mb-2">3.1 You are responsible for maintaining the security of your account credentials. Do not share your password with anyone.</p>
              <p className="mb-2">3.2 You must notify us immediately at <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">rob@opsdeck.co.uk</a> if you suspect any unauthorised access to your account.</p>
              <p className="mb-2">3.3 We reserve the right to suspend or terminate accounts that breach these terms.</p>
              <p>3.4 You are responsible for all activity that occurs under your account.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Acceptable Use</h2>
              <p className="mb-3">You agree to use the OpsDeck platform only for lawful business purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Upload any unlawful, harmful, defamatory or fraudulent content</li>
                <li>Attempt to gain unauthorised access to any part of the platform or other customers&apos; data</li>
                <li>Use the platform to store or process special category personal data without our prior written agreement</li>
                <li>Reverse engineer, copy, resell or sublicense any part of the platform</li>
                <li>Use the platform in any way that could damage, disable or impair its performance</li>
                <li>Upload content that infringes any third party intellectual property rights</li>
                <li>Use automated scripts or bots to interact with the platform without our consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Platform Availability</h2>
              <p>
                We aim to keep the OpsDeck platform available at all times but do not guarantee uninterrupted access. Planned maintenance will be notified 48 hours in advance where possible. Service level commitments and remedies for downtime are set out in your Master Services Agreement. These Terms of Service do not create any additional uptime obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Intellectual Property</h2>
              <p className="mb-2">6.1 All intellectual property in the OpsDeck platform including its design, code, features and content belongs to Opsdeck Ltd.</p>
              <p className="mb-2">6.2 You are granted a limited, non-exclusive, non-transferable licence to use the platform for your internal business purposes during the term of your subscription.</p>
              <p className="mb-2">6.3 You retain all rights in the data and content you upload to the platform.</p>
              <p>6.4 You grant Opsdeck Ltd a limited licence to process your data solely for the purpose of providing the services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Payment</h2>
              <p className="mb-2">7.1 Subscription fees are charged monthly on the 1st of each month via Stripe. By providing payment details you authorise recurring charges.</p>
              <p className="mb-2">7.2 Build fees and one-off charges are invoiced separately with 7 day payment terms.</p>
              <p className="mb-2">7.3 Failure to pay may result in suspension of platform access.</p>
              <p className="mb-2">7.4 All fees are exclusive of VAT where applicable.</p>
              <p>7.5 We reserve the right to change subscription pricing with 30 days written notice.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Cancellation</h2>
              <p className="mb-2">8.1 You may cancel your subscription at any time by giving 30 days written notice to <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">rob@opsdeck.co.uk</a>.</p>
              <p className="mb-2">8.2 You remain liable for subscription fees during the notice period.</p>
              <p>8.3 On cancellation your data will be retained for 30 days and then permanently deleted. You may request an export of your data during this period.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Liability</h2>
              <p className="mb-2">9.1 To the fullest extent permitted by law, Opsdeck Ltd&apos;s total liability to you shall not exceed the total fees paid by you in the 12 months preceding the event giving rise to the claim.</p>
              <p className="mb-2">9.2 We are not liable for any indirect, consequential, or special losses including loss of profits, loss of data, or loss of business opportunity.</p>
              <p className="mb-2">9.3 We are not liable for outages or failures caused by third-party infrastructure providers including Supabase, Clerk, Netlify or Stripe.</p>
              <p>9.4 Nothing in these terms excludes liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Data Protection</h2>
              <p className="mb-3">
                Your use of the platform is also governed by our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> available at opsdeck.co.uk. By using the platform you confirm you have read and understood our Privacy Policy.
              </p>
              <p>
                You are responsible as Data Controller for any personal data you upload to the platform. You warrant that you have a lawful basis for processing such data and have obtained all necessary consents.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">11. Changes to These Terms</h2>
              <p className="mb-3">
                We may update these Terms of Service from time to time. We will notify you of material changes by email or via a notice within the platform with at least 14 days notice before changes take effect.
              </p>
              <p>
                Continued use of the platform after that date constitutes acceptance of the updated terms. If you do not accept the changes you may cancel your subscription before the changes take effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">12. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">13. Contact</h2>
              <p className="mb-3">For any queries about these Terms of Service please contact:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rob — Opsdeck Ltd</li>
                <li>Email: <a href="mailto:rob@opsdeck.co.uk" className="text-primary hover:underline">rob@opsdeck.co.uk</a></li>
                <li>Website: opsdeck.co.uk</li>
                <li>Post: 19 Newton Vale, S35 2YL</li>
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
