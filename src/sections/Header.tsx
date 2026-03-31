import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full bg-gray-900/75 py-2 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <a
          href="/#top"
          className="flex shrink-0 items-center gap-2 transition hover:opacity-90"
        >
          <Image
            src="/newlogo1.svg"
            alt="Ruramade"
            width={36}
            height={36}
            className="size-12 shrink-0 object-contain"
            priority
          />
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-serif text-lg uppercase tracking-wide text-transparent">
            RURAMADE
          </span>
        </a>
        <nav className="hidden min-w-0 gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur md:flex">
          <a href="/#projects" className="nav-item">
            Projects
          </a>
          <a href="/#about" className="nav-item">
            About
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
          className="shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-white/70 md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
};
