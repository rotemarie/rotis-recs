import type { AffiliateLink, Article, Category, SiteSettings } from "./types";

export const demoSettings: SiteSettings = {
  siteName: "Rotis' Recs",
  intro:
    "Field-tested lists for the things worth saving, buying, wearing, packing, and sharing.",
  affiliateDisclosure:
    "Some links may be affiliate links, which means I may earn a commission if you buy through them.",
  pinterestUrl: "https://www.pinterest.com/",
  instagramUrl: "https://www.instagram.com/",
};

export const demoCategories: Category[] = [
  {
    title: "Cycling Clothes",
    slug: "cycling-clothes",
    description: "Comfortable kit, layers, commuter staples, and beginner-friendly upgrades.",
    color: "#2f7f72",
    imageUrl:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cycling jersey, helmet, and gear laid out before a ride",
  },
  {
    title: "Cycling Gear",
    slug: "cycling-gear",
    description: "Helmets, lights, bags, bottles, locks, and the small pieces that make rides easier.",
    color: "#e44d5e",
    imageUrl:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Road bike leaning against a wall",
  },
  {
    title: "Makeup",
    slug: "makeup",
    description: "Low-effort staples, travel edits, shade notes, and practical beauty finds.",
    color: "#8c5a83",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Makeup products arranged on a vanity",
  },
  {
    title: "Travel",
    slug: "travel",
    description: "Packable, useful, carry-on friendly things that earn their space.",
    color: "#4f68c6",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Packed travel bag near a window",
  },
];

const bySlug = Object.fromEntries(demoCategories.map((category) => [category.slug, category]));

export const demoLinks: AffiliateLink[] = [
  {
    title: "MIPS Beginner Road Helmet",
    merchant: "Example Sports",
    href: "https://example.com/go/mips-beginner-road-helmet",
    category: bySlug["cycling-gear"],
    description: "A light, ventilated helmet with an easy-adjust dial and modern safety tech.",
    imageUrl:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cyclist wearing a helmet on a sunny road",
    priceLabel: "Best safety upgrade",
    tags: ["helmet", "beginner", "road"],
    isFavorite: true,
  },
  {
    title: "Padded Cycling Shorts",
    merchant: "Example Outdoor",
    href: "https://example.com/go/padded-cycling-shorts",
    category: bySlug["cycling-clothes"],
    description: "Soft compression, wide waistband, and enough padding for longer beginner rides.",
    imageUrl:
      "https://images.unsplash.com/photo-1525103990341-c3cb87948452?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cyclist riding outdoors in fitted cycling clothes",
    priceLabel: "Under $60",
    tags: ["shorts", "comfort", "beginner"],
  },
  {
    title: "USB Rechargeable Bike Light Set",
    merchant: "Example Gear Co.",
    href: "https://example.com/go/rechargeable-bike-lights",
    category: bySlug["cycling-gear"],
    description: "A compact front and rear set for visibility on early rides and evening commutes.",
    imageUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cyclist riding at sunset",
    priceLabel: "Budget pick",
    tags: ["lights", "commute", "safety"],
  },
  {
    title: "Breathable Long Sleeve Base Layer",
    merchant: "Example Active",
    href: "https://example.com/go/cycling-base-layer",
    category: bySlug["cycling-clothes"],
    description: "A thin layer that keeps morning rides comfortable without overheating later.",
    imageUrl:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cyclists riding on a road through trees",
    priceLabel: "Layering staple",
    tags: ["layers", "clothes", "commute"],
  },
  {
    title: "Tinted Mineral SPF",
    merchant: "Example Beauty",
    href: "https://example.com/go/tinted-mineral-spf",
    category: bySlug["makeup"],
    description: "A low-maintenance base that evens tone and holds up well for long days.",
    imageUrl:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Beauty products and brushes on a bright surface",
    priceLabel: "Daily staple",
    tags: ["spf", "base", "travel"],
    isFavorite: true,
  },
  {
    title: "Cream Blush Stick",
    merchant: "Example Beauty",
    href: "https://example.com/go/cream-blush-stick",
    category: bySlug["makeup"],
    description: "Blendable color for cheeks and lips, small enough to live in every bag.",
    imageUrl:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Makeup brushes and cosmetics on a table",
    priceLabel: "Tiny bag hero",
    tags: ["blush", "capsule", "travel"],
  },
  {
    title: "Clear Travel Pouch Trio",
    merchant: "Example Travel",
    href: "https://example.com/go/clear-travel-pouches",
    category: bySlug["travel"],
    description: "Separate skincare, makeup, and chargers without digging through your carry-on.",
    imageUrl:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Travel accessories packed beside a suitcase",
    priceLabel: "Packing favorite",
    tags: ["organizer", "carry-on", "makeup"],
  },
  {
    title: "Everyday Waterproof Handlebar Bag",
    merchant: "Example Cycle",
    href: "https://example.com/go/waterproof-handlebar-bag",
    category: bySlug["cycling-gear"],
    description: "Room for phone, keys, wallet, and a snack without wearing a backpack.",
    imageUrl:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cyclist with a bike on a city street",
    priceLabel: "Commuter pick",
    tags: ["bag", "commute", "waterproof"],
  },
];

const link = (title: string) => {
  const found = demoLinks.find((item) => item.title === title);

  if (!found) {
    throw new Error(`Missing demo link: ${title}`);
  }

  return found;
};

export const demoArticles: Article[] = [
  {
    title: "Best Cycling Gear for Beginners",
    slug: "best-cycling-gear-for-beginners",
    dek:
      "A practical starter list for feeling safer, more comfortable, and more excited to get on the bike.",
    publishedAt: "2026-07-15T09:00:00.000Z",
    categories: [bySlug["cycling-gear"], bySlug["cycling-clothes"]],
    heroImageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Cycling gear packed for an outdoor ride",
    pinterestDescription:
      "Beginner cycling gear checklist with helmet, lights, shorts, layers, and useful small upgrades.",
    linkSections: [
      {
        title: "Start With Safety",
        summary: "The pieces that make every ride feel calmer before anything else.",
        links: [
          link("MIPS Beginner Road Helmet"),
          link("USB Rechargeable Bike Light Set"),
        ],
      },
      {
        title: "Comfort Upgrades",
        summary: "Small changes that make the difference between one ride and a repeat habit.",
        links: [
          link("Padded Cycling Shorts"),
          link("Breathable Long Sleeve Base Layer"),
          link("Everyday Waterproof Handlebar Bag"),
        ],
      },
    ],
  },
  {
    title: "The Capsule Makeup Bag I Pack for Long Weekends",
    slug: "capsule-makeup-bag-long-weekend",
    dek:
      "A compact beauty edit for trips where you want to look pulled together without packing the whole drawer.",
    publishedAt: "2026-07-08T09:00:00.000Z",
    categories: [bySlug["makeup"], bySlug["travel"]],
    heroImageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Makeup essentials on a clean vanity",
    pinterestDescription:
      "Minimal travel makeup bag with SPF, blush, and clear pouches for a long weekend.",
    linkSections: [
      {
        title: "Face And Color",
        summary: "Fresh, quick, and easy to reapply without a mirror ceremony.",
        links: [link("Tinted Mineral SPF"), link("Cream Blush Stick")],
      },
      {
        title: "Packing",
        summary: "A little structure keeps the whole bag calmer.",
        links: [link("Clear Travel Pouch Trio")],
      },
    ],
  },
  {
    title: "Cute Cycling Clothes That Still Work Hard",
    slug: "cute-cycling-clothes-that-work-hard",
    dek:
      "Ride clothes that look good off the bike and still handle sweat, wind, and real movement.",
    publishedAt: "2026-06-26T09:00:00.000Z",
    categories: [bySlug["cycling-clothes"]],
    heroImageUrl:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1400&q=80",
    heroImageAlt: "Cyclists in fitted layers riding together",
    pinterestDescription:
      "Cycling clothes for beginners: shorts, base layers, and practical outfit ideas.",
    linkSections: [
      {
        title: "The Foundation",
        summary: "Comfort first, then polish.",
        links: [
          link("Padded Cycling Shorts"),
          link("Breathable Long Sleeve Base Layer"),
        ],
      },
    ],
  },
];
