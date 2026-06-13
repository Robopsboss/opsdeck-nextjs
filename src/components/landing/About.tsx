import Link from "next/link";
import { ArrowRight, User } from "lucide-react";

const About = () => (
  <section className="bg-section-alt">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built by a tradesman, for tradespeople.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I&apos;m Rob. I run Infascape, a landscaping company in Sheffield. I built OpsDeck because I needed it myself. I don&apos;t just sell it — I use it every day in my own business and I partner directly with every customer to make sure it works for them. If you&apos;re a tradesman who wants to look more professional without the faff, this was made for you.
          </p>
          <Link
            href="/author/rob-france"
            className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold text-base mt-5"
          >
            Meet the founder
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0">
          <User className="w-16 h-16 text-muted-foreground/40" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
