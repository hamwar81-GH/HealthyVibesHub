function NewsletterSection() {
  return (
    <section id="newsletter" className="py-20">
      <div className="container-shell">
        <div className="surface-card mx-auto max-w-4xl overflow-hidden p-8 text-center sm:p-12">
          <span className="section-label">Wellness in your inbox</span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Join readers building healthier habits one practical article at a
            time.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Weekly highlights, research-backed health ideas, and calm,
            no-panic guidance you can actually use. No spam. Just useful
            wellness content.
          </p>

          <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-full border border-slate-200 bg-slate-50 px-5 text-base text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)]"
            />
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-full bg-ink px-7 text-base font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-500">
            Trusted by families, busy professionals, and wellness-minded readers
            looking for clear guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
