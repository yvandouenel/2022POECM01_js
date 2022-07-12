const fruits = [
  "banane",
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
console.log(`fruits_li `, fruits_li);

// utiliser filter pour ne garder que les fruits dont l'index est paire
