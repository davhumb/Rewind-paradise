// ===================================================
// REWIND PARADISE — QUIZ CINÉMA DU MIDI v2
// 100 questions — Fred et Corey. Fermeture temporaire.
// ===================================================

const QUIZ = {

  questions: [

    // ===================================================
    // CATALOGUE — films du vidéoclub
    // ===================================================

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
      question: 'Dans Alien, quelle est la désignation de la planète où l\'équipage trouve les œufs ?',
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
      choix: ['Beverly Wilshire', 'Chateau Marmont', 'Beverly Hills Hotel', 'Sunset Tower'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q08',
      question: 'Dans Dirty Dancing, quel est le vrai prénom du personnage de Patrick Swayze ?',
      choix: ['Johnny', 'Francis', 'Patrick', 'Michael'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q09',
      question: 'Dans Rain Man, quelle émission Raymond regardait-il absolument ?',
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
    {
      id: 'q16',
      question: 'Dans Thelma & Louise, dans quel état américain les deux femmes finissent-elles leur voyage ?',
      choix: ['Utah — Grand Canyon', 'Arizona', 'Nevada', 'Colorado'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q17',
      question: 'Dans Suspiria de Dario Argento, dans quelle ville est située l\'école de danse ?',
      choix: ['Fribourg-en-Brisgau', 'Munich', 'Vienne', 'Zurich'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q18',
      question: 'Boxcar Bertha est le deuxième film de quel réalisateur aujourd\'hui célèbre ?',
      choix: ['Martin Scorsese', 'Francis Ford Coppola', 'Brian De Palma', 'Steven Spielberg'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q19',
      question: 'Short Cuts de Robert Altman est une adaptation de nouvelles de quel auteur ?',
      choix: ['Raymond Carver', 'John Cheever', 'Richard Yates', 'Charles Bukowski'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q20',
      question: 'Dans Nuits Blanches à Seattle, comment Tom Hanks contacte-t-il la radio ?',
      choix: ['Son fils appelle à sa place', 'Il appelle lui-même', 'Sa sœur appelle', 'Sa patronne appelle'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q21',
      question: 'Dans An Officer and a Gentleman, quel acteur joue le sergent instructeur ?',
      choix: ['Louis Gossett Jr.', 'Richard Gere', 'David Keith', 'Harold Sylvester'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q22',
      question: 'Dans L\'Exorciste, quel est le prénom de la petite fille possédée ?',
      choix: ['Regan', 'Reagan', 'Linda', 'Ellen'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q23',
      question: 'Dans Predator, dans quel pays se déroule l\'action ?',
      choix: ['Guatemala', 'Mexique', 'Honduras', 'Nicaragua'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q24',
      question: 'Dans L\'Arme Fatale, quel acteur joue le coéquipier de Mel Gibson ?',
      choix: ['Danny Glover', 'Eddie Murphy', 'Wesley Snipes', 'Denzel Washington'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q25',
      question: 'Dans Aladdin, quel est le nom du perroquet du méchant Jafar ?',
      choix: ['Iago', 'Othello', 'Pago', 'Sago'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q26',
      question: 'Dans Maman j\'ai raté l\'avion, dans quelle ville se passe l\'action ?',
      choix: ['Chicago', 'New York', 'Boston', 'Detroit'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q27',
      question: 'Dans La Petite Sirène, quel est le nom du crabe ami d\'Ariel ?',
      choix: ['Sebastian', 'Flounder', 'Scuttle', 'Triton'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q28',
      question: 'Dans Quand Harry rencontre Sally, dans quelle ville se déroule le film ?',
      choix: ['New York', 'Chicago', 'Los Angeles', 'Washington'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q29',
      question: 'Dans Terminator, comment s\'appelle la femme que le Terminator cherche à tuer ?',
      choix: ['Sarah Connor', 'Sarah Palmer', 'Sarah Miles', 'Sarah Barnes'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },
    {
      id: 'q30',
      question: 'Dans Alien, quel acteur joue le rôle du robot Ash ?',
      choix: ['Ian Holm', 'John Hurt', 'Tom Skerritt', 'Harry Dean Stanton'],
      bonne: 0,
      categorie: 'CATALOGUE'
    },

    // ===================================================
    // CINÉMA — culture générale
    // ===================================================

    {
      id: 'q31',
      question: 'Qui a réalisé Psychose en 1960 ?',
      choix: ['Alfred Hitchcock', 'Billy Wilder', 'John Huston', 'Howard Hawks'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q32',
      question: 'Dans quel film entend-on "Frankly, my dear, I don\'t give a damn" ?',
      choix: ['Autant en emporte le vent', 'Casablanca', 'Sunset Boulevard', 'Rebecca'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q33',
      question: 'Qui a inventé le cinématographe ?',
      choix: ['Les frères Lumière', 'Thomas Edison', 'Georges Méliès', 'Charlie Chaplin'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q34',
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
      id: 'q35',
      question: 'Qui a dit "Le cinéma c\'est de la réalité à 24 images par seconde" ?',
      choix: ['Jean-Luc Godard', 'François Truffaut', 'Roger Ebert', 'André Bazin'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q36',
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
      id: 'q37',
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
      id: 'q38',
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
      id: 'q39',
      question: 'Martin Scorsese a commencé avec quel film ?',
      choix: ['Who\'s That Knocking at My Door', 'Mean Streets', 'Taxi Driver', 'Boxcar Bertha'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q40',
      question: 'Brian De Palma est souvent comparé à quel réalisateur ?',
      choix: ['Alfred Hitchcock', 'Stanley Kubrick', 'Orson Welles', 'Billy Wilder'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q41',
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
      id: 'q42',
      question: 'David Lynch a étudié quoi avant le cinéma ?',
      choix: ['La peinture', 'L\'architecture', 'La musique', 'La photographie'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q43',
      question: 'Quel film a remporté la Palme d\'Or à Cannes en 1979 ?',
      choix: ['Apocalypse Now', 'Le Tambour', 'Les deux (ex-aequo)', 'Manhattan'],
      bonne: 2,
      categorie: 'CINÉMA'
    },
    {
      id: 'q44',
      question: 'Qu\'est-ce que le "néoréalisme" au cinéma ?',
      choix: [
        'Mouvement italien filmant la réalité sociale avec des acteurs non professionnels',
        'Style américain des années 50',
        'Courant français de la Nouvelle Vague',
        'Cinéma documentaire soviétique'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q45',
      question: 'Quel réalisateur soviétique a théorisé le montage comme "collision d\'images" ?',
      choix: ['Sergueï Eisenstein', 'Dziga Vertov', 'Andreï Tarkovski', 'Vsevolod Poudovkine'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q46',
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
    {
      id: 'q47',
      question: 'Quel film de 1941 est souvent cité comme le meilleur film de tous les temps ?',
      choix: ['Citizen Kane', 'Casablanca', 'La Règle du jeu', 'Les Raisins de la colère'],
      bonne: 0,
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
      question: 'Qui a réalisé Vertigo en 1958 ?',
      choix: ['Alfred Hitchcock', 'Billy Wilder', 'Otto Preminger', 'John Ford'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q50',
      question: 'Qu\'est-ce que la "règle des 180 degrés" ?',
      choix: [
        'La caméra ne doit pas franchir la ligne d\'action imaginaire',
        'Un plan doit durer au minimum 180 images',
        'L\'angle de prise de vue maximal en extérieur',
        'La rotation maximale d\'un travelling'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q51',
      question: 'Quel pays a inventé le terme "Nouvelle Vague" pour parler de son cinéma ?',
      choix: ['La France', 'L\'Italie', 'L\'Allemagne', 'La Suède'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q52',
      question: 'Qu\'est-ce qu\'un plan "en contre-plongée" ?',
      choix: [
        'La caméra filme de bas en haut',
        'La caméra filme de haut en bas',
        'La caméra est à hauteur des yeux',
        'La caméra est inclinée sur le côté'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q53',
      question: 'Quel acteur a joué dans Taxi Driver, Raging Bull et Les Affranchis ?',
      choix: ['Robert De Niro', 'Al Pacino', 'Harvey Keitel', 'Joe Pesci'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q54',
      question: 'Qu\'est-ce qu\'un "plan séquence" ?',
      choix: [
        'Un plan long sans coupure',
        'Une séquence de plusieurs plans courts',
        'Un plan filmé en studio',
        'Un plan avec effets spéciaux'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q55',
      question: 'Qui a réalisé 2001 : L\'Odyssée de l\'espace ?',
      choix: ['Stanley Kubrick', 'Ridley Scott', 'Steven Spielberg', 'George Lucas'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q56',
      question: 'Qu\'est-ce que le "montage parallèle" ?',
      choix: [
        'Alterner deux actions simultanées se déroulant en des lieux différents',
        'Monter deux films en même temps',
        'Répéter le même plan deux fois',
        'Utiliser deux caméras simultanément'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q57',
      question: 'Quelle réalisatrice a signé Le Piano en 1993 ?',
      choix: ['Jane Campion', 'Agnès Varda', 'Kathryn Bigelow', 'Sofia Coppola'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q58',
      question: 'Qu\'est-ce que le "Dogme 95" ?',
      choix: [
        'Mouvement cinématographique danois aux règles strictes',
        'Festival de cinéma allemand',
        'Technique de montage numérique',
        'Studio de production américain'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q59',
      question: 'Quel est le premier film sonore de l\'histoire du cinéma ?',
      choix: ['Le Chanteur de Jazz (1927)', 'Naissance d\'une Nation (1915)', 'Metropolis (1927)', 'Nosferatu (1922)'],
      bonne: 0,
      categorie: 'CINÉMA'
    },
    {
      id: 'q60',
      question: 'Qu\'appelle-t-on le "cinema vérité" ?',
      choix: [
        'Style documentaire cherchant à capturer la réalité de façon naturelle',
        'Cinéma de propagande soviétique',
        'Films entièrement improvisés',
        'Cinéma muet expressionniste'
      ],
      bonne: 0,
      categorie: 'CINÉMA'
    },

    // ===================================================
    // VHS — histoire du format
    // ===================================================

    {
      id: 'q61',
      question: 'En quelle année le format VHS a-t-il été lancé ?',
      choix: ['1976', '1972', '1980', '1983'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q62',
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
      id: 'q63',
      question: 'Quel format concurrent a perdu la guerre du magnétoscope face au VHS ?',
      choix: ['Betamax', 'LaserDisc', 'Video 2000', 'CED'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q64',
      question: 'Combien d\'heures tenait une cassette VHS standard en mode SP ?',
      choix: ['3 heures', '2 heures', '4 heures', '6 heures'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q65',
      question: 'Quelle grande chaîne américaine de location de vidéos a fait faillite en 2010 ?',
      choix: ['Blockbuster', 'Hollywood Video', 'Movie Gallery', 'Family Video'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q66',
      question: 'Quelle entreprise a développé le format Betamax ?',
      choix: ['Sony', 'JVC', 'Panasonic', 'Philips'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q67',
      question: 'Quel format de cassette était utilisé par les caméscopes grand public dans les années 80 ?',
      choix: ['VHS-C', 'Beta SP', 'U-Matic', '8mm'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q68',
      question: 'En quelle année le DVD a-t-il commencé à supplanter le VHS ?',
      choix: ['1997-2000', '1993-1995', '2002-2005', '1990-1992'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q69',
      question: 'Qu\'est-ce que le "tracking" sur un magnétoscope VHS ?',
      choix: [
        'Le réglage de l\'alignement de la bande magnétique',
        'La vitesse de rembobinage',
        'La qualité audio de la cassette',
        'Le système de protection contre la copie'
      ],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q70',
      question: 'Quel format professionnel de vidéo utilisaient les chaînes de télévision dans les années 80 ?',
      choix: ['U-Matic', 'Betamax', 'VHS', 'LaserDisc'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q71',
      question: 'Combien de lignes de résolution avait une image VHS standard ?',
      choix: ['240 lignes', '525 lignes', '625 lignes', '480 lignes'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q72',
      question: 'Que signifie "Hi-Fi" sur une cassette VHS ?',
      choix: [
        'Audio haute fidélité enregistré sur pistes séparées',
        'Image haute définition',
        'Système de copie protégée',
        'Format longue durée'
      ],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q73',
      question: 'Quel pays a développé le format VHS ?',
      choix: ['Japon', 'États-Unis', 'Allemagne', 'Corée du Sud'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q74',
      question: 'Combien de têtes de lecture avait un magnétoscope VHS standard ?',
      choix: ['2 têtes', '1 tête', '4 têtes', '6 têtes'],
      bonne: 0,
      categorie: 'VHS'
    },
    {
      id: 'q75',
      question: 'Quel système anti-copie était utilisé sur les cassettes VHS commerciales ?',
      choix: ['Macrovision', 'CSS', 'HDCP', 'DRM'],
      bonne: 0,
      categorie: 'VHS'
    },

    // ===================================================
    // REWIND — lié au jeu et au roman
    // ===================================================

    {
      id: 'q76',
      question: 'Corey dit : "Danny Glover et Kiefer Sutherland." Par quel film passe-t-on ?',
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
      id: 'q77',
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
      id: 'q78',
      question: 'Quelle zone de la timeline donne les meilleures notes chez Cutter ?',
      choix: ['La BASCULE', 'La MISE EN PLACE', 'La RÉSOLUTION', 'La TENSION'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q79',
      question: 'Si on coupe dans la RÉSOLUTION, la note de Cutter sera...',
      choix: ['Faible — trop tard', 'Élevée — timing parfait', 'Moyenne', 'Variable'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q80',
      question: 'Dans quel film Indiana Jones meurt-il dans la cassette noire du jeu ?',
      choix: [
        'Les Aventuriers de l\'Arche Perdue',
        'Le Temple Maudit',
        'La Dernière Croisade',
        'Le Royaume du Crâne de Cristal'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q81',
      question: 'Quel film Canopi loue-t-il à chaque visite au Rewind Paradise ?',
      choix: ['Ghost', 'Alien', 'Shining', 'Terminator'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q82',
      question: 'Comment s\'appelle le fanzine de cinéma underground dans le jeu ?',
      choix: ['Celluloïd Scalpel', 'The Glitch', 'Cutter\'s Cut', 'Underground Cinema'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q83',
      question: 'Que distribue-t-on en plus des micro-métrages au Rewind Paradise ?',
      choix: ['Du Sicilian Gold', 'Des cigarettes', 'Des magazines', 'De l\'alcool'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q84',
      question: 'Quel est le nom du personnage mystérieux qui collecte de l\'argent le mercredi ?',
      choix: ['Jackson', 'DiMaggio', 'Ramon', 'Cutter'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q85',
      question: 'Corey remarque chaque matin une caméra dans la vitrine d\'en face. C\'est quoi ?',
      choix: ['Une Beaulieu 16mm', 'Une Arriflex', 'Une Bolex', 'Une Canon 8mm'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q86',
      question: 'Que se passe-t-il quand la jauge Discrétion dépasse 60% ?',
      choix: [
        'Canopi déclenche un interrogatoire',
        'Jackson augmente la collecte',
        'Ramon repart sans louer',
        'Le stock est confisqué'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q87',
      question: 'Quel genre de films Ramon loue-t-il toujours ?',
      choix: ['Comédies romantiques', 'Films d\'action', 'Drames', 'Horreur'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q88',
      question: 'Que signifie distribuer un micro-métrage "via les gamins" ?',
      choix: [
        'Plus de crédibilité mais plus d\'exposition',
        'Plus d\'argent mais moins de crédibilité',
        'Moins de risques légaux',
        'Contact direct avec DiMaggio'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q89',
      question: 'Quel détective privé enquête sur la disparition de John Wang ?',
      choix: ['Lucious', 'Canopi', 'Jackson', 'Cutter'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q90',
      question: 'Que trouve Jessica dans l\'appartement de John Wang ?',
      choix: ['Une boîte à musique', 'Des cassettes noires', 'Un carnet', 'De l\'argent'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q91',
      question: 'Que se passe-t-il si on coupe pendant la MISE EN PLACE ?',
      choix: [
        'Note faible — rien ne s\'est encore passé',
        'Note élevée — surprise narrative',
        'Note moyenne — acceptable',
        'Cutter ne commente pas'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q92',
      question: 'Quel est le surnom de la weed vendue au Rewind Paradise ?',
      choix: ['Sicilian Gold', 'Jamaica Blue', 'Green Paradise', 'VHS Special'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q93',
      question: 'Que fait Corey quand une cassette n\'est pas rembobinée ?',
      choix: [
        'Il s\'en occupe lui-même en maugréant',
        'Il pénalise le client',
        'Il jette la cassette',
        'Il appelle Jackson'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q94',
      question: 'Combien y a-t-il de fins différentes dans Rewind Paradise ?',
      choix: ['5', '3', '7', '4'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q95',
      question: 'Quel personnage mentionne DiMaggio pour la première fois ?',
      choix: ['Ramon', 'Jackson', 'Canopi', 'Miguel'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q96',
      question: 'Pendant quelle pause Fred et Corey jouent-ils au quiz ?',
      choix: ['La pause déjeuner', 'L\'ouverture', 'La fermeture', 'La nuit'],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q97',
      question: 'Que se passe-t-il si on distribue un micro-métrage "via Jackson" avec une note faible ?',
      choix: [
        'Jackson refuse — note trop faible',
        'Jackson accepte mais réduit sa part',
        'Jackson augmente la collecte',
        'Jackson alerte Canopi'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q98',
      question: 'Quel est l\'effet d\'une bonne note Cutter sur l\'énergie du lendemain ?',
      choix: [
        'Énergie bonus +3',
        'Aucun effet',
        'Énergie -2',
        'Énergie maximale restaurée'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q99',
      question: 'Que symbolise la Beaulieu 16mm dans la vitrine d\'en face ?',
      choix: [
        'Le rêve de Corey — faire du vrai cinéma',
        'L\'objectif de DiMaggio',
        'L\'équipement de Cutter',
        'La caméra volée par Jessica'
      ],
      bonne: 0,
      categorie: 'REWIND'
    },
    {
      id: 'q100',
      question: 'Quelle phrase de Cutter résume le mieux l\'art du micro-métrage ?',
      choix: [
        '"Trouver le moment où le film n\'a plus besoin de continuer."',
        '"Couper c\'est choisir."',
        '"Le silence après vaut mieux que la suite."',
        '"Un film sans fin est un film honnête."'
      ],
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
      '"Trois bonnes réponses. Cutter serait impressionné. Peut-être."',
      '"Tu m\'épates Fred. Sérieusement."',
      '"Trois sur trois. On devrait jouer pour de l\'argent."'
    ],
    bien: [
      '"Deux sur trois. C\'est bien. C\'est pas trois."',
      '"Deux bonnes. L\'autre tu la savais pas ou tu l\'as pas vue venir ?"',
      '"Deux. On peut faire mieux la prochaine fois."',
      '"Deux sur trois. Moi j\'aurais fait pareil."',
      '"Bien. Pas parfait. Bien."'
    ],
    moyen: [
      '"Une sur trois Fred. Une."',
      '"T\'as loué ces films pendant des années et tu connais même pas ça ?"',
      '"Une bonne réponse. Les deux autres tu veux qu\'on en parle ?"',
      '"Une. C\'est mieux que zéro. A peine."',
      '"T\'as de la chance que les clients voient pas ça."'
    ],
    nul: [
      '"Zéro. Zéro sur trois. On tient un vidéoclub Fred."',
      '"Comment tu peux avoir zéro ? T\'as regardé les films au moins ?"',
      '"Zéro. Je suis déçu. Non. Je suis effondré."',
      '"Zéro sur trois. La réserve ce soir va être longue."',
      '"Zéro. Je retourne rembobiner des cassettes."'
    ]
  },

  // ===================================================
  // TIRER 3 QUESTIONS ALÉATOIRES
  // ===================================================

  getQuestions(gameState) {
    const gs = gameState || {};

    // Pool filtré selon semaine
    let pool = this.questions.filter(q => {
      // Questions REWIND avancées seulement dès S2
      if (q.categorie === 'REWIND' && q.id > 'q85' || q.categorie === 'COREY' && false
       && (gs.semaine || 1) < 2) return false;
      return true;
    });

    // Mélanger
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Une question de chaque catégorie si possible
    const includeCorey = Math.random() < 0.33;
    const cats = includeCorey
      ? ['CATALOGUE', 'COREY', 'CINEMA']
      : ['CATALOGUE', 'CINEMA', 'VHS'];
    const selection = [];

    for (const cat of cats) {
      if (selection.length >= 3) break;
      const found = pool.find(
        q => q.categorie === cat && !selection.includes(q)
      );
      if (found) selection.push(found);
    }

    // Compléter si nécessaire
    for (const q of pool) {
      if (selection.length >= 3) break;
      if (!selection.includes(q)) selection.push(q);
    }

    // Mélanger les choix
    return selection.slice(0, 3).map(q => {
      const choixMelanges = [...q.choix];
      const bonneReponse  = choixMelanges[q.bonne];

      for (let i = choixMelanges.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choixMelanges[i], choixMelanges[j]] =
          [choixMelanges[j], choixMelanges[i]];
      }

      return {
        ...q,
        choix:      choixMelanges,
        bonneIndex: choixMelanges.indexOf(bonneReponse)
      };
    });
  },

  // ===================================================
  // RÉCOMPENSES
  // ===================================================

  getRecompenses(score) {
    const r = {
      0: { energie: 0, argent: 0,  msg: 'Zéro bonnes réponses.' },
      1: { energie: 1, argent: 0,  msg: 'Une bonne réponse. Énergie +1.' },
      2: { energie: 2, argent: 5,  msg: 'Deux bonnes réponses. Énergie +2, +5$.' },
      3: { energie: 3, argent: 10, msg: 'Trois sur trois ! Énergie +3, +10$.' }
    };
    return r[score] || r[0];
  }

};