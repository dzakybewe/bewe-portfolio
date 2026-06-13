# Portfolio Brief — Dzaky Ahmadin

Everything Claude Code (Opus) needs to build the portfolio in one shot.

## Files in this folder

| File | For who | Purpose |
|---|---|---|
| `PROMPT.md` | Claude Code | Paste this as your first message |
| `DESIGN.md` | Claude Code | Visual design system — colors, fonts, spacing, components |
| `STRUCTURE.md` | Claude Code | Every page, every section, all copy, all content |
| `TECH.md` | Claude Code | Stack, file structure, routing, animations, git rules, TODO list |
| `README.md` | You | This file — how to use the folder |

## How to use

1. Create an empty folder — `bewe-portfolio`
2. Copy all 5 files into it
3. Open VS Code in that folder
4. Open Claude Code (Opus)
5. Type `/caveman` to activate caveman mode (saves tokens)
6. Paste the full contents of `PROMPT.md` as your first message
7. Claude Code reads DESIGN, STRUCTURE, and TECH then builds the full site

## What gets built

**Homepage (single page scroll):**
- Hero — dark section, name, headline, photo placeholder, open to work badge
- About — bio + education left, at-a-glance right
- Experience — timeline of 4 roles
- Projects — numbered list, each links to its own page
- Stack — grouped grid (Mobile / Web / Backend / Tools)
- Writing — list of articles, each links to its own page
- Contact — dark section, email + socials
- Footer

**Inner pages:**
- `/projects/[slug]` — full case study for each of 6 projects
- `/writing/[slug]` — full article page for each writing entry (3 placeholders)

**Animations:**
- GSAP loading screen on homepage
- Scroll-triggered reveals on all sections
- Lenis smooth scroll
- Simple fade-in on inner pages

**Git:**
- 16 incremental commits in Conventional Commits format
- No Claude/AI attribution anywhere in commit history

## After Claude Code finishes

Claude Code will print a full TODO list. Manual steps:

1. **Photo** — export photo as PNG with transparent background → `public/photo.png`
2. **Logo** — design later → `public/logo.svg`, update `Nav.astro`
3. **Domain** — update canonical URL in `Layout.astro` and `astro.config.mjs`
4. **Project links** — add GitHub/live URLs in `src/content/projects/` markdown files
5. **Articles** — replace placeholder body text in `src/content/writing/`
6. **OG image** — design social preview image → `public/og-image.png`

## Adding new projects or articles later

**New project:** Create `src/content/projects/your-project-name.md` with the same frontmatter schema. The page at `/projects/your-project-name` generates automatically.

**New article:** Create `src/content/writing/your-article-slug.md`. The page at `/writing/your-article-slug` generates automatically and appears in the Writing list on the homepage.

## Connecting to GitHub after build

```bash
git remote add origin https://github.com/dzakybewe/bewe-portfolio.git
git push -u origin main
```

All 16 commits will appear in your GitHub history with their original timestamps.

## Deploying to Vercel

Connect your GitHub repo to Vercel dashboard, or run:

```bash
npm run build
vercel
```
