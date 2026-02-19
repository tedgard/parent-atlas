import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { REFERENCES, type TopicTag } from '@/data/references'
import { Badge } from '@/components/ui/badge'

const ALL_TAGS: TopicTag[] = ['sleep', 'feeding', 'development', 'play', 'wellbeing', 'general']

const TAG_LABELS: Record<TopicTag, { en: string; fr: string }> = {
  sleep:       { en: 'Sleep',       fr: 'Sommeil' },
  feeding:     { en: 'Feeding',     fr: 'Alimentation' },
  development: { en: 'Development', fr: 'Développement' },
  play:        { en: 'Play',        fr: 'Jeu' },
  wellbeing:   { en: 'Wellbeing',   fr: 'Bien-être' },
  general:     { en: 'General',     fr: 'Général' },
}

export function ResourcesPage() {
  const { t } = useTranslation()
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const [activeTag, setActiveTag] = useState<TopicTag | null>(null)
  const [query, setQuery] = useState('')

  const filtered = REFERENCES.filter((r) => {
    const matchesTag = !activeTag || r.topicTags.includes(activeTag)
    const matchesQuery = !query || r.title.toLowerCase().includes(query.toLowerCase()) || r.publisher.toLowerCase().includes(query.toLowerCase())
    return matchesTag && matchesQuery
  })

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">{t('hero.resources')}</h1>
          <p className="text-muted-foreground text-lg">
            {l === 'fr'
              ? 'Sources scientifiques et recommandations officielles utilisées dans ce site.'
              : 'Scientific sources and official guidelines referenced throughout this site.'}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <input
            type="search"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-sm border border-border rounded-lg px-4 py-2 text-sm bg-background"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${!activeTag ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted text-muted-foreground border-transparent hover:bg-muted/80'}`}
            >
              {l === 'fr' ? 'Tous' : 'All'}
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${activeTag === tag ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted text-muted-foreground border-transparent hover:bg-muted/80'}`}
              >
                {TAG_LABELS[tag][l as 'en' | 'fr']}
              </button>
            ))}
          </div>
        </div>

        {/* References list */}
        <div className="space-y-4">
          {filtered.map((ref) => (
            <div key={ref.id} className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{ref.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {ref.publisher} · {ref.year}
                  </p>
                </div>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-primary hover:underline"
                >
                  {t('references.openIn')} ↗
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {ref.topicTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {TAG_LABELS[tag][l as 'en' | 'fr']}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t('search.noResults')}</p>
          )}
        </div>
      </div>
    </div>
  )
}
