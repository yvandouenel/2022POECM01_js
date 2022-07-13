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

const button = createDOMElement("button", "Ajouter un paragraphe", document.body);

const section1 = createDOMElement("section", "", document.body);
const section2 = createDOMElement("section", "", document.body);
let cpt = 0;
// Gestion de l'événement click
button.onclick = function (event) {

  createDOMElement("p", `${cpt++} lorem ipsum ...`, section1).onclick = function (e) {
    e.target.remove();
  }
}