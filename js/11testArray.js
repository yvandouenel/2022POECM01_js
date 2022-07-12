const fruits = [
  "banane",
  "fruit de la passion",
  "orange",
  "kiwi"
];

console.log(`fruits`, fruits);
console.log(fruits[2]);
console.log(`Taille du tableau `, fruits.length);
const fruits_length = fruits.push('cerise');
console.log(`fruits_length : `, fruits_length);
//console.log(`Element supprimé : `, fruits.pop());

fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

const fruits_li = fruits.map(fruit => `<li>${fruit}</li>`);
console.log(`fruits `, fruits);

// utiliser filter pour ne garder que les fruits dont l'index est pair

const fruits_pairs = fruits.filter((fruit, index) => index % 2 == 0);
console.log(`fruits_pairs`, fruits_pairs);

const fruits_impairs = fruits.filter((fruit, index) => {
  return index % 2 != 0;
});
console.log(`fruits_impairs`, fruits_impairs);
// Classer du fruit qui comporte le moins de caractères à celui qui en comporte le plus
fruits.sort((a, b) => a.length - b.length);
console.log(`fruits classé part taille de chaîne  `, fruits);


