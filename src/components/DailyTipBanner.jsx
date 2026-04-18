function DailyTipBanner() {
  return (
    <section className="py-8">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-r from-brand-500 via-emerald-500 to-sky-500 px-6 py-8 text-white shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

          <div className="relative max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
              Daily Health Tip
            </div>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Start meals with fiber first to stay fuller longer and support
              steadier energy through the day.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Small, repeatable habits tend to outperform dramatic resets.
              Explore the full guide for simple ways to make the tip stick.
            </p>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <a
              href="#featured-articles"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-sm hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyTipBanner;
