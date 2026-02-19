import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

export function NotFoundPage() {
  const { t } = useTranslation()
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl mb-6">🗺️</div>
      <h1 className="text-3xl font-bold text-foreground mb-3">{t('common.notFound')}</h1>
      <p className="text-muted-foreground mb-8">
        {l === 'fr' ? 'Cette page n\'existe pas.' : 'This page could not be found.'}
      </p>
      <Link
        to={`/${l}`}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
      >
        {t('common.backHome')}
      </Link>
    </div>
  )
}
