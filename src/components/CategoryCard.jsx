function CategoryCard({ category }) {
  return (
    <a
      href="#featured-articles"
      className="group surface-card relative block overflow-hidden p-6 hover:-translate-y-1"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-emerald-400 to-sky-400 opacity-0 transition group-hover:opacity-100" />
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-sky-50 text-2xl shadow-sm">
        <span aria-hidden="true">{category.icon}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink transition group-hover:text-brand-700">
        {category.name}
      </h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{category.copy}</p>
      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-500">{category.count}</span>
        <span className="font-semibold text-brand-700">Explore</span>
      </div>
    </a>
  );
}

export default CategoryCard;
