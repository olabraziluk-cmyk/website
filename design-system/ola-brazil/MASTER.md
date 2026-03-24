# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Ola Brazil
**Generated:** 2026-03-24 19:48:15
**Updated:** 2026-03-24 (aligned with design spec)
**Category:** Restaurant/Food Service — Brazilian Butcher, Shop & Cafe

---

## Global Rules

### Color Palette

Derived from the Brazilian flag colors in the Ola Brazil logo. Green and blue do the heavy lifting. Yellow is used sparingly as a decorative accent (badges, borders, dividers) — never as a text color or text background.

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary | `#007A2F` | `--color-primary` | Headers, nav accents, key elements (darkened for WCAG 4.5:1 on cream) |
| Primary Light | `#009C3B` | `--color-primary-light` | Decorative accents only (borders, underlines — not text) |
| Secondary | `#FFDF00` | `--color-secondary` | Badges, highlights, dividers — decorative only, always with dark text |
| CTA/Accent | `#002776` | `--color-cta` | CTA buttons, links, trust elements |
| Background | `#FFF8F0` | `--color-background` | Page background |
| Text | `#1A1A1A` | `--color-text` | Body text |
| Muted Text | `#4A4A4A` | `--color-muted` | Secondary text, descriptions |
| WhatsApp | `#25D366` | `--color-whatsapp` | WhatsApp floating button only |

**Color Notes:** Brazilian flag green, yellow, blue. Warm cream background. Green darkened to `#007A2F` for WCAG AA text contrast on cream. Yellow is never used behind light text (1.33:1 fails). White text on green backgrounds requires `#00752C` or darker.

### Typography

- **Heading Font:** Playfair Display SC
- **Body Font:** Karla
- **Mood:** restaurant, menu, culinary, elegant, foodie, hospitality
- **Google Fonts:** [Playfair Display SC + Karla](https://fonts.google.com/share?selection.family=Karla:wght@300;400;500;600;700|Playfair+Display+SC:wght@400;700)

**Loading method:** Use `next/font/google` in the root layout for self-hosting and performance optimization. Do NOT use CSS `@import`.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button (CTA) */
.btn-primary {
  background: #002776;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #002776;
  border: 2px solid #002776;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #002776;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 39, 118, 0.12);
}
```

---

## Style Guidelines

**Style:** Vibrant & Block-based

**Keywords:** Bold, energetic, cultural, block layout, high color contrast, modern, welcoming

**Best For:** Local businesses, restaurants, cafes, cultural brands

**Key Effects:** Large sections (48px+ gaps), bold hover (color shift), large type (32px+), 200-300ms transitions

### Page Pattern

**Pattern Name:** Hero + Social Proof + CTA (vertical scroll)

- **Section Order:** Hero → Three Pillars → Social Proof/Reviews → Instagram Teaser → Footer
- **CTA Placement:** Hero (primary) + post-reviews (secondary)
- **Conversion Strategy:** Social proof before CTA. Trust signals (5.0 stars, 237 reviews) prominently placed. WhatsApp floating button as persistent contact channel.

---

## Anti-Patterns (Do NOT Use)

- No emojis as icons — Use SVG icons (Lucide)
- No missing cursor:pointer — All clickable elements must have cursor:pointer
- No layout-shifting hovers — Avoid scale transforms that shift surrounding layout
- No low contrast text — Maintain 4.5:1 minimum contrast ratio
- No instant state changes — Always use transitions (150-300ms)
- No invisible focus states — Focus states must be visible for a11y
- No low-quality imagery
- No outdated hours — use placeholders until confirmed
- No prices on product cards (V1)

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use Lucide SVG instead)
- [ ] All icons from Lucide React
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum (use `#007A2F` green for text, not `#009C3B`)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
- [ ] Fonts loaded via `next/font/google`, not CSS import
