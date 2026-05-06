// ===================================================
// REWIND PARADISE — ARCS NARRATIFS
// Jackson, DiMaggio, Jessica, Lucious
// ===================================================

const ARCS = {

  // ===================================================
  // ARC JACKSON
  // ===================================================

  jackson: {

    // ===== PORTRAITS PAR SEMAINE =====
    // Ce que Fred observe de Jackson au fil du temps

    portraits: {
      semaine1: [
        "Jackson arrive avec la cassette sous le bras. Il semble pas pressé. Il semble jamais pressé.",
        "Il pose la cassette sur le comptoir. Il regarde autour. Pas comme un flic. Comme quelqu'un qui compte les sorties.",
        "Jackson. Dreadlocks. Veste en cuir usée. Il parle pas beaucoup. Corey essaie quand même."
      ],
      semaine2: [
        "Jackson commence à commenter les micro-métrages. Pas beaucoup. Une phrase. Mais il les a vus circuler.",
        "Il dit 'pas mal votre truc' en posant la cassette. C'est la première fois qu'il dit quelque chose comme ça.",
        "Il sait ce qu'on fait. Depuis le début probablement. Il a juste attendu de voir si c'était sérieux."
      ],
      semaine3: [
        "Jackson est moins décontracté. Quelque chose pèse. Le patron probablement.",
        "Il reste plus longtemps que nécessaire. Il cherche quelque chose à dire. Il dit rien.",
        "Il a les yeux qui bougent trop. Jackson qui surveille ses angles c'est Jackson sous pression."
      ],
      semaine4: [
        "Jackson fait la liaison entre DiMaggio et nous. Il l'a toujours fait. Mais maintenant on le voit.",
        "Il dit moins. Il observe plus. C'est pas bon signe.",
        "Je pense qu'il essaie de nous protéger à sa façon. En disant moins à DiMaggio qu'il sait.",
        "Jackson coincé entre DiMaggio et nous. C'est exactement là où on voulait pas le mettre."
      ],
      semaine5: [
        "Jackson va devoir choisir. On va tous devoir choisir.",
        "Il a l'air fatigué. Pas de sommeil — de situation.",
        "La dernière fois que je l'ai vu il m'a regardé comme si c'était peut-être la dernière fois."
      ]
    },

    // ===== SCÈNES NARRATIVES =====

    scenes: {

      // Première visite informelle (S2J10)
      premiere_collecte: {
        titre: "PREMIÈRE COLLECTE",
        lieu: "Le comptoir. Après la fermeture.",
        texte: [
          "Jackson pose les billets sur le comptoir. Il les compte pas. Il sait combien c'est.",
          "Il dit : 'Le patron a besoin de savoir que c'est régulier.'",
          "Fred demande qui est le patron.",
          "Jackson sourit. Pas un vrai sourire. 'Quelqu'un qui aime les choses propres.'",
          "Il repart. Corey attend qu'il soit dehors pour parler.",
          "Corey dit : 'DiMaggio.' Fred demande comment il sait.",
          "Corey dit : 'J'ai entendu ce nom quelque part. Dans une conversation que j'aurais pas dû entendre.'"
        ],
        effet: (gs) => {
          gs.jackson_scene_collecte = true;
          gs.dimaggio_nom_connu = true;
        }
      },

      // Il commence à parler des micro-métrages (S2)
      jackson_parle_micro: {
        titre: "JACKSON PARLE",
        lieu: "La porte arrière. Il allume pas.",
        texte: [
          "'Ces trucs que vous faites le soir.' Jackson regarde le plafond.",
          "'Ils circulent. Les gamins en parlent. Le patron a entendu.'",
          "Fred demande si c'est un problème.",
          "'Pour l'instant non. Tant que ça reste dans le quartier.'",
          "Il part. Il ajoute depuis la porte :",
          "'Cutter. C'est ce nom-là dans le fanzine ? Faites attention à ce que vous lui montrez.'"
        ],
        effet: (gs) => {
          gs.jackson_parle_cutter = true;
        }
      },

      // La pression monte (S3)
      jackson_pression: {
        titre: "LA PRESSION",
        lieu: "Mercredi. La collecte.",
        texte: [
          "Jackson prend l'argent. Il le range sans compter.",
          "'Le patron veut plus. Pas plus d'argent. Plus de visibilité.'",
          "Corey demande ce que ça veut dire.",
          "'Ça veut dire que vos micro-métrages commencent à être connus.'",
          "'Pour vous c'est bien. Pour lui c'est une complication.'",
          "Il se lève. 'Faites profil bas cette semaine. S'il vous plaît.'"
        ],
        effet: (gs) => {
          gs.exposition = Math.min(100, gs.exposition + 3);
          gs.jackson_demande_profil_bas = true;
        }
      },

      // Il essaie de protéger Fred et Corey (S4)
      jackson_protege: {
        titre: "CE QU'IL A PAS DIT",
        lieu: "La réserve. Il est resté.",
        texte: [
          "Jackson est resté après la collecte. C'est la première fois.",
          "'DiMaggio sait pas tout ce que je sais.'",
          "Fred comprend pas tout de suite.",
          "'Je lui ai dit que vous étiez réguliers. Que vous posiez pas de questions.'",
          "'J'ai pas parlé de Cutter. J'ai pas parlé du fanzine.'",
          "Un silence. 'Ça peut pas durer. Mais ça m'a donné du temps.'",
          "Il repart. Fred reste là avec cette information.",
          "Jackson fait la liaison. Mais il choisit ce qu'il traduit."
        ],
        effet: (gs) => {
          gs.jackson_protege = true;
          gs.legalite = Math.max(0, gs.legalite - 3);
        }
      },

      // L'ultimatum final (S4J25)
      ultimatum: {
        titre: "VENDREDI",
        lieu: "Il est venu en journée. Mauvais signe.",
        texte: [
          "Jackson pose pas de cassette.",
          "Il dit : 'DiMaggio veut vous rencontrer. Vendredi.'",
          "Corey demande pourquoi.",
          "'Parce qu'il sait que vous existez. Et qu'il aime savoir.'",
          "Fred demande si c'est une question.",
          "Jackson le regarde. 'Non.'"
        ],
        effet: (gs) => {
          gs.ultimatum_dimaggio = true;
        }
      },

      // Semaine 5 selon les choix
      fin_cool: {
        titre: "DERNIÈRE LIVRAISON",
        lieu: "Le lundi matin. Dernière semaine.",
        texte: [
          "La cassette est sous la porte comme toujours.",
          "Avec un mot cette fois.",
          "'Bonne chance pour la suite. — J.'",
          "C'est tout. Corey lit le mot trois fois.",
          "'J.' dit Corey. 'Il signe pas Jackson. Juste J.'",
          "Fred range le mot. Il sait pas pourquoi."
        ],
        effet: (gs) => {
          gs.jackson_fin_cool = true;
        }
      },

      fin_tendu: {
        titre: "PLUS DE CASSETTE",
        lieu: "Le lundi matin. Rien sous la porte.",
        texte: [
          "Pas de cassette. Pas de mot.",
          "Corey regarde sous la porte plusieurs fois.",
          "Fred appelle Jackson. Messagerie.",
          "Fred rappelle. Messagerie encore.",
          "'Il a coupé.' dit Corey.",
          "Fred dit rien. Corey a raison."
        ],
        effet: (gs) => {
          gs.jackson_disparu = true;
          gs.exposition = Math.min(100, gs.exposition + 5);
        }
      }

    },

    // ===== MESSAGES DE NUIT ÉTENDUS =====
    // Viennent enrichir ceux déjà dans night.html

    messages_etendus: {

      semaine1: [
        {
          heure: '23:14',
          texte: "Ouais c'est moi. Tout est cool. La cassette était bonne cette semaine. Continue.",
          classe: 'neutral',
          effet: null
        },
        {
          heure: '22:47',
          texte: "Jackson. Reçu l'argent. Le patron dit merci. — Il dit pas merci mais tu vois l'idée.",
          classe: 'neutral',
          effet: null
        }
      ],

      semaine2: [
        {
          heure: '23:33',
          texte: "Les gamins ont passé la cassette à d'autres. Le patron a entendu. C'est bien pour l'instant. Juste pour l'instant.",
          classe: 'warning',
          effet: (gs) => { gs.exposition = Math.min(100, gs.exposition + 1); }
        },
        {
          heure: '01:12',
          texte: "Cutter. Ce nom-là dans le fanzine. Le patron a demandé qui c'était. J'ai dit un critique. C'est vrai non ?",
          classe: 'warning',
          effet: null
        }
      ],

      semaine3: [
        {
          heure: '00:44',
          texte: "Ramon est passé vous voir ? Il me l'a dit. DiMaggio voulait juste savoir à quoi vous ressembliez. C'est tout.",
          classe: 'warning',
          effet: (gs) => { gs.exposition = Math.min(100, gs.exposition + 2); }
        },
        {
          heure: '02:03',
          texte: "Le patron a lu quelque chose dans Celluloïd Scalpel. Une mention du quartier. Faites attention à ce que Cutter écrit.",
          classe: 'danger',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 3);
            gs.legalite = Math.min(100, gs.legalite + 2);
          }
        }
      ],

      semaine4: [
        {
          heure: '23:58',
          texte: "Fred. Vendredi c'est important. Soyez là. Les deux.",
          classe: 'warning',
          effet: null
        },
        {
          heure: '01:30',
          texte: "[long silence] [raccroché]",
          classe: 'danger',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 4);
          }
        }
      ]

    }

  },

  // ===================================================
  // ARC DIMAGGIO
  // ===================================================

  dimaggio: {

    // ===== IL N'APPARAÎT JAMAIS DIRECTEMENT =====
    // Seulement à travers Jackson, Ramon, et les messages

    // Mentions progressives dans les dialogues de Jackson
    mentions: {
      semaine1: "Le patron.",
      semaine2: "DiMaggio — c'est son nom, autant que tu le saches.",
      semaine3: "Il a des intérêts dans plusieurs choses dans ce quartier.",
      semaine4: "Il respecte le travail. Vraiment. Mais pas les surprises.",
      semaine5: "DiMaggio fait pas de bruit. C'est pour ça qu'on l'entend pas venir."
    },

    // ===== SCÈNES RAMON =====
    // Ramon est la main visible de DiMaggio

    ramon_scenes: {

      // Première visite (S3J15)
      premiere_visite: {
        titre: "L'HOMME DE DIMAGGIO",
        lieu: "Le vidéoclub. Pendant les heures d'ouverture.",
        texte: [
          "Il entre comme un client. Costume sombre. Propre.",
          "Il regarde les étagères. Pas les films — l'espace.",
          "Il s'approche du comptoir. Sourire poli.",
          "'Beau vidéoclub. Bien tenu.'",
          "Fred dit merci.",
          "'M. DiMaggio apprécie ce genre d'endroit. Le commerce local. Important.'",
          "Il regarde le comptoir. La télé. La porte de la réserve.",
          "'Vous êtes contents de votre installation ?'",
          "Corey commence à répondre. Fred l'arrête d'un regard.",
          "'Très bien.' dit Fred.",
          "Ramon hoche la tête. 'Il voulait juste que vous sachiez qu'il est au courant. Bonne journée.'",
          "Il repart. La clochette de la porte sonne.",
          "Corey dit : 'C'était quoi ça.'",
          "Fred dit : 'C'était une visite.'"
        ],
        effet: (gs) => {
          gs.exposition = Math.min(100, gs.exposition + 4);
          gs.ramon_venu = true;
        }
      },

      // Si exposition très haute (S4)
      deuxieme_visite: {
        titre: "RAMON ENCORE",
        lieu: "Cette fois il vient après la fermeture.",
        texte: [
          "Il attend sur le trottoir. Fred le voit à travers la vitre.",
          "Il entre quand Fred ouvre.",
          "'M. DiMaggio voudrait vous rencontrer. Vendredi.'",
          "Fred demande si c'est une question.",
          "Ramon sourit. 'C'est une invitation. Pour l'instant.'",
          "Il repart sans attendre la réponse.",
          "Corey dit : 'Pour l'instant. Il a dit pour l'instant.'",
          "Fred dit : 'J'ai entendu.'"
        ],
        effet: (gs) => {
          gs.ultimatum_dimaggio = true;
          gs.exposition = Math.min(100, gs.exposition + 3);
        }
      }

    },

    // ===== LA RÉUNION =====
    // Si le joueur accepte de rencontrer DiMaggio (S5)

    reunion: {
      titre: "VENDREDI SOIR",
      lieu: "Une adresse que Jackson a donnée. Un entrepôt côté port.",
      texte: [
        "DiMaggio est plus petit qu'on l'imaginait.",
        "Il est assis. Il propose pas de s'asseoir.",
        "Il dit : 'J'ai regardé vos travaux. Les micro-métrages.'",
        "Il dit ça comme si c'était des rapports comptables.",
        "'C'est bien fait. Vraiment bien fait.'",
        "Un silence.",
        "'Le problème c'est l'attention que ça génère.'",
        "'Cutter. Le fanzine. Les lycéens. Ça fait du bruit.'",
        "'Je travaille pas dans le bruit.'",
        "Fred attend.",
        "'Deux options. Vous continuez sous mon organisation complète.'",
        "'Ou vous arrêtez.'",
        "Un autre silence.",
        "'Il y a pas de troisième option.'"
      ],
      choix: [
        {
          texte: "Accepter l'organisation DiMaggio",
          detail: "Argent +300$ / Liberté créative perdue / Exposition -20%",
          effet: (gs) => {
            gs.argent += 300;
            gs.exposition = Math.max(0, gs.exposition - 20);
            gs.dimaggio_accepte = true;
            gs.fin_forcee = 'mauvaise_reception';
            return { msg: "DiMaggio hoche la tête. 'Bien.' C'est tout.", positif: false };
          }
        },
        {
          texte: "Refuser poliment",
          detail: "Exposition +15% / mais liberté conservée",
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 15);
            gs.dimaggio_refuse_reunion = true;
            return { msg: "DiMaggio regarde Fred longtemps. 'Intéressant.' Il repart.", positif: true };
          }
        },
        {
          texte: "Négocier — travailler ensemble mais garder Cutter",
          detail: "Aléatoire selon Crédibilité",
          effet: (gs) => {
            if (gs.credibilite >= 70) {
              gs.exposition = Math.max(0, gs.exposition - 5);
              gs.dimaggio_negocie = true;
              return { msg: "DiMaggio réfléchit. 'Une semaine. On voit ce que ça donne.'", positif: true };
            } else {
              gs.exposition = Math.min(100, gs.exposition + 10);
              return { msg: "DiMaggio sourit. 'Non.' Il se lève.", positif: false };
            }
          }
        }
      ]
    },

    // ===== MESSAGES INDIRECTS =====
    // DiMaggio n'appelle jamais. Mais son absence parle.

    signaux: {
      silence: "Jackson a pas rappelé. Quand Jackson rappelle pas c'est que DiMaggio a dit quelque chose.",
      pression: "Ramon est passé deux fois cette semaine. Corey l'a vu depuis la vitrine.",
      interet: "Le patron a demandé des nouvelles selon Jackson. Ça veut rien dire. Ou ça veut tout dire.",
      satisfaction: "Jackson avait l'air soulagé ce soir. DiMaggio doit être satisfait. Pour l'instant.",
      menace: "Jackson a dit 'fais attention'. Deux mots. Sans contexte. Fred a dormi sur le comptoir cette nuit-là."
    }

  },

  // ===================================================
  // ARC JESSICA
  // ===================================================

  jessica: {

    // ===== QUI EST JESSICA =====
    introduction: {
      titre: "LA FILLE DU 4B",
      semaine: 2,
      texte: [
        "Fred la voit pour la première fois depuis la vitre.",
        "Elle entre dans l'immeuble d'en face. Trop vite. La porte se referme trop vite.",
        "Corey dit : 'Tu la connais ?'",
        "Fred dit non.",
        "Corey dit : 'Elle a regardé dans notre direction avant d'entrer.'",
        "Fred dit que c'est rien.",
        "Corey dit que c'est peut-être rien."
      ],
      effet: (gs) => {
        gs.jessica_vue = true;
      }
    },

    // ===== SCÈNES DE CROCHETAGE =====

    serrures: [
      {
        id: 'serrure_01',
        semaine: 2,
        titre: "L'IMMEUBLE D'EN FACE",
        contexte: "Jessica entre dans un appartement qui n'est pas le sien. Fred le voit depuis la réserve.",
        difficulte: 1,
        goupilles: 3,
        texte_avant: "Elle sort quelque chose de sa poche. Fred comprend pas tout de suite. Puis il comprend.",
        texte_reussi: "La porte s'ouvre. Elle entre. Elle ressort quatre minutes plus tard. Elle a quelque chose.",
        texte_rate: "Quelqu'un descend l'escalier. Elle rerange ses outils. Elle repart. Elle repassera.",
        info_reussie: "Jessica cherche quelque chose dans cet immeuble. Et elle sait comment chercher.",
        info_ratee: "Fred a rien vu. Ou il a vu mais pas assez."
      },
      {
        id: 'serrure_02',
        semaine: 3,
        titre: "LE BUREAU DU PORT",
        contexte: "Jessica a besoin d'entrer dans un bureau qui appartient à quelqu'un de lié à DiMaggio.",
        difficulte: 2,
        goupilles: 4,
        texte_avant: "Quatre goupilles. Plus difficile que la dernière fois. Elle prend son temps.",
        texte_reussi: "Elle trouve ce qu'elle cherche. Des documents. Des noms. Un nom en particulier.",
        texte_rate: "Un chien de garde. Elle sort par la fenêtre. Elle a rien.",
        info_reussie: "Le nom sur les documents : DiMaggio. Et à côté : Rewind Paradise.",
        info_ratee: "Fred sait pas ce qu'elle cherchait. Ça va le déranger."
      },
      {
        id: 'serrure_03',
        semaine: 4,
        titre: "L'ENTREPÔT",
        contexte: "L'entrepôt du port. Là où Lucious a été amené. Jessica a besoin d'entrer.",
        difficulte: 3,
        goupilles: 5,
        texte_avant: "Cinq goupilles. Zone de tension très étroite. Et quelqu'un à l'intérieur.",
        texte_reussi: "Elle entre. Elle voit Lucious. Elle voit aussi autre chose — les comptes de DiMaggio.",
        texte_rate: "Trop de bruit. Elle repart. Lucious reste où il est.",
        info_reussie: "DiMaggio blanchit de l'argent via le Rewind Paradise. Fred savait pas.",
        info_ratee: "Fred apprend rien de plus. L'arc Jessica se referme partiellement."
      },
      {
        id: 'serrure_finale',
        semaine: 5,
        titre: "LA SERRURE FINALE",
        contexte: "La dernière serrure. Celle du chapitre 19 du roman. Ce que Jessica cherchait depuis le début.",
        difficulte: 4,
        goupilles: 5,
        texte_avant: "La serrure la plus difficile qu'elle ait jamais vue. Elle respire. Elle commence.",
        texte_reussi: "La porte s'ouvre. Ce qu'il y a derrière change tout. Pour elle. Et pour le Rewind Paradise.",
        texte_rate: "Pour la première fois depuis longtemps Jessica abandonne. Ce qu'il y a derrière cette porte restera derrière.",
        info_reussie: "Ce que Jessica a trouvé protège Fred et Corey. Sans qu'ils le sachent jamais.",
        info_ratee: "Sans cette information l'arc se ferme. Fin 3 devient inaccessible."
      }
    ],

    // ===== CONNEXION AVEC LE REWIND PARADISE =====
    connexions: {
      semaine2: "Elle est venue louer un film une fois. Drame. Elle a payé en liquide.",
      semaine3: "Corey l'a vue parler à Jackson dans la rue. Ils se connaissent.",
      semaine4: "Elle a laissé un mot sous la porte. 'Méfiez-vous du mardi.' Signé J.",
      semaine5: "Fred comprend enfin qui elle est. Et ce qu'elle a fait pour eux."
    }

  },

  // ===================================================
  // ARC LUCIOUS
  // ===================================================

  lucious: {

    // ===== QUI EST LUCIOUS =====
    introduction: {
      titre: "L'HOMME DU MATIN",
      semaine: 1,
      texte: [
        "Il passe devant le Rewind Paradise tous les matins.",
        "Jamais il entre. Il regarde l'enseigne. Il continue.",
        "Corey l'a remarqué le premier.",
        "'Il regarde notre boutique tous les jours.'",
        "Fred dit que c'est une habitude. Les gens ont des habitudes.",
        "Corey dit : 'Il a des marques sur les mains. Vieilles.'",
        "Fred regarde la prochaine fois. Corey a raison.",
        "Lucious passe. Il regarde l'enseigne. Il continue."
      ],
      effet: (gs) => {
        gs.lucious_vu = true;
      }
    },

    // ===== COMBATS =====

    combats: [
      {
        id: 'combat_01',
        semaine: 2,
        titre: "LA ROUTINE QUI TOURNE MAL",
        contexte: "Lucious rentre chez lui. Deux hommes l'attendaient.",
        adversaires: 1,
        energie_depart: 15,
        texte_avant: "Il les voit arriver. Il a le temps de se placer. Pas de panique. C'est pas la première fois.",
        texte_reussi: "Un seul coup au bon moment. L'autre part en courant. Lucious ramasse ce qu'ils avaient pris.",
        texte_rate: "Lucious se relève. Plus lentement que d'habitude. Il a perdu quelque chose ce soir.",
        info_reussie: "Il avait de l'argent sur lui. Pour quelque chose d'important.",
        info_ratee: "Ils ont pris l'argent. L'arc Lucious commence mal."
      },
      {
        id: 'combat_02',
        semaine: 3,
        titre: "LES HOMMES DE COSTELLO",
        contexte: "Costello veut récupérer ce que Lucious lui doit. Avec des intérêts.",
        adversaires: 2,
        energie_depart: 12,
        texte_avant: "Deux. Dans un espace confiné. L'un distrait l'autre frappe. Il connaît ce pattern.",
        texte_reussi: "Le trench-coat comme garrot sur le premier. Le deuxième part. Costello apprendra.",
        texte_rate: "Deux c'est trop. Lucious se relève dans la ruelle. Il sait pas combien de temps il est resté.",
        info_reussie: "Lucious a récupéré les documents. Il sait maintenant pour DiMaggio.",
        info_ratee: "Lucious a perdu les documents. Et autre chose avec."
      },
      {
        id: 'combat_03',
        semaine: 4,
        titre: "L'ENTREPÔT DU PORT",
        contexte: "Lucious est à l'intérieur. Il devait pas être là.",
        adversaires: 1,
        energie_depart: 10,
        texte_avant: "Un garde. Entre lui et la sortie. Lucious est fatigué. Mais il est là.",
        texte_reussi: "Économique. Deux coups. Le garde s'effondre. Lucious sort par l'arrière.",
        texte_rate: "Le garde appelle du renfort. Lucious est bloqué. Il attend les caméras.",
        info_reussie: "Lucious sort. Il croise Jessica dans l'ombre. Ils échangent un regard.",
        info_ratee: "Lucious attend que Fred et Corey le guident depuis le toit. Mini-jeu branchement déclenché."
      },
      {
        id: 'combat_final',
        semaine: 5,
        titre: "LE RÈGLEMENT",
        contexte: "Costello une dernière fois. Lucious a choisi l'endroit.",
        adversaires: 1,
        energie_depart: 15,
        technique_speciale: "TRENCH-COAT",
        texte_avant: "C'est Lucious qui a fixé le rendez-vous cette fois. Ça change tout.",
        texte_reussi: "Terminé. Lucious ramasse son manteau. Il regarde le Rewind Paradise de loin. Il entre pas.",
        texte_rate: "Costello s'enfuit. Lucious sait qu'il reviendra. L'arc reste ouvert.",
        info_reussie: "Lucious disparaît du quartier. Deux semaines plus tard Fred trouve une enveloppe sous la porte.",
        info_ratee: "Costello reviendra. La menace reste."
      }
    ],

    // ===== CONNEXION AVEC LE REWIND PARADISE =====
    connexions: {
      semaine1: "Il passe tous les matins. Il entre jamais.",
      semaine2: "Corey lui a proposé de louer un film. Il a dit non. Pas agressivement. Juste non.",
      semaine3: "Il est entré une fois. Il a demandé si on avait Boxcar Bertha de Scorsese. On avait pas.",
      semaine4: "Il est assis sur les marches en face quand Fred ouvre. Ils échangent un signe de tête.",
      semaine5: "L'enveloppe sous la porte. Dedans : de l'argent. Beaucoup. Un mot : 'Pour le loyer. — L.'"
    }

  },

  // ===================================================
  // UTILITAIRES
  // ===================================================

  // Obtenir la scène Jackson selon la semaine et l'état
  getJacksonScene: function(semaine, gameState) {
    const gs = gameState;
    const scenes = ARCS.jackson.scenes;

    if (semaine === 2 && !gs.jackson_scene_collecte) {
      return scenes.premiere_collecte;
    }
    if (semaine === 3 && !gs.jackson_protege && gs.jackson_scene_collecte) {
      return scenes.jackson_pression;
    }
    if (semaine === 4 && !gs.jackson_protege) {
      return scenes.jackson_protege;
    }
    if (semaine === 5) {
      return gs.jacksonHumeur === 'cool'
        ? scenes.fin_cool
        : scenes.fin_tendu;
    }
    return null;
  },

  // Obtenir le portrait Jackson du jour
  getJacksonPortrait: function(semaine, gameState) {
    const portraits = ARCS.jackson.portraits['semaine' + semaine]
                   || ARCS.jackson.portraits.semaine1;
    return portraits[Math.floor(Math.random() * portraits.length)];
  },

  // Obtenir le signal DiMaggio selon l'état
  getDiMaggioSignal: function(gameState) {
    const gs = gameState;
    const signaux = ARCS.dimaggio.signaux;

    if (gs.exposition >= 80) return signaux.menace;
    if (gs.exposition >= 60) return signaux.pression;
    if (gs.jacksonHumeur === 'cool') return signaux.satisfaction;
    if (gs.exposition >= 40) return signaux.interet;
    return signaux.silence;
  },

  // Afficher une scène narrative
  showScene: function(scene, callback) {
    if (!scene) {
      if (callback) callback();
      return;
    }

    const panel = document.createElement('div');
    panel.id = 'scene-panel';
    panel.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: #000000;
      z-index: 400;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 20px 16px;
      overflow-y: auto;
      font-family: 'Courier New', monospace;
    `;

    const lignes = Array.isArray(scene.texte)
      ? scene.texte
      : [scene.texte];

    panel.innerHTML = `
      <div style="width:100%; max-width:400px; padding-top:20px;">

        <div style="
          font-size: 8px;
          color: #333344;
          letter-spacing: 3px;
          margin-bottom: 6px;
        ">SCÈNE NARRATIVE</div>

        <div style="
          font-size: 13px;
          color: #ccccdd;
          letter-spacing: 2px;
          margin-bottom: 4px;
        ">${scene.titre}</div>

        <div style="
          font-size: 9px;
          color: #333344;
          letter-spacing: 1px;
          margin-bottom: 16px;
          font-style: italic;
        ">${scene.lieu || ''}</div>

        <div id="scene-lines" style="
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        "></div>

        <div id="scene-continue" style="
          text-align: center;
          font-size: 9px;
          color: #222233;
          letter-spacing: 3px;
          margin-top: 16px;
          display: none;
          cursor: pointer;
          padding: 12px;
        " onclick="closeScene()">
          ▶ CONTINUER
        </div>

      </div>
    `;

    document.body.appendChild(panel);

    // Afficher les lignes progressivement
    const linesDiv = document.getElementById('scene-lines');
    let index = 0;

    function showNextLine() {
      if (index >= lignes.length) {
        document.getElementById('scene-continue').style.display = 'block';
        return;
      }

      const line = document.createElement('div');
      line.style.cssText = `
        font-size: 11px;
        color: #888899;
        line-height: 1.7;
        letter-spacing: 0.5px;
        font-style: italic;
        opacity: 0;
        transition: opacity 0.4s ease;
      `;
      line.textContent = lignes[index];
      linesDiv.appendChild(line);

      setTimeout(() => { line.style.opacity = '1'; }, 50);

      index++;
      setTimeout(showNextLine, 900);
    }

    showNextLine();

    // Stocker le callback
    window.sceneCallback = callback;
  },

  closeScene: function() {
    const panel = document.getElementById('scene-panel');
    if (panel) {
      panel.style.opacity = '0';
      panel.style.transition = 'opacity 0.3s';
      setTimeout(() => {
        panel.remove();
        if (window.sceneCallback) {
          window.sceneCallback();
          window.sceneCallback = null;
        }
      }, 300);
    }
  }

};

// Exposer closeScene globalement
function closeScene() {
  ARCS.closeScene();
}