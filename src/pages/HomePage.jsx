import ArticleCard from "../components/ArticleCard";
import CategoryCard from "../components/CategoryCard";
import DailyTipBanner from "../components/DailyTipBanner";
import Hero from "../components/Hero";
import NewsletterSection from "../components/NewsletterSection";
import TrustSection from "../components/TrustSection";

const featuredArticles = [
  {
    title: "7 calming morning habits that make healthy routines easier to keep",
    excerpt:
      "A practical guide to building a gentle morning rhythm that supports focus, energy, and consistency without extreme rules.",
    category: "Daily Routine",
    readTime: "6 min read",
    audience: "Adults & busy families",
    imageClass:
      "bg-gradient-to-br from-emerald-400 via-brand-500 to-teal-700",
  },
  {
    title: "What to eat for steady energy through long school and work days",
    excerpt:
      "Simple meal ideas and snack strategies that help support concentration, mood, and fewer mid-afternoon crashes.",
    category: "Nutrition",
    readTime: "8 min read",
    audience: "Kids, teens & adults",
    imageClass:
      "bg-gradient-to-br from-amber-200 via-lime-200 to-emerald-500",
  },
  {
    title: "Natural ways to support better sleep when your schedule feels off",
    excerpt:
      "Create a wind-down routine with realistic steps, soothing evening habits, and wellness reminders that actually fit real life.",
    category: "Natural Remedies",
    readTime: "7 min read",
    audience: "Adults & seniors",
    imageClass:
      "bg-gradient-to-br from-sky-200 via-cyan-300 to-blue-600",
  },
];

const categories = [
  {
    name: "Daily Routine",
    copy: "Morning habits, evening resets, sleep-friendly rituals, and consistent daily structure.",
    count: "96 articles",
    icon: "DR",
  },
  {
    name: "Health Tips",
    copy: "Fast, useful wellness guidance designed for busy readers who want clarity without overwhelm.",
    count: "124 articles",
    icon: "HT",
  },
  {
    name: "Natural Remedies",
    copy: "Gentle ideas rooted in everyday ingredients, rest, hydration, and supportive habits.",
    count: "71 articles",
    icon: "NR",
  },
  {
    name: "Nutrition",
    copy: "Balanced eating advice, family-friendly meals, hydration tips, and nutrient-focused guides.",
    count: "110 articles",
    icon: "NU",
  },
  {
    name: "Fitness",
    copy: "Approachable movement routines for strength, mobility, recovery, and long-term consistency.",
    count: "82 articles",
    icon: "FT",
  },
  {
    name: "Mental Health",
    copy: "Stress relief, emotional well-being, mindfulness, and calm practices for everyday resilience.",
    count: "67 articles",
    icon: "MH",
  },
  {
    name: "Kids / Adults / Seniors",
    copy: "Stage-specific health ideas so every family member can find guidance that fits.",
    count: "138 articles",
    icon: "AG",
  },
];

const trendingPosts = [
  {
    title: "Low-effort lunch ideas for steadier energy",
    excerpt: "Nutrition",
    category: "Popular now",
    readTime: "5 min",
    audience: "12.4k readers",
    imageClass: "bg-gradient-to-br from-orange-200 via-amber-300 to-lime-500",
  },
  {
    title: "How to reset your sleep schedule after a stressful week",
    excerpt: "Sleep & recovery",
    category: "Editor pick",
    readTime: "9 min",
    audience: "9.8k readers",
    imageClass: "bg-gradient-to-br from-slate-200 via-sky-200 to-blue-500",
  },
  {
    title: "Family wellness habits that are actually easy to stick with",
    excerpt: "Daily routine",
    category: "Trending",
    readTime: "6 min",
    audience: "8.1k readers",
    imageClass: "bg-gradient-to-br from-brand-200 via-emerald-300 to-teal-600",
  },
  {
    title: "Gentle stretches that help reduce afternoon stiffness",
    excerpt: "Fitness",
    category: "Most shared",
    readTime: "4 min",
    audience: "7.4k readers",
    imageClass: "bg-gradient-to-br from-rose-200 via-orange-200 to-yellow-400",
  },
];

function HomePage() {
  return (
    <>
      <Hero />

      <section id="featured-articles" className="py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-label">Featured Articles</span>
              <h2 className="mt-6 section-heading">
                Content-first storytelling designed to help readers keep
                exploring.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Spotlighting timely wellness topics with clean structure, easy
              scanning, and just enough depth to build confidence quickly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.title} article={article} featured />
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-20">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="section-label">Browse by Category</span>
            <h2 className="mt-6 section-heading">
              A structured content hub for routines, remedies, nutrition, and
              wellness at every age.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-label">Trending & Popular</span>
              <h2 className="mt-6 section-heading">
                High-engagement topics readers are returning to right now.
              </h2>
            </div>
            <a
              href="#newsletter"
              className="text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              View all popular posts
            </a>
          </div>

          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {trendingPosts.map((article) => (
              <div
                key={article.title}
                className="min-w-[18rem] max-w-sm flex-1 sm:min-w-[20rem] lg:min-w-0"
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DailyTipBanner />
      <TrustSection />
      <NewsletterSection />
    </>
  );
}

export default HomePage;
