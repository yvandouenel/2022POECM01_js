// Récupération d'un élément du dom

let h1 = document.getElementById("h1");
console.log(`h1 : `, h1);
h1.remove();

const h2 = document.createElement("h2");
document.body.appendChild(h2);
h2.textContent = "Titre de niveau 2";
h2.setAttribute("class", "toto");
h2.setAttribute("id", "titi");

const li = document.querySelector("ul > li");
//li.setAttribute("style", "color:red");

const lis = document.querySelectorAll("ul > li");
lis.forEach((li, index) => {
  if (index % 2) li.setAttribute("style", "color:red");
})