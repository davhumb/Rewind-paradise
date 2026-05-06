// ===================================================
// REWIND PARADISE — CASSETTES SOURCES v2
// 20 micro-métrages avec vraies histoires
// ===================================================

const CASSETTES_DATA = [

  // ===================================================
  // SEMAINE 1
  // ===================================================

  {
    id: 'john_hammond',
    titre: 'LE PÉCHÉ DE JOHN HAMMOND',
    type: 'DRAME AMÉRICAIN',
    synopsis: 'Un avocat brillant. Une femme qui sait.',
    semaine_min: 1,
    difficulte: 2,
    segments: [
      {
        zone: 'bleu',
        icon: '🎓',
        personnage: 'JOHN HAMMOND, 24 ans',
        lieu: 'Harvard — Cérémonie de remise des diplômes',
        texte: 'Le chapeau lancé. L\'avenir devant. Il croit en tout encore.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'bleu',
        icon: '🏢',
        personnage: 'JOHN HAMMOND',
        lieu: 'Bronson, Wilson, Rambrant and Wilson Jr.',
        texte: 'La plaque dorée sur la façade. Il entre sans regarder derrière lui.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '💍',
        personnage: 'SA FIANCÉE',
        lieu: 'Leur appartement — La veille de la signature',
        texte: '"John. Signe pas." Il sourit. Il dit rien encore.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🖊️',
        personnage: 'JOHN HAMMOND',
        lieu: 'NOIR',
        texte: 'En off : "Ok chérie." Une plume sur du papier. Le silence après.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '💰',
        personnage: 'JOHN HAMMOND, millionnaire',
        lieu: 'Partout et nulle part',
        texte: 'Il gagne tout. Il se marie. Elle est fière. Pour l\'instant.',
        label: 'RÉSOLUTION'
      },
      {
        zone: 'vert',
        icon: '⚖️',
        personnage: 'JOHN HAMMOND',
        lieu: 'Tribunal',
        texte: 'Il attaque Bronson, Wilson, Rambrant. Il gagne. Fin américaine.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [3],
    critiques_par_zone: {
      bleu:   'Vous avez coupé avant que l\'histoire commence. C\'est une bande-annonce.',
      orange: 'Vous avez coupé sur elle. Pas sur lui. C\'est un autre film. Meilleur peut-être.',
      rouge:  'Vous avez compris que le film s\'arrête au moment où tout commence vraiment.',
      vert:   'Vous avez voulu expliquer. Le cinéma n\'explique pas. Il montre et il s\'arrête.'
    },
    corey_avant: 'Drame américain. Méfie-toi des fins heureuses.',
    cutter_special: null
  },

  {
    id: 'derniere_course',
    titre: 'LA DERNIÈRE COURSE DE JIMMY PEARL',
    type: 'DRAME URBAIN',
    synopsis: 'Un chauffeur. Une course qu\'il refuse. Ce qu\'il rate — ou évite.',
    semaine_min: 1,
    difficulte: 1,
    segments: [
      {
        zone: 'bleu',
        icon: '🚕',
        personnage: 'JIMMY PEARL, chauffeur de taxi',
        lieu: 'Manhattan — 3h du matin',
        texte: 'Vingt ans de courses. Jimmy connaît chaque rue par son odeur.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🙋',
        personnage: 'UN HOMME EN IMPERMÉABLE',
        lieu: 'Coin de rue — sous la pluie',
        texte: 'Il lève la main. Jimmy le voit. Jimmy accélère.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🚦',
        personnage: 'JIMMY PEARL',
        lieu: 'Feu rouge — 200 mètres plus loin',
        texte: 'Jimmy regarde dans le rétroviseur. L\'homme est toujours là. Jimmy pose la main sur le levier de marche arrière.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🌧️',
        personnage: 'JIMMY PEARL',
        lieu: 'La même rue — cinq secondes plus tard',
        texte: 'Le feu passe au vert. Jimmy repose la main sur le volant. Il repart. L\'homme rétrécit dans le miroir.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Vingt ans de courses et vous avez coupé avant la première. C\'est du décor.',
      orange: 'Vous avez coupé sur le geste. Pas sur la décision. Le geste sans la décision c\'est du mime.',
      rouge:  'Vous avez coupé sur la main sur le levier. On ne saura jamais. C\'est exactement ça.',
      vert:   'Jimmy repart. Vous avez attendu de savoir. Moi aussi j\'aurais voulu savoir.'
    },
    corey_avant: 'Court. Quatre segments. Mais le troisième c\'est tout le film.',
    cutter_special: null
  },

  {
    id: 'mme_kowalski',
    titre: 'MME KOWALSKI ATTEND',
    type: 'DRAME',
    synopsis: 'Une femme attend son mari à l\'aéroport. L\'avion atterrit.',
    semaine_min: 1,
    difficulte: 2,
    segments: [
      {
        zone: 'bleu',
        icon: '✈️',
        personnage: 'MME KOWALSKI',
        lieu: 'Aéroport — Zone d\'arrivée',
        texte: 'Elle tient une pancarte avec son nom écrit dessus. Comme au début. Comme il y a trente ans.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '👥',
        personnage: 'LES PASSAGERS',
        lieu: 'Portes d\'arrivée',
        texte: 'Les gens sortent. Famille. Collègues. Amants. Elle cherche son visage dans chaque visage.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🚪',
        personnage: 'MME KOWALSKI',
        lieu: 'Zone d\'arrivée — Les portes se ferment',
        texte: 'Les portes se ferment. Plus personne. Elle regarde la pancarte dans ses mains.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚗',
        personnage: 'MME KOWALSKI',
        lieu: 'Parking — Voiture',
        texte: 'Elle plie la pancarte soigneusement. Elle la range dans son sac. Elle repart seule.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'La pancarte avec son propre nom dessus. Vous avez pas vu ce détail. Ou vous avez pas osé.',
      orange: 'Vous avez coupé pendant l\'attente. On attend avec elle. C\'est inconfortable. C\'est bien.',
      rouge:  'Les portes se ferment. Vous coupez. On ne saura pas pourquoi il est pas là.',
      vert:   'Elle plie la pancarte. Vous avez attendu ce geste. Il est beau. Mais il explique trop.'
    },
    corey_avant: 'Pas d\'action. Juste une femme qui attend. Les meilleurs films c\'est souvent ça.',
    cutter_special: null
  },

  {
    id: 'temoignage_frank',
    titre: 'LE TÉMOIGNAGE DE FRANK',
    type: 'NOIR',
    synopsis: 'Un homme dit la vérité au tribunal. La vérité détruit quelqu\'un qu\'il aime.',
    semaine_min: 1,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '⚖️',
        personnage: 'FRANK DELUCA, comptable',
        lieu: 'Tribunal — Salle d\'audience',
        texte: 'Frank a jamais menti de sa vie. C\'est son problème.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '👁️',
        personnage: 'L\'AVOCAT DE LA DÉFENSE',
        lieu: 'Barre des témoins',
        texte: '"M. DeLuca. Le soir du 14. Où était votre frère ?" Frank regarde son frère dans le box.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🎙️',
        personnage: 'FRANK DELUCA',
        lieu: 'Barre des témoins — Silence',
        texte: 'Frank ouvre la bouche. Son frère ferme les yeux.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚶',
        personnage: 'FRANK DELUCA',
        lieu: 'Couloir du tribunal',
        texte: 'Frank sort. Il pleure pas. Il marche juste. Il sait ce qu\'il a fait.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Frank a jamais menti de sa vie. Vous avez coupé là. C\'est le film entier en une phrase.',
      orange: 'Son frère ferme les yeux. Vous avez coupé sur lui. C\'est le bon personnage. Mauvais moment.',
      rouge:  'Frank ouvre la bouche. Son frère ferme les yeux. Noir. On entend rien. C\'est suffisant.',
      vert:   'Il sait ce qu\'il a fait. Vous aussi maintenant. Le cinéma préfère qu\'on devine.'
    },
    corey_avant: 'Noir. Court. Le frère dans le box c\'est tout le film.',
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 2
  // ===================================================

  {
    id: 'santiago_1973',
    titre: 'SANTIAGO, 1973',
    type: 'HISTORIQUE',
    synopsis: 'Un musicien range sa guitare. Il prend autre chose dans l\'étui.',
    semaine_min: 2,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '🎸',
        personnage: 'VICTOR, musicien',
        lieu: 'Santiago du Chili — Septembre 1973',
        texte: 'Victor joue depuis l\'enfance. Sa guitare a un nom. Il ne dit jamais lequel.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'bleu',
        icon: '📻',
        personnage: 'VICTOR',
        lieu: 'Son appartement — Tôt le matin',
        texte: 'La radio dit des choses. Victor éteint la radio. Il ouvre l\'étui de sa guitare.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🎵',
        personnage: 'VICTOR',
        lieu: 'Son appartement',
        texte: 'Il joue un accord. Un seul. Il s\'arrête. Il écoute dehors.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '📦',
        personnage: 'VICTOR',
        lieu: 'Son appartement',
        texte: 'Il range la guitare dans l\'étui. Il prend quelque chose d\'autre dedans. On voit pas quoi.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚪',
        personnage: 'VICTOR',
        lieu: 'La porte de son appartement',
        texte: 'Il sort. Il laisse l\'étui ouvert sur le lit. La guitare reste.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [3],
    critiques_par_zone: {
      bleu:   'La radio dit des choses. Il éteint la radio. Vous avez coupé là. C\'est audacieux.',
      orange: 'Un accord. Il s\'arrête. Il écoute. Vous avez coupé sur l\'écoute. Ce qu\'il entend on le saura jamais.',
      rouge:  'Il range la guitare. Il prend autre chose. Noir. Ce qu\'il laisse compte plus que ce qu\'il prend.',
      vert:   'La guitare reste sur le lit. Vous avez attendu cette image. Elle est belle. Mais le film était fini avant.'
    },
    corey_avant: 'Historique. Un accord de guitare et tout est dit.',
    cutter_special: 'Ce film n\'explique rien. Il montre des mains. Les mains savent toujours avant la tête.'
  },

  {
    id: 'promotion_helen',
    titre: 'LA PROMOTION DE HELEN',
    type: 'DRAME CONTEMPORAIN',
    synopsis: 'Helen accepte la promotion. Son patron lui serre la main trop longtemps.',
    semaine_min: 2,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '💼',
        personnage: 'HELEN MARSH, 34 ans',
        lieu: 'Bureau de direction — 14ème étage',
        texte: 'Helen a travaillé sept ans pour cette chaise. Elle s\'assoit pas encore.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🤝',
        personnage: 'M. TRAVIS, directeur général',
        lieu: 'Bureau de direction',
        texte: 'Travis lui serre la main. Il la garde. Une seconde de trop. Deux. Helen compte.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '😊',
        personnage: 'HELEN MARSH',
        lieu: 'Bureau de direction',
        texte: 'Helen sourit. Le sourire qu\'elle a pratiqué. Elle retire sa main. Elle dit merci.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🪑',
        personnage: 'HELEN MARSH',
        lieu: 'Le nouveau bureau — Seule',
        texte: 'Helen s\'assoit dans la chaise. Elle regarde ses mains. Elle les pose à plat sur le bureau.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Elle s\'assoit pas encore. Vous avez coupé là. Ce film méritait mieux que votre impatience.',
      orange: 'Helen compte. Vous avez coupé pendant qu\'elle comptait. On compte avec elle.',
      rouge:  'Le sourire qu\'elle a pratiqué. Couper là c\'est couper sur sept ans de travail.',
      vert:   'Elle regarde ses mains. Vous avez attendu. Les mains savent. Mais le sourire était plus honnête.'
    },
    corey_avant: 'Contemporain. Chaque seconde compte. Littéralement.',
    cutter_special: null
  },

  {
    id: 'dernier_service',
    titre: 'DERNIER SERVICE',
    type: 'DRAME',
    synopsis: 'Un serveur de 60 ans finit son dernier jour. Il range son tablier.',
    semaine_min: 2,
    difficulte: 2,
    segments: [
      {
        zone: 'bleu',
        icon: '🍽️',
        personnage: 'ALBERT, serveur',
        lieu: 'Restaurant Chez Marcel — 7h du matin',
        texte: 'Albert travaille ici depuis que le restaurant s\'appelle pas encore Chez Marcel.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'bleu',
        icon: '👥',
        personnage: 'ALBERT',
        lieu: 'La salle — Dernier service',
        texte: 'Il sert. Il sourit. Personne sait que c\'est le dernier jour. Personne lui a demandé.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🌙',
        personnage: 'ALBERT',
        lieu: 'La salle vide — Après la fermeture',
        texte: 'Il nettoie la dernière table. Il range les chaises. Il éteint les lumières une par une.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '👔',
        personnage: 'ALBERT',
        lieu: 'Vestiaire',
        texte: 'Il décroche son tablier. Il le tient dans ses mains. Il le regarde.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚪',
        personnage: 'ALBERT',
        lieu: 'Sortie — Rue',
        texte: 'Il sort. Il se retourne. Il regarde la façade une dernière fois. Ou il se retourne pas.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [3],
    critiques_par_zone: {
      bleu:   'Personne lui a demandé. Vous avez coupé là. C\'est cruel. C\'est juste.',
      orange: 'Il éteint les lumières une par une. Vous avez coupé là. Le film est dans ce geste.',
      rouge:  'Le tablier dans ses mains. Il le regarde. Noir. Quarante ans en un bout de tissu.',
      vert:   'Il se retourne ou il se retourne pas. Vous avez attendu de savoir. Moi aussi.'
    },
    corey_avant: 'Pas d\'intrigue. Juste un homme et un tablier. Les meilleurs micro-métrages c\'est souvent des objets.',
    cutter_special: null
  },

  {
    id: 'offre_baxter',
    titre: 'L\'OFFRE DE BAXTER',
    type: 'THRILLER D\'AFFAIRES',
    synopsis: 'Baxter propose quelque chose à son associé. L\'associé dit non.',
    semaine_min: 2,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '🏙️',
        personnage: 'BAXTER et MORRISON, associés',
        lieu: 'Cabinet Morrison & Baxter — Dernier étage',
        texte: 'Vingt ans d\'association. Ils savent tout l\'un de l\'autre. Presque tout.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '📋',
        personnage: 'BAXTER',
        lieu: 'Bureau de Morrison',
        texte: 'Baxter pose un dossier sur le bureau. Il dit rien. Morrison regarde le dossier. Pas Baxter.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🤚',
        personnage: 'MORRISON',
        lieu: 'Bureau de Morrison',
        texte: 'Morrison pose la main sur le dossier. Il le pousse vers Baxter. "Non."',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚪',
        personnage: 'BAXTER',
        lieu: 'Couloir',
        texte: 'Baxter reprend le dossier. Il hoche la tête. Il sort. On entend la porte.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Presque tout. Vous avez coupé sur ce mot. C\'est le film entier.',
      orange: 'Morrison regarde le dossier. Pas Baxter. Vous avez coupé là. On sait tout sans rien savoir.',
      rouge:  'Non. Un mot. Le dossier qui revient. Noir. Ce qu\'il y avait dedans n\'a plus d\'importance.',
      vert:   'On entend la porte. Vous avez attendu le son. Le son après le non c\'est différent du non.'
    },
    corey_avant: 'Business noir. Le dossier c\'est le MacGuffin parfait — on sait jamais ce qu\'il y a dedans.',
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 3
  // ===================================================

  {
    id: 'nuit_de_noces',
    titre: 'NUIT DE NOCES À BUFFALO',
    type: 'COMÉDIE NOIRE',
    synopsis: 'Carl réalise quelque chose pendant son discours de mariage.',
    semaine_min: 3,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '💒',
        personnage: 'CARL JENSEN, 31 ans',
        lieu: 'Salle de réception — Buffalo, New York',
        texte: 'Carl est heureux. Il est sûr d\'être heureux. Il vérifie mentalement. Oui. Heureux.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🎤',
        personnage: 'CARL JENSEN',
        lieu: 'Salle de réception — Pendant son discours',
        texte: '"Sandra est la femme que j\'ai toujours—" Carl s\'arrête. Il voit quelqu\'un dans la salle.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '👀',
        personnage: 'CARL JENSEN',
        lieu: 'Salle de réception',
        texte: 'Carl voit quelqu\'un. On voit pas qui. Carl reprend son discours. Exactement où il s\'était arrêté.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🥂',
        personnage: 'TOUT LE MONDE',
        lieu: 'Salle de réception',
        texte: 'Les verres se lèvent. Sandra sourit. Carl sourit. Le champagne mousse.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Il vérifie mentalement. Oui. Heureux. Vous avez coupé là. C\'est drôle et triste.',
      orange: 'Carl s\'arrête. On voit pas qui. Vous avez coupé là. Le mystère vaut mieux que la réponse.',
      rouge:  'Il reprend exactement où il s\'était arrêté. C\'est ça le micro-métrage. Ce geste de continuer quand même.',
      vert:   'Le champagne mousse. Vous avez voulu la fin heureuse. Elle existe peut-être. Vous l\'avez choisie.'
    },
    corey_avant: 'Comédie noire. Carl qui vérifie s\'il est heureux — c\'est déjà le film.',
    cutter_special: null
  },

  {
    id: 'retour_miguel',
    titre: 'LE RETOUR DE MIGUEL SANTOS',
    type: 'DRAME FAMILIAL',
    synopsis: 'Miguel revient dans son quartier après dix ans. Sa mère est à la fenêtre.',
    semaine_min: 3,
    difficulte: 2,
    segments: [
      {
        zone: 'bleu',
        icon: '🚌',
        personnage: 'MIGUEL SANTOS, 32 ans',
        lieu: 'Bus — Entrée du quartier',
        texte: 'Dix ans. Le quartier a changé. Miguel a changé. Lequel des deux reconnaîtra l\'autre.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🏠',
        personnage: 'MIGUEL SANTOS',
        lieu: 'Rue de son enfance',
        texte: 'La maison est là. Petite. Plus petite que dans ses souvenirs. La fenêtre du salon est allumée.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🪟',
        personnage: 'SA MÈRE',
        lieu: 'La fenêtre du salon',
        texte: 'Une silhouette derrière le rideau. Elle bouge pas. Elle a vu. Elle attend qu\'il monte.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚪',
        personnage: 'MIGUEL SANTOS',
        lieu: 'Devant la porte',
        texte: 'Miguel lève la main vers la sonnette. Il s\'arrête. Il sonne.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Lequel des deux reconnaîtra l\'autre. Vous avez coupé là. C\'est la question du film. Trop tôt.',
      orange: 'Plus petite que dans ses souvenirs. Vous avez coupé là. Les maisons rétrécissent quand on grandit.',
      rouge:  'Elle a vu. Elle attend qu\'il monte. Noir. Dix ans dans cette silhouette immobile.',
      vert:   'Il s\'arrête avant de sonner. Vous avez voulu ce moment. Il dure une seconde. C\'est une vie.'
    },
    corey_avant: 'Familial. La fenêtre allumée c\'est tout le film.',
    cutter_special: null
  },

  {
    id: 'confession_anderson',
    titre: 'LA CONFESSION D\'ANDERSON',
    type: 'THRILLER PSYCHOLOGIQUE',
    synopsis: 'Anderson veut tout avouer à sa femme. Il prépare ses mots depuis six mois.',
    semaine_min: 3,
    difficulte: 4,
    segments: [
      {
        zone: 'bleu',
        icon: '📝',
        personnage: 'ANDERSON, ingénieur',
        lieu: 'Son bureau — Nuit',
        texte: 'Anderson a écrit et réécrit ce qu\'il va dire. Douze versions. La treizième est dans sa tête.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'bleu',
        icon: '🍽️',
        personnage: 'ANDERSON et SA FEMME',
        lieu: 'Cuisine — Dîner',
        texte: 'Elle parle de sa journée. Anderson écoute. Il attend le bon moment.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '😶',
        personnage: 'ANDERSON',
        lieu: 'Cuisine',
        texte: 'Sa femme rit de quelque chose. Anderson ouvre la bouche. La version treize est prête.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '☕',
        personnage: 'ANDERSON',
        lieu: 'Cuisine',
        texte: '"Tu veux encore du café ?" dit Anderson. Sa femme dit oui. Anderson se lève.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🌙',
        personnage: 'ANDERSON',
        lieu: 'Cuisine — Plus tard',
        texte: 'Ils font la vaisselle ensemble. Anderson chante quelque chose doucement. Elle chante avec lui.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [3],
    critiques_par_zone: {
      bleu:   'La treizième version est dans sa tête. Vous avez coupé là. On ne l\'entendra jamais.',
      orange: 'Anderson ouvre la bouche. Vous avez coupé là. La version treize reste dans sa tête. Pour toujours.',
      rouge:  'Tu veux encore du café. C\'est ça la version treize. Vous avez compris.',
      vert:   'Ils chantent ensemble. Vous avez voulu cette image. Elle est vraie. Mais le café était plus honnête.'
    },
    corey_avant: 'Psychologique. Douze versions écrites. La treizième c\'est "tu veux du café".',
    cutter_special: 'Ce film est sur tout ce qu\'on dit pas. Votre coupe révèle si vous croyez au silence ou à la parole.'
  },

  {
    id: 'match_dimanche',
    titre: 'LE MATCH DU DIMANCHE',
    type: 'COMÉDIE DRAMATIQUE',
    synopsis: 'Un père emmène son fils à un match pour la première fois. Ils sont dans la mauvaise ville.',
    semaine_min: 3,
    difficulte: 2,
    segments: [
      {
        zone: 'bleu',
        icon: '⚽',
        personnage: 'TERRY et SON FILS DANIEL, 8 ans',
        lieu: 'Stade — Tribune visiteurs',
        texte: 'Terry a réservé les billets six mois à l\'avance. Il a réservé pour le mauvais stade.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '😕',
        personnage: 'DANIEL',
        lieu: 'Tribune visiteurs',
        texte: 'Daniel comprend pas pourquoi tout le monde autour supporte l\'autre équipe. Terry explique pas.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🤷',
        personnage: 'TERRY',
        lieu: 'Tribune visiteurs',
        texte: 'Terry achète deux écharpes de l\'équipe adverse au vendeur ambulant. Il en passe une à Daniel.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🎉',
        personnage: 'TERRY et DANIEL',
        lieu: 'Tribune visiteurs',
        texte: 'Ils supportent l\'équipe adverse. Daniel crie. Terry crie. L\'équipe adverse gagne.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Il a réservé pour le mauvais stade. Vous avez coupé là. La suite est dans ce détail.',
      orange: 'Terry explique pas. Vous avez coupé là. Ce qu\'il explique pas c\'est peut-être tout.',
      rouge:  'Deux écharpes de l\'équipe adverse. Terry explique pas. Il adapte. C\'est ça être père.',
      vert:   'Ils gagnent quand même. Vous avez voulu la victoire. Elle était déjà là dans les écharpes.'
    },
    corey_avant: 'Comédie. Terry qui adapte sans expliquer — c\'est le meilleur moment du film.',
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 4
  // ===================================================

  {
    id: 'derniere_cigarette',
    titre: 'LA DERNIÈRE CIGARETTE DE PETE NOLAN',
    type: 'DRAME',
    synopsis: 'Pete arrête de fumer aujourd\'hui. Il a dit ça hier aussi.',
    semaine_min: 4,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '🚬',
        personnage: 'PETE NOLAN, 47 ans',
        lieu: 'Sa cuisine — 7h du matin',
        texte: 'Pete sort son paquet. Il en reste une. Il avait dit que ce serait la dernière hier.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🌅',
        personnage: 'PETE NOLAN',
        lieu: 'Sa terrasse',
        texte: 'Il allume la cigarette. Il regarde la rue se réveiller. Il pense à quelque chose.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '💭',
        personnage: 'PETE NOLAN',
        lieu: 'Sa terrasse',
        texte: 'Pete écrase la cigarette à moitié. Il la regarde dans le cendrier. Il la reprend.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🏪',
        personnage: 'PETE NOLAN',
        lieu: 'Bureau de tabac — 5 minutes plus tard',
        texte: 'Pete pose un billet sur le comptoir. "Un paquet." Le buraliste sait lequel.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Il avait dit que ce serait la dernière hier. Vous avez coupé là. Le film est dans ce mot — hier.',
      orange: 'Il pense à quelque chose. Vous avez coupé là. On pense avec lui. C\'est le bon film.',
      rouge:  'Il la reprend. Deux secondes de résistance. C\'est toute une vie dans ce cendrier.',
      vert:   'Le buraliste sait lequel. Vous avez attendu cette phrase. Elle dit tout sur Pete.'
    },
    corey_avant: 'Pete Nolan. On le connaît tous. La cigarette à moitié écrasée c\'est le film.',
    cutter_special: null
  },

  {
    id: 'appel_manque',
    titre: 'L\'APPEL MANQUÉ',
    type: 'DRAME CONTEMPORAIN',
    synopsis: 'Sarah voit un appel manqué de son père. Elle rappelle pas.',
    semaine_min: 4,
    difficulte: 4,
    segments: [
      {
        zone: 'bleu',
        icon: '📱',
        personnage: 'SARAH, 29 ans',
        lieu: 'Son appartement — Matin',
        texte: 'Son téléphone. Un appel manqué. Papa. 23h47. Elle dormait.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '☕',
        personnage: 'SARAH',
        lieu: 'Cuisine',
        texte: 'Elle prépare son café. Elle regarde le téléphone sur le comptoir. Elle ajoute du sucre.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '📞',
        personnage: 'SARAH',
        lieu: 'Cuisine',
        texte: 'Elle prend le téléphone. Elle appuie sur le nom. Elle appuie pas sur appel.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚇',
        personnage: 'SARAH',
        lieu: 'Métro — En route pour le travail',
        texte: 'Le téléphone dans son sac. Elle regarde les gens autour. Elle pense à autre chose.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Elle dormait. Vous avez coupé là. Ce qu\'il voulait dire à 23h47 on le saura jamais.',
      orange: 'Elle ajoute du sucre. Vous avez coupé là. Le sucre dit tout sur ce qu\'elle fait avec ses mains quand elle pense.',
      rouge:  'Elle appuie pas sur appel. Noir. Ce geste d\'appuyer sur le nom sans appuyer sur appel.',
      vert:   'Elle pense à autre chose. Vous croyez ça. Moi non. Mais le film vous laisse choisir.'
    },
    corey_avant: 'Contemporain. Elle ajoute du sucre. C\'est tout le film dans ce geste.',
    cutter_special: 'Ce film est sur la distance entre deux personnes qui s\'aiment. Votre coupe dit laquelle des deux a raison.'
  },

  {
    id: 'boxeur_mcallister',
    titre: 'LE DERNIER ROUND DE MCALLISTER',
    type: 'DRAME SPORTIF',
    synopsis: 'McAllister sait qu\'il va perdre. Il monte quand même sur le ring.',
    semaine_min: 4,
    difficulte: 3,
    segments: [
      {
        zone: 'bleu',
        icon: '🥊',
        personnage: 'MCALLISTER, 38 ans',
        lieu: 'Vestiaire — Avant le combat',
        texte: 'Son entraîneur lui parle. McAllister entend les mots mais pas dans l\'ordre.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🪞',
        personnage: 'MCALLISTER',
        lieu: 'Vestiaire — Devant le miroir',
        texte: 'McAllister se regarde. Il sait exactement ce qu\'il voit. Il l\'a toujours su.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🚪',
        personnage: 'MCALLISTER',
        lieu: 'Couloir vers le ring',
        texte: 'Il marche. La foule s\'entend. Il ralentit pas. Il accélère pas. Il marche.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '💡',
        personnage: 'MCALLISTER',
        lieu: 'Le ring — Sous les lumières',
        texte: 'Les lumières du ring. McAllister lève les yeux. Pour la première fois il sourit.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Il entend les mots pas dans l\'ordre. Vous avez coupé là. Le désordre c\'est le film.',
      orange: 'Il sait exactement ce qu\'il voit. Vous avez coupé là. Ce qu\'il voit on le sait aussi maintenant.',
      rouge:  'Il marche. Ni plus vite ni moins vite. Couper sur cette marche c\'est couper sur la dignité.',
      vert:   'Il sourit sous les lumières. Vous avez voulu ce sourire. Il est vrai. Mais la marche était plus courageuse.'
    },
    corey_avant: 'Sportif. McAllister qui marche. C\'est tout. C\'est tout ce qu\'il faut.',
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 5 — RARETÉS
  // ===================================================

  {
    id: 'lettre_morte',
    titre: 'LETTRE MORTE',
    type: 'RARETÉ ★',
    synopsis: 'Une lettre. Non ouverte. Posée sur une table depuis combien de temps ?',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      {
        zone: 'bleu',
        icon: '✉️',
        personnage: 'INCONNU',
        lieu: 'Une table — On sait pas où',
        texte: 'Une enveloppe. Le nom dessus est effacé. Elle est là depuis longtemps. Les bords jaunissent.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '🖐️',
        personnage: 'QUELQU\'UN',
        lieu: 'La même table',
        texte: 'Une main la prend. La retourne. Pose le doigt sous le rabat. S\'arrête.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '⏸️',
        personnage: 'QUELQU\'UN',
        lieu: 'La même table',
        texte: 'La lettre est reposée. Face cachée maintenant. La main disparaît.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚶',
        personnage: 'QUELQU\'UN',
        lieu: 'La pièce',
        texte: 'La pièce se vide. La lettre reste. On ne saura jamais.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'Les bords jaunissent. Vous avez coupé là. Le temps est le personnage principal. Audacieux.',
      orange: 'La main s\'arrête. Vous avez coupé là. L\'hésitation vaut mieux que le choix.',
      rouge:  'Face cachée. La main disparaît. On ne saura jamais. C\'est la seule fin honnête.',
      vert:   'On ne saura jamais. Vous avez attendu cette phrase. Elle était déjà dans la lettre reposée.'
    },
    corey_avant: 'Rareté. Pas de personnage nommé. Juste une lettre et des mains. Cutter adore ce genre.',
    cutter_special: 'Le secret non-révélé est la seule vraie fin. Votre coupe dit si vous faites confiance au spectateur.'
  },

  {
    id: 'echo',
    titre: 'ÉCHO',
    type: 'RARETÉ ★',
    synopsis: 'Un homme s\'arrête devant une vitrine. Son reflet. Il regarde longtemps.',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      {
        zone: 'orange',
        icon: '🔊',
        personnage: 'INCONNU',
        lieu: 'Une ville — L\'aube',
        texte: 'Un son d\'abord. La ville qui se réveille. On voit rien encore. Juste le son.',
        label: 'TENSION'
      },
      {
        zone: 'bleu',
        icon: '🌅',
        personnage: 'INCONNU',
        lieu: 'Toits de la ville',
        texte: 'Le soleil sur les toits. Personne encore. Juste les toits et la lumière qui monte.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '👣',
        personnage: 'UN HOMME',
        lieu: 'Rue',
        texte: 'Des pas. On voit ses chaussures. Usées. Il marche vite. Il sait où il va.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '🪞',
        personnage: 'L\'HOMME',
        lieu: 'Devant une vitrine',
        texte: 'Il s\'arrête. Son reflet. Il le regarde longtemps. Son reflet le regarde pas pareil.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🌆',
        personnage: 'L\'HOMME',
        lieu: 'La même rue',
        texte: 'Il repart. La ville continue. Le son continue. Comme avant. Rien a changé. Tout a changé.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 3,
    coupesIdeal: [3],
    critiques_par_zone: {
      orange: 'Le son avant l\'image. Vous avez coupé là. Hitchcock l\'aurait fait aussi. Peut-être.',
      bleu:   'Juste les toits et la lumière. Vous avez coupé là. C\'est beau. Mais c\'est pas le film.',
      rouge:  'Son reflet le regarde pas pareil. Vous avez coupé là. Ce "pas pareil" c\'est tout.',
      vert:   'Rien a changé. Tout a changé. Vous avez attendu cette contradiction. Elle était dans les chaussures.'
    },
    corey_avant: 'Double étoile. Cutter attend ce film depuis le début. Fais pas n\'importe quoi Fred.',
    cutter_special: 'Un film sur le regard. Couper sur le regard c\'est soit de la lâcheté soit du génie. Je saurai lequel.'
  },

  {
    id: 'contre_plongee',
    titre: 'CONTRE-PLONGÉE',
    type: 'RARETÉ ★',
    synopsis: 'Un détective fouille une pièce. La structure du film est non-linéaire.',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      {
        zone: 'orange',
        icon: '🔦',
        personnage: 'LE DÉTECTIVE',
        lieu: 'Une pièce — On sait pas quand',
        texte: 'Il fouille. Il trouve quelque chose. Il regarde ce qu\'il a trouvé sans qu\'on voie quoi.',
        label: 'TENSION'
      },
      {
        zone: 'bleu',
        icon: '⏪',
        personnage: 'LE DÉTECTIVE — AVANT',
        lieu: 'Un bureau — Plus tôt',
        texte: 'On revient en arrière. Une femme lui a dit quelque chose. Il avait pas écouté.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'rouge',
        icon: '❗',
        personnage: 'LE DÉTECTIVE',
        lieu: 'Le bureau — La même scène',
        texte: 'Il écoute maintenant ce qu\'elle a dit. Un visage qu\'il reconnaît. Un mensonge évident.',
        label: 'FAUSSE BASCULE'
      },
      {
        zone: 'bleu',
        icon: '⏪',
        personnage: 'LE DÉTECTIVE — ENCORE AVANT',
        lieu: 'Autre part',
        texte: 'Encore plus tôt. Ce qu\'il n\'avait pas vu. Ce que personne avait vu.',
        label: 'RETOUR'
      },
      {
        zone: 'rouge',
        icon: '💡',
        personnage: 'LE DÉTECTIVE',
        lieu: 'La pièce — On revient au début',
        texte: 'La vérité. Plus simple que tout. Trop simple pour avoir été cherchée.',
        label: 'VRAIE BASCULE'
      },
      {
        zone: 'vert',
        icon: '🚪',
        personnage: 'LE DÉTECTIVE',
        lieu: 'La pièce',
        texte: 'Il pose ce qu\'il a trouvé. Il sort. Il laisse tout derrière. Il a compris.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [4],
    critiques_par_zone: {
      orange: 'Il trouve quelque chose. On voit pas quoi. Vous avez coupé là. Ce qu\'il trouve n\'a plus d\'importance.',
      bleu:   'Il avait pas écouté. Vous avez coupé là. L\'inattention comme sujet de film. Rare.',
      rouge:  'Un mensonge évident. Vous avez coupé sur la fausse bascule. Je vois ce que vous avez cru voir.',
      vert:   'Il a compris. Vous avez attendu qu\'il comprenne. Mais la vérité trop simple était le film.'
    },
    corey_avant: 'Structure non-linéaire. Cutter va tout regarder. Fais pas de coupe évidente.',
    cutter_special: 'La structure non-linéaire existe pour une raison. Votre coupe révèle si vous avez compris laquelle.'
  },

  {
    id: 'temoin',
    titre: 'LE TÉMOIN',
    type: 'RARETÉ ★★',
    synopsis: 'Quelqu\'un observe quelque chose par une fenêtre. On ne sait pas ce qu\'il voit.',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      {
        zone: 'bleu',
        icon: '👀',
        personnage: 'INCONNU',
        lieu: 'Une fenêtre — On sait pas où ni quand',
        texte: 'Quelqu\'un regarde dehors. On voit son dos. Ce qu\'il voit on le voit pas.',
        label: 'MISE EN PLACE'
      },
      {
        zone: 'orange',
        icon: '😮',
        personnage: 'INCONNU',
        lieu: 'La même fenêtre',
        texte: 'Son expression change. On le voit de profil maintenant. Quelque chose l\'a frappé.',
        label: 'TENSION'
      },
      {
        zone: 'rouge',
        icon: '📱',
        personnage: 'INCONNU',
        lieu: 'La même fenêtre',
        texte: 'Il prend son téléphone. Il compose un numéro. Son doigt s\'arrête avant d\'appuyer.',
        label: 'BASCULE'
      },
      {
        zone: 'vert',
        icon: '🪟',
        personnage: 'INCONNU',
        lieu: 'La même fenêtre',
        texte: 'Il repose le téléphone. Il continue à regarder par la fenêtre. Il regarde jusqu\'à la fin.',
        label: 'RÉSOLUTION'
      }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    critiques_par_zone: {
      bleu:   'On voit son dos. Ce qu\'il voit on le voit pas. Vous avez coupé là. Le film entier est dans ce dos.',
      orange: 'Quelque chose l\'a frappé. Vous avez coupé là. Ce quelque chose restera une question.',
      rouge:  'Son doigt s\'arrête avant d\'appuyer. Noir. Ce coup de fil non-passé pèse autant qu\'une confession.',
      vert:   'Il regarde jusqu\'à la fin. Vous aussi. Ce film pose une seule question. Votre coupe y répond ou refuse.'
    },
    corey_avant: 'Double étoile. Pas de nom. Pas de lieu. Juste un dos et une fenêtre. C\'est tout.',
    cutter_special: 'Ce film est sur ce qu\'on choisit de ne pas faire. Votre coupe dit si vous comprenez pourquoi.'
  }

];

// ===================================================
// UTILITAIRES
// ===================================================

function getCassettesDisponibles(gameState) {
  const gs = gameState;
  return CASSETTES_DATA.filter(c => {
    if (c.semaine_min > gs.semaine) return false;
    if (c.type.includes('RARETÉ') && gs.credibilite < 60) return false;
    return true;
  });
}

function choisirCassette(gameState) {
  const gs = gameState;
  const disponibles = getCassettesDisponibles(gs);

  if (disponibles.length === 0) return CASSETTES_DATA[0];

  // Raretés si crédibilité haute
  if (gs.credibilite >= 80 && Math.random() > 0.5) {
    const rarites = disponibles.filter(c => c.type.includes('RARETÉ'));
    if (rarites.length > 0) {
      return rarites[Math.floor(Math.random() * rarites.length)];
    }
  }

  // Éviter la même cassette deux fois de suite
  const pasLaDerniere = disponibles.filter(
    c => c.id !== gs.derniereCassette
  );
  const pool = pasLaDerniere.length > 0 ? pasLaDerniere : disponibles;

  return pool[Math.floor(Math.random() * pool.length)];
}

function calculerNote(cassette, cutIndex) {
  const idealSegments = cassette.coupesIdeal || [];
  const audacieux     = cassette.coupeAudacieuse;
  const total         = cassette.segments.length;

  // Coupe audacieuse — résultat imprévisible
  if (cutIndex === audacieux && !idealSegments.includes(audacieux)) {
    return Math.random() > 0.5 ? 9 : 2;
  }

  if (cutIndex === 0) return 2;
  if (cutIndex >= total - 1) return 3;

  if (idealSegments.includes(cutIndex)) {
    return cutIndex === idealSegments[0] ? 8 : 7;
  }

  if (cutIndex < Math.min(...idealSegments)) return 5;
  if (cutIndex > Math.max(...idealSegments)) return 4;

  return 6;
}

function getCutterCritique(note, cassette) {

  // Critique spéciale cassette si disponible
  if (note >= 8 && cassette.cutter_special) {
    return {
      texte: cassette.cutter_special,
      corey: note >= 9
        ? '"Je savais que t\'avais ça en toi, Fred."'
        : '"Cutter commence à s\'intéresser."'
    };
  }

  const critiques = {
    1:  {
      texte: 'Vous avez appuyé sur stop au hasard. Ce n\'est pas du cinéma.',
      corey: '"C\'est ce que je t\'avais dit."'
    },
    2:  {
      texte: 'Vous avez coupé avant même d\'avoir quelque chose à couper.',
      corey: '"Deux sur dix c\'est dur."'
    },
    3:  {
      texte: 'Prudent. Vous avez choisi la sécurité au moment où il fallait le risque.',
      corey: '"Cutter est déçu. Moi aussi un peu."'
    },
    4:  {
      texte: 'Vous étiez au bon endroit mais trop tard. La bascule était derrière vous.',
      corey: '"Quatre. On recommence demain."'
    },
    5:  {
      texte: 'L\'instinct était là. L\'audace, non.',
      corey: '"Cinq sur dix. On peut faire mieux."'
    },
    6:  {
      texte: 'Vous avez vu juste mais pas loin. La prochaine fois allez plus loin.',
      corey: '"Six. Ouais. J\'aurais dit pareil."'
    },
    7:  {
      texte: 'Bien. Vous avez vu où ça bascule. Vous n\'avez pas eu peur d\'y aller.',
      corey: '"Sept c\'est bien. Sept c\'est pas dix non plus."'
    },
    8:  {
      texte: 'Vous avez compris ce que ce film avait à dire. Et vous avez coupé au bon moment.',
      corey: '"Huit sur dix. Cutter commence à s\'intéresser."'
    },
    9:  {
      texte: 'Vous avez vu exactement où ça bascule. C\'est tout ce qu\'un micro-métrage doit faire.',
      corey: '"Je savais que t\'avais ça en toi, Fred."'
    },
    10: {
      texte: 'Je ne comprends pas encore pourquoi cette coupe fonctionne. Mais elle fonctionne. Je déteste ça.',
      corey: '"Dix sur dix. Repose-toi. Tu le mérites."'
    }
  };

  return critiques[note] || critiques[6];
}

function getCutterCritiqueParZone(cassette, zone) {
  if (cassette.critiques_par_zone && cassette.critiques_par_zone[zone]) {
    return cassette.critiques_par_zone[zone];
  }
  return null;
}