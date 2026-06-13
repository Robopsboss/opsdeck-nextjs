import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import { formatPostDate, posts } from "@/content/posts";

const pageTitle = "Blog | OpsDeck";
const pageDescription =
  "Articles from Rob France, founder of OpsDeck — on building a platform from scratch, running a trades business, and what really works for admin automation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "https://opsdeck.co.uk/blog",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
};

const sortedPosts = [...posts].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero text-hero-foreground">
        <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
            Notes from the build
          </h1>
          <p className="text-hero-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Articles from Rob France on building OpsDeck, running Infascape, and what actually works for trades business admin.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-background flex-1">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
          <ul className="space-y-6">
            {sortedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary transition-colors"
                >
                  <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
                    Article · {formatPostDate(post.datePublished)}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
