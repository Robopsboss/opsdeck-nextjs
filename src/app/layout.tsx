import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opsdeck.co.uk"),
  title: "OpsDeck — Admin Automation for Trades",
  description: "Bespoke automation tools for UK trades businesses. From £75/month.",
  authors: [{ name: "Infascape Ltd" }],
  openGraph: {
    type: "website",
    title: "OpsDeck — I Find The Admin Task Costing You The Most Time And Make It Disappear",
    description:
      "OpsDeck builds bespoke automation tools for UK trades businesses. From quoting and invoicing to job scheduling and team admin — built around how your business actually works. From £75/month.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OpsDeck",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
