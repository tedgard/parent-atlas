import { useEffect, useState, type ComponentType } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MDXProvider } from '@mdx-js/react'
import { loadMdxModule, type MdxFrontmatter } from '@/lib/mdx'
import { AGE_STEPS } from '@/data/ageSteps'
import { mdxComponents } from '@/components/MdxComponents'
import { ReferenceDrawer } from '@/components/ReferenceDrawer'
import { ReadingModeToggle } from '@/components/ReadingModeToggle'
import { BookmarkButton } from '@/components/BookmarkButton'
import { usePreferences } from '@/store/usePreferences'

function AgeRailStrip() {
  const { locale, ageStep: currentSlug } = useParams<{ locale: string; ageStep: string }>()
  const l = locale ?? 'en'

  return (
    <div className="overflow-x-auto pb-2 -mx-4 px-4">
      <div className="flex gap-2 min-w-max">
        {AGE_STEPS.map((step) => (
          <Link
            key={step.slug}
            to={`/${l}/ages/${step.slug}`}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
              step.slug === currentSlug
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-muted text-muted-foreground border-transparent hover:bg-muted/80'
            }`}
          >
            {l === 'fr' ? step.labelFr : step.labelEn}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function AgeStepPage() {
  const { locale, ageStep } = useParams<{ locale: string; ageStep: string }>()
  const { t } = useTranslation()
  const l = locale ?? 'en'
  const { readingMode } = usePreferences()

  const [Content, setContent] = useState<ComponentType | null>(null)
  const [frontmatter, setFrontmatter] = useState<MdxFrontmatter | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!ageStep) return
    let cancelled = false
    loadMdxModule(l, 'ages', ageStep)
      .then((mod) => {
        if (cancelled) return
        setContent(() => mod.default)
        setFrontmatter(mod.frontmatter)
        setError(false)
      })
      .catch(() => {
        if (!cancelled) {
          setContent(null)
          setFrontmatter(null)
          setError(true)
        }
      })
    return () => { cancelled = true }
  }, [l, ageStep])

  const currentStep = AGE_STEPS.find((s) => s.slug === ageStep)

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">{t('common.notFound')}</p>
        <Link to={`/${l}/ages`} className="text-primary hover:underline mt-4 inline-block">
          ← {t('ages.timeline')}
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="mb-6">
        <Link to={`/${l}/ages`} className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-1">
          ← {t('ages.timeline')}
        </Link>
        <div className="flex items-center justify-between flex-wrap gap-3 mt-2">
          <h1 className="text-3xl font-bold text-foreground">
            {frontmatter?.title ?? (currentStep ? (l === 'fr' ? currentStep.labelFr : currentStep.labelEn) : '…')}
          </h1>
          <div className="flex items-center gap-2">
            <ReadingModeToggle />
            <BookmarkButton path={`/${l}/ages/${ageStep}`} />
          </div>
        </div>
      </div>

      {/* Age rail */}
      <div className="mb-8">
        <AgeRailStrip />
      </div>

      {/* Content */}
      {!Content ? (
        <div className="space-y-4">
          {[1,2,3].map((i) => (
            <div key={i} className="h-24 bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className={readingMode === 'quick' ? 'reading-mode-quick' : 'reading-mode-deep'}>
          <MDXProvider components={mdxComponents}>
            <Content />
          </MDXProvider>
        </div>
      )}

      {/* References */}
      {frontmatter && frontmatter.references.length > 0 && (
        <div className="mt-10 pt-6 border-t border-border">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            📚 {t('references.openDrawer')} ({frontmatter.references.length})
          </button>
        </div>
      )}

      <ReferenceDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        referenceIds={frontmatter?.references ?? []}
      />
    </div>
  )
}
