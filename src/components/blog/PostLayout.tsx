import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import SiteFooter from "@/components/landing/SiteFooter";
import { formatPostDate } from "@/content/posts";

type PostLayoutProps = {
  title: string;
  datePublished: string;
  author: string;
  children: ReactNode;
};

const PostLayout = ({
  title,
  datePublished,
  author,
  children,
}: PostLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-6 py-16 md:py-20 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-hero-muted hover:text-hero-foreground transition-colors text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          All articles
        </Link>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Article
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-8">
          {title}
        </h1>
        <div className="flex items-center gap-3">
          <Image
            src="/rob-france.jpg"
            alt={author}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border border-white/15"
          />
          <div className="text-sm">
            <Link
              href="/author/rob-france"
              className="text-hero-foreground font-medium hover:underline"
            >
              {author}
            </Link>
            <p className="text-hero-muted">{formatPostDate(datePublished)}</p>
          </div>
        </div>
      </div>
    </section>

    {/* Body */}
    <section className="bg-background flex-1">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <article>{children}</article>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default PostLayout;
