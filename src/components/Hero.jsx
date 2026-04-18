function Hero() {
  return (
    <section id="home" className="pt-10 sm:pt-14 lg:pt-20">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span className="section-label">Daily wellness made practical</span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Trusted health guidance for everyday routines, every age, every
              stage of life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              HealthyVibesHub turns research-backed wellness topics into clear,
              approachable articles on nutrition, remedies, mental well-being,
              and sustainable daily habits.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#featured-articles"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Explore Articles
              </a>
              <a
                href="#why-trust-us"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:border-brand-200 hover:text-brand-700"
              >
                Why readers trust us
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["450+", "Evidence-led articles"],
                ["8 min", "Average reading time"],
                ["All ages", "Kids to seniors"],
              ].map(([value, label]) => (
                <div key={label} className="surface-card p-5">
                  <div className="font-display text-2xl font-semibold text-ink">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up lg:pl-8">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-brand-200/50 blur-3xl sm:block" />
            <div className="absolute -right-8 bottom-8 hidden h-32 w-32 rounded-full bg-sky-200/50 blur-3xl sm:block" />

            <div className="surface-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/70 via-transparent to-sky-50/80" />
              <div className="relative">
                <div className="flex items-center justify-between rounded-3xl border border-white/80 bg-white/90 p-4 shadow-sm">
                  <div>
                    <div className="text-sm font-medium text-slate-500">
                      Weekly reader focus
                    </div>
                    <div className="mt-1 font-display text-2xl font-semibold text-ink">
                      Better sleep habits
                    </div>
                  </div>
                  <div className="rounded-2xl bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
                    Trending
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-ink p-6 text-white shadow-soft">
                    <div className="text-sm text-white/70">This week</div>
                    <div className="mt-8 text-4xl font-semibold">12k</div>
                    <div className="mt-1 text-sm text-white/75">
                      article reads across routines and recovery topics
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">
                        Top categories
                      </span>
                      <span className="h-2 w-2 rounded-full bg-brand-500" />
                    </div>
                    <div className="mt-5 space-y-4">
                      {[
                        ["Nutrition", "86%"],
                        ["Mental Health", "72%"],
                        ["Daily Routine", "64%"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="font-medium text-slate-700">
                              {label}
                            </span>
                            <span className="text-slate-500">{value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-100">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
                              style={{ width: value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-slate-500">
                        Recommended reading path
                      </div>
                      <div className="mt-1 font-display text-xl font-semibold text-ink">
                        Build a calmer, healthier morning
                      </div>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                      3 article series
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {["Hydrate smarter", "Move gently", "Eat with energy"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`rounded-2xl border p-4 ${
                            index === 0
                              ? "border-brand-100 bg-brand-50 text-brand-800"
                              : "border-slate-200 bg-white text-slate-700"
                          }`}
                        >
                          <div className="text-xs font-semibold uppercase tracking-[0.24em]">
                            Step {index + 1}
                          </div>
                          <div className="mt-2 font-medium">{item}</div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-brand-300/50 to-sky-300/50 blur-2xl" />
            </div>

            <div className="absolute -right-3 top-8 hidden animate-float rounded-3xl border border-white/80 bg-white/95 p-4 shadow-soft xl:block">
              <div className="text-sm font-medium text-slate-500">
                Today&apos;s boost
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-ink">
                Add a 10-minute walk
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
