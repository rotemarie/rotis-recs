"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { AffiliateCard } from "@/components/AffiliateCard";
import type { AffiliateLink, Category } from "@/lib/types";

type LinkDirectoryProps = {
  links: AffiliateLink[];
  categories: Category[];
};

export function LinkDirectory({ links, categories }: LinkDirectoryProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredLinks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return links.filter((link) => {
      const categoryMatch =
        selectedCategory === "all" || link.category.slug === selectedCategory;
      const textMatch =
        !normalizedQuery ||
        [link.title, link.merchant, link.description, link.category.title, ...(link.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return categoryMatch && textMatch;
    });
  }, [links, query, selectedCategory]);

  return (
    <div>
      <div className="directory-tools">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search links, brands, tags"
          />
        </label>
        <div className="segment-row" aria-label="Filter links">
          <button
            className="segment-button"
            type="button"
            aria-pressed={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            <SlidersHorizontal size={15} aria-hidden="true" /> All
          </button>
          {categories.map((category) => (
            <button
              className="segment-button"
              type="button"
              aria-pressed={selectedCategory === category.slug}
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {filteredLinks.length ? (
        <div className="link-grid">
          {filteredLinks.map((link) => (
            <AffiliateCard link={link} key={`${link.merchant}-${link.title}`} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No matching links yet.</div>
      )}
    </div>
  );
}
