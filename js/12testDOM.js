/**
 * Crée un élément du DOM et le retourne
 * @param {String} markupname 
 * @param {String} text 
 * @param {DomElement} parent 
 * @param {Array} attributes
 * @return {DomElement}
 */
function createDOMElement(markupname, text, parent, attributes) {
  const dom_element = document.createElement(markupname);
  dom_element.textContent = text;
  parent.appendChild(dom_element);

  attributes.forEach((attribute => {
    if (attribute.name && attribute.value) {
      dom_element.setAttribute(attribute.name, attribute.value);
    }
  }))
  return dom_element;
}

createDOMElement(
  "p",
  "texte",
  document.body,
  [
    { name: "class", value: "toto" },
    { name: "id", value: "titi" },
    { name: "lang", value: "fr" }
  ]);

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