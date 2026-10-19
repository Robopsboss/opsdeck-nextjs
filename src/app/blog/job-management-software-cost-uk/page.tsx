import type { Metadata } from "next";
import Link from "next/link";
import PostLayout from "@/components/blog/PostLayout";
import { getPostBySlugOrThrow } from "@/content/posts";

const SLUG = "job-management-software-cost-uk";
const post = getPostBySlugOrThrow(SLUG);

export const metadata: Metadata = {
  title: `${post.title} | OpsDeck`,
  description: post.excerpt,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    url: `https://opsdeck.co.uk/blog/${SLUG}`,
    title: post.title,
    description: post.excerpt,
    images: ["/og-image.png"],
    type: "article",
    publishedTime: post.datePublished,
    authors: [post.author],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.datePublished,
  author: { "@id": "https://opsdeck.co.uk/author/rob-france#person" },
  publisher: { "@id": "https://opsdeck.co.uk/#organization" },
  mainEntityOfPage: `https://opsdeck.co.uk/blog/${SLUG}`,
  image: "https://opsdeck.co.uk/og-image.png",
};

const P = "text-base md:text-lg leading-relaxed text-foreground mb-6";
const H2 = "text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-snug";
const H3 = "text-xl font-bold text-foreground mt-8 mb-3";
const UL = "list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed text-foreground mb-6";
const A = "text-primary font-medium underline underline-offset-4 hover:no-underline";

const example = [
  ["Per-user app at £35/user/month", "24 users", "£840", "£10,080"],
  ["Per-user app at £55/user/month", "24 users", "£1,320", "£15,840"],
  ["OpsDeck, 11–20 operatives band", "Unlimited", "£325", "£5,400 (incl. £1,500 build)"],
];

export default function JobManagementSoftwareCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout title={post.title} datePublished={post.datePublished} author={post.author}>
        <div className="rounded-xl bg-section-alt border border-border p-6 mb-10">
          <p className="font-bold mb-2">The short answer</p>
          <p className="leading-relaxed">
            For a UK trades firm, off-the-shelf job management software typically costs <strong>£35 to £55 per user per month</strong>. Larger platforms such as BigChange and simPRO don&apos;t publish prices — you get a quote after a demo. Custom software agencies charge <strong>£10,000 to £50,000</strong> for a bespoke build. OpsDeck sits in between: <strong>£250 to £550 a month</strong> by number of field operatives, unlimited users, plus a build fee from £1,500.
          </p>
        </div>

        <p className={P}>
          When I started looking for software for my own trades business, the first thing I wanted to know was what it would cost. It was the hardest thing to find out. Half the sites wanted a demo before they&apos;d give me a number, and the other half showed a monthly price that had nothing to do with what I&apos;d actually end up paying.
        </p>
        <p className={P}>
          So here&apos;s the straight version — how job management software is priced in the UK, what a firm with a team on site will really pay, and the costs nobody puts on the pricing page. I build field operations software for a living, so I&apos;ve got a horse in this race. Where another product is the better buy, I&apos;ll say so.
        </p>

        <h2 className={H2}>The three ways job management software is priced</h2>

        <h3 className={H3}>1. Per user, per month</h3>
        <p className={P}>
          Most off-the-shelf tools — Tradify, Jobber, Joblogic and similar — charge for every person who logs in. Independent UK comparisons put most of them somewhere around £35 to £55 per user per month, and Joblogic is listed from around £45 per user per month, billed annually. Jobber publishes plans tiered by number of users, with extra users charged on top.
        </p>
        <p className={P}>
          This model is cheap when you&apos;re small and expensive when you grow. Every new operative who needs the app is another line on the bill.
        </p>

        <h3 className={H3}>2. Quote only</h3>
        <p className={P}>
          BigChange and simPRO don&apos;t publish prices. You book a demo, they scope your firm, and you get a quote. That&apos;s not automatically a bad thing — they&apos;re big systems — but it means you can&apos;t compare until you&apos;ve spent time in a sales process. If you go down this road, ask for the total first-year cost in writing, including setup, training and any extras such as fleet tracking.
        </p>

        <h3 className={H3}>3. Banded by the size of your field team</h3>
        <p className={P}>
          This is how OpsDeck is priced. The monthly fee is set by how many operatives you have in the field, and everyone else — office, directors, surveyors, admin — is included. Our published bands are £250 a month for 1–10 operatives, £325 for 11–20, £400 for 21–30, £475 for 31–40 and £550 for 41–50, with a build fee from £1,500 fixed after a scoping call.
        </p>

        <h2 className={H2}>A worked example: 20 operatives and 4 in the office</h2>
        <p className={P}>
          Take a firm with 20 operatives across five gangs and four people in the office. If every one of them needs a login on a per-user app, that&apos;s 24 users.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm md:text-base border border-border rounded-xl overflow-hidden">
            <thead className="bg-section-alt text-left">
              <tr>
                <th className="p-3 font-bold">Option</th>
                <th className="p-3 font-bold">Users</th>
                <th className="p-3 font-bold">Per month</th>
                <th className="p-3 font-bold">Year one</th>
              </tr>
            </thead>
            <tbody>
              {example.map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  {r.map((c, i) => (
                    <td key={i} className={`p-3 ${i === 0 ? "font-medium" : ""}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={P}>
          From year two, the OpsDeck figure drops to £3,900 a year because the build fee is one-off. Some per-user apps price field users lower than office users, so check — but the principle stands: per-user pricing punishes you for growing your team.
        </p>

        <h2 className={H2}>When the cheaper option is the right one</h2>
        <p className={P}>
          If you&apos;re a two- or three-man firm doing simple, repeatable jobs, a per-user app is probably cheaper and good enough. Three users at £35 is about £105 a month — less than our smallest band, with no build fee. Buy that. You don&apos;t need a platform built around you until you&apos;ve got multiple gangs out on site and an office trying to keep track of them.
        </p>

        <h2 className={H2}>The costs that aren&apos;t on the pricing page</h2>
        <ul className={UL}>
          <li><strong>Setup and onboarding.</strong> Some vendors charge for it; some leave you to do it yourself, which costs you evenings instead.</li>
          <li><strong>Annual contracts.</strong> A monthly price billed annually is a twelve-month commitment.</li>
          <li><strong>Extras.</strong> Fleet tracking, dashcams, extra modules and integrations are often add-ons.</li>
          <li><strong>Training.</strong> Every operative who has to learn a new app is time off the tools. (Ours get a WhatsApp link to their job — there&apos;s nothing to learn.)</li>
          <li><strong>The workaround spreadsheet.</strong> The biggest hidden cost. When software doesn&apos;t fit how your trade works, the bits it can&apos;t do end up back in Excel — and you&apos;re paying for software and still doing the admin.</li>
        </ul>

        <h2 className={H2}>Five questions to ask any supplier before you sign</h2>
        <ul className={UL}>
          <li>What will I pay in total in year one — setup, training, extras, everything?</li>
          <li>What happens to the price when I add five more operatives?</li>
          <li>Is it monthly or annual, and what&apos;s the notice period?</li>
          <li>Who owns my data, and can I take all of it with me if I leave?</li>
          <li>What will I still be doing in a spreadsheet after it&apos;s set up?</li>
        </ul>

        <h2 className={H2}>Where to go from here</h2>
        <p className={P}>
          All our prices are on the <Link href="/pricing" className={A}>pricing page</Link>, and the <Link href="/honest-comparison" className={A}>honest comparison</Link> sets OpsDeck against Jobber, Joblogic, BigChange, simPRO and Commusoft, including when you should pick them instead. If you want to know what the paperwork and chasing are costing you right now, the <a href="https://check.opsdeck.co.uk/" target="_blank" rel="noopener noreferrer" className={A}>3-minute Field Ops Check</a> will put a number on it.
        </p>
        <p className="text-sm text-muted-foreground mt-10">
          Prices for other products are as published or reported in October 2026 and change often — always check the supplier&apos;s own site.
        </p>
      </PostLayout>
    </>
  );
}
