function getRandomId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function Car(model, brand, year) {
  this.model = model;
  this.brand = brand;
  this.year = year;
  var id = getRandomId();
  this.getId = function () {
    return id
  }
}
Car.prototype.getName = function () {
  return this.model + ' ' + this.brand + ' ' + this.year
}
var auto1 = new Car('sedan', 'toyota', 2010);
var auto2 = new Car('sedan', 'Fork', 2015);
var auto3 = new Car('sedan', 'Audi', 2019);

/* auto1.name = function(){
  return this.brand + " " + this.year;
}; */

console.log(auto1);
console.log(auto1.getId());
console.log(auto1.getName());
console.log(auto2);
console.log(auto2.getId());
console.log(auto2.getName());
console.log(auto3);
console.log(auto3.getId());
console.log(auto3.getName());
/* console.log(auto1.name()) */