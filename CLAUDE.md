# Supsuppliers — Claude Code Project Guide

## What This Is

Dutch B2B supplement manufacturer website. Produces powdered nutrition supplements (whey, pre-workout, creatine, etc.) with white-label and private-label services. The site is a marketing site with a quote request flow.

**Live URL:** https://supsuppliers.revido.app
**Domain:** https://supsuppliers.com

## Quick Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build (validates TypeScript)
npm run lint     # ESLint
railway up       # Deploy to Railway (production)
railway logs     # View production logs
```

## Tech Stack

| Layer | Tech | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.x |
| React | React | 19.x |
| CSS | Tailwind CSS v4 (PostCSS plugin, NOT config-based) | 4.x |
| Animations | framer-motion | 12.x |
| i18n | next-intl | 4.x |
| Icons | lucide-react | 0.574.x |
| Fonts | Google Fonts via next/font (Barlow Condensed, Inter, Nunito Sans, Ubuntu, Saira, Open Sans) | — |
| Deployment | Railway (Docker, standalone output) | — |

## Project Structure

```
src/
├── app/
│   ├── globals.css              # Design system tokens (@theme), base styles
│   ├── layout.tsx               # Root layout (fonts, metadata, JSON-LD)
│   ├── page.tsx                 # Root redirect → /nl
│   ├── robots.ts
│   ├── sitemap.ts
│   └── [locale]/
│       ├── layout.tsx           # Locale layout (NextIntlClientProvider, LayoutShell)
│       ├── LayoutShell.tsx      # Client: hides global nav/footer on homepage
│       ├── HomeContent.tsx      # Client: homepage composition (all home sections)
│       ├── page.tsx             # Homepage (server component, metadata)
│       ├── bedrijf/page.tsx     # Company page
│       ├── contact/page.tsx
│       ├── design/page.tsx
│       ├── labels/page.tsx
│       ├── offerte-aanvragen/page.tsx
│       ├── overige-informatie/page.tsx
│       ├── privacybeleid/page.tsx
│       ├── producten-samples/page.tsx
│       ├── shakebekers-drinkflessen/page.tsx
│       ├── stappenplan/page.tsx
│       ├── voedselveiligheidsplan/page.tsx
│       ├── voorwaarden/page.tsx
│       └── white-of-private-label/page.tsx
├── components/
│   ├── home/                    # Homepage-only components
│   │   ├── Hero.tsx             # Hero with gradient orbs, molecular SVGs, stats
│   │   ├── HomeNav.tsx          # Sticky nav (homepage-specific, minimal)
│   │   ├── HomeFooter.tsx       # Homepage footer (dark, 3-column)
│   │   ├── ProcessSteps.tsx     # Interactive 5-step process section
│   │   ├── About.tsx            # About section with decorative stacked text
│   │   ├── Merchandise.tsx      # Shakers & bottles cards
│   │   ├── BrochureCTA.tsx      # Turquoise CTA banner with email form
│   │   ├── TrustMarquee.tsx     # Scrolling partner/cert logos
│   │   └── CountUp.tsx          # Animated number counter
│   ├── layout/                  # Global layout (used on non-homepage pages)
│   │   ├── Header.tsx           # Full nav with dropdowns
│   │   ├── Footer.tsx           # Footer with brochure form + sitemap
│   │   ├── AnnouncementBar.tsx  # Dismissible turquoise banner
│   │   ├── LanguageSwitcher.tsx # NL/EN toggle button
│   │   └── WhatsAppButton.tsx   # Fixed WhatsApp FAB
│   ├── motion/
│   │   ├── FadeIn.tsx           # Scroll-triggered fade with direction
│   │   └── StaggerChildren.tsx  # Staggered reveal container
│   └── ui/
│       ├── Section.tsx          # Section wrapper (bg: white|gray|dark|accent)
│       ├── PageHero.tsx         # Page header for subpages
│       ├── SectionHeader.tsx    # Section title + subtitle
│       ├── IconCard.tsx
│       ├── CTASection.tsx
│       ├── CheckList.tsx
│       └── FormField.tsx
├── i18n/
│   ├── routing.ts               # Locale config, pathname mappings
│   ├── request.ts               # Server-side message loading
│   └── navigation.ts            # Locale-aware Link, useRouter, usePathname
├── lib/
│   ├── constants.ts             # Company info (address, email, phone, KVK, etc.)
│   └── fonts.ts                 # Google Font definitions + CSS variables
├── messages/
│   ├── nl/common.json           # Dutch translations (~247 keys)
│   └── en/common.json           # English translations (~247 keys)
└── middleware.ts                # next-intl locale middleware
```

## Key Architecture Decisions

### Homepage vs Subpages Layout

The homepage has its own nav (`HomeNav`) and footer (`HomeFooter`). Subpages use the global `Header` and `Footer`. This is controlled by `LayoutShell.tsx` which checks the pathname:

- Homepage (`/`, `/nl`, `/en`) → renders only `<main>{children}</main>` (homepage components include their own nav/footer)
- All other pages → renders `AnnouncementBar + Header + main + Footer + WhatsApp`

### Internationalization (i18n)

- **Locales:** `nl` (default), `en`
- **Prefix strategy:** `as-needed` — Dutch has no prefix (`/`), English uses `/en`
- **Translations:** `src/messages/{locale}/common.json`
- **Usage in components:** `useTranslations()` hook from next-intl
- **Navigation:** Always use `Link` from `@/i18n/navigation`, never from `next/link`
- **Pathnames:** Many routes have translated slugs (e.g., `/bedrijf` → `/company`). See `src/i18n/routing.ts` for the full map.

### Tailwind CSS v4

This project uses Tailwind v4 with the PostCSS plugin approach. There is **no `tailwind.config.js`**. All design tokens are defined in `src/app/globals.css` using the `@theme` directive:

```css
@theme {
  --color-primary: #5BCEE0;
  --color-accent: #5BCEE0;
  /* ... */
}
```

These become Tailwind utilities automatically (e.g., `text-primary`, `bg-accent`).

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary turquoise | `#5BCEE0` | Accent color, CTAs, highlights |
| Primary deep | `#2A8A9A` | Darker teal variant |
| Ink | `#0a0a0a` | Primary text, headings |
| Ink secondary | `#3a3a3a` | Body text |
| Ink muted | `#6b7280` | Secondary text, descriptions |
| Ink faint | `#9ca3af` | Placeholder, subtle text |
| Surface | `#f8f9fa` | Section backgrounds |
| Border | `#e5e7eb` | Borders, dividers |
| Dark bg | `#0a0a0a` | Footer background |

**Convention:** Use hardcoded hex values in homepage components (e.g., `text-[#5BCEE0]`). Subpages may use semantic Tailwind tokens (`text-accent`, `bg-surface-secondary`).

### Typography

| Role | Font | CSS Variable | Tailwind Class |
|------|------|-------------|----------------|
| Display/Headlines | Barlow Condensed (700-900) | `--font-display` | `font-display` |
| Body | Inter (400-600) | `--font-body` | `font-body` |
| Legacy heading | Nunito Sans | `--font-heading` | `font-heading` |
| Legacy secondary | Ubuntu | `--font-secondary` | `font-secondary` |
| Legacy accent | Open Sans | `--font-accent` | `font-accent` |

Homepage uses `font-display` for all headings (uppercase, bold). Body text uses `font-body`.

### Animations

All animations use framer-motion. Key patterns:

- **FadeIn component:** `<FadeIn direction="up" delay={0.2}>` — scroll-triggered
- **StaggerChildren:** Wrap items in `<StaggerChildren>` + `<StaggerItem>`
- **Clip-reveal headlines:** `overflow-hidden` parent + `translateY(100%)→0%` child
- **CountUp:** `requestAnimationFrame` with cubic easing, triggered by `useInView`
- **Parallax:** `useScroll` + `useTransform` on background decorations only (not content)
- **Respect reduced motion:** CSS `prefers-reduced-motion` rule in globals.css disables all animations

## Company Constants

Defined in `src/lib/constants.ts`:

```
Name: Supsuppliers
Address: Geograaf 3, 6921 EW Duiven
Email: info@supsuppliers.com
Phone: +31 (06) 34 56 81 91
KVK: 78295416
LinkedIn: linkedin.com/company/supsuppliers/
```

## Deployment

- **Platform:** Railway
- **Build:** Docker (see `Dockerfile`) with Next.js standalone output
- **Auto-deploy:** Pushes to `main` trigger Railway builds via GitHub integration
- **Manual deploy:** `railway up` from project root
- **Logs:** `railway logs` or `railway logs --build`
- **Config:** `railway.toml` forces Dockerfile builder (not Railpack)

## Common Patterns

### Adding a new page

1. Create `src/app/[locale]/my-page/page.tsx`
2. Add pathname to `src/i18n/routing.ts` (with translated slugs if needed)
3. Add translation keys to both `src/messages/nl/common.json` and `src/messages/en/common.json`
4. Use `PageHero` for the header, `Section` for content blocks

### Adding translations

Both `nl/common.json` and `en/common.json` must always have matching keys. Use nested namespaces:

```json
{
  "myPage": {
    "title": "...",
    "description": "..."
  }
}
```

Access with: `const t = useTranslations("myPage"); t("title")`

### Creating homepage sections

Homepage sections are standalone client components in `src/components/home/`. Each:
- Uses `"use client"` directive
- Handles its own scroll animations via framer-motion
- Includes `isNl` conditional for Dutch/English content
- Is composed in `src/app/[locale]/HomeContent.tsx`

## Do Not

- Do not use `next/link` directly — always use `Link` from `@/i18n/navigation`
- Do not create a `tailwind.config.js` — Tailwind v4 uses CSS `@theme` in globals.css
- Do not add parallax to content elements (causes overlap) — only parallax background decorations
- Do not use `bg-white/98` or similar fractional opacities for full-coverage backgrounds (appears transparent)
- Do not use `fixed` positioning for the nav when there's content above it (use `sticky` instead)
