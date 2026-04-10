/**
 * Contact form: success panel, illustration, and presence transitions.
 * Edit numbers here to tune how the UI reveals — no need to touch ContactForm.tsx.
 *
 * Dev preview (thank-you state without submitting): open
 *   http://localhost:3000/?contactSuccess=1#contact
 * (ignored in production builds.)
 */
export const CONTACT_FORM_BUTTON_CELEBRATION_MS = 520;

export const CONTACT_FORM_SUCCESS_ILLUSTRATION_SRC = "/handshake.png";

/**
 * Handshake asset size: `wrapperMaxWidthClass` + `aspect-square` + `object-contain`
 * on the <img>. Change max-w here to resize the graphic.
 */
export const CONTACT_FORM_SUCCESS_ILLUSTRATION_LAYOUT = {
  /** Hint for layout / a11y; does not set on-screen size (CSS box does). */
  imgWidth: 600,
  imgHeight: 600,
  wrapperMaxWidthClass: "max-w-[11rem]",
} as const;

/** Outer success card (replaces the form). */
export const contactFormSuccessPanel = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { type: "spring" as const, stiffness: 380, damping: 32 },
};

/**
 * Handshake — large-amplitude entrance: starts small/low/tilted, then springs in
 * with strong overshoot (low damping on scale & rotate).
 */
export const contactFormSuccessIllustration = {
  initial: { opacity: 0, scale: 0.52, y: 48, rotate: -22 },
  animate: { opacity: 1, scale: 1, y: 0, rotate: 0 },
  transition: {
    opacity: { duration: 0.22, delay: 0.04, ease: [0.22, 1, 0.36, 1] as const },
    scale: {
      type: "spring" as const,
      stiffness: 460,
      damping: 7.5,
      mass: 1.05,
      delay: 0.06,
    },
    y: {
      type: "spring" as const,
      stiffness: 320,
      damping: 10,
      mass: 1.1,
      delay: 0.06,
    },
    rotate: {
      type: "spring" as const,
      stiffness: 220,
      damping: 6.5,
      mass: 0.85,
      delay: 0.08,
    },
  },
};

/** Form block when swapping with the success panel. */
export const contactFormFieldsPresence = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.24, ease: [0.4, 0, 0.2, 1] as const },
};

/** Submit button label cross-fade (idle / loading / Sent!). */
export const contactFormSubmitLabelPresence = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transitionDefault: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
  transitionSuccessSpring: {
    type: "spring" as const,
    stiffness: 480,
    damping: 28,
  },
};
