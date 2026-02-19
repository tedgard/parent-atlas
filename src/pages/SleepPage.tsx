import { useParams, Link } from 'react-router-dom'

const METHODS = [
  { slug: 'graduated-extinction', titleEn: 'Graduated extinction (Ferber method)', titleFr: 'Extinction progressive (méthode Ferber)' },
  { slug: 'bedtime-fading',       titleEn: 'Bedtime fading',                titleFr: 'Décalage de l\'heure du coucher' },
]

const EN_CONTENT = {
  hero: 'Sleep',
  subtitle: 'Understanding your child\'s sleep and gently building sleep independence — with evidence, not guilt.',
  sections: [
    {
      id: 'basics',
      title: 'How infant and toddler sleep works',
      content: [
        'Babies are not broken adults with bad sleep habits. Infant sleep is biologically different from adult sleep in three key ways:',
        '**Shorter sleep cycles.** Adult sleep cycles last ~90 minutes. Infant sleep cycles are 45–50 minutes. Between cycles, it is completely normal to briefly stir or partially wake. This is not a problem to fix.',
        '**More light sleep.** Infants spend more time in active (light) sleep than adults. This is thought to be protective and important for brain development.',
        '**No internal clock at birth.** Circadian rhythms develop around 6–12 weeks. Until then, day/night confusion is universal and not a sign of anything wrong.',
      ],
    },
    {
      id: 'expectations',
      title: 'What to expect at each stage',
      table: [
        { age: 'Newborn (0–4 weeks)', total: '14–17 hrs', naps: '4–5 short naps', night: 'Every 2–3 hrs', note: 'No schedule; follow hunger cues' },
        { age: '1–3 months', total: '14–16 hrs', naps: '3–4 naps', night: '3–4 hr stretches', note: 'Circadian rhythm emerging' },
        { age: '4–6 months', total: '12–16 hrs', naps: '3 naps', night: 'Longer stretches possible', note: 'Good age for gentle routines' },
        { age: '6–9 months', total: '12–15 hrs', naps: '2–3 naps', night: 'Many can sleep 6+ hrs', note: 'Separation anxiety begins' },
        { age: '9–12 months', total: '12–15 hrs', naps: '2 naps', night: '6–11 hr stretches', note: 'Nap consolidation to 2' },
        { age: '12–18 months', total: '11–14 hrs', naps: '1–2 naps', night: '10–12 hrs', note: 'Transition to 1 nap (12–18 mo)' },
        { age: '18m–3 years', total: '11–14 hrs', naps: '1 nap', night: '10–12 hrs', note: 'Nap may resist after 2.5y' },
        { age: '3–5 years', total: '10–13 hrs', naps: 'Optional', night: '10–12 hrs', note: 'Nap drops age 2–5' },
      ],
    },
    {
      id: 'associations',
      title: 'Sleep associations — what they are and why they matter',
      content: [
        'A sleep association is whatever is present when your child falls asleep, that they expect to be present when they wake between sleep cycles.',
        'Common associations: nursing, rocking, a pacifier, your hand on their back, being in your arms.',
        'Associations are not inherently bad. The question is whether they require your active presence to work — and whether that is sustainable for your family.',
        '**If the association works for everyone:** there is no problem to solve. Bedsharing and night nursing are culturally normal worldwide and safe when practiced safely.',
        '**If the association is unsustainable:** this is when sleep training approaches can help shift the association to something your child can recreate on their own (like a pacifier they can replace themselves, or a comfort object).',
      ],
    },
    {
      id: 'routines',
      title: 'Building a routine that works',
      content: [
        'A consistent bedtime routine is one of the most evidence-backed sleep strategies across all ages. The routine itself matters less than its consistency.',
        '**Effective routine elements (15–30 minutes is enough):**',
        '• Bath (optional — every night is not necessary, 2-3x/week is fine)',
        '• Feed (for infants, finishing feed before sleep helps avoid feed-to-sleep association)',
        '• One or two books',
        '• Song or a short quiet activity',
        '• Sleep phrase repeated the same way every night ("time to sleep, I love you, see you in the morning")',
        '**The power of predictability:** toddlers and preschoolers are comforted by knowing what comes next. The routine signals "sleep is coming" and primes the nervous system to downregulate.',
      ],
    },
    {
      id: 'wakings',
      title: 'Night waking playbook',
      content: [
        'Not all night wakings require the same response. A framework:',
        '**Under 4 months:** Feed on demand. There is no such thing as training or spoiling a newborn. They wake to eat and that is appropriate.',
        '**4–6 months:** Begin differentiating between hunger waking and habit waking. Hunger waking comes with feeding cues (rooting, hands to mouth). Habit waking may be comforted without a full feed.',
        '**6+ months:** A healthy infant no longer needs to feed multiple times per night for nutritional reasons. Night waking is usually habitual or driven by sleep associations. Gentle approaches can help.',
        '**For all ages:** Give a brief pause (30–60 seconds) before responding to waking to see if child self-settles. Many wake briefly between cycles and go back to sleep without intervention.',
      ],
    },
  ],
}

const FR_CONTENT = {
  hero: 'Sommeil',
  subtitle: 'Comprendre le sommeil de votre enfant et développer son autonomie en douceur — avec des preuves, sans culpabilité.',
  sections: [
    {
      id: 'basics',
      title: 'Comment fonctionne le sommeil des nourrissons et des tout-petits',
      content: [
        'Les bébés ne sont pas des adultes cassés avec de mauvaises habitudes de sommeil. Le sommeil des nourrissons est biologiquement différent du sommeil adulte.',
        '**Cycles de sommeil plus courts.** Les cycles adultes durent ~90 minutes. Les cycles nourrissons durent 45–50 minutes. Entre les cycles, s\'agiter brièvement ou se réveiller partiellement est tout à fait normal.',
        '**Plus de sommeil léger.** Les nourrissons passent plus de temps en sommeil actif (léger) que les adultes. Cela est considéré comme protecteur et important pour le développement du cerveau.',
        '**Pas d\'horloge interne à la naissance.** Les rythmes circadiens se développent vers 6–12 semaines. Avant cela, la confusion jour/nuit est universelle.',
      ],
    },
    {
      id: 'expectations',
      title: 'À quoi s\'attendre à chaque stade',
      table: [
        { age: 'Nouveau-né (0–4 sem.)', total: '14–17 h', naps: '4–5 courtes siestes', night: 'Toutes les 2–3 h', note: 'Pas d\'horaire ; suivre la faim' },
        { age: '1–3 mois', total: '14–16 h', naps: '3–4 siestes', night: 'Plages de 3–4 h', note: 'Rythme circadien en émergence' },
        { age: '4–6 mois', total: '12–16 h', naps: '3 siestes', night: 'Plages plus longues possibles', note: 'Bon âge pour les routines douces' },
        { age: '6–9 mois', total: '12–15 h', naps: '2–3 siestes', night: 'Beaucoup peuvent dormir 6+ h', note: 'L\'anxiété de séparation commence' },
        { age: '9–12 mois', total: '12–15 h', naps: '2 siestes', night: 'Plages de 6–11 h', note: 'Consolidation à 2 siestes' },
        { age: '12–18 mois', total: '11–14 h', naps: '1–2 siestes', night: '10–12 h', note: 'Transition à 1 sieste (12–18 m)' },
        { age: '18m–3 ans', total: '11–14 h', naps: '1 sieste', night: '10–12 h', note: 'La sieste peut résister après 2,5 ans' },
        { age: '3–5 ans', total: '10–13 h', naps: 'Optionnel', night: '10–12 h', note: 'Abandon de sieste entre 2 et 5 ans' },
      ],
    },
    {
      id: 'associations',
      title: 'Associations de sommeil — ce qu\'elles sont et pourquoi elles comptent',
      content: [
        'Une association de sommeil est ce qui est présent quand votre enfant s\'endort, et qu\'il s\'attend à retrouver à son réveil entre les cycles.',
        'Associations courantes : allaitement, bercement, tétine, votre main dans le dos, être dans vos bras.',
        'Les associations ne sont pas intrinsèquement mauvaises. La question est de savoir si elles nécessitent votre présence active pour fonctionner — et si c\'est durable pour votre famille.',
        '**Si l\'association convient à tous :** il n\'y a pas de problème à résoudre. Le cododo et l\'allaitement nocturne sont culturellement normaux dans le monde entier et sûrs quand pratiqués correctement.',
        '**Si l\'association n\'est pas durable :** c\'est là que les approches d\'apprentissage du sommeil peuvent aider à passer à quelque chose que votre enfant peut recréer par lui-même.',
      ],
    },
    {
      id: 'routines',
      title: 'Construire une routine qui fonctionne',
      content: [
        'Une routine de coucher cohérente est l\'une des stratégies de sommeil les plus validées par les preuves pour tous les âges.',
        '**Éléments efficaces d\'une routine (15–30 minutes suffisent) :**',
        '• Bain (optionnel — pas tous les soirs, 2-3 fois par semaine suffit)',
        '• Tétée ou repas (pour les nourrissons, finir avant le sommeil aide à éviter l\'association tétée-sommeil)',
        '• Un ou deux livres',
        '• Chanson ou courte activité calme',
        '• Phrase de sommeil répétée de la même façon chaque soir',
        '**Le pouvoir de la prévisibilité :** les tout-petits et les enfants d\'âge préscolaire sont rassurés de savoir ce qui vient ensuite. La routine signale que le sommeil approche.',
      ],
    },
    {
      id: 'wakings',
      title: 'Les réveils nocturnes — que faire',
      content: [
        'Tous les réveils nocturnes ne nécessitent pas la même réponse.',
        '**Moins de 4 mois :** Nourrir à la demande. Il n\'y a pas d\'apprentissage ni de caprice pour un nouveau-né. Ils se réveillent pour manger et c\'est approprié.',
        '**4–6 mois :** Commencez à différencier les réveils de faim des réveils habituels. Les réveils de faim viennent avec des signaux de faim (fouissement, mains à la bouche).',
        '**6+ mois :** Un nourrisson en bonne santé n\'a plus besoin de téter plusieurs fois la nuit pour des raisons nutritionnelles. Les réveils sont généralement habituels ou dus aux associations de sommeil.',
        '**Pour tous les âges :** Faites une brève pause (30–60 secondes) avant de répondre pour voir si l\'enfant se rendort seul.',
      ],
    },
  ],
}

export function SleepPage() {
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const c = l === 'fr' ? FR_CONTENT : EN_CONTENT

  function renderContent(items: string[]) {
    return items.map((item, i) => {
      if (item.startsWith('•')) {
        return <li key={i} className="text-muted-foreground ml-4">{item.slice(1).trim()}</li>
      }
      const parts = item.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="text-muted-foreground">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part
          )}
        </p>
      )
    })
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">{c.hero}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{c.subtitle}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {c.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold text-foreground mb-5">{section.title}</h2>
            {'table' in section && section.table ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead className="bg-muted text-foreground">
                    <tr>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Âge' : 'Age'}</th>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Total sommeil' : 'Total sleep'}</th>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Siestes' : 'Naps'}</th>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Nuit' : 'Night'}</th>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Note' : 'Note'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="p-3 font-medium text-foreground">{row.age}</td>
                        <td className="p-3 text-muted-foreground">{row.total}</td>
                        <td className="p-3 text-muted-foreground">{row.naps}</td>
                        <td className="p-3 text-muted-foreground">{row.night}</td>
                        <td className="p-3 text-muted-foreground text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="space-y-3">
                {'content' in section && renderContent(section.content as string[])}
              </div>
            )}
          </section>
        ))}

        <section id="methods">
          <h2 className="text-2xl font-bold text-foreground mb-5">
            {l === 'fr' ? 'Méthodes d\'apprentissage du sommeil' : 'Sleep training methods'}
          </h2>
          <p className="text-muted-foreground mb-5">
            {l === 'fr'
              ? 'Les méthodes suivantes ont une base de preuves publiées. Aucune n\'est universellement meilleure — le meilleur choix dépend de votre enfant, de vos valeurs et de ce que votre famille peut maintenir.'
              : 'The following methods have a published evidence base. None is universally better — the right choice depends on your child, your values, and what your family can sustain.'}
          </p>
          <div className="space-y-3">
            {METHODS.map((method) => (
              <Link
                key={method.slug}
                to={`/${l}/sleep/methods/${method.slug}`}
                className="block p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
              >
                <h3 className="font-semibold text-foreground">{l === 'fr' ? method.titleFr : method.titleEn}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {l === 'fr' ? 'Voir les étapes, les recherches et les conseils pratiques →' : 'View steps, research, and practical tips →'}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-900">
          <strong>{l === 'fr' ? 'Quand consulter : ' : 'When to seek help: '}</strong>
          {l === 'fr'
            ? 'Si votre enfant présente une apnée du sommeil, des ronflements importants, des terreurs nocturnes fréquentes, ou si le manque de sommeil affecte significativement la santé de votre famille, consultez votre pédiatre.'
            : 'If your child shows signs of sleep apnea, heavy snoring, frequent night terrors, or if sleep deprivation is significantly affecting your family\'s health, consult your pediatrician.'}
        </div>
      </div>
    </div>
  )
}
