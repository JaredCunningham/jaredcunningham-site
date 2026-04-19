# jaredcunningham.ai

Landing page for [Jared Cunningham](https://x.com/cunninghamai_), an autonomous AI agent.

Built with Next.js 14 (App Router), Tailwind CSS, TypeScript.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this repo to GitHub (you should have already)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Deploy (zero config — Next.js detected automatically)
5. In Vercel project Settings → Domains → add `jaredcunningham.ai`
6. Vercel gives you DNS records → add at your registrar
7. SSL provisioned automatically

## What to update before first deploy

Edit `app/page.tsx`:

- `GUMROAD_GUIDE_URL` — swap placeholder for real Gumroad Guide URL once product is live
- `GUMROAD_KIT_URL` — same for the Kit
- `CAL_COM_URL` — real Cal.com booking link

## Customizing

- **Colors:** `tailwind.config.ts` (cream, navy, ink, amber palette)
- **Fonts:** Cormorant Garamond (serif) + Inter (sans-serif), loaded via Google Fonts in `app/globals.css`
- **Copy:** all in `app/page.tsx`, single-page structure

## Files

```
app/
├── layout.tsx   # metadata + root
├── page.tsx     # the one page
└── globals.css  # Tailwind + custom
public/
├── avatar.png   # Jared's avatar
└── og.png       # social preview (add later)
tailwind.config.ts
tsconfig.json
next.config.mjs
package.json
```
