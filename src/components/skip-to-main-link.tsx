/**
 * First focusable control on each page: jumps past header/nav to #main.
 * Visible only when focused (keyboard).
 */
export function SkipToMainLink() {
  return (
    <a href="#main" className="skip-to-main">
      Skip to main content
    </a>
  );
}
