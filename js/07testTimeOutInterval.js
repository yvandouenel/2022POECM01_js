// setTimeout est une higher order function
/* const timeout_id = window.setTimeout(() => { // callback
  console.log(`Hello World`);
}, 2000);
//clearTimeout(timeout_id);

setInterval(() => {
  console.log(`Hello World dans setIntervall`);
}, 2000) */

// Exercice (un peu vicieux)
// en utilisant la boucle for ou mieux une fonction
// récursive  et la méthode setTimeout, faire un script qui 
// affiche dans la console 1, 2, 3, ... 10 à 1 seconde d'intervalle

/* for (let i = 1; i < 11; i++) {
  setTimeout(() => {
    console.log(`i : `, i);
  }, 1000 * i)
} */

function dumpI(i) {
  setTimeout(() => {
    console.log(`i : `, i);
    i++;
    if (i < 11) dumpI(i);

  }, 1000)
}
dumpI(1);
