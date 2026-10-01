# Dirt & Dollars — thedirtanddollarswebsite.com

Static Astro site for the Dirt & Dollars YouTube channel and The Fence Post newsletter.

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
```

## Deploy (Railway)
Railway auto-detects Node: build = `npm run build`, start = `npm start` (serves `dist/` on `$PORT`).
Set env var `PUBLIC_KIT_FORM_ID` to your Kit form id, then redeploy.

## Add a Fence Post
1. Add an entry to `POSTS` in `src/data/site.ts` (status `published`).
2. Copy `src/pages/fence-post/keep-the-heifers.astro` to `src/pages/fence-post/<slug>.astro` and write the post.
