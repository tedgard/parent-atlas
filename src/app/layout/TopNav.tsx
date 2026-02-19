import { useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const NAV_LINKS = [
  { key: 'ages',        href: '/ages' },
  { key: 'sleep',       href: '/sleep' },
  { key: 'feeding',     href: '/feeding' },
  { key: 'development', href: '/development' },
  { key: 'playLanguage',href: '/play-language' },
  { key: 'wellbeing',   href: '/wellbeing' },
  { key: 'resources',   href: '/resources' },
] as const

export function TopNav({ onSearchOpen }: { onSearchOpen: () => void }) {
  const { t, i18n } = useTranslation()
  const { locale } = useParams<{ locale: string }>()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const l = locale ?? 'en'

  function switchLanguage(newLocale: string) {
    const currentPath = location.pathname.replace(`/${l}`, '')
    navigate(`/${newLocale}${currentPath || ''}`)
    void i18n.changeLanguage(newLocale)
  }

  function isActive(href: string) {
    return location.pathname.startsWith(`/${l}${href}`)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to={`/${l}`}
          className="font-bold text-lg text-foreground shrink-0"
        >
          Parent Atlas
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5 flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                to={`/${l}${link.href}`}
                className={`px-2 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Search trigger */}
          <Button
            variant="outline"
            size="sm"
            onClick={onSearchOpen}
            className="hidden sm:flex items-center gap-2 text-muted-foreground"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>{t('search.placeholder')}</span>
            <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
          </Button>

          {/* Language switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => switchLanguage(l === 'en' ? 'fr' : 'en')}
            className="text-muted-foreground font-medium flex items-center gap-1.5"
            title={l === 'en' ? 'Passer en français' : 'Switch to English'}
          >
            {l === 'en' ? (
              <>🇫🇷 <span>FR</span></>
            ) : (
              <>🇬🇧 <span>EN</span></>
            )}
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden" aria-label="Open menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8 flex flex-col gap-1">
                <Link
                  to={`/${l}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-foreground"
                >
                  {t('nav.home')}
                </Link>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    to={`/${l}${link.href}`}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive(link.href)
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <button
                    onClick={() => {
                      switchLanguage(l === 'en' ? 'fr' : 'en')
                      setMobileOpen(false)
                    }}
                    className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
                  >
                    {l === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
