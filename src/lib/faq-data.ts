export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const faqEntries: readonly FaqEntry[] = [
  {
    id: "who-is-this-for",
    question: "Who is this for?",
    answer:
      "Small businesses and solo operators in Ireland who need a professional site that loads fast, ranks sensibly, and turns visitors into enquiries — without a long agency process.",
  },
  {
    id: "what-do-you-deliver",
    question: "What do you actually deliver?",
    answer:
      "A bespoke Next.js website (not a template), core pages, contact/booking flows as agreed, basic SEO setup, analytics if you want it, and handover so you’re not locked in.",
  },
  {
    id: "about-ten-days",
    question: "What does “under two weeks” mean?",
    answer:
      "For a typical starter scope — signed agreement and your content received — launch is usually roughly 7–10 working days. That’s what “under two weeks” on the homepage refers to. If content or approvals slip, the timeline moves — I’ll flag that early.",
  },
  {
    id: "pricing",
    question: "How does pricing work?",
    answer:
      "Fixed fee for a defined scope. You get the full process and what’s included in my proposal PDF — no surprise invoices for agreed work.",
  },
  {
    id: "what-from-me",
    question: "What do you need from me?",
    answer:
      "Logo/branding if you have it, text for key pages (I can guide structure), photos or stock direction, and timely feedback on previews.",
  },
  {
    id: "copywriting",
    question: "Do you write the copy?",
    answer:
      "I can structure pages and tighten wording, but specialist copywriting isn’t included unless we add it to scope.",
  },
  {
    id: "hosting-domain",
    question: "Hosting and domain?",
    answer:
      "We’ll pick a simple setup (e.g. Vercel + your domain). I’ll explain options in plain language; you keep ownership of accounts where it matters.",
  },
  {
    id: "gdpr-cookies",
    question: "What about GDPR and cookies?",
    answer:
      "We’ll use a sensible cookie/consent approach for analytics and embeds, and keep forms and privacy basics aligned with what you’re actually doing — not legal advice; I’ll recommend a policy template or your solicitor for edge cases.",
  },
  {
    id: "after-launch",
    question: "What happens after launch?",
    answer:
      "You get a short handover. Ongoing changes are either a small maintenance agreement or ad-hoc — we agree upfront.",
  },
  {
    id: "midlands-only",
    question: "Do you only work in the Midlands?",
    answer:
      "Based in the Irish Midlands; I work with clients across Ireland remotely. In-person meetings when it makes sense.",
  },
];
