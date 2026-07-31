import type { Metadata } from "next";

import { LinkDirectory } from "@/components/LinkDirectory";
import { getCategories, getLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Links",
  description: "Search and browse curated affiliate links.",
};

export default async function LinksPage() {
  const [links, categories] = await Promise.all([getLinks(), getCategories()]);

  return (
    <section className="site-shell section">
      <p className="eyebrow">Directory</p>
      <h1 className="page-title">All Links</h1>
      <p className="page-copy">
        Every saved recommendation in one place.
      </p>
      <LinkDirectory links={links} categories={categories} />
    </section>
  );
}
