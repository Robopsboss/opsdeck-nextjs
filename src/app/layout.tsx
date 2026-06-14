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
  title: "OpsDeck — Run Your Whole Operation From One Place",
  description:
    "OpsDeck helps UK trades businesses run their whole operation from one place — quoting, jobs, team and invoicing, plus done-for-you websites, compliance and sales services. Built by a tradesman.",
  authors: [{ name: "OpsDeck" }],
  openGraph: {
    type: "website",
    title: "OpsDeck — Run Your Whole Operation From One Place",
    description:
      "OpsDeck helps UK trades businesses run their whole operation from one place — quoting, jobs, team and invoicing, plus done-for-you websites, compliance and sales services. Built by a tradesman.",
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
