// ===================================================
// REWIND PARADISE — CASSETTES SOURCES v3
// 18 micro-métrages — Celluloïd Scalpel
// ===================================================

const CASSETTES_DATA = [

  // ===================================================
  // SEMAINE 1
  // ===================================================

  {
    id: 'dad',
    titre: 'DUR À DIGÉRER',
    type: 'FILM NOIR',
    synopsis: 'Un détective. Une femme. La règle du genre.',
    semaine_min: 1,
    difficulte: 2,
    images: ['micrometrages/dad-1.png','micrometrages/dad-2.png','micrometrages/dad-3.png','micrometrages/dad-4.png','micrometrages/dad-5.png','micrometrages/dad-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/dad-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/dad-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/dad-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/dad-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/dad-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/dad-6.png' }
    ],
    coupesIdeal: [3],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Film noir classique. Méfie-toi de tout le monde. Surtout de celle qui sourit.',
    corey_reussi: "Ne jamais engager la conversation avec une femme fatale, c'est la règle du film noir.",
    corey_rate: "T'as raté le moment. Dans le film noir, le moment c'est tout.",
    cutter_special: null
  },

  {
    id: 'af',
    titre: 'A.F.F.I.E',
    type: 'SCIENCE-FICTION',
    synopsis: "Une femme. Une douche. Ce qu'on ne voit pas sous l'eau.",
    semaine_min: 1,
    difficulte: 1,
    images: ['micrometrages/af-1.png','micrometrages/af-2.png','micrometrages/af-3.png','micrometrages/af-4.png','micrometrages/af-5.png','micrometrages/af-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/af-1.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/af-2.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/af-3.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/af-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/af-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/af-6.png' }
    ],
    coupesIdeal: [1],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Six segments. Le deuxième est là où tout se joue. Regarde bien.',
    corey_reussi: "Bah oui, on ne baisse jamais la tête sous la douche. Elle voit rien, il se passe rien.",
    corey_rate: "Elle a vu le monstre. T'as laissé le film continuer. Erreur.",
    cutter_special: null
  },

  {
    id: 'cd',
    titre: 'COSMIC DAN',
    type: 'AVENTURE SPATIALE',
    synopsis: 'Un homme. Un garage. Une fusée. Un trou noir.',
    semaine_min: 1,
    difficulte: 3,
    images: ['micrometrages/cd-01.png','micrometrages/cd-02.png','micrometrages/cd-03.png','micrometrages/cd-04.png','micrometrages/cd-05.png','micrometrages/cd-06.png','micrometrages/cd-07.png','micrometrages/cd-08.png','micrometrages/cd-09.png','micrometrages/cd-10.png','micrometrages/cd-11.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/cd-01.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/cd-02.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/cd-03.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/cd-04.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/cd-05.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/cd-06.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/cd-07.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/cd-08.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/cd-09.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/cd-10.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/cd-11.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: [8],
    pasDeCoupe: false,
    corey_avant: 'Dan construit une fusée dans son garage. Onze segments. Y en a un seul qui compte.',
    corey_reussi: "Rajoute en voix off : \"Oh là, ma caisse montera jamais cette pente.\" Coupe parfaite.",
    corey_rate_acceptable: "Dan qui flotte dans le cosmos en bouffant des chips. Je peux vivre avec ça.",
    corey_rate: "T'as laissé Dan finir dans le trou noir. Trop généreux.",
    cutter_special: null
  },

  {
    id: 'ch',
    titre: 'CANNIBAL HOLOCAUST 2',
    type: 'HORREUR / SUITE',
    synopsis: "La suite du classique. L'Amazonie. L'hélico. La question.",
    semaine_min: 1,
    difficulte: 2,
    images: ['micrometrages/ch-1.png','micrometrages/ch-2.png','micrometrages/ch-3.png','micrometrages/ch-4.png','micrometrages/ch-5.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/ch-1.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/ch-2.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/ch-3.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/ch-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/ch-5.png' }
    ],
    coupesIdeal: [1],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: "Suite du classique. Cinq segments. Le deuxième c'est le film entier.",
    corey_reussi: "Un survol de l'Amazonie en hélico, on passe du cannibalisme au documentaire National Geographic. J'adore.",
    corey_rate: "T'as laissé les cannibales manger. C'était pas obligatoire.",
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 2
  // ===================================================

  {
    id: 'godzillastrikesback',
    titre: 'GODZILLA STRIKES BACK',
    type: 'KAIJU',
    synopsis: "Godzilla est de retour. Quelqu'un surveille avec des jumelles.",
    semaine_min: 2,
    difficulte: 2,
    images: ['micrometrages/godzillastrikesback-1.png','micrometrages/godzillastrikesback-2.png','micrometrages/godzillastrikesback-3.png','micrometrages/godzillastrikesback-4.png','micrometrages/godzillastrikesback-5.png','micrometrages/godzillastrikesback-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/godzillastrikesback-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/godzillastrikesback-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/godzillastrikesback-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/godzillastrikesback-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/godzillastrikesback-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/godzillastrikesback-6.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Godzilla est de retour. Quelqu\'un a des jumelles. Fais le bon choix.',
    corey_reussi: "Petite voix off : \"Rien à signaler dans mes jumelles...\" Chef-d'œuvre.",
    corey_rate: "Godzilla a tout cassé. T'aurais pu l'arrêter avant.",
    cutter_special: null
  },

  {
    id: 'mc',
    titre: 'MAXIMUM CROCODILE',
    type: 'NANARD / MONSTRE',
    synopsis: 'Un gros crocodile. Des gens. Le silence avant.',
    semaine_min: 2,
    difficulte: 1,
    images: ['micrometrages/mc-01.png','micrometrages/mc-02.png','micrometrages/mc-03.png','micrometrages/mc-04.png','micrometrages/mc-05.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/mc-01.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/mc-02.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/mc-03.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/mc-04.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/mc-05.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Gros nanard. Mais même les nanards ont un bon moment. Trouve-le.',
    corey_reussi: "Juste une voix off : \"Rien à signaler. Tout est silencieux.\" Et hop, le film est mort.",
    corey_rate: "Le crocodile a mangé tout le monde. Fallait couper avant.",
    cutter_special: null
  },

  {
    id: 'mh',
    titre: 'MUTANT HIGHWAY',
    type: 'HORREUR / ZOMBIES',
    synopsis: "Des zombies. Un héros. Une voiture. Un \"Boom!\" mal placé.",
    semaine_min: 2,
    difficulte: 3,
    images: ['micrometrages/mh-1.png','micrometrages/mh-2.png','micrometrages/mh-3.png','micrometrages/mh-4.png','micrometrages/mh-5.png','micrometrages/mh-6.png','micrometrages/mh-7.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/mh-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/mh-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/mh-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/mh-4.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/mh-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/mh-6.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/mh-7.png' }
    ],
    coupesIdeal: [3],
    coupeAcceptable: [2],
    pasDeCoupe: false,
    corey_avant: 'Sept segments. Deux bons moments de coupe. Le quatrième est parfait.',
    corey_reussi: "On ajoute un \"Boom !\" — le type passe de héros à loser qui se fait exploser tout seul dans sa bagnole. Génial.",
    corey_rate_acceptable: "Mouais. Acceptable. Mais t'as raté le vrai moment.",
    corey_rate: "Les zombies ont gagné. C'était pas ce scénario-là qui était prévu.",
    cutter_special: null
  },

  {
    id: 'nh',
    titre: 'NEON HEART HIGH SCHOOL',
    type: 'COMÉDIE TEEN',
    synopsis: 'Un lycée. Un bal. Ce qui arrive avant.',
    semaine_min: 2,
    difficulte: 2,
    images: ['micrometrages/nh-1.png','micrometrages/nh-2.png','micrometrages/nh-3.png','micrometrages/nh-4.png','micrometrages/nh-5.png','micrometrages/nh-6.png','micrometrages/nh-7.png','micrometrages/nh-8.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/nh-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/nh-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/nh-3.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/nh-4.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/nh-5.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/nh-6.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/nh-7.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/nh-8.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: [4],
    pasDeCoupe: false,
    corey_avant: 'Comédie teen. Huit segments. Le troisième coupe court le film avant qu\'il soit trop long.',
    corey_reussi: "Tu coupes juste avant qu'il se vante auprès de ses potes. Pas de bal. Pas de film. Parfait.",
    corey_rate_acceptable: "Acceptable. Mais t'as laissé trainer.",
    corey_rate: "Le bal a eu lieu. T'aurais pu l'éviter.",
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 3
  // ===================================================

  {
    id: 'nsf',
    titre: 'NUNCHAKU, SAKÉ ET FUMÉE',
    type: 'ARTS MARTIAUX',
    synopsis: 'Un élève. Un maître. Ce qu\'on fait semblant de ne pas voir.',
    semaine_min: 3,
    difficulte: 2,
    images: ['micrometrages/nsf-1.png','micrometrages/nsf-2.png','micrometrages/nsf-3.png','micrometrages/nsf-4.png','micrometrages/nsf-5.png','micrometrages/nsf-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/nsf-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/nsf-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/nsf-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/nsf-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/nsf-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/nsf-6.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Arts martiaux. Maître suspect. Le troisième segment c\'est le film.',
    corey_reussi: "Il fait comme s'il n'avait pas vu son maître s'adonner à ses vices. Pas de vengeance, plus de film.",
    corey_rate: "La vengeance a eu lieu. C'était pas obligatoire.",
    cutter_special: null
  },

  {
    id: 'ocr',
    titre: 'OPÉRATION COBRA ROUGE',
    type: 'ACTION / ESPIONNAGE',
    synopsis: 'Une mission. Des agents. Un film qui peut être sauvé n\'importe où.',
    semaine_min: 3,
    difficulte: 1,
    images: ['micrometrages/ocr-1.png','micrometrages/ocr-2.png','micrometrages/ocr-3.png','micrometrages/ocr-4.png','micrometrages/ocr-5.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/ocr-1.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/ocr-2.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/ocr-3.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/ocr-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/ocr-5.png' }
    ],
    coupesIdeal: [0,1,2,3,4],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Coupez n\'importe où. Vraiment. N\'importe où.',
    corey_reussi: "Coupez ce film n'importe où, je peux que le rendre meilleur.",
    corey_rate: "T'as regardé jusqu'au bout ? Pourquoi ?",
    cutter_special: null
  },

  {
    id: 'pln',
    titre: 'LES POINGS DU LOTUS NOIR',
    type: 'KUNG-FU',
    synopsis: 'Johnny Wong. Son maître. Le moment où il comprend.',
    semaine_min: 3,
    difficulte: 2,
    images: ['micrometrages/pln-1.png','micrometrages/pln-2.png','micrometrages/pln-3.png','micrometrages/pln-4.png','micrometrages/pln-5.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/pln-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/pln-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/pln-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/pln-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/pln-5.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Kung-fu. Maître cruel. Johnny Wong mérite mieux.',
    corey_reussi: "Yep, quand ton maître de kung-fu te traite comme de la merde, faut se barrer. Bien joué Johnny Wong.",
    corey_rate: "Johnny est resté. Il aurait pas dû.",
    cutter_special: null
  },

  {
    id: 'pp',
    titre: 'PANIQUE SUR LE PONT 47',
    type: 'ACTION',
    synopsis: 'Un pont. Une crise. Un catcheur qui regarde la télé.',
    semaine_min: 3,
    difficulte: 2,
    images: ['micrometrages/pp-1.png','micrometrages/pp-2.png','micrometrages/pp-3.png','micrometrages/pp-4.png','micrometrages/pp-5.png','micrometrages/pp-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/pp-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/pp-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/pp-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/pp-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/pp-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/pp-6.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Action sur un pont. Un catcheur dans un canapé. Le troisième segment c\'est la clé.',
    corey_reussi: "Impeccable. Il éteint sa télé. Il est pas concerné. Après tout c'est un catcheur, pas un membre du SWAT.",
    corey_rate: "Il a fini par aller sur le pont. C'était pas son truc.",
    cutter_special: null
  },

  // ===================================================
  // SEMAINE 4
  // ===================================================

  {
    id: 'rat',
    titre: 'DE RIEN À TOUT',
    type: 'COMÉDIE / TRANSFORMATION',
    synopsis: 'Une plante. Des muscles. Un son de vomi au bon moment.',
    semaine_min: 4,
    difficulte: 3,
    images: ['micrometrages/rat-1.png','micrometrages/rat-2.png','micrometrages/rat-3.png','micrometrages/rat-4.png','micrometrages/rat-5.png','micrometrages/rat-6.png','micrometrages/rat-7.png','micrometrages/rat-8.png','micrometrages/rat-9.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/rat-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/rat-2.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/rat-3.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/rat-4.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/rat-5.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/rat-6.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/rat-7.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/rat-8.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/rat-9.png' }
    ],
    coupesIdeal: [4],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Neuf segments. Long. Le cinquième est là où ça bascule vraiment.',
    corey_reussi: "Tu rajoutes un son de mec qui vomit derrière. Pas de plante magique, pas de muscles, pas de monstre qui te pousse sur l'épaule.",
    corey_rate: "La transformation a eu lieu. T'aurais pu l'éviter.",
    cutter_special: null
  },

  {
    id: 'rb',
    titre: 'LES REQUINS DU BRONX',
    type: 'ACTION / CULTE',
    synopsis: 'Le Bronx. Des requins. On touche pas.',
    semaine_min: 4,
    difficulte: 0,
    images: ['micrometrages/rb-1.png','micrometrages/rb-2.png','micrometrages/rb-3.png','micrometrages/rb-4.png','micrometrages/rb-5.png','micrometrages/rb-6.png'],
    segments: [
      { zone:'bleu',   label:'LE BRONX',   image:'micrometrages/rb-1.png' },
      { zone:'orange', label:'LES REQUINS',image:'micrometrages/rb-2.png' },
      { zone:'rouge',  label:'L\'ATTAQUE', image:'micrometrages/rb-3.png' },
      { zone:'vert',   label:'LA LGENDE',  image:'micrometrages/rb-4.png' },
      { zone:'vert',   label:'LA LÉGENDE', image:'micrometrages/rb-5.png' },
      { zone:'vert',   label:'LA LÉGENDE', image:'micrometrages/rb-6.png' }
    ],
    coupesIdeal: [],
    coupeAcceptable: null,
    pasDeCoupe: true,
    corey_avant: "Les requins du Bronx. T'as pas le droit de couper.",
    corey_reussi: "On touche pas aux requins du Bronx, c'est péché.",
    corey_rate: "T'as coupé les requins du Bronx. C'est impardonnable.",
    cutter_special: null
  },

  {
    id: 'rr',
    titre: 'ROBERT ET SON ROBOT',
    type: 'SCIENCE-FICTION / AMITIÉ',
    synopsis: 'Robert. Un robot. La poignée de mains qui change tout.',
    semaine_min: 4,
    difficulte: 2,
    images: ['micrometrages/rr-1.png','micrometrages/rr-2.png','micrometrages/rr-3.png','micrometrages/rr-4.png','micrometrages/rr-5.png','micrometrages/rr-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/rr-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/rr-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/rr-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/rr-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/rr-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/rr-6.png' }
    ],
    coupesIdeal: [2],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Robert et son robot. Le troisième segment précède la poignée de mains. Fais le bon choix.',
    corey_reussi: "Juste avant la poignée de mains. Pas de partenaire robot, pas de film.",
    corey_rate: "Ils se sont serré la main. T'as regardé.",
    cutter_special: null
  },

  {
    id: 'sv',
    titre: 'STEEL VENGEANCE',
    type: 'ACTION',
    synopsis: "Un rebelle. Une voiture. Le bruit de freins qui dit tout.",
    semaine_min: 4,
    difficulte: 2,
    images: ['micrometrages/sv-1.png','micrometrages/sv-2.png','micrometrages/sv-3.png','micrometrages/sv-4.png','micrometrages/sv-5.png','micrometrages/sv-6.png','micrometrages/sv-7.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/sv-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/sv-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/sv-3.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/sv-4.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/sv-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/sv-6.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/sv-7.png' }
    ],
    coupesIdeal: [4],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Seven segments. Le cinquième c\'est le son de freins. Écoute.',
    corey_reussi: "Parfait. Le bruit de voiture qui freine à fond — on comprend qu'il se rend. Un rebelle, non, un mouilleux. Génial.",
    corey_rate: "La vengeance a eu lieu. T'aurais pu couper avant.",
    cutter_special: null
  },

  {
    id: 'tdb',
    titre: 'TIGER DRAGON BRONX',
    type: 'ARTS MARTIAUX',
    synopsis: 'Un héros. Son destin. Court mais efficace.',
    semaine_min: 4,
    difficulte: 1,
    images: ['micrometrages/tdb-1.png','micrometrages/tdb-2.png','micrometrages/tdb-3.png','micrometrages/tdb-4.png','micrometrages/tdb-5.png','micrometrages/tdb-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/tdb-1.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/tdb-2.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/tdb-3.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/tdb-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/tdb-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/tdb-6.png' }
    ],
    coupesIdeal: [1],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Court. Six segments. Le deuxième ferme le film tôt. C\'est là.',
    corey_reussi: "Bien vu. Ça se referme tôt sur le héros. C'était dès le début ou rien. Court mais efficace.",
    corey_rate: "T'as attendu. Dans ce film-là, attendre c'est perdre.",
    cutter_special: null
  },

  {
    id: 'tlr',
    titre: 'THE LONG ROAD',
    type: 'ROAD MOVIE',
    synopsis: 'Une route. Un homme. Le moment diablement efficace.',
    semaine_min: 4,
    difficulte: 2,
    images: ['micrometrages/tlr-1.png','micrometrages/tlr-2.png','micrometrages/tlr-3.png','micrometrages/tlr-4.png','micrometrages/tlr-5.png','micrometrages/tlr-6.png'],
    segments: [
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/tlr-1.png' },
      { zone:'bleu',   label:'MISE EN PLACE', image:'micrometrages/tlr-2.png' },
      { zone:'orange', label:'TENSION',       image:'micrometrages/tlr-3.png' },
      { zone:'rouge',  label:'BASCULE',       image:'micrometrages/tlr-4.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/tlr-5.png' },
      { zone:'vert',   label:'RÉSOLUTION',    image:'micrometrages/tlr-6.png' }
    ],
    coupesIdeal: [3],
    coupeAcceptable: null,
    pasDeCoupe: false,
    corey_avant: 'Road movie. Le quatrième segment. Facile, mais diablement efficace.',
    corey_reussi: "Facile, mais diablement efficace. T'as compris la route.",
    corey_rate: "T'as laissé la route continuer. Elle finit toujours quelque part.",
    cutter_special: null
  }

];

// ===================================================
// GETTERS
// ===================================================

function getCassettesBySemaine(semaine) {
  return CASSETTES_DATA.filter(c => c.semaine_min <= semaine);
}

function getCassetteById(id) {
  return CASSETTES_DATA.find(c => c.id === id) || null;
}

function getCassetteAleatoire(semaine) {
  const dispo = getCassettesBySemaine(semaine);
  return dispo[Math.floor(Math.random() * dispo.length)];
}
