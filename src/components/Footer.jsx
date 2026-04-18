const footerColumns = [
  {
    title: "About",
    links: ["Our mission", "Editorial approach", "Reader promise"],
  },
  {
    title: "Categories",
    links: ["Nutrition", "Natural Remedies", "Fitness", "Mental Health"],
  },
  {
    title: "Quick Links",
    links: ["Featured articles", "Trending topics", "Newsletter"],
  },
  {
    title: "Legal Pages",
    links: ["Privacy Policy", "Terms of Service", "Disclaimer"],
  },
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <path d="M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm8 1.5H8A3 3 0 0 0 5 8v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A4.8 4.8 0 1 1 7.2 13 4.81 4.81 0 0 1 12 8.2Zm0 1.5A3.3 3.3 0 1 0 15.3 13 3.3 3.3 0 0 0 12 9.7Zm4.9-2.55a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <path d="M5 4.5h3.32l4.16 5.56 4.8-5.56H20l-6.22 7.2L20.5 20h-3.32l-4.5-6.02L7.5 20H4.8l6.5-7.53L5 4.5Z" />
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <path d="M20.5 8.8a3.1 3.1 0 0 0-2.18-2.19C16.4 6 12 6 12 6s-4.4 0-6.32.61A3.1 3.1 0 0 0 3.5 8.8 32.4 32.4 0 0 0 3 12a32.4 32.4 0 0 0 .5 3.2 3.1 3.1 0 0 0 2.18 2.19C7.6 18 12 18 12 18s4.4 0 6.32-.61a3.1 3.1 0 0 0 2.18-2.19A32.4 32.4 0 0 0 21 12a32.4 32.4 0 0 0-.5-3.2ZM10.25 15.12V8.88L15.5 12l-5.25 3.12Z" />
    ),
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80 py-16 backdrop-blur">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_repeat(4,minmax(0,1fr))]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-lg font-semibold text-ink"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-400 text-base font-bold text-white shadow-soft">
                HV
              </span>
              <span className="font-display text-xl tracking-tight">
                HealthyVibesHub
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">
              Practical wellness articles, calm routines, and approachable health
              guidance for every age group.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-brand-200 hover:text-brand-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-semibold text-ink">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-brand-700"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          (c) 2026 HealthyVibesHub. Wellness content designed for clarity,
          curiosity, and better daily habits.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
