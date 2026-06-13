# STRUCTURE.md — All Pages, Sections & Content

All copy below is final. Use exactly as written. Do not use lorem ipsum anywhere.

---

## HOMEPAGE (`/`)

### Navigation

Fixed top nav. Transparent over Hero, gains background on scroll.

- **Logo (left):** Text — `Dzaky Ahmadin` in DM Serif Display
  <!-- TODO: Replace text logo with <img> when logo asset is ready. Place logo file at public/logo.svg -->
- **Links (right):** About · Experience · Projects · Stack · Writing · Contact
  Each is a smooth scroll anchor to its section id on the homepage.

---

### Section 1 — Hero

Background: `--dark`
Layout: Two columns (60% text left, 40% photo right)

**Eyebrow:**
```
Mobile & Web Developer · Jakarta
```

**Headline:**
```
I build apps that
ship to real users.
```
Italic on: *real users*

**Body:**
```
Flutter, Android, Next.js. I work across mobile and web —
from first commit to production. Currently open to full-time roles.
```

**Status badge:** `● Open to work`

**CTAs:**
- Primary button: `See my work` → smooth scroll to `#projects`
- Secondary link: `Read about me` → smooth scroll to `#about`

**Photo (right column):**
```html
<!-- TODO: Replace this placeholder with your actual photo once ready.
     Export your photo as a PNG with transparent background.
     Place the file at: public/photo.png
     Then replace the placeholder div below with:
     <img src="/photo.png" alt="Dzaky Ahmadin" class="w-full h-full object-cover object-top" />
-->
<div class="photo-placeholder">
  <span>photo</span>
</div>
```
Placeholder styles: background `#2A2010`, border `0.5px solid #3A3020`, roughly 300×380px desktop, label centered Inter 8px uppercase `#3A3020`.

---

### Section 2 — About

id="about"
Background: `--cream`
Layout: Two columns (1.4fr left, 1fr right)

**Left — Bio**

Eyebrow: `About`

Headline:
```
I care about what
gets built, and why.
```
Italic on: *why*

Body:
```
I'm a software developer from South Tangerang, now based in Jakarta.
I work across mobile and web — Flutter for production apps, Next.js for the web.
I like working on products that real people use, solving problems that actually matter.
I graduated from Brawijaya University with a degree in Computer Science,
and I've been building ever since.
```

**Left — Education** (below bio, separated by hairline)

Section label: `Education`

Entry 1:
- Institution: `Brawijaya University`
- Degree: `Bachelor of Computer Science`
- Period: `Aug 2021 – Jul 2025`
- GPA: `3.76 / 4.00`
- Note: `Thesis: Sentiment Analysis of MyPertamina App reviews using XGBoost & Word2Vec`

Entry 2:
- Institution: `Bangkit Academy 2024 — by Google, GoTo, Traveloka`
- Path: `Android Learning Path`
- Period: `Feb – Jun 2024`
- Note: `Built BiteWise, a personalized food recommendation app, collaborating with ML and Cloud teams`

**Right — At a Glance**

Section label: `At a glance`

| Label | Value |
|---|---|
| Based in | Jakarta, Indonesia |
| Degree | Computer Science |
| GPA | 3.76 / 4.00 |
| Primary stack | Flutter · Next.js |
| Languages | Bahasa Indonesia · English |
| Status | Available immediately |

---

### Section 3 — Experience

id="experience"
Background: `--cream-2`

Eyebrow: `Experience`

Headline:
```
Real work, real
production apps.
```
Italic on: *production apps*

**Entry 1** (newest first)
- Role: `Mobile Apps Developer Intern`
- Company: `PT Umma Bright Indonesia (Umeds)`
- Period: `Dec 2025 – Jun 2026`
- Type: `Remote`
- Highlights:
  - Developed and maintained a Flutter app with 500+ weekly active users across iOS and Android
  - Delivered 15+ features and 30+ bug fixes including OneSignal and PostHog integrations
  - Improved crash-free rate from 32.3% → 85.2% on Android, 57.9% → 89.2% on iOS

**Entry 2**
- Role: `Freelance Web Developer`
- Company: `PT Kartika Jasa Karya`
- Period: `Mar – Apr 2026`
- Type: `Remote`
- Highlights:
  - Delivered a bilingual (EN/ID) company profile website end-to-end using Next.js, Tailwind, next-intl
  - 6-page, 12-locale website delivered in under 3 weeks
  - Full SEO implementation: per-page metadata, OG tags, sitemap.xml, Google Search Console

**Entry 3**
- Role: `Freelance Mobile Developer`
- Company: `Sakera Kendari`
- Period: `Feb – Mar 2025`
- Type: `Remote`
- Highlights:
  - Built a Point-of-Sale and inventory management app from scratch using Flutter, BLoC, ObjectBox
  - 7 features: sales tracking, inventory management, financial reporting, expense recap, Excel export
  - Full scope delivered within 1 month as a solo project

**Entry 4**
- Role: `Mobile Engineer Intern`
- Company: `PT Digdaya Olah Teknologi Indonesia (DOT Indonesia)`
- Period: `Aug – Dec 2024`
- Type: `Remote`
- Highlights:
  - Developed production features on 2 client apps (Kalla Friends & Dotify) using Flutter
  - Implemented ObjectBox local persistence and bilingual (EN/ID) localization
  - Contributed to code reviews, feature development, and technical documentation

---

### Section 4 — Projects

id="projects"
Background: `--cream`

Eyebrow: `Projects`

Headline:
```
Things I've
built and shipped.
```
Italic on: *shipped*

Intro line: `Click any project to read the full case study.`
Font: Inter 10px --ink-light

**Project rows** (numbered vertical list, each row is an `<a>` tag linking to its page):

| # | Title | Subtitle | Tags | URL |
|---|---|---|---|---|
| 01 | Pangkasin | SaaS · Personal Project · 2025–ongoing | Next.js · Supabase · Tailwind | `/projects/pangkasin` |
| 02 | Kartika Jasa Karya | Web · Freelance · Mar–Apr 2026 | Next.js · Tailwind · next-intl | `/projects/kartika-jasa-karya` |
| 03 | Sakera Kendari — PoS | Mobile · Freelance · Feb–Mar 2025 | Flutter · BLoC · ObjectBox | `/projects/sakera-kendali` |
| 04 | BiteWise | Mobile · Bangkit Academy · May–Jun 2024 | Kotlin · Jetpack Compose | `/projects/bitewise` |
| 05 | Dotify | Mobile · PT DOT Indonesia · Nov 2024 | Flutter · Easy Localization | `/projects/dotify` |
| 06 | Kalla Friends | Mobile · PT DOT Indonesia · Aug–Dec 2024 | Flutter · ObjectBox · Formz | `/projects/kalla-friends` |

---

### Section 5 — Stack

id="stack"
Background: `--cream-2`

Eyebrow: `Stack`

Headline:
```
Tools I reach for
when things need to ship.
```
Italic on: *ship*

**Groups and items:**

Mobile: Flutter · Dart · Kotlin · Jetpack Compose · BLoC · Provider · ObjectBox · Firebase
Web: Next.js · Tailwind CSS · HTML · CSS · Laravel · next-intl
Backend & Data: Supabase · Firebase · SQL · Python
Tools: Git · Figma · Vercel · OneSignal · PostHog

Each item in grid: name (Inter 12px 500 --ink) + group label below (Inter 8px --ink-light).

---

### Section 6 — Writing

id="writing"
Background: `--cream`

Eyebrow: `Writing`

Headline:
```
Thinking out loud
about building things.
```
Italic on: *building things*

Intro line: `Occasional notes on development, product decisions, and shipping solo.`
Font: Inter 10px --ink-light

**Writing rows** (each row is an `<a>` tag linking to its article page):

<!-- TODO: Replace these placeholder articles with real ones when you start writing.
     Add new articles by creating .md files in src/content/writing/
     Article slugs become the URL automatically. -->

| Title | Date | URL |
|---|---|---|
| *Why I chose boring technology for Pangkasin* | Jun 2026 | `/writing/boring-technology` |
| *Building multi-tenant from day one* | May 2026 | `/writing/multi-tenant` |
| *Shipping solo — what nobody tells you* | Apr 2026 | `/writing/shipping-solo` |

Row design: same as Projects rows — number on left, title (DM Serif italic), date right, ↗ arrow.

---

### Section 7 — Contact

id="contact"
Background: `--dark`

Eyebrow: `Contact`

Headline:
```
If you're hiring someone
who ships, let's talk.
```
Italic on: *ships*

Body:
```
I'm looking for a full-time role in mobile or web development
where I can work on products that matter.
Jakarta-based, open to remote.
```

Links (each on own row, with ↗ arrow):
- `dzakybewe@gmail.com` → `mailto:dzakybewe@gmail.com`
- `linkedin.com/in/dzakybewe` → `https://www.linkedin.com/in/dzakybewe/`
- `github.com/dzakybewe` → `https://github.com/dzakybewe`
- `gitlab.com/dzakybewe` → `https://gitlab.com/dzakybewe`

---

### Footer

Background: `--dark-2`

Left: `Dzaky Ahmadin` — DM Serif Display 11px `#3A2E18`
Right: `Jakarta · 2026` — Inter 8px uppercase letter-spacing 1.5px `#3A2E18`

<!-- TODO: Add your domain to the footer once it's set up. e.g. dzakybewe.com -->

---

---

## PROJECT PAGES (`/projects/[slug]`)

Each project has its own page. Use Astro content collections with `.md` files in `src/content/projects/`.

### Page layout (all projects)

```
Nav (always scrolled state)
↓
Header section (bg --cream-2, py-16)
  max-w-[1100px] mx-auto
  ← Back to projects
  Eyebrow (type · period)
  Headline (project title, DM Serif 36px)
  Tags row
  Hairline
  One-line summary (Inter 11px --ink-mid)
↓
Content section (bg --cream, py-16)
  max-w-[720px] mx-auto
  Description paragraphs
  Highlights section (label + bulleted list)
  Links row
↓
Footer
```

### Project content

**Pangkasin** (`/projects/pangkasin`)
- Type: SaaS · Personal Project
- Period: 2025 – ongoing
- Tags: Next.js · Supabase · Tailwind · Vercel
- Summary: A multi-tenant SaaS platform for independent barbershops across Indonesia.
- Description:
  Pangkasin is a booking and management SaaS platform built for independent barbershops across Indonesia. Each barbershop gets its own subdomain. Built as a personal project to explore SaaS architecture — multi-tenant schema from day one, deliberate v1 scope, no setup fee for early adopters.

  The goal was to build something real and ship it, not just prototype it. Every decision was made with production in mind: multi-tenant database schema upfront, clean booking flow for guests without requiring accounts, and a simple admin dashboard that doesn't get in the way.
- Highlights:
  - Multi-tenant architecture with barbershop_id on all tables
  - Subdomain per shop (shop-name.pangkasin.com)
  - 3-step guest booking flow — no account required
  - Admin dashboard for managing team, services, and schedule
  - Barber availability management
  - Pricing: Rp 149k/month or Rp 1.49jt/year, no setup fee
- Links:
  - Live: `https://pangkasin.com`
  - GitHub: <!-- TODO: Add Pangkasin GitHub repo URL when repo is public -->

**Kartika Jasa Karya** (`/projects/kartika-jasa-karya`)
- Type: Web · Freelance
- Period: Mar – Apr 2026
- Tags: Next.js · Tailwind CSS · next-intl · Vercel
- Summary: A bilingual company profile website delivered solo in under 3 weeks.
- Description:
  A bilingual (EN/ID) company profile website delivered end-to-end as a solo freelance project for PT Kartika Jasa Karya. 6 pages, 12 locales, full SEO implementation. Handled everything: development, domain setup, deployment, and handoff. Delivered in under 3 weeks from kickoff to live.
- Highlights:
  - 12 locales using next-intl (EN/ID routing)
  - SEO: per-page metadata, OG tags, sitemap.xml, Google Search Console verification
  - Swiper.js fleet carousel
  - Custom domain setup and Vercel deployment
  - Delivered solo in under 3 weeks
- Links:
  - Live: <!-- TODO: Add Kartika Jasa Karya live URL -->
  - GitHub: <!-- TODO: Add repo URL if applicable -->

**Sakera Kendari — PoS & Inventory** (`/projects/sakera-kendali`)
- Type: Mobile · Freelance
- Period: Feb – Mar 2025
- Tags: Flutter · BLoC · ObjectBox · Dart
- Summary: A full Point-of-Sale and inventory management app built from scratch in 1 month.
- Description:
  A Point-of-Sale and inventory management system built from scratch for a small business in Kendari. Designed and developed solo, translating operational needs directly into working features. Covered the full scope: sales processing, inventory tracking, menu management, financial reporting, expense recap, and Excel export — all delivered within 1 month.
- Highlights:
  - 7 core features delivered
  - Sales tracking and inventory management
  - Financial reporting and expense recap
  - Excel export for records
  - Built solo, full scope in 1 month
- Links:
  - GitHub: <!-- TODO: Add Sakera Kendari repo URL if applicable -->

**BiteWise** (`/projects/bitewise`)
- Type: Mobile · Bangkit Academy
- Period: May – Jun 2024
- Tags: Kotlin · Jetpack Compose · Android
- Summary: A personalized food recommendation Android app built during Bangkit Academy 2024.
- Description:
  A personalized food recommendation Android app built as a capstone project during Bangkit Academy 2024 — a program by Google, GoTo, and Traveloka. Responsible for the entire mobile client built in Kotlin with Jetpack Compose, collaborating with Machine Learning and Cloud Computing cohort teams to integrate recommendation features through an intuitive UI.
- Highlights:
  - Cross-team collaboration (Mobile + ML + Cloud)
  - Jetpack Compose UI
  - Personalized recommendation integration
  - Bangkit Academy 2024 capstone
- Links:
  - GitHub: <!-- TODO: Add BiteWise GitHub repo URL -->

**Dotify** (`/projects/dotify`)
- Type: Mobile · PT DOT Indonesia
- Period: Nov 2024
- Tags: Flutter · Easy Localization · Dart
- Summary: Bilingual localization on a production employee time-tracking app.
- Description:
  Implemented bilingual (EN/ID) localization using Easy Localization on Dotify, a production Flutter employee time-tracking app at PT Digdaya Olah Teknologi Indonesia. Improved accessibility for a diverse user base across the app.
- Highlights:
  - Production Flutter app
  - Full EN/ID localization with Easy Localization
  - Improved accessibility for diverse users
- Links: — (internal/client app, no public link)

**Kalla Friends** (`/projects/kalla-friends`)
- Type: Mobile · PT DOT Indonesia
- Period: Aug – Dec 2024
- Tags: Flutter · ObjectBox · Formz · Dart
- Summary: Customer loyalty app for PT Hadji Kalla — database migration, form validation, UI slicing.
- Description:
  Developed features for Kalla Friends, a customer loyalty app for PT Hadji Kalla, built at PT Digdaya Olah Teknologi Indonesia. Migrated the local database to ObjectBox for improved performance, implemented form validation with Formz, and performed UI slicing from Figma designs.
- Highlights:
  - Production app for PT Hadji Kalla
  - Database migration to ObjectBox
  - Form validation with Formz
  - UI slicing from Figma
- Links: — (internal/client app, no public link)

---

---

## WRITING PAGES (`/writing/[slug]`)

Use Astro content collections with `.md` files in `src/content/writing/`.

### Page layout (all articles)

```
Nav (always scrolled state)
↓
Header section (bg --cream-2, py-16)
  max-w-[1100px] mx-auto
  ← Back to writing
  Eyebrow (date)
  Headline (article title, DM Serif 36px)
  Hairline
↓
Article body (bg --cream, py-16)
  max-w-[720px] mx-auto
  Body text Inter 13px 300, line-height 2.0
  Subheadings: DM Serif 20px
↓
Footer
```

### Placeholder articles

<!-- TODO: These are placeholder articles. Replace content with your real writing when ready.
     To add a new article: create a new .md file in src/content/writing/your-slug.md
     The filename becomes the URL slug automatically. -->

**boring-technology.md**
- Title: Why I chose boring technology for Pangkasin
- Date: Jun 2026
- Body: `This is a placeholder article. Replace this content with your real writing.`

**multi-tenant.md**
- Title: Building multi-tenant from day one
- Date: May 2026
- Body: `This is a placeholder article. Replace this content with your real writing.`

**shipping-solo.md**
- Title: Shipping solo — what nobody tells you
- Date: Apr 2026
- Body: `This is a placeholder article. Replace this content with your real writing.`
