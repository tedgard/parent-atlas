export type TopicTag =
  | 'sleep'
  | 'feeding'
  | 'development'
  | 'play'
  | 'wellbeing'
  | 'general'

export interface Reference {
  id: string
  title: string
  publisher: string
  year: number
  url: string
  topicTags: TopicTag[]
}

export const REFERENCES: Reference[] = [
  {
    id: 'CDC_MILESTONES',
    title: 'Developmental Milestones',
    publisher: 'CDC (Centers for Disease Control and Prevention)',
    year: 2023,
    url: 'https://www.cdc.gov/act-early/milestones/index.html',
    topicTags: ['development', 'general'],
  },
  {
    id: 'WHO_IYCF_2023',
    title: 'Infant and Young Child Feeding',
    publisher: 'World Health Organization',
    year: 2023,
    url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    topicTags: ['feeding', 'general'],
  },
  {
    id: 'WHO_CF_2023',
    title: 'Complementary Feeding — Guiding Principles for Infants 6–23 Months',
    publisher: 'World Health Organization',
    year: 2023,
    url: 'https://www.who.int/publications/i/item/9789240081864',
    topicTags: ['feeding'],
  },
  {
    id: 'UNICEF_CF_2020',
    title: 'Improving Young Children\'s Diets During the Complementary Feeding Period',
    publisher: 'UNICEF Programming Guidance',
    year: 2020,
    url: 'https://www.unicef.org/nutrition/complementary-feeding',
    topicTags: ['feeding'],
  },
  {
    id: 'AAP_PICKY_2020',
    title: 'Picky Eaters: Is It a Problem?',
    publisher: 'AAP HealthyChildren.org',
    year: 2020,
    url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    topicTags: ['feeding'],
  },
  {
    id: 'GRADISAR_2016',
    title:
      'Behavioral Interventions for Infant Sleep Problems: A Randomized Controlled Trial',
    publisher: 'JAMA Pediatrics / PubMed',
    year: 2016,
    url: 'https://pubmed.ncbi.nlm.nih.gov/27140081/',
    topicTags: ['sleep'],
  },
  {
    id: 'PMC_RESPONSIVE_FEEDING',
    title: 'Responsive Feeding: Establishing Healthy Eating Behaviour Early On',
    publisher: 'PMC / Annals of Nutrition and Metabolism',
    year: 2018,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6333562/',
    topicTags: ['feeding'],
  },
  {
    id: 'SPF_DIVERSIFICATION',
    title: 'Nouvelles recommandations pour la diversification alimentaire des enfants de moins de 3 ans',
    publisher: 'Santé publique France',
    year: 2021,
    url: 'https://www.santepubliquefrance.fr/determinants-de-sante/nutrition-et-activite-physique/documents/depliant-flyer/nouvelles-recommandations-pour-la-diversification-alimentaire-des-enfants-de-moins-de-3-ans-l-essentiel',
    topicTags: ['feeding'],
  },
]

export const REFERENCE_MAP = new Map<string, Reference>(
  REFERENCES.map((r) => [r.id, r]),
)
