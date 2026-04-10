"use client";

import { Accordion } from "@/components/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import { faqEntries } from "@/lib/faq-data";

const faqAccordionItems = faqEntries.map((entry) => ({
  id: entry.id,
  label: (
    <div className="mt-1 font-serif text-lg md:text-xl">{entry.question}</div>
  ),
  panel: (
    <div className="flex gap-4 pt-2">
      <div
        className="w-1 shrink-0 self-stretch rounded-full bg-emerald-600"
        aria-hidden
      />
      <p className="text-pretty text-sm text-white/70 md:text-base">
        {entry.answer}
      </p>
    </div>
  ),
}));

export const FaqSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered"
          description="Straight answers on scope, timeline, pricing, and what working together looks like."
        />
        <div className="mx-auto mt-12 max-w-4xl md:mt-16">
          <Accordion
            idPrefix="home-faq"
            className="flex flex-col gap-4"
            items={faqAccordionItems}
          />
        </div>
      </div>
    </section>
  );
};
