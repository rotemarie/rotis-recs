import { ArrowRight, FolderOpen, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

import { ArticleCard } from "@/components/ArticleCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { getArticles, getCategories, getSiteSettings } from "@/lib/content";

export default async function HomePage() {
  const [settings, categories, articles] = await Promise.all([
    getSiteSettings(),
    getCategories(),
    getArticles(),
  ]);
  const featuredArticle = articles[0];

  return (
    <>
      <section className="site-shell home-hero">
        <div>
          <p className="eyebrow">Curated affiliate edits</p>
          <h1 className="page-title">{settings.siteName}</h1>
          <p className="page-copy">{settings.intro}</p>
          <div className="home-hero__actions">
            <Link className="button" href="/links">
              <LinkIcon size={18} aria-hidden="true" />
              Browse Links
            </Link>
            <Link className="button button--secondary" href="/categories">
              <FolderOpen size={18} aria-hidden="true" />
              Explore Buckets
            </Link>
          </div>
        </div>

        {featuredArticle ? (
          <Link className="feature-media" href={`/articles/${featuredArticle.slug}`}>
            {featuredArticle.heroImageUrl ? (
              <img
                src={featuredArticle.heroImageUrl}
                alt={featuredArticle.heroImageAlt || ""}
              />
            ) : null}
            <div className="feature-media__label">
              <strong>{featuredArticle.title}</strong>
              <span>
                Read <ArrowRight size={15} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ) : null}
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="grid-header">
            <h2>Buckets</h2>
            <Link href="/categories">
              All Buckets <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="site-shell">
          <div className="grid-header">
            <h2>Latest Articles</h2>
          </div>
          <div className="article-grid">
            {articles.slice(0, 6).map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
