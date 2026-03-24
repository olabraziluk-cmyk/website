@AGENTS.md

# Ola Brazil Website

## What This Is
Website for **Ola Brazil** — Brazilian butcher shop, imported goods store, and cafe at 339 Wimborne Rd, Bournemouth BH9 2AD.

## Tech Stack
- Next.js 16.2.1 (App Router), React 19, TypeScript, Tailwind CSS v4
- Lucide React for icons (no brand icons — use inline SVGs for Instagram/Facebook)
- Fonts: Playfair Display SC (headings) + Karla (body) via `next/font/google`
- Deployed on Vercel, repo on GitHub

## Brand
- **Colors**: Green `#007A2F`, Yellow `#FFDF00`, Blue `#002776`, Cream bg `#FAFAF7`, Warm brown `#92400E`
- **Style**: Photography-led — Unsplash stock photos, clean white/cream sections, restrained typography, scroll-reveal animations
- **Logo**: JPEG files in `public/` (future: get SVG/transparent PNG from owner)
- **Tagline order**: SHOP | BUTCHER | CAFE (matches logo)
- **Typography**: Playfair Display SC for h1/h2 only, Karla for h3+ and body. Max heading: text-6xl

## Key Files
- `src/lib/data.ts` — All static business data (products, reviews, hours, contact, stock image URLs)
- `src/components/` — Navbar, Footer, WhatsAppButton, ProductCard, ReviewCard, ContactForm, JsonLd, ScrollReveal
- `src/components/ScrollReveal.tsx` — IntersectionObserver-based fade-up animation wrapper
- `design-system/ola-brazil/MASTER.md` — Design system reference
- `docs/superpowers/specs/` — Design spec
- `docs/superpowers/plans/` — Implementation plan

## Design Rules
- Use `ui-ux-pro-max` skill when building/modifying UI
- Use `playwright-cli` to visually test UI changes before pushing
- No emojis as icons — Lucide SVGs only
- No prices on product cards (V1)
- Stock images from Unsplash in `data.ts` — replace with real shop/food photos when available
- Opening hours are placeholders — confirm with owner
- Mobile menu: compact dropdown card (not a side drawer)
- WCAG: `#007A2F` for green text on cream, `#00752C` for green bg with white text, never yellow behind light text
- `next.config.ts` allows `images.unsplash.com` — remove when all images are local

## Deployment
- **GitHub**: https://github.com/olabraziluk-cmyk/website.git
- **Vercel**: olabraziluk-1676s-projects/ola-brazil
- **Domain**: olabrazil.co.uk (nameservers pointed to Vercel: ns1/ns2.vercel-dns.com)
- Auto-deploys on push to `main`

## What's Left (V1)
- Replace Unsplash stock photos with real food/shop photos from owner
- Confirm opening hours with owner
- Verify domain DNS propagation
- Contact form backend (currently mailto fallback)
- Get SVG/transparent PNG logo from owner

## Future (Not V1)
- E-commerce (Supabase + Stripe)
- User accounts
- Online ordering
- Multi-language (Portuguese/English)
