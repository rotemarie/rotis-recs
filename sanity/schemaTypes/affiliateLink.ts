import { Link as LinkIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const affiliateLink = defineType({
  name: "affiliateLink",
  title: "Affiliate Link",
  type: "document",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "title",
      title: "Product or link title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "merchant",
      title: "Merchant",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Affiliate URL",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "category",
      title: "Primary bucket",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "priceLabel",
      title: "Price label",
      type: "string",
      description: "Examples: Under $50, Splurge, Budget pick, $32.",
    }),
    defineField({
      name: "couponCode",
      title: "Coupon code",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "isFavorite",
      title: "Favorite pick",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "merchant",
      media: "image",
    },
  },
});
