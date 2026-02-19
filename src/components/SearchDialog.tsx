import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { getSearchIndex, type SearchItem } from '@/lib/search'

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const { t } = useTranslation()
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const index = getSearchIndex(l)
    const hits = index.search(query).map((r) => r.item)
    setResults(hits.slice(0, 8))
    setActiveIndex(0)
  }, [query, l])

  function handleSelect(item: SearchItem) {
    navigate(item.route)
    onClose()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[activeIndex]) {
      handleSelect(results[activeIndex])
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="p-0 gap-0 max-w-lg">
        <DialogTitle className="sr-only">{t('search.placeholder')}</DialogTitle>
        <div className="flex items-center border-b border-border px-4">
          <svg className="w-4 h-4 text-muted-foreground mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('search.placeholder')}
            className="flex-1 py-4 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {results.length > 0 ? (
          <ul className="py-2 max-h-80 overflow-y-auto">
            {results.map((item, i) => (
              <li key={item.route}>
                <button
                  onClick={() => handleSelect(item)}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    i === activeIndex
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <div className="font-medium">{item.title}</div>
                  {item.description && (
                    <div className="text-muted-foreground text-xs mt-0.5 line-clamp-1">{item.description}</div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        ) : query.trim() ? (
          <div className="py-8 text-center text-sm text-muted-foreground">{t('search.noResults')}</div>
        ) : (
          <div className="py-6 text-center text-xs text-muted-foreground">{t('search.openHint')}</div>
        )}
      </DialogContent>
    </Dialog>
  )
}
