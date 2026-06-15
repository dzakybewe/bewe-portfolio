# CLAUDE.md

Living document for the Dzaky Wardana portfolio. Read this before working on the project.

## Overview

Personal portfolio for **Dzaky Wardana** — mobile & web developer, Jakarta. Audience: company recruiters. Goal: prove real, shipped production work, not prototypes.

Design language: **"Warm Studio editorial"** — cream base, dark hero/contact, forest-teal accent, serif display headings on a sans body. Calm, print-like, generous whitespace.

Structure:
- `/` — single-page scroll homepage. Sections: Hero → About → Experience → Projects → Writing → Contact → Footer.
- `/projects/[slug]` — dynamic case-study pages from content collection.
- `/writing/[slug]` — dynamic article pages from content collection.

Loader (GSAP timeline) + scroll reveals run on the homepage only. Inner pages just fade in; nav is forced to its solid "scrolled" state.

## Tech stack (as built)

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Astro** `^6.4.6` | `output: 'static'` |
| Styling | **Tailwind CSS v4** `^4.3.1` | `@tailwindcss/vite` plugin — **no** `tailwind.config.*` file |
| Animation | **GSAP** `^3.15.0` | ScrollTrigger for reveals + nav scroll state |
| Smooth scroll | **Lenis** `^1.3.23` | package is `lenis` (`import Lenis from 'lenis'`), wired to GSAP ticker |
| Deploy | **Undecided** | static `dist/` — host-agnostic, any static host works |
| Node | `>=22.12.0` | |

Scripts: `npm run dev`, `npm run build`, `npm run preview`.

Key config facts:
- Tailwind v4 is set up via `vite: { plugins: [tailwindcss()] }` in `astro.config.mjs`. There is no JS config file — **all** design tokens live in `@theme {}` in [src/styles/global.css](src/styles/global.css).
- Content collections use the Astro 6 Content Layer API: schema in [src/content.config.ts](src/content.config.ts) (note: `src/content.config.ts`, not `src/content/config.ts`), `glob` loader, `render(entry)` from `astro:content`.
- **Never** add an unlayered `* { margin:0; padding:0 }` reset to `global.css`. Unlayered CSS beats Tailwind v4's `@layer` utilities and silently cancels every spacing utility. Tailwind preflight already resets these.

## Design system (as implemented)

Tokens declared once in `@theme {}` — Tailwind v4 emits both utility classes (`bg-cream`, `text-ink-mid`, `font-serif`, `max-w-container`) and CSS vars (`var(--color-cream)`).

### Colors

| Token | Hex | Use |
|---|---|---|
| `cream` | `#FDFBF6` | page base |
| `cream-2` | `#F5F0E8` | alt section bg, row hover |
| `ink` | `#1C1208` | primary text |
| `ink-mid` | `#6A5540` | body text |
| `ink-light` | `#A89070` | muted text, metadata |
| `rule` | `#E2D5C0` | hairlines, borders |
| `accent` | `#2A6B5E` | forest teal — links, eyebrows, emphasis |
| `accent-light` | `#E2F2EF` | tag/badge fill |
| `accent-border` | `#5AA090` | tag/badge border |
| `dark` | `#1C1208` | hero + contact bg, loader |
| `dark-2` | `#130E06` | footer bg |
| `dark-rule` | `#2A2010` | dark-section hairlines |
| `dark-text` | `#C9B99A` | text on dark |
| `dark-muted` | `#5A4A30` | muted text on dark |

### Fonts

- `font-serif` → `"DM Serif Display", Georgia, serif` — headlines only. Italic on exactly one emphasized word per headline.
- `font-sans` → `"Inter", sans-serif` — everything else. Weights 300/400/500.
- Loaded via Google Fonts in [src/layouts/Layout.astro](src/layouts/Layout.astro).

### Type scale (actual)

**16px body minimum, 14px hard floor** — never go below 14px on any text (WCAG/readability rule). Current sizes:

| Element | Size |
|---|---|
| Hero headline | 44px desktop / 34px mobile |
| Section headlines | 28px desktop / 26px mobile |
| Inner-page H1 | 36px desktop / 26px mobile |
| Prose H2/H3 | 20px |
| Body / prose | 16px |
| Nav links, back-link, metadata/dates | 13px |
| Eyebrow / section-label | 11px |
| Tags | 10px |
| Case-links | 10px |

Body/prose line-height 1.8–2; light weight (300) for long-form. Container widths: `max-w-container` = 1100px, `max-w-content` = 720px (inner pages).

### Layout pattern

Every section: full-width `<section>` (bg edge-to-edge) + inner `max-w-container mx-auto px-7 lg:px-8`. Inner pages use `max-w-content`.

### Nav states

State-driven CSS (no JS color toggling). Default = transparent over dark hero → light text. `.scrolled` / `.menu-open` → cream bg + dark ink text. JS only toggles the `scrolled`/`menu-open` classes.

## Commit convention

**Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, …).

**Hard rule — no AI attribution.** Never add `Co-authored-by`, `Co-author`, or any Claude/AI/tool attribution to commit messages or git config. Commits must appear as solely Dzaky's work. Git identity: `dzakybewe <dzakybewe@gmail.com>`.

## Adding a new project

Drop a `.md` file in [src/content/projects/](src/content/projects/). Slug = filename. It auto-appears on the homepage Projects list and gets a `/projects/[slug]` page. Frontmatter schema ([src/content.config.ts](src/content.config.ts)):

```yaml
---
title: Project Name
subtitle: SaaS · Personal Project        # type/role line
period: 2025 – ongoing
order: 1                                  # controls list order (ascending)
tags:
  - Next.js
  - Supabase
summary: One-line description.
highlights:
  - Bullet shown on the case page
  - 'Quote any value with a colon: like pricing'   # YAML: colon-in-string needs quotes
links:                                    # optional — omit the whole key if none
  live: https://example.com
  github: https://github.com/...
  gitlab: https://gitlab.com/...
---

Markdown body — rendered into the case page (.prose-body styles).
```

Gotchas:
- `links` is an optional object. If a project has no links, omit the `links:` key entirely — do **not** leave it present with only comments (parses as `null`, fails schema).
- Any frontmatter string containing `:` must be quoted.

## Adding a new article

Drop a `.md` file in [src/content/writing/](src/content/writing/). Auto-appears on the homepage Writing list and gets a `/writing/[slug]` page. Schema:

```yaml
---
title: Article Title
date: Jun 2026
order: 1            # ascending
---

Markdown body — rendered into the article page.
```

## Pending TODOs

- [ ] **Photo** — replace placeholder in [Hero.astro](src/components/Hero.astro). Add `public/photo.png`, swap the `.photo-placeholder` div for `<img src="/photo.png" alt="Dzaky Wardana" …>`.
- [ ] **Logo** — replace text logo in [Nav.astro](src/components/Nav.astro) with `public/logo.svg` when ready.
- [ ] **Domain** — set real domain in: `site:` in `astro.config.mjs`, canonical/OG tags in [Layout.astro](src/layouts/Layout.astro), and footer in [Footer.astro](src/components/Footer.astro).
- [ ] **OG image** — add `public/og-image.png`, wire `og:image` in [Layout.astro](src/layouts/Layout.astro).
- [ ] **Project links** — add real repo/live URLs: Pangkasin (GitHub), BiteWise (GitHub), Kartika Jasa Karya (live + repo), Sakera Kendari (repo). See per-file TODOs.
- [ ] **Articles** — 3 placeholder articles (`boring-technology`, `multi-tenant`, `shipping-solo`) — replace bodies with real writing.
- [ ] **Dark mode** (optional) — hook left in [global.css](src/styles/global.css) if wanted later.
