import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";

import type { AffiliateLink } from "@/lib/types";

type AffiliateCardProps = {
  link: AffiliateLink;
  compact?: boolean;
};

export function AffiliateCard({ link, compact = false }: AffiliateCardProps) {
  return (
    <article className="affiliate-card">
      <div className="affiliate-card__image">
        {link.imageUrl ? <img src={link.imageUrl} alt={link.imageAlt || ""} /> : null}
      </div>
      <div className="affiliate-card__body">
        <div className="affiliate-card__topline">
          <span>{link.merchant}</span>
          {link.isFavorite ? (
            <span className="favorite">
              <Star size={14} aria-hidden="true" />
              Pick
            </span>
          ) : null}
        </div>
        <h3>{link.title}</h3>
        {!compact ? <p>{link.description}</p> : null}
        <div className="affiliate-card__footer">
          {link.priceLabel ? <span className="price-label">{link.priceLabel}</span> : null}
          <a
            className="shop-link"
            href={link.href}
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
          >
            Shop <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
        {link.couponCode ? <p>Code: {link.couponCode}</p> : null}
        <Link className="pill" href={`/categories/${link.category.slug}`}>
          {link.category.title}
        </Link>
      </div>
    </article>
  );
}
