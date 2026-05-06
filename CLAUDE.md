# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint (ESLint 9 + Next.js config)
```

## Architecture

**Next.js 16 App Router** landing page for the Quassama mobile app, using the `app/[locale]/` dynamic segment for internationalization.

### Routing & i18n

- `next-intl 4` handles i18n with **3 locales: `en`, `fr`, `ar`** (default: `en`)
- Locale prefix strategy is `'never'` — URLs have no `/en/`, `/fr/` prefix; locale is detected by middleware in `proxy.ts`
- `i18n/routing.ts` — defines locales and exports typed navigation utilities (`Link`, `redirect`, `usePathname`, `useRouter`) — always import these instead of `next/navigation`
- `i18n/request.ts` — server-side config mapping locale → `messages/*.json`
- `messages/en.json`, `messages/fr.json`, `messages/ar.json` — nested JSON translation keys
- Arabic RTL is applied in `app/[locale]/layout.tsx` via `dir={locale === "ar" ? "rtl" : "ltr"}`

### Components

All 12 components live in `app/components/` and follow these conventions:
- **`'use client'`** directive on every component (required for Framer Motion + `useTranslations`)
- **`useTranslations('namespace')`** from `next-intl` for all user-facing strings
- **Framer Motion** for all animations: `containerVariants` with `staggerChildren`, `itemVariants`, `whileInView`, `whileHover`
- **Tailwind CSS 4** utility classes only — no CSS modules; theme uses `@theme` directive in `globals.css`

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary teal | `#3A7068` | Headers, accents |
| Dark teal | `#2A524D` | Text on light backgrounds |
| Muted teal | `#457B74` | Highlighted cards |
| Cream | `#F3E5AB` | CTAs, highlights |

### Key Files

- `app/[locale]/layout.tsx` — root layout; wraps with `NextIntlClientProvider`, validates locale
- `app/[locale]/page.tsx` — home page; assembles all section components in order
- `proxy.ts` — Next.js middleware; runs `next-intl` locale detection on all non-static routes
- `next.config.ts` — wraps config with `createNextIntlPlugin`
- `globals.css` — Tailwind 4 `@import "tailwindcss"` + `@theme` block for Geist fonts and CSS vars

### Adding a New Section

1. Create `app/components/MySection.tsx` with `'use client'` and `useTranslations('mySection')`
2. Add translation keys to all three `messages/*.json` files
3. Import and place the component in `app/[locale]/page.tsx`

### Adding a New Language

1. Add the locale to the `locales` array in `i18n/routing.ts`
2. Add the dynamic import branch in `i18n/request.ts`
3. Create the corresponding `messages/<locale>.json`
4. Add the locale option to `app/components/LanguageSwitcher.tsx`
