export interface MdxFrontmatter {
  title: string
  type: 'age' | 'sleep-method' | 'topic'
  ageMinMonths?: number
  ageMaxMonths?: number
  sections: Array<{ id: string; label: string }>
  references: string[]
  description?: string
  lastUpdated?: string
}

// All MDX files, lazy-loaded (not eagerly bundled)
const allMdx = import.meta.glob('/src/content/**/*.mdx')

// Frontmatter only, eagerly loaded for search index and metadata
const allFrontmatterRaw = import.meta.glob('/src/content/**/*.mdx', {
  eager: true,
  import: 'frontmatter',
})

export async function loadMdxModule(
  locale: string,
  section: string,
  slug: string,
) {
  const key = `/src/content/${locale}/${section}/${slug}.mdx`
  const loader = allMdx[key]
  if (!loader) {
    // Fallback to English
    const fallbackKey = `/src/content/en/${section}/${slug}.mdx`
    const fallback = allMdx[fallbackKey]
    if (!fallback) throw new Error(`MDX not found: ${key}`)
    return fallback() as Promise<{ default: React.ComponentType; frontmatter: MdxFrontmatter }>
  }
  return loader() as Promise<{ default: React.ComponentType; frontmatter: MdxFrontmatter }>
}

export interface FrontmatterEntry {
  path: string
  locale: string
  section: string
  slug: string
  frontmatter: MdxFrontmatter
}

export function getAllFrontmatter(): FrontmatterEntry[] {
  return Object.entries(allFrontmatterRaw).map(([path, fm]) => {
    const parts = path.split('/')
    // path format: /src/content/{locale}/{section}/{slug}.mdx
    const locale = parts[3] ?? 'en'
    const section = parts[4] ?? ''
    const slug = (parts[5] ?? '').replace('.mdx', '')
    return {
      path,
      locale,
      section,
      slug,
      frontmatter: fm as MdxFrontmatter,
    }
  })
}
