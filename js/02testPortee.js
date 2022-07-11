
{
  const j = "test";// Portée locale au bloc de code 
  console.log(`j`, j);
}
// les variables déclarées avec let et const sont "block scope"

const test = () => {
  var i = 12;// portée locale à la fonction test
  console.log(`i`, i);
  // Le point permet d'accéder à une propriété
  // L'objet window récupère en propriétés toutes les variables globales
  for(let z = 0; z < 10; z++){
    console.log(`z : `, z);
  }
  

}
test();

// i n'existe pas dans le contexte global
//console.log(`i`, i);
let a = 58;
console.log(`a : `, a);
