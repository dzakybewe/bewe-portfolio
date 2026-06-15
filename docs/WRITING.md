# Writing — how to add an article

The homepage **Writing** section and the `/writing/[slug]` article pages are driven
by a content collection. You add posts by dropping Markdown files into a folder —
no code changes needed.

## Add a new article

1. Create a `.md` file in [`src/content/writing/`](../src/content/writing/).
2. The **filename becomes the URL slug**:
   - `my-post.md` → `/writing/my-post`
   - `shipping-solo.md` → `/writing/shipping-solo`
3. Add the frontmatter (see schema below), then write the body in Markdown.
4. Run `npm run dev` — the post appears automatically.

That's it. As soon as **at least one** article exists:
- it shows up in the homepage Writing list (sorted by `order`, ascending), and
- the **"Writing coming soon"** empty state disappears.

When the folder is empty again, the empty state comes back on its own.

## Frontmatter schema

Defined in [`src/content.config.ts`](../src/content.config.ts):

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | Article title (rendered italic in the list). |
| `date` | string | yes | Display date, e.g. `Jun 2026`. Free text — not parsed. |
| `order` | number | yes | List position, ascending. Lower = higher in the list. |

> Any frontmatter string containing a `:` must be quoted.

## Example article

`src/content/writing/boring-technology.md`:

```markdown
---
title: In praise of boring technology
date: Jun 2026
order: 1
---

The most reliable systems I've shipped were built on technology nobody
finds exciting. Here's why I keep reaching for the boring option.

## A second heading

Body copy renders into the article page with the `.prose-body` styles.
```

This file would be served at `/writing/boring-technology`.

## Notes

- The dynamic route [`src/pages/writing/[slug].astro`](../src/pages/writing/[slug].astro)
  renders each article — leave it in place.
- Sorting is by `order`, so give each post a distinct number.
