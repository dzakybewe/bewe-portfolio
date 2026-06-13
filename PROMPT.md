# Portfolio Website — Claude Code Master Prompt

This folder contains 5 files. Read the following 3 before writing any code:
- `DESIGN.md` — visual design system, colors, typography, spacing, components
- `STRUCTURE.md` — every page, every section, all copy, all content
- `TECH.md` — stack, file structure, routing, animation specs, git rules, TODO system

Ignore `README.md` — it is instructions for the human, not for you.
This file (`PROMPT.md`) is your task brief — you are reading it now.

Do not start coding until you have read DESIGN.md, STRUCTURE.md, and TECH.md fully. All decisions have been made — do not ask clarifying questions, just build.

---

## What you are building

A personal portfolio website for Dzaky Ahmadin Berkah Wardana — a mobile and web developer based in Jakarta, Indonesia. The site targets **company recruiters hiring for full-time roles**. It must load fast, look polished, and communicate who Dzaky is within the first 5 seconds.

---

## Site architecture

This is NOT a pure single-page app. It has the following pages:

| Route | Description |
|---|---|
| `/` | Main single-page scroll (Hero, About, Experience, Projects list, Stack, Writing list, Contact) |
| `/projects/[slug]` | Individual project case study page |
| `/writing/[slug]` | Individual article page |

The homepage feels like a single page — everything is on one scroll. But Projects and Writing entries each link out to their own dedicated pages.

---

## Hard requirements

- **Homepage is single page scroll** — no route changes when navigating between sections. Smooth scroll only.
- **Projects link to `/projects/[slug]`** — clicking a project row on the homepage navigates to a dedicated project page. No modal.
- **Writing links to `/writing/[slug]`** — clicking a writing entry on the homepage navigates to a dedicated article page. No modal.
- **Photo placeholder** — a clearly marked placeholder in Hero. Must be trivial to swap in a real image later. See STRUCTURE.md.
- **Logo placeholder** — nav currently uses the name as text logo. A TODO comment must mark where a real logo image can be dropped in later.
- **Fully responsive** — mobile, tablet, desktop. Use `max-w-[1100px] mx-auto` container pattern for all sections so content never stretches on large monitors.
- **Animations** — GSAP loading screen + scroll-triggered reveals on homepage. Lenis smooth scroll. Page transitions on project/writing pages are a simple fade. Details in TECH.md.
- **All placeholder links marked with TODO comments** — every `href="#"`, placeholder image, placeholder domain, and placeholder logo must have a `<!-- TODO -->` comment. Full list in TECH.md.
- **Zero lorem ipsum** — all copy is in STRUCTURE.md. Use it exactly.
- **Accessible** — semantic HTML, proper heading hierarchy, alt text, keyboard navigable.

---

## Scaffolding instruction

Scaffold the Astro project **directly into the current directory** — do not create a subfolder. Use:

```bash
npm create astro@latest . -- --template minimal
```

The `.` is critical. All project files must live at the root of the current folder, not inside a nested `portfolio/` or any other subfolder.

---

## Git & commit rules

Commit work incrementally — do not make one giant commit at the end. Each logical unit of work gets its own commit so the git history is clean and trackable.

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

## When done

Confirm `npm run dev` runs without errors. Then grep the entire codebase for `TODO` and print every result with file path and line number so Dzaky has a complete checklist of what to fill in manually.
