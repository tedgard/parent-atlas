import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ChildProfile {
  name: string
  birthdate: string | null
  isPremature: boolean
  weeksEarly: number
}

interface PreferencesState {
  child: ChildProfile
  readingMode: 'quick' | 'deep'
  bookmarks: string[]
  reducedMotion: boolean
  locale: 'en' | 'fr'
  setChild: (child: Partial<ChildProfile>) => void
  setReadingMode: (mode: 'quick' | 'deep') => void
  toggleBookmark: (path: string) => void
  setReducedMotion: (value: boolean) => void
  setLocale: (locale: 'en' | 'fr') => void
}

export const usePreferences = create<PreferencesState>()(
  persist(
    (set) => ({
      child: { name: '', birthdate: null, isPremature: false, weeksEarly: 0 },
      readingMode: 'quick',
      bookmarks: [],
      reducedMotion: false,
      locale: 'en',
      setChild: (child) => set((s) => ({ child: { ...s.child, ...child } })),
      setReadingMode: (readingMode) => set({ readingMode }),
      toggleBookmark: (path) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(path)
            ? s.bookmarks.filter((b) => b !== path)
            : [...s.bookmarks, path],
        })),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      setLocale: (locale) => set({ locale }),
    }),
    { name: 'parent-atlas-prefs' },
  ),
)
