// Objet littéral // JSON
const bob = {
  // Propriété
  firstname: "Bob",
  lastname: "Dylan",
  introduceMySelf: function () {
    console.log(`Hello my name is ${this.firstname} ${this.lastname}`);
  }
}

console.log(`bob : `, bob);
console.log(bob.firstname);
bob["introduceMySelf"]();


for (let key in bob) {
  console.log(key);
  console.log(bob[key]);
}

