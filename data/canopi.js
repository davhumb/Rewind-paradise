// ===================================================
// REWIND PARADISE — CANOPI.JS
// L'inspecteur Canopi. Il revient toujours.
// ===================================================

const CANOPI = {

  // ===================================================
  // QUESTIONS D'INTERROGATOIRE
  // ===================================================

  questions: [

    {
      id: 'q_reserve',
      semaine_min: 1,
      texte: '"La réserve. Elle est accessible au public ?"',
      sousTexte: 'Il pose son carnet sur le comptoir. Il attend.',
      choix: [
        {
          id: 'A',
          texte: '"Non. Accès employés seulement."',
          type: 'cooperatif',
          effets: { suspicion: -5, canopiRevient: -1 },
          souvenir: 'reserve_fermee'
        },
        {
          id: 'B',
          texte: '"Elle sert au stockage. Rien d\'intéressant."',
          type: 'evasif',
          effets: { suspicion: 0 },
          souvenir: 'reserve_stockage'
        },
        {
          id: 'C',
          texte: '"Parfois. Pour les commandes spéciales."',
          type: 'menteur',
          effets: { suspicion: -10, suspicionDelai: +20 },
          souvenir: 'reserve_ouverte'
        }
      ],
      contradiction: {
        souvenir: 'reserve_fermee',
        question: 'reserve_ouverte',
        texte: '"La dernière fois vous m\'aviez dit que la réserve était fermée au public."'
      }
    },

    {
      id: 'q_horaires',
      semaine_min: 1,
      texte: '"Vous restez tard le soir ?"',
      sousTexte: 'Il regarde les néons. Il attend toujours.',
      choix: [
        {
          id: 'A',
          texte: '"Non. Je ferme à l\'heure."',
          type: 'cooperatif',
          effets: { suspicion: -5, canopiRevient: -1 },
          souvenir: 'horaires_normal'
        },
        {
          id: 'B',
          texte: '"Parfois pour la compta."',
          type: 'evasif',
          effets: { suspicion: 0 },
          souvenir: 'horaires_compta'
        },
        {
          id: 'C',
          texte: '"Jamais. Je suis fatigué le soir."',
          type: 'menteur',
          effets: { suspicion: -10, suspicionDelai: +20 },
          souvenir: 'horaires_jamais'
        }
      ],
      contradiction: {
        souvenir: 'horaires_jamais',
        question: 'horaires_tard',
        texte: '"Vous m\'aviez dit que vous ne restiez jamais tard."'
      }
    },

    {
      id: 'q_clients',
      semaine_min: 1,
      texte: '"Vos clients. Vous les connaissez personnellement ?"',
      sousTexte: 'Il tourne une page de son carnet.',
      choix: [
        {
          id: 'A',
          texte: '"Non. Relations commerciales uniquement."',
          type: 'cooperatif',
          effets: { suspicion: -5, canopiRevient: -1 },
          souvenir: 'clients_inconnus'
        },
        {
          id: 'B',
          texte: '"Quelques habitués. Rien de particulier."',
          type: 'evasif',
          effets: { suspicion: 0 },
          souvenir: 'clients_habitues'
        },
        {
          id: 'C',
          texte: '"Non. Je connais personne."',
          type: 'menteur',
          effets: { suspicion: -10, suspicionDelai: +20 },
          souvenir: 'clients_personne'
        }
      ],
      contradiction: {
        souvenir: 'clients_personne',
        question: 'clients_connus',
        texte: '"Vous m\'aviez dit ne connaître aucun client personnellement."'
      }
    },

    {
      id: 'q_cassettes',
      semaine_min: 2,
      texte: '"Des cassettes non référencées. Vous en avez ?"',
      sousTexte: 'Il regarde les étagères. Méthodiquement.',
      choix: [
        {
          id: 'A',
          texte: '"Non. Tout est dans le registre."',
          type: 'cooperatif',
          effets: { suspicion: -5, canopiRevient: -1 },
          souvenir: 'cassettes_registre'
        },
        {
          id: 'B',
          texte: '"Des retours parfois. Pas encore enregistrés."',
          type: 'evasif',
          effets: { suspicion: +2 },
          souvenir: 'cassettes_retours'
        },
        {
          id: 'C',
          texte: '"Non. Jamais."',
          type: 'menteur',
          effets: { suspicion: -10, suspicionDelai: +25 },
          souvenir: 'cassettes_jamais'
        }
      ],
      contradiction: {
        souvenir: 'cassettes_jamais',
        question: 'cassettes_trouvees',
        texte: '"Vous m\'aviez affirmé n\'avoir aucune cassette non référencée."'
      }
    },

    {
      id: 'q_corey',
      semaine_min: 2,
      texte: '"Votre employé. Il travaille ici depuis longtemps ?"',
      sousTexte: 'Il note quelque chose. Lentement.',
      choix: [
        {
          id: 'A',
          texte: '"Depuis l\'ouverture. C\'est tout."',
          type: 'cooperatif',
          effets: { suspicion: -5, canopiRevient: -1 },
          souvenir: 'corey_ouverture'
        },
        {
          id: 'B',
          texte: '"Un moment. Il est fiable."',
          type: 'evasif',
          effets: { suspicion: 0 },
          souvenir: 'corey_fiable'
        },
        {
          id: 'C',
          texte: '"Je le connais pas vraiment."',
          type: 'menteur',
          effets: { suspicion: -10, suspicionDelai: +20 },
          souvenir: 'corey_inconnu'
        }
      ],
      contradiction: {
        souvenir: 'corey_ouverture',
        question: 'corey_inconnu',
        texte: '"Vous m\'aviez dit qu\'il travaillait ici depuis l\'ouverture."'
      }
    },

    {
      id: 'q_soir',
      semaine_min: 2,
      texte: '"Le soir. Après la fermeture. Qu\'est-ce que vous faites ?"',
      sousTexte: 'Il attend. Il a tout son temps.',
      choix: [
        {
          id: 'A',
          texte: '"Je rentre chez moi. Je dors."',
          type: 'cooperatif',
          effets: { suspicion: -5, canopiRevient: -1 },
          souvenir: 'soir_rentre'
        },
        {
          id: 'B',
          texte: '"La compta. Les commandes. Le travail ordinaire."',
          type: 'evasif',
          effets: { suspicion: 0 },
          souvenir: 'soir_compta'
        },
        {
          id: 'C',
          texte: '"Rien. Je lis. Je regarde la télé."',
          type: 'menteur',
          effets: { suspicion: -10, suspicionDelai: +20 },
          souvenir: 'soir_rien'
        }
      ],
      contradiction: {
        souvenir: 'soir_rentre',
        question: 'soir_tard',
        texte: '"Vous m\'aviez dit que vous rentriez directement après la fermeture."'
      }
    },

    {
      id: 'q_miguel',
      semaine_min: 3,
      texte: '"Un certain Miguel. Il vient souvent ici ?"',
      sousTexte: 'Il pose le nom comme s\'il savait déjà.',
      choix: [
        {
          id: 'A',
          texte: '"Un client. Il loue des films d\'horreur."',
          type: 'cooperatif',
          effets: { suspicion: -3, canopiRevient: 0 },
          souvenir: 'miguel_horreur'
        },
        {
          id: 'B',
          texte: '"Le nom me dit quelque chose. Un habitué."',
          type: 'evasif',
          effets: { suspicion: +3 },
          souvenir: 'miguel_habitue'
        },
        {
          id: 'C',
          texte: '"Miguel ? Je connais pas."',
          type: 'menteur',
          effets: { suspicion: -8, suspicionDelai: +25 },
          souvenir: 'miguel_inconnu'
        }
      ],
      contradiction: {
        souvenir: 'miguel_inconnu',
        question: 'miguel_vu',
        texte: '"Vous m\'aviez dit ne pas connaître ce Miguel."'
      }
    },

    {
      id: 'q_films_noirs',
      semaine_min: 3,
      texte: '"Des films modifiés circulent dans le quartier. Vous êtes au courant ?"',
      sousTexte: 'Il pose la question sans le regarder.',
      choix: [
        {
          id: 'A',
          texte: '"Non. C\'est quoi comme modification ?"',
          type: 'cooperatif',
          effets: { suspicion: -3, canopiRevient: 0 },
          souvenir: 'films_noirs_ignorant'
        },
        {
          id: 'B',
          texte: '"J\'ai entendu des rumeurs. Rien de précis."',
          type: 'evasif',
          effets: { suspicion: +5 },
          souvenir: 'films_noirs_rumeurs'
        },
        {
          id: 'C',
          texte: '"Non. Jamais entendu parler."',
          type: 'menteur',
          effets: { suspicion: -8, suspicionDelai: +30 },
          souvenir: 'films_noirs_jamais'
        }
      ],
      contradiction: {
        souvenir: 'films_noirs_ignorant',
        question: 'films_noirs_implique',
        texte: '"Vous m\'aviez dit ne rien savoir sur ces films modifiés."'
      }
    },

    {
      id: 'q_dimaggio',
      semaine_min: 4,
      texte: '"M. DiMaggio. Vous le connaissez ?"',
      sousTexte: 'Il s\'arrête d\'écrire. Il attend la réponse.',
      choix: [
        {
          id: 'A',
          texte: '"Non. Qui c\'est ?"',
          type: 'cooperatif',
          effets: { suspicion: -3, canopiRevient: 0 },
          souvenir: 'dimaggio_inconnu'
        },
        {
          id: 'B',
          texte: '"Le nom... ça me dit vaguement quelque chose."',
          type: 'evasif',
          effets: { suspicion: +5 },
          souvenir: 'dimaggio_vague'
        },
        {
          id: 'C',
          texte: '"Non. Jamais entendu ce nom."',
          type: 'menteur',
          effets: { suspicion: -5, suspicionDelai: +35 },
          souvenir: 'dimaggio_jamais'
        }
      ],
      contradiction: {
        souvenir: 'dimaggio_inconnu',
        question: 'dimaggio_connu',
        texte: '"Vous m\'aviez dit ne pas connaître M. DiMaggio."'
      }
    }

  ],

  // ===================================================
  // CARNET DE CANOPI — notes par semaine/jour
  // ===================================================

  getCarnet(semaine, jour) {
    const entrees = [];

    if (semaine >= 1) {
      entrees.push({
        jour: 1,
        texte: '"Le vidéoclub Rewind Paradise. Gérant : Fred. Un employé : Corey. Ouvert depuis peu. Clientèle variée. Rien d\'anormal en surface."'
      });
    }

    if (semaine >= 1 && jour >= 3) {
      entrees.push({
        jour: 3,
        texte: '"Ghost loué quotidiennement. Même client. Habitude suspecte ou simple goût cinématographique ? À surveiller."'
      });
    }

    if (semaine >= 2) {
      entrees.push({
        jour: 8,
        texte: '"La réserve. Accès restreint selon le gérant. Raison invoquée : stockage. La porte est toujours fermée quand j\'arrive."'
      });
    }

    if (semaine >= 2 && jour >= 10) {
      entrees.push({
        jour: 10,
        texte: '"Des cassettes non référencées signalées dans le quartier. Format inhabituel. Montage alternatif. Source inconnue."'
      });
    }

    if (semaine >= 3) {
      entrees.push({
        jour: 15,
        texte: '"Miguel — client régulier. Loue des films d\'horreur. Ou prétend en louer. Comportement nerveux. À creuser."'
      });
    }

    if (semaine >= 3 && jour >= 17) {
      entrees.push({
        jour: 17,
        texte: '"Celluloïd Scalpel. Fanzine underground. Critique des micro-métrages avec une précision troublante. L\'auteur connaît les œuvres de l\'intérieur."'
      });
    }

    if (semaine >= 4) {
      entrees.push({
        jour: 22,
        texte: '"DiMaggio. Le nom est apparu deux fois cette semaine. Connexion avec le Rewind Paradise à établir. Priorité."'
      });
    }

    return entrees;
  },

  // ===================================================
  // INTERROGATOIRE
  // ===================================================

  interrogatoire: {

    // Évaluer la cohérence des réponses
    evaluerCoherence(choicesHistory) {
      if (!choicesHistory || choicesHistory.length === 0) return 100;

      let score = 100;
      let contradictions = 0;

      // Compter les contradictions détectées
      const souvenirs = {};
      choicesHistory.forEach(choix => {
        if (choix.souvenir) {
          if (souvenirs[choix.question] &&
              souvenirs[choix.question] !== choix.souvenir) {
            contradictions++;
          }
          souvenirs[choix.question] = choix.souvenir;
        }
      });

      score -= contradictions * 20;

      // Compter les réponses menteuses
      const menteurs = choicesHistory.filter(c => c.type === 'menteur').length;
      score -= menteurs * 5;

      return Math.max(0, Math.min(100, score));
    }
  },

  // ===================================================
  // OBTENIR UNE QUESTION
  // ===================================================

  getQuestion(gameState) {
    if (!gameState) return null;

    const semaine = gameState.semaine || 1;
    const dejaPosees = gameState.canopiQuestionsPosees || [];

    // Filtrer les questions disponibles
    const disponibles = this.questions.filter(q =>
      q.semaine_min <= semaine &&
      !dejaPosees.includes(q.id)
    );

    if (!disponibles.length) return null;

    // Choisir aléatoirement
    return disponibles[Math.floor(Math.random() * disponibles.length)];
  },

  // ===================================================
  // AFFICHER L'INTERROGATOIRE
  // ===================================================

  showInterrogatoire(question, callback) {
    if (!question) { if (callback) callback(); return; }

    const overlay = document.createElement('div');
    overlay.id = 'canopi-interrogatoire';
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.96);
      z-index: 800;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      font-family: 'Courier New', monospace;
    `;

    overlay.innerHTML = `
      <!-- CANOPI HEADER -->
      <div style="
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 20px;
        width: 100%;
        max-width: 380px;
      ">
        <img src="posters/canopi.png" alt="Canopi"
             style="width:64px;height:64px;border-radius:50%;
                    border:2px solid #00ffc820;object-fit:cover;
                    background:#0a0a18;flex-shrink:0;"
             onerror="this.style.display='none'">
        <div>
          <div style="font-size:9px;color:#444466;letter-spacing:3px;margin-bottom:4px;">
            INSPECTEUR CANOPI
          </div>
          <div style="font-size:8px;color:#222244;letter-spacing:2px;">
            ▓ INTERROGATOIRE ▓
          </div>
        </div>
      </div>

      <!-- QUESTION -->
      <div style="
        width: 100%;
        max-width: 380px;
        background: #080818;
        border: 1px solid #1e1e3a;
        border-top: 2px solid #00ffc820;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      ">
        <div style="
          font-size: 14px;
          color: #c0c0dd;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 8px;
        ">
          ${question.texte}
        </div>
        <div style="
          font-size: 9px;
          color: #333355;
          letter-spacing: 1px;
          font-style: italic;
        ">
          ${question.sousTexte}
        </div>
      </div>

      <!-- CHOIX -->
      <div style="
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
      " id="canopi-choix">
        ${question.choix.map((choix, i) => `
          <div onclick="CANOPI._choisir(${i})"
               style="
                 background: #0a0a18;
                 border: 1px solid #1e1e3a;
                 border-radius: 6px;
                 padding: 12px 14px;
                 cursor: pointer;
               "
               onmousedown="this.style.background='#0f0f22'"
               onmouseup="this.style.background='#0a0a18'">
            <div style="
              font-size: 10px;
              color: #8080aa;
              letter-spacing: 1px;
              margin-bottom: 3px;
            ">
              ${choix.id} —
            </div>
            <div style="
              font-size: 12px;
              color: #c0c0dd;
              font-style: italic;
              line-height: 1.4;
            ">
              ${choix.texte}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- FRED + COREY bulles -->
      <div style="
        width: 100%;
        max-width: 380px;
        display: flex;
        gap: 10px;
        align-items: flex-end;
        min-height: 60px;
      ">
        <img src="posters/fred.png" alt="Fred"
             style="width:40px;height:40px;border-radius:50%;
                    border:1px solid #3a3a6a30;object-fit:cover;
                    background:#0a0a18;flex-shrink:0;"
             onerror="this.style.display='none'">
        <div style="flex:1;" id="canopi-bulles"></div>
        <img src="posters/peur.png" alt="Corey"
             id="canopi-corey-avatar"
             style="width:40px;height:40px;border-radius:50%;
                    border:1px solid #ff885530;object-fit:cover;
                    background:#0a0a18;flex-shrink:0;"
             onerror="this.style.display='none'">
      </div>
    `;

    document.body.appendChild(overlay);

    // Stocker la question et le callback
    this._questionCourante = question;
    this._callback         = callback;

    // Bulle d'intro Corey
    setTimeout(() => {
      this._afficherBulleCanopi('corey', 'Souris pas. Réponds juste.');
    }, 600);
  },

  // ===================================================
  // CHOISIR UNE RÉPONSE
  // ===================================================

  _choisir(index) {
    const question = this._questionCourante;
    if (!question) return;

    const choix = question.choix[index];

    // Récupérer le gameState
    const gs = window.gameStateRef || JSON.parse(
      localStorage.getItem('rewindParadise_save') || '{}'
    );

    // Vérifier contradiction
    const reponsesCanopi = gs.reponsesCanopi || {};
    let contradiction = false;

    if (reponsesCanopi[question.id]) {
      const ancienneReponse = reponsesCanopi[question.id];
      if (question.contradiction &&
          ancienneReponse === question.contradiction.souvenir &&
          choix.souvenir !== ancienneReponse) {
        contradiction = true;
      }
    }

    // Sauvegarder la réponse
    if (!gs.reponsesCanopi) gs.reponsesCanopi = {};
    gs.reponsesCanopi[question.id] = choix.souvenir;

    // Marquer la question comme posée
    if (!gs.canopiQuestionsPosees) gs.canopiQuestionsPosees = [];
    if (!gs.canopiQuestionsPosees.includes(question.id)) {
      gs.canopiQuestionsPosees.push(question.id);
    }

    // Historique des choix
    if (!gs.choicesHistory) gs.choicesHistory = [];
    gs.choicesHistory.push({
      question: question.id,
      choix: choix.id,
      type: choix.type,
      souvenir: choix.souvenir
    });

    // Appliquer les effets
    if (choix.effets.suspicion !== undefined) {
      gs.suspicion = Math.max(0, Math.min(100,
        (gs.suspicion || 0) + choix.effets.suspicion
      ));
    }

    // Réaction Corey selon le type de réponse
    const bullesZone = document.getElementById('canopi-bulles');
    const coreyAvatar = document.getElementById('canopi-corey-avatar');

    if (contradiction) {
      // Canopi a remarqué
      this._afficherBulleCanopi('fred', '"..."');
      setTimeout(() => {
        if (coreyAvatar) coreyAvatar.src = 'posters/colere.png';
        this._afficherBulleCanopi('corey', 'Il a noté quelque chose.');
        gs.suspicion = Math.min(100, (gs.suspicion || 0) + 15);
      }, 800);
      setTimeout(() => { this._afficherBulleCanopi('fred', '"Merde."'); }, 1600);
    } else if (choix.type === 'cooperatif') {
      if (coreyAvatar) coreyAvatar.src = 'posters/peur.png';
      this._afficherBulleCanopi('corey', 'Bien joué. Pour l\'instant.');
    } else if (choix.type === 'evasif') {
      if (coreyAvatar) coreyAvatar.src = 'posters/peur.png';
      this._afficherBulleCanopi('corey', 'Il a noté quelque chose.');
    } else if (choix.type === 'menteur') {
      if (coreyAvatar) coreyAvatar.src = 'posters/colere.png';
      this._afficherBulleCanopi('fred', '"..."');
      setTimeout(() => {
        this._afficherBulleCanopi('corey', 'T\'as menti à un flic Fred.');
      }, 600);
    }

    // Sauvegarder et fermer
    localStorage.setItem('rewindParadise_save', JSON.stringify(gs));
    if (window.gameStateRef) window.gameStateRef = gs;

    setTimeout(() => {
      const overlay = document.getElementById('canopi-interrogatoire');
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.4s';
        setTimeout(() => {
          overlay.remove();
          if (this._callback) this._callback();
        }, 400);
      }
    }, contradiction ? 2800 : 1800);
  },

  // ===================================================
  // BULLES BD DANS L'INTERROGATOIRE
  // ===================================================

  _afficherBulleCanopi(perso, texte) {
    const zone = document.getElementById('canopi-bulles');
    if (!zone) return;

    const div = document.createElement('div');
    div.style.cssText = `
      display: flex;
      justify-content: ${perso === 'fred' ? 'flex-start' : 'flex-end'};
      margin-bottom: 5px;
      animation: bulleIn 0.2s ease;
    `;

    div.innerHTML = `
      <div style="
        max-width: 85%;
        background: ${perso === 'fred' ? '#0f0f2a' : '#1a0f05'};
        border: 1px solid ${perso === 'fred' ? '#3a3a6a' : '#ff885530'};
        border-radius: ${perso === 'fred' ? '4px 10px 10px 10px' : '10px 4px 10px 10px'};
        padding: 6px 10px;
        font-size: 10px;
        color: ${perso === 'fred' ? '#9090cc' : '#cc9966'};
        font-style: italic;
        line-height: 1.4;
      ">
        ${texte}
      </div>
    `;

    zone.appendChild(div);

    // Max 2 bulles
    const toutes = zone.querySelectorAll('div');
    if (toutes.length > 2) toutes[0].remove();
  }

};