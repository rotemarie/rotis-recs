import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

import { AffiliateCard } from "@/components/AffiliateCard";
import { getArticle, getArticles, getSiteSettings } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const sectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.imageUrl) {
        return null;
      }

      return (
        <figure className="portable-image">
          <img src={value.imageUrl} alt={value.imageAlt || ""} />
          {value.imageAlt ? <figcaption>{value.imageAlt}</figcaption> : null}
        </figure>
      );
    },
  },
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.dek,
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.dek,
      images: article.heroImageUrl ? [article.heroImageUrl] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const [article, settings] = await Promise.all([getArticle(slug), getSiteSettings()]);

  if (!article) {
    notFound();
  }

  const published = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.publishedAt));

  return (
    <article>
      <section className="site-shell section">
        <div className="pill-row">
          {article.categories.map((category) => (
            <Link className="pill" href={`/categories/${category.slug}`} key={category.slug}>
              {category.title}
            </Link>
          ))}
        </div>
        <h1 className="article-title" style={{ marginTop: 16 }}>
          {article.title}
        </h1>
        <p className="page-copy">{article.dek}</p>
        <div className="article-meta">
          <span>{published}</span>
          <span>{settings.affiliateDisclosure}</span>
        </div>
        {article.heroImageUrl ? (
          <div className="article-hero">
            <img src={article.heroImageUrl} alt={article.heroImageAlt || ""} />
          </div>
        ) : null}
      </section>

      <section className="site-shell article-page">
        <div className="article-body">
          {article.body?.length ? (
            <PortableText value={article.body} components={portableTextComponents} />
          ) : (
            <p>
              Start with the pieces that change comfort, confidence, and daily
              usefulness first. The picks below are grouped so each section can
              stand on its own.
            </p>
          )}

          {article.linkSections.map((section) => (
            <section className="link-section" id={sectionId(section.title)} key={section.title}>
              <h2>{section.title}</h2>
              {section.summary ? (
                <p className="link-section__summary">{section.summary}</p>
              ) : null}
              <div className="link-grid">
                {section.links.map((link) => (
                  <AffiliateCard link={link} key={`${section.title}-${link.title}`} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="sidebar">
          <div className="sidebar-panel">
            <h2>In This Edit</h2>
            <div className="pill-row">
              {article.linkSections.map((section) => (
                <a className="pill" href={`#${sectionId(section.title)}`} key={section.title}>
                  {section.title}
                </a>
              ))}
            </div>
          </div>
          <div className="sidebar-panel">
            <h3>Pin URL</h3>
            <p>
              Share this page from Pinterest or social posts:
              {" "}
              <strong>/articles/{article.slug}</strong>
            </p>
          </div>
        </aside>
      </section>
    </article>
  );
}
