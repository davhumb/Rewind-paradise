// ===================================================
// REWIND PARADISE — UPGRADES VIDÉOCLUB
// 8 améliorations achetables
// ===================================================

const UPGRADES = {

  // ===================================================
  // CATALOGUE DES UPGRADES
  // ===================================================

  liste: [

    // ===== MATÉRIEL =====
    {
      id: 'deuxieme_magneto',
      icon: '📼',
      titre: 'DEUXIÈME MAGNÉTO',
      desc: 'Servir deux clients en même temps. +1 slot dans la file.',
      categorie: 'MATÉRIEL',
      prix: 150,
      prerequis: null,
      effet: (gs) => {
        gs.slots_clients = (gs.slots_clients || 5) + 1;
        gs.reputation = Math.min(5, gs.reputation + 0.5);
      },
      texte_fred: "Corey a installé le deuxième magnéto. La file avance plus vite.",
      achetable: (gs) => !gs.upgrades.includes('deuxieme_magneto')
    },

    {
      id: 'meilleure_tele',
      icon: '📺',
      titre: 'TÉLÉ COULEUR 28"',
      desc: 'Attire plus de clients. Réputation +1 étoile permanente.',
      categorie: 'MATÉRIEL',
      prix: 120,
      prerequis: null,
      effet: (gs) => {
        gs.reputation = Math.min(5, gs.reputation + 1);
        gs.bonus_clients_quotidiens = (gs.bonus_clients_quotidiens || 0) + 1;
      },
      texte_fred: "La nouvelle télé trône derrière le comptoir. Corey la regarde plus que les clients.",
      achetable: (gs) => !gs.upgrades.includes('meilleure_tele')
    },

    {
      id: 'systeme_securite',
      icon: '🔒',
      titre: 'SYSTÈME DE SÉCURITÉ',
      desc: 'Ralentit la montée de Légalité. Canopi hésite plus.',
      categorie: 'MATÉRIEL',
      prix: 200,
      prerequis: null,
      effet: (gs) => {
        gs.securite_active = true;
        gs.legalite_multiplicateur = 0.7;
      },
      texte_fred: "Caméra factice en vitrine. Sonnette d'alarme. Ça ralentit les curieux.",
      achetable: (gs) => !gs.upgrades.includes('systeme_securite')
    },

    // ===== STOCK =====
    {
      id: 'abonnement_fournisseur',
      icon: '📦',
      titre: 'ABONNEMENT FOURNISSEUR',
      desc: '-25% sur toutes les commandes de stock.',
      categorie: 'STOCK',
      prix: 180,
      prerequis: null,
      effet: (gs) => {
        gs.remise_stock = 0.25;
      },
      texte_fred: "Le type de chez Vidéo Plus passe maintenant le mardi. Prix réduits.",
      achetable: (gs) => !gs.upgrades.includes('abonnement_fournisseur')
    },

    {
      id: 'vitrine_rarites',
      icon: '⭐',
      titre: 'VITRINE RARETÉS',
      desc: 'Le Cinéphile passe 2x plus souvent. Stock raretés max +2.',
      categorie: 'STOCK',
      prix: 160,
      prerequis: 'meilleure_tele',
      effet: (gs) => {
        gs.vitrine_rarites = true;
        gs.stock.rarites = Math.min(5, (gs.stock.rarites || 1) + 2);
      },
      texte_fred: "Les raretés en vitrine. Lynch. De Palma. Altman. Le cinéphile va péter un câble.",
      achetable: (gs) =>
        !gs.upgrades.includes('vitrine_rarites')
        && gs.upgrades.includes('meilleure_tele')
    },

    {
      id: 'stock_noires_etendu',
      icon: '🖤',
      titre: 'RÉSERVE SECRÈTE',
      desc: 'Capacité cassettes noires +5. Zone de stockage dissimulée.',
      categorie: 'STOCK',
      prix: 220,
      prerequis: null,
      effet: (gs) => {
        gs.noires_max = (gs.noires_max || 3) + 5;
        gs.stock.noires = Math.min(gs.noires_max, (gs.stock.noires || 0) + 2);
        gs.legalite = Math.max(0, gs.legalite - 5);
      },
      texte_fred: "Corey a aménagé un faux fond dans l'étagère du fond. Ingénieux. Dangereux.",
      achetable: (gs) =>
        !gs.upgrades.includes('stock_noires_etendu')
        && gs.semaine >= 2
    },

    // ===== RÉSERVE =====
    {
      id: 'magneto_montage',
      icon: '🎬',
      titre: 'MAGNÉTO DE MONTAGE PRO',
      desc: '+1 à toutes les notes Cutter. La coupe est plus précise.',
      categorie: 'RÉSERVE',
      prix: 280,
      prerequis: 'deuxieme_magneto',
      effet: (gs) => {
        gs.bonus_note_cutter = (gs.bonus_note_cutter || 0) + 1;
      },
      texte_fred: "Un Sony BVU-800. Corey pleure. De joie je crois.",
      achetable: (gs) =>
        !gs.upgrades.includes('magneto_montage')
        && gs.upgrades.includes('deuxieme_magneto')
        && gs.semaine >= 2
    },

    {
      id: 'insonorisation',
      icon: '🔇',
      titre: 'INSONORISATION RÉSERVE',
      desc: 'Les incidents du soir n\'affectent plus la Légalité.',
      categorie: 'RÉSERVE',
      prix: 240,
      prerequis: null,
      effet: (gs) => {
        gs.insonorisation = true;
      },
      texte_fred: "Mousse acoustique sur les murs. Ce qui se passe dans la réserve reste dans la réserve.",
      achetable: (gs) =>
        !gs.upgrades.includes('insonorisation')
        && gs.semaine >= 3
    }

  ],

  // ===================================================
  // ACHETER UN UPGRADE
  // ===================================================

  acheter(id, gameState) {
    const upgrade = this.liste.find(u => u.id === id);
    if (!upgrade) return { succes: false, msg: 'Upgrade introuvable.' };

    if (!upgrade.achetable(gameState)) {
      return { succes: false, msg: 'Non disponible.' };
    }

    // Appliquer remise si abonnement fournisseur
    let prix = upgrade.prix;
    if (gameState.remise_stock && upgrade.categorie === 'STOCK') {
      prix = Math.round(prix * (1 - gameState.remise_stock));
    }

    if (gameState.argent < prix) {
      return { succes: false, msg: `Pas assez d'argent. Besoin : ${prix}$` };
    }

    // Déduire l'argent
    gameState.argent -= prix;

    // Appliquer l'effet
    upgrade.effet(gameState);

    // Enregistrer
    if (!gameState.upgrades) gameState.upgrades = [];
    gameState.upgrades.push(id);

    return {
      succes: true,
      msg: upgrade.texte_fred,
      upgrade: upgrade
    };
  },

  // ===================================================
  // AFFICHER LE PANNEAU
  // ===================================================

  showPanel(gameState) {
    const existing = document.getElementById('upgrades-panel');
    if (existing) { existing.remove(); return; }

    if (!gameState.upgrades) gameState.upgrades = [];

    const categories = {};
    for (const u of this.liste) {
      if (!categories[u.categorie]) categories[u.categorie] = [];
      categories[u.categorie].push(u);
    }

    const categorieColors = {
      'MATÉRIEL': '#00ffc8',
      'STOCK':    '#ff8855',
      'RÉSERVE':  '#cc88cc'
    };

    let html = '';
    for (const [cat, upgrades] of Object.entries(categories)) {
      const color = categorieColors[cat] || '#00ffc8';
      html += `
        <div style="margin-bottom:18px;">
          <div style="font-size:8px;color:${color};
               letter-spacing:3px;margin-bottom:8px;">
            ${cat}
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;">
      `;

      for (const u of upgrades) {
        const fait       = gameState.upgrades.includes(u.id);
        const disponible = u.achetable(gameState);

        // Prix avec remise éventuelle
        let prix = u.prix;
        if (gameState.remise_stock && u.categorie === 'STOCK') {
          prix = Math.round(prix * (1 - gameState.remise_stock));
        }

        const peutAcheter = disponible && gameState.argent >= prix;

        html += `
          <div style="
            background: ${fait ? '#071a10' : '#0a0a18'};
            border: 1px solid ${fait ? '#00ffc820' : disponible ? '#2e2e50' : '#0f0f20'};
            border-radius: 8px;
            padding: 12px 14px;
            opacity: ${disponible || fait ? '1' : '0.4'};
          ">
            <div style="display:flex;align-items:center;
                 justify-content:space-between;margin-bottom:6px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:18px;">${u.icon}</span>
                <div>
                  <div style="font-size:11px;
                       color:${fait ? '#00ffc8' : '#f0f0ff'};
                       letter-spacing:1px;font-weight:bold;">
                    ${u.titre}
                  </div>
                  ${u.prerequis && !fait ? `
                    <div style="font-size:8px;color:#444466;
                         letter-spacing:1px;margin-top:1px;">
                      Nécessite : ${
                        this.liste.find(x => x.id === u.prerequis)?.titre || u.prerequis
                      }
                    </div>
                  ` : ''}
                </div>
              </div>
              ${fait ? `
                <span style="font-size:11px;color:#00ffc8;">✓ INSTALLÉ</span>
              ` : disponible ? `
                <div onclick="UPGRADES.acheterEtRefresh('${u.id}')"
                     style="
                  background: ${peutAcheter ? '#071a10' : '#0a0a18'};
                  border: 2px solid ${peutAcheter ? '#00ffc8' : '#333355'};
                  border-radius: 6px;
                  padding: 6px 10px;
                  font-size: 10px;
                  color: ${peutAcheter ? '#00ffc8' : '#444466'};
                  letter-spacing: 1px;
                  cursor: ${peutAcheter ? 'pointer' : 'default'};
                  font-family: 'Courier New', monospace;
                  font-weight: bold;
                  white-space: nowrap;
                ">
                  ${prix}$
                </div>
              ` : `
                <span style="font-size:9px;color:#333355;letter-spacing:1px;">
                  VERROUILLÉ
                </span>
              `}
            </div>
            <div style="font-size:10px;color:#7070aa;
                 line-height:1.5;letter-spacing:0.5px;">
              ${u.desc}
            </div>
          </div>
        `;
      }

      html += `</div></div>`;
    }

    const panel = document.createElement('div');
    panel.id = 'upgrades-panel';
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
        background: #080818;
        border-bottom: 1px solid #1e1e3a;
        padding: 12px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0; z-index: 10;
      ">
        <div>
          <div style="font-size:11px;color:#00ffc8;
               letter-spacing:2px;font-weight:bold;">
            AMÉLIORATIONS
          </div>
          <div style="font-size:9px;color:#444466;
               letter-spacing:1px;margin-top:2px;">
            Budget : <span style="color:#00ffc8;">${gameState.argent}$</span>
            · ${gameState.upgrades.length}/${this.liste.length} installées
          </div>
        </div>
        <div onclick="document.getElementById('upgrades-panel').remove()"
             style="font-size:10px;color:#444466;cursor:pointer;
                    padding:6px 10px;border:1px solid #1e1e3a;border-radius:4px;">
          ✕
        </div>
      </div>

      <div style="padding:14px;">
        ${html}
      </div>
    `;

    document.body.appendChild(panel);
  },

  // ===================================================
  // ACHETER ET RAFRAÎCHIR LE PANNEAU
  // ===================================================

  acheterEtRefresh(id) {
    const gs = window.gameStateRef || {};
    const resultat = this.acheter(id, gs);

    if (resultat.succes) {
      // Notification
      const notif = document.createElement('div');
      notif.style.cssText = `
        position:fixed;top:60px;left:50%;
        transform:translateX(-50%);
        background:#071a10;
        border:2px solid #00ffc8;
        border-radius:6px;padding:10px 18px;
        font-size:11px;color:#00ffc8;
        letter-spacing:1px;z-index:600;
        text-align:center;max-width:85vw;
        font-family:'Courier New',monospace;
        font-weight:bold;
      `;
      notif.textContent = resultat.msg;
      document.body.appendChild(notif);
      setTimeout(() => {
        notif.style.transition = 'opacity 0.5s';
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 500);
      }, 2500);

      // Vérifier achievements
      if (typeof ACHIEVEMENTS !== 'undefined') {
        ACHIEVEMENTS.checkAndNotify(gs);
      }

      // Sauvegarder
      localStorage.setItem('rewindParadise_save', JSON.stringify(gs));

      // Rafraîchir le panneau
      const panel = document.getElementById('upgrades-panel');
      if (panel) panel.remove();
      setTimeout(() => this.showPanel(gs), 100);

    } else {
      // Erreur
      const notif = document.createElement('div');
      notif.style.cssText = `
        position:fixed;top:60px;left:50%;
        transform:translateX(-50%);
        background:#150510;
        border:2px solid #ff4466;
        border-radius:6px;padding:10px 18px;
        font-size:11px;color:#ff4466;
        letter-spacing:1px;z-index:600;
        text-align:center;max-width:85vw;
        font-family:'Courier New',monospace;
        font-weight:bold;
      `;
      notif.textContent = resultat.msg;
      document.body.appendChild(notif);
      setTimeout(() => {
        notif.style.transition = 'opacity 0.5s';
        notif.style.opacity = '0';
        setTimeout(() => notif.remove(), 500);
      }, 2000);
    }
  },

  // ===================================================
  // APPLIQUER LES EFFETS AU DÉMARRAGE
  // ===================================================

  appliquerEffetsActifs(gameState) {
    if (!gameState.upgrades) return;

    for (const id of gameState.upgrades) {
      const upgrade = this.liste.find(u => u.id === id);
      if (upgrade) upgrade.effet(gameState);
    }
  }

};