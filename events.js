// ===================================================
// REWIND PARADISE — ÉVÉNEMENTS v2
// Événements aléatoires + narratifs enrichis
// ===================================================

const EVENTS = {

  // ===================================================
  // ÉVÉNEMENTS NARRATIFS — déclenchés à des jours précis
  // ===================================================

  narratifs: [

    // SEMAINE 1
    {
      semaine: 1, jour: 2,
      icon: '📰',
      titre: 'LE PROJECTEUR DU QUARTIER',
      texte: 'Un article en page 8. "Des courts-métrages non identifiés circulent dans le quartier. La police cherche à identifier les auteurs." Corey lit par-dessus ton épaule. Il dit rien.',
      choix: [
        {
          texte: 'Ignorer. On continue.',
          detail: 'Rien ne change. Pour l\'instant.',
          effet: (gs) => {
            return { msg: 'Fred plie le journal. La journée continue.', positif: true };
          }
        },
        {
          texte: 'Ralentir la distribution ce soir.',
          detail: 'Légalité -3. Exposition -2.',
          effet: (gs) => {
            gs.legalite  = Math.max(0, gs.legalite - 3);
            gs.exposition = Math.max(0, gs.exposition - 2);
            return { msg: 'Prudent. Légalité -3 / Exposition -2.', positif: true };
          }
        }
      ]
    },

    {
      semaine: 1, jour: 5,
      icon: '📼',
      titre: 'CASSETTE DANS LA BOÎTE',
      texte: 'Une cassette noire dans la boîte de retour ce matin. Pas de reçu. Pas de nom. Une étiquette manuscrite : "Regardez-moi."',
      choix: [
        {
          texte: 'La regarder ce soir.',
          detail: 'Crédibilité +3. Peut déclencher quelque chose.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 3);
            gs.cassette_mystere = true;
            return { msg: 'Ce soir. Dans la réserve.', positif: true };
          }
        },
        {
          texte: 'La mettre de côté.',
          detail: 'Rien pour l\'instant.',
          effet: (gs) => {
            gs.cassette_mystere_ignoree = true;
            return { msg: 'Fred la pose sur l\'étagère du fond.', positif: true };
          }
        },
        {
          texte: 'La jeter.',
          detail: 'Légalité -2. Tranquillité.',
          effet: (gs) => {
            gs.legalite = Math.max(0, gs.legalite - 2);
            return { msg: 'Poubelle. Fred se sent mieux. Ou pas.', positif: true };
          }
        }
      ]
    },

    // SEMAINE 2
    {
      semaine: 2, jour: 1,
      icon: '✂',
      titre: 'CELLULOÏD SCALPEL #17',
      texte: 'Le fanzine de Cutter dans la boîte aux lettres. Page 3 : "Quelqu\'un dans ce quartier fait du cinéma sans le savoir. Ou en le sachant très bien. Je reviendrai là-dessus." Corey découpe la page.',
      choix: [
        {
          texte: 'C\'est nous. On continue.',
          detail: 'Crédibilité +2. Exposition +3.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 2);
            gs.exposition  = Math.min(100, gs.exposition + 3);
            gs.cutterInteret = 'intrigue';
            return { msg: 'Cutter sait. Ou devine. Crédibilité +2.', positif: true };
          }
        },
        {
          texte: 'Rester discret cette semaine.',
          detail: 'Exposition -3. Crédibilité neutre.',
          effet: (gs) => {
            gs.exposition = Math.max(0, gs.exposition - 3);
            return { msg: 'Profil bas. Exposition -3.', positif: true };
          }
        }
      ]
    },

    {
      semaine: 2, jour: 4,
      icon: '🎩',
      titre: 'LA DEMANDE DE MIGUEL',
      texte: '"J\'ai un ami qui veut une cassette noire. Pas pour lui. Pour montrer à des gens." Miguel hésite. "Des gens avec de l\'argent." Il attend ta réponse.',
      choix: [
        {
          texte: 'Accepter. +30$ et exposition.',
          detail: 'Argent +30. Exposition +8. Légalité +5.',
          effet: (gs) => {
            gs.argent    += 30;
            gs.exposition = Math.min(100, gs.exposition + 8);
            gs.legalite   = Math.min(100, gs.legalite + 5);
            gs.noires_distribuees = (gs.noires_distribuees || 0) + 1;
            return { msg: '+30$ — Exposition monte. Prudence.', positif: true };
          }
        },
        {
          texte: 'Refuser. Trop risqué.',
          detail: 'Rien. Miguel comprend.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 1);
            return { msg: 'Miguel hoche la tête. Il reviendra.', positif: true };
          }
        },
        {
          texte: 'Demander qui sont ces gens.',
          detail: 'Info sur DiMaggio possible.',
          effet: (gs) => {
            gs.info_dimaggio = (gs.info_dimaggio || 0) + 1;
            return { msg: 'Miguel dit un nom. Fred le note mentalement.', positif: true };
          }
        }
      ]
    },

    {
      semaine: 2, jour: 6,
      icon: '🕵',
      titre: 'CANOPI REVIENT DEUX FOIS',
      texte: 'Canopi est venu louer Ghost ce matin. Il revient l\'après-midi. Sans raison apparente. Il regarde les étagères. Il pose une question sur les horaires du soir.',
      choix: [
        {
          texte: 'Répondre normalement.',
          detail: 'Légalité +1. Cohérence préservée.',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 1);
            return { msg: 'Fred répond. Canopi note quelque chose.', positif: false };
          }
        },
        {
          texte: 'Dire que le vidéoclub ferme à 20h.',
          detail: 'Mensonge. Cohérence -1 si contredit.',
          effet: (gs) => {
            gs.choicesHistory = gs.choicesHistory || {};
            gs.choicesHistory['horaires'] = '20h';
            return { msg: 'Fred dit 20h. Canopi écrit dans son carnet.', positif: true };
          }
        },
        {
          texte: 'Demander pourquoi il revient.',
          detail: 'Légalité +2. Info sur l\'enquête.',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 2);
            return { msg: '"Je voulais juste vérifier quelque chose." Il repart.', positif: false };
          }
        }
      ]
    },

    // SEMAINE 3
    {
      semaine: 3, jour: 1,
      icon: '💼',
      titre: 'L\'ARTICLE DE SOPHIE MARCHAIS',
      texte: 'L\'article de la journaliste est paru. Page locale. "Le Rewind Paradise, un vidéoclub pas comme les autres." Trois paragraphes. Une photo du rideau de fer. Pas de mention des micro-métrages. Pas encore.',
      choix: [
        {
          texte: 'C\'est bien. Publicité gratuite.',
          detail: 'Réputation +1. Exposition +4.',
          effet: (gs) => {
            gs.reputation = Math.min(5, gs.reputation + 1);
            gs.exposition = Math.min(100, gs.exposition + 4);
            return { msg: 'Réputation +1. Mais tout le monde sait qu\'on existe.', positif: true };
          }
        },
        {
          texte: 'Inquiétant. Trop visible.',
          detail: 'Rien. Fred range le journal.',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 2);
            return { msg: 'Fred range le journal. Corey dit "c\'est bien non ?".', positif: true };
          }
        }
      ]
    },

    {
      semaine: 3, jour: 3,
      icon: '🌹',
      titre: 'RAMON ET LA BOÎTE',
      texte: 'Ramon est resté plus longtemps qu\'habitude. Avant de partir il a posé quelque chose sur le comptoir. Une enveloppe. "Pour les bons services." Il repart. L\'enveloppe contient 60$.',
      choix: [
        {
          texte: 'Prendre l\'argent.',
          detail: '+60$. Lien avec DiMaggio renforcé.',
          effet: (gs) => {
            gs.argent    += 60;
            gs.exposition = Math.min(100, gs.exposition + 5);
            gs.lien_dimaggio = true;
            return { msg: '+60$ — L\'argent de Ramon. Ça a un prix.', positif: true };
          }
        },
        {
          texte: 'Refuser poliment.',
          detail: 'Légalité -3. Ramon respecte ça.',
          effet: (gs) => {
            gs.legalite = Math.max(0, gs.legalite - 3);
            gs.ramon_respecte = true;
            return { msg: 'Fred repousse l\'enveloppe. Ramon hoche la tête. Légalité -3.', positif: true };
          }
        }
      ]
    },

    {
      semaine: 3, jour: 5,
      icon: '📦',
      titre: 'LA LIVRAISON ABÎMÉE',
      texte: 'Le fournisseur a livré ce matin. Trois cassettes action sont inutilisables — bande magnétique endommagée. Le livreur hausse les épaules. "Ça arrive."',
      choix: [
        {
          texte: 'Accepter la perte.',
          detail: 'Stock action -3. Rien d\'autre.',
          effet: (gs) => {
            gs.stock.action = Math.max(0, (gs.stock.action || 0) - 3);
            return { msg: 'Trois cassettes perdues. Stock action -3.', positif: false };
          }
        },
        {
          texte: 'Exiger un remboursement.',
          detail: '+15$ récupérés. Délai.',
          effet: (gs) => {
            gs.argent += 15;
            gs.stock.action = Math.max(0, (gs.stock.action || 0) - 3);
            return { msg: '+15$ remboursés. Stock action -3 quand même.', positif: true };
          }
        },
        {
          texte: 'Recycler les boîtiers vides.',
          detail: 'Crédibilité +1. Ingénieux.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 1);
            gs.stock.action = Math.max(0, (gs.stock.action || 0) - 1);
            return { msg: 'Fred récupère les boîtiers. Crédibilité +1.', positif: true };
          }
        }
      ]
    },

    // SEMAINE 4
    {
      semaine: 4, jour: 1,
      icon: '⚡',
      titre: 'MESSAGE DE JACKSON',
      texte: '"DiMaggio a posé des questions sur le Rewind Paradise. J\'ai dit que c\'était clean. Reste clean." Le message s\'arrête là. Corey lit par-dessus l\'épaule de Fred. "C\'est quoi DiMaggio ?" Fred répond pas.',
      choix: [
        {
          texte: 'Dire la vérité à Corey.',
          detail: 'Corey devient un allié. Exposition +2.',
          effet: (gs) => {
            gs.corey_sait = true;
            gs.exposition = Math.min(100, gs.exposition + 2);
            return { msg: 'Corey écoute. Il hoche la tête. "OK. On continue."', positif: true };
          }
        },
        {
          texte: 'Rassurer Corey. "C\'est rien."',
          detail: 'Corey reste dans le flou.',
          effet: (gs) => {
            gs.corey_dans_le_flou = true;
            return { msg: '"C\'est rien." Corey a l\'air pas convaincu.', positif: true };
          }
        }
      ]
    },

    {
      semaine: 4, jour: 3,
      icon: '✂',
      titre: 'CELLULOÏD SCALPEL #19',
      texte: '"Un micro-métrage ne change pas la fin. Il révèle que le début était déjà foutu." Cutter a écrit deux pages sur les micro-métrages underground. Il donne pas de noms. Mais il parle de "deux types dans un vidéoclub qui ont compris quelque chose".',
      choix: [
        {
          texte: 'C\'est nous. Continuer.',
          detail: 'Crédibilité +5. Exposition +5.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 5);
            gs.exposition  = Math.min(100, gs.exposition + 5);
            gs.cutterInteret = 'investi';
            return { msg: 'Cutter sait. Crédibilité +5 / Exposition +5.', positif: true };
          }
        },
        {
          texte: 'Contacter Cutter anonymement.',
          detail: 'Ouvre un arc narratif.',
          effet: (gs) => {
            gs.contact_cutter = true;
            gs.credibilite = Math.min(100, gs.credibilite + 3);
            return { msg: 'Un message anonyme dans la boîte du fanzine. Crédibilité +3.', positif: true };
          }
        },
        {
          texte: 'Ignorer. Profil bas.',
          detail: 'Exposition -2.',
          effet: (gs) => {
            gs.exposition = Math.max(0, gs.exposition - 2);
            return { msg: 'Fred pose le fanzine. Corey le reprend.', positif: true };
          }
        }
      ]
    },

    {
      semaine: 4, jour: 6,
      icon: '🤵',
      titre: 'L\'ULTIMATUM DE RAMON',
      texte: '"M. DiMaggio voudrait vous rencontrer. C\'est pas une invitation que vous refusez." Ramon pose Pretty Woman sur le comptoir. Il repart sans la louer. La cassette reste là.',
      choix: [
        {
          texte: 'Accepter la réunion.',
          detail: 'Arc DiMaggio déclenché. Fin possible.',
          effet: (gs) => {
            gs.ultimatum_dimaggio = true;
            gs.exposition = Math.min(100, gs.exposition + 10);
            return { msg: 'Fred accepte. Quelque chose commence — ou se termine.', positif: false };
          }
        },
        {
          texte: 'Refuser via Jackson.',
          detail: 'Jackson furieux. Légalité -5.',
          effet: (gs) => {
            gs.jacksonHumeur = 'furieux';
            gs.legalite = Math.max(0, gs.legalite - 5);
            return { msg: 'Jackson rappelle dans l\'heure. Il est pas content.', positif: false };
          }
        },
        {
          texte: 'Gagner du temps.',
          detail: 'Reporte le problème de 2 jours.',
          effet: (gs) => {
            gs.ultimatum_reporte = true;
            return { msg: '"Dites-lui que je réfléchis." Ramon hoche la tête.', positif: true };
          }
        }
      ]
    }

  ],

  // ===================================================
  // ÉVÉNEMENTS ALÉATOIRES
  // ===================================================

  aleatoires: [

    // STOCK ET VIDÉOCLUB
    {
      id: 'vol_cassette',
      icon: '😤',
      titre: 'VOL À L\'ÉTALAGE',
      texte: 'Un client repart avec une cassette sous son manteau. Fred l\'a vu. Corey aussi.',
      poids: 3,
      conditions: (gs) => gs.semaine >= 1,
      choix: [
        {
          texte: 'L\'interpeller.',
          detail: 'Récupère la cassette. Réputation -1.',
          effet: (gs) => {
            gs.reputation = Math.max(0, gs.reputation - 0.5);
            return { msg: 'Le client repose la cassette. Il repart vite.', positif: true };
          }
        },
        {
          texte: 'Laisser faire.',
          detail: 'Stock -1. Tranquillité.',
          effet: (gs) => {
            const genres = ['action','horreur','drame','enfants'];
            const g = genres[Math.floor(Math.random() * genres.length)];
            gs.stock[g] = Math.max(0, (gs.stock[g] || 0) - 1);
            return { msg: 'Fred regarde ailleurs. Une cassette de moins.', positif: false };
          }
        },
        {
          texte: 'Corey s\'en occupe.',
          detail: 'Corey règle ça à sa façon.',
          effet: (gs) => {
            gs.reputation = Math.min(5, gs.reputation + 0.2);
            return { msg: 'Corey dit quelque chose. Le client repose tout et repart.', positif: true };
          }
        }
      ]
    },

    {
      id: 'bonne_surprise',
      icon: '🎁',
      titre: 'DON D\'UN CLIENT',
      texte: 'Un client régulier pose une cassette sur le comptoir. "Je l\'ai en double. Vous la garderez mieux que moi." C\'est une rareté.',
      poids: 2,
      conditions: (gs) => gs.reputation >= 3,
      choix: [
        {
          texte: 'Accepter avec plaisir.',
          detail: 'Stock raretés +1. Réputation +0.5.',
          effet: (gs) => {
            gs.stock.rarites = Math.min(5, (gs.stock.rarites || 1) + 1);
            gs.reputation = Math.min(5, gs.reputation + 0.5);
            return { msg: 'Une rareté de plus. Stock raretés +1.', positif: true };
          }
        },
        {
          texte: 'Proposer de la payer.',
          detail: 'Argent -10. Réputation +1.',
          effet: (gs) => {
            if (gs.argent >= 10) {
              gs.argent -= 10;
              gs.stock.rarites = Math.min(5, (gs.stock.rarites || 1) + 1);
              gs.reputation = Math.min(5, gs.reputation + 1);
              return { msg: '-10$ mais la rareté est dans le catalogue.', positif: true };
            }
            return { msg: 'Pas assez d\'argent. Il comprend.', positif: false };
          }
        }
      ]
    },

    {
      id: 'panne_magneto',
      icon: '⚠️',
      titre: 'PANNE DU MAGNÉTO',
      texte: 'Le magnétoscope de prêt fait un bruit inquiétant. Une cassette est coincée dedans. Le client attend.',
      poids: 3,
      conditions: (gs) => gs.semaine >= 1,
      choix: [
        {
          texte: 'Corey répare. Ça prend du temps.',
          detail: 'Énergie -2. Problème résolu.',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 2);
            return { msg: 'Corey répare en vingt minutes. Le client attend.', positif: true };
          }
        },
        {
          texte: 'Rembourser le client et fermer plus tôt.',
          detail: 'Argent -5. Énergie récupérée.',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 5);
            gs.energie = Math.min(gs.energieMax || 15, gs.energie + 2);
            return { msg: '-5$ remboursés. Fermeture anticipée. Énergie +2.', positif: true };
          }
        },
        {
          texte: 'Bricoler soi-même.',
          detail: '50% de chance de réussir.',
          effet: (gs) => {
            if (Math.random() > 0.5) {
              return { msg: 'Fred répare. Ça marche. Miracle.', positif: true };
            } else {
              gs.stock.action = Math.max(0, (gs.stock.action || 0) - 1);
              return { msg: 'La cassette est abîmée. Stock -1.', positif: false };
            }
          }
        }
      ]
    },

    {
      id: 'client_difficile',
      icon: '😠',
      titre: 'CLIENT MÉCONTENT',
      texte: '"Cette cassette était rayée ! J\'ai rien pu regarder !" Le client gesticule. Les autres clients regardent.',
      poids: 4,
      conditions: (gs) => gs.semaine >= 1,
      choix: [
        {
          texte: 'Rembourser et s\'excuser.',
          detail: 'Argent -3. Réputation préservée.',
          effet: (gs) => {
            gs.argent = Math.max(0, gs.argent - 3);
            return { msg: '-3$ remboursés. Le client repart moins furieux.', positif: true };
          }
        },
        {
          texte: 'Proposer un échange.',
          detail: 'Stock -1. Client satisfait.',
          effet: (gs) => {
            gs.stock.action = Math.max(0, (gs.stock.action || 0) - 1);
            gs.reputation = Math.min(5, gs.reputation + 0.2);
            return { msg: 'Fred propose un autre film. Stock -1. Client OK.', positif: true };
          }
        },
        {
          texte: 'Contester poliment.',
          detail: 'Réputation -0.5. Pas de remboursement.',
          effet: (gs) => {
            gs.reputation = Math.max(0, gs.reputation - 0.5);
            return { msg: 'Le client repart furieux. Réputation -0.5.', positif: false };
          }
        }
      ]
    },

    // NARRATIFS ALÉATOIRES
    {
      id: 'rumeur_quartier',
      icon: '👂',
      titre: 'RUMEUR DANS LE QUARTIER',
      texte: 'Un client mentionne en passant : "J\'ai entendu dire qu\'il y a des films underground qui circulent par ici. Vous êtes au courant ?" Il attend une réponse.',
      poids: 3,
      conditions: (gs) => gs.semaine >= 2,
      choix: [
        {
          texte: '"Connais pas."',
          detail: 'Légalité neutre. Cohérence -1.',
          effet: (gs) => {
            gs.choicesHistory = gs.choicesHistory || {};
            gs.choicesHistory['rumeur'] = 'nie';
            return { msg: '"Connais pas." Le client hoche la tête.', positif: true };
          }
        },
        {
          texte: '"J\'ai entendu quelque chose aussi."',
          detail: 'Exposition +2. Le client s\'intéresse.',
          effet: (gs) => {
            gs.exposition = Math.min(100, gs.exposition + 2);
            return { msg: 'Fred joue la carte de la curiosité. Exposition +2.', positif: false };
          }
        },
        {
          texte: '"Le cinéma underground c\'est vieux comme le cinéma."',
          detail: 'Crédibilité +1. Neutre.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 1);
            return { msg: 'Le client sourit. "Vous avez l\'air de vous y connaître."', positif: true };
          }
        }
      ]
    },

    {
      id: 'fanzine_anonyme',
      icon: '📄',
      titre: 'FANZINE ANONYME',
      texte: 'Glissé sous la porte ce matin. Un fanzine photocopié. Pas Celluloïd Scalpel — un autre. Titre : "Cinéma Libre". Dedans : une critique d\'un micro-métrage qui ressemble beaucoup au vôtre.',
      poids: 2,
      conditions: (gs) => gs.semaine >= 2 && gs.credibilite >= 20,
      choix: [
        {
          texte: 'Garder le fanzine.',
          detail: 'Crédibilité +2.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 2);
            gs.fanzine_anonyme = true;
            return { msg: 'Fred range le fanzine. Corey le lit deux fois.', positif: true };
          }
        },
        {
          texte: 'Chercher qui l\'a déposé.',
          detail: 'Peut mener à Cutter.',
          effet: (gs) => {
            gs.piste_cutter = true;
            return { msg: 'Fred regarde dans la rue. Personne. Une piste quand même.', positif: true };
          }
        }
      ]
    },

    {
      id: 'inspection_sanitaire',
      icon: '🔍',
      titre: 'INSPECTION SANITAIRE',
      texte: 'Un inspecteur municipal arrive avec un formulaire. Vérification des conditions de stockage. Il regarde les étagères. Il s\'approche de la réserve.',
      poids: 2,
      conditions: (gs) => gs.semaine >= 2,
      choix: [
        {
          texte: 'Le laisser inspecter.',
          detail: 'Légalité +3 si clean. Risque si pas clean.',
          effet: (gs) => {
            if (gs.legalite < 50) {
              gs.legalite = Math.min(100, gs.legalite + 5);
              return { msg: 'Inspection OK. Légalité +5. Il note quelque chose.', positif: false };
            }
            return { msg: 'Inspection OK. Rien à signaler.', positif: true };
          }
        },
        {
          texte: 'Bloquer l\'accès à la réserve.',
          detail: 'Légalité +1. Suspicion +1.',
          effet: (gs) => {
            gs.legalite = Math.min(100, gs.legalite + 1);
            return { msg: '"La réserve est en travaux." Il note quelque chose. Légalité +1.', positif: false };
          }
        },
        {
          texte: 'Proposer un café. Faire diversion.',
          detail: '50% de chance de réussir.',
          effet: (gs) => {
            if (Math.random() > 0.5) {
              return { msg: 'L\'inspecteur accepte le café. Il oublie la réserve.', positif: true };
            }
            gs.legalite = Math.min(100, gs.legalite + 3);
            return { msg: 'Il refuse le café. Il inspecte tout. Légalité +3.', positif: false };
          }
        }
      ]
    },

    {
      id: 'concurrent_espionne',
      icon: '😒',
      titre: 'LE CONCURRENT FOUINE',
      texte: 'Le type du Galaxy Video est resté vingt minutes sans louer. Il regardait vos étagères et prenait des notes sur son téléphone.',
      poids: 2,
      conditions: (gs) => gs.semaine >= 2,
      choix: [
        {
          texte: 'L\'ignorer.',
          detail: 'Rien. Il repart.',
          effet: (gs) => {
            gs.concurrent_visite = (gs.concurrent_visite || 0) + 1;
            return { msg: 'Fred l\'ignore. Il repart. Galaxy Video sait ce qu\'on a.', positif: true };
          }
        },
        {
          texte: 'L\'interpeller directement.',
          detail: 'Réputation +0.5. Il est mal à l\'aise.',
          effet: (gs) => {
            gs.reputation = Math.min(5, gs.reputation + 0.5);
            return { msg: '"Je peux vous aider ?" Il repose son téléphone. Réputation +0.5.', positif: true };
          }
        },
        {
          texte: 'Lui montrer de fausses étagères.',
          detail: 'Le désinformer. Crédibilité +1.',
          effet: (gs) => {
            gs.credibilite = Math.min(100, gs.credibilite + 1);
            return { msg: 'Fred lui montre le rayon enfants en long en large. Crédibilité +1.', positif: true };
          }
        }
      ]
    },

    {
      id: 'bonne_critique_inattendue',
      icon: '⭐',
      titre: 'BONNE CRITIQUE INATTENDUE',
      texte: 'Un client revient. "Le film d\'hier soir. La cassette noire. Je sais pas qui a fait ça mais c\'est le meilleur truc que j\'ai vu depuis des années." Il pose 20$ sur le comptoir. "Pour le prochain."',
      poids: 2,
      conditions: (gs) => (gs.notesHistory || []).some(n => n >= 7),
      choix: [
        {
          texte: 'Accepter les 20$.',
          detail: '+20$. Exposition +3.',
          effet: (gs) => {
            gs.argent    += 20;
            gs.exposition = Math.min(100, gs.exposition + 3);
            gs.credibilite = Math.min(100, gs.credibilite + 2);
            return { msg: '+20$ — Un fan. Crédibilité +2 / Exposition +3.', positif: true };
          }
        },
        {
          texte: 'Refuser. Rester anonyme.',
          detail: 'Légalité -2. Crédibilité +3.',
          effet: (gs) => {
            gs.legalite   = Math.max(0, gs.legalite - 2);
            gs.credibilite = Math.min(100, gs.credibilite + 3);
            return { msg: '"Je vois pas de quoi vous parlez." Il comprend. Crédibilité +3.', positif: true };
          }
        }
      ]
    },

    {
      id: 'corey_beaulieu',
      icon: '🎥',
      titre: 'COREY ET LA BEAULIEU',
      texte: '"Fred. La Beaulieu 16mm de la vitrine d\'en face. Elle est encore là. On pourrait..." Corey s\'arrête. Il sait que c\'est pas le bon moment. Ou peut-être que si.',
      poids: 2,
      conditions: (gs) => gs.semaine >= 2 && gs.argent >= 200,
      choix: [
        {
          texte: '"On peut pas se permettre."',
          detail: 'Corey comprend. Pour l\'instant.',
          effet: (gs) => {
            return { msg: 'Corey hoche la tête. Il regarde quand même par la fenêtre.', positif: true };
          }
        },
        {
          texte: '"On y pense. Après Jackson."',
          detail: 'Corey est motivé. Énergie +2.',
          effet: (gs) => {
            gs.energie = Math.min(gs.energieMax || 15, gs.energie + 2);
            gs.objectif_beaulieu = true;
            return { msg: 'Corey sourit. Énergie +2. La Beaulieu attend.', positif: true };
          }
        },
        {
          texte: 'Aller la regarder de près.',
          detail: 'Argent -5. Crédibilité +2.',
          effet: (gs) => {
            gs.argent -= 5;
            gs.credibilite = Math.min(100, gs.credibilite + 2);
            gs.objectif_beaulieu = true;
            return { msg: 'Fred et Corey traversent la rue. La Beaulieu est là. Crédibilité +2.', positif: true };
          }
        }
      ]
    },

    {
      id: 'neons_en_panne',
      icon: '💡',
      titre: 'NÉONS EN PANNE',
      texte: 'Les néons clignottent depuis ce matin. Deux d\'entre eux ont rendu l\'âme. Le vidéoclub est à moitié dans le noir. Certains clients rebroussent chemin.',
      poids: 3,
      conditions: (gs) => gs.semaine >= 1,
      choix: [
        {
          texte: 'Faire venir un électricien.',
          detail: 'Argent -25. Problème résolu.',
          effet: (gs) => {
            if (gs.argent >= 25) {
              gs.argent -= 25;
              return { msg: '-25$ — Les néons sont réparés. Le vidéoclub brille de nouveau.', positif: true };
            }
            return { msg: 'Pas assez d\'argent. Les néons restent cassés.', positif: false };
          }
        },
        {
          texte: 'Bricoler avec Corey.',
          detail: 'Énergie -2. 60% de réussite.',
          effet: (gs) => {
            gs.energie = Math.max(0, gs.energie - 2);
            if (Math.random() > 0.4) {
              return { msg: 'Corey répare les néons. Énergie -2. Mission accomplie.', positif: true };
            }
            gs.reputation = Math.max(0, gs.reputation - 0.3);
            return { msg: 'Ça marche pas. Les néons restent cassés. Réputation -0.3.', positif: false };
          }
        },
        {
          texte: 'Jouer la carte "ambiance vintage".',
          detail: 'Réputation +0.5. Créatif.',
          effet: (gs) => {
            gs.reputation = Math.min(5, gs.reputation + 0.5);
            return { msg: '"L\'éclairage tamisé c\'est voulu." Certains clients trouvent ça cool.', positif: true };
          }
        }
      ]
    },

    {
      id: 'message_anonymous',
      icon: '✉️',
      titre: 'MESSAGE ANONYME',
      texte: 'Glissé sous la porte ce matin. Une feuille pliée en quatre. "Faites attention. Quelqu\'un pose des questions." Pas de signature.',
      poids: 2,
      conditions: (gs) => gs.semaine >= 3,
      choix: [
        {
          texte: 'Prendre ça au sérieux.',
          detail: 'Légalité -3. Précaution.',
          effet: (gs) => {
            gs.legalite = Math.max(0, gs.legalite - 3);
            return { msg: 'Fred ralentit tout ce soir. Légalité -3.', positif: true };
          }
        },
        {
          texte: 'Ignorer.',
          detail: 'Rien. Peut-être une erreur.',
          effet: (gs) => {
            return { msg: 'Fred froisse la feuille. Corey la déplie.', positif: true };
          }
        },
        {
          texte: 'Montrer à Corey.',
          detail: 'Corey a une théorie.',
          effet: (gs) => {
            gs.corey_alerte = true;
            return { msg: 'Corey lit. "C\'est Cutter. Ou Canopi. Ou les deux."', positif: true };
          }
        }
      ]
    },

    {
      id: 'jackpot_caisse',
      icon: '💰',
      titre: 'BONNE JOURNÉE',
      texte: 'Journée exceptionnelle. Tous les clients ont loué. Personne a rendu de cassettes abîmées. Corey a même souri.',
      poids: 2,
      conditions: (gs) => gs.reputation >= 3,
      choix: [
        {
          texte: 'Profiter.',
          detail: '+20$. Énergie +2.',
          effet: (gs) => {
            gs.argent += 20;
            gs.energie = Math.min(gs.energieMax || 15, gs.energie + 2);
            return { msg: '+20$ — Bonne journée. Énergie +2.', positif: true };
          }
        },
        {
          texte: 'Réinvestir dans le stock.',
          detail: 'Stock drame +2. Argent neutre.',
          effet: (gs) => {
            gs.stock.drame = Math.min(10, (gs.stock.drame || 0) + 2);
            return { msg: 'Fred réinvestit. Stock drame +2.', positif: true };
          }
        }
      ]
    }

  ],

  // ===================================================
  // FONCTIONS
  // ===================================================

  getNarratif(semaine, jourDansSemaine) {
    return this.narratifs.find(
      e => e.semaine === semaine && e.jour === jourDansSemaine
    ) || null;
  },

  getEvent(gameState) {
    const gs = gameState;

    // Filtrer les événements disponibles
    const disponibles = this.aleatoires.filter(e => {
      if (e.conditions && !e.conditions(gs)) return false;
      return true;
    });

    if (disponibles.length === 0) return null;

    // Sélection pondérée par poids
    const total = disponibles.reduce((sum, e) => sum + (e.poids || 1), 0);
    let rand = Math.random() * total;

    for (const evt of disponibles) {
      rand -= (evt.poids || 1);
      if (rand <= 0) return evt;
    }

    return disponibles[0];
  }

};