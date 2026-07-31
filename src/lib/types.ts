export type Category = {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  color?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type AffiliateLink = {
  _id?: string;
  title: string;
  merchant: string;
  href: string;
  category: Category;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  priceLabel?: string;
  couponCode?: string;
  tags?: string[];
  isFavorite?: boolean;
};

export type LinkSection = {
  title: string;
  summary?: string;
  links: AffiliateLink[];
};

export type Article = {
  _id?: string;
  title: string;
  slug: string;
  dek: string;
  publishedAt: string;
  categories: Category[];
  heroImageUrl?: string;
  heroImageAlt?: string;
  body?: Array<{ _type: string; [key: string]: unknown }>;
  linkSections: LinkSection[];
  pinterestDescription?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type SiteSettings = {
  siteName: string;
  intro: string;
  affiliateDisclosure: string;
  instagramUrl?: string;
  pinterestUrl?: string;
};
