import type { AgeStep } from '@/data/ageSteps'
import { AGE_STEPS } from '@/data/ageSteps'

export function getAgeInMonths(birthdate: string): number {
  const birth = new Date(birthdate)
  const now = new Date()
  let months =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth())
  // Subtract one if we haven't yet reached the birth day-of-month this month
  if (now.getDate() < birth.getDate()) {
    months -= 1
  }
  return Math.max(0, months)
}

export function getCorrectedAgeInMonths(
  birthdate: string,
  weeksEarly: number,
): number {
  const chrono = getAgeInMonths(birthdate)
  return Math.max(0, chrono - weeksEarly / 4.33)
}

export function getMatchingAgeStep(ageMonths: number): AgeStep | undefined {
  return AGE_STEPS.find(
    (s) => ageMonths >= s.minMonths && ageMonths < s.maxMonths,
  )
}

export function formatAge(months: number, locale: 'en' | 'fr'): string {
  if (months < 12) {
    return locale === 'fr' ? `${months} mois` : `${months} month${months !== 1 ? 's' : ''}`
  }
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  if (remainingMonths === 0) {
    return locale === 'fr'
      ? `${years} an${years > 1 ? 's' : ''}`
      : `${years} year${years !== 1 ? 's' : ''}`
  }
  return locale === 'fr'
    ? `${years} an${years > 1 ? 's' : ''} et ${remainingMonths} mois`
    : `${years} year${years !== 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
}
