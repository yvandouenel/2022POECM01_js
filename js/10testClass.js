class Circle {
  // propriété de classe
  static pi = 3.14;

  // Constructeur
  constructor(name, ray) {
    this.name = name;
    this.ray = ray;
  }
  // Méthodes 
  calculateArea() {
    return Circle.pi * this.ray * this.ray;
  }
  toString() {
    // surcharge de la méthode toString
    console.log(`toS3tring du prototype de Circle`);
  }
}

class ColoredCircle extends Circle {
  constructor(name, ray, color) {
    super(name, ray);
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

const red_circle = new ColoredCircle("red_circle", 10, "red");
console.log(`red_circle`, red_circle);
console.log(`red_circle.calculateArea()`, red_circle.calculateArea());
console.log(`red_circle.getColor()`, red_circle.getColor());

/* 

const small_circle = new Circle("small", 2);
console.log(`small : `, small_circle);

console.log(`aire de small `, small_circle.calculateArea()); */
