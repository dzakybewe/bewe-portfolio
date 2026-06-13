# TECH.md — Stack, File Structure, Routing, Animations & Git Rules

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro (latest stable) | Static output, no React/Vue |
| Styling | Tailwind CSS v4 (latest) | `@tailwindcss/vite` plugin; design tokens via `@theme {}` in global.css — no config file |
| Animations | GSAP (latest) | ScrollTrigger plugin included |
| Smooth scroll | Lenis (latest) | `lenis` package |
| Fonts | Google Fonts | DM Serif Display + Inter |
| Content | Astro Content Collections | .md files for projects and writing |
| Deployment | Vercel | Static output |

---

## Setup commands

Scaffold directly into the current directory (do not create a subfolder):

```bash
npm create astro@latest . -- --template minimal
npm install tailwindcss @tailwindcss/vite
npm install gsap lenis
```

The `.` is critical — it tells Astro to scaffold into the current folder, not create a new one. No React, no Vue, no other frameworks. Vanilla JS only inside `<script>` tags.

Tailwind v4 uses the `@tailwindcss/vite` plugin (added to `astro.config.mjs`) and `@import "tailwindcss"` in `global.css` — there is no `tailwind.config.mjs`. All design tokens are declared in a `@theme {}` block in `global.css`. Use the latest version of every dependency; do not pin to old majors.

---

## File structure

```
bewe-portfolio/
├── public/
│   ├── photo.png        <!-- TODO: Replace with real cut-out photo (PNG, transparent bg) -->
│   └── logo.svg         <!-- TODO: Add logo file here when designed. Currently using text logo. -->
│
├── src/
│   ├── content.config.ts          ← Astro content collection schema (Content Layer API)
│   ├── content/
│   │   ├── projects/
│   │   │   ├── pangkasin.md
│   │   │   ├── kartika-jasa-karya.md
│   │   │   ├── sakera-kendali.md
│   │   │   ├── bitewise.md
│   │   │   ├── dotify.md
│   │   │   └── kalla-friends.md
│   │   └── writing/
│   │       ├── boring-technology.md
│   │       ├── multi-tenant.md
│   │       └── shipping-solo.md
│   │
│   ├── layouts/
│   │   └── Layout.astro           ← base HTML shell, fonts, meta, loader, Lenis init
│   │
│   ├── pages/
│   │   ├── index.astro            ← homepage (single page scroll)
│   │   ├── projects/
│   │   │   └── [slug].astro       ← dynamic project pages
│   │   └── writing/
│   │       └── [slug].astro       ← dynamic article pages
│   │
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Stack.astro
│   │   ├── Writing.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   │
│   └── styles/
│       └── global.css             ← CSS custom properties, base resets, Lenis styles
│
├── astro.config.mjs        ← Astro config + @tailwindcss/vite plugin
└── package.json
```

---

## Astro content collections (`src/content.config.ts`)

Astro 6 uses the Content Layer API — collections load via the `glob` loader and the
config lives at `src/content.config.ts`. Markdown bodies are rendered with
`render(entry)` from `astro:content`.

```ts
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),       // e.g. "SaaS · Personal Project"
    period: z.string(),         // e.g. "2025 – ongoing"
    tags: z.array(z.string()),
    summary: z.string(),
    order: z.number(),          // homepage list order (01, 02, …)
    highlights: z.array(z.string()),
    links: z.object({
      live: z.string().optional(),
      github: z.string().optional(),
      gitlab: z.string().optional(),
    }).optional(),
  }),
})

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    order: z.number(),          // homepage list order (newest first)
  }),
})

export const collections = { projects, writing }
```

---

## Design tokens & base styles (`src/styles/global.css`)

Tailwind v4: import Tailwind, declare all tokens in `@theme {}`. This generates both utility classes (`bg-cream`, `text-ink-mid`, `font-serif`, `max-w-container`) and CSS variables (`var(--color-cream)`, `var(--font-serif)`, `var(--container-content)`) usable in custom CSS below.

```css
@import "tailwindcss";

@theme {
  /* colors → bg-/text-/border- utilities + var(--color-*) */
  --color-cream: #FDFBF6;
  --color-cream-2: #F5F0E8;
  --color-ink: #1C1208;
  --color-ink-mid: #6A5540;
  --color-ink-light: #A89070;
  --color-rule: #E2D5C0;
  --color-accent: #2A6B5E;
  --color-accent-light: #E2F2EF;
  --color-accent-border: #5AA090;
  --color-dark: #1C1208;
  --color-dark-2: #130E06;
  --color-dark-rule: #2A2010;
  --color-dark-text: #C9B99A;
  --color-dark-muted: #5A4A30;

  /* fonts → font-serif / font-sans */
  --font-serif: "DM Serif Display", Georgia, serif;
  --font-sans: "Inter", sans-serif;

  /* container widths → max-w-container / max-w-content */
  --container-container: 1100px;
  --container-content: 720px;
}

/* TODO: Add dark mode overrides here if dark mode support is wanted later */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-sans);
}

/* Lenis */
html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }

/* Loader */
#loader {
  position: fixed;
  inset: 0;
  background: var(--color-dark);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
#loader-name {
  font-family: var(--font-serif);
  font-size: 24px;
  color: var(--color-dark-text);
  opacity: 0;
}
#loader-bar-track {
  width: 160px;
  height: 0.5px;
  background: var(--color-dark-rule);
}
#loader-bar {
  height: 100%;
  width: 0%;
  background: var(--color-accent);
}
```

---

## Responsive container pattern

Every section must use this two-layer pattern:

```html
<!-- Outer: full width, background spans edge to edge on any screen size -->
<section class="bg-cream w-full py-12 lg:py-20">

  <!-- Inner: constrained and centered, never stretches beyond 1100px -->
  <div class="max-w-[1100px] mx-auto px-7 lg:px-8">
    <!-- content here -->
  </div>

</section>
```

Inner page content uses `max-w-[720px]` for comfortable reading width. Never use fixed pixel widths on individual elements.

---

## Astro config (`astro.config.mjs`)

```js
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  // TODO: Add your site URL here once your domain is set up
  // site: 'https://yourdomain.com',
})
```

---

## Vercel config (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

## Animation specs

### Loading screen (homepage only)

```js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  onComplete: () => {
    document.getElementById('loader').style.display = 'none'
    revealHero()
  }
})

tl.to('#loader-name', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
  .to('#loader-bar', { width: '100%', duration: 1.0, ease: 'power1.inOut' }, '-=0.2')
  .to('#loader', { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.2')
```

### Hero reveal (after loader)

```js
function revealHero() {
  gsap.from(['.nav', '.hero-eyebrow', '.hero-headline', '.hero-body', '.hero-ctas', '.hero-photo'], {
    opacity: 0,
    y: 16,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.08,
  })
}
```

### Scroll-triggered reveals

```js
function revealOnScroll(targets, trigger) {
  gsap.from(targets, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.07,
    scrollTrigger: {
      trigger: trigger,
      start: 'top 80%',
      once: true,
    },
  })
}

revealOnScroll(['.about-headline', '.about-body', '.education-entry', '.glance-row'], '#about')
revealOnScroll('.experience-entry', '#experience')
revealOnScroll(['.projects-headline', '.project-row'], '#projects')
revealOnScroll('.stack-item', '#stack')
revealOnScroll(['.writing-headline', '.writing-row'], '#writing')
revealOnScroll(['.contact-headline', '.contact-body', '.contact-link'], '#contact')
```

### Nav scroll behavior

```js
ScrollTrigger.create({
  start: 'top -80',
  onEnter: () => document.querySelector('nav').classList.add('scrolled'),
  onLeaveBack: () => document.querySelector('nav').classList.remove('scrolled'),
})

const sections = ['about', 'experience', 'projects', 'stack', 'writing', 'contact']
sections.forEach(id => {
  ScrollTrigger.create({
    trigger: `#${id}`,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => setActiveNav(id),
    onEnterBack: () => setActiveNav(id),
  })
})

function setActiveNav(id) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'))
  document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active')
}
```

### Lenis setup (in Layout.astro)

```js
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)
```

### Inner page fade-in (project and writing pages)

```js
gsap.from('main', { opacity: 0, y: 12, duration: 0.5, ease: 'power2.out' })
```

---

## Meta tags (`Layout.astro`)

```html
<title>Dzaky Ahmadin — Mobile & Web Developer</title>
<meta name="description" content="Mobile and web developer from Jakarta. Flutter, Next.js, real production apps. Open to full-time roles." />
<meta name="author" content="Dzaky Ahmadin Berkah Wardana" />
<meta property="og:title" content="Dzaky Ahmadin — Mobile & Web Developer" />
<meta property="og:description" content="Mobile and web developer from Jakarta. Open to full-time roles." />
<meta property="og:type" content="website" />
<!-- TODO: Replace placeholder domain with your real domain once set up -->
<link rel="canonical" href="https://placeholder.com" />
<!-- TODO: Add og:image once you have a social preview image. Place at public/og-image.png -->
<!-- <meta property="og:image" content="https://yourdomain.com/og-image.png" /> -->
```

---

## Git & commit rules

Commit work incrementally — one commit per logical unit. Do not make one giant commit at the end.

**Commit order:**
1. `chore: init astro project with tailwind, gsap, lenis`
2. `feat: add global css tokens and tailwind config`
3. `feat: add base layout and google fonts`
4. `feat: add nav component`
5. `feat: add hero section`
6. `feat: add about section`
7. `feat: add experience section`
8. `feat: add projects section`
9. `feat: add stack section`
10. `feat: add writing section`
11. `feat: add contact section and footer`
12. `feat: add project pages with dynamic routing`
13. `feat: add writing pages with dynamic routing`
14. `feat: add gsap loading screen and scroll animations`
15. `feat: add lenis smooth scroll`
16. `chore: add vercel config`

**Commit message rules:**
- Use Conventional Commits format: `type(scope): description`
- Types: `feat`, `fix`, `chore`, `style`, `refactor`, `docs`
- Subject line: lowercase, no period at the end, max 72 characters
- Never add `Co-authored-by`, `Co-author`, or any Claude/AI attribution in commit messages or git config
- Commits must appear as solely Dzaky's work — no AI co-author, no tool attribution, nothing

---

## Complete TODO checklist

After building, grep the entire codebase for `TODO` and print every result with file path and line number.

| # | Location | What to do |
|---|---|---|
| 1 | `public/photo.png` | Replace with real cut-out photo (PNG, transparent background) |
| 2 | `public/logo.svg` | Add logo file when designed. Nav currently uses text. |
| 3 | `Nav.astro` | Swap text logo with `<img src="/logo.svg">` when logo is ready |
| 4 | `astro.config.mjs` | Add `site: 'https://yourdomain.com'` once domain is set up |
| 5 | `Layout.astro` (canonical) | Replace `https://placeholder.com` with real domain |
| 6 | `Layout.astro` (og:image) | Uncomment og:image tag and add real social preview image |
| 7 | `pangkasin.md` | Add GitHub repo URL when repo is public |
| 8 | `kartika-jasa-karya.md` | Add live site URL and GitHub repo URL |
| 9 | `sakera-kendali.md` | Add GitHub repo URL if applicable |
| 10 | `bitewise.md` | Add GitHub repo URL |
| 11 | `boring-technology.md` | Replace placeholder body with real article content |
| 12 | `multi-tenant.md` | Replace placeholder body with real article content |
| 13 | `shipping-solo.md` | Replace placeholder body with real article content |
| 14 | `Footer.astro` | Add your domain to footer text once set up |
| 15 | `global.css` | Add dark mode styles here if dark mode support is wanted later |

---

## Notes for Claude Code

- No React, no Vue. Vanilla JS only.
- All JS in `<script>` tags inside `.astro` files. Use Astro module scripts (default) not `is:inline` unless necessary.
- Loader runs on homepage only (`index.astro`), not on inner pages.
- Inner pages get a simple fade-in instead of the full loader sequence.
- Nav on inner pages is always in "scrolled" state since there's no dark Hero to sit over.
- Project and writing data is defined in `.md` frontmatter in `src/content/` — do not hardcode in components.
- Test: `npm run build` must complete with zero errors before finishing.
- After build, grep for `TODO` and print every result with file path and line number.
