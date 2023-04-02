"use strict";

//how contructor function works

// Constructor functions have to start with a capital letter by convention
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  console.log(this); // Person { firstName: 'Alex', birthYear: 1998 }
};

function Car(model, color) {
  this.model = model;
  this.color = color;
}

const alex = new Person("Alex", 1998);
const civic = new Car("civic", "brown");

// 1. a new object is created
// 2. when the function is called, the this is bound to the new object ({}) created
// 3. the new object is linked to its prototype
// 4. function automatically returns the object

console.log(alex); // Person { firstName: 'Alex', birthYear: 1998 }
console.log(civic); // Car { model: 'civic', color: 'brown' }

//operator to know if is intanciated by some constructor
console.log(alex instanceof Person); // true
console.log(civic instanceof Person); //false

module.exports = {
  Person,
  Car,
};
