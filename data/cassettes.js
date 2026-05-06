// ===================================================
// REWIND PARADISE — CASSETTES SOURCES
// 20 micro-métrages avec structures narratives
// ===================================================

const CASSETTES_DATA = [

  // ===== SEMAINE 1 — ACCESSIBLES DÈS LE DÉBUT =====

  {
    id: 'action_01',
    titre: 'LE DERNIER RECOURS',
    type: 'ACTION',
    semaine_min: 1,
    difficulte: 1,
    segments: [
      { zone:'bleu',   icon:'🚗', text:'Un homme sort d\'une voiture garée devant un immeuble anonyme. Il regarde les fenêtres du haut.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🔫', text:'Il monte les escaliers. Chaque palier, il hésite. La main reste sur l\'arme sans la sortir.', label:'TENSION' },
      { zone:'rouge',  icon:'🚪', text:'Il frappe à la porte. Silence. Il sait que quelqu\'un est derrière. Il attend.', label:'BASCULE' },
      { zone:'vert',   icon:'💥', text:'La porte s\'ouvre. Tout se règle en quinze secondes. Le couloir est vide ensuite.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [2],
    corey_avant: "Action ce soir. Faut couper avant le premier coup de feu. Sinon c'est juste un film d'action.",
    cutter_special: null
  },

  {
    id: 'drame_01',
    titre: 'L\'HEURE CREUSE',
    type: 'DRAME',
    semaine_min: 1,
    difficulte: 2,
    segments: [
      { zone:'bleu',   icon:'🏠', text:'Une cuisine. Le matin. Une femme prépare du café pour deux tasses.', label:'MISE EN PLACE' },
      { zone:'bleu',   icon:'⏰', text:'L\'autre tasse reste là. Froide. Elle la regarde sans y toucher.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'📞', text:'Le téléphone sonne. Elle ne répond pas. Elle sait exactement ce que c\'est.', label:'TENSION' },
      { zone:'rouge',  icon:'✋', text:'Elle pose la main sur le combiné. S\'arrête. Une décision se prend.', label:'BASCULE' },
      { zone:'vert',   icon:'🚶', text:'Elle prend son manteau et sort. Le café fume encore sur le comptoir.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [3],
    corey_avant: "Drame. Les bonnes coupes dans un drame c'est les plus belles. Aussi les plus difficiles.",
    cutter_special: null
  },

  {
    id: 'horreur_01',
    titre: 'CHAMBRE NOIRE',
    type: 'HORREUR',
    semaine_min: 1,
    difficulte: 2,
    segments: [
      { zone:'bleu',   icon:'🌙', text:'Une maison de campagne. La nuit. Les fenêtres s\'éclairent une par une sans raison.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'👂', text:'Un bruit. Quelqu\'un descend les escaliers lentement. Trop lentement pour être normal.', label:'TENSION' },
      { zone:'rouge',  icon:'🚪', text:'La porte de la cave est ouverte. Elle ne devrait pas l\'être. Elle était fermée hier.', label:'BASCULE' },
      { zone:'vert',   icon:'😱', text:'Ce qui est dans la cave n\'aurait pas dû exister. Et pourtant.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [1, 2],
    corey_avant: "Horreur. La règle c'est couper avant que ça soit confirmé. La peur vaut mieux que la chose.",
    cutter_special: null
  },

  {
    id: 'comedie_01',
    titre: 'ZÉRO POINTÉ',
    type: 'COMÉDIE',
    semaine_min: 1,
    difficulte: 3,
    segments: [
      { zone:'bleu',   icon:'🎓', text:'Un étudiant entre dans la salle d\'examen avec un seul stylo. Il a l\'air confiant.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'💧', text:'Le stylo fuit. L\'encre partout. Ses voisins reculent un par un.', label:'TENSION' },
      { zone:'rouge',  icon:'✍️', text:'Il continue à écrire avec la paume de sa main. Parfaitement concentré.', label:'BASCULE' },
      { zone:'vert',   icon:'🏆', text:'Il rend sa copie. Elle est illisible. Il sourit quand même en sortant.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [2],
    corey_avant: "Comédie. Couper dans une comédie c'est le truc le plus difficile du monde. Le timing c'est tout.",
    cutter_special: "Couper une comédie au bon moment c'est plus difficile que tout le reste. Ici vous avez réussi ou vous avez raté. Rien entre les deux."
  },

  // ===== SEMAINE 2 =====

  {
    id: 'thriller_01',
    titre: 'SANS ISSUE',
    type: 'THRILLER',
    semaine_min: 2,
    difficulte: 2,
    segments: [
      { zone:'bleu',   icon:'🏢', text:'Un homme dans un couloir d\'immeuble. Il cherche quelque chose. Ou quelqu\'un.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🔑', text:'Il essaie chaque porte. La troisième résiste. La quatrième aussi.', label:'TENSION' },
      { zone:'rouge',  icon:'👤', text:'Une silhouette au bout du couloir. Elle bouge pas. Elle attend.', label:'BASCULE' },
      { zone:'vert',   icon:'🚪', text:'Il choisit de pas aller jusqu\'au bout. Il repart par où il est venu.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    corey_avant: "Thriller. La silhouette qui attend. Faut couper avant qu'on sache ce que c'est.",
    cutter_special: null
  },

  {
    id: 'drame_02',
    titre: 'LE DERNIER TRAIN',
    type: 'DRAME',
    semaine_min: 2,
    difficulte: 2,
    segments: [
      { zone:'bleu',   icon:'🚉', text:'Une gare. Tard le soir. Un homme avec une valise trop petite pour un long voyage.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'📱', text:'Son téléphone sonne. Il regarde le nom. Il répond pas. Il range le téléphone.', label:'TENSION' },
      { zone:'rouge',  icon:'🎫', text:'Il achète un billet. Pour où ? On voit pas. Il range le billet sans le regarder.', label:'BASCULE' },
      { zone:'vert',   icon:'🚆', text:'Le train part. Il est dedans. La fenêtre s\'éloigne.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [2, 3],
    corey_avant: "Le billet qu'il regarde pas. C'est là que tout se passe. Tu vois ce que je veux dire.",
    cutter_special: null
  },

  {
    id: 'action_02',
    titre: 'LA POURSUITE',
    type: 'ACTION',
    semaine_min: 2,
    difficulte: 1,
    segments: [
      { zone:'bleu',   icon:'🏃', text:'Quelqu\'un court. Dans une rue qu\'on connaît pas. Vers quelque chose ou loin de quelque chose.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🌆', text:'La ville autour. Les gens s\'écartent. Les voitures klaxonnent.', label:'TENSION' },
      { zone:'rouge',  icon:'✋', text:'Il s\'arrête. Net. Au milieu de la rue. Quelque chose l\'a arrêté.', label:'BASCULE' },
      { zone:'vert',   icon:'🌅', text:'Il regarde devant lui. On voit pas ce qu\'il voit. Il sourit.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 3,
    coupesIdeal: [2],
    corey_avant: "La coupe audacieuse c'est à la fin — quand il sourit. On voit jamais ce qu'il voit. C'est ça le micro-métrage.",
    cutter_special: null
  },

  {
    id: 'horreur_02',
    titre: 'LA VOISINE',
    type: 'HORREUR',
    semaine_min: 2,
    difficulte: 3,
    segments: [
      { zone:'bleu',   icon:'🏘️', text:'Un appartement. La voisine du dessus fait du bruit tous les soirs à la même heure.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'⬆️', text:'Cette nuit le bruit est différent. Plus grave. Plus lent.', label:'TENSION' },
      { zone:'orange', icon:'🔔', text:'Il monte sonner. Personne répond. Mais le bruit continue derrière la porte.', label:'TENSION' },
      { zone:'rouge',  icon:'🗝️', text:'La porte s\'ouvre d\'elle-même. Il entre pas.', label:'BASCULE' },
      { zone:'vert',   icon:'🌑', text:'Le bruit s\'arrête. Silence complet. Pire que tout ce qu\'il imaginait.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [3],
    corey_avant: "Cinq segments. Plus de zones à lire. Cutter va regarder ça de près.",
    cutter_special: null
  },

  // ===== SEMAINE 3 =====

  {
    id: 'noir_01',
    titre: 'L\'ALIBI',
    type: 'NOIR',
    semaine_min: 3,
    difficulte: 3,
    segments: [
      { zone:'bleu',   icon:'🕵️', text:'Un détective reçoit une cliente. Elle ment dès la première phrase. Il le sait.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'💬', text:'Elle parle. Il écoute. Il note ce qu\'elle dit pas.', label:'TENSION' },
      { zone:'rouge',  icon:'📷', text:'Il sort une photo. Elle change de couleur. Ce moment-là exactement.', label:'BASCULE' },
      { zone:'vert',   icon:'💰', text:'Elle repose l\'argent sur le bureau. Elle repart. Il garde la photo.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    corey_avant: "Noir. La photo qu'il sort. C'est là. Tout est là dans ce geste.",
    cutter_special: null
  },

  {
    id: 'drame_03',
    titre: 'LE RETOUR',
    type: 'DRAME',
    semaine_min: 3,
    difficulte: 3,
    segments: [
      { zone:'bleu',   icon:'🏡', text:'Une maison qu\'on reconnaît pas tout de suite. Un homme devant. Il ose pas sonner.', label:'MISE EN PLACE' },
      { zone:'bleu',   icon:'⏱️', text:'Il reste là. Dix minutes. Vingt. La lumière change à l\'intérieur.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🪟', text:'Quelqu\'un passe derrière la fenêtre. S\'arrête. Le regarde pas encore.', label:'TENSION' },
      { zone:'rouge',  icon:'🚪', text:'La porte s\'ouvre de l\'intérieur. Avant qu\'il sonne.', label:'BASCULE' },
      { zone:'vert',   icon:'🤝', text:'Ce qui se passe après la porte on le voit pas. On entend juste.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [3],
    corey_avant: "La porte qui s\'ouvre avant qu'il sonne. C'est ça. Couper juste avant ou juste après c'est deux films différents.",
    cutter_special: null
  },

  {
    id: 'sf_01',
    titre: 'SIGNAL',
    type: 'SCIENCE-FICTION',
    semaine_min: 3,
    difficulte: 3,
    segments: [
      { zone:'bleu',   icon:'📡', text:'Une station. Déserte. Quelqu\'un reçoit un signal. Il note les coordonnées.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🔭', text:'Il cherche l\'origine. Les calculs disent quelque chose d\'impossible.', label:'TENSION' },
      { zone:'rouge',  icon:'💻', text:'Il envoie une réponse. Sans autorisation. Sans raison logique. Il l\'envoie.', label:'BASCULE' },
      { zone:'vert',   icon:'⚡', text:'Le signal s\'arrête. Il attend. Rien. Puis quelque chose.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [2, 3],
    corey_avant: "SF cette semaine. L'envoi de la réponse. C'est le moment de folie du film. Couper là.",
    cutter_special: null
  },

  {
    id: 'comedie_02',
    titre: 'LE MALENTENDU',
    type: 'COMÉDIE',
    semaine_min: 3,
    difficulte: 4,
    segments: [
      { zone:'bleu',   icon:'📦', text:'Un homme reçoit un colis. Pas pour lui. Même nom, mauvaise rue.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🚶', text:'Il cherche la bonne adresse. Chaque personne qu\'il croise complique la situation.', label:'TENSION' },
      { zone:'rouge',  icon:'🤦', text:'Il arrive. C\'est sa propre maison. Son propre colis. Il avait mis la mauvaise adresse.', label:'BASCULE' },
      { zone:'vert',   icon:'📬', text:'Il ouvre le colis. À l\'intérieur : un autre colis. Pour quelqu\'un d\'autre.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [2],
    corey_avant: "Le moment où il réalise que c'est chez lui. Couper là c'est garder la blague sans l'expliquer.",
    cutter_special: "Les comédies n'ont pas besoin de résolution. Elles ont besoin du moment juste avant."
  },

  // ===== SEMAINE 4 =====

  {
    id: 'guerre_01',
    titre: 'CESSEZ-LE-FEU',
    type: 'GUERRE',
    semaine_min: 4,
    difficulte: 3,
    segments: [
      { zone:'bleu',   icon:'🏳️', text:'Deux tranchées. La nuit. Un soldat sort un drapeau blanc. Petit. Fait maison.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🎵', text:'Il commence à siffler. Un air qu\'on reconnaît pas. L\'autre côté écoute.', label:'TENSION' },
      { zone:'rouge',  icon:'🎶', text:'De l\'autre côté quelqu\'un reprend l\'air. En harmonie. Sans se montrer.', label:'BASCULE' },
      { zone:'vert',   icon:'🌅', text:'L\'aube arrive. Les deux côtés restent silencieux. Le jour commence autrement.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 3,
    coupesIdeal: [2],
    corey_avant: "L'harmonie entre les deux. Couper là c'est couper avant que l'espoir soit confirmé ou détruit.",
    cutter_special: null
  },

  {
    id: 'drame_04',
    titre: 'L\'INVENTAIRE',
    type: 'DRAME',
    semaine_min: 4,
    difficulte: 4,
    segments: [
      { zone:'bleu',   icon:'📦', text:'Une femme vide une chambre. Méthodiquement. Carton par carton.', label:'MISE EN PLACE' },
      { zone:'bleu',   icon:'👕', text:'Elle plie les vêtements. Elle les regarde pas. Elle plie.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'📷', text:'Elle tombe sur une photo. Elle la regarde longtemps. Elle la repose.', label:'TENSION' },
      { zone:'rouge',  icon:'🗑️', text:'Elle prend le carton. Elle s\'arrête devant la poubelle. Elle pose le carton.', label:'BASCULE' },
      { zone:'vert',   icon:'🚪', text:'Elle sort de la chambre. Elle laisse le carton. La porte reste ouverte.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [3],
    corey_avant: "Le carton devant la poubelle. C'est là. Pas après. Juste ce moment-là.",
    cutter_special: "Ce film parle de ce qu'on garde et ce qu'on jette. Votre coupe dit quelle question vous posez."
  },

  {
    id: 'polar_01',
    titre: 'LA CONFESSION',
    type: 'POLAR',
    semaine_min: 4,
    difficulte: 4,
    segments: [
      { zone:'bleu',   icon:'🪑', text:'Une salle d\'interrogatoire. Un homme. Un inspecteur. Le magnétophone tourne.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'💬', text:'L\'homme parle. Il raconte quelque chose de précis. Trop précis pour être inventé.', label:'TENSION' },
      { zone:'rouge',  icon:'😶', text:'L\'inspecteur arrête le magnétophone. Il regarde l\'homme. Il dit rien.', label:'BASCULE' },
      { zone:'vert',   icon:'🚪', text:'L\'inspecteur se lève. Il sort. L\'homme reste seul avec le magnétophone éteint.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    corey_avant: "L'inspecteur qui arrête le magnéto. Ce geste. Couper exactement là-dessus.",
    cutter_special: null
  },

  // ===== SEMAINE 5 — RARETÉS =====

  {
    id: 'rare_01',
    titre: 'CONTRE-PLONGÉE',
    type: 'RARETÉ ★',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      { zone:'orange', icon:'🔦', text:'Un détective fouille une pièce. Il trouve quelque chose qu\'il attendait pas.', label:'TENSION' },
      { zone:'bleu',   icon:'⏪', text:'Retour en arrière. Comment il est arrivé là. Ce qu\'on lui avait dit.', label:'MISE EN PLACE' },
      { zone:'rouge',  icon:'❗', text:'Un visage qu\'il reconnaît. Un mensonge évident. Tout semble clair.', label:'FAUSSE BASCULE' },
      { zone:'bleu',   icon:'⏪', text:'Encore en arrière. Ce qu\'il n\'avait pas vu la première fois.', label:'RETOUR' },
      { zone:'rouge',  icon:'💡', text:'La vérité. Plus simple que tout. Trop simple pour avoir été vue.', label:'VRAIE BASCULE' },
      { zone:'vert',   icon:'🚪', text:'Il sort de la pièce. Laisse tout derrière lui. Il a compris.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 2,
    coupesIdeal: [4],
    corey_avant: "Rareté. Structure non-conventionnelle. Cutter va tout regarder. Fais pas de coupe évidente.",
    cutter_special: "La structure non-linéaire existe pour une raison. Votre coupe révèle si vous avez compris laquelle."
  },

  {
    id: 'rare_02',
    titre: 'LE LONG PLAN',
    type: 'RARETÉ ★',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      { zone:'bleu',   icon:'🎥', text:'Un plan-séquence. La caméra bouge jamais. On regarde une rue pendant cinq minutes.', label:'MISE EN PLACE' },
      { zone:'bleu',   icon:'🚶', text:'Des gens passent. Chacun a une histoire qu\'on devine en deux secondes.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🛑', text:'Quelqu\'un s\'arrête. Au milieu. Il regarde quelque chose hors-champ.', label:'TENSION' },
      { zone:'rouge',  icon:'👁️', text:'La caméra reste. Il reste. Tout le reste continue autour de lui.', label:'BASCULE' },
      { zone:'vert',   icon:'🌊', text:'Il repart. La rue continue. Comme si rien.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 0,
    coupesIdeal: [3],
    corey_avant: "Plan fixe. Pas de musique. Cutter adore et déteste ce type de film en même temps.",
    cutter_special: "Couper un plan-séquence c'est décider à quel moment l'attention vaut plus que la durée."
  },

  {
    id: 'rare_03',
    titre: 'LE TÉMOIN',
    type: 'RARETÉ ★',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      { zone:'bleu',   icon:'👀', text:'Quelqu\'un observe quelque chose par une fenêtre. On sait pas ce qu\'il voit.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'😮', text:'Son expression change. Légèrement. Quelque chose l\'a frappé.', label:'TENSION' },
      { zone:'rouge',  icon:'📱', text:'Il prend son téléphone. Il compose un numéro. Il s\'arrête avant d\'appuyer.', label:'BASCULE' },
      { zone:'vert',   icon:'🪟', text:'Il repose le téléphone. Il continue à regarder par la fenêtre.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    corey_avant: "Le téléphone qu'il compose pas. Toute la tension est là.",
    cutter_special: "Ce film pose une seule question : pourquoi il appelle pas. Votre coupe répond ou refuse de répondre."
  },

  {
    id: 'rare_04',
    titre: 'LETTRE MORTE',
    type: 'RARETÉ ★',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      { zone:'bleu',   icon:'✉️', text:'Une lettre. Non ouverte. Posée sur une table depuis combien de temps ?', label:'MISE EN PLACE' },
      { zone:'orange', icon:'🖐️', text:'Quelqu\'un la prend. La retourne. Pose le doigt sous le rabat.', label:'TENSION' },
      { zone:'rouge',  icon:'⏸️', text:'Il s\'arrête. Repose la lettre. Face cachée maintenant.', label:'BASCULE' },
      { zone:'vert',   icon:'🚶', text:'Il quitte la pièce. La lettre reste. On saura jamais.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 1,
    coupesIdeal: [2],
    corey_avant: "La lettre qu'on ouvre pas. Cutter a donné un dix à un micro-métrage sur une lettre une fois. Une seule.",
    cutter_special: "Le secret non-révélé est la seule vraie fin. Votre coupe dit si vous faites confiance au spectateur."
  },

  {
    id: 'rare_05',
    titre: 'ÉCHO',
    type: 'RARETÉ ★ ★',
    semaine_min: 5,
    difficulte: 5,
    segments: [
      { zone:'orange', icon:'🔊', text:'Un son. On voit rien encore. Juste le son d\'une ville qui se réveille.', label:'TENSION' },
      { zone:'bleu',   icon:'🌅', text:'Le soleil qui monte sur des toits. Personne encore. Juste les toits.', label:'MISE EN PLACE' },
      { zone:'orange', icon:'👣', text:'Des pas. Quelqu\'un marche. On voit ses chaussures. C\'est tout.', label:'TENSION' },
      { zone:'rouge',  icon:'🪞', text:'Il s\'arrête devant une vitrine. Son reflet. Il regarde son reflet longtemps.', label:'BASCULE' },
      { zone:'vert',   icon:'🌆', text:'Il repart. La ville continue. Le son continue. Comme avant.', label:'RÉSOLUTION' }
    ],
    coupeAudacieuse: 3,
    coupesIdeal: [3],
    corey_avant: "Double étoile. Cutter a dit qu'il attendait ce film depuis le début. Fais pas n'importe quoi.",
    cutter_special: "Un film sur le regard. Couper sur le regard c'est soit de la lâcheté soit du génie. Je saurai lequel."
  }

];

// ===================================================
// UTILITAIRES
// ===================================================

// Obtenir les cassettes disponibles selon la semaine
function getCassettesDisponibles(gameState) {
  const gs = gameState;
  return CASSETTES_DATA.filter(c => {
    // Filtre par semaine
    if (c.semaine_min > gs.semaine) return false;
    // Les raretés nécessitent une crédibilité suffisante
    if (c.type.includes('RARETÉ')
     && gs.credibilite < 60) return false;
    return true;
  });
}

// Choisir la cassette du soir
function choisirCassette(gameState) {
  const gs = gameState;
  const disponibles = getCassettesDisponibles(gs);

  if (disponibles.length === 0) {
    return CASSETTES_DATA[0]; // Fallback
  }

  // Préférer les raretés si crédibilité haute
  if (gs.credibilite >= 80 && Math.random() > 0.5) {
    const rarites = disponibles.filter(
      c => c.type.includes('RARETÉ')
    );
    if (rarites.length > 0) {
      return rarites[Math.floor(Math.random() * rarites.length)];
    }
  }

  // Sinon aléatoire parmi les disponibles
  // Éviter de rejouer la même cassette deux fois de suite
  const pasLaDerniere = disponibles.filter(
    c => c.id !== gs.derniereCassette
  );
  const pool = pasLaDerniere.length > 0
    ? pasLaDerniere
    : disponibles;

  return pool[Math.floor(Math.random() * pool.length)];
}

// Calculer la note selon la coupe
function calculerNote(cassette, cutIndex) {
  const idealSegments  = cassette.coupesIdeal;
  const audacieux      = cassette.coupeAudacieuse;
  const total          = cassette.segments.length;

  // Coupe audacieuse
  if (cutIndex === audacieux
   && !idealSegments.includes(audacieux)) {
    return Math.random() > 0.5 ? 9 : 2;
  }

  // Coupe trop tôt
  if (cutIndex === 0) return 2;

  // Coupe idéale
  if (idealSegments.includes(cutIndex)) {
    if (cutIndex === idealSegments[0]) return 8;
    return 7;
  }

  // Coupe trop tard
  if (cutIndex >= total - 1) return 3;

  // Avant la zone idéale
  if (cutIndex < Math.min(...idealSegments)) return 5;

  // Après la zone idéale
  if (cutIndex > Math.max(...idealSegments)) return 4;

  return 6;
}

// Obtenir la critique Cutter complète
function getCutterCritique(note, cassette) {
  const critiques = {
    1:  {
      texte: cassette.cutter_special
        || "Vous avez appuyé sur stop au hasard. Ce n'est pas du cinéma.",
      corey: "\"C'est ce que je t'avais dit.\""
    },
    2:  {
      texte: "Vous avez coupé avant même d'avoir quelque chose à couper. De la lâcheté déguisée en minimalisme.",
      corey: "\"Ouais... deux sur dix c'est dur.\""
    },
    3:  {
      texte: "Prudent. Vous avez choisi la sécurité au moment où il fallait choisir le risque. Dommage.",
      corey: "\"Cutter est déçu. Moi aussi un peu.\""
    },
    4:  {
      texte: "Vous étiez au bon endroit mais trop tard. La bascule était déjà derrière vous.",
      corey: "\"Quatre. On recommence demain.\""
    },
    5:  {
      texte: "L'instinct était là. L'audace, non. Vous êtes dans la bonne zone mais la zone n'est pas le point.",
      corey: "\"Cinq sur dix. On peut faire mieux.\""
    },
    6:  {
      texte: "Vous avez vu juste mais pas loin. La prochaine fois allez plus loin. Ou pas du tout.",
      corey: "\"Six. Ouais. J'aurais dit pareil.\""
    },
    7:  {
      texte: "Bien. Vous avez vu où ça bascule. Vous n'avez pas eu peur d'y aller. C'est quelque chose.",
      corey: "\"Sept c'est bien. Sept c'est pas dix non plus.\""
    },
    8:  {
      texte: cassette.cutter_special
        || "Vous avez compris ce que ce film avait à dire. Et vous avez coupé au bon moment.",
      corey: "\"Huit sur dix. Cutter commence à s'intéresser.\""
    },
    9:  {
      texte: "Vous avez vu exactement où ça bascule. Et vous avez coupé là. C'est tout ce qu'un micro-métrage doit faire.",
      corey: "\"Je savais que t'avais ça en toi, Fred.\""
    },
    10: {
      texte: "Je ne comprends pas encore pourquoi cette coupe fonctionne. Mais elle fonctionne. Je déteste ça.",
      corey: "\"Dix sur dix. Repose-toi. Tu le mérites.\""
    }
  };

  return critiques[note] || critiques[6];
}