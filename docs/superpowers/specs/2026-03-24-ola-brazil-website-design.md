# Ola Brazil Website — Design Specification

## Overview

A multi-page website for **Ola Brazil**, a Brazilian butcher shop, imported goods store, and cafe located in Bournemouth, UK. The site serves as a welcoming digital presence for customers, showcasing the three pillars of the business (Shop, Butcher, Cafe) with a vibrant Brazilian cultural identity. Built for future scalability toward e-commerce and user accounts.

## Tech Stack

- **Framework:** Next.js 16.2.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Runtime:** React 19.2.4
- **Deployment:** Vercel
- **Icons:** Lucide React (SVG icons — no emojis)
- **Fonts:** Google Fonts (Playfair Display SC + Karla)
- **Images:** Placeholder stock images (to be replaced with real photos later)

## Brand Identity

### Business Details

- **Name:** Ola Brazil (with accent: Olá Brazil)
- **Tagline:** SHOP | BUTCHER | CAFE
- **Address:** 339 Wimborne Rd, Bournemouth BH9 2AD
- **Phone:** 01202 023216
- **WhatsApp:** +44 7487 288855
- **Instagram:** @olabraz (www.instagram.com/olabraz)
- **Facebook:** olabrazltd (www.facebook.com/olabrazltd)
- **Google Reviews:** 5.0 stars, 237 reviews
- **Logo:** Two variants in `images/` folder — circular mark with bull head silhouette filled with Brazilian flag + butcher knife

### Color Palette

Derived from the Brazilian flag colors in the logo, used strategically (not overwhelming).

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Brazilian Green (dark) | `#007A2F` | Text headings, nav text — WCAG 4.5:1 on cream |
| Primary Light | Brazilian Green | `#009C3B` | Decorative only: borders, underlines, dividers — not for text |
| Secondary | Brazilian Yellow | `#FFDF00` | Decorative only: badges, highlights, dividers — always with dark text on top, never behind light text |
| Accent | Brazilian Blue | `#002776` | CTA buttons, links, trust elements |
| Background | Warm Cream | `#FFF8F0` | Page background |
| Text | Near Black | `#1A1A1A` | Body text |
| Muted Text | Dark Gray | `#4A4A4A` | Secondary text, descriptions |
| WhatsApp Green | WhatsApp Brand | `#25D366` | WhatsApp floating button only |
| Green BG (for white text) | Dark Brazilian Green | `#00752C` | When green is used as a background with white text |

**Contrast notes:**
- `#007A2F` on `#FFF8F0` = 5.2:1 (passes WCAG AA)
- `#002776` on `#FFF8F0` = 9.8:1 (passes WCAG AAA)
- White on `#00752C` = 4.8:1 (passes WCAG AA)
- White on `#FFDF00` = 1.3:1 (FAILS — never use yellow behind light text)

**Color strategy:** Green and blue do the heavy lifting. Yellow is used sparingly as a decorative accent (badges, highlights, dividers) and always paired with dark text. Cream background maintains the warm, inviting feel from the logo. The goal is "vibrant and cultural" without garish.

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Playfair Display SC | 400, 700 | Page titles, section headers, hero text |
| Body | Karla | 300–700 | Body text, descriptions, nav, buttons |

- Small-caps Playfair for menu-style headers — gives a premium butcher shop feel
- Karla for clean, readable body text
- Hero headlines: 32px+ (mobile), 48px+ (desktop)
- Body text: 16px minimum on all breakpoints
- Line height: 1.5–1.75 for body text

**Google Fonts import:**
```
Karla:wght@300;400;500;600;700|Playfair+Display+SC:wght@400;700
```

### Design Style

**Vibrant & Block-based** — bold, energetic, block layout with high color contrast. Large sections (48px+ gaps), bold hover effects (color shift), large type (32px+). Animations use 150–300ms transitions. `prefers-reduced-motion` respected throughout.

## Page Structure

### Shared Components

#### Navigation Bar
- Fixed/sticky at top with slight transparency + backdrop blur on scroll
- Logo (left) — links to home
- Nav links (center): Home, Products & Menu, About, Contact
- Mobile: hamburger menu with slide-out drawer
  - Slides in from the right
  - Semi-transparent dark overlay behind drawer
  - Close on X button or tap outside
  - 200ms ease transition
  - Body scroll locked when open
- Active page indicator using Brazilian Green underline

#### Footer
- Three columns: Quick Links, Contact Info, Social Media
- Logo + business name
- Address, phone, hours summary
- Instagram + Facebook icon links
- Copyright line

#### WhatsApp Floating Button
- Fixed bottom-right corner, 24px from edges, z-index 50
- 76px circle on desktop, 56px on mobile (< 768px) with WhatsApp green (`#25D366`) background
- Green glow shadow: `0px 6px 28px rgba(37, 211, 102, 0.55)`
- White WhatsApp SVG icon (38px) centered
- **Pulsating animation:** green ring radiates outward on a continuous loop (keyframe animation)
- Hover: scale to 110%, background deepens to `#20BA5A`, 200ms transition
- Desktop: speech bubble tooltip to the left — "Got a question? Chat with us on WhatsApp"
- Mobile: tooltip hidden, button only
- Links to `https://wa.me/447487288855` (opens new tab)
- `aria-label="Chat with us on WhatsApp"`
- Persistent across all pages

### Page 1: Home

**Sections in order:**

1. **Hero Section**
   - Full-width background image (Brazilian BBQ / churrasco placeholder)
   - Dark gradient overlay for text readability
   - Ola Brazil logo (centered or left-aligned)
   - Headline: "Authentic Brazilian Flavours in Bournemouth"
   - Subtitle: "Your local Brazilian shop, butcher, and cafe"
   - Two CTA buttons: "View Our Menu" (primary, blue) + "Find Us" (secondary, outlined)

2. **Three Pillars Section** (order matches logo tagline: SHOP | BUTCHER | CAFE)
   - Three cards side by side (stacked on mobile):
     - **Shop** — icon + brief description of imported Brazilian goods
     - **Butcher** — icon + brief description of premium Brazilian meat cuts
     - **Cafe** — icon + brief description of cakes, tapas, coffee
   - Each card links to the relevant section on the Products & Menu page

3. **Social Proof / Reviews Section**
   - "5.0 stars — 237 Google Reviews" prominently displayed with star icons
   - 2–3 customer testimonial quotes (from the real Google reviews):
     - "Lovely homemade food and great service from the staff!" — Carol Romo
     - "A great variety of Brazilian products and amazing customer service." — Bia Goncalves
     - "Excellent place for meats and groceries, lots of options." — FLT TV

4. **Instagram Teaser Section**
   - "Follow us @olabraz" header
   - Static grid of curated placeholder images (not a live API feed — V1 uses manually-placed images)
   - Link to Instagram profile
   - Future: could integrate Instagram Basic Display API or third-party embed

### Page 2: Products & Menu

**Sections in order:**

1. **Page Header**
   - Title: "Our Products & Menu"
   - Subtitle: "From premium meats to authentic Brazilian goods and fresh cafe treats"

2. **Category Navigation**
   - Three tabs or anchor links: Shop | Butcher | Cafe (matches logo tagline order)
   - Sticky below the navbar on scroll

3. **Shop Section**
   - Section header with icon
   - Grid of product cards (image + name + description, NO prices)
   - Placeholder items: Guarana Antarctica, Farofa, Pao de Queijo Mix, Acai Pulp, Brazilian Coffee, Condensed Milk (Leite Moca)
   - Each card: placeholder food image, product name, 1–2 line description

4. **Butcher Section**
   - Section header with icon
   - Grid of product cards (same format)
   - Placeholder items: Picanha, Linguica, Fraldinha, Costela, Alcatra, Cupim

5. **Cafe Section**
   - Section header with icon
   - Grid of product cards (same format)
   - Placeholder items: Coxinha, Pao de Queijo, Brigadeiro, Pastel, Brazilian Coffee, Acai Bowl

### Page 3: About Us

**Sections in order:**

1. **Hero / Story Section**
   - Headline: "Our Story"
   - Narrative about Ola Brazil — bringing authentic Brazilian flavours to Bournemouth
   - Placeholder team/shop photo

2. **What Makes Us Different**
   - 3 value propositions with icons:
     - Authentic Brazilian imports direct from Brazil
     - Premium quality butcher cuts
     - Freshly made cafe treats daily

3. **Community Section**
   - Brief text about being part of the Bournemouth community
   - Google Reviews badge (5.0 stars, 237 reviews)

### Page 4: Contact

**Sections in order:**

1. **Page Header**
   - Title: "Visit Us"
   - Subtitle: "We'd love to see you"

2. **Two-Column Layout** (stacked on mobile)
   - **Left: Contact Details**
     - Address with map pin icon
     - Phone number (clickable tel: link)
     - WhatsApp number (links to wa.me)
     - Instagram + Facebook links
   - **Right: Embedded Google Map**
     - Google Maps embed centered on 339 Wimborne Rd, Bournemouth BH9 2AD

3. **Opening Hours**
   - Table/grid format showing daily hours
   - Placeholder hours (to be confirmed by owner)

4. **Contact Form**
   - Fields: Name (required), Email (required, client-side validation), Message (required)
   - Submit button (Server Action or mailto fallback for initial version)
   - Inline error messages below fields on invalid input
   - Success message/toast on submission
   - No backend required for V1 — can use mailto or a free form service

5. **Google Maps**
   - Use Google Maps `<iframe>` embed (no API key required)
   - Do NOT use the Maps JavaScript API for V1

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | 375px | Single column, hamburger nav, no WhatsApp tooltip |
| Tablet | 768px | Two-column grids, expanded nav |
| Desktop | 1024px | Full layout, three-column grids |
| Wide | 1440px | Max content width, centered |

## Accessibility Requirements

- Color contrast: 4.5:1 minimum for all text
- All images have descriptive alt text
- Visible focus states on all interactive elements
- `aria-label` on icon-only buttons
- Keyboard navigation: tab order matches visual order
- `prefers-reduced-motion`: disable pulsating animation and transitions
- Form inputs have associated labels
- Touch targets: minimum 44x44px

## Performance Guidelines

- Use Next.js `<Image>` with `fill` prop for responsive images, WebP format, lazy loading
- Fonts loaded via `next/font/google` (not CSS import) for performance
- Reserve space for async content to prevent layout shift
- SVG icons (Lucide) — no icon font libraries

## SEO & Metadata

Critical for a local business — search visibility is the primary growth channel.

### Page Titles & Meta Descriptions

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home | Ola Brazil — Brazilian Shop, Butcher & Cafe in Bournemouth | Authentic Brazilian meats, imported goods, and fresh cafe treats in Bournemouth. Visit Ola Brazil at 339 Wimborne Rd. 5-star rated on Google. |
| Products & Menu | Our Products & Menu — Ola Brazil | Explore our premium Brazilian meat cuts, imported goods, and cafe menu. Picanha, Guarana, Pao de Queijo and more. |
| About | About Ola Brazil — Our Story | Bringing authentic Brazilian flavours to Bournemouth. Quality imported goods, premium butcher cuts, and freshly made cafe treats. |
| Contact | Visit Us — Ola Brazil Bournemouth | Find us at 339 Wimborne Rd, Bournemouth BH9 2AD. Call 01202 023216 or WhatsApp us. Open 7 days a week. |

### Structured Data (JSON-LD)

Include `LocalBusiness` schema on all pages with:
- Business name, address, phone, geo coordinates
- Opening hours
- Google Reviews rating (5.0, 237 reviews)
- Social media links (Instagram, Facebook)
- Business type: Butcher Shop / Restaurant / Grocery Store

### Open Graph / Social Sharing

- `og:title`, `og:description`, `og:image` (logo or hero image) per page
- `og:type`: website
- Twitter card: summary_large_image

### Technical SEO

- Generate `sitemap.xml` via Next.js App Router conventions
- Add `robots.txt` allowing all crawlers
- Use semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`)

## Logo Assets

The current logo files are JPEG with white backgrounds. For the website:
- Use the JPEG logos as-is for V1 (they work on the cream background)
- Future: request SVG or transparent PNG versions from the owner for better rendering on non-cream backgrounds (navbar, dark sections)

## Anti-Patterns to Avoid

- No emojis as UI icons — use Lucide SVG icons
- No prices on product cards (to avoid customer confusion)
- No outdated hours — use placeholder until confirmed
- No layout-shifting hover effects — use color/opacity transitions only
- No horizontal scroll on mobile
- No content hidden behind the fixed navbar

## Future Considerations (Not in V1)

- E-commerce: product pages with prices, cart, checkout (Supabase + Stripe)
- User accounts / login system
- Online ordering for cafe items
- Delivery scheduling for butcher orders
- Blog / recipe section
- Multi-language support (Portuguese / English)
