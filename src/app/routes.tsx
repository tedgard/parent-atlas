import { useEffect } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePreferences } from '@/store/usePreferences'
import { AppShell } from './layout/AppShell'
import { HomePage } from '@/pages/HomePage'
import { AgesPage } from '@/pages/AgesPage'
import { AgeStepPage } from '@/pages/AgeStepPage'
import { SleepPage } from '@/pages/SleepPage'
import { SleepMethodPage } from '@/pages/SleepMethodPage'
import { FeedingPage } from '@/pages/FeedingPage'
import { DevelopmentPage } from '@/pages/DevelopmentPage'
import { PlayLanguagePage } from '@/pages/PlayLanguagePage'
import { WellbeingPage } from '@/pages/WellbeingPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

const SUPPORTED_LOCALES = ['en', 'fr'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

function isSupportedLocale(l: string): l is SupportedLocale {
  return SUPPORTED_LOCALES.includes(l as SupportedLocale)
}

function LocaleProvider() {
  const { locale } = useParams<{ locale: string }>()
  const { i18n } = useTranslation()
  const { setLocale } = usePreferences()

  useEffect(() => {
    if (locale && isSupportedLocale(locale)) {
      void i18n.changeLanguage(locale)
      setLocale(locale)
      document.documentElement.lang = locale
    }
  }, [locale, i18n, setLocale])

  if (!locale || !isSupportedLocale(locale)) {
    return <Navigate to="/en" replace />
  }

  return <Outlet />
}

function LocaleRedirect() {
  const lang = navigator.language.startsWith('fr') ? 'fr' : 'en'
  return <Navigate to={`/${lang}`} replace />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LocaleRedirect />,
  },
  {
    path: '/:locale',
    element: <LocaleProvider />,
    children: [
      {
        element: <AppShell />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'ages', element: <AgesPage /> },
          { path: 'ages/:ageStep', element: <AgeStepPage /> },
          { path: 'sleep', element: <SleepPage /> },
          { path: 'sleep/methods/:method', element: <SleepMethodPage /> },
          { path: 'feeding', element: <FeedingPage /> },
          { path: 'development', element: <DevelopmentPage /> },
          { path: 'play-language', element: <PlayLanguagePage /> },
          { path: 'wellbeing', element: <WellbeingPage /> },
          { path: 'resources', element: <ResourcesPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <LocaleRedirect />,
  },
])
