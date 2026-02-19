# AGENTS.md — Parent Atlas

This file provides context for AI agents working on this codebase. Read this before making any changes.

---

## What this project is

**Parent Atlas** is a pure React static website providing evidence-based parenting guidance for children aged 0–5 years. It covers sleep, feeding, development, play, and parent wellbeing. The content is bilingual (English + French) and backed by authoritative scientific references (CDC, WHO, AAP, UNICEF, PubMed).

**Key constraint:** This is educational content only, not medical advice. All content must maintain this distinction clearly.

---

## Architecture overview

### Routing
- Path-prefix i18n: `/en/...` and `/fr/...`
- File: `src/app/routes.tsx`
- `LocaleProvider` validates locale param and calls `i18n.changeLanguage()`
- `LocaleRedirect` at `/` detects browser language and redirects
- Do NOT use `i18next-browser-languagedetector` — locale comes from the URL

### Content system
- MDX files in `src/content/{locale}/{section}/{slug}.mdx`
- Loaded lazily via `import.meta.glob` in `src/lib/mdx.ts`
- Frontmatter eagerly loaded for search index
- Do NOT use `{#id}` heading anchor syntax — it breaks MDX acorn parser
- Use `rehype-slug` auto-generated IDs (lowercase heading text with hyphens)

### State management
- Zustand with `persist` middleware → `localStorage` key `parent-atlas-prefs`
- File: `src/store/usePreferences.ts`
- Contains: child profile, readingMode, bookmarks, reducedMotion, locale

### i18n
- UI strings: `src/i18n/en.json` and `src/i18n/fr.json`
- MDX content: separate `src/content/en/` and `src/content/fr/` trees
- Add keys to both JSON files when adding any new UI text

---

## Critical gotchas

1. **MDX heading anchors:** Do NOT write `## Heading {#custom-id}` — this breaks the acorn parser. Use plain headings: `## Heading`. `rehype-slug` auto-generates IDs.

2. **MDX plugin order in vite.config.ts:** The MDX plugin MUST be `{ enforce: 'pre', ...mdx({...}) }` and placed BEFORE the React plugin.

3. **i18n locale from URL only:** Never use `i18next-browser-languagedetector`. The locale comes from the `/:locale` route param only.

4. **References are a single source of truth:** All reference IDs used in MDX frontmatter (`references: ["ID_HERE"]`) must exist in `src/data/references.ts`. Check before using.

5. **Reading mode via CSS classes:** Quick/Deep toggle works via `.reading-mode-quick .deep-only { display: none }`. MDX authors wrap content in `<div className="quick-only">` or `<div className="deep-only">` — NOT in conditional React rendering.

6. **Tailwind v4:** Uses `@import "tailwindcss"` in CSS, not `@tailwind` directives. No `tailwind.config.js` needed.

---

## Content authoring

### Adding a new age step page

1. Create `src/content/en/ages/{slug}.mdx` and `src/content/fr/ages/{slug}.mdx`
2. The slug must match one of the `slug` values in `src/data/ageSteps.ts`
3. Use this frontmatter template:

```yaml
---
title: "Title in English"
type: "age"
ageMinMonths: X
ageMaxMonths: Y
description: "One-sentence summary for search."
sections:
  - id: "sleep"
    label: "Sleep"
  - id: "feeding"
    label: "Feeding"
references:
  - "CDC_MILESTONES"
lastUpdated: "YYYY-MM-DD"
---
```

4. Use the standard section pattern:
   - `## What you may see`
   - `## Sleep`
   - `## Feeding`
   - `## Development`
   - `## Safety & Environment`
   - `## When to seek advice` (use `<SeekHelp>` component)

### Adding a new sleep method

1. Create `src/content/en/sleep/methods/{slug}.mdx` and FR equivalent
2. Add the method to the `METHODS` array in `src/pages/SleepPage.tsx`

### Adding a new reference

Add to `src/data/references.ts`:
```typescript
{
  id: 'UNIQUE_ID_YEAR',
  title: 'Full citation title',
  publisher: 'Organization',
  year: 2024,
  url: 'https://...',
  topicTags: ['sleep'],  // TopicTag enum values
}
```

---

## Available MDX components

These are available in all MDX files without any import:

| Component | Use case |
|---|---|
| `<KeyIdea>` | Important concept (blue callout) |
| `<TryTonight>` | Actionable tip for tonight (indigo callout) |
| `<SeekHelp>` | When to consult pediatrician (amber callout) |
| `<Callout variant="...">` | Generic callout (variants: key-idea, try-tonight, seek-help) |
| `<div className="quick-only">` | Content shown only in Quick reading mode |
| `<div className="deep-only">` | Content shown only in Deep dive reading mode |

---

## Development commands

```bash
npm run dev     # Start dev server (http://localhost:5173)
npm run build   # Production build → dist/
npm run lint    # ESLint check
npx tsc -p tsconfig.app.json --noEmit  # TypeScript check
```

---

## File organization rules

- **Never put content in page components** — all page content goes in MDX files
- **Never hardcode locale strings in components** — use `t('key')` from react-i18next
- **Never add a reference directly in MDX** — add to `references.ts` first, then reference by ID
- **Keep page components thin** — they load MDX and render it; business logic goes in `lib/`

---

## Safety/editorial requirements

Every piece of content about milestones or development must:
- Use "typical range" language, not rigid deadlines
- Include a pointer to professional consultation for concerns
- Not make diagnostic statements

Every piece of content about sleep methods must:
- Present methods neutrally
- Include the evidence base
- Note that methods are not appropriate for all situations

Every piece of content about feeding must:
- Follow WHO "encourage but do not force" guidance
- Include the AAP warning about pressure backfiring
- Not shame any feeding approach (breast, formula, baby-led, purees all valid)

---

## Deployment

Static files deployed to Hostinger. Upload `dist/` contents.

The `.htaccess` in `public/` handles SPA routing on Apache.
If Hostinger doesn't support `.htaccess`, the `404.html` JS redirect fallback handles it.
