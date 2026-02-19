import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'

export function Footer() {
  const { t } = useTranslation()
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Parent Atlas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('common.educationalOnly')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">{t('nav.ages')}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link to={`/${l}/ages`} className="hover:text-foreground transition-colors">{t('nav.ages')}</Link></li>
              <li><Link to={`/${l}/sleep`} className="hover:text-foreground transition-colors">{t('nav.sleep')}</Link></li>
              <li><Link to={`/${l}/feeding`} className="hover:text-foreground transition-colors">{t('nav.feeding')}</Link></li>
              <li><Link to={`/${l}/development`} className="hover:text-foreground transition-colors">{t('nav.development')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">{t('common.disclaimer').split('.')[0]}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('common.disclaimer')}
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>© {year} {t('common.madeBy')}</span>
          <span>v1.0.0 — Parent Atlas</span>
        </div>
      </div>
    </footer>
  )
}
