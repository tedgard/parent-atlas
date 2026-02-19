import { useParams } from 'react-router-dom'

const STAGES_EN = [
  {
    age: '0–3 months',
    icon: '👶',
    play: 'Sensory play — faces, voices, gentle touch. Black & white contrast cards. Tummy time.',
    language: 'Talk and narrate everything. Respond to every coo. Exaggerated facial expressions. Parentese (high pitch, slow, sing-song speech) is not silly — it helps babies tune into language.',
  },
  {
    age: '3–6 months',
    icon: '🌞',
    play: 'Reaching for dangling toys. Mirrors (babies love their own reflection). Simple rattles. Interactive play — peek-a-boo, tickling, songs with movement.',
    language: 'Continue narrating. Respond to babble as if it is speech. Name things around you. Read board books — they do not need to understand them yet.',
  },
  {
    age: '6–9 months',
    icon: '🤲',
    play: 'Object permanence games (hiding a toy under a cloth). Banging toys together. Container play — putting things in and taking them out. Cause-and-effect toys.',
    language: 'Simple repetitive words: "up, up, up", "bye-bye". Point to body parts. Repeat their babble back to them with correct words: they say "ba-ba", you say "ball!".',
  },
  {
    age: '9–12 months',
    icon: '🔍',
    play: 'Pulling up and exploring the environment. Simple puzzles with large knobs. Stack and knock. Playing with household objects (containers, wooden spoons).',
    language: 'First words typically emerge. Point to things and name them. Simple instructions: "give me the ball". Read books together pointing at pictures. Joint attention (look at the same thing together) is crucial.',
  },
  {
    age: '12–18 months',
    icon: '🚶',
    play: 'Pushing and pulling toys. Fill-and-dump containers. Simple pretend play (feeding a doll). Scribbling with fat crayons. Playing outdoors — sand, water, grass.',
    language: 'Vocabulary explosion is coming — some children have it at 12 months, some at 18. Build vocabulary by naming and describing. Expand what they say: they say "ball", you say "big red ball".',
  },
  {
    age: '18 months – 2 years',
    icon: '🎭',
    play: 'Pretend play with real-world scenarios (tea party, shop). Simple puzzles. Block building. Coloring. Dancing to music.',
    language: 'Two-word phrases emerge. Use simple, clear sentences. Read the same books repeatedly — toddlers love repetition and it builds language. Sing nursery rhymes.',
  },
  {
    age: '2–3 years',
    icon: '🎨',
    play: 'Rich imaginative play with storylines. Simple board games (Snakes & Ladders). Drawing people. Building with blocks. Outdoor play at playgrounds.',
    language: 'Three and four word sentences. Ask open-ended questions: "what happened?", "what do you think?". Expand their stories. Introduce rhyming games — crucial for reading readiness.',
  },
  {
    age: '3–5 years',
    icon: '🌍',
    play: 'Cooperative play with peers. Complex role play. Building elaborate structures. Beginning board games with turns. Art projects.',
    language: 'Full sentences. Storytelling. Letter recognition and phonological awareness (hearing sounds in words) develops naturally through songs, rhymes, and environmental print. No formal instruction needed.',
  },
]

const STAGES_FR = [
  {
    age: '0–3 mois',
    icon: '👶',
    play: 'Jeux sensoriels — visages, voix, toucher doux. Cartes contraste noir & blanc. Temps sur le ventre.',
    language: 'Parlez et commentez tout. Répondez à chaque gazouilli. Expressions faciales exagérées. Le « parentais » (voix aiguë, lente, chantante) n\'est pas bête — il aide les bébés à se connecter au langage.',
  },
  {
    age: '3–6 mois',
    icon: '🌞',
    play: 'Attraper des jouets suspendus. Miroirs (les bébés adorent leur reflet). Hochets simples. Jeux interactifs — coucou, chatouilles, chansons avec mouvements.',
    language: 'Continuez à narrer. Répondez aux babillages comme s\'ils étaient de la parole. Nommez les choses autour de vous. Lisez des livres cartonnés — ils n\'ont pas besoin de les comprendre encore.',
  },
  {
    age: '6–9 mois',
    icon: '🤲',
    play: 'Jeux de permanence de l\'objet (cacher un jouet sous un tissu). Frapper des jouets ensemble. Jeux de contenants. Jouets à cause et effet.',
    language: 'Mots répétitifs simples : « haut, haut, haut », « au revoir ». Pointez les parties du corps. Répétez leur babillage avec des mots corrects : ils disent « ba-ba », vous dites « ballon ! ».',
  },
  {
    age: '9–12 mois',
    icon: '🔍',
    play: 'Se lever et explorer l\'environnement. Puzzles simples avec gros boutons. Empiler et faire tomber. Jouer avec des objets ménagers (contenants, cuillères en bois).',
    language: 'Les premiers mots émergent généralement. Pointez les choses et nommez-les. Instructions simples : « donne-moi le ballon ». Lisez des livres en pointant les images. L\'attention conjointe est cruciale.',
  },
  {
    age: '12–18 mois',
    icon: '🚶',
    play: 'Jouets à pousser et tirer. Contenants à remplir et vider. Jeu symbolique simple (nourrir une poupée). Gribouiller avec des gros crayons. Jouer dehors — sable, eau, herbe.',
    language: 'L\'explosion du vocabulaire arrive — certains enfants l\'ont à 12 mois, d\'autres à 18. Développez le vocabulaire en nommant et décrivant. Élargissez ce qu\'ils disent : ils disent « balle », vous dites « grande balle rouge ».',
  },
  {
    age: '18 mois – 2 ans',
    icon: '🎭',
    play: 'Jeu symbolique avec des scénarios du monde réel (goûter, magasin). Puzzles simples. Construction de blocs. Coloriage. Danser sur de la musique.',
    language: 'Les phrases de deux mots émergent. Utilisez des phrases simples et claires. Lisez les mêmes livres à répétition — les tout-petits adorent la répétition et cela construit le langage. Chantez des comptines.',
  },
  {
    age: '2–3 ans',
    icon: '🎨',
    play: 'Jeu imaginatif riche avec des histoires. Jeux de société simples. Dessiner des personnes. Construire avec des blocs. Jouer dans les parcs.',
    language: 'Phrases de trois et quatre mots. Posez des questions ouvertes : « que s\'est-il passé ? », « que penses-tu ? ». Élargissez leurs histoires. Introduisez les jeux de rimes — cruciaux pour la préparation à la lecture.',
  },
  {
    age: '3–5 ans',
    icon: '🌍',
    play: 'Jeu coopératif avec des pairs. Jeu de rôle complexe. Construction de structures élaborées. Jeux de société avec tours. Projets d\'art.',
    language: 'Phrases complètes. Narration d\'histoires. La reconnaissance des lettres et la conscience phonologique se développent naturellement grâce aux chansons, aux rimes et à l\'imprimé environnemental.',
  },
]

const TIPS_EN = [
  {
    icon: '🔄',
    title: 'Serve and return',
    desc: 'When a child initiates interaction (pointing, babbling, making eye contact) and an adult responds warmly and consistently, essential neural connections are built. This back-and-forth is the foundation of language and emotional development.',
  },
  {
    icon: '📚',
    title: 'Read aloud every day',
    desc: 'Even before they understand words, reading exposes children to vocabulary, sentence structure, and print concepts. Choose books they enjoy — the same book 100 times is better than forcing variety.',
  },
  {
    icon: '💬',
    title: 'Narrate your day',
    desc: '"I\'m washing the dishes now. The water is warm. I\'m using soap." Narration floods children with language in context. Children of parents who narrate more have larger vocabularies by 3.',
  },
  {
    icon: '🎵',
    title: 'Songs and rhymes',
    desc: 'Phonological awareness — hearing the sounds in words — is the single strongest predictor of reading success. Songs and rhymes build this effortlessly. Sing the same songs repeatedly.',
  },
  {
    icon: '📵',
    title: 'Minimize screen time before 2',
    desc: 'WHO recommends no screen time under 2 (except video calls). 2–5 year olds: limit to 1 hour of high-quality co-viewed content. The issue is displacement of face-to-face interaction, not screen content itself.',
  },
  {
    icon: '🌿',
    title: 'Unstructured outdoor play',
    desc: 'Free play in natural environments develops executive function, risk assessment, physical coordination, and creativity. It does not need to be structured or educational.',
  },
]

const TIPS_FR = [
  {
    icon: '🔄',
    title: 'Servir et renvoyer',
    desc: 'Quand un enfant initie une interaction (pointer, babiller, établir un contact visuel) et qu\'un adulte répond chaleureusement et de manière cohérente, des connexions neuronales essentielles se forment. Cet échange aller-retour est la base du langage et du développement émotionnel.',
  },
  {
    icon: '📚',
    title: 'Lire à voix haute chaque jour',
    desc: 'Même avant de comprendre les mots, la lecture expose les enfants au vocabulaire, à la structure des phrases et aux concepts d\'impression. Choisissez des livres qu\'ils aiment — le même livre 100 fois vaut mieux que forcer la variété.',
  },
  {
    icon: '💬',
    title: 'Narrez votre journée',
    desc: '« Je fais la vaisselle maintenant. L\'eau est chaude. J\'utilise du savon. » La narration inonde les enfants de langage en contexte. Les enfants de parents qui narrent plus ont un vocabulaire plus large à 3 ans.',
  },
  {
    icon: '🎵',
    title: 'Chansons et comptines',
    desc: 'La conscience phonologique — entendre les sons dans les mots — est le meilleur prédicteur du succès en lecture. Les chansons et les comptines la développent sans effort. Chantez les mêmes chansons à répétition.',
  },
  {
    icon: '📵',
    title: 'Minimiser le temps d\'écran avant 2 ans',
    desc: 'L\'OMS recommande aucun temps d\'écran avant 2 ans (sauf appels vidéo). 2–5 ans : limitez à 1 heure de contenu de qualité co-visionné. Le problème est le déplacement des interactions face à face.',
  },
  {
    icon: '🌿',
    title: 'Jeu libre en plein air',
    desc: 'Le jeu libre dans des environnements naturels développe les fonctions exécutives, l\'évaluation des risques, la coordination physique et la créativité. Il n\'a pas besoin d\'être structuré ou éducatif.',
  },
]

export function PlayLanguagePage() {
  const { locale } = useParams<{ locale: string }>()
  const l = locale ?? 'en'
  const stages = l === 'fr' ? STAGES_FR : STAGES_EN
  const tips = l === 'fr' ? TIPS_FR : TIPS_EN

  return (
    <div>
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            {l === 'fr' ? 'Jeu & Langage' : 'Play & Language'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {l === 'fr'
              ? 'Micro-pratiques quotidiennes pour le lien affectif et le développement du langage, de la naissance à 5 ans.'
              : 'Daily micro-practices for bonding and language development, from birth to 5 years.'}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* Core tips */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {l === 'fr' ? 'Pratiques essentielles' : 'Core practices'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="p-5 rounded-xl border border-border bg-card flex flex-col gap-2">
                <div className="text-2xl">{tip.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stage-by-stage */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {l === 'fr' ? 'Par tranche d\'âge' : 'By age range'}
          </h2>
          <div className="space-y-4">
            {stages.map((stage) => (
              <div key={stage.age} className="border border-border rounded-xl overflow-hidden">
                <div className="bg-pink-50 px-5 py-3 flex items-center gap-2 border-b border-border">
                  <span className="text-xl">{stage.icon}</span>
                  <h3 className="font-semibold text-foreground">{stage.age}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {l === 'fr' ? 'JEU' : 'PLAY'}
                    </p>
                    <p className="text-sm text-foreground">{stage.play}</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {l === 'fr' ? 'LANGAGE' : 'LANGUAGE'}
                    </p>
                    <p className="text-sm text-foreground">{stage.language}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="p-5 rounded-xl bg-pink-50 border border-pink-200">
          <h3 className="font-semibold text-pink-900 mb-2">
            {l === 'fr' ? '💛 Rappel important' : '💛 Important reminder'}
          </h3>
          <p className="text-sm text-pink-800">
            {l === 'fr'
              ? 'Le développement du langage varie considérablement entre les enfants. Les bilingues peuvent sembler « en retard » dans chaque langue alors qu\'ils sont en fait sur la bonne voie. Si vous avez des inquiétudes, consultez un orthophoniste.'
              : 'Language development varies enormously between children. Bilingual children may appear "behind" in each language while actually being on track overall. If you have concerns, consult a speech-language pathologist.'}
          </p>
        </div>
      </div>
    </div>
  )
}
