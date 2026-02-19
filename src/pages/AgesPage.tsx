import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'
import { AGE_STEPS } from '@/data/ageSteps'
import { usePreferences } from '@/store/usePreferences'
import { getMatchingAgeStep, getCorrectedAgeInMonths, getAgeInMonths } from '@/lib/age'

export function AgesPage() {
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

  return (
    <div>
      <section className="bg-gradient-to-br from-violet-50 to-purple-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">{t('hero.ages')}</h1>
          <p className="text-muted-foreground text-lg">{t('ages.timeline')}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGE_STEPS.map((step) => {
            const isActive = childAgeStep?.slug === step.slug
            return (
              <Link
                key={step.slug}
                to={`/${l}/ages/${step.slug}`}
                className={`group relative p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  isActive
                    ? 'bg-primary/10 border-primary'
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                {isActive && (
                  <span className="absolute top-3 right-3 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    {t('ages.youAreHere')}
                  </span>
                )}
                {!step.isOfficialCdc && (
                  <span className="absolute top-3 right-3 text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                    Practical
                  </span>
                )}
                <div className="text-2xl font-bold text-foreground mb-1">
                  {l === 'fr' ? step.labelFr : step.labelEn}
                </div>
                <div className="text-sm text-muted-foreground">
                  {step.minMonths}–{step.maxMonths} {l === 'fr' ? 'mois' : 'months'}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
