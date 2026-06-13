export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string; // ISO YYYY-MM-DD
  author: string;
};

export const posts: BlogPost[] = [
  {
    slug: "why-every-quoting-tool-failed",
    title:
      "Why Every Quoting Tool I Tried Failed My Trades Business — And What I Built Instead",
    excerpt:
      "Rob France on four years of admin chaos, the tools that failed, building OpsDeck from scratch, and what it actually took to get off the laptop at night.",
    datePublished: "2026-06-13",
    author: "Rob France",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  posts.find((p) => p.slug === slug);

export const getPostBySlugOrThrow = (slug: string): BlogPost => {
  const post = getPostBySlug(slug);
  if (!post) throw new Error(`Post not found in registry: ${slug}`);
  return post;
};

export const formatPostDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
