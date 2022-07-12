
/**
 * fonction constructeur 
 * @param {String} brand 
 * @param {String} model 
 * @param {String} immatriculation 
 * @return {Object} this
 */
function Car(brand, model, immatriculation) {
  this.brand = brand;
  this.model = model;
  this.immatriculation = immatriculation;
  console.log(`this`, this);
}
// Ajout d'une propriété (de type de fonction donc une méthode) au prototype de la fonction constructeur Car
Car.prototype.dump = function () {
  console.log(`My car is a ${this.brand}, model ${this.model}, immatriculation ${this.immatriculation}`);
}
/* Car.prototype.pi = 3.14; */
Object.prototype.pi = 3.145878966;

// Instanciation  
const p307 = new Car("Peugeot", "307", "WS89B34");
console.log(`p307 : `, p307);
p307.dump();
console.log("pi", p307.pi);

const r25 = new Car("Renault", "25", "Wd58598");
