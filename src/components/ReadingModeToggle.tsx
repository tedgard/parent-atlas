import { useTranslation } from 'react-i18next'
import { usePreferences } from '@/store/usePreferences'

export function ReadingModeToggle() {
  const { t } = useTranslation()
  const { readingMode, setReadingMode } = usePreferences()

  return (
    <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
      <button
        onClick={() => setReadingMode('quick')}
        className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
          readingMode === 'quick'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {t('readingMode.quick')}
      </button>
      <button
        onClick={() => setReadingMode('deep')}
        className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
          readingMode === 'deep'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {t('readingMode.deep')}
      </button>
    </div>
  )
}
