import { useState, useEffect, useRef, useMemo } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when dialog opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  function handleClose() {
    setQuery('')
    setActiveIndex(0)
    onClose()
  }

  // Derive results synchronously — no second effect needed
  const results = useMemo<SearchItem[]>(() => {
    if (!query.trim()) return []
    const index = getSearchIndex(l)
    return index.search(query).map((r) => r.item).slice(0, 8)
  }, [query, l])

  // Clamp active index whenever results change
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, results.length - 1))

  function handleSelect(item: SearchItem) {
    navigate(item.route)
    handleClose()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[safeActiveIndex]) {
      handleSelect(results[safeActiveIndex])
    } else if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
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
                    i === safeActiveIndex
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
