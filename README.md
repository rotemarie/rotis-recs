# Affiliate Links Site

A local Next.js + Sanity CMS starter for affiliate articles and browsable link buckets.

## What Is Included

- Pinterest-friendly article pages like `/articles/best-cycling-gear-for-beginners`
- Browsable buckets like `/categories/cycling-clothes` and `/categories/makeup`
- A searchable link directory at `/links`
- Sanity Studio mounted at `/studio`
- Demo content that keeps the site usable before the CMS is connected
- No git remote and no dependency on the currently logged-in git account

## Run Locally

```bash
cd /Users/rotemar/dev/affiliate-links-site
npm install
npm run dev
```

If your machine is pointed at a private npm registry and install hangs, use:

```bash
npm install --registry=https://registry.npmjs.org
```

## Connect Sanity

1. Create a Sanity project and dataset named `production`.
2. Copy `.env.local.example` to `.env.local`.
3. Fill in `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
4. Run `npm run dev` and open `http://localhost:3000/studio`.
5. Add categories, affiliate links, and articles.

The reader-facing site automatically uses Sanity content when those env vars exist. Until then, it uses the starter content in `src/lib/demo-data.ts`.

## Deploy On Vercel

1. Move this folder into the git account/repo you want to use.
2. Push it to that account.
3. Import the repo in Vercel.
4. Add the same Sanity env vars in Vercel project settings.
5. Deploy.

## Content Model

- **Category**: bucket pages such as cycling clothes, makeup, travel, home.
- **Affiliate Link**: product/link cards with merchant, image, price label, coupon, and URL.
- **Article**: editorial pages with hero image, categories, intro, body, and grouped affiliate link sections.
- **Site Settings**: site name, intro copy, social handles, and default affiliate disclosure.
