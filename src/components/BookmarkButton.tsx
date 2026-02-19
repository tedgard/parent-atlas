import { useTranslation } from 'react-i18next'
import { usePreferences } from '@/store/usePreferences'
import { Button } from '@/components/ui/button'

interface BookmarkButtonProps {
  path: string
}

export function BookmarkButton({ path }: BookmarkButtonProps) {
  const { t } = useTranslation()
  const { bookmarks, toggleBookmark } = usePreferences()
  const isBookmarked = bookmarks.includes(path)

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => toggleBookmark(path)}
      title={isBookmarked ? t('bookmarks.remove') : t('bookmarks.add')}
      className="text-muted-foreground hover:text-foreground"
    >
      {isBookmarked ? '🔖' : '🏷️'}
    </Button>
  )
}
