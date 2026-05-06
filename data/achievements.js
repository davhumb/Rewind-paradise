// ===================================================
// REWIND PARADISE — ACHIEVEMENTS v1
// 15 succès débloquables style VHS
// ===================================================

const ACHIEVEMENTS = {

  // ===================================================
  // DÉFINITIONS
  // ===================================================

  liste: [

    // CINÉMA
    {
      id: 'premiere_coupe',
      icon: '🎬',
      titre: 'PREMIÈRE COUPE',
      desc: 'Réaliser son premier micro-métrage.',
      categorie: 'CINÉMA',
      secret: false,
      check: (gs) => (gs.notesHistory || []).length >= 1
    },
    {
      id: 'la_bascule',
      icon: '✂',
      titre: 'LA BASCULE',
      desc: 'Couper exactement dans la zone rouge.',
      categorie: 'CINÉMA',
      secret: false,
      check: (gs) => gs.coupe_bascule_reussie === true
    },
    {
      id: 'the_glitch',
      icon: '⭐',
      titre: 'THE GLITCH',
      desc: 'Obtenir 10/10 de Cutter.',
      categorie: 'CINÉMA',
      secret: false,
      check: (gs) => (gs.notesHistory || []).includes(10)
    },
    {
      id: 'auteur',
      icon: '🎭',
      titre: 'AUTEUR',
      desc: '5 notes supérieures ou égales à 8 consécutives.',
      categorie: 'CINÉMA',
      secret: false,
      check: (gs) => {
        const notes = gs.notesHistory || [];
        let serie = 0;
        for (const n of notes) {
          if (n >= 8) { serie++; if (serie >= 5) return true; }
          else serie = 0;
        }
        return false;
      }
    },
    {
      id: 'directors_cut',
      icon: '📽',
      titre: 'DIRECTOR\'S CUT',
      desc: 'Obtenir la meilleure fin possible.',
      categorie: 'CINÉMA',
      secret: true,
      check: (gs) => gs.fin === 'coupez'
    },

    // VIDÉOCLUB
    {
      id: 'ghost_hunter',
      icon: '👻',
      titre: 'GHOST HUNTER',
      desc: 'Servir Canopi 10 fois.',
      categorie: 'VIDÉOCLUB',
      secret: false,
      check: (gs) => (gs.client_canopi_count || 0) >= 10
    },
    {
      id: 'caisse_pleine',
      icon: '💰',
      titre: 'CAISSE PLEINE',
      desc: 'Avoir 500$ en caisse simultanément.',
      categorie: 'VIDÉOCLUB',
      secret: false,
      check: (gs) => gs.argent >= 500
    },
    {
      id: 'bien_achalande',
      icon: '📦',
      titre: 'BIEN ACHALANDÉ',
      desc: 'Stock plein dans 3 genres en même temps.',
      categorie: 'VIDÉOCLUB',
      secret: false,
      check: (gs) => {
        const s = gs.stock || {};
        const pleins = [
          (s.action  || 0) >= 8,
          (s.horreur || 0) >= 8,
          (s.drame   || 0) >= 8,
          (s.enfants || 0) >= 8
        ].filter(Boolean).length;
        return pleins >= 3;
      }
    },
    {
      id: 'habitues',
      icon: '🎪',
      titre: 'HABITUÉS',
      desc: '5 clients différents avec 3 visites ou plus.',
      categorie: 'VIDÉOCLUB',
      secret: false,
      check: (gs) => {
        const clients = [
          'canopi','miguel','henderson',
          'cinephile','etudiant','femme_seule',
          'gamin_horreur','inconnu','ramon'
        ];
        const fideles = clients.filter(
          c => (gs['client_' + c + '_count'] || 0) >= 3
        );
        return fideles.length >= 5;
      }
    },

    // NARRATION
    {
      id: 'clean',
      icon: '🕵',
      titre: 'CLEAN',
      desc: 'Finir une partie sans que Canopi agisse.',
      categorie: 'NARRATION',
      secret: true,
      check: (gs) => gs.canopi_a_agi !== true
            && (gs.fin !== undefined)
    },
    {
      id: 'pretty_woman',
      icon: '🌹',
      titre: 'PRETTY WOMAN',
      desc: 'Servir Ramon 5 fois.',
      categorie: 'NARRATION',
      secret: false,
      check: (gs) => (gs.client_ramon_count || 0) >= 5
    },
    {
      id: 'noctambule',
      icon: '🌙',
      titre: 'NOCTAMBULE',
      desc: 'Jouer 15 soirs de suite.',
      categorie: 'NARRATION',
      secret: false,
      check: (gs) => (gs.jour || 0) >= 15
    },
    {
      id: 'underground',
      icon: '⚡',
      titre: 'UNDERGROUND',
      desc: 'Distribuer 20 cassettes noires.',
      categorie: 'NARRATION',
      secret: false,
      check: (gs) => (gs.noires_distribuees || 0) >= 20
    },
    {
      id: 'le_risque',
      icon: '🔪',
      titre: 'LE RISQUE',
      desc: 'Réussir une coupe audacieuse.',
      categorie: 'NARRATION',
      secret: false,
      check: (gs) => gs.coupe_audacieuse_reussie === true
    },
    {
      id: 'celluloïd',
      icon: '📰',
      titre: 'CELLULOÏD',
      desc: 'Atteindre 100% de crédibilité.',
      categorie: 'CINÉMA',
      secret: false,
      check: (gs) => (gs.credibilite || 0) >= 100
    }

  ],

  // ===================================================
  // VÉRIFIER ET DÉBLOQUER
  // ===================================================

  check(gameState) {
    if (!gameState.achievements) gameState.achievements = [];

    const nouveaux = [];

    for (const ach of this.liste) {
      // Déjà débloqué
      if (gameState.achievements.includes(ach.id)) continue;

      // Vérifier la condition
      try {
        if (ach.check(gameState)) {
          gameState.achievements.push(ach.id);
          nouveaux.push(ach);
        }
      } catch(e) {
        // Condition pas remplie — on continue
      }
    }

    return nouveaux;
  },

  // ===================================================
  // AFFICHER LA NOTIFICATION
  // ===================================================

  showNotif(ach) {
    const existing = document.getElementById('ach-notif');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.id = 'ach-notif';
    notif.style.cssText = `
      position: fixed;
      top: 70px; left: 50%;
      transform: translateX(-50%);
      background: #0a0a18;
      border: 2px solid #ffdd44;
      border-radius: 8px;
      padding: 10px 16px;
      z-index: 600;
      font-family: 'Courier New', monospace;
      text-align: center;
      max-width: 85vw;
      box-shadow: 0 0 20px #ffdd4440;
      animation: achAppear 0.3s ease;
    `;

    notif.innerHTML = `
      <div style="font-size:8px;color:#ffdd44;
           letter-spacing:3px;margin-bottom:4px;">
        SUCCÈS DÉBLOQUÉ
      </div>
      <div style="font-size:18px;margin-bottom:4px;">
        ${ach.icon}
      </div>
      <div style="font-size:12px;color:#f0f0ff;
           letter-spacing:1px;font-weight:bold;">
        ${ach.titre}
      </div>
      <div style="font-size:9px;color:#8888aa;
           margin-top:3px;letter-spacing:0.5px;">
        ${ach.desc}
      </div>
    `;

    // Animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes achAppear {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notif);

    // Disparaît après 3.5s
    setTimeout(() => {
      notif.style.transition = 'opacity 0.5s';
      notif.style.opacity = '0';
      setTimeout(() => notif.remove(), 500);
    }, 3500);
  },

  // ===================================================
  // AFFICHER TOUS LES SUCCÈS (écran)
  // ===================================================

  showPanel(gameState) {
    const existing = document.getElementById('ach-panel');
    if (existing) { existing.remove(); return; }

    const debloqued = gameState.achievements || [];

    // Grouper par catégorie
    const categories = {};
    for (const ach of this.liste) {
      if (!categories[ach.categorie]) categories[ach.categorie] = [];
      categories[ach.categorie].push(ach);
    }

    let html = '';
    for (const [cat, achs] of Object.entries(categories)) {
      html += `
        <div style="margin-bottom:16px;">
          <div style="font-size:8px;color:#ff8855;
               letter-spacing:3px;margin-bottom:8px;">
            ${cat}
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
      `;

      for (const ach of achs) {
        const fait = debloqued.includes(ach.id);
        const secret = ach.secret && !fait;

        html += `
          <div style="
            background: ${fait ? '#0a1a0a' : '#0a0a18'};
            border: 1px solid ${fait ? '#00ffc830' : '#1e1e3a'};
            border-radius: 6px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: ${fait ? '1' : '0.5'};
          ">
            <span style="font-size:20px;width:28px;text-align:center;">
              ${secret ? '?' : ach.icon}
            </span>
            <div style="flex:1;">
              <div style="font-size:11px;
                   color:${fait ? '#00ffc8' : '#6060aa'};
                   letter-spacing:1px;font-weight:bold;
                   margin-bottom:2px;">
                ${secret ? '???' : ach.titre}
              </div>
              <div style="font-size:9px;color:#4a4a70;
                   letter-spacing:0.5px;">
                ${secret ? 'Succès secret' : ach.desc}
              </div>
            </div>
            ${fait ? `
              <span style="font-size:12px;color:#00ffc8;">✓</span>
            ` : ''}
          </div>
        `;
      }

      html += `</div></div>`;
    }

    const panel = document.createElement('div');
    panel.id = 'ach-panel';
    panel.style.cssText = `
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: #050510;
      z-index: 400;
      font-family: 'Courier New', monospace;
      overflow-y: auto;
    `;

    panel.innerHTML = `
      <div style="
        background: #0a0a18;
        border-bottom: 1px solid #2e2e50;
        padding: 12px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 10;
      ">
        <div>
          <div style="font-size:11px;color:#ffdd44;
               letter-spacing:2px;font-weight:bold;">
            SUCCÈS
          </div>
          <div style="font-size:9px;color:#444466;
               letter-spacing:1px;margin-top:2px;">
            ${debloqued.length} / ${this.liste.length} débloqués
          </div>
        </div>
        <div onclick="document.getElementById('ach-panel').remove()"
             style="font-size:10px;color:#444466;
                    cursor:pointer;padding:6px 10px;
                    border:1px solid #1e1e3a;border-radius:4px;">
          ✕
        </div>
      </div>

      <div style="padding:14px;">
        <!-- Barre de progression -->
        <div style="margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;
               margin-bottom:4px;">
            <span style="font-size:8px;color:#444466;
                  letter-spacing:1px;">PROGRESSION</span>
            <span style="font-size:8px;color:#ffdd44;
                  letter-spacing:1px;">
              ${Math.round((debloqued.length / this.liste.length) * 100)}%
            </span>
          </div>
          <div style="width:100%;height:4px;
               background:#0a0a18;border-radius:2px;overflow:hidden;">
            <div style="
              width:${(debloqued.length / this.liste.length) * 100}%;
              height:100%;
              background:#ffdd44;
              border-radius:2px;
            "></div>
          </div>
        </div>

        ${html}
      </div>
    `;

    document.body.appendChild(panel);
  },

  // ===================================================
  // VÉRIFIER + NOTIFIER (à appeler après chaque action)
  // ===================================================

  checkAndNotify(gameState) {
    const nouveaux = this.check(gameState);
    if (nouveaux.length > 0) {
      // Afficher les notifications en cascade
      nouveaux.forEach((ach, i) => {
        setTimeout(() => this.showNotif(ach), i * 4000);
      });
    }
    return nouveaux;
  }

};