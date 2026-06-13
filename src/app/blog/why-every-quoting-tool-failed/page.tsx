import type { Metadata } from "next";
import PostLayout from "@/components/blog/PostLayout";
import { getPostBySlugOrThrow } from "@/content/posts";

const SLUG = "why-every-quoting-tool-failed";
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

export default function WhyEveryQuotingToolFailedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout
        title={post.title}
        datePublished={post.datePublished}
        author={post.author}
      >
        <p className={P}>The evenings were the problem.</p>
        <p className={P}>
          Monday to Friday I was on site. Doing the work, managing the crew, keeping jobs moving. That is how it has to be when you run a small trades business — the day belongs to the customer. But the admin does not disappear because you are busy. It waits.
        </p>
        <p className={P}>
          So the evenings became the second shift. Quotes to write. Enquiries to answer. Material lists to build. Job schedules to organise. Site visits to plan. I would get home, grab an hour with the kids, and then end up dragged back to the laptop in the kitchen. Weekends too.
        </p>
        <p className={P}>That was not sustainable. Something had to change.</p>

        <h2 className={H2}>The Tools I Tried First</h2>
        <p className={P}>
          The obvious move was to find software that could speed up quoting. That is where the time was going — so that is where I looked first.
        </p>
        <p className={P}>
          I used Tradify for a while. The process of building a quote — adding line items, generating a document, sending it to the customer — was cleaner than pen and paper. But the time saving was minimal. I was still entering everything manually, line by line, job by job. However long it used to take me with a notepad, it now took me roughly the same time with a mouse in my hand.
        </p>
        <p className={P}>
          The fundamental problem with every tool I tried was the same: they were built around simple line-item entry. Add a product. Add a price. Add a quantity. That works for a straightforward trade. It does not work for landscaping and surfacing, where a single job involves multiple material types, variable quantities based on area and depth, machinery decisions, waste management calculations, and labour that changes depending on ground conditions and construction method.
        </p>
        <p className={P}>
          A 50 square metre tarmac drive is not a single line item. It is a calculation. How much base stone is required at what depth? How much tarmac in two layers? How long will it take? Do we need a digger? A grab lorry for the spoil? Every job is a set of variables, and no off-the-shelf tool handled that without collapsing back into a spreadsheet.
        </p>
        <p className={P}>
          So I ended up in spreadsheets. Every trades business owner I have spoken to ends up in spreadsheets eventually. The software promises to simplify things and then hits a wall, and you paper over the gap with Excel.
        </p>

        <h2 className={H2}>The ChatGPT Phase</h2>
        <p className={P}>I started experimenting with AI before I started building anything.</p>
        <p className={P}>
          I uploaded my materials list and pricing into ChatGPT. Then my productivity data — how fast I could lay paving, how many labour days a preparation phase required, the calculations for different construction types. Once that was in, I could describe a job and get a material and labour breakdown back in minutes.
        </p>
        <p className={P}>
          For a 50 square metre tarmac overlay: materials calculated, labour estimated, machinery requirements identified, price assembled. It worked. I was getting through quotes in a fraction of the time.
        </p>
        <p className={P}>
          But then I still had to type them up. There was no system. There was no place for the quote to live, no way to track whether it had been accepted, no way to pull the materials list back out when the job was ready to start. ChatGPT gave me the calculation engine. It did not give me a business.
        </p>
        <p className={P}>That was the gap. And that was when I started building.</p>

        <h2 className={H2}>Learning to Code at Night</h2>
        <p className={P}>
          I had no development background. What I had was a problem I could not solve any other way and enough stubbornness to figure it out.
        </p>
        <p className={P}>
          I started watching videos. Reading documentation. Building small test applications, breaking them, rebuilding them. Doing this in the evenings — the same evenings that had previously been lost to manual quoting. I was not replacing one problem with another. I was building something that would eventually solve it permanently.
        </p>
        <p className={P}>
          The starting point was the quote builder. That was all I wanted: a tool that understood how my trade worked, held my materials and pricing and productivity data, and could produce an accurate quote from a set of measurements. Built around the calculations I had been doing by hand for years, but automated.
        </p>
        <p className={P}>That became the foundation of OpsDeck.</p>

        <h2 className={H2}>What I Actually Built</h2>
        <p className={P}>
          Once the quote builder worked, the rest followed logically — because every addition was something I needed.
        </p>
        <p className={P}>
          When a quote was accepted, I needed to order materials. So I built a way to pull the materials list directly from the quote, add supplier pricing, and track actual spend against the estimate throughout the job. That is how you catch a job going wrong before it is too late.
        </p>
        <p className={P}>
          Enquiries were coming in through my website. They needed to go somewhere. So I connected a form to the dashboard and built an enquiry pipeline — leads coming in, site visits tracked, quotes sent, follow-ups flagged.
        </p>
        <p className={P}>
          I needed to know my conversion rate. So I built a sales dashboard. I needed to know which jobs were most profitable. So I built reporting. I needed to manage operative allocation. So I built job scheduling.
        </p>
        <p className={P}>
          None of it was planned as a product. All of it was planned as a solution to something I was doing badly or not doing at all. That is the only reason it works — every feature exists because I needed it in a live business, not because a product manager thought it should exist.
        </p>
        <p className={P}>
          Infascape, my landscaping and surfacing company, ran on OpsDeck from the beginning. It still does. The platform handles every enquiry, every quote, every job, every invoice. Infascape has been at full capacity through 2026. That is the proof of concept.
        </p>

        <h2 className={H2}>Why This Is Different</h2>
        <p className={P}>
          When I started speaking to other trades business owners, I heard the same things I had been saying two years earlier.
        </p>
        <p className={P}>
          Quoting at night. Pieces of paper in the van. Job lists on the office wall. Files everywhere. Human error slipping in — a material overordered here, a quote underpriced there, a follow-up missed. Ops managers spending their days buried in admin instead of running the operation.
        </p>
        <p className={P}>
          The time cost is obvious. The money cost is less visible but just as real. Misquoting a job because the calculation was done quickly. Overordering because there was no system linking the quote to the order. Missing a follow-up because it was written on a Post-it that fell behind the desk.
        </p>
        <p className={P}>
          OpsDeck fixes the structure. The quotes calculate correctly because the logic is built in. The materials list comes from the quote. The follow-ups are flagged automatically. The reporting shows you where the money is going.
        </p>
        <p className={P}>
          But the bigger difference is that it runs the way your business runs — not the way a generic software platform assumes you run. Every customer goes through a discovery process. We map their existing workflow. We configure the platform around their trade, their pricing, their way of operating. What matters to a groundworks company is different from what matters to a roofing contractor. The dashboard reflects that.
        </p>

        <h2 className={H2}>The Honest Version</h2>
        <p className={P}>
          This took 500 hours. Evenings and weekends, for the best part of a year, while running Infascape at full capacity. I am not a trained developer. I made every mistake available and fixed most of them.
        </p>
        <p className={P}>
          I am also not finished. The platform is live, it runs a real business, it has paying customers — but software is never finished. There is always more to build.
        </p>
        <p className={P}>
          What I know is that the evenings are different now. The quotes that used to take an hour take minutes. The admin that used to follow me home stays in the system. I am not dragged back to the laptop after the kids are in bed.
        </p>
        <p className={P}>That was the point. Everything else followed from it.</p>

        {/* Closing italic sign-off */}
        <div className="border-t border-border mt-12 pt-8 text-sm italic text-muted-foreground space-y-3">
          <p>
            Rob France is the founder of OpsDeck Ltd and owner of Infascape Ltd, a Sheffield-based landscaping and surfacing company. OpsDeck is the platform he built to run Infascape — now available to other trades businesses.
          </p>
          <p>
            Find out more at{" "}
            <a
              href="https://opsdeck.co.uk"
              className="text-primary hover:underline not-italic font-medium"
            >
              opsdeck.co.uk
            </a>{" "}
            or email{" "}
            <a
              href="mailto:rob@opsdeck.co.uk"
              className="text-primary hover:underline not-italic font-medium"
            >
              rob@opsdeck.co.uk
            </a>
          </p>
        </div>
      </PostLayout>
    </>
  );
}
