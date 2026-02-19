import { useState, useEffect, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import { TopNav } from './TopNav'
import { Footer } from './Footer'
import { SearchDialog } from '@/components/SearchDialog'
import { usePreferences } from '@/store/usePreferences'

export function AppShell() {
  const [searchOpen, setSearchOpen] = useState(false)
  const { readingMode, reducedMotion, setReducedMotion } = usePreferences()

  // Sync reduced motion preference with OS setting on first load
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setReducedMotion(true)
    }
  }, [setReducedMotion])

  // Apply reduced motion class to root
  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reducedMotion)
  }, [reducedMotion])

  // Cmd+K to open search
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setSearchOpen(true)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className={`min-h-screen flex flex-col ${readingMode === 'quick' ? 'reading-mode-quick' : 'reading-mode-deep'}`}>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <TopNav onSearchOpen={() => setSearchOpen(true)} />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
