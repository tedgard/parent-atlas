import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'
import { AGE_STEPS } from '@/data/ageSteps'
import { usePreferences } from '@/store/usePreferences'
import { getMatchingAgeStep, getCorrectedAgeInMonths, getAgeInMonths } from '@/lib/age'

export function HomePage() {
  const { t } = useTranslation()
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const { child } = usePreferences()

  const childAgeStep = child.birthdate
    ? getMatchingAgeStep(
        child.isPremature
          ? getCorrectedAgeInMonths(child.birthdate, child.weeksEarly)
          : getAgeInMonths(child.birthdate),
      )
    : null

  const topics = [
    { key: 'ages',        href: '/ages',         icon: '📅', color: 'from-violet-50 to-purple-100 border-purple-200' },
    { key: 'sleep',       href: '/sleep',        icon: '🌙', color: 'from-indigo-50 to-blue-100 border-blue-200' },
    { key: 'feeding',     href: '/feeding',      icon: '🥣', color: 'from-amber-50 to-orange-100 border-orange-200' },
    { key: 'development', href: '/development',  icon: '🌱', color: 'from-emerald-50 to-green-100 border-green-200' },
    { key: 'playLanguage',href: '/play-language',icon: '🎨', color: 'from-pink-50 to-rose-100 border-rose-200' },
    { key: 'wellbeing',   href: '/wellbeing',    icon: '💚', color: 'from-teal-50 to-cyan-100 border-cyan-200' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t('hero.home.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.home.subtitle')}
          </p>

          {childAgeStep && (
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>📍</span>
              <span>
                {t('ages.youAreHere')}:{' '}
                {l === 'fr' ? childAgeStep.labelFr : childAgeStep.labelEn}
              </span>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={`/${l}/ages`}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              {t('hero.home.cta')}
            </Link>
            <Link
              to={`/${l}/resources`}
              className="bg-background border border-border text-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-muted transition-colors"
            >
              {t('nav.resources')}
            </Link>
          </div>
        </div>
      </section>

      {/* Topic cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.key}
              to={`/${l}${topic.href}`}
              className={`group p-6 rounded-2xl border bg-gradient-to-br ${topic.color} hover:shadow-md transition-all hover:-translate-y-0.5`}
            >
              <div className="text-3xl mb-3">{topic.icon}</div>
              <h2 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                {t(`nav.${topic.key}`)}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      {/* Age quick-access */}
      <section className="bg-muted/30 border-t border-border py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            {t('ages.timeline')}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {AGE_STEPS.map((step) => (
              <Link
                key={step.slug}
                to={`/${l}/ages/${step.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  childAgeStep?.slug === step.slug
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {l === 'fr' ? step.labelFr : step.labelEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-xs text-muted-foreground text-center border border-border rounded-xl p-4 bg-muted/20">
          {t('common.disclaimer')}
        </p>
      </div>
    </div>
  )
}
