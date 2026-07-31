import Link from "next/link";

import type { Category } from "@/lib/types";

type CategoryGridProps = {
  categories: Category[];
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <Link className="category-tile" href={`/categories/${category.slug}`} key={category.slug}>
          {category.imageUrl ? <img src={category.imageUrl} alt={category.imageAlt || ""} /> : null}
          <div
            className="category-tile__overlay"
            style={{
              borderTop: `4px solid ${category.color || "var(--teal)"}`,
            }}
          >
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
