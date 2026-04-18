function ArticleCard({ article, featured = false }) {
  return (
    <article
      className={`group surface-card overflow-hidden ${
        featured ? "h-full" : ""
      } hover:-translate-y-1`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "h-56 sm:h-64" : "h-52"
        } ${article.imageClass}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.42),transparent_30%),linear-gradient(180deg,transparent,rgba(15,23,42,0.2))]" />
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm">
          {article.category}
        </div>
        <div className="absolute bottom-5 left-5 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {article.readTime}
        </div>
        <div className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-white/30 blur-2xl transition duration-500 group-hover:scale-110" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-ink transition group-hover:text-brand-700">
          <a href="#newsletter">{article.title}</a>
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">
            {article.audience}
          </span>
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-transform group-hover:translate-x-1"
          >
            Read article
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
