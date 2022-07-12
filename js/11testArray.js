const fruits = [
  "banane",
  "orange",
  "Kiwi"
];

console.log(`fruits`, fruits);
console.log(fruits[2]);
console.log(`Taille du tableau `, fruits.length);

fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});