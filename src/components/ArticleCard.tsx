import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Article } from "@/lib/types";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link className="article-card" href={`/articles/${article.slug}`}>
      {article.heroImageUrl ? (
        <img src={article.heroImageUrl} alt={article.heroImageAlt || ""} />
      ) : null}
      <div className="article-card__body">
        <div className="pill-row">
          {article.categories.slice(0, 2).map((category) => (
            <span className="pill" key={category.slug}>
              {category.title}
            </span>
          ))}
        </div>
        <h3>{article.title}</h3>
        <p>{article.dek}</p>
        <span className="card-link-meta">
          Open <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
