import { BookOpen, ChevronDown, Grid2X2, Link as LinkIcon, Sparkles } from "lucide-react";
import Link from "next/link";

import type { Category } from "@/lib/types";

type HeaderProps = {
  siteName: string;
  categories: Category[];
};

export function Header({ siteName, categories }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link className="brand" href="/">
          <span className="brand__mark" aria-hidden="true">
            <Sparkles size={18} />
          </span>
          <span>{siteName}</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/links">
            <LinkIcon size={17} aria-hidden="true" />
            <span>Links</span>
          </Link>
          <Link href="/articles">
            <BookOpen size={17} aria-hidden="true" />
            <span>Articles</span>
          </Link>
          <Link href="/categories">
            <Grid2X2 size={17} aria-hidden="true" />
            <span>Buckets</span>
          </Link>
          <details>
            <summary>
              <Grid2X2 size={17} aria-hidden="true" />
              <span className="nav__optional">Browse</span>
              <ChevronDown size={15} aria-hidden="true" />
            </summary>
            <div className="nav__menu">
              {categories.slice(0, 8).map((category) => (
                <Link href={`/categories/${category.slug}`} key={category.slug}>
                  <span>{category.title}</span>
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
