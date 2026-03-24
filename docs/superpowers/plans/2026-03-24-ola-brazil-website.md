# Ola Brazil Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page website for Ola Brazil (Brazilian butcher/shop/cafe) with responsive design, SEO, and WhatsApp contact button.

**Architecture:** Next.js 16 App Router with shared layout (nav, footer, WhatsApp button), 4 route pages (home, menu, about, contact), Tailwind CSS v4 for styling, Lucide React for icons. All content is static — no database or API needed for V1.

**Tech Stack:** Next.js 16.2.1, React 19, TypeScript, Tailwind CSS v4, Lucide React, next/font/google (Playfair Display SC + Karla)

**Spec:** `docs/superpowers/specs/2026-03-24-ola-brazil-website-design.md`
**Design System:** `design-system/ola-brazil/MASTER.md`

**Next.js 16 Critical Notes:**
- `params` and `searchParams` are Promises — must be awaited in dynamic routes
- Turbopack is default bundler
- Use `next/font/google` for self-hosted fonts (not CSS @import)
- Export static `metadata` object from page.tsx for SEO
- Use `next/image` with `alt` prop for all images

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata template, nav, footer, WhatsApp
│   ├── page.tsx                # Home page
│   ├── menu/
│   │   └── page.tsx            # Products & Menu page
│   ├── about/
│   │   └── page.tsx            # About Us page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── globals.css             # Global styles, Tailwind, CSS variables, animations
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt config
├── components/
│   ├── Navbar.tsx              # Navigation bar with mobile drawer
│   ├── Footer.tsx              # Site footer
│   ├── WhatsAppButton.tsx      # Floating WhatsApp button with pulse animation
│   ├── ProductCard.tsx         # Reusable product/menu item card
│   ├── ReviewCard.tsx          # Customer testimonial card
│   └── JsonLd.tsx              # LocalBusiness structured data component
├── lib/
│   └── data.ts                 # All static data (products, reviews, hours, business info)
public/
├── logo.jpeg                   # Ola Brazil logo (copied from images/)
├── logo-tagline.jpeg           # Ola Brazil logo with tagline (copied from images/)
└── placeholder/                # Placeholder images (generated via CSS gradients or external)
```

---

## Task 1: Project Setup — Dependencies, Fonts, Global Styles, CSS Variables

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `package.json` (add lucide-react)
- Create: `public/logo.jpeg` (copy from images/)
- Create: `public/logo-tagline.jpeg` (copy from images/)

- [ ] **Step 1: Install lucide-react**

```bash
npm install lucide-react
```

- [ ] **Step 2: Copy logo files to public/**

```bash
cp "images/WhatsApp Image 2026-03-24 at 13.46.07.jpeg" public/logo.jpeg
cp "images/WhatsApp Image 2026-03-24 at 13.46.54.jpeg" public/logo-tagline.jpeg
```

- [ ] **Step 3: Replace globals.css with brand styles**

Replace `src/app/globals.css` with Tailwind v4 import, CSS custom properties for all brand colors from the design spec, keyframe animation for WhatsApp pulse, and base typography rules. Include `prefers-reduced-motion` media query to disable animations.

CSS variables to define:
```
--color-primary: #007A2F
--color-primary-light: #009C3B
--color-secondary: #FFDF00
--color-accent: #002776
--color-bg: #FFF8F0
--color-text: #1A1A1A
--color-muted: #4A4A4A
--color-green-bg: #00752C
--color-whatsapp: #25D366
```

Define `@keyframes whatsapp-pulse` for the radiating green ring effect.

- [ ] **Step 4: Update root layout.tsx**

Replace `src/app/layout.tsx`:
- Import Playfair_Display_SC and Karla from `next/font/google`
- Configure font subsets and weights per spec
- Apply font CSS variables to `<html>` className
- Set `lang="en"` on html element
- Set base metadata with title template: `%s | Ola Brazil`
- Default metadata: title "Ola Brazil — Brazilian Shop, Butcher & Cafe in Bournemouth", description from spec
- Add Open Graph defaults (title, description, type: website)
- Body: cream background (`bg-[var(--color-bg)]`), text color, min-h-screen flex column
- Render: Navbar, `<main>{children}</main>`, Footer, WhatsAppButton
- Import Navbar, Footer, WhatsAppButton components (they'll be created in subsequent tasks — use placeholder empty components for now if needed)

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Open http://localhost:3000 — should see blank page with cream background, correct fonts loading.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: project setup — brand fonts, colors, global styles"
```

---

## Task 2: Static Data File

**Files:**
- Create: `src/lib/data.ts`

- [ ] **Step 1: Create data.ts with all business info**

Create `src/lib/data.ts` containing typed, exported constants:

- `businessInfo` object: name, tagline, address, phone, whatsapp, instagram, facebook, googleRating, googleReviewCount, coordinates (lat/lng for Bournemouth)
- `reviews` array: 3 review objects with quote, author (from spec: Carol Romo, Bia Goncalves, FLT TV)
- `shopProducts` array: 6 items (Guarana Antarctica, Farofa, Pao de Queijo Mix, Acai Pulp, Brazilian Coffee, Leite Moca) — each with id, name, description, category
- `butcherProducts` array: 6 items (Picanha, Linguica, Fraldinha, Costela, Alcatra, Cupim) — each with id, name, description, category
- `cafeProducts` array: 6 items (Coxinha, Pao de Queijo, Brigadeiro, Pastel, Brazilian Coffee, Acai Bowl) — each with id, name, description, category
- `openingHours` array: 7 days with day name and hours (placeholder: "9:00 AM - 6:00 PM" for Mon-Sat, "10:00 AM - 4:00 PM" for Sun)
- `navLinks` array: { label, href } for Home (/), Products & Menu (/menu), About (/about), Contact (/contact)

All descriptions should be authentic 1-2 line descriptions of each Brazilian product.

- [ ] **Step 2: Commit**

```bash
git add src/lib/data.ts
git commit -m "feat: add static data for products, reviews, and business info"
```

---

## Task 3: Shared Components — Navbar, Footer, WhatsApp Button, JsonLd

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/WhatsAppButton.tsx`
- Create: `src/components/JsonLd.tsx`

**Important:** Navbar needs client-side state for mobile drawer. Use `"use client"` directive. Footer and JsonLd are server components. WhatsAppButton is a server component (pure CSS animation, link only).

- [ ] **Step 1: Create Navbar.tsx**

Client component (`"use client"`). Uses:
- `usePathname()` from `next/navigation` for active link highlighting
- `useState` for mobile menu open/close
- Logo image (next/image, src="/logo-tagline.jpeg")
- Desktop: horizontal nav links from `navLinks` data, active link has green underline
- Mobile: hamburger icon (Menu from lucide-react), slide-out drawer from right
  - Dark overlay (bg-black/50), drawer panel (bg-white, w-72), X close button
  - Links listed vertically, close drawer on link click
  - Body scroll lock: use `useEffect` to toggle `overflow-hidden` on body when open
- Fixed/sticky positioning, backdrop-blur-md, bg-white/90, z-40
- All clickable elements: `cursor-pointer`
- Transitions: 200ms ease

- [ ] **Step 2: Create Footer.tsx**

Server component. Three-column grid (stacked on mobile):
- Column 1: Logo + "Ola Brazil" + tagline
- Column 2: Quick Links (same as nav links) + Phone + WhatsApp
- Column 3: Address + Social icons (Instagram, Facebook from lucide-react)
- Bottom: copyright line with current year
- Background: `bg-[var(--color-accent)]` (dark blue #002776), white text
- All links: cursor-pointer, hover underline

- [ ] **Step 3: Create WhatsAppButton.tsx**

Server component. Structure:
- Outer wrapper: fixed bottom-6 right-6, z-50, flex items-end gap-3
- Tooltip (desktop only, hidden below md): white rounded-2xl card with shadow, text "Got a question? 👋" / "Chat with us on WhatsApp" — wait, no emojis as icons. Use just text: "Got a question?" / "Chat with us on WhatsApp". Small green notification dot at top-right corner.
- Button: `<a>` linking to `https://wa.me/447487288855` target="_blank" rel="noopener noreferrer"
  - Green circle (w-[76px] h-[76px] md:w-[76px] w-[56px] h-[56px]), rounded-full
  - WhatsApp SVG icon (inline SVG, white, 38px)
  - Green glow shadow
  - Pulsating ring: `before:` pseudo-element with `whatsapp-pulse` animation (defined in globals.css)
  - Hover: scale-110, darker green
  - `aria-label="Chat with us on WhatsApp"`

- [ ] **Step 4: Create JsonLd.tsx**

Server component. Renders `<script type="application/ld+json">` with LocalBusiness schema:
- @type: ["LocalBusiness", "ButcherShop", "Restaurant", "GroceryStore"]
- name, address (PostalAddress), telephone, geo coordinates
- openingHours from data
- aggregateRating: 5.0, 237 reviews
- sameAs: [instagram URL, facebook URL]
- url, image (logo)

- [ ] **Step 5: Update layout.tsx to import real components**

Update `src/app/layout.tsx` to import and render the actual Navbar, Footer, WhatsAppButton, and JsonLd components.

- [ ] **Step 6: Verify dev server**

```bash
npm run dev
```

Check: navbar renders with logo and links, footer renders with blue background, WhatsApp button visible with pulsating animation, mobile hamburger menu works.

- [ ] **Step 7: Commit**

```bash
git add src/components/ src/app/layout.tsx
git commit -m "feat: add navbar, footer, WhatsApp button, and JSON-LD components"
```

---

## Task 4: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/ReviewCard.tsx`

- [ ] **Step 1: Create ReviewCard.tsx**

Server component. Props: `{ quote: string; author: string }`. Renders a card with:
- Quote text in italics, muted text color
- Author name in bold below
- Star icons (Star from lucide-react, filled yellow)
- Card styling from design system (rounded-xl, shadow, hover lift)

- [ ] **Step 2: Build Home page**

Replace `src/app/page.tsx` with sections in order:

**Hero Section:**
- Full-width section, min-h-[70vh], relative positioning
- Background: CSS gradient simulating a warm food photo (dark overlay gradient from transparent to rgba(0,0,0,0.6))
  - Use a rich CSS gradient with warm tones as placeholder for a real photo
- Centered content: logo image, h1 headline, p subtitle, two CTA buttons
- Buttons: "View Our Menu" (Link to /menu, blue bg) + "Find Us" (Link to /contact, outlined)

**Three Pillars Section:**
- Section with cream bg, py-20, max-w-6xl mx-auto
- h2: "What We Offer"
- Three cards in grid (grid-cols-1 md:grid-cols-3, gap-8):
  - Shop: ShoppingBag icon, title, description, Link to /menu#shop
  - Butcher: Beef icon (or Utensils), title, description, Link to /menu#butcher
  - Cafe: Coffee icon, title, description, Link to /menu#cafe
- Cards: white bg, rounded-xl, p-8, shadow-md, hover shadow-lg + translateY(-2px), cursor-pointer, transition-all 200ms
- Icon: 48px, green color (var(--color-primary))
- Title: Playfair Display SC (font-display), accent color
- Description: Karla, muted text

**Social Proof Section:**
- bg-[var(--color-accent)] (dark blue), white text, py-16
- Center: star rating display (5 filled Star icons, golden yellow), "5.0 — 237 Google Reviews" text
- 3 ReviewCards in grid below

**Instagram Teaser:**
- Section py-16, cream bg
- h2: "Follow Us @olabraz"
- Grid of 6 placeholder colored boxes (CSS gradients with food-inspired warm colors) simulating photos
- Link to instagram.com/olabraz below

- [ ] **Step 3: Add Home page metadata**

Export `metadata` object from page.tsx with title and description from spec SEO table. Title will use the template from layout.tsx, so just set: `title: "Ola Brazil — Brazilian Shop, Butcher & Cafe in Bournemouth"`.

- [ ] **Step 4: Verify**

```bash
npm run dev
```

Check all sections render correctly, responsive on mobile, links work, hover states smooth.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/ReviewCard.tsx
git commit -m "feat: build home page with hero, pillars, reviews, and Instagram sections"
```

---

## Task 5: Products & Menu Page

**Files:**
- Create: `src/app/menu/page.tsx`
- Create: `src/components/ProductCard.tsx`

- [ ] **Step 1: Create ProductCard.tsx**

Server component. Props: `{ name: string; description: string }`. Renders:
- Card: white bg, rounded-xl, overflow-hidden, shadow-md, hover shadow-lg + translateY(-2px)
- Image area: aspect-[4/3] bg with warm CSS gradient placeholder, relative
- Content area: p-6, product name (font-display, text-lg, font-bold), description (text-muted, text-sm)
- No prices (per spec)
- cursor-pointer, transition-all 200ms

- [ ] **Step 2: Build Products & Menu page**

Create `src/app/menu/page.tsx`:

**Page Header:**
- py-16, text-center
- h1: "Our Products & Menu" (font-display)
- p: subtitle from spec

**Category Navigation:**
- Sticky bar below navbar (sticky top-[navbar height], z-30, bg-white/90, backdrop-blur)
- Three anchor links: Shop | Butcher | Cafe
- Styled as tabs: underline active (use client component or just anchor links)
- Link to #shop, #butcher, #cafe

**Shop Section (id="shop"):**
- Section header with ShoppingBag icon + "Brazilian Imported Goods"
- Grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3, gap-6)
- Map `shopProducts` from data.ts to ProductCard components

**Butcher Section (id="butcher"):**
- Section header with Beef/Utensils icon + "Premium Meat Cuts"
- Same grid layout, map `butcherProducts`

**Cafe Section (id="cafe"):**
- Section header with Coffee icon + "Cafe & Treats"
- Same grid layout, map `cafeProducts`

Each section: py-16, max-w-6xl mx-auto, px-4

- [ ] **Step 3: Add metadata**

Export `metadata`: title "Our Products & Menu", description from spec SEO table.

- [ ] **Step 4: Verify**

Check page renders, anchor links scroll to sections, sticky nav works, cards display correctly, responsive on mobile.

- [ ] **Step 5: Commit**

```bash
git add src/app/menu/ src/components/ProductCard.tsx
git commit -m "feat: build products and menu page with category sections"
```

---

## Task 6: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Build About page**

Create `src/app/about/page.tsx`:

**Hero / Story Section:**
- py-20, max-w-4xl mx-auto, text-center
- h1: "Our Story" (font-display)
- Narrative paragraphs about Ola Brazil — bringing authentic Brazilian flavours to Bournemouth. Written in warm, welcoming tone. 2-3 paragraphs.
- Placeholder image: aspect-video div with warm CSS gradient and text "Photo coming soon"

**What Makes Us Different:**
- py-16, max-w-6xl mx-auto
- h2: "What Makes Us Different"
- Three value prop cards (grid-cols-1 md:grid-cols-3):
  - Globe icon + "Authentic Brazilian Imports" + description
  - Beef/Utensils icon + "Premium Butcher Cuts" + description
  - Coffee icon + "Fresh Cafe Treats Daily" + description
- Cards: same style as pillars on home page

**Community Section:**
- py-16, bg-[var(--color-green-bg)] (dark green), white text
- "Part of the Bournemouth Community" heading
- Brief welcoming text
- Google Reviews badge: 5 stars + "5.0 — 237 Google Reviews"

- [ ] **Step 2: Add metadata**

Export `metadata`: title "About Ola Brazil — Our Story", description from spec.

- [ ] **Step 3: Verify and commit**

```bash
git add src/app/about/
git commit -m "feat: build about page with story, values, and community sections"
```

---

## Task 7: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Build Contact page**

Create `src/app/contact/page.tsx`. This page needs `"use client"` for the contact form state.

**Page Header:**
- py-16, text-center
- h1: "Visit Us" (font-display)
- p: "We'd love to see you"

**Two-Column Layout (stacked mobile):**
- grid grid-cols-1 md:grid-cols-2, gap-12, max-w-6xl mx-auto

Left column — Contact Details:
- MapPin icon + "339 Wimborne Rd, Bournemouth BH9 2AD"
- Phone icon + "01202 023216" (clickable `tel:` link)
- MessageCircle icon + "WhatsApp Us" (link to wa.me/447487288855)
- Instagram icon + "@olabraz" (link)
- Facebook icon + "Ola Brazil" (link)

Right column — Google Maps iframe:
- `<iframe>` embed for "339 Wimborne Rd, Bournemouth BH9 2AD"
- src: Google Maps embed URL with the address query
- width="100%" height="400" rounded-xl, border-0, shadow-md

**Opening Hours:**
- py-12, max-w-2xl mx-auto
- h2: "Opening Hours"
- Table/grid from `openingHours` data: day name + hours
- Styled as a clean card with rows

**Contact Form:**
- py-12, max-w-xl mx-auto
- h2: "Send Us a Message"
- Form with: Name input, Email input, Message textarea
- All fields required, with `<label>` elements
- Client-side validation: email regex check
- Inline error messages (red text below field)
- Submit button: blue bg (accent), "Send Message"
- On submit: construct `mailto:` link with form data, open in new tab. Show success message.
- Use `useState` for form state, errors, and submitted status

- [ ] **Step 2: Add metadata**

Export `metadata`: title "Visit Us — Ola Brazil Bournemouth", description from spec.

Note: `metadata` export requires a server component. Since page.tsx is `"use client"`, extract the form into a separate `ContactForm.tsx` client component and keep `page.tsx` as a server component that exports metadata and renders the layout + ContactForm.

Revised approach:
- `src/app/contact/page.tsx` — server component, exports metadata, renders layout
- `src/components/ContactForm.tsx` — client component with form state

- [ ] **Step 3: Verify**

Check: map renders, contact details are clickable, form validates, hours display correctly, responsive.

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/ src/components/ContactForm.tsx
git commit -m "feat: build contact page with map, hours, and contact form"
```

---

## Task 8: SEO — Sitemap, Robots, Final Metadata Pass

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create sitemap.ts**

```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://olabrazil.co.uk' // Update with final domain

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/menu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
```

- [ ] **Step 2: Create robots.ts**

```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://olabrazil.co.uk/sitemap.xml',
  }
}
```

- [ ] **Step 3: Verify build succeeds**

```bash
npm run build
```

Ensure no errors. Check that sitemap.xml and robots.txt are generated.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts
git commit -m "feat: add sitemap and robots.txt for SEO"
```

---

## Task 9: Final Polish — Build Verification and Responsive Check

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Fix any TypeScript errors or build failures.

- [ ] **Step 2: Start production server and verify all pages**

```bash
npm start
```

Check all 4 pages load, navigation works, WhatsApp button visible, mobile responsive.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: Ola Brazil website v1 complete"
```

---

## Task 10: Deploy — Push to GitHub and Vercel

- [ ] **Step 1: Push to GitHub**

```bash
git branch -M main
git push -u origin main
```

- [ ] **Step 2: Deploy to Vercel**

```bash
vercel --yes
```

If prompted, select the project framework (Next.js) and accept defaults.

- [ ] **Step 3: Verify live deployment**

Check the Vercel deployment URL — all pages should render correctly.

- [ ] **Step 4: Report deployment URL to user**
