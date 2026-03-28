import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-3 z-10 w-full px-4">
      <div className="container mx-auto flex items-center justify-between gap-3 ">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2 transition hover:opacity-90"
        >
          <Image
            src="/ruramade-logo.svg"
            alt="Ruramade"
            width={36}
            height={36}
            className="size-16 object-contain"
            priority
          />
          <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-sm font-semibold uppercase tracking-wide text-transparent">
            RURAMADE
          </span>
        </a>
        <nav className="flex min-w-0 gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#" className="nav-item">
            Projects
          </a>
          <a href="#" className="nav-item">
            About
          </a>
          <a
            href="#"
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
