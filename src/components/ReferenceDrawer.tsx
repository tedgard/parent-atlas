import { useTranslation } from 'react-i18next'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { REFERENCE_MAP } from '@/data/references'
import { Badge } from '@/components/ui/badge'

interface ReferenceDrawerProps {
  open: boolean
  onClose: () => void
  referenceIds: string[]
}

export function ReferenceDrawer({ open, onClose, referenceIds }: ReferenceDrawerProps) {
  const { t } = useTranslation()

  const refs = referenceIds
    .map((id) => REFERENCE_MAP.get(id))
    .filter(Boolean)

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="right" className="w-full sm:w-[480px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle>📚 {t('references.title')}</SheetTitle>
        </SheetHeader>

        {refs.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t('search.noResults')}</p>
        ) : (
          <div className="space-y-4">
            {refs.map((ref) => (
              <div key={ref!.id} className="p-4 rounded-xl border border-border bg-muted/30">
                <h3 className="font-medium text-foreground text-sm leading-snug mb-1">
                  {ref!.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {ref!.publisher} · {ref!.year}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {ref!.topicTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <a
                    href={ref!.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-primary hover:underline shrink-0"
                  >
                    {t('references.openIn')} ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
