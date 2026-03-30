import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-3 z-10 w-full px-4">
      <div className="container mx-auto flex items-center justify-between gap-3">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 transition hover:opacity-90"
        >
          <Image
            src="/C91F3063-8608-4589-8A60-A0968F692D31.png"
            alt="Ruramade"
            width={36}
            height={36}
            className="size-16 shrink-0 object-contain"
            priority
          />
          <span className="bg-gradient-to-r from-sky-600 to-emerald-300 bg-clip-text text-sm font-semibold uppercase tracking-wide text-transparent">
            RURAMADE
          </span>
        </a>
        <nav className="hidden min-w-0 gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur md:flex">
          <a href="#projects" className="nav-item">
            Projects
          </a>
          <a href="#about" className="nav-item">
            About
          </a>
          <a
            href="#contact"
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-900 transition duration-300 hover:bg-white/70 md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
};
