// ===================================================
// REWIND PARADISE — QUIZ CINÉMA DU MIDI
// Fred et Corey. Fermeture temporaire.
// ===================================================

const QUIZ = {

  // ===================================================
  // BASE DE QUESTIONS
  // ===================================================

  questions: [

    // FILMS DU CATALOGUE
    {
      id: 'q01',
      question: 'Dans Ghost, quel est le prénom du personnage joué par Patrick Swayze ?',
      choix: ['Sam', 'Jack', 'Tom', 'Ray'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q02',
      question: 'Dans Shining, quel est le nom de l\'hôtel hanté ?',
      choix: ['Overlook Hotel', 'Bates Motel', 'Stanley Hotel', 'Timberline Lodge'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q03',
      question: 'Dans Alien, quelle est la planète où l\'équipage trouve les œufs ?',
      choix: ['LV-426', 'LV-223', 'Fury 161', 'Fiorina 161'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q04',
      question: 'Dans Die Hard, dans quelle ville se déroule l\'action ?',
      choix: ['Los Angeles', 'New York', 'Chicago', 'San Francisco'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q05',
      question: 'Dans Terminator, en quelle année est envoyé le Terminator ?',
      choix: ['1984', '1985', '1986', '1983'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q06',
      question: 'Dans Forrest Gump, combien de fois Forrest court-il à travers les USA ?',
      choix: ['3 fois', '2 fois', '4 fois', '1 fois'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q07',
      question: 'Dans Pretty Woman, dans quel hôtel séjourne le personnage de Richard Gere ?',
      choix: ['Beverly Wilshire', 'Chateau Marmont', 'The Beverly Hills Hotel', 'Sunset Tower'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q08',
      question: 'Dans Dirty Dancing, quel est le vrai prénom du personnage de Patrick Swayze ?',
      choix: ['Francis', 'Johnny', 'Patrick', 'Michael'],
      bonne: 1,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q09',
      question: 'Dans Rain Man, quelle chaîne de télé Raymond regardait-il absolument ?',
      choix: ['People\'s Court', 'Jeopardy', 'Wheel of Fortune', 'Price is Right'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q10',
      question: 'Dans Halloween, quel est le nom du tueur masqué ?',
      choix: ['Michael Myers', 'Jason Voorhees', 'Freddy Krueger', 'Leatherface'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q11',
      question: 'Dans Top Gun, quel est le surnom du personnage de Tom Cruise ?',
      choix: ['Maverick', 'Iceman', 'Goose', 'Viper'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q12',
      question: 'Dans Kramer vs Kramer, quel acteur joue le père ?',
      choix: ['Dustin Hoffman', 'Robert De Niro', 'Al Pacino', 'Jack Nicholson'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q13',
      question: 'Dans Blue Velvet de Lynch, que trouve le personnage au début du film ?',
      choix: ['Une oreille coupée', 'Un doigt', 'Une photo', 'Une clé'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q14',
      question: 'Dans Blow Out de De Palma, que fait le personnage de John Travolta comme métier ?',
      choix: ['Ingénieur du son', 'Réalisateur', 'Photographe', 'Détective'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q15',
      question: 'Dans Le Roi Lion, quel est le nom du méchant ?',
      choix: ['Scar', 'Zazu', 'Rafiki', 'Ed'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },

    // CINÉMA GÉNÉRAL
    {
      id: 'q16',
      question: 'Qui a réalisé Psychose en 1960 ?',
      choix: ['Alfred Hitchcock', 'Billy Wilder', 'John Huston', 'Howard Hawks'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q17',
      question: 'Dans quel film entend-on la phrase "Frankly, my dear, I don\'t give a damn" ?',
      choix: ['Autant en emporte le vent', 'Casablanca', 'Sunset Boulevard', 'Rebecca'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q18',
      question: 'Qui a inventé le cinématographe ?',
      choix: ['Les frères Lumière', 'Thomas Edison', 'Georges Méliès', 'Charlie Chaplin'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q19',
      question: 'Quelle est la durée standard d\'un long-métrage ?',
      choix: ['Plus de 60 minutes', 'Plus de 90 minutes', 'Plus de 45 minutes', 'Plus de 120 minutes'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q20',
      question: 'Quel film a remporté le premier Oscar du meilleur film en 1929 ?',
      choix: ['Les Ailes', 'Sunrise', 'The Jazz Singer', 'The Crowd'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q21',
      question: 'Combien de films a réalisé Stanley Kubrick ?',
      choix: ['13', '10', '8', '15'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q22',
      question: 'Dans quel pays est né le cinéma ?',
      choix: ['France', 'États-Unis', 'Allemagne', 'Italie'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q23',
      question: 'Qu\'est-ce qu\'un "MacGuffin" au cinéma ?',
      choix: [
        'Un objet qui motive l\'intrigue mais dont la nature importe peu',
        'Une technique de montage',
        'Un plan très court',
        'Un personnage secondaire important'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q24',
      question: 'Quel réalisateur a inventé le terme "Nouvelle Vague" ?',
      choix: ['François Truffaut', 'Jean-Luc Godard', 'Claude Chabrol', 'Jacques Rivette'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q25',
      question: 'Combien de secondes dure en moyenne un plan au cinéma hollywoodien ?',
      choix: ['3 à 8 secondes', '10 à 15 secondes', '1 à 2 secondes', '20 secondes'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q26',
      question: 'Qu\'est-ce qu\'un "jump cut" ?',
      choix: [
        'Une coupe abrupte entre deux plans similaires',
        'Un fondu enchaîné rapide',
        'Un zoom brutal',
        'Un plan séquence sans coupe'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q27',
      question: 'Quel film détient le record du plus grand nombre d\'Oscars ?',
      choix: [
        'Ben-Hur / Titanic / Le Retour du Roi (11 chacun)',
        'All About Eve (14)',
        'La La Land (14)',
        'Gone with the Wind (10)'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q28',
      question: 'Qu\'est-ce que le "format 4:3" ?',
      choix: [
        'Le format quasi-carré des vieilles télévisions',
        'Le format cinémascope',
        'Un format de pellicule 16mm',
        'Le format HD'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q29',
      question: 'Qui a dit "Le cinéma, c\'est de la réalité à 24 images par seconde" ?',
      choix: ['Jean-Luc Godard', 'François Truffaut', 'Roger Ebert', 'André Bazin'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q30',
      question: 'Qu\'est-ce qu\'un "raccord dans l\'axe" ?',
      choix: [
        'Deux plans dans le même axe avec un changement de taille',
        'Un raccord sur un mouvement',
        'Un raccord sur le regard',
        'Un raccord sonore'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },

    // QUESTIONS VHS / VIDÉO
    {
      id: 'q31',
      question: 'En quelle année le format VHS a-t-il été lancé ?',
      choix: ['1976', '1972', '1980', '1983'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q32',
      question: 'Que signifie VHS ?',
      choix: [
        'Video Home System',
        'Video High Speed',
        'Visual Home Standard',
        'Video Hi-Fi System'
      ],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q33',
      question: 'Quel format concurrent a perdu la guerre du magnétoscope face au VHS ?',
      choix: ['Betamax', 'LaserDisc', 'Video 2000', 'CED'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q34',
      question: 'Combien d\'heures tenait une cassette VHS standard en mode SP ?',
      choix: ['3 heures', '2 heures', '4 heures', '6 heures'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q35',
      question: 'Quelle grande chaîne américaine de location de vidéos a fait faillite en 2010 ?',
      choix: ['Blockbuster', 'Hollywood Video', 'Movie Gallery', 'Family Video'],
      bonne: 0,
      categorie: 'VHS'
    },

    // QUESTIONS MICRO-MÉTRAGE (liées au jeu)
    {
      id: 'q36',
      question: 'Corey : "Danny Glover et Kiefer Sutherland. T\'as trois minutes." Par quel film passe-t-on ?',
      choix: [
        'Young Guns via Ferris Bueller, Sheen, Ladyhawke, Blade Runner',
        'Lethal Weapon directement',
        'Speed via Point Break',
        'The Lost Boys via Batman'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q37',
      question: 'Un micro-métrage c\'est quoi selon Cutter ?',
      choix: [
        'Trouver le moment où le film n\'a plus besoin de continuer',
        'Résumer un film en moins de 5 minutes',
        'Couper dans la scène d\'action principale',
        'Un montage alternatif d\'un film existant'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q38',
      question: 'Quelle zone de la timeline est la plus importante pour une bonne coupe ?',
      choix: ['La BASCULE', 'La MISE EN PLACE', 'La RÉSOLUTION', 'La TENSION'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q39',
      question: 'Si on coupe dans la RÉSOLUTION d\'un film, la note de Cutter sera...',
      choix: ['Faible — trop tard', 'Élevée — le timing parfait', 'Moyenne', 'Variable'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q40',
      question: 'Dans quel film Indiana Jones meurt-il broyé par une boule de pierre... mais c\'est un micro-métrage pirate ?',
      choix: [
        'Les Aventuriers de l\'Arche Perdue',
        'Indiana Jones et le Temple Maudit',
        'Indiana Jones et la Dernière Croisade',
        'Indiana Jones et le Royaume du Crâne de Cristal'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },

    // QUESTIONS DIRECTORS
    {
      id: 'q41',
      question: 'Quel réalisateur est connu pour la règle des "trois actes" ?',
      choix: ['Syd Field', 'Robert McKee', 'Blake Snyder', 'John Truby'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q42',
      question: 'Martin Scorsese a commencé avec quel film ?',
      choix: ['Who\'s That Knocking at My Door', 'Mean Streets', 'Taxi Driver', 'Boxcar Bertha'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q43',
      question: 'Brian De Palma est souvent comparé à quel réalisateur ?',
      choix: ['Alfred Hitchcock', 'Stanley Kubrick', 'Orson Welles', 'Billy Wilder'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q44',
      question: 'Robert Altman est connu pour quel style narratif ?',
      choix: [
        'Films choraux avec plusieurs histoires entremêlées',
        'Films en temps réel',
        'Films sans dialogue',
        'Films en noir et blanc'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q45',
      question: 'David Lynch a étudié quoi avant le cinéma ?',
      choix: ['La peinture', 'L\'architecture', 'La musique', 'La photographie'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q46',
      question: 'Combien de films Hitchcock a-t-il réalisés ?',
      choix: ['53', '40', '65', '35'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q47',
      question: 'Quel est le film le plus court à avoir remporté la Palme d\'Or ?',
      choix: [
        'L\'Enfance nue (80 min)',
        'Barton Fink (116 min)',
        'Elephant (81 min)',
        'Sous le soleil de Satan (105 min)'
      ],
      bonne: 2,
      categorie: 'CINÉMA'
    },
    {
      id: 'q48',
      question: 'Qu\'est-ce que le "cinéma direct" ?',
      choix: [
        'Un style documentaire filmé sans artifices ni mise en scène',
        'Un film tourné en temps réel',
        'Un film sans montage',
        'Un film tourné en direct à la télévision'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q49',
      question: 'Quel film de 1941 est souvent cité comme le meilleur film de tous les temps ?',
      choix: ['Citizen Kane', 'Casablanca', 'La Règle du jeu', 'Les Raisins de la colère'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q50',
      question: 'Corey dit : "Kiefer et Harrison Ford dans Witness. Ford et Rutger Hauer dans Blade Runner." Quel film relie Hauer à Matthew Broderick ?',
      choix: ['Ladyhawke', 'The Hitcher', 'Blind Fury', 'Split Second'],
      bonne: 0,
      categorie: 'REWIND'
    }

  ],

  // ===================================================
  // RÉPLIQUES DE COREY SELON LE SCORE
  // ===================================================

  coreyReactions: {
    parfait: [
      '"Trois sur trois. Je savais que t\'étais pas complètement nul."',
      '"Parfait. T\'as regardé autant de films que moi finalement."',
      '"Trois bonnes réponses. Cutter serait impressionné. Peut-être."'
    ],
    bien: [
      '"Deux sur trois. C\'est bien. C\'est pas trois."',
      '"Deux bonnes. L\'autre tu la savais pas ou tu l\'as pas vue venir ?"',
      '"Deux. On peut faire mieux la prochaine fois."'
    ],
    moyen: [
      '"Une sur trois Fred. Une."',
      '"T\'as loué ces films pendant des années et tu connais même pas ça ?"',
      '"Une bonne réponse. Les deux autres tu veux qu\'on en parle ?"'
    ],
    nul: [
      '"Zéro. Zéro sur trois. On tient un vidéoclub Fred."',
      '"Comment tu peux avoir zéro ? T\'as regardé les films au moins ?"',
      '"Zéro. Je suis déçu. Non. Je suis effondré."'
    ]
  },

  // ===================================================
  // TIRER 3 QUESTIONS ALÉATOIRES
  // ===================================================

  getQuestions(gameState) {
    const pool = [...this.questions];

    // Mélanger
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Inclure au moins une question CATALOGUE
    const catalogue = pool.filter(q => q.categorie === 'CATALOGUE');
    const autres    = pool.filter(q => q.categorie !== 'CATALOGUE');

    const selection = [];
    if (catalogue.length > 0) selection.push(catalogue[0]);
    selection.push(...autres.slice(0, 3 - selection.length));

    // Mélanger les choix pour chaque question
    return selection.slice(0, 3).map(q => {
      const choixMelanges = [...q.choix];
      const bonneReponse  = choixMelanges[q.bonne];

      // Mélanger
      for (let i = choixMelanges.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choixMelanges[i], choixMelanges[j]] =
          [choixMelanges[j], choixMelanges[i]];
      }

      return {
        ...q,
        choix:     choixMelanges,
        bonneIndex: choixMelanges.indexOf(bonneReponse)
      };
    });
  },

  // ===================================================
  // CALCULER LES RÉCOMPENSES
  // ===================================================

  getRecompenses(score) {
    const recompenses = {
      0: { energie: 0,  argent: 0,  msg: 'Zéro bonnes réponses.' },
      1: { energie: 1,  argent: 0,  msg: 'Une bonne réponse. Énergie +1.' },
      2: { energie: 2,  argent: 5,  msg: 'Deux bonnes réponses. Énergie +2, Argent +5$.' },
      3: { energie: 3,  argent: 10, msg: 'Trois sur trois ! Énergie +3, Argent +10$.' }
    };
    return recompenses[score] || recompenses[0];
  }

};