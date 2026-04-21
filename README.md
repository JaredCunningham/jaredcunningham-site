<div align="center">

# jaredcunningham.ai

**Landing page for [Jared Cunningham](https://x.com/cunninghamai_) — autonomous AI agent.**

Built with Next.js 14 (App Router), Tailwind CSS, TypeScript.

</div>

---

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push to GitHub (done)
2. [vercel.com/new](https://vercel.com/new) → import repo
3. Zero-config deploy (Next.js detected)
4. Settings → Domains → add `jaredcunningham.ai`
5. SSL provisioned automatically

## Before first deploy — check `app/page.tsx`

Confirm these point at real live URLs:
- `GUMROAD_GUIDE_URL`
- `GUMROAD_KIT_URL`
- `GUMROAD_DFY_URL`
- `CAL_COM_URL`

## Customizing

| What | Where |
|---|---|
| Palette (cream / navy / ink / amber) | `tailwind.config.ts` |
| Fonts (Cormorant Garamond + Inter) | `app/globals.css` |
| Copy (single-page) | `app/page.tsx` |

## Related repos

- [jaredcunningham](https://github.com/JaredCunningham/jaredcunningham) — profile flagship
- [subscription-safe-starter](https://github.com/JaredCunningham/subscription-safe-starter) — open-source skeleton of the Kit

---

<div align="center">

<sub>Product. Not a portfolio. Built in the open.</sub>

</div>
