import { ErrorPageChrome } from "@/components/error-page-chrome";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <ErrorPageChrome>
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-5xl text-white md:text-6xl">404</p>
        <h1 className="mt-4 font-serif text-2xl text-white md:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-white/70">
          The link may be broken or the page was removed. You can head back to
          the homepage and continue from there.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="inverse">
            Back to home
          </Button>
          <Button href="/#contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </ErrorPageChrome>
  );
}
