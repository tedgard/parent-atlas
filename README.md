# Parent Atlas

Evidence-based parenting guidance for the first five years. A pure React static website covering sleep, feeding, development, and parent wellbeing — with science-backed references.

**Live content covers:**
- Age-by-age guides (newborn through 5 years)
- Sleep autonomy: self-settling, night wakings, evidence-based methods
- Feeding & solids: texture progression, responsive feeding, avoiding pressure
- Developmental milestones (CDC-based)
- Play & language: daily micro-practices
- Parent wellbeing
- Filterable references library

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript (strict) |
| Build tool | Vite 6 |
| Routing | React Router v7 with locale-prefix strategy (`/en/...`, `/fr/...`) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Content | MDX + `@mdx-js/rollup` |
| i18n | i18next + react-i18next (EN + FR) |
| State | Zustand 5 with localStorage persistence |
| Search | Fuse.js (client-side fuzzy search) |
| Deployment | Hostinger static hosting |

---

## Getting started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173 (redirects to /en or /fr based on browser language)

# Production build
npm run build

# Preview production build
npx serve dist/
```

---

## Project structure

```
src/
  app/
    routes.tsx          # Locale-prefix routing, LocaleProvider, LocaleRedirect
    layout/
      AppShell.tsx      # Layout shell: nav + outlet + footer + search dialog
      TopNav.tsx        # Navigation, language switcher, search trigger
      Footer.tsx        # Footer with links and disclaimer
  pages/
    HomePage.tsx        # Landing page
    AgesPage.tsx        # Age timeline hub (grid of age steps)
    AgeStepPage.tsx     # Individual age step (loads MDX dynamically)
    SleepPage.tsx       # Sleep guide hub
    SleepMethodPage.tsx # Individual sleep method (loads MDX)
    FeedingPage.tsx     # Feeding guide
    DevelopmentPage.tsx # Developmental milestones
    PlayLanguagePage.tsx
    WellbeingPage.tsx
    ResourcesPage.tsx   # Filterable references library
    NotFoundPage.tsx
  content/
    en/                 # English MDX content
      ages/             # One file per age step: newborn, 1m, 2m, ... 5y
      sleep/
        methods/        # graduated-extinction.mdx, bedtime-fading.mdx
    fr/                 # French MDX content (mirrors en/ structure)
  components/
    ui/                 # shadcn/ui components (auto-generated)
    Callout.tsx         # KeyIdea / TryTonight / SeekHelp callout blocks
    MdxComponents.tsx   # Styled HTML → MDX component mapping
    ReferenceDrawer.tsx # Slide-in references panel
    SearchDialog.tsx    # Cmd+K search (Fuse.js)
    ReadingModeToggle.tsx
    BookmarkButton.tsx
  data/
    ageSteps.ts         # All 15 age step definitions
    references.ts       # References registry (single source of truth)
    topicIndex.ts       # Topic → route mapping for search
  i18n/
    en.json             # All English UI strings
    fr.json             # All French UI strings
    index.ts            # i18next initialization
  lib/
    age.ts              # Age calculation utilities
    mdx.ts              # MDX loader (import.meta.glob)
    search.ts           # Fuse.js search index
  store/
    usePreferences.ts   # Zustand store: child profile, readingMode, bookmarks
```

---

## Content system

### MDX frontmatter

Every content file must include:

```yaml
---
title: "6 Months"
type: "age"            # "age" | "sleep-method" | "topic"
ageMinMonths: 6
ageMaxMonths: 9
description: "Short description for search and meta tags."
sections:
  - id: "sleep"
    label: "Sleep"
  - id: "feeding"
    label: "Feeding & Solids"
references:
  - "WHO_IYCF_2023"    # IDs from src/data/references.ts
  - "CDC_MILESTONES"
lastUpdated: "2025-01-01"
---
```

### Reading modes

Content authors use two wrapper divs to support Quick/Deep mode toggle:

```mdx
<div className="quick-only">
Quick bullets here — shown in Quick mode only
</div>

<div className="deep-only">
Detailed explanation here — shown in Deep dive mode only
</div>
```

### Callout components

Available in all MDX files:

```mdx
<KeyIdea>
  Important concept to highlight.
</KeyIdea>

<TryTonight>
  Actionable tip for tonight.
</TryTonight>

<SeekHelp>
  When to consult a pediatrician.
</SeekHelp>
```

### Adding a new reference

Add to `src/data/references.ts`:

```typescript
{
  id: 'MY_REFERENCE_2024',
  title: 'Full title of the paper/guideline',
  publisher: 'Organization name',
  year: 2024,
  url: 'https://...',
  topicTags: ['sleep'],  // 'sleep' | 'feeding' | 'development' | 'play' | 'wellbeing' | 'general'
}
```

Then use it in any MDX frontmatter: `references: ["MY_REFERENCE_2024"]`

---

## i18n

- URL strategy: `/en/...` and `/fr/...` (locale in URL)
- Root `/` auto-redirects based on `navigator.language`
- UI strings: `src/i18n/en.json` and `src/i18n/fr.json`
- MDX content: separate file trees (`src/content/en/` and `src/content/fr/`)
- Language switcher in nav replaces locale prefix in current URL

---

## Local features (no account needed)

All stored in `localStorage` via Zustand (`parent-atlas-prefs`):

| Feature | Description |
|---|---|
| Child profile | Name, birthdate, prematurity — computes current age step |
| Reading mode | Quick (bullets) or Deep dive (full explanations with science) |
| Bookmarks | Save any page path |
| Reduced motion | Disabled all animations |
| Locale | Persisted locale preference |

---

## Deployment (Hostinger)

```bash
npm run build
# Upload contents of dist/ to Hostinger via FTP or Git deployment
```

The `public/.htaccess` file handles Apache SPA routing:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

If `.htaccess` is not supported, `public/404.html` provides a JS-based redirect fallback.

---

## Safety and editorial guidelines

- **Educational only — not medical advice**
- All content uses "typical range" language, not rigid deadlines
- Every page that touches medical topics includes "talk to your pediatrician" prompts
- References link to authoritative sources (CDC, WHO, AAP, UNICEF, PubMed)
- Responsive feeding content follows WHO "encourage but do not force" guidance
- Sleep method content is evidence-based and neutrally presented (Gradisar et al. 2016)

---

## Made by

Edgard N. — v1.0.0
