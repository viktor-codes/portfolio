import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full bg-gray-900/75 py-2 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <a href="/#top" className="shrink-0 transition hover:opacity-90">
          <Image
            src="/ruramade-logo.svg"
            alt="RuraMade"
            width={180}
            height={100}
          />
        </a>
        <nav className="hidden gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur md:flex">
          <a href="/#projects" className="nav-item">
            Projects
          </a>
          <a href="/#about" className="nav-item">
            About
          </a>
          <a href="/#faq" className="nav-item">
            FAQ
          </a>
          <a
            href="/#contact"
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
        <a
          href="/#contact"
          className="shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-900 transition hover:bg-white/70 md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
};
