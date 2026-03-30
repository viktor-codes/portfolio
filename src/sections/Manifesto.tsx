"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CogIcon from "@/assets/icons/cog.svg";
import StarIcon from "@/assets/icons/star.svg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { useMemo, useState } from "react";

interface StatItem {
  value: string;
  text: string;
  sourceHref: string;
  sourceLabel: string;
  iconType: React.ElementType;
}

interface MythItem {
  myth: string;
  truth: string;
}

const stats: StatItem[] = [
  {
    value: "75%",
    text: "of users judge a business's credibility based on its website.",
    sourceHref: "https://credibility.stanford.edu/guidelines/index.html",
    sourceLabel: "Stanford Web Credibility Project",
    iconType: StarIcon,
  },
  {
    value: "88%",
    text: "of online consumers are less likely to return to a site after a bad experience",
    sourceHref:
      "https://montereypremier.com/wp-content/uploads/2019/10/201110_why_web_performance_matters.pdf",
    sourceLabel: "Why Web Performance Matters (PDF)",
    iconType: CogIcon,
  },
  {
    value: "10%",
    text: "of leads come from social media — your website does the rest.",
    sourceHref: "https://www.hubspot.com/marketing-statistics",
    sourceLabel: "HubSpot marketing statistics",
    iconType: ArrowUpRightIcon,
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

const manifestoIntroParagraphs = [
  "Every day, potential customers search for what you offer. They find your competitor — not because they're better, but because they showed up.",
  "A website isn't a luxury. It's the first conversation you have with someone who's already looking for you.",
] as const;

export const ManifestoSection = () => {
  const [openMyth, setOpenMyth] = useState<string | null>(null);
  const accordionId = useMemo(() => "manifesto-myths", []);

  return (
    <section id="manifesto" className="scroll-mt-24 py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Manifesto" title="" description="" />
        <h2 className="mt-6 text-balance text-center font-serif text-3xl md:text-5xl">
          Your business exists.
          <br />
          Does the internet know that?
        </h2>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-6 md:mt-16">
          {manifestoIntroParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-pretty text-center text-white/70 md:text-lg lg:text-start lg:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {stats.map((item) => (
            <Card
              key={item.value}
              className="flex flex-col justify-between p-6 md:p-8"
            >
              <div className="mt-4 font-serif text-4xl text-white md:text-5xl">
                {item.value}
              </div>
              <p className="mt-3 text-pretty text-sm text-white/60 md:text-base">
                {item.text}
              </p>
              <div className="mt-4">
                <a
                  href={item.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-300 underline underline-offset-4"
                  aria-label={`Source: ${item.sourceLabel}`}
                >
                  Source
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl md:mt-14">
          <h3 className="text-start font-serif text-2xl md:text-3xl">
            Things we hear.
            <br />
            <span className="text-emerald-600">Things we need to address.</span>
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            {myths.map((item, index) => {
              const isOpen = openMyth === item.myth;
              return (
                <div key={item.myth} className="p-0">
                  <button
                    type="button"
                    className="w-full cursor-pointer py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                    aria-expanded={isOpen}
                    aria-controls={`${accordionId}-panel-${index}`}
                    id={`${accordionId}-trigger-${index}`}
                    onClick={() =>
                      setOpenMyth((v) => (v === item.myth ? null : item.myth))
                    }
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="mt-1 font-serif text-lg md:text-xl">
                          “{item.myth}”
                        </div>
                      </div>
                      <div
                        className="mt-1 inline-flex size-8 flex-shrink-0 items-center justify-center text-white/70"
                        aria-hidden
                      >
                        <span
                          className={`inline-flex size-8 select-none items-center justify-center text-2xl font-light leading-none transition-transform duration-200 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </button>

                  {isOpen ? (
                    <div
                      id={`${accordionId}-panel-${index}`}
                      role="region"
                      aria-labelledby={`${accordionId}-trigger-${index}`}
                      className="pb-6"
                    >
                      <div className="flex gap-4 pt-2">
                        <div
                          className="w-1 shrink-0 self-stretch rounded-full bg-emerald-600"
                          aria-hidden
                        />
                        <p className="text-sm text-white/70 md:text-base">
                          {item.truth}
                        </p>
                      </div>
                    </div>
                  ) : null}

                  <hr className="border-white/10" />
                </div>
              );
            })}
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
          <Card className="mt-6 p-6 md:p-10">
            <ul className="flex flex-col gap-4">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckIcon className="mt-0.5 size-5 flex-shrink-0 text-emerald-300 md:size-6" />
                  <div>
                    <div className="font-serif text-lg md:text-xl">
                      {item.title}
                    </div>
                    <p className="mt-1 text-sm text-white/60 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
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
