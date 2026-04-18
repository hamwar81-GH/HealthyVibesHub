const trustPoints = [
  "Research-based content translated into practical takeaways.",
  "Clear, easy-to-understand guides for kids, adults, and seniors.",
  "Natural, safety-conscious tips designed for everyday life.",
];

function TrustSection() {
  return (
    <section id="why-trust-us" className="py-20">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card p-8 sm:p-10">
            <span className="section-label">Why Trust Us</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Wellness advice should feel clear, calm, and grounded in real
              evidence.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We design content for readability first, so healthy choices feel
              more approachable and less overwhelming from the first visit.
            </p>
          </div>

          <div className="surface-card p-8 sm:p-10">
            <div className="space-y-5">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50/80 p-5"
                >
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>
                  <p className="text-base leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
