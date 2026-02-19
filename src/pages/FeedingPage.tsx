import { useParams } from 'react-router-dom'

const EN = {
  hero: 'Feeding & Nutrition',
  subtitle: 'Starting solids, texture progression, and responsive feeding based on WHO and AAP guidance.',
  sections: [
    {
      id: 'when',
      title: 'When do solids start?',
      content: [
        'The WHO and AAP both recommend exclusive breastfeeding (or formula) for the **first 6 months**, followed by introduction of complementary foods alongside continued breastfeeding up to 2 years or beyond.',
        'The "around 6 months" guideline exists because before 6 months, the digestive system and kidneys are not mature enough to handle solid foods, and the swallowing reflex that prevents choking is still developing.',
        'Some babies show readiness signs slightly before 6 months (but not before 4 months). Starting before 4 months is not recommended regardless of readiness signs.',
      ],
    },
    {
      id: 'readiness',
      title: 'Signs of readiness for solids',
      list: [
        'Sitting up with minimal support and holding head steady',
        'Showing interest in food (watching you eat, reaching for food)',
        'Loss of the tongue-thrust reflex (no longer pushing food out with the tongue)',
        'Ability to move food to the back of the mouth and swallow',
        'Doubled birth weight (roughly)',
      ],
      note: 'Age alone is not sufficient — look for readiness signs. If uncertain, ask your pediatrician.',
    },
    {
      id: 'textures',
      title: 'Texture progression',
      table: [
        { phase: 'Stage 1 (~6 months)', texture: 'Smooth purees', examples: 'Single-ingredient purees (butternut squash, sweet potato, pea), thin oatmeal' },
        { phase: 'Stage 2 (~7–8 months)', texture: 'Thicker purees, soft lumps', examples: 'Combinations, mashed avocado, soft banana chunks' },
        { phase: 'Stage 3 (~9–10 months)', texture: 'Soft pieces, small chunks', examples: 'Well-cooked soft vegetables, ripe fruit pieces, soft pasta' },
        { phase: 'Stage 4 (~10–12 months)', texture: 'Table food, minced/chopped', examples: 'Most family foods cut small, avoid choking hazards' },
        { phase: '12+ months', texture: 'Family food with modifications', examples: 'Same as family with adjustments for salt and texture as needed' },
      ],
    },
    {
      id: 'blw',
      title: 'Purees vs. baby-led weaning',
      content: [
        '**Traditional weaning (purees):** Start with smooth purees, progress through texture stages. Gives you more control over intake. Recommended when there are concerns about iron intake or growth.',
        '**Baby-led weaning (BLW):** Skip purees; offer soft finger foods from the start at ~6 months. Baby self-feeds. Research shows similar outcomes to purees for growth and development, with some evidence for better acceptance of textures later.',
        '**Combined approach:** Most families end up doing both — some purees, some finger foods. This is fine. There is no evidence one approach is universally better.',
        '**Both approaches require:** appropriate texture for age, supervision at all mealtimes, never leaving baby alone while eating.',
      ],
    },
    {
      id: 'responsive',
      title: 'Responsive feeding',
      content: [
        'Responsive feeding (also called demand feeding for solids) means following your child\'s hunger and fullness cues rather than prescribing how much they eat.',
        '**The Division of Responsibility (Ellyn Satter, widely adopted by AAP and dietitians):**',
        '• Parent decides: WHAT foods are offered, WHEN meals happen, WHERE meals take place',
        '• Child decides: WHETHER to eat what is offered, HOW MUCH to eat',
        'This division, followed consistently, is associated with better long-term eating behaviors, lower rates of eating disorders, and healthier weight outcomes compared to pressure feeding or restrictive feeding.',
        '**What this looks like in practice:** Offer a variety of foods at regular mealtimes. Do not comment on how much or how little is eaten. Trust your child\'s appetite.',
      ],
    },
    {
      id: 'allergens',
      title: 'Introducing common allergens',
      content: [
        'Guidelines have changed in the past decade. **Early introduction of allergenic foods (around 6 months, once solids are started) is now recommended** for most infants — including peanuts, eggs, tree nuts, fish, wheat, and dairy.',
        'Delaying allergen introduction does not reduce allergy risk and may increase it. The LEAP study (2015) was landmark: early introduction of peanut significantly reduced peanut allergy in high-risk infants.',
        '**If your baby has eczema or a known egg allergy:** discuss allergen introduction with your doctor first, as they may be higher-risk and benefit from supervised introduction.',
        'Introduce one new allergen at a time, wait 3–5 days before introducing another, and introduce at home (not daycare) on a day when you can observe for reactions.',
      ],
    },
    {
      id: 'challenges',
      title: 'Common challenges',
      items: [
        { q: 'My baby only wants purees and refuses textures', a: 'Texture progression takes time. Continue offering soft lumps alongside purees. If still stuck at 10+ months, mention to your pediatrician.' },
        { q: 'My toddler only eats 5 foods', a: 'Food neophobia (fear of new foods) peaks at 2–3 years. Keep offering without pressure. It can take 15–20 neutral exposures before acceptance. This is normal.' },
        { q: 'My child is dropping weight percentiles', a: 'This warrants a conversation with your pediatrician. Do not restrict or pressure — both make things worse. Get professional guidance.' },
        { q: 'Mealtimes are stressful battles', a: 'Stress at mealtimes is independently associated with worse eating outcomes. Back off the pressure. Aim for neutral, pleasant meals. If needed, consult a pediatric feeding therapist.' },
      ],
    },
    {
      id: 'pressure',
      title: 'What not to do',
      content: [
        '**Do not force or pressure your child to eat.** Research consistently shows this reduces intrinsic appetite signals, increases food aversion, and worsens picky eating long-term.',
        '**Do not use dessert as a reward.** "Eat your vegetables to get dessert" increases the perceived desirability of dessert and decreases willingness to eat vegetables. Offer dessert alongside the meal without conditions.',
        '**Do not short-order cook.** Preparing separate meals teaches children they will always get what they want. Serve one meal; include something you know they like.',
        '**Do not panic about picky eating.** It is a nearly universal phase. Your reaction to it — not the picky eating itself — largely determines whether it persists.',
      ],
    },
  ],
}

const FR = {
  hero: 'Alimentation & Nutrition',
  subtitle: 'La diversification alimentaire, les textures et l\'alimentation réactive, basées sur les recommandations de l\'OMS et de l\'AAP.',
  sections: [
    {
      id: 'when',
      title: 'Quand commencer les solides ?',
      content: [
        'L\'OMS et l\'AAP recommandent toutes deux l\'allaitement exclusif (ou le lait infantile) pendant les **6 premiers mois**, suivi de l\'introduction d\'aliments complémentaires tout en continuant l\'allaitement jusqu\'à 2 ans et au-delà.',
        'La directive « vers 6 mois » existe parce qu\'avant cet âge, le système digestif et les reins ne sont pas assez matures pour les aliments solides, et le réflexe de déglutition est encore en développement.',
        'Certains bébés montrent des signes de préparation légèrement avant 6 mois (mais pas avant 4 mois). Commencer avant 4 mois n\'est pas recommandé.',
      ],
    },
    {
      id: 'readiness',
      title: 'Signes de préparation aux solides',
      list: [
        'S\'asseoir avec un soutien minimal et tenir la tête stable',
        'Montrer de l\'intérêt pour la nourriture (regarder manger, tendre la main vers la nourriture)',
        'Perte du réflexe d\'extrusion de la langue (ne pousse plus la nourriture hors de sa bouche)',
        'Capacité à déplacer la nourriture vers le fond de la bouche et à avaler',
        'A environ doublé son poids de naissance',
      ],
      note: 'L\'âge seul ne suffit pas — cherchez les signes de préparation. En cas de doute, consultez votre pédiatre.',
    },
    {
      id: 'textures',
      title: 'Progression des textures',
      table: [
        { phase: 'Étape 1 (~6 mois)', texture: 'Purées lisses', examples: 'Purées à un ingrédient (courge, patate douce, petits pois), bouillie fine' },
        { phase: 'Étape 2 (~7–8 mois)', texture: 'Purées plus épaisses, grumeaux doux', examples: 'Combinaisons, avocat écrasé, morceaux de banane molle' },
        { phase: 'Étape 3 (~9–10 mois)', texture: 'Morceaux mous', examples: 'Légumes cuits, fruits mûrs en morceaux, pâtes molles' },
        { phase: 'Étape 4 (~10–12 mois)', texture: 'Aliments de table, hachés/coupés', examples: 'La plupart des aliments familiaux en petits morceaux' },
        { phase: '12+ mois', texture: 'Aliments familiaux avec modifications', examples: 'Comme la famille avec ajustements pour le sel et la texture' },
      ],
    },
    {
      id: 'blw',
      title: 'Purées ou diversification menée par l\'enfant (DME)',
      content: [
        '**Diversification traditionnelle (purées) :** Commencer par des purées lisses, progresser à travers les textures. Donne plus de contrôle sur les apports. Recommandée en cas de préoccupations concernant l\'apport en fer ou la croissance.',
        '**Diversification menée par l\'enfant (DME) :** Sauter les purées ; proposer des aliments à manger avec les doigts dès le début vers 6 mois. La recherche montre des résultats similaires aux purées pour la croissance et le développement.',
        '**Approche combinée :** La plupart des familles font les deux — quelques purées, quelques aliments à manger avec les doigts. C\'est parfaitement bien.',
        '**Les deux approches nécessitent :** une texture appropriée à l\'âge, une supervision constante, ne jamais laisser bébé seul pendant les repas.',
      ],
    },
    {
      id: 'responsive',
      title: 'L\'alimentation réactive',
      content: [
        'L\'alimentation réactive signifie suivre les signaux de faim et de satiété de votre enfant plutôt que de prescrire combien il mange.',
        '**Le partage des responsabilités (Ellyn Satter, largement adopté par l\'AAP) :**',
        '• Le parent décide : QUOI proposer, QUAND les repas ont lieu, OÙ les repas se passent',
        '• L\'enfant décide : SI manger ce qui est proposé, COMBIEN manger',
        'Cette répartition, suivie de manière cohérente, est associée à de meilleurs comportements alimentaires à long terme, à des taux plus faibles de troubles alimentaires et à des résultats de poids plus sains.',
        '**En pratique :** Proposer une variété d\'aliments à des repas réguliers. Ne pas commenter la quantité mangée. Faire confiance à l\'appétit de votre enfant.',
      ],
    },
    {
      id: 'allergens',
      title: 'Introduire les allergènes courants',
      content: [
        'Les recommandations ont changé ces dernières années. **L\'introduction précoce des aliments allergènes (vers 6 mois, une fois les solides commencés) est maintenant recommandée** pour la plupart des nourrissons — y compris les arachides, les œufs, les fruits à coque, le poisson, le blé et les produits laitiers.',
        'Retarder l\'introduction des allergènes ne réduit pas le risque d\'allergie et peut l\'augmenter.',
        '**Si votre bébé a de l\'eczéma ou une allergie à l\'œuf connue :** discutez de l\'introduction des allergènes avec votre médecin en premier.',
        'Introduire un nouvel allergène à la fois, attendre 3–5 jours avant d\'en introduire un autre, et introduire à la maison un jour où vous pouvez observer les réactions.',
      ],
    },
    {
      id: 'challenges',
      title: 'Défis courants',
      items: [
        { q: 'Mon bébé ne veut que des purées et refuse les textures', a: 'La progression des textures prend du temps. Continuez à proposer des grumeaux doux avec les purées. Si le problème persiste après 10 mois, mentionnez-le à votre pédiatre.' },
        { q: 'Mon tout-petit ne mange que 5 aliments', a: 'La néophobie alimentaire culmine entre 2 et 3 ans. Continuez à proposer sans pression. Il peut falloir 15 à 20 expositions neutres avant l\'acceptation. C\'est normal.' },
        { q: 'Mon enfant perd des percentiles de poids', a: 'Cela mérite une conversation avec votre pédiatre. Ne restreignez pas et ne faites pas pression — les deux aggravent les choses. Obtenez des conseils professionnels.' },
        { q: 'Les repas sont des batailles stressantes', a: 'Le stress aux repas est indépendamment associé à de moins bons résultats alimentaires. Réduisez la pression. Visez des repas neutres et agréables.' },
      ],
    },
    {
      id: 'pressure',
      title: 'Ce qu\'il faut éviter',
      content: [
        '**Ne forcez pas votre enfant à manger.** La recherche montre systématiquement que cela réduit les signaux d\'appétit intrinsèques, augmente l\'aversion alimentaire et aggrave la sélectivité alimentaire à long terme.',
        '**N\'utilisez pas le dessert comme récompense.** « Mange tes légumes pour avoir le dessert » augmente la désirabilité perçue du dessert et diminue la volonté de manger des légumes.',
        '**Ne préparez pas des plats séparés.** Servir un repas ; incluez quelque chose que vous savez qu\'ils aiment.',
        '**Ne paniquez pas face à la sélectivité alimentaire.** C\'est une phase quasi universelle. Votre réaction — pas la sélectivité elle-même — détermine en grande partie si elle persiste.',
      ],
    },
  ],
}

export function FeedingPage() {
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const c = l === 'fr' ? FR : EN

  function renderContent(items: string[]) {
    return items.map((item, i) => {
      if (item.startsWith('•')) {
        return <li key={i} className="text-muted-foreground ml-4 list-disc">{item.slice(1).trim()}</li>
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
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">{c.hero}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{c.subtitle}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        {c.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold text-foreground mb-5">{section.title}</h2>

            {'table' in section && section.table && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead className="bg-muted text-foreground">
                    <tr>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Étape' : 'Stage'}</th>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Texture' : 'Texture'}</th>
                      <th className="text-left p-3 font-semibold">{l === 'fr' ? 'Exemples' : 'Examples'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                        <td className="p-3 font-medium text-foreground">{row.phase}</td>
                        <td className="p-3 text-muted-foreground">{row.texture}</td>
                        <td className="p-3 text-muted-foreground text-xs">{row.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {'list' in section && section.list && (
              <>
                <ul className="space-y-2 mb-4">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {'note' in section && section.note && (
                  <p className="text-sm text-muted-foreground italic">{section.note}</p>
                )}
              </>
            )}

            {'items' in section && section.items && (
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-muted/30 border border-border">
                    <p className="font-medium text-foreground mb-2">❓ {item.q}</p>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            )}

            {'content' in section && section.content && (
              <div className="space-y-3">{renderContent(section.content as string[])}</div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
