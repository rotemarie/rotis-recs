import type { Metadata } from "next";

import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles",
  description: "Affiliate articles and curated shopping edits.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <section className="site-shell section">
      <p className="eyebrow">Articles</p>
      <h1 className="page-title">Shopping Edits</h1>
      <p className="page-copy">
        Pin-friendly guides, product lists, and practical roundups.
      </p>
      <div className="article-grid" style={{ marginTop: 30 }}>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>
    </section>
  );
}
