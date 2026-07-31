import { Settings } from "lucide-react";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Settings,
  fields: [
    defineField({
      name: "siteName",
      title: "Site name",
      type: "string",
      initialValue: "Rotis' Recs",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "affiliateDisclosure",
      title: "Affiliate disclosure",
      type: "text",
      rows: 3,
      initialValue:
        "Some links may be affiliate links, which means I may earn a commission if you buy through them.",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "pinterestUrl",
      title: "Pinterest URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "siteName",
      subtitle: "intro",
    },
  },
});
