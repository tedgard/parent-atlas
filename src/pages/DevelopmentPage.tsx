import { useParams, Link } from 'react-router-dom'

const MILESTONES_EN = [
  {
    age: '2 months',
    motor: ['Holds head up briefly when on tummy', 'Smoother movements'],
    language: ['Makes cooing sounds', 'Turns head toward sounds'],
    social: ['Smiles at people', 'Can briefly calm self'],
    cognitive: ['Pays attention to faces', 'Begins to follow things with eyes'],
  },
  {
    age: '4 months',
    motor: ['Holds head steady unsupported', 'Pushes up on arms during tummy time', 'May roll from tummy to back'],
    language: ['Coos and babbles', 'Cries differently for different needs'],
    social: ['Smiles spontaneously at people', 'Copies facial expressions', 'Enjoys playing with people'],
    cognitive: ['Responds to affection', 'Reaches for toys', 'Uses hands and eyes together'],
  },
  {
    age: '6 months',
    motor: ['Rolls in both directions', 'Sits with support', 'Supports weight on legs when standing'],
    language: ['Responds to sounds by making sounds', 'Strings vowels together', 'Responds to own name'],
    social: ['Knows familiar faces', 'Likes to play with others', 'Responds to emotions of others'],
    cognitive: ['Curious; tries to reach things out of reach', 'Brings things to mouth', 'Shows readiness for solids'],
  },
  {
    age: '9 months',
    motor: ['Crawls or other form of mobility', 'Gets to sitting position alone', 'Pulls to stand'],
    language: ['Understands "no"', 'Makes many different sounds', 'Copies sounds and gestures'],
    social: ['Has favourite toys and people', 'Shows separation anxiety', 'Stranger anxiety common'],
    cognitive: ['Watches path of falling objects', 'Looks for hidden things', 'Bangs things together'],
  },
  {
    age: '12 months',
    motor: ['Pulls up to stand', 'Walks holding on to furniture', 'May take a few steps alone'],
    language: ['Says "mama" and "dada" with meaning', 'Tries to say words you say', 'Uses gestures (waves bye-bye)'],
    social: ['Extends arms or legs to help with dressing', 'Plays games like peek-a-boo', 'Shows preference for people and toys'],
    cognitive: ['Explores things in different ways', 'Finds hidden objects easily', 'Copies gestures'],
  },
  {
    age: '18 months',
    motor: ['Walks alone', 'Climbs on/off furniture', 'Walks up stairs with help'],
    language: ['Says several single words', 'Says and shakes head "no"', 'Points to show things'],
    social: ['Likes to hand things to others', 'Plays alone near others', 'Shows affection to familiar people'],
    cognitive: ['Knows what ordinary things are for', 'Points to get attention', 'Shows interest in a doll or stuffed animal'],
  },
  {
    age: '2 years',
    motor: ['Runs', 'Climbs on and off furniture', 'Walks up and down stairs holding on'],
    language: ['Points to things in a book', 'Uses 2-word phrases', 'Follows 2-step instructions'],
    social: ['Copies others, especially adults', 'Shows more independence', 'Gets excited around other children'],
    cognitive: ['Finds things even when hidden under 2 or 3 covers', 'Begins to sort by shapes and colors', 'Completes simple sentences in books'],
  },
  {
    age: '3 years',
    motor: ['Runs easily', 'Pedals a tricycle', 'Climbs well'],
    language: ['Talks well enough for strangers to understand most of the time', 'Uses 2–3 sentences at a time', 'Tells stories'],
    social: ['Copies adults and friends', 'Takes turns in games', 'Shows affection without prompting'],
    cognitive: ['Understands "mine", "his", "hers"', 'Shows a wide range of emotions', 'Draws a circle when shown how'],
  },
  {
    age: '4 years',
    motor: ['Hops and stands on one foot', 'Catches a bounced ball', 'Uses scissors'],
    language: ['Knows some basic rules of grammar', 'Sings a song from memory', 'Tells stories with sentences'],
    social: ['Enjoys doing new things', 'Plays cooperatively', 'More creative with make-believe play'],
    cognitive: ['Can name some colors and numbers', 'Understands the concept of counting', 'Draws a person with 2–4 body parts'],
  },
  {
    age: '5 years',
    motor: ['Stands on one foot for 10+ seconds', 'Hops, somersaults', 'Uses fork and spoon'],
    language: ['Speaks clearly', 'Tells a simple story using full sentences', 'Uses future tense'],
    social: ['Wants to please friends', 'Likely to agree with rules', 'Sings, dances, or acts'],
    cognitive: ['Counts 10 or more things', 'Can draw a person with 6 body parts', 'Prints some letters or numbers'],
  },
]

const MILESTONES_FR = [
  {
    age: '2 mois',
    motor: ['Soulève brièvement la tête sur le ventre', 'Mouvements plus fluides'],
    language: ['Émet des sons de gazouillement', 'Tourne la tête vers les sons'],
    social: ['Sourit aux personnes', 'Peut se calmer brièvement seul'],
    cognitive: ['Fait attention aux visages', 'Commence à suivre des choses des yeux'],
  },
  {
    age: '4 mois',
    motor: ['Tient la tête stable sans soutien', 'S\'appuie sur les bras sur le ventre', 'Peut se retourner du ventre au dos'],
    language: ['Gazouille et babille', 'Pleure différemment selon les besoins'],
    social: ['Sourit spontanément', 'Copie les expressions faciales', 'Aime jouer avec les personnes'],
    cognitive: ['Répond à l\'affection', 'Tend la main vers les jouets', 'Utilise les mains et les yeux ensemble'],
  },
  {
    age: '6 mois',
    motor: ['Roule dans les deux directions', 'S\'assoit avec soutien', 'Supporte son poids sur les jambes'],
    language: ['Répond aux sons en faisant des sons', 'Enchaîne les voyelles', 'Répond à son propre prénom'],
    social: ['Reconnaît les visages familiers', 'Aime jouer avec les autres', 'Répond aux émotions des autres'],
    cognitive: ['Curieux ; essaie d\'atteindre des choses hors de portée', 'Porte tout à la bouche', 'Montre une préparation aux solides'],
  },
  {
    age: '9 mois',
    motor: ['Rampe ou autre forme de mobilité', 'Se met en position assise seul', 'Se lève en s\'aidant'],
    language: ['Comprend « non »', 'Produit de nombreux sons différents', 'Copie les sons et les gestes'],
    social: ['A des jouets et des personnes préférés', 'Montre une anxiété de séparation', 'L\'anxiété face aux étrangers est courante'],
    cognitive: ['Suit la trajectoire des objets qui tombent', 'Cherche des objets cachés', 'Frappe les choses ensemble'],
  },
  {
    age: '12 mois',
    motor: ['Se lève en s\'aidant', 'Marche en s\'accrochant aux meubles', 'Peut faire quelques pas seul'],
    language: ['Dit « mama » et « papa » avec sens', 'Essaie de répéter les mots', 'Utilise des gestes (fait au revoir)'],
    social: ['Tend les bras pour aider à s\'habiller', 'Joue à cache-cache', 'Montre une préférence pour certaines personnes'],
    cognitive: ['Explore les choses de différentes façons', 'Trouve facilement les objets cachés', 'Copie les gestes'],
  },
  {
    age: '18 mois',
    motor: ['Marche seul', 'Monte sur les meubles et en descend', 'Monte les escaliers avec aide'],
    language: ['Dit plusieurs mots seuls', 'Dit et secoue la tête « non »', 'Pointe pour montrer les choses'],
    social: ['Aime donner des choses aux autres', 'Joue seul près des autres', 'Montre de l\'affection aux personnes familières'],
    cognitive: ['Sait à quoi servent les objets ordinaires', 'Pointe pour attirer l\'attention', 'Montre de l\'intérêt pour une poupée'],
  },
  {
    age: '2 ans',
    motor: ['Court', 'Monte sur les meubles et en descend', 'Monte et descend les escaliers en s\'aidant'],
    language: ['Pointe des choses dans un livre', 'Utilise des phrases de 2 mots', 'Suit des instructions en 2 étapes'],
    social: ['Copie les autres, surtout les adultes', 'Montre plus d\'indépendance', 'S\'emballe autour des autres enfants'],
    cognitive: ['Trouve des choses même cachées sous 2 ou 3 couvertures', 'Commence à trier par formes et couleurs', 'Complète des phrases simples dans les livres'],
  },
  {
    age: '3 ans',
    motor: ['Court facilement', 'Pédale un tricycle', 'Grimpe bien'],
    language: ['Parle assez bien pour que les étrangers comprennent la plupart du temps', 'Utilise 2-3 phrases à la fois', 'Raconte des histoires'],
    social: ['Copie les adultes et les amis', 'Prend son tour dans les jeux', 'Montre de l\'affection sans être incité'],
    cognitive: ['Comprend « le mien », « le sien »', 'Montre un large éventail d\'émotions', 'Dessine un cercle quand montré'],
  },
  {
    age: '4 ans',
    motor: ['Saute et se tient sur un pied', 'Attrape un ballon rebondissant', 'Utilise des ciseaux'],
    language: ['Connaît certaines règles de grammaire de base', 'Chante une chanson de mémoire', 'Raconte des histoires avec des phrases'],
    social: ['Aime faire de nouvelles choses', 'Joue de façon coopérative', 'Plus créatif dans le jeu imaginaire'],
    cognitive: ['Peut nommer certaines couleurs et chiffres', 'Comprend le concept de comptage', 'Dessine une personne avec 2-4 parties du corps'],
  },
  {
    age: '5 ans',
    motor: ['Se tient sur un pied pendant 10+ secondes', 'Saute, fait des galipettes', 'Utilise une fourchette et une cuillère'],
    language: ['Parle clairement', 'Raconte une simple histoire avec des phrases complètes', 'Utilise le futur'],
    social: ['Veut plaire aux amis', 'Susceptible d\'accepter les règles', 'Chante, danse ou joue des rôles'],
    cognitive: ['Compte 10 choses ou plus', 'Peut dessiner une personne avec 6 parties du corps', 'Imprime quelques lettres ou chiffres'],
  },
]

export function DevelopmentPage() {
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const milestones = l === 'fr' ? MILESTONES_FR : MILESTONES_EN

  const domains = l === 'fr'
    ? ['Motricité', 'Langage', 'Social/Émotionnel', 'Cognitif']
    : ['Motor', 'Language', 'Social/Emotional', 'Cognitive']

  const domainKeys = ['motor', 'language', 'social', 'cognitive'] as const

  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            {l === 'fr' ? 'Développement' : 'Development'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {l === 'fr'
              ? 'Jalons du développement de 0 à 5 ans selon les grilles CDC. Les jalons sont des plages de développement typique, pas des délais rigides.'
              : 'Developmental milestones from 0 to 5 years based on CDC guidelines. Milestones represent typical ranges, not rigid deadlines.'}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 mb-10 text-sm text-blue-900">
          <strong>📌 </strong>
          {l === 'fr'
            ? 'Si vous avez des inquiétudes concernant le développement de votre enfant, parlez-en à votre pédiatre. Les jalons sont des indicateurs, pas des jugements. Chaque enfant a son propre rythme.'
            : 'If you have concerns about your child\'s development, speak with your pediatrician. Milestones are indicators, not judgments. Every child develops at their own pace.'}
        </div>

        <div className="space-y-8">
          {milestones.map((m) => (
            <div key={m.age} className="border border-border rounded-2xl overflow-hidden">
              <div className="bg-emerald-50 px-5 py-3 border-b border-border">
                <h2 className="text-lg font-bold text-foreground">{m.age}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
                {domainKeys.map((key, di) => (
                  <div key={key} className="p-4">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{domains[di]}</h3>
                    <ul className="space-y-1">
                      {(m[key] as string[]).map((item, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-1.5">
                          <span className="text-emerald-500 mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-muted/30 border border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-medium text-foreground">
              {l === 'fr' ? 'Pour plus de détails par tranche d\'âge :' : 'For detailed content by age range:'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {l === 'fr'
                ? 'Chaque fiche d\'âge contient les jalons CDC complets, les conseils sommeil, alimentation et développement.'
                : 'Each age guide includes full CDC milestones, plus sleep, feeding, and development tips.'}
            </p>
          </div>
          <Link
            to={`/${l}/ages`}
            className="shrink-0 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {l === 'fr' ? 'Voir les fiches par âge →' : 'View age guides →'}
          </Link>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.cdc.gov/act-early/milestones/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            {l === 'fr' ? 'Source : CDC Act Early — Jalons officiels →' : 'Source: CDC Act Early — Official milestone checklists →'}
          </a>
        </div>
      </div>
    </div>
  )
}
