// ===================================================
// REWIND PARADISE — ACHIEVEMENTS v2
// 30 succès — refs cinéma pré-1992 + à la Corey
// ===================================================

const ACHIEVEMENTS = {

  liste: [

    // ===================================================
    // CINÉMA — RÉPLIQUES CULTES (15)
    // ===================================================
    { id:'you_talkin',    icon:'🔫', titre:"YOU TALKIN' TO ME ?",         desc:"Corey fait le DeNiro 3 fois.",                   categorie:'CINÉMA', secret:false, check:(gs)=>(gs.corey_deniro_count||0)>=3 },
    { id:'ill_be_back',   icon:'🤖', titre:"I'LL BE BACK",                desc:"Canopi revient 5 fois.",                          categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_canopi_count||0)>=5 },
    { id:'heres_johnny',  icon:'🪓', titre:"HERE'S JOHNNY",               desc:"Stock horreur épuisé 3 fois.",                    categorie:'CINÉMA', secret:false, check:(gs)=>(gs.horreur_epuise_count||0)>=3 },
    { id:'get_chopper',   icon:'🚁', titre:"GET TO THE CHOPPER",          desc:"Servir 6 clients en une journée.",                categorie:'CINÉMA', secret:false, check:(gs)=>(gs.max_clients_jour||0)>=6 },
    { id:'hasta',         icon:'😎', titre:"HASTA LA VISTA",              desc:"Le concurrent repart 3 fois bredouille.",         categorie:'CINÉMA', secret:false, check:(gs)=>(gs.concurrent_repart_count||0)>=3 },
    { id:'nobody_baby',   icon:'💃', titre:"NOBODY PUTS BABY IN A CORNER",desc:"Dirty Dancing loué 5 fois.",                     categorie:'CINÉMA', secret:false, check:(gs)=>(gs.film_dirty_dancing_count||0)>=5 },
    { id:'theyre_here',   icon:'👁', titre:"THEY'RE HERE",                desc:"Suspicion à 80% avec Canopi présent.",            categorie:'CINÉMA', secret:true,  check:(gs)=>(gs.suspicion||0)>=80&&(gs.client_canopi_count||0)>=1 },
    { id:'game_over',     icon:'💀', titre:"GAME OVER, MAN",              desc:"Premier game over.",                              categorie:'CINÉMA', secret:false, check:(gs)=>(gs.game_over_count||0)>=1 },
    { id:'failure',       icon:'🗣', titre:"FAILURE TO COMMUNICATE",      desc:"5 mauvaises ventes de suite.",                    categorie:'CINÉMA', secret:false, check:(gs)=>(gs.mauvaises_ventes_suite||0)>=5 },
    { id:'roads',         icon:'🚗', titre:"ROADS? WE DON'T NEED ROADS",  desc:"Jour 10 atteint.",                               categorie:'CINÉMA', secret:false, check:(gs)=>(gs.jour||0)>=10 },
    { id:'be_afraid',     icon:'🪰', titre:"BE AFRAID. BE VERY AFRAID.",  desc:"Stock horreur à 10 cassettes.",                  categorie:'CINÉMA', secret:false, check:(gs)=>(gs.stock?.horreur||0)>=10 },
    { id:'show_money',    icon:'💵', titre:"SHOW ME THE MONEY",           desc:"500$ en caisse simultanément.",                  categorie:'CINÉMA', secret:false, check:(gs)=>(gs.argent||0)>=500 },
    { id:'dead_people',   icon:'👻', titre:"I SEE DEAD PEOPLE",           desc:"Servir Canopi 10 fois.",                          categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_canopi_count||0)>=10 },
    { id:'say_hello',     icon:'🔫', titre:"SAY HELLO TO MY LITTLE FRIEND",desc:"Miguel devient un habitué.",                    categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_miguel_count||0)>=5 },
    { id:'elementary',    icon:'🔍', titre:"ELEMENTARY",                  desc:"Trouver le bon film pour l'indécise du 1er coup.", categorie:'CINÉMA', secret:false, check:(gs)=>(gs.indecise_premier_coup||0)>=1 },

    // ===================================================
    // CINÉMA — MICRO-MÉTRAGES (5)
    // ===================================================
    { id:'premiere_coupe',icon:'✂', titre:'PREMIÈRE COUPE',              desc:'Réaliser son premier micro-métrage.',             categorie:'CINÉMA', secret:false, check:(gs)=>(gs.notesHistory||[]).length>=1 },
    { id:'the_glitch',    icon:'⭐', titre:'THE GLITCH',                  desc:'Obtenir 10/10 de Cutter.',                       categorie:'CINÉMA', secret:false, check:(gs)=>(gs.notesHistory||[]).includes(10) },
    { id:'auteur',        icon:'🎭', titre:'AUTEUR',                      desc:'5 notes supérieures à 8 consécutives.',           categorie:'CINÉMA', secret:false, check:(gs)=>{ const n=gs.notesHistory||[];let s=0;for(const x of n){if(x>=8){s++;if(s>=5)return true;}else s=0;}return false; } },
    { id:'underground',   icon:'⚡', titre:'UNDERGROUND',                 desc:'Distribuer 10 cassettes noires.',                categorie:'CINÉMA', secret:false, check:(gs)=>(gs.noires_distribuees||0)>=10 },
    { id:'kubrick_non',   icon:'🎥', titre:'KUBRICK AURAIT PAS FAIT ÇA',  desc:'Note Cutter inférieure à 3.',                    categorie:'CINÉMA', secret:false, check:(gs)=>(gs.notesHistory||[]).some(n=>n<=3) },

    // ===================================================
    // CINÉMA — NOUVEAUX CLIENTS (10)
    // ===================================================
    { id:'blow_out_ach',  icon:'🎙️', titre:'BLOW OUT',                   desc:'Debbie loue Blow Out.',                          categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_debbie_count||0)>=1&&(gs.client_debbie_son_count||0)>=1 },
    { id:'dead_alive',    icon:'💪', titre:'DEAD OR ALIVE',               desc:'Le musclé est ravi 3 fois.',                     categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_muscle_positif||0)>=3 },
    { id:'bigger_boat',   icon:'🦈', titre:"YOU'RE GONNA NEED A BIGGER BOAT", desc:'Le fan SF loue Alien.',                     categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_sf_count||0)>=1 },
    { id:'yippee',        icon:'🎄', titre:'YIPPEE-KI-YAY',               desc:'Die Hard loué 5 fois.',                          categorie:'CINÉMA', secret:false, check:(gs)=>(gs.film_die_hard_count||0)>=5 },
    { id:'be_kind',       icon:'📼', titre:'BE KIND REWIND',              desc:'20 cassettes rendues non rembobinées.',          categorie:'CINÉMA', secret:false, check:(gs)=>(gs.retour_non_rembobinee_count||0)>=20 },
    { id:'they_live',     icon:'🕶', titre:'THEY LIVE',                   desc:'Le concurrent vient 10 fois sans rien trouver.', categorie:'CINÉMA', secret:true,  check:(gs)=>(gs.client_concurrent_count||0)>=10 },
    { id:'bon_brute',     icon:'🤠', titre:'LE BON LA BRUTE ET LE TRUAND',desc:'Le cowboy vient 5 fois.',                       categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_cowboy_count||0)>=5 },
    { id:'hit_it',        icon:'🎬', titre:'HIT IT',                      desc:'Sam répète ses répliques. 5 visites.',           categorie:'CINÉMA', secret:false, check:(gs)=>(gs.client_sam_count||0)>=5 },
    { id:'face_face',     icon:'🥊', titre:'FACE À FACE',                 desc:'Gordon et le cinéphile la même journée.',        categorie:'CINÉMA', secret:true,  check:(gs)=>(gs.gordon_cinephile_meme_jour||false) },
    { id:'cascade',       icon:'🧪', titre:'TIM A ENCORE COLLÉ QUELQUE CHOSE', desc:'Tim rend une cassette... personnalisée.', categorie:'CINÉMA', secret:false, check:(gs)=>(gs.tim_cassette_abimee||0)>=1 },

    // ===================================================
    // À LA COREY (15)
    // ===================================================
    { id:'rembobine',     icon:'📼', titre:'REMBOBINÉ',                   desc:"Corey a rembobiné Ghost pour Canopi. Encore.",   categorie:'COREY', secret:false, check:(gs)=>(gs.client_canopi_count||0)>=3 },
    { id:'film_noel',     icon:'🎄', titre:'FILM DE NOËL',                desc:"Die Hard loué 3 fois. Corey a raison.",          categorie:'COREY', secret:false, check:(gs)=>(gs.film_die_hard_count||0)>=3 },
    { id:'sicilian',      icon:'🌿', titre:'SICILIAN GOLD',               desc:"10 doses de Sicilian Gold vendues.",             categorie:'COREY', secret:false, check:(gs)=>(gs.weed_vendue_count||0)>=10 },
    { id:'galaxy',        icon:'🏪', titre:'GALAXY VIDEO',                desc:"Le concurrent est venu 5 fois. Il a rien trouvé.",categorie:'COREY', secret:false, check:(gs)=>(gs.client_concurrent_count||0)>=5 },
    { id:'pretty_w',      icon:'🌹', titre:'PRETTY WOMAN',                desc:"Ramon est venu 5 fois. Corey compte.",           categorie:'COREY', secret:false, check:(gs)=>(gs.client_ramon_count||0)>=5 },
    { id:'taxi_encore',   icon:'🚕', titre:"YOU TALKIN'? (ENCORE)",       desc:"Corey a refait la scène du miroir.",             categorie:'COREY', secret:true,  check:(gs)=>(gs.corey_deniro_count||0)>=1 },
    { id:'beaulieu',      icon:'📷', titre:'LA BEAULIEU',                 desc:"Corey en parle depuis 3 jours.",                 categorie:'COREY', secret:false, check:(gs)=>(gs.jour||0)>=3 },
    { id:'sam_raimi',     icon:'🎬', titre:"C'EST SAM RAIMI",             desc:"M. Beaumont est venu 3 fois. Corey est convaincu.",categorie:'COREY', secret:false, check:(gs)=>(gs.client_collectionneur_count||0)>=3 },
    { id:'dimaggio',      icon:'🕶', titre:'DIMAGGIO',                    desc:"Ramon a regardé la réserve 3 fois.",             categorie:'COREY', secret:true,  check:(gs)=>(gs.client_ramon_count||0)>=3&&(gs.exposition||0)>=20 },
    { id:'habitues',      icon:'🎪', titre:'HABITUÉS',                    desc:"5 clients différents avec 3 visites ou plus.",   categorie:'COREY', secret:false, check:(gs)=>{ const c=['canopi','miguel','henderson','cinephile','etudiant','femme_seule','gamin_horreur','ramon','cowboy','sam','tim','debbie']; return c.filter(x=>(gs['client_'+x+'_count']||0)>=3).length>=5; } },
    { id:'gordon_insup',  icon:'🎭', titre:'GORDON EST INSUPPORTABLE',    desc:"Gordon vient 3 fois. Fred temporise à chaque fois.",categorie:'COREY', secret:false, check:(gs)=>(gs.client_gordon_count||0)>=3 },
    { id:'debbie_son',    icon:'🎙️', titre:'DEBBIE ET LE SON',            desc:"Debbie loue 3 films avec boulot sur le son.",    categorie:'COREY', secret:false, check:(gs)=>(gs.client_debbie_son_count||0)>=3 },
    { id:'amie_secret',   icon:'💝', titre:"L'AMIE",                      desc:"Elle vient 5 fois. Corey a toujours quelque chose à faire.", categorie:'COREY', secret:true, check:(gs)=>(gs.client_amie_count||0)>=5 },
    { id:'sensible_pleure',icon:'🥹',titre:'IL PLEURE ENCORE',            desc:"Le sensible pleure devant 3 films différents.", categorie:'COREY', secret:false, check:(gs)=>(gs.client_sensible_pleure||0)>=3 },
    { id:'prof_reconnait',icon:'📚', titre:"LE PROF LES RECONNAÎT PAS",   desc:"M. Arcand vient 3 fois. Il fait semblant de pas.", categorie:'COREY', secret:false, check:(gs)=>(gs.client_prof_count||0)>=3 },

  ],

    // ===================================================
  // CHECK + DÉBLOQUER  // ===================================================
  // CHECK + DÉBLOQUER
  // ===================================================

  check(gameState) {
    if (!gameState.achievements) gameState.achievements = [];
    const nouveaux = [];
    for (const ach of this.liste) {
      if (gameState.achievements.includes(ach.id)) continue;
      try {
        if (ach.check(gameState)) {
          gameState.achievements.push(ach.id);
          nouveaux.push(ach);
        }
      } catch(e) {}
    }
    return nouveaux;
  },

  checkAndNotify(gameState) {
    const nouveaux = this.check(gameState);
    if (nouveaux.length > 0) {
      nouveaux.forEach((ach, i) => {
        setTimeout(() => this.showNotif(ach), i * 4500);
      });
    }
    return nouveaux;
  },

  // ===================================================
  // NOTIFICATION — CLASSE
  // ===================================================

  showNotif(ach) {
    const existing = document.getElementById('ach-notif');
    if (existing) existing.remove();
    // Son achievement
    if (typeof SOUNDS !== 'undefined') SOUNDS.achievement();

    // Injecter les keyframes si pas encore là
    if (!document.getElementById('ach-style')) {
      const style = document.createElement('style');
      style.id = 'ach-style';
      style.textContent = `
        @keyframes achSlideIn {
          0%   { opacity:0; transform:translateX(-50%) translateY(-20px) scale(0.9); }
          60%  { transform:translateX(-50%) translateY(4px) scale(1.02); }
          100% { opacity:1; transform:translateX(-50%) translateY(0) scale(1); }
        }
        @keyframes achSlideOut {
          0%   { opacity:1; transform:translateX(-50%) scale(1); }
          100% { opacity:0; transform:translateX(-50%) scale(0.95) translateY(-8px); }
        }
        @keyframes achShimmer {
          0%   { left: -60%; }
          100% { left: 160%; }
        }
        @keyframes achPulse {
          0%, 100% { box-shadow: 0 0 20px #ffdd4440, 0 4px 30px #00000060; }
          50%       { box-shadow: 0 0 35px #ffdd4470, 0 4px 30px #00000060; }
        }
      `;
      document.head.appendChild(style);
    }

    const isCat = ach.categorie === 'COREY';
    const couleur = isCat ? '#ff2d78' : '#ffdd44';
    const bg      = isCat ? '#180510' : '#100a00';

    const notif = document.createElement('div');
    notif.id = 'ach-notif';
    notif.style.cssText = `
      position: fixed;
      top: 72px;
      left: 50%;
      transform: translateX(-50%);
      background: ${bg};
      border: 2px solid ${couleur};
      border-radius: 10px;
      padding: 12px 18px 10px;
      z-index: 900;
      font-family: 'Courier New', monospace;
      text-align: center;
      min-width: 240px;
      max-width: 88vw;
      box-shadow: 0 0 24px ${couleur}40, 0 4px 30px #00000060;
      animation: achSlideIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275) forwards,
                 achPulse 2s 0.4s ease infinite;
      overflow: hidden;
    `;

    notif.innerHTML = `
      <div style="
        position:absolute;top:0;left:-60%;width:60%;height:100%;
        background:linear-gradient(90deg,transparent,${couleur}18,transparent);
        animation:achShimmer 1.8s 0.4s forwards;
        pointer-events:none;
      "></div>
      <div style="font-size:7px;color:${couleur};letter-spacing:4px;margin-bottom:6px;opacity:0.8;">
        ▓ SUCCÈS DÉBLOQUÉ ▓
      </div>
      <div style="font-size:28px;margin-bottom:6px;line-height:1;">
        ${ach.icon}
      </div>
      <div style="font-size:13px;color:#ffffff;letter-spacing:1px;font-weight:bold;margin-bottom:4px;">
        ${ach.titre}
      </div>
      <div style="font-size:9px;color:#888899;letter-spacing:0.5px;font-style:italic;">
        ${ach.categorie === 'COREY' ? '<span style="color:' + couleur + '80">À LA COREY</span> — ' : ''}${ach.desc}
      </div>
    `;

    document.body.appendChild(notif);

    // Disparaît après 3.5s
    setTimeout(() => {
      notif.style.animation = 'achSlideOut 0.4s ease forwards';
      setTimeout(() => notif.remove(), 400);
    }, 3500);
  },

  // ===================================================
  // PANEL
  // ===================================================

  showPanel(gameState) {
    const existing = document.getElementById('ach-panel');
    if (existing) { existing.remove(); return; }

    const debloqued = (gameState.achievements || []);
    const categories = ['CINÉMA', 'COREY'];
    let html = '';

    for (const cat of categories) {
      const liste = this.liste.filter(a => a.categorie === cat || (cat === 'CINÉMA' && !['COREY'].includes(a.categorie)));
      if (cat !== 'CINÉMA' && cat !== 'COREY') continue;
      const couleur = cat === 'COREY' ? '#ff2d78' : '#ffdd44';
      html += `<div style="margin-bottom:20px;">
        <div style="font-size:8px;color:${couleur};letter-spacing:3px;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid ${couleur}20;">${cat}</div>`;

      for (const ach of this.liste.filter(a => a.categorie === cat)) {
        const fait   = debloqued.includes(ach.id);
        const secret = ach.secret && !fait;
        html += `
          <div style="
            display:flex;align-items:center;gap:12px;
            background:${fait ? '#0a0a18' : '#060610'};
            border:1px solid ${fait ? couleur + '40' : '#1e1e3a'};
            border-radius:6px;padding:10px 12px;margin-bottom:6px;
            opacity:${fait ? '1' : '0.4'};
          ">
            <div style="font-size:22px;flex-shrink:0;">${secret ? '?' : ach.icon}</div>
            <div style="flex:1;">
              <div style="font-size:11px;color:${fait ? '#ffffff' : '#666688'};font-weight:bold;letter-spacing:1px;">
                ${secret ? '???' : ach.titre}
              </div>
              <div style="font-size:9px;color:#555577;margin-top:2px;font-style:italic;">
                ${secret ? 'Succès secret' : ach.desc}
              </div>
            </div>
            ${fait ? `<span style="font-size:14px;color:${couleur};">✓</span>` : ''}
          </div>`;
      }
      html += `</div>`;
    }

    const panel = document.createElement('div');
    panel.id = 'ach-panel';
    panel.style.cssText = `
      position:fixed;top:0;left:0;right:0;bottom:0;
      background:#050510;z-index:400;
      font-family:'Courier New',monospace;overflow-y:auto;
    `;

    const total = this.liste.length;
    const nb    = debloqued.length;
    panel.innerHTML = `
      <div style="background:#0a0a18;border-bottom:1px solid #2e2e50;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:10;">
        <div>
          <div style="font-size:11px;color:#ffdd44;letter-spacing:2px;font-weight:bold;">SUCCÈS</div>
          <div style="font-size:9px;color:#444466;letter-spacing:1px;margin-top:2px;">${nb} / ${total} débloqués</div>
        </div>
        <div onclick="document.getElementById('ach-panel').remove()" style="font-size:10px;color:#444466;cursor:pointer;padding:6px 10px;border:1px solid #1e1e3a;border-radius:4px;">✕</div>
      </div>
      <div style="padding:14px;">
        <div style="margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span style="font-size:8px;color:#444466;letter-spacing:1px;">PROGRESSION</span>
            <span style="font-size:8px;color:#ffdd44;letter-spacing:1px;">${Math.round((nb/total)*100)}%</span>
          </div>
          <div style="width:100%;height:4px;background:#0a0a18;border-radius:2px;overflow:hidden;">
            <div style="width:${(nb/total)*100}%;height:100%;background:#ffdd44;border-radius:2px;"></div>
          </div>
        </div>
        ${html}
      </div>`;

    document.body.appendChild(panel);
  }

};
