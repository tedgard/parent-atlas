export interface AgeStep {
  slug: string
  labelEn: string
  labelFr: string
  minMonths: number
  maxMonths: number
  order: number
  isOfficialCdc: boolean
}

export const AGE_STEPS: AgeStep[] = [
  { slug: 'newborn', labelEn: 'Newborn',  labelFr: 'Nouveau-né', minMonths: 0,  maxMonths: 1,  order: 0,  isOfficialCdc: false },
  { slug: '1m',      labelEn: '1 month',  labelFr: '1 mois',     minMonths: 1,  maxMonths: 2,  order: 1,  isOfficialCdc: false },
  { slug: '2m',      labelEn: '2 months', labelFr: '2 mois',     minMonths: 2,  maxMonths: 3,  order: 2,  isOfficialCdc: true  },
  { slug: '3m',      labelEn: '3 months', labelFr: '3 mois',     minMonths: 3,  maxMonths: 4,  order: 3,  isOfficialCdc: false },
  { slug: '4m',      labelEn: '4 months', labelFr: '4 mois',     minMonths: 4,  maxMonths: 5,  order: 4,  isOfficialCdc: true  },
  { slug: '6m',      labelEn: '6 months', labelFr: '6 mois',     minMonths: 6,  maxMonths: 9,  order: 5,  isOfficialCdc: true  },
  { slug: '9m',      labelEn: '9 months', labelFr: '9 mois',     minMonths: 9,  maxMonths: 12, order: 6,  isOfficialCdc: true  },
  { slug: '12m',     labelEn: '1 year',   labelFr: '1 an',       minMonths: 12, maxMonths: 15, order: 7,  isOfficialCdc: true  },
  { slug: '15m',     labelEn: '15 months',labelFr: '15 mois',    minMonths: 15, maxMonths: 18, order: 8,  isOfficialCdc: true  },
  { slug: '18m',     labelEn: '18 months',labelFr: '18 mois',    minMonths: 18, maxMonths: 24, order: 9,  isOfficialCdc: true  },
  { slug: '24m',     labelEn: '2 years',  labelFr: '2 ans',      minMonths: 24, maxMonths: 30, order: 10, isOfficialCdc: true  },
  { slug: '30m',     labelEn: '2.5 years',labelFr: '2,5 ans',    minMonths: 30, maxMonths: 36, order: 11, isOfficialCdc: true  },
  { slug: '36m',     labelEn: '3 years',  labelFr: '3 ans',      minMonths: 36, maxMonths: 48, order: 12, isOfficialCdc: true  },
  { slug: '4y',      labelEn: '4 years',  labelFr: '4 ans',      minMonths: 48, maxMonths: 60, order: 13, isOfficialCdc: true  },
  { slug: '5y',      labelEn: '5 years',  labelFr: '5 ans',      minMonths: 60, maxMonths: 72, order: 14, isOfficialCdc: true  },
]
