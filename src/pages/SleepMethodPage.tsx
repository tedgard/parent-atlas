import { useEffect, useState, type ComponentType } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MDXProvider } from '@mdx-js/react'
import { loadMdxModule, type MdxFrontmatter } from '@/lib/mdx'
import { mdxComponents } from '@/components/MdxComponents'
import { ReferenceDrawer } from '@/components/ReferenceDrawer'

export function SleepMethodPage() {
  const { locale, method } = useParams<{ locale: string; method: string }>()
  const { t } = useTranslation()
  const l = locale ?? 'en'

  const [Content, setContent] = useState<ComponentType | null>(null)
  const [frontmatter, setFrontmatter] = useState<MdxFrontmatter | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setContent(null)
    setError(false)
    if (!method) return
    loadMdxModule(l, 'sleep/methods', method)
      .then((mod) => {
        setContent(() => mod.default)
        setFrontmatter(mod.frontmatter)
      })
      .catch(() => setError(true))
  }, [l, method])

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">{t('common.notFound')}</p>
        <Link to={`/${l}/sleep`} className="text-primary hover:underline mt-4 inline-block">← {t('nav.sleep')}</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to={`/${l}/sleep`} className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
        ← {t('nav.sleep')}
      </Link>
      {!Content ? (
        <div className="space-y-4">
          {[1,2,3].map((i) => <div key={i} className="h-24 bg-muted rounded-xl animate-pulse" />)}
        </div>
      ) : (
        <MDXProvider components={mdxComponents}><Content /></MDXProvider>
      )}
      {frontmatter && frontmatter.references.length > 0 && (
        <div className="mt-10 pt-6 border-t border-border">
          <button onClick={() => setDrawerOpen(true)} className="text-sm text-primary hover:underline">
            📚 {t('references.openDrawer')} ({frontmatter.references.length})
          </button>
        </div>
      )}
      <ReferenceDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} referenceIds={frontmatter?.references ?? []} />
    </div>
  )
}
