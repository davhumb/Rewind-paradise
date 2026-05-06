// ===================================================
// REWIND PARADISE — ÉVÉNEMENTS ALÉATOIRES
// 30 événements complets avec choix et conséquences
// ===================================================

const EVENTS = {

  // ===== ÉVÉNEMENTS TECHNIQUES =====
  techniques: [

    {
      id: 'magneto_panne',
      titre: 'MAGNÉTO EN PANNE',
      texte: 'Un client rend une cassette coincée. Le magnéto de droite fait un bruit inquiétant. Corey a tapé dessus. Ça a rien changé.',
      icon: '📼',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Réparer maintenant',
          detail: '-60$ / -3 énergie / problème résolu',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 60);
            gs.energie = Math.max(0, gs.energie - 3);
            return { msg: 'Magnéto réparé. -60$ -3 énergie.', positif: true };
          }
        },
        {
          texte: 'Réparer plus tard',
          detail: '-Réputation / problème persiste demain',
          effet: (gs) => {
            gs.reputation = Math.max(0, gs.reputation - 0.3);
            gs.magneto_casse = true;
            return { msg: 'Clients mécontents. Réputation en baisse.', positif: false };
          }
        },
        {
          texte: 'Laisser Corey gérer',
          detail: 'Aléatoire — succès ou incident',
          effet: (gs) => {
            if (Math.random() > 0.5) {
              return { msg: 'Corey a réparé. Méthode douteuse mais ça marche.', positif: true };
            } else {
              gs.energie = Math.max(0, gs.energie - 2);
              gs.reputation = Math.max(0, gs.reputation - 0.2);
              return { msg: 'Corey a aggravé le truc. Surprise.', positif: false };
            }
          }
        }
      ]
    },

    {
      id: 'cassette_abimee',
      titre: 'CASSETTE ABÎMÉE',
      texte: 'M. Henderson vient de rendre Aladdin avec ce qui ressemble à de la confiture sur la bande. Corey fait un bruit avec la bouche.',
      icon: '📼',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Facturer le client',
          detail: '+15$ / -Réputation',
          effet: (gs) => {
            gs.argent += 15;
            gs.reputation = Math.max(0, gs.reputation - 0.4);
            return { msg: '+15$ mais le client est furieux.', positif: false };
          }
        },
        {
          texte: 'Absorber la perte',
          detail: '-15$ / Réputation neutre',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 15);
            return { msg: '-15$. Le client reviendra.', positif: true };
          }
        },
        {
          texte: 'Ignorer pour l\'instant',
          detail: '-Stock / risque futur',
          effet: (gs) => {
            const genres = ['action', 'horreur', 'drame', 'enfants'];
            const g = genres[Math.floor(Math.random() * genres.length)];
            gs.stock[g] = Math.max(0, gs.stock[g] - 1);
            return { msg: 'Cassette perdue. Stock diminue.', positif: false };
          }
        }
      ]
    },

    {
      id: 'panne_clim',
      titre: 'PANNE DE CLIMATISATION',
      texte: 'Il fait une chaleur impossible. Les clients transpirent. Corey a ouvert toutes les fenêtres. Ça change rien. Le magnéto chauffe aussi.',
      icon: '🌡️',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Endurer et rester ouvert',
          detail: 'Énergie max -3 pour cette journée',
          effet: (gs) => {
            gs.energieMax = Math.max(8, gs.energieMax - 3);
            gs.energie = Math.min(gs.energie, gs.energieMax);
            return { msg: 'On tient. Mais on est à plat.', positif: false };
          }
        },
        {
          texte: 'Fermer deux heures',
          detail: '-Réputation / +2 énergie récupérée',
          effet: (gs) => {
            gs.reputation = Math.max(0, gs.reputation - 0.3);
            gs.energie = Math.min(gs.energieMax, gs.energie + 2);
            return { msg: 'Deux heures de fermeture. Du repos.', positif: true };
          }
        }
      ]
    },

    {
      id: 'livraison_retard',
      titre: 'LIVRAISON EN RETARD',
      texte: 'Le catalogue de la semaine est pas arrivé. Le fournisseur répond pas. Corey pense que c\'est à cause de la grève des camionneurs. Ou de la pleine lune.',
      icon: '📦',
      semaines: [1, 2, 3, 4],
      choix: [
        {
          texte: 'Attendre demain',
          detail: 'Pas de commande aujourd\'hui',
          effet: (gs) => {
            gs.livraison_retard = true;
            return { msg: 'Livraison reportée à demain.', positif: false };
          }
        },
        {
          texte: 'Commander en urgence ailleurs',
          detail: '-30$ / Stock action +3',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 30);
            gs.stock.action = Math.min(10, gs.stock.action + 3);
            return { msg: '-30$ mais le stock action est refait.', positif: true };
          }
        }
      ]
    },

    {
      id: 'faux_contact',
      titre: 'FAUX CONTACT',
      texte: 'Le magnéto du milieu a un faux contact. L\'image saute. Corey agite la prise depuis dix minutes. Le client qui regarde son film est pas content.',
      icon: '⚡',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Gérer soi-même',
          detail: '-2 énergie / réussi automatiquement',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 2);
            return { msg: 'Réparé. -2 énergie.', positif: true };
          }
        },
        {
          texte: 'Laisser Corey finir',
          detail: 'Aléatoire — dé mental',
          effet: (gs) => {
            if (Math.random() > 0.4) {
              return { msg: 'Corey a réglé le truc en agitant très fort.', positif: true };
            } else {
              gs.reputation = Math.max(0, gs.reputation - 0.2);
              gs.energie = Math.max(0, gs.energie - 1);
              return { msg: 'Le client est parti. Réputation en baisse.', positif: false };
            }
          }
        },
        {
          texte: 'Rembourser le client',
          detail: '-prix location / client satisfait',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 3);
            gs.reputation = Math.min(5, gs.reputation + 0.1);
            return { msg: 'Client remboursé. Il reviendra.', positif: true };
          }
        }
      ]
    },

    {
      id: 'telephone_sonne',
      titre: 'LE TÉLÉPHONE SONNE',
      texte: 'Le combiné vibre sur le comptoir. Corey lève les yeux. Fred lève les yeux. Personne bouge.',
      icon: '📞',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Répondre',
          detail: '-1 énergie / événement révélé',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 1);
            const roll = Math.random();
            if (roll < 0.3) {
              gs.jacksonHumeur = gs.jacksonHumeur === 'furieux'
                ? 'furieux' : 'impatient';
              return { msg: 'C\'était Jackson. Il avait l\'air pressé.', positif: false };
            } else if (roll < 0.6) {
              return { msg: 'Client avec une demande spéciale. À voir ce soir.', positif: true };
            } else {
              gs.legalite = Math.min(100, gs.legalite + 1);
              return { msg: 'Silence. Puis raccroché. Légalité +1.', positif: false };
            }
          }
        },
        {
          texte: 'Ne pas répondre',
          detail: 'Événement manqué',
          effet: (gs) => {
            return { msg: 'Personne a répondu. On saura jamais qui c\'était.', positif: false };
          }
        }
      ]
    },

    {
      id: 'cassette_retard',
      titre: 'CASSETTE EN RETARD',
      texte: 'M. Briand devait rendre Terminator hier. Pas de nouvelles. La cassette c\'est dix dollars de stock.',
      icon: '⏰',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Appeler pour relancer',
          detail: 'Aléatoire — retour ou refus',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 1);
            if (Math.random() > 0.4) {
              gs.stock.action = Math.min(10, gs.stock.action + 1);
              return { msg: 'Il rapporte demain. Soulagé.', positif: true };
            } else {
              gs.reputation = Math.max(0, gs.reputation - 0.1);
              return { msg: 'Il raccroche. La cassette est perdue.', positif: false };
            }
          }
        },
        {
          texte: 'Ignorer et passer à autre chose',
          detail: '-Stock action',
          effet: (gs) => {
            gs.stock.action = Math.max(0, gs.stock.action - 1);
            return { msg: 'Stock action -1. C\'est la vie.', positif: false };
          }
        }
      ]
    }

  ],

  // ===== ÉVÉNEMENTS CLIENTS =====
  clients: [

    {
      id: 'groupe_lyceens',
      titre: 'GROUPE DE LYCÉENS',
      texte: 'Cinq lycéens entrent en même temps. Ils touchent à tout. Corey essaie de les surveiller tous en même temps. Il y en a toujours un derrière lui.',
      icon: '👥',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Les accueillir',
          detail: '+clients / risque si Cassettes Noires visibles',
          effet: (gs) => {
            gs.argent += 12;
            gs.reputation = Math.min(5, gs.reputation + 0.3);
            if (gs.stock.noires > 0) {
              gs.exposition = Math.min(100, gs.exposition + 3);
              return { msg: '+12$ mais ils ont vu les cassettes noires. Exposition +3.', positif: false };
            }
            return { msg: '+12$. Beaucoup d\'énergie dépensée.', positif: true };
          }
        },
        {
          texte: 'Limiter à deux à la fois',
          detail: '+argent réduit / pas de risque',
          effet: (gs) => {
            gs.argent += 6;
            return { msg: '+6$. Sage mais moins rentable.', positif: true };
          }
        }
      ]
    },

    {
      id: 'client_dispute_prix',
      titre: 'DISPUTE SUR LE PRIX',
      texte: 'Un client conteste le prix de la location. Il dit qu\'au vidéoclub d\'en face c\'est moins cher. Corey commence à répondre. Fred l\'arrête.',
      icon: '💬',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Tenir le prix',
          detail: 'Client peut repartir / Réputation neutre',
          effet: (gs) => {
            if (Math.random() > 0.5) {
              gs.argent += 2;
              return { msg: 'Il a payé quand même. Respect.', positif: true };
            } else {
              gs.reputation = Math.max(0, gs.reputation - 0.1);
              return { msg: 'Il est parti. Réputation légèrement en baisse.', positif: false };
            }
          }
        },
        {
          texte: 'Faire un geste',
          detail: '-1$ / +Réputation',
          effet: (gs) => {
            gs.argent += 1;
            gs.reputation = Math.min(5, gs.reputation + 0.2);
            return { msg: '-1$ sur la location. Il repart content.', positif: true };
          }
        }
      ]
    },

    {
      id: 'cassette_noire_vue',
      titre: 'CASSETTE NOIRE EN VUE',
      texte: 'Un client a remarqué une cassette sans étiquette sur le comptoir. Il demande ce que c\'est. Corey fait semblant de pas entendre.',
      icon: '👁️',
      semaines: [2, 3, 4, 5],
      choix: [
        {
          texte: 'Nier calmement',
          detail: '+Légalité légère / client neutre',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 1);
            return { msg: 'Copie de sauvegarde. Le client hoche la tête.', positif: false };
          }
        },
        {
          texte: 'Changer de sujet',
          detail: 'Légalité neutre',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 1);
            return { msg: 'Sujet changé. Client distrait. -1 énergie.', positif: true };
          }
        },
        {
          texte: 'Ranger discrètement',
          detail: '-1 énergie / Légalité neutre',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 1);
            return { msg: 'Cassette rangée. Personne a rien vu.', positif: true };
          }
        }
      ]
    },

    {
      id: 'client_difficile',
      titre: 'CLIENT DIFFICILE',
      texte: 'Un client veut un film précis qu\'on a pas. Il comprend pas pourquoi on l\'a pas. Il explique l\'intrigue pour que Corey comprenne de quoi il parle. Corey l\'a déjà vu.',
      icon: '😤',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Proposer une alternative',
          detail: '-1 énergie / client peut-être satisfait',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 1);
            if (Math.random() > 0.4) {
              gs.argent += 2;
              gs.reputation = Math.min(5, gs.reputation + 0.1);
              return { msg: 'Il a accepté l\'alternative. Inattendu.', positif: true };
            } else {
              gs.reputation = Math.max(0, gs.reputation - 0.1);
              return { msg: 'Il est parti déçu. Réputation légèrement en baisse.', positif: false };
            }
          }
        },
        {
          texte: 'Commander pour la semaine prochaine',
          detail: '+client fidélisé / -argent commande',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 10);
            gs.reputation = Math.min(5, gs.reputation + 0.3);
            return { msg: '-10$ de commande. Il reviendra.', positif: true };
          }
        },
        {
          texte: 'Être honnête — on l\'a pas',
          detail: 'Réputation neutre',
          effet: (gs) => {
            return { msg: 'Il apprécie l\'honnêteté. Repart sans acheter.', positif: false };
          }
        }
      ]
    },

    {
      id: 'fournisseur_surprise',
      titre: 'VISITE DU FOURNISSEUR',
      texte: 'Un représentant passe proposer un nouveau catalogue. Des films qu\'on a pas encore. Prix correct. Corey veut tout commander.',
      icon: '💼',
      semaines: [1, 2, 3, 4, 5],
      choix: [
        {
          texte: 'Commander largement',
          detail: '-80$ / Stock +3 dans chaque genre',
          effet: (gs) => {
            if (gs.argent >= 80) {
              gs.argent -= 80;
              Object.keys(gs.stock).forEach(g => {
                if (g !== 'noires') {
                  gs.stock[g] = Math.min(10, gs.stock[g] + 3);
                }
              });
              return { msg: '-80$. Stock bien refait dans tous les genres.', positif: true };
            } else {
              return { msg: 'Pas assez d\'argent pour commander largement.', positif: false };
            }
          }
        },
        {
          texte: 'Commander l\'essentiel',
          detail: '-40$ / Stock action et horreur +3',
          effet: (gs) => {
            if (gs.argent >= 40) {
              gs.argent -= 40;
              gs.stock.action = Math.min(10, gs.stock.action + 3);
              gs.stock.horreur = Math.min(10, gs.stock.horreur + 3);
              return { msg: '-40$. Action et horreur refaits.', positif: true };
            } else {
              return { msg: 'Pas assez d\'argent.', positif: false };
            }
          }
        },
        {
          texte: 'Refuser pour cette semaine',
          detail: 'Argent conservé',
          effet: (gs) => {
            return { msg: 'Fournisseur repart. Il repassera le mois prochain.', positif: false };
          }
        }
      ]
    }

  ],

  // ===== ÉVÉNEMENTS NARRATIFS =====
  // Liés à la progression de l'histoire

  narratifs: [

    {
      id: 'article_journal_s1',
      titre: 'ARTICLE DANS LE JOURNAL',
      texte: 'Le Projecteur du Quartier. Page 4. "Des courts-métrages non identifiés circulent dans les établissements scolaires." Canopi lit ce journal.',
      icon: '📰',
      semaines: [1],
      jour_fixe: 7,
      choix: [
        {
          texte: 'Lire l\'article attentivement',
          detail: '+information narrative',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 2);
            gs.article_lu = true;
            return { msg: 'Légalité +2. Canopi lit le même journal.', positif: false };
          }
        },
        {
          texte: 'Ignorer',
          detail: 'Légalité +2 quand même',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 2);
            return { msg: 'On peut pas ignorer ce qu\'on a pas lu.', positif: false };
          }
        }
      ]
    },

    {
      id: 'miguel_demande_s2',
      titre: 'MIGUEL A UNE VRAIE DEMANDE',
      texte: 'Miguel revient. Pas pour l\'horreur cette fois. Il baisse la voix. Il demande si vous avez "les autres cassettes". Il sait exactement ce qu\'il demande.',
      icon: '🎬',
      semaines: [2],
      jour_fixe: 8,
      choix: [
        {
          texte: 'Lui vendre une Cassette Noire',
          detail: '+Crédibilité +2 / +Exposition +2',
          effet: (gs) => {
            if (gs.stock.noires > 0) {
              gs.stock.noires--;
              gs.credibilite = Math.min(100, gs.credibilite + 2);
              gs.exposition = Math.min(100, gs.exposition + 2);
              gs.argent += 5;
              gs.miguel_client = true;
              return { msg: 'Miguel repart avec la cassette. Il reviendra.', positif: true };
            } else {
              return { msg: 'Pas de Cassette Noire disponible ce soir.', positif: false };
            }
          }
        },
        {
          texte: 'Refuser pour l\'instant',
          detail: 'Miguel revient en S3 avec d\'autres',
          effet: (gs) => {
            gs.miguel_refuse = true;
            return { msg: 'Miguel comprend. Il repart. Il reviendra pas seul.', positif: false };
          }
        }
      ]
    },

    {
      id: 'cassette_cutter_s2',
      titre: 'UNE CASSETTE DANS LA BOÎTE',
      texte: 'Pas de nom. Pas de message. Juste une cassette VHS avec écrit au marqueur : "REGARDEZ-MOI." Corey la tient comme si elle allait exploser.',
      icon: '📼',
      semaines: [2],
      jour_fixe: 14,
      choix: [
        {
          texte: 'La regarder ce soir',
          detail: '+Intérêt Cutter / révélation narrative',
          effet: (gs) => {
            gs.cutterInteret = 'investi';
            gs.credibilite = Math.min(100, gs.credibilite + 3);
            gs.cutter_cassette_vue = true;
            return { msg: 'On l\'a regardée. Corey a rien dit pendant dix minutes.', positif: true };
          }
        },
        {
          texte: 'Attendre demain',
          detail: 'Intérêt Cutter monte moins vite',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 1);
            return { msg: 'On garde pour demain. Corey est déçu.', positif: false };
          }
        }
      ]
    },

    {
      id: 'visite_ramon_s3',
      titre: 'UN HOMME EN COSTUME',
      texte: 'Il entre pendant les heures d\'ouverture. Costume sombre. Il regarde les étagères comme Canopi — mais différemment. Canopi cherche des preuves. Cet homme évalue des actifs.',
      icon: '👔',
      semaines: [3],
      jour_fixe: 15,
      choix: [
        {
          texte: 'Rester poli et professionnel',
          detail: '+Exposition +4 / information narrative',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 4);
            gs.ramon_venu = true;
            return { msg: 'Ramon est reparti. DiMaggio sait où vous êtes.', positif: false };
          }
        },
        {
          texte: 'Demander ce qu\'il veut',
          detail: '+Exposition +4 / dialogue plus long',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 4);
            gs.ramon_dialogue = true;
            return { msg: 'Il a souri. "Juste passer voir." Exposition +4.', positif: false };
          }
        }
      ]
    },

    {
      id: 'boite_disparait_s3',
      titre: 'LA BOÎTE A DISPARU',
      texte: 'La boîte de Cutter n\'est plus dans la réserve. Corey est sûr de l\'avoir vue hier. Dans la boîte aux lettres ce matin : un mot. "Créez sans béquille. 48 heures."',
      icon: '📦',
      semaines: [3],
      jour_fixe: 21,
      choix: [
        {
          texte: 'Accepter le défi',
          detail: 'Défi Cutter lancé — contrainte ce soir',
          effet: (gs) => {
            gs.defi_cutter = true;
            gs.credibilite = Math.min(100, gs.credibilite + 2);
            return { msg: 'On accepte. Ce soir on crée sans la boîte.', positif: true };
          }
        },
        {
          texte: 'Ignorer et trouver une autre source',
          detail: 'Intérêt Cutter baisse',
          effet: (gs) => {
            gs.cutterInteret = 'intrigue';
            return { msg: 'On ignore. Cutter va noter la réaction.', positif: false };
          }
        }
      ]
    },

    {
      id: 'ultimatum_dimaggio_s4',
      titre: 'LE MESSAGE DE JACKSON',
      texte: 'Jackson a l\'air différent ce soir. Il pose la cassette. Il dit : "DiMaggio veut vous rencontrer. Vendredi." Il attend pas de réponse. Il repart.',
      icon: '⚠️',
      semaines: [4],
      jour_fixe: 25,
      choix: [
        {
          texte: 'Accepter la réunion',
          detail: 'Exposition -5 temporaire / scène DiMaggio en S5',
          effet: (gs) => {
            gs.exposition = Math.max(0, gs.exposition - 5);
            gs.dimaggio_reunion = true;
            gs.jacksonHumeur = 'cool';
            return { msg: 'Jackson hoche la tête. Vendredi. DiMaggio attend.', positif: true };
          }
        },
        {
          texte: 'Refuser',
          detail: 'Exposition +8 / Jackson furieux',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 8);
            gs.jacksonHumeur = 'furieux';
            gs.dimaggio_refuse = true;
            return { msg: 'Jackson part sans un mot. Pire que s\'il avait crié.', positif: false };
          }
        },
        {
          texte: 'Demander du temps',
          detail: 'Exposition +3 / délai jusqu\'à S5',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 3);
            gs.dimaggio_delai = true;
            return { msg: 'Jackson dit qu\'il verra ce qu\'il peut faire.', positif: false };
          }
        }
      ]
    },

    {
      id: 'corey_film_s4',
      titre: 'LA CONVERSATION',
      texte: 'Corey parle depuis dix minutes. Fred l\'écoute. Pas du vidéoclub. Pas des micro-métrages. Du film zombie. De la Beaulieu 16mm qu\'il a vue dans une vitrine. De l\'après.',
      icon: '🎥',
      semaines: [4],
      jour_fixe: 22,
      choix: [
        {
          texte: 'Écouter vraiment',
          detail: 'Setup narratif fin / Corey +lien',
          effet: (gs) => {
            gs.corey_film_parle = true;
            gs.energie = Math.max(0, gs.energie - 1);
            return { msg: 'Fred écoute. Pour la première fois depuis longtemps.', positif: true };
          }
        },
        {
          texte: 'Changer de sujet — pas le bon moment',
          detail: 'Corey se souvient',
          effet: (gs) => {
            gs.corey_film_ignore = true;
            return { msg: 'Corey range ses idées. Il les ressortira pas ce soir.', positif: false };
          }
        }
      ]
    },

    {
      id: 'canopi_final_s4',
      titre: 'CANOPI RESTE APRÈS LA FERMETURE',
      texte: 'Il attend que le dernier client parte. Il s\'assoit. "Je sais ce qui se passe ici." Une pause. "Vous avez deux options."',
      icon: '🔍',
      semaines: [4],
      jour_fixe: 26,
      choix: [
        {
          texte: '"Qu\'est-ce que vous voulez exactement ?"',
          detail: 'Légalité -10 / arc Canopi positif',
          effet: (gs) => {
            gs.legalite = Math.max(0, gs.legalite - 10);
            gs.canopi_allie = true;
            return { msg: 'Canopi pose son carnet. Première fois.', positif: true };
          }
        },
        {
          texte: '"Ghost est disponible si vous voulez."',
          detail: 'Légalité +5 / arc Canopi fermé',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 5);
            gs.canopi_ferme = true;
            return { msg: 'Canopi se lève. Remet son manteau. Repart.', positif: false };
          }
        },
        {
          texte: '"Donnez-moi jusqu\'à vendredi."',
          detail: 'Légalité neutre / délai',
          effet: (gs) => {
            gs.canopi_delai = true;
            return { msg: 'Il hoche la tête une fois. Repart sans un mot.', positif: false };
          }
        }
      ]
    }

  ],

  // ===== UTILITAIRE : TIRER UN ÉVÉNEMENT =====

  getEvent: function(gameState) {
    const gs = gameState;
    const pool = [];

    // Vérifier les événements fixes du jour
    const tousNarratifs = [...EVENTS.narratifs];
    for (const evt of tousNarratifs) {
      if (
        evt.semaines.includes(gs.semaine) &&
        evt.jour_fixe &&
        gs.jour === ((gs.semaine - 1) * 7) + evt.jour_fixe - 
          ((gs.semaine - 1) * 7)
      ) {
        return evt;
      }
    }

    // Sinon tirer aléatoirement parmi techniques + clients
    const disponibles = [
      ...EVENTS.techniques,
      ...EVENTS.clients
    ].filter(evt => evt.semaines.includes(gs.semaine));

    if (disponibles.length === 0) return null;
    return disponibles[Math.floor(Math.random() * disponibles.length)];
  },

  // Tirer un événement narratif par semaine et jour
  getNarratif: function(semaine, jourDansSemaine) {
    return EVENTS.narratifs.find(
      evt =>
        evt.semaines.includes(semaine) &&
        evt.jour_fixe === jourDansSemaine
    ) || null;
  }

};