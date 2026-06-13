import Link from "next/link";

const SiteFooter = () => (
  <footer
    className="w-full text-white block"
    style={{ backgroundColor: "#1F3A6E" }}
  >
    <div className="container mx-auto px-6 py-10 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 text-sm">
        <div className="space-y-1 break-words">
          <p className="font-semibold text-base">Opsdeck Ltd</p>
          <p className="text-white/70">Company No. 17075735</p>
          <p className="text-white/70">ICO Registration No. ZC126490</p>
        </div>
        <nav className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/faq"
            className="text-white/80 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/service-area"
            className="text-white/80 hover:text-white transition-colors"
          >
            Service Area
          </Link>
          <Link
            href="/privacy-policy"
            className="text-white/80 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-white/80 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href="mailto:rob@opsdeck.co.uk"
            className="text-white/80 hover:text-white transition-colors break-all"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t border-white/15 mt-8 pt-5 text-xs text-white/60 text-center md:text-left">
        Copyright © 2026 Opsdeck Ltd
      </div>
    </div>
  </footer>
);

export default SiteFooter;
