// ===================================================
// REWIND PARADISE — DIALOGUES
// Fred, Corey, et les pensées intérieures
// ===================================================

const DIALOGUES = {

  // ===== PENSÉES DE FRED =====
  // Apparaissent en italique dans l'interface
  // Contextuelles selon le moment et l'état du jeu

  fred: {

    // Ouverture du matin
    matin: [
      "Un autre jour. Corey arrive quand il veut.",
      "La caisse est correcte. Pour l'instant.",
      "Canopi va passer aujourd'hui. Je le sens.",
      "On a six cassettes d'action. C'est bien. C'est pas assez.",
      "Jackson a déposé la cassette ce matin. Je l'ai vue sous la porte.",
      "Corey sifflait en arrivant. Mauvais signe — il siffle quand il a fait une connerie.",
      "Encore une journée à faire semblant que c'est un vidéoclub normal."
    ],

    // Quand Canopi entre
    canopi_arrive: [
      "Il revient. Évidemment qu'il revient.",
      "Ghost encore. Toujours Ghost.",
      "Il regarde les étagères. Il fait toujours ça.",
      "Canopi. Je souris. Je mens bien.",
      "S'il demande pour les cassettes sans étiquette, je dis Corey.",
      "Il sait quelque chose. Pas sûr de quoi. Mais quelque chose."
    ],

    // Quand le stock est bas
    stock_bas: [
      "On manque d'action. Les clients vont s'en aller.",
      "Trois drames pour toute une journée. Corey va en entendre parler.",
      "Raretés épuisées. Le cinéphile va pas être content.",
      "On commande ce soir. Si on a l'argent."
    ],

    // Quand l'argent est serré
    argent_serre: [
      "On est dans la merde. Corey le sait pas encore.",
      "Jackson passe mercredi. On sera pas prêts.",
      "Cent dollars. Pour tenir jusqu'à mercredi.",
      "On a besoin d'une bonne nuit ce soir. Un bon micro-métrage."
    ],

    // Quand la légalité monte
    legalite_haute: [
      "Canopi commence à poser des questions. Les mauvaises.",
      "Il sait. Pas tout. Mais assez pour commencer à chercher.",
      "On distribue moins cette semaine. On ralentit.",
      "Le journal a parlé des micro-métrages. Canopi lit le journal."
    ],

    // Quand l'exposition monte
    exposition_haute: [
      "DiMaggio a entendu parler de nous. Jackson m'a pas dit comment.",
      "Ramon va passer. Je le sens.",
      "On est trop visibles. Cutter est fier, nous on est morts.",
      "Jackson est tendu. Quand Jackson est tendu c'est que DiMaggio l'est encore plus."
    ],

    // Fermeture du soir
    fermeture: [
      "Le rideau descend. À nous maintenant.",
      "La journée est derrière nous. Le vrai travail commence.",
      "Jackson a déposé la cassette ce matin. Faut voir ce qu'on peut faire.",
      "Corey est déjà dans la réserve. Il a pas attendu.",
      "On a fait ce qu'on pouvait. Ce soir on fait mieux."
    ],

    // Semaine 2
    semaine2: [
      "Miguel est revenu. Il veut une Cassette Noire. Je savais que ça allait arriver.",
      "Jackson a mentionné le patron aujourd'hui. Première fois.",
      "Cutter a envoyé une cassette. Corey veut qu'on la regarde ce soir.",
      "La collecte c'est mercredi. On a ce qu'il faut. Cette fois."
    ],

    // Semaine 3
    semaine3: [
      "Ramon est passé. En client. Personne vient comme ça par hasard.",
      "Canopi pose des questions directes maintenant. Plus les petites observations.",
      "Corey a lu l'article de Celluloïd Scalpel trois fois. Il parle de Cutter différemment.",
      "La boîte a disparu. Cutter l'a reprise. Ça veut dire quelque chose."
    ],

    // Semaine 4
    semaine4: [
      "Tout arrive en même temps. C'est toujours comme ça.",
      "Cutter est venu. En vrai. Corey était sans voix. Première fois.",
      "DiMaggio veut nous voir. Jackson a pas osé regarder en face.",
      "Canopi sait. La question c'est ce qu'il va faire de ça.",
      "Le film de Corey. La Beaulieu. Si on s'en sort c'est pour ça."
    ]

  },

  // ===== RÉPLIQUES DE COREY =====
  // Plus spontanées, plus référencées, parfois à côté de la plaque

  corey: {

    // Commentaires sur les clients
    clients: {
      canopi: [
        "Ghost encore. Il a pas vu d'autres films dans sa vie ?",
        "Je lui ai proposé Point Break une fois. Il a regardé la jaquette et il est reparti.",
        "T'as vu comment il regarde les étagères ? Comme un bibliothécaire de prison.",
        "Si Canopi existait dans un film, ce serait le flic sympa du premier acte qui meurt au troisième."
      ],
      action: [
        "L'Arme Fatale 2 c'est meilleur que le 1. J'assume.",
        "Ce client-là il veut du bruit et des explosions. On lui donne du bruit et des explosions.",
        "Predator ou Terminator. C'est la vraie question philosophique de notre époque."
      ],
      cinephile: [
        "Ah lui. Le test des cinq degrés. J'aime bien ce jeu. Je perds souvent mais j'aime bien.",
        "Il a demandé du De Palma. Blow Out ou Snake Eyes ? — Blow Out. Toujours Blow Out.",
        "T'as vu comment il lit les jaquettes ? Il lit vraiment. Tout. Y compris les mentions légales."
      ],
      famille: [
        "Les Henderson. Gentils. Un peu chiants. Mais gentils.",
        "Madame Henderson a regardé la jaquette de Alien et elle a fait un bruit avec la bouche.",
        "Enfants. Roi Lion ou Aladdin. On ferme les yeux et on choisit."
      ],
      miguel: [
        "Miguel. Il grandit ce gamin.",
        "Il a demandé pour les cassettes spéciales. Je lui ai dit de parler à toi.",
        "Miguel c'est le personnage principal d'un film qu'on a pas encore fait."
      ],
      inconnu: [
        "Lui je le connais pas. Et il me regarde comme si lui il me connaissait.",
        "Client bizarre. Demande vague. Ça sent l'événement narratif.",
        "Fred. Ce type-là il vient pas louer un film."
      ]
    },

    // Commentaires sur la gestion
    gestion: [
      "On manque d'action. Je commande ce soir.",
      "Le magnéto de gauche fait un bruit. J'ai tapé dessus. Ça a aidé à rien.",
      "Madame Henderson a rendu sa cassette avec de la confiture dessus. Je dis rien.",
      "Coût de la réparation : soixante dollars. Coût de pas réparer : la réputation.",
      "Jackson a appelé. J'ai pas répondu. C'est toi qui rappelles."
    ],

    // Commentaires cinéphiles (les meilleures répliques)
    cinephile: [
      "T'as pensé à la théorie du nain dans Fargo ? Le nain c'est le hasard. C'est tout le film.",
      "Ferris Bueller il s'arrête pas une seule fois pour dormir. C'est ça le vrai génie du film.",
      "De Palma c'est Hitchcock avec des idées en plus et moins de budget. C'est un compliment.",
      "Le problème avec les films d'action c'est que l'action c'est toujours une métaphore de quelque chose d'autre.",
      "John Carpenter fait des films de peur avec des personnages qui ont pas peur. C'est ça le truc.",
      "Tu sais ce que Kubrick et nous on a en commun ? On travaille dans le noir et on monte tout nous-mêmes.",
      "Un bon micro-métrage c'est comme un bon titre de roman. Ça dit tout sans expliquer.",
      "Kurosawa coupait à l'action. Ozu coupait au silence. Nous on coupe entre les deux.",
      "La différence entre un spoiler et une révélation c'est le moment où tu coupes."
    ],

    // Commentaires sur les micro-métrages
    micro: {
      avant: [
        "On a quoi ce soir ? Action ? Si c'est de l'action faut couper avant le premier coup de feu.",
        "Drame. Bien. Les drames c'est plus difficile mais les bonnes coupes sont plus belles.",
        "Horreur. La règle c'est : couper avant que ça soit confirmé. La peur vaut mieux que la chose.",
        "Comédie. Couper dans une comédie c'est le truc le plus difficile du monde. Le timing c'est tout.",
        "Rareté ce soir. Cutter va regarder ça de très près. Très très près."
      ],
      apres_bon: [
        "C'est ça. C'est exactement ça.",
        "Cutter va noter neuf. Je mets ma main à couper.",
        "On refait jamais exactement la même coupe deux fois. Celle-là elle existera qu'une fois.",
        "J'aurais coupé deux secondes plus tard. Mais toi t'as eu raison de pas attendre."
      ],
      apres_moyen: [
        "C'est correct. Correct c'est pas toujours suffisant mais c'est correct.",
        "Cutter va dire que t'aurais pu aller plus loin. Il a probablement raison.",
        "Six sur dix. On peut faire mieux. Mais on pouvait faire pire."
      ],
      apres_mauvais: [
        "Fred. Non.",
        "T'as regardé le film en entier. C'est juste un film.",
        "On recommence demain. Avec une meilleure cassette et plus de courage."
      ]
    },

    // Absences de Corey (messages du matin)
    absences: [
      "Rentré trop tard. Je serai là à midi. — C.",
      "J'ai un truc. Je t'expliquerai. Ouvre sans moi. — Corey",
      "Réveil raté. Sors Ghost du stock pour Canopi. — C.",
      "Urgence familiale. Fausse urgence mais familiale. — Corey",
      "Je suis là à onze heures. J'ai trouvé quelque chose pour ce soir. — C.",
      "Resté trop longtemps chez quelqu'un. Je dis pas qui. Je serai là.",
      "J'ai parlé à quelqu'un de Celluloïd Scalpel hier soir. Faut qu'on parle. — Corey"
    ],

    // Incidents provoqués par Corey
    incidents: [
      "J'ai mis Dirty Dancing dans le magnéto de droite par erreur. La dame était contente en fait.",
      "J'ai dit au monsieur que Schwarzenegger et Stallone c'était le même acteur. Il a pas aimé.",
      "J'ai laissé le fanzine ouvert sur le comptoir. J'ai cru que c'était un catalogue normal.",
      "J'ai expliqué la théorie du nain à Jackson. Il m'a regardé pendant trente secondes sans rien dire.",
      "Madame Henderson a vu la jaquette de Suspiria. J'avais pas vérifié ce que j'avais mis sur l'étagère du bas.",
      "J'ai répondu au téléphone en pensant que c'était un client. C'était Canopi."
    ]

  },

  // ===== DIALOGUES D'INTERROGATOIRE =====
  // Canopi pose des questions. Fred répond.

  interrogatoire: {

    questions: [

      {
        id: 'cassettes_noires',
        semaine: 2,
        question: "Ces cassettes sans étiquette derrière le comptoir. C'est quoi ?",
        options: [
          {
            texte: "Des copies de sauvegarde. Tout à fait légal.",
            tag: 'mensonge_technique',
            effet: 'neutre',
            canopi_reaction: "Il note quelque chose. Il hoche la tête."
          },
          {
            texte: "Des films que des clients ont oubliés. Ça arrive.",
            tag: 'mensonge_direct',
            effet: 'risque',
            canopi_reaction: "Il regarde la cassette. Il regarde Fred. Il note."
          },
          {
            texte: "Corey gère ça. Je m'occupe pas de tout.",
            tag: 'deflection',
            effet: 'neutre',
            canopi_reaction: "Il tourne la tête vers Corey. Corey fait semblant de ranger quelque chose."
          }
        ]
      },

      {
        id: 'jackson',
        semaine: 3,
        question: "Ce type aux dreadlocks. Il vient souvent. C'est qui ?",
        options: [
          {
            texte: "Un fournisseur. Il livre les nouvelles cassettes.",
            tag: 'mensonge_technique',
            effet: 'neutre',
            canopi_reaction: "Il regarde ses notes. Il revient à Fred."
          },
          {
            texte: "Un ami. Il passe parfois.",
            tag: 'mensonge_direct',
            effet: 'risque',
            canopi_reaction: "Il sait que c'est faux. Mais il note quand même."
          },
          {
            texte: "Je connais pas son nom. Il vient depuis longtemps.",
            tag: 'deflection',
            effet: 'neutre',
            canopi_reaction: "Canopi écrit. Fred se demande ce qu'il écrit."
          }
        ]
      },

      {
        id: 'jeunes',
        semaine: 3,
        question: "Des jeunes. Ils traînent souvent ici ?",
        options: [
          {
            texte: "On a beaucoup de clients jeunes. C'est le quartier.",
            tag: 'mensonge_technique',
            effet: 'bon',
            canopi_reaction: "Il sourit légèrement. Première fois."
          },
          {
            texte: "Moins qu'avant. Ils préfèrent les jeux vidéo maintenant.",
            tag: 'deflection',
            effet: 'bon',
            canopi_reaction: "Il rit. Vraiment. Une seconde. Puis il redevient sérieux."
          },
          {
            texte: "Y'en a un. Miguel. Client régulier. Films d'horreur.",
            tag: 'mensonge_direct',
            effet: 'risque',
            canopi_reaction: "Il note le nom. Fred regrette immédiatement."
          }
        ]
      },

      {
        id: 'micro_metrages',
        semaine: 4,
        question: "Ces courts-métrages qui circulent dans le quartier. Vous êtes au courant ?",
        options: [
          {
            texte: "J'ai lu quelque chose dans le journal. C'est étrange.",
            tag: 'mensonge_technique',
            effet: 'bon',
            canopi_reaction: "Il observe Fred. Longtemps. Trop longtemps."
          },
          {
            texte: "Non. Pas du tout. C'est quoi exactement ?",
            tag: 'mensonge_direct',
            effet: 'risque',
            canopi_reaction: "Il sait. Et maintenant Fred sait qu'il sait."
          },
          {
            texte: "Quelques rumeurs. Rien de précis.",
            tag: 'deflection',
            effet: 'neutre',
            canopi_reaction: "Il ferme son carnet. C'est pire que s'il continuait à écrire."
          }
        ]
      },

      {
        id: 'final',
        semaine: 4,
        question: "Je sais ce qui se passe ici. Vous avez deux options. Première : vous m'aidez. Deuxième : vous continuez à faire semblant que je suis juste un client qui aime Ghost.",
        options: [
          {
            texte: "Qu'est-ce que vous voulez exactement ?",
            tag: 'ouverture',
            effet: 'bon',
            canopi_reaction: "Il pose son carnet. Pour la première fois depuis le début."
          },
          {
            texte: "Je vois pas de quoi vous parlez. Ghost est disponible si vous voulez.",
            tag: 'mensonge_direct',
            effet: 'mauvais',
            canopi_reaction: "Il se lève. Il remet son manteau. Il repart."
          },
          {
            texte: "Donnez-moi jusqu'à vendredi.",
            tag: 'negociation',
            effet: 'neutre',
            canopi_reaction: "Il réfléchit. Il hoche la tête une fois. Il repart sans un mot."
          }
        ]
      }

    ],

    // Réactions de Canopi selon la cohérence globale
    coherence: {
      haute: "Canopi feuillette son carnet. Ses notes sont maigres. Il a pas grand chose.",
      moyenne: "Canopi relit quelque chose. Il regarde Fred. Il a des doutes mais pas de preuves.",
      basse: "Canopi pose le carnet ouvert sur le comptoir. Fred peut voir ce qu'il a écrit. C'est beaucoup."
    }

  },

  // ===== DIALOGUES JACKSON =====
  // Courts, directs, toujours un sous-texte

  jackson: {

    collecte: {
      cool: [
        "Voilà. Tout est là. Propre. — Ouais. Le patron est content. À la semaine prochaine.",
        "Tiens. — Bien. T'as fait du bon travail cette semaine. Continue.",
        "Cent vingt. — Reçu. T'inquiète. Ça roule."
      ],
      impatient: [
        "C'est bien mais la prochaine fois fais pas attendre. — Mmh.",
        "Le patron a demandé si c'était régulier. J'ai dit oui. Fais en sorte que ce soit vrai.",
        "C'est là. Mais j'aime pas attendre Fred. Pour personne mais pour toi non plus."
      ],
      tendu: [
        "J'avais besoin de ça hier. — Je sais. — Alors on parle pas de la prochaine fois.",
        "Le patron a remarqué le retard. C'est pas moi qui lui ai dit mais il a remarqué.",
        "Prends ça. Et rappelle-toi que moi je fais la liaison entre vous et lui. Si ça se passe mal pour toi ça se passe mal pour moi aussi."
      ],
      impossible: [
        "T'as rien. — Non. — Fred.",
        "Je peux pas repartir les mains vides. Tu comprends ça. — Donne-moi jusqu'à vendredi. — Jeudi."
      ]
    },

    livraison: {
      cool: [
        "Nouvelle cassette sous la porte. Bonne chance ce soir.",
        "Ce soir c'est du drame. Cutter aime le drame. Fais-lui plaisir.",
        "Rareté cette semaine. Jackson m'a dit que c'était spécial. Voir ça."
      ],
      impatient: [
        "Cassette là. Le patron veut voir de meilleurs résultats. Plus de notes basses.",
        "Cette semaine c'est important. Le patron regarde.",
        "J'ai mis une cassette mais franchement là j'ai autre chose en tête."
      ],
      absent: [
        "Pas de cassette ce matin. Jackson a pas déposé. C'est la première fois.",
        "Rien sous la porte. On travaille avec ce qu'on a ce soir.",
        "Jackson a pas livré. Faut trouver dans le stock."
      ]
    },

    messages_nuit: {
      cool: [
        "Ouais c'est moi. Bonne journée. La came est écoulée. À mercredi pour le fric.",
        "Jackson. Tout est cool. Le patron est content. Continue comme ça.",
        "Six sur dix cette semaine. Le patron dit que c'est acceptable. Acceptable c'est bien.",
        "Cutter a parlé de vous dans le fanzine. Le patron a lu. Il a rien dit. C'est bon signe."
      ],
      impatient: [
        "C'est Jackson. Le fric de mercredi, t'as pas oublié ? Parce que moi non.",
        "Jackson. Rappelle-moi demain. Sans faute.",
        "Le patron demande pourquoi les notes baissent. J'ai dit que vous travailliez dessus.",
        "Prochaine collecte c'est mercredi. Prépare-toi."
      ],
      tendu: [
        "Le patron a entendu des trucs. Je sais pas d'où. Fais profil bas cette semaine.",
        "Canopi est venu voir le patron. Ils se connaissent pas mais Canopi pose des questions partout.",
        "Fred. Réponds-moi demain matin. Avant l'ouverture.",
        "Ramon va passer ce soir. Tu lui parles pas de Cutter."
      ],
      furieux: [
        "[silence]",
        "[raccroché]",
        "Le patron veut vous voir. Vendredi. C'est pas une invitation."
      ]
    },

    // Semaine 4 — l'ultimatum
    ultimatum: {
      accepte: "Bien. Vendredi soir. Je passe vous chercher à vingt-deux heures. Soyez là.",
      refuse_doux: "T'as tort. Mais c'est toi qui décides. Je peux rien faire de plus.",
      refuse_dur: "Alors c'est vous qui gérez les conséquences. Moi j'ai fait ma part."
    },

    // Révélations progressives sur DiMaggio
    dimaggio_mentions: [
      "Le patron a besoin de savoir que c'est régulier.",
      "DiMaggio — c'est son nom, autant que tu le saches — DiMaggio a besoin de prévisibilité.",
      "Il a des intérêts dans plusieurs choses dans ce quartier. Vous en faites partie maintenant.",
      "Il respecte le travail. Vraiment. Mais il respecte pas les surprises."
    ]

  },

  // ===== DIALOGUES CUTTER =====
  // Dans les critiques de Celluloïd Scalpel

  cutter: {

    // Critiques complètes par note
    critiques: {

      1: [
        "Vous avez appuyé sur stop au hasard. Ce n'est pas du cinéma. C'est de la panique.",
        "Non."
      ],

      2: [
        "Vous avez coupé avant même d'avoir quelque chose à couper. C'est de la lâcheté déguisée en minimalisme. Je ne suis pas dupe.",
        "Trop tôt. Beaucoup trop tôt. Il ne s'est encore rien passé et vous avez déjà fermé les yeux."
      ],

      3: [
        "Prudent. Vous avez choisi la sécurité au moment où il fallait choisir le risque. Dommage.",
        "Zone de tension. Vous avez vu qu'il se passait quelque chose. Vous avez pas osé attendre que ça arrive vraiment."
      ],

      4: [
        "Correct dans la mauvaise zone. Vous étiez au bon endroit mais trop tard. La bascule était déjà derrière vous.",
        "Vous avez regardé le film jusqu'à la résolution et vous avez coupé là. Ce n'est pas un micro-métrage. C'est un résumé."
      ],

      5: [
        "L'instinct était là. L'audace, non. Vous êtes dans la bonne zone mais la zone n'est pas le point.",
        "Correct. Le mot le plus décevant du vocabulaire cinématographique."
      ],

      6: [
        "Vous avez vu juste mais pas loin. La prochaine fois allez plus loin. Ou pas du tout.",
        "Six sur dix. Je me souviens de chaque six sur dix que j'ai donné. Aucun ne m'a marqué."
      ],

      7: [
        "Bien. Vous avez vu où ça bascule. Vous n'avez pas eu peur d'y aller. C'est quelque chose.",
        "Sept. Le chiffre des gens qui comprennent mais qui osent pas encore complètement."
      ],

      8: [
        "Vous avez compris ce que ce film avait à dire. Et vous avez coupé au bon moment pour que ça résonne.",
        "C'est là que ça bascule. Vous l'avez vu. Vous avez coupé. C'est ce qu'on demande."
      ],

      9: [
        "Vous avez vu exactement où ça bascule. Et vous avez coupé là. C'est tout ce qu'un micro-métrage doit faire.",
        "Je commence à croire que ce n'est pas un accident. Continuez."
      ],

      10: [
        "Je ne comprends pas encore pourquoi cette coupe fonctionne. Mais elle fonctionne. Je déteste ça.",
        "Il y a des coupes qu'on comprend et des coupes qu'on ressent. Celle-ci on la ressent. C'est plus rare."
      ]

    },

    // Commentaires sur la progression
    progression: {
      amelioration: "Vous progressez. Je le note pas par gentillesse. Je le note parce que c'est vrai.",
      stagnation: "Vous stagnez. Ça arrive. Mais ça devrait pas durer.",
      regression: "Vous régressez. Soit vous avez peur. Soit vous êtes fatigué. Les deux sont mauvais signes.",
      prudence: "Vous faites des coupes prudentes depuis trois soirs. Je vois ce que vous faites. La question est : pourquoi ?",
      excellence: "Trois bonnes coupes d'affilée. Je commence à vous prendre au sérieux."
    },

    // La visite physique — dialogue complet
    visite: {
      arrivee: "Cutter. The Glitch. Je suis venu voir l'endroit.",
      observation: "Vous avez un bon stock. Des raretés aussi. Quelqu'un connaît le cinéma ici.",
      question: "Qui coupe ? Vous ou l'autre ?",
      fred_coupe: "Je m'en doutais. Ça s'entend dans les choix.",
      proposition: "Je vais vous donner quelque chose. Une contrainte. Pas une punition — une direction. Vous créez sous contrainte pendant une semaine. Ce que vous faites avec c'est votre problème.",
      restitution: "La boîte. Je l'avais prise pour voir si vous continuiez sans elle. Vous avez continué. C'est bon signe.",
      depart: "Je repasserai. Ou je repasserai pas. Ça dépend de ce que vous faites avec la contrainte."
    },

    // Les défis hebdomadaires
    defis: [
      "Le prochain doit couper avant la première ligne de dialogue.",
      "Utilisez uniquement un film que vous n'aimez pas.",
      "La coupe doit intervenir dans les quatre-vingt-dix premières secondes.",
      "Pas de film d'action cette semaine.",
      "Coupez dans un moment de silence. Pas d'action. Pas de dialogue. Du silence.",
      "Le prochain micro-métrage doit être incompréhensible pour quelqu'un qui n'a pas vu le film.",
      "Coupez au moment où ça devient inconfortable. Pas avant. Pas après."
    ]

  },

  // ===== DIALOGUES RAMON =====
  // Court. Poli. Menaçant sans le dire.

  ramon: {
    visite: [
      "Beau vidéoclub. Bien tenu.",
      "M. DiMaggio apprécie ce genre d'endroit. Le commerce local. Important.",
      "Vous êtes contents de votre installation ? La vidéo, les magnétoscopes ?",
      "Il voulait juste que vous sachiez qu'il est au courant. Que vous existez. C'est tout.",
      "Bonne journée."
    ],
    ultimatum: [
      "M. DiMaggio voudrait vous rencontrer. Vendredi. C'est une invitation. Pour l'instant."
    ]
  }

};

// ===== UTILITAIRE : RÉPLIQUE ALÉATOIRE =====
function getRandomDialogue(array) {
  if (!array || array.length === 0) return '';
  return array[Math.floor(Math.random() * array.length)];
}

// ===== UTILITAIRE : RÉPLIQUE CONTEXTUELLE =====
function getContextualDialogue(category, context, gameState) {
  const gs = gameState;
  let pool = [];

  if (category === 'fred') {
    // Priorité : contexte spécifique d'abord
    if (context === 'matin') {
      if (gs.semaine === 4) pool = DIALOGUES.fred.semaine4;
      else if (gs.semaine === 3) pool = DIALOGUES.fred.semaine3;
      else if (gs.semaine === 2) pool = DIALOGUES.fred.semaine2;
      else pool = DIALOGUES.fred.matin;

      // Surcharge selon l'état
      if (gs.legalite >= 60) {
        pool = [...pool, ...DIALOGUES.fred.legalite_haute];
      }
      if (gs.exposition >= 50) {
        pool = [...pool, ...DIALOGUES.fred.exposition_haute];
      }
      if (gs.argent < 100) {
        pool = [...pool, ...DIALOGUES.fred.argent_serre];
      }
    }
    else if (context === 'canopi') pool = DIALOGUES.fred.canopi_arrive;
    else if (context === 'fermeture') pool = DIALOGUES.fred.fermeture;
    else if (context === 'stock_bas') pool = DIALOGUES.fred.stock_bas;
  }

  else if (category === 'corey') {
    if (context === 'cinephile') pool = DIALOGUES.corey.cinephile;
    else if (context === 'incident') pool = DIALOGUES.corey.incidents;
    else if (context === 'absence') pool = DIALOGUES.corey.absences;
  }

  return getRandomDialogue(pool);
}