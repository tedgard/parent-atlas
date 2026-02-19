export interface TopicEntry {
  key: string
  route: string
  titleEn: string
  titleFr: string
  descriptionEn: string
  descriptionFr: string
}

export const TOPIC_INDEX: TopicEntry[] = [
  {
    key: 'ages',
    route: '/ages',
    titleEn: 'Age Guide',
    titleFr: 'Guide des âges',
    descriptionEn: 'What to expect from newborn to 5 years',
    descriptionFr: "Ce à quoi s'attendre de la naissance à 5 ans",
  },
  {
    key: 'sleep',
    route: '/sleep',
    titleEn: 'Sleep Guide',
    titleFr: 'Guide du sommeil',
    descriptionEn: 'Self-settling, night wakings, routines, and evidence-based methods',
    descriptionFr: 'Autonomie du sommeil, réveils nocturnes, routines et méthodes',
  },
  {
    key: 'feeding',
    route: '/feeding',
    titleEn: 'Feeding & Solids',
    titleFr: 'Alimentation & diversification',
    descriptionEn: 'When to start solids, texture progression, responsive feeding',
    descriptionFr: 'Quand commencer les solides, progression des textures, alimentation réactive',
  },
  {
    key: 'development',
    route: '/development',
    titleEn: 'Development',
    titleFr: 'Développement',
    descriptionEn: 'Motor, language, cognitive and social milestones',
    descriptionFr: 'Étapes motrices, langagières, cognitives et sociales',
  },
  {
    key: 'play-language',
    route: '/play-language',
    titleEn: 'Play & Language',
    titleFr: 'Jeu & Langage',
    descriptionEn: 'Daily micro-practices for bonding and language development',
    descriptionFr: 'Micro-pratiques quotidiennes pour le lien et le développement du langage',
  },
  {
    key: 'wellbeing',
    route: '/wellbeing',
    titleEn: 'Parent Wellbeing',
    titleFr: 'Bien-être parental',
    descriptionEn: 'Sleep deprivation, sharing duties, good-enough parenting',
    descriptionFr: 'Manque de sommeil, partage des tâches, parentalité suffisamment bonne',
  },
]
