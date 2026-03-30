import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

interface StatItem {
  value: string;
  text: string;
  sourceHref: string;
  sourceLabel: string;
}

interface MythItem {
  myth: string;
  truth: string;
}

const stats: StatItem[] = [
  {
    value: "75%",
    text: "of users judge a business\u2019 credibility based on its website.",
    sourceHref: "https://credibility.stanford.edu/guidelines/index.html",
    sourceLabel: "Stanford Web Credibility Project",
  },
  {
    value: "88%",
    text: "won\u2019t return after a bad mobile experience.",
    sourceHref:
      "https://montereypremier.com/wp-content/uploads/2019/10/201110_why_web_performance_matters.pdf",
    sourceLabel: "Why Web Performance Matters (PDF)",
  },
  {
    value: "10%",
    text: "of leads come from social media — your website does the rest.",
    sourceHref: "https://www.hubspot.com/marketing-statistics",
    sourceLabel: "HubSpot marketing statistics",
  },
];

const myths: MythItem[] = [
  {
    myth: "We have Instagram, we don't need a website.",
    truth:
      "Social media is rented land. One algorithm change and your visibility drops to zero. Your website is the only digital asset you truly own.",
  },
  {
    myth: "Our customers find us by word of mouth.",
    truth:
      "They do. Then they Google you. If nothing shows up — or what shows up looks outdated — that warm referral goes cold.",
  },
  {
    myth: "We'll build a proper site when we grow.",
    truth:
      "The website is how you grow. Credibility isn't earned before you invest in presence — it's built because you did.",
  },
];

const differentiators = [
  {
    title: "No templates",
    text: "Every site is built from scratch in Next.js — fast, custom, yours.",
  },
  {
    title: "Fixed price. Fixed deadline",
    text: "You know what you're getting and when. No surprises, no scope creep.",
  },
  {
    title: "Built to convert",
    text: "Not just beautiful — structured to turn visitors into enquiries.",
  },
  {
    title: "One person. Full accountability",
    text: "You talk to the person building your site. Always.",
  },
] as const;

export const ManifestoSection = () => {
  return (
    <section id="manifesto" className="scroll-mt-24 py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="The Ruramade Manifesto"
          title="Your business exists. Does the internet know that?"
          description="A website isn't a luxury. It's the first conversation you have with someone who's already looking for you."
        />

        <div className="mx-auto mt-10 max-w-3xl md:mt-16">
          <p className="text-white/70 md:text-lg lg:text-xl">
            Every day, potential customers search for what you offer. They find
            your competitor — not because they\u2019re better, but because they
            showed up.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {stats.map((item) => (
            <Card key={item.value} className="p-6 md:p-8">
              <div className="font-serif text-4xl text-white md:text-5xl">
                {item.value}
              </div>
              <p className="mt-3 text-sm text-white/60 md:text-base">
                {item.text}
              </p>
              <div className="mt-4">
                <a
                  href={item.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-300 underline underline-offset-4"
                >
                  Source: {item.sourceLabel}
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl md:mt-14">
          <h3 className="text-center font-serif text-2xl md:text-3xl">
            Myths vs Truth
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            {myths.map((item) => (
              <Card key={item.myth} className="p-0">
                <details className="group">
                  <summary className="cursor-pointer list-none px-6 py-5 md:px-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                          Myth
                        </div>
                        <div className="mt-1 font-serif text-lg md:text-xl">
                          “{item.myth}”
                        </div>
                      </div>
                      <div
                        className="mt-1 inline-flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70"
                        aria-hidden
                      >
                        +
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 md:px-8">
                    <div className="border-t border-white/10 pt-5">
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                        Truth
                      </div>
                      <p className="mt-2 text-sm text-white/70 md:text-base">
                        {item.truth}
                      </p>
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl md:mt-14">
          <Card className="p-6 md:p-10">
            <blockquote className="text-balance text-center font-serif text-2xl md:text-3xl">
              “A bad website is worse than no website. A great one works for you
              while you sleep.”
            </blockquote>
            <div className="mt-4 text-center text-sm font-semibold text-white/60 md:text-base">
              — Viktor Rura, Founder of Ruramade
            </div>
          </Card>
        </div>

        <div className="mx-auto mt-10 max-w-4xl md:mt-14">
          <h3 className="text-center font-serif text-2xl md:text-3xl">
            How Ruramade is different
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <Card key={item.title} className="p-6 md:p-8">
                <div className="font-serif text-xl md:text-2xl">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-white/60 md:text-base">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href="#contact"
            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-white bg-white px-6 font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start your project →
          </a>
        </div>
      </div>
    </section>
  );
};

