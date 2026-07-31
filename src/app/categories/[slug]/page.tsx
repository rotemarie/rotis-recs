import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AffiliateCard } from "@/components/AffiliateCard";
import { ArticleCard } from "@/components/ArticleCard";
import {
  getArticlesByCategory,
  getCategories,
  getCategory,
  getLinksByCategory,
} from "@/lib/content";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [category, articles, links] = await Promise.all([
    getCategory(slug),
    getArticlesByCategory(slug),
    getLinksByCategory(slug),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <>
      <section className="site-shell section">
        <div className="category-hero">
          <div>
            <p className="eyebrow">Bucket</p>
            <h1 className="page-title">{category.title}</h1>
            <p className="page-copy">{category.description}</p>
          </div>
          <div className="category-hero__image">
            {category.imageUrl ? <img src={category.imageUrl} alt={category.imageAlt || ""} /> : null}
          </div>
        </div>
      </section>

      <section className="site-shell section section--tight">
        <div className="grid-header">
          <h2>Articles</h2>
        </div>
        {articles.length ? (
          <div className="article-grid">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state">No articles in this bucket yet.</div>
        )}
      </section>

      <section className="site-shell section section--tight">
        <div className="grid-header">
          <h2>Links</h2>
        </div>
        {links.length ? (
          <div className="link-grid">
            {links.map((link) => (
              <AffiliateCard link={link} key={`${link.merchant}-${link.title}`} />
            ))}
          </div>
        ) : (
          <div className="empty-state">No links in this bucket yet.</div>
        )}
      </section>
    </>
  );
}
