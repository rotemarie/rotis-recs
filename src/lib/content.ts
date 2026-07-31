import { createClient, groq } from "next-sanity";

import { demoArticles, demoCategories, demoLinks, demoSettings } from "./demo-data";
import type { AffiliateLink, Article, Category, SiteSettings } from "./types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-07-30";

export const isSanityConfigured = Boolean(projectId && dataset);

const client = createClient({
  projectId: projectId || "yourprojectid",
  dataset,
  apiVersion,
  useCdn: true,
});

const categoryProjection = `{
  _id,
  title,
  "slug": slug.current,
  "description": coalesce(description, ""),
  color,
  "imageUrl": featuredImage.asset->url,
  "imageAlt": featuredImage.alt
}`;

const linkProjection = `{
  _id,
  title,
  merchant,
  href,
  "description": coalesce(description, ""),
  priceLabel,
  couponCode,
  "tags": coalesce(tags, []),
  "isFavorite": coalesce(isFavorite, false),
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  category->${categoryProjection}
}`;

const articleProjection = `{
  _id,
  title,
  "slug": slug.current,
  "dek": coalesce(dek, ""),
  "publishedAt": coalesce(publishedAt, _createdAt),
  pinterestDescription,
  seoTitle,
  seoDescription,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "imageUrl": asset->url,
      "imageAlt": alt
    }
  },
  "heroImageUrl": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  "categories": coalesce(categories[]->${categoryProjection}, []),
  "linkSections": coalesce(linkSections[]{
    title,
    "summary": coalesce(summary, ""),
    "links": coalesce(links[]->${linkProjection}, [])
  }, [])
}`;

async function fetchFromSanity<T>(query: string, params: Record<string, string> = {}) {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.warn("Sanity fetch failed; using demo content instead.", error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await fetchFromSanity<SiteSettings | null>(
    groq`*[_type == "siteSettings"][0]{
      siteName,
      intro,
      affiliateDisclosure,
      instagramUrl,
      pinterestUrl
    }`,
  );

  return settings || demoSettings;
}

export async function getCategories(): Promise<Category[]> {
  const categories = await fetchFromSanity<Category[]>(
    groq`*[_type == "category"] | order(title asc) ${categoryProjection}`,
  );

  return categories?.length ? categories : demoCategories;
}

export async function getCategory(slug: string): Promise<Category | undefined> {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  const articles = await fetchFromSanity<Article[]>(
    groq`*[_type == "article"] | order(publishedAt desc) ${articleProjection}`,
  );

  return articles?.length ? articles : demoArticles;
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const article = await fetchFromSanity<Article | null>(
    groq`*[_type == "article" && slug.current == $slug][0] ${articleProjection}`,
    { slug },
  );

  if (article) {
    return article;
  }

  return demoArticles.find((item) => item.slug === slug);
}

export async function getLinks(): Promise<AffiliateLink[]> {
  const links = await fetchFromSanity<AffiliateLink[]>(
    groq`*[_type == "affiliateLink"] | order(isFavorite desc, title asc) ${linkProjection}`,
  );

  if (links?.length) {
    return links;
  }

  return demoLinks;
}

export async function getArticlesByCategory(slug: string): Promise<Article[]> {
  const articles = await getArticles();

  return articles.filter((article) =>
    article.categories.some((category) => category.slug === slug),
  );
}

export async function getLinksByCategory(slug: string): Promise<AffiliateLink[]> {
  const links = await getLinks();
  return links.filter((link) => link.category.slug === slug);
}
