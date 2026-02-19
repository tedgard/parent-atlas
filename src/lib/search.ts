import Fuse from 'fuse.js'
import { getAllFrontmatter } from './mdx'

export interface SearchItem {
  title: string
  description?: string
  route: string
  locale: string
  section: string
  slug: string
}

const fuseCache: Map<string, Fuse<SearchItem>> = new Map()

function buildRoute(locale: string, section: string, slug: string): string {
  if (section === 'ages') return `/${locale}/ages/${slug}`
  if (section === 'sleep/methods') return `/${locale}/sleep/${slug}`
  if (section === 'sleep') return `/${locale}/sleep`
  if (section === 'feeding') return `/${locale}/feeding`
  return `/${locale}/${section}`
}

export function getSearchIndex(locale: string): Fuse<SearchItem> {
  if (fuseCache.has(locale)) return fuseCache.get(locale)!

  const items = getAllFrontmatter()
    .filter((entry) => entry.locale === locale)
    .map((entry) => ({
      title: entry.frontmatter.title ?? '',
      description: entry.frontmatter.description,
      route: buildRoute(locale, entry.section, entry.slug),
      locale,
      section: entry.section,
      slug: entry.slug,
    }))

  const index = new Fuse(items, {
    keys: ['title', 'description'],
    threshold: 0.35,
    includeScore: true,
  })

  fuseCache.set(locale, index)
  return index
}
