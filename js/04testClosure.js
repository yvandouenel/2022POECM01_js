function creerFonction() {
  let nom = "Mozilla";
  function afficheNom() {
    console.log(nom);
  }
  function getName() {
    return nom;
  }
  function setName(new_name) {
    nom =  new_name;
    return nom;
  }
  return setName;
}

/* let maFonction = creerFonction();// à ne pas confondre avec let maFonction = creerFonction;
// scope global
maFonction(); */
//const name = creerFonction()();
const new_name = creerFonction()("toto");
console.log(`new_name : `, new_name);