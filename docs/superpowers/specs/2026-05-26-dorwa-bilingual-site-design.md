# DORWA bilingual agency site — design

DORWA (ذروة) is a full-service advertising / video-production agency based in
Algeria (Ouargla / Hassi Messaoud, serving the country). We are rebuilding their
public site on top of the existing Next.js 15 + Tailwind 4 template currently in
this repo (originally Cruip "Open" template, lightly forked as "HZ Brand").

## Decisions

- **Languages:** Bilingual EN + AR with a user toggle. RTL handling required.
- **i18n:** `next-intl` with locale segments (`/en/...`, `/ar/...`). Default
  redirect to `/en` on first visit. `<html lang dir>` switches per locale.
- **Arabic typography:** IBM Plex Sans Arabic via `next/font` (Tajawal as
  fallback). Latin stays on Nacelle.
- **RTL:** Tailwind 4 logical properties (`ps-*`, `pe-*`, `ms-*`, `me-*`) +
  `[dir="rtl"]` flips where needed.
- **Visual style:** TBD. Phase 0 builds a `/styles` route comparing four
  variants (A: pure B&W cinematic, B: black + warm gold, C: red gradient
  retuned, D: black + cool cyan). Each is a Tailwind theme swappable via CSS
  vars `--accent / --bg / --surface / ...`. Once user picks, the other three
  are deleted and the winner propagates.
- **Pages:** `/`, `/about`, `/services`, `/work`, `/contact`. Sign-in / sign-up
  / `(auth)` route group is removed (agency site, no accounts).
- **Hero video:** keep the template's click-to-play modal pattern.
- **`/work`:** filterable grid of project thumbnails (categories: Video,
  Social, 3D, Design, Web) opening videos in a modal. Reuses the testimonial
  filter button pattern from the template.
- **Contact:** bilingual form posting to `app/api/contact/route.ts` (stub —
  validates, logs, returns 200; later swap to Resend behind a single env var)
  plus prominent WhatsApp deep-link to +213 699 504 214, mailto:, tel:.
- **Social proof:** keep the template's masonry testimonial layout with
  placeholder quotes; categories become Video / Social / 3D / Design / Web.
  Client provides real quotes later.
- **Content:** pulled from dorwaprod.com where accessible (services copy,
  partner logos, team names, contact info, socials). Approximate AR
  translations; client polishes.

## Information architecture

```
/[locale]/                    Home — hero (modal video) + services + workflow
                              + testimonials + CTA
/[locale]/about               Story, values, team
/[locale]/services            5 service blocks (anchor nav)
/[locale]/work                Filterable project grid + video modal
/[locale]/contact             Form + WhatsApp + tel: + mailto: + address
/[locale]/styles              (Phase 0 only, unlinked) 4-variant comparison
```

Header: logo + nav + language toggle (EN / ع) + "Get a Quote" → /contact.
Footer: Studio (address, phone, email, WhatsApp) / Services / Follow (FB, IG,
LinkedIn, YouTube, TikTok) + bilingual copyright.

## File map

**Rewritten:**
- `components/hero-home.tsx` — bilingual DORWA hero + modal showreel
- `components/workflows.tsx` — Discover → Produce → Deliver
- `components/features.tsx` — 5 services (Video, Social, 3D, Design, Web)
- `components/testimonials.tsx` — categories adapted to DORWA services
- `components/cta.tsx` — "Let's tell your story" → /contact
- `components/ui/header.tsx` — drop Sign In, add lang toggle + Get-a-Quote CTA
- `components/ui/footer.tsx` — Studio/Services/Follow columns, real contact
- `components/ui/logo.tsx` — DORWA mark
- `app/[locale]/page.tsx` — Home composition
- `app/[locale]/about/page.tsx`, `services/page.tsx`, `contact/page.tsx`

**New:**
- `app/[locale]/layout.tsx` — wraps with `NextIntlClientProvider`, sets
  `<html lang dir>`
- `app/[locale]/work/page.tsx` + `components/work-grid.tsx`
- `app/[locale]/styles/page.tsx` (Phase 0, deleted after pick)
- `app/api/contact/route.ts` — stub form handler
- `components/language-toggle.tsx`
- `i18n.ts`, `middleware.ts`, `messages/en.json`, `messages/ar.json`
- `lib/services.ts`, `lib/projects.ts`, `lib/team.ts` — typed content sources

**Deleted:**
- `app/(auth)/` and any signin/signup references in nav / footer

## Data model

UI strings (nav, buttons, form labels, page titles) live in
`messages/{en,ar}.json` and reach components via `useTranslations()`.

Editorial content (service descriptions, team bios, project metadata) lives in
typed TS objects in `lib/`. Each entry holds both EN and AR strings:

```ts
type Service = {
  slug: 'video' | 'social' | '3d' | 'design' | 'web';
  title: { en: string; ar: string };
  blurb: { en: string; ar: string };
  bullets: { en: string[]; ar: string[] };
};
```

Rationale: long-form content next to its consumer; JSON message files stay
small and reviewable for translators.

## Verification

- `pnpm dev` for live preview throughout
- Walk the site in browser after Phase 0 style pick (user chooses variant)
- `pnpm build` at the end — must pass with zero type errors

## Phases

1. **Phase 0** — Foundation (next-intl setup, fonts, route restructure,
   remove auth, RTL plumbing, language toggle) + Style Explorer page
2. **Phase 1** — User picks style variant from `/styles`; we delete the other
   three and propagate the winner
3. **Phase 2** — Home, About, Services, Work, Contact rebuilt with real content
4. **Phase 3** — Asset pull (partner logos, project thumbs), final logo,
   build verification
