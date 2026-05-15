// ===================================================
// REWIND PARADISE — DIALOGUES CLIENTS
// Échanges entre clients qui se croisent
// 20% de chance si deux clients compatibles
// se suivent dans la file
// ===================================================

const DIALOGUES_CLIENTS = {

  // henderson + gamin_horreur
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
  ],

  // cinephile + concurrent
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
  ],

  // miguel + inconnu
  miguel_inconnu: [
    [
      {perso:'corey',  texte:"Ils se connaissent."},
      {perso:'corey',  texte:"Pas ici. Ailleurs."},
      {perso:'corey',  texte:"Le regard. Une seconde. Puis plus rien."},
    ],
  ],

  // marine + etudiant
  marine_etudiant: [
    [
      {perso:'client', texte:"Die Hard c'est un film de guerre."},
      {perso:'corey',  texte:"Non."},
      {perso:'client', texte:"Un peu si."},
      {perso:'corey',  texte:"Non."},
    ],
  ],

  // cinephile + collectionneur
  cinephile_collectionneur: [
    [
      {perso:'client', texte:"Evil Dead."},
      {perso:'corey',  texte:"Il l'a vu à sa sortie."},
      {perso:'client', texte:"J'étais là où il fallait être."},
      {perso:'corey',  texte:"Sam Raimi."},
      {perso:'client', texte:"M. Beaumont. Enchanté."},
    ],
  ],

  // femme_seule + henderson
  femme_henderson: [
    [
      {perso:'client', texte:"Ghost est sorti ?"},
      {perso:'corey',  texte:"Déjà loué."},
      {perso:'client', texte:"Par qui ?"},
      {perso:'corey',  texte:"Je peux pas dire."},
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
];

function getCroisementDialogue(idA, idB) {
  const paire = PAIRES_CLIENTS.find(p =>
    (p.a === idA && p.b === idB) || (p.a === idB && p.b === idA)
  );
  if (!paire) return null;
  const pool = DIALOGUES_CLIENTS[paire.cle];
  if (!pool || !pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}
