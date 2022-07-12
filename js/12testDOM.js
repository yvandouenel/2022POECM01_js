/**
 * Crée un élément du DOM et le retourne
 * @param {String} markupname 
 * @param {String} text 
 * @param {DomElement} parent 
 * @param {Array} attributes
 * @return {DomElement}
 */
function createDOMElement(markupname, text, parent, attributes = []) {
  const dom_element = document.createElement(markupname);
  dom_element.textContent = text;
  parent.appendChild(dom_element);

  if (attributes.length) {
    attributes.forEach((attribute => {
      if (attribute.name && attribute.value) {
        dom_element.setAttribute(attribute.name, attribute.value);
      }
    }))
  }
  return dom_element;
}



// Exo boutons dans nav

// Création d'une balise header
const header = createDOMElement("header", "", document.body);

// Création d'une balise nav
const nav = createDOMElement("nav", "", header);

// Boucle pour créer les 4 boutons
for (let i = 0; i < 4; i++) {
  if (i == 0) createDOMElement("button", `Item ${i}`, nav, [{ name: "style", value: "color:red" }]);
  else createDOMElement("button", `Item ${i}`, nav);
}