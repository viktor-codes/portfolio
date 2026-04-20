/** Public starter package — keep in sync with `public/ruramade-proposal.pdf`. */

export const STARTER_OFFER_PDF_HREF = "/Starter-Offer-Viktor-Rura.pdf";
export const STARTER_OFFER_PDF_FILENAME = "Starter-Offer-Viktor-Rura.pdf";

export const STARTER_OFFER_PRICE_EUR = 1500;
export const STARTER_OFFER_DEPOSIT_EUR = 750;

export const starterOfferIncludedItems: readonly string[] = [
  "One responsive page — up to 6 sections (hero, about, services, testimonials, FAQ, contact) agreed in writing",
  "Contact form with basic spam protection + email notifications direct to your inbox",
  "Auto-reply confirmation to whoever submits the form",
  "Submissions stored in a database with a password-protected list view — enquiry backup, not a CMS",
  "Privacy Policy page (template text — you confirm it suits your business)",
  "Basic SEO: title tag, meta description, social preview image",
  "Copywriting: with deep understanding of your business and target audience",
  "Analytics: GA4 (free) or agreed alternative; paid tools confirmed in writing first",
  "Deploy + HTTPS + ~30 min handover call",
  "One revision round — all feedback in one email, one implementation pass",
];

export const starterOfferExcludedItems: readonly string[] = [
  "CMS / blog",
  "E-commerce",
  "Booking engine",
  "Multi-language",
  "Logo / brand design",
  "Photography",
  "Ongoing content updates (monthly retainer available — ask)",
];

export const starterOfferClientProvides: readonly string[] = [
  "All copy, logo (SVG or high-res PNG), brand colours (hex), images",
  "One approver available within ~2 business days",
  "Domain in your name, DNS-ready for go-live",
];

export const starterOfferNextSteps: readonly {
  title: string;
  detail: string;
}[] = [
  {
    title: "15-minute discovery call",
    detail: "Quick fit check and questions.",
  },
  { title: "Full brief + terms", detail: "Written scope for signature." },
  { title: "Deposit invoice", detail: "Sent via SEPA (50% to start)." },
  { title: "Build begins", detail: "After content + deposit are received." },
];
