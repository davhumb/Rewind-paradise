// ===================================================
// REWIND PARADISE — DIALOGUES CLIENTS v2
// Anti-répétition intégrée
// ===================================================

const DIALOGUES_CLIENTS = {

  // ─── HENDERSON + THÉA ────────────────────────────
  henderson_thea: [
    [
      {perso:'client', texte:"Mon dieu. C'est quoi cette jaquette ?"},
      {perso:'corey',  texte:"Suspiria. Argento."},
      {perso:'client', texte:"Les enfants sont avec moi."},
      {perso:'corey',  texte:"Je vois."},
    ],
    [
      {perso:'client', texte:"Cette jeune fille choisit des films... appropriés ?"},
      {perso:'corey',  texte:"Elle sait ce qu'elle veut."},
      {perso:'client', texte:"C'est pas une réponse."},
      {perso:'corey',  texte:"C'est la seule réponse honnête."},
    ],
    [
      {perso:'client', texte:"Elle a quel âge ?"},
      {perso:'corey',  texte:"Assez."},
      {perso:'client', texte:"C'est quoi assez."},
      {perso:'corey',  texte:"Elle a regardé Halloween et elle a bien dormi."},
      {perso:'client', texte:"..."},
    ],
    [
      {perso:'client', texte:"Les films qu'elle loue sont pour les adultes."},
      {perso:'corey',  texte:"Elle est mature."},
      {perso:'client', texte:"Elle a quatorze ans."},
      {perso:'corey',  texte:"À quatorze ans Spielberg faisait déjà des films."},
      {perso:'client', texte:"C'est pas pareil."},
      {perso:'corey',  texte:"Non. Elle a un budget inférieur."},
    ],
  ],

  // ─── CINÉPHILE + CONCURRENT ──────────────────────
  cinephile_concurrent: [
    [
      {perso:'corey',  texte:"Ils se sont regardés."},
      {perso:'corey',  texte:"Pas un mot. Juste un regard."},
      {perso:'corey',  texte:"Le cinéphile sait que lui c'est Galaxy Video."},
      {perso:'corey',  texte:"Le concurrent sait que lui c'est le vrai truc."},
    ],
    [
      {perso:'client', texte:"Vous avez Short Cuts ?"},
      {perso:'corey',  texte:"Oui."},
      {perso:'client', texte:"Eux non."},
      {perso:'corey',  texte:"Non."},
      {perso:'client', texte:"C'est tout ce que je voulais savoir."},
    ],
    [
      {perso:'corey',  texte:"Le cinéphile a vu le concurrent."},
      {perso:'corey',  texte:"Il a regardé sa veste Galaxy Video."},
      {perso:'corey',  texte:"Il a pris Blue Velvet sans un mot."},
      {perso:'corey',  texte:"Message reçu."},
    ],
    [
      {perso:'client', texte:"Il cherche quoi lui."},
      {perso:'corey',  texte:"Ce qu'on a."},
      {perso:'client', texte:"Il vient souvent ?"},
      {perso:'corey',  texte:"Il vient espionner."},
      {perso:'client', texte:"Il trouvera pas."},
      {perso:'corey',  texte:"Non."},
    ],
  ],

  // ─── MIGUEL + INCONNU ────────────────────────────
  miguel_inconnu: [
    [
      {perso:'corey',  texte:"Ils se connaissent."},
      {perso:'corey',  texte:"Pas ici. Ailleurs."},
      {perso:'corey',  texte:"Le regard. Une seconde. Puis plus rien."},
    ],
    [
      {perso:'corey',  texte:"Miguel a regardé l'inconnu partir."},
      {perso:'corey',  texte:"Trois secondes."},
      {perso:'corey',  texte:"Puis il a demandé les noires."},
      {perso:'corey',  texte:"Comme si de rien."},
    ],
    [
      {perso:'corey',  texte:"L'inconnu et Miguel. Même heure."},
      {perso:'corey',  texte:"Coïncidence."},
      {perso:'corey',  texte:"..."},
      {perso:'corey',  texte:"Probablement pas."},
    ],
  ],

  // ─── MARINE + ÉTUDIANT ───────────────────────────
  marine_etudiant: [
    [
      {perso:'client', texte:"Die Hard c'est un film de guerre."},
      {perso:'corey',  texte:"Non."},
      {perso:'client', texte:"Un peu si."},
      {perso:'corey',  texte:"Non."},
    ],
    [
      {perso:'client', texte:"Apocalypse Now c'est mieux que Die Hard."},
      {perso:'corey',  texte:"C'est pas comparable."},
      {perso:'client', texte:"Lequel est mieux."},
      {perso:'corey',  texte:"Apocalypse Now. Mais Die Hard c'est Die Hard."},
      {perso:'client', texte:"Logique."},
    ],
    [
      {perso:'corey',  texte:"L'un veut du vrai. L'autre veut de l'action."},
      {perso:'corey',  texte:"Platoon c'est les deux."},
      {perso:'corey',  texte:"Mais personne demande Platoon."},
    ],
  ],

  // ─── CINÉPHILE + COLLECTIONNEUR ──────────────────
  cinephile_collectionneur: [
    [
      {perso:'client', texte:"Evil Dead."},
      {perso:'corey',  texte:"Il l'a vu à sa sortie."},
      {perso:'client', texte:"J'étais là où il fallait être."},
      {perso:'corey',  texte:"Sam Raimi."},
      {perso:'client', texte:"M. Beaumont. Enchanté."},
    ],
    [
      {perso:'corey',  texte:"Ils ont parlé cinq minutes."},
      {perso:'corey',  texte:"Blow Out. Short Cuts. Evil Dead."},
      {perso:'corey',  texte:"Deux personnes qui savent."},
      {perso:'corey',  texte:"C'est rare."},
    ],
    [
      {perso:'client', texte:"Vous connaissez M. Beaumont ?"},
      {perso:'corey',  texte:"Il vient souvent."},
      {perso:'client', texte:"Il a du goût."},
      {perso:'corey',  texte:"Il cherche quelque chose de précis."},
      {perso:'client', texte:"On cherche tous quelque chose."},
    ],
  ],

  // ─── MARIE + HENDERSON ───────────────────────────
  femme_henderson: [
    [
      {perso:'client', texte:"Ghost est sorti ?"},
      {perso:'corey',  texte:"Déjà loué."},
      {perso:'client', texte:"Par qui ?"},
      {perso:'corey',  texte:"Je peux pas dire."},
    ],
    [
      {perso:'client', texte:"Ghost."},
      {perso:'corey',  texte:"Sorti."},
      {perso:'client', texte:"..."},
      {perso:'corey',  texte:"Demain matin il revient."},
      {perso:'client', texte:"Je repasserai."},
    ],
  ],

  // ─── COWBOY + MARINE ─────────────────────────────
  cowboy_marine: [
    [
      {perso:'corey',  texte:"Le cowboy et la marine."},
      {perso:'corey',  texte:"Ils ont pas parlé."},
      {perso:'corey',  texte:"Juste un hochement de tête."},
      {perso:'corey',  texte:"Respect mutuel. Les deux savent ce qu'ils veulent."},
    ],
    [
      {perso:'client', texte:"Les westerns ou la guerre."},
      {perso:'corey',  texte:"C'est la même chose."},
      {perso:'client', texte:"Non."},
      {perso:'corey',  texte:"L'honneur. La loyauté. La mort. C'est pareil."},
      {perso:'client', texte:"...Peut-être."},
    ],
  ],

  // ─── SAM + GORDON ────────────────────────────────
  sam_gordon: [
    [
      {perso:'corey',  texte:"Sam et Gordon dans le même vidéoclub."},
      {perso:'corey',  texte:"Sam veut jouer."},
      {perso:'corey',  texte:"Gordon fait des films."},
      {perso:'corey',  texte:"Ils devraient se parler."},
      {perso:'corey',  texte:"Ils se sont pas parlé."},
    ],
    [
      {perso:'client', texte:"T'as vu ses courts métrages ?"},
      {perso:'corey',  texte:"Gordon ? Oui."},
      {perso:'client', texte:"Y'a quelque chose."},
      {perso:'corey',  texte:"The Glitch dit non."},
      {perso:'client', texte:"The Glitch se trompe."},
      {perso:'corey',  texte:"The Glitch se trompe jamais."},
    ],
  ],

  // ─── GOTH + SENSIBLE ─────────────────────────────
  goth_sensible: [
    [
      {perso:'corey',  texte:"La goth et le sensible."},
      {perso:'corey',  texte:"Elle cache Dirty Dancing sous son bras."},
      {perso:'corey',  texte:"Lui pleure déjà devant la jaquette de Cinema Paradiso."},
      {perso:'corey',  texte:"Ils se sont pas regardés. Ils se comprennent."},
    ],
  ],

  // ─── TIM + GORDON ────────────────────────────────
  tim_gordon: [
    [
      {perso:'client', texte:"T'as du latex alimentaire ?"},
      {perso:'corey',  texte:"C'est un vidéoclub."},
      {perso:'client', texte:"Je demande à Gordon."},
      {perso:'corey',  texte:"Gordon a pas de latex alimentaire."},
      {perso:'client', texte:"...Il a peut-être du sirop de grenadine."},
      {perso:'corey',  texte:"Pour quoi faire."},
      {perso:'client', texte:"Du sang. Pour la scène de la cave."},
      {perso:'corey',  texte:"C'est un vidéoclub."},
    ],
  ],

  // ─── DEBBIE + CINÉPHILE ──────────────────────────
  debbie_cinephile: [
    [
      {perso:'client', texte:"Blow Out vous avez vu ?"},
      {perso:'corey',  texte:"Il l'a vu cinq fois."},
      {perso:'client', texte:"La scène du micro dans la foule."},
      {perso:'corey',  texte:"Il va pleurer."},
      {perso:'client', texte:"C'est normal."},
    ],
    [
      {perso:'corey',  texte:"Debbie et le cinéphile."},
      {perso:'corey',  texte:"Deux personnes qui savent pourquoi le son compte."},
      {perso:'corey',  texte:"Ils ont échangé trois mots sur La Conversation."},
      {perso:'corey',  texte:"Coppola. 1974. Meilleur film sur l'écoute."},
      {perso:'corey',  texte:"Ils étaient d'accord."},
    ],
  ],

};

// ===================================================
// PAIRES COMPATIBLES
// ===================================================

const PAIRES_CLIENTS = [
  {a:'henderson',    b:'gamin_horreur', cle:'henderson_thea'},
  {a:'cinephile',    b:'concurrent',    cle:'cinephile_concurrent'},
  {a:'miguel',       b:'inconnu',       cle:'miguel_inconnu'},
  {a:'marine',       b:'etudiant',      cle:'marine_etudiant'},
  {a:'cinephile',    b:'collectionneur',cle:'cinephile_collectionneur'},
  {a:'femme_seule',  b:'henderson',     cle:'femme_henderson'},
  {a:'cowboy',       b:'marine',        cle:'cowboy_marine'},
  {a:'sam',          b:'gordon',        cle:'sam_gordon'},
  {a:'goth',         b:'sensible',      cle:'goth_sensible'},
  {a:'tim',          b:'gordon',        cle:'tim_gordon'},
  {a:'debbie',       b:'cinephile',     cle:'debbie_cinephile'},
];

function getCroisementDialogue(idA, idB, gameState) {
  const paire = PAIRES_CLIENTS.find(p =>
    (p.a === idA && p.b === idB) || (p.a === idB && p.b === idA)
  );
  if (!paire) return null;
  const pool = DIALOGUES_CLIENTS[paire.cle];
  if (!pool || !pool.length) return null;
  // Anti-répétition sur les croisements
  const key = 'crois_' + paire.cle;
  if (!gameState) return pool[Math.floor(Math.random()*pool.length)];
  if (!gameState._crois_joues) gameState._crois_joues = {};
  if (!gameState._crois_joues[key]) gameState._crois_joues[key] = [];
  const joues = gameState._crois_joues[key];
  let dispo = pool.map((_,i)=>i).filter(i=>!joues.includes(i));
  if (dispo.length === 0) { gameState._crois_joues[key] = []; dispo = pool.map((_,i)=>i); }
  const idx = dispo[Math.floor(Math.random()*dispo.length)];
  gameState._crois_joues[key].push(idx);
  return pool[idx];
}
