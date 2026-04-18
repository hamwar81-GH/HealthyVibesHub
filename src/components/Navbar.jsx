import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Blog", href: "#featured-articles" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#why-trust-us" },
  { label: "Contact", href: "#newsletter" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="container-shell">
        <nav className="flex items-center justify-between py-4">
          <a
            href="#home"
            className="group inline-flex items-center gap-3 text-lg font-semibold text-ink"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-400 text-base font-bold text-white shadow-soft">
              HV
            </span>
            <span className="font-display text-xl tracking-tight transition-transform group-hover:translate-x-0.5">
              HealthyVibesHub
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#featured-articles"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Explore Articles
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-brand-200 hover:text-brand-700 md:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="surface-card flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#featured-articles"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Explore Articles
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
