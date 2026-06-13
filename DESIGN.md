# DESIGN.md — Visual Design System

## Overall vibe

Warm Studio editorial. Feels like a thoughtful founder's note, not a resume. Cream base, serif headlines, clean sans-serif body, one forest teal accent. Structured but personal. Recruiters should feel like they are reading something considered, not skimming a template.

---

## Color palette

Define these as CSS custom properties in `src/styles/global.css` AND as Tailwind theme extensions.

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FDFBF6` | Page background (homepage) |
| `--cream-2` | `#F5F0E8` | Alternate section bg (Experience, Stack, article pages) |
| `--ink` | `#1C1208` | Primary text, headings |
| `--ink-mid` | `#6A5540` | Body text, descriptions |
| `--ink-light` | `#A89070` | Labels, metadata, dates, muted text |
| `--rule` | `#E2D5C0` | Dividers, hairlines, borders |
| `--accent` | `#2A6B5E` | Forest Teal — eyebrows, tags, links, hover states, italic accent moments |
| `--accent-light` | `#E2F2EF` | Accent background for badges/tags |
| `--accent-border` | `#5AA090` | Accent border for badges/tags |
| `--dark` | `#1C1208` | Dark section backgrounds (Hero, Contact) |
| `--dark-2` | `#130E06` | Footer background |
| `--dark-rule` | `#2A2010` | Dividers inside dark sections |
| `--dark-text` | `#C9B99A` | Body text on dark backgrounds |
| `--dark-muted` | `#5A4A30` | Muted text on dark backgrounds |

---

## Typography

### Fonts
- **DM Serif Display** — all headlines, section titles, project titles, pull quotes, nav logo
- **Inter** — everything else: body, labels, nav links, tags, metadata, buttons

Import both from Google Fonts in `Layout.astro`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

### Type scale

| Role | Font | Size desktop | Size mobile | Weight | Notes |
|---|---|---|---|---|---|
| Hero headline | DM Serif Display | 44px | 30px | 400 | Italic on one key word |
| Section headline | DM Serif Display | 28px | 22px | 400 | Italic on one key word |
| Project/Article page headline | DM Serif Display | 36px | 26px | 400 | |
| Sub-headline | DM Serif Display | 18px | 16px | 400 | |
| Nav logo (text) | DM Serif Display | 15px | 14px | 400 | |
| Body | Inter | 11px | 11px | 300 | Line-height 1.9 |
| Body large (article) | Inter | 13px | 12px | 300 | Line-height 2.0 |
| Label / eyebrow | Inter | 8px | 8px | 400 | Uppercase, letter-spacing 3px, accent color |
| Nav links | Inter | 9px | — | 400 | Uppercase, letter-spacing 2px |
| Tag | Inter | 7px | 7px | 400 | Uppercase, letter-spacing 1.5px |
| Metadata / date | Inter | 9px | 9px | 400 | ink-light color |

### Italic rule
Use DM Serif Display italic variant on exactly one key word or short phrase per section headline. Creates personality without overdoing it. Never italic an entire headline.

---

## Spacing

Base unit: 4px. Use multiples throughout.

- **Page container:** `max-w-[1100px] mx-auto` — always. Every section wraps content in this. Outer section element is full-width (so backgrounds stretch edge to edge), inner container is constrained and centered.
- **Horizontal padding:** `px-7` mobile, `lg:px-0` inside the max-w container
- **Section vertical padding:** `py-12 lg:py-20`
- **Between eyebrow and headline:** `mb-3`
- **Between headline and body:** `mb-3`
- **Between body and CTA/content:** `mb-6`

---

## Layout patterns

### Two-column (About, Hero)
Tailwind: `grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10`

### Experience timeline list
```
Each entry: flex row, justify-content space-between
Left: role (DM Serif 15px) + company (Inter 10px ink-mid) + bullet highlights (Inter 9px ink-light)
Right: period (Inter 8px ink-light, right-aligned) + Remote badge
Separated by: border-bottom 0.5px solid --rule, padding 18px 0
No dots or connecting lines — clean list only
```

### Projects / Writing list rows
```
Each row: <a> tag, flex, justify-content space-between, align-items center
padding: 18px 0
border-bottom: 0.5px solid --rule
gap: 16px

Left: number (DM Serif 13px --rule) + title (DM Serif 16px --ink) + subtitle (Inter 9px --ink-light)
Right: tech tags (flex gap 6px) + arrow ↗ (14px --rule → --accent on hover)

Hover: background transitions to --cream-2, arrow color to --accent (0.2s ease)
```

### Stack grid
```
display: grid
grid-template-columns: repeat(4, 1fr) desktop / repeat(2, 1fr) mobile
gap: 1px
background: --rule  ← creates the hairline grid lines between items
border: 0.5px solid --rule
Each item: background --cream-2, padding 16px
```

### Project / Article page layout
```
Background: --cream-2
Max content width: max-w-[720px] mx-auto (narrower than homepage for readability)
Back link at top: ← Back to projects / ← Back
Page headline: DM Serif 36px
Meta row: tags + date, Inter 9px --ink-light
Hairline divider
Body content
```

---

## Components

### Eyebrow (section opener)
```
display: flex, align-items: center, gap: 8px
font: Inter 8px uppercase letter-spacing 3px
color: --accent
margin-bottom: 14px
line element: width 24px, height 0.5px, background --accent
```

### Section label (with extending rule to the right)
```
display: flex, align-items: center, gap: 8px
font: Inter 8px uppercase letter-spacing 3px
color: --ink-light
margin-bottom: 16px
::after: content '', flex: 1, height: 0.5px, background: --rule
```

### Status badge
```
font: Inter 9px
color: --accent
background: --accent-light
border: 0.5px solid --accent-border
padding: 4px 14px
border-radius: 20px
dot: 5px circle, background --accent
```

### Tag / tech pill
```
font: Inter 7px uppercase letter-spacing 1.5px
color: --accent
background: --accent-light
border: 0.5px solid --accent-border
padding: 3px 8px
border-radius: 2px
```

### Primary CTA button
```
font: Inter 9px uppercase letter-spacing 2px
color: --cream
background: --ink
padding: 10px 22px
border-radius: 0  ← square edges, editorial feel
hover: opacity 0.85
```

### Hairline divider
```css
border-top: 0.5px solid var(--rule);
```

### Nav (fixed, top)
```
Background: transparent initially
On scroll past hero: background rgba(253,251,246,0.88), backdrop-filter blur(8px), border-bottom 0.5px solid --rule
Transition: all 0.3s ease

Left: text logo "Dzaky Ahmadin" in DM Serif Display 15px --ink
Right: links — About · Experience · Projects · Stack · Writing · Contact
  Inter 9px uppercase letter-spacing 2px --ink-light
  Active section on scroll: color --accent, border-bottom 0.5px solid --accent

Mobile: hide right nav links, show hamburger or inline scroll anchors
```

---

## Dark sections

Hero and Contact have `background: --dark`. Text uses dark palette tokens. Visual break between cream and dark uses `border-top: 2px solid var(--ink)` on the dark section.

---

## Inner pages (Project & Article)

```
Nav (always scrolled state — no transparent phase)
↓
Page header section (--cream-2 bg)
  max-w-[1100px] mx-auto
  Back link
  Eyebrow (type + date)
  Headline (DM Serif 36px)
  Tags row
  Hairline
↓
Content section (--cream bg, max-w-[720px])
  Body paragraphs, highlights, links
↓
Footer (same as homepage)
```

---

## Responsive breakpoints

| Prefix | Width | Key changes |
|---|---|---|
| default | < 640px | Single column, reduced font sizes |
| `md:` | 768px+ | Two columns for About, Hero side-by-side |
| `lg:` | 1024px+ | Full desktop layout |

Always use `max-w-[1100px] mx-auto` for homepage sections and `max-w-[720px] mx-auto` for inner page content. Never use fixed pixel widths on individual elements.
