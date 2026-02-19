import { useParams } from 'react-router-dom'

const TOPICS_EN = [
  {
    id: 'sleep-dep',
    icon: '😴',
    title: 'Coping with sleep deprivation',
    content: [
      'Sleep deprivation is one of the most challenging aspects of early parenting. It is also one of the least acknowledged. What you are experiencing is real, documented, and not simply "part of the deal" to be pushed through.',
      'What actually helps:',
      '• Sleep when the baby sleeps — even a 20-minute nap reduces cognitive impairment significantly',
      '• Take shifts when possible (one parent takes early morning, one takes the early night)',
      '• Prioritize sleep over household tasks when you have a choice',
      '• Caffeine helps short-term but worsens sleep quality — use it strategically',
      '• Discuss night duties explicitly and honestly with your partner — asymmetric burden is common and corrosive',
      'When to seek help: Persistent inability to sleep even when the baby is sleeping, intrusive thoughts, feeling that you might harm yourself or your baby — seek professional help immediately.',
    ],
  },
  {
    id: 'burnout',
    icon: '🧘',
    title: 'Parental burnout — recognizing and reducing it',
    content: [
      'Parental burnout is a state of physical and emotional exhaustion specific to the parenting role. It is distinct from depression, though they can co-occur. It is increasingly recognized in research as a significant health issue.',
      'Signs of parental burnout:',
      '• Emotional exhaustion specifically related to your parenting role',
      '• Emotional distance from your children (going through the motions)',
      '• Loss of pleasure in interactions you previously enjoyed',
      '• Feeling like a different parent than you want to be',
      'What helps reduce burnout:',
      '• Regular respite — even 1 hour away from all parenting duties per week has measurable effect',
      '• Social connection with other parents (normalizes experience)',
      '• Explicitly naming and reducing non-essential tasks',
      '• Self-compassion practice — your inner critic is not helping anyone',
    ],
  },
  {
    id: 'good-enough',
    icon: '💚',
    title: '"Good enough" parenting',
    content: [
      'The concept of the "good enough parent" comes from British pediatrician and psychoanalyst Donald Winnicott. It is not a consolation prize — it is the actual research-based target.',
      'Children do not need perfect parents. They need parents who are present, warm, and consistent enough, and who repair ruptures (moments of misattunement, conflict, mistakes) when they occur.',
      'What the research says:',
      '• Secure attachment is built through patterns of interaction, not single interactions',
      '• Repair after rupture — how you handle the conflict, the mistake, the moment you lost your patience — matters more than avoiding the rupture entirely',
      '• Children raised by "good enough" parents show better resilience and adaptability than children raised in hyperoptimized, pressure-filled environments',
      'Practically: You will lose your patience. You will make mistakes. You will have days where you do not like yourself as a parent. These are not failures. They are the texture of parenting.',
    ],
  },
  {
    id: 'ppd',
    icon: '🆘',
    title: 'Postnatal depression and anxiety — know the signs',
    content: [
      'Postnatal depression (PND) affects approximately 1 in 7 mothers and 1 in 10 fathers. It is not weakness. It is a medical condition with effective treatments.',
      'PND is different from "baby blues" (which typically resolve within 2 weeks). PND:',
      '• Persists beyond 2 weeks postpartum',
      '• Significantly impacts daily functioning',
      '• May include intrusive thoughts, inability to bond, withdrawing from family and friends',
      'Postnatal anxiety is equally common but less often discussed. Signs include persistent worry about the baby\'s health or safety, inability to sleep when the baby sleeps, physical symptoms like rapid heartbeat or dizziness.',
      'What to do: Tell your midwife, health visitor, or doctor. The Edinburgh Postnatal Depression Scale (EPDS) is a simple validated screening tool available online. You deserve support.',
    ],
  },
  {
    id: 'self-care',
    icon: '🌱',
    title: 'Self-care that actually works',
    content: [
      'The parenting industry has complicated "self-care" into something that requires time, money, or elaborate preparation. For parents in survival mode, what actually works is simpler.',
      'Micro-practices with evidence:',
      '• 10 minutes of walking outdoors reduces stress more than 10 minutes of indoor relaxation',
      '• Maintaining one social connection per week is associated with significantly lower rates of parental depression',
      '• A regular sleep routine for the parent (consistent bedtime) helps quality even when quantity is constrained',
      '• Mindful moments (paying full attention to one thing for 1–2 minutes) are accessible even with a baby in your arms',
      'What does not help (but we tell ourselves it does):',
      '• Scrolling social media as relaxation — it increases anxiety in most studies',
      '• Comparing your parenting to curated social media content',
      '• Waiting for a "big block of time" to recover — small consistent recovery moments are more effective',
    ],
  },
]

const TOPICS_FR = [
  {
    id: 'sleep-dep',
    icon: '😴',
    title: 'Faire face au manque de sommeil',
    content: [
      'Le manque de sommeil est l\'un des aspects les plus difficiles de la parentalité précoce. C\'est aussi l\'un des moins reconnus. Ce que vous vivez est réel, documenté, et ce n\'est pas simplement « la normalité » à accepter.',
      'Ce qui aide vraiment :',
      '• Dormez quand bébé dort — même une sieste de 20 minutes réduit significativement la déficience cognitive',
      '• Prenez des quarts quand c\'est possible (un parent prend le début de soirée, l\'autre le début de matin)',
      '• Priorisez le sommeil sur les tâches ménagères quand vous avez le choix',
      '• La caféine aide à court terme mais détériore la qualité du sommeil — utilisez-la stratégiquement',
      '• Discutez explicitement et honnêtement des tâches nocturnes avec votre partenaire — le déséquilibre est courant et corrosif',
      'Quand consulter : Incapacité persistante à dormir même quand bébé dort, pensées intrusives, sentiment que vous pourriez vous blesser ou blesser votre bébé — consultez immédiatement.',
    ],
  },
  {
    id: 'burnout',
    icon: '🧘',
    title: 'L\'épuisement parental — le reconnaître et le réduire',
    content: [
      'L\'épuisement parental est un état d\'épuisement physique et émotionnel spécifique au rôle parental. Il est distinct de la dépression, bien qu\'ils puissent coexister.',
      'Signes d\'épuisement parental :',
      '• Épuisement émotionnel spécifiquement lié à votre rôle parental',
      '• Distance émotionnelle avec vos enfants (faire les gestes mécaniquement)',
      '• Perte de plaisir dans les interactions que vous aimiez auparavant',
      '• Sentiment d\'être un parent différent de celui que vous voulez être',
      'Ce qui aide à réduire l\'épuisement :',
      '• Répit régulier — même 1 heure loin de toutes les tâches parentales par semaine a un effet mesurable',
      '• Connexion sociale avec d\'autres parents (normalise l\'expérience)',
      '• Nommer et réduire explicitement les tâches non essentielles',
      '• Pratique de l\'autocompassion — votre critique intérieure n\'aide personne',
    ],
  },
  {
    id: 'good-enough',
    icon: '💚',
    title: 'La parentalité « suffisamment bonne »',
    content: [
      'Le concept du « parent suffisamment bon » vient du pédiatre et psychanalyste britannique Donald Winnicott. Ce n\'est pas un prix de consolation — c\'est l\'objectif réel basé sur la recherche.',
      'Les enfants n\'ont pas besoin de parents parfaits. Ils ont besoin de parents suffisamment présents, chaleureux et cohérents, et qui réparent les ruptures (moments de désaccord, conflits, erreurs) quand elles surviennent.',
      'Ce que dit la recherche :',
      '• L\'attachement sécurisé est construit à travers des modèles d\'interaction, pas des interactions individuelles',
      '• La réparation après la rupture — comment vous gérez le conflit, l\'erreur, le moment où vous avez perdu patience — compte plus que d\'éviter la rupture entièrement',
      '• Les enfants élevés par des parents « suffisamment bons » montrent une meilleure résilience que ceux élevés dans des environnements hyperoptimisés et sous pression',
      'Concrètement : Vous perdrez patience. Vous ferez des erreurs. Vous aurez des jours où vous ne vous aimez pas en tant que parent. Ce ne sont pas des échecs. C\'est la texture de la parentalité.',
    ],
  },
  {
    id: 'ppd',
    icon: '🆘',
    title: 'Dépression et anxiété postnatales — connaître les signes',
    content: [
      'La dépression postnatale (DPN) touche environ 1 mère sur 7 et 1 père sur 10. Ce n\'est pas une faiblesse. C\'est une condition médicale avec des traitements efficaces.',
      'La DPN est différente du « baby blues » (qui se résorbe généralement en 2 semaines). La DPN :',
      '• Persiste au-delà de 2 semaines après l\'accouchement',
      '• Affecte significativement le fonctionnement quotidien',
      '• Peut inclure des pensées intrusives, une incapacité à créer un lien, un retrait de la famille et des amis',
      'L\'anxiété postnatale est tout aussi courante mais moins souvent discutée. Les signes incluent une inquiétude persistante concernant la santé ou la sécurité du bébé, l\'incapacité à dormir quand bébé dort, des symptômes physiques.',
      'Que faire : Parlez à votre sage-femme, médecin ou pédiatre. Vous méritez du soutien.',
    ],
  },
  {
    id: 'self-care',
    icon: '🌱',
    title: 'Prendre soin de soi — ce qui fonctionne vraiment',
    content: [
      'L\'industrie parentale a compliqué les « soins personnels » en quelque chose qui nécessite du temps, de l\'argent ou une préparation élaborée. Pour les parents en mode survie, ce qui fonctionne est plus simple.',
      'Micro-pratiques avec des preuves :',
      '• 10 minutes de marche en plein air réduit le stress plus que 10 minutes de détente en intérieur',
      '• Maintenir une connexion sociale par semaine est associé à des taux nettement plus faibles de dépression parentale',
      '• Une routine de sommeil régulière pour le parent améliore la qualité même quand la quantité est limitée',
      '• Les moments de pleine conscience sont accessibles même avec un bébé dans les bras',
      'Ce qui n\'aide pas (mais on se convainc que si) :',
      '• Faire défiler les réseaux sociaux comme détente — cela augmente l\'anxiété dans la plupart des études',
      '• Comparer sa parentalité à du contenu soigneusement sélectionné sur les réseaux sociaux',
      '• Attendre un « grand bloc de temps » pour se remettre — les petits moments de récupération réguliers sont plus efficaces',
    ],
  },
]

export function WellbeingPage() {
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const topics = l === 'fr' ? TOPICS_FR : TOPICS_EN

  function renderContent(items: string[]) {
    return items.map((item, i) => {
      if (item.startsWith('•')) {
        return (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-teal-500 mt-0.5 shrink-0">•</span>
            {item.slice(1).trim()}
          </li>
        )
      }
      return <p key={i} className="text-sm text-muted-foreground">{item}</p>
    })
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-50 to-cyan-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            {l === 'fr' ? 'Bien-être parental' : 'Parent Wellbeing'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {l === 'fr'
              ? 'Prendre soin de soi n\'est pas un luxe — c\'est une nécessité pour bien prendre soin de votre enfant.'
              : 'Taking care of yourself is not a luxury — it is a necessity for caring well for your child.'}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-sm text-teal-900">
          <strong>💚 </strong>
          {l === 'fr'
            ? 'Vous n\'avez pas besoin d\'être parfait(e). La cohérence, la chaleur et la disponibilité font bien plus que la perfection. Et un parent qui prend soin de lui-même prend mieux soin de son enfant.'
            : 'You don\'t need to be perfect. Consistency, warmth, and availability matter far more than perfection. A parent who takes care of themselves takes better care of their child.'}
        </div>

        {topics.map((topic) => (
          <section key={topic.id} id={topic.id} className="border border-border rounded-2xl overflow-hidden">
            <div className="bg-teal-50 px-5 py-4 flex items-center gap-3 border-b border-border">
              <span className="text-2xl">{topic.icon}</span>
              <h2 className="text-lg font-bold text-foreground">{topic.title}</h2>
            </div>
            <div className="p-5 space-y-2">
              {renderContent(topic.content)}
            </div>
          </section>
        ))}

        <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
          <p className="font-semibold text-amber-900 mb-2">
            {l === 'fr' ? '🆘 Besoin d\'aide urgente ?' : '🆘 Need urgent help?'}
          </p>
          <p className="text-sm text-amber-800">
            {l === 'fr'
              ? 'Si vous ressentez des pensées suicidaires ou que vous pourriez blesser votre enfant, contactez immédiatement votre médecin ou les services d\'urgence. Vous n\'êtes pas seul(e).'
              : 'If you are experiencing suicidal thoughts or fear you might harm your child, contact your doctor or emergency services immediately. You are not alone.'}
          </p>
        </div>
      </div>
    </div>
  )
}
