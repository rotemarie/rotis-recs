import type { Metadata } from "next";

import { CategoryGrid } from "@/components/CategoryGrid";
import { getCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Buckets",
  description: "Browse affiliate links and articles by category.",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <section className="site-shell section">
      <p className="eyebrow">Buckets</p>
      <h1 className="page-title">Find The Edit</h1>
      <p className="page-copy">
        Cycling clothes, gear, makeup, travel, and seasonal edits in one place.
      </p>
      <div style={{ marginTop: 30 }}>
        <CategoryGrid categories={categories} />
      </div>
    </section>
  );
}
