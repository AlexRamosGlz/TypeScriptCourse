const { Person, Car } = require("./constructors");

//Prototypes

// set a new protoype method

//now we decleare a method all the way to the prototype in order to have a good practice, becuase if we decleare this same method in the constructor function then the method
//will be copied to the new object created every time the constructor function is called and therefore we never achieve prototypal delegation / inheritance
Person.prototype.calAge = function () {
  // notice that the this will be set to the object that is calling the method
  return new Date().getFullYear() - this.birthYear;
};

console.log(Person.prototype); // { calAge: [Function (anonymous)] }

const alice = new Person("Alice", 2000);
console.log(alice.calAge()); // 23

//check if an object protoype is the same as some constructor

//__proto__ returns the prototype of the object
console.log(alice.__proto__);

// with this line of code, the object prototype is checked against the constructor
// keep in mind that Person.protoype is not the prototype of Person, but instead  it is what's gonna be used as the prototype of all the objects
//that are created with the person constructor function.
console.log(alice.__proto__ === Person.prototype); // true

// → → → → → → → inheritance beteewn constructor functions ← ← ← ← ← ← ←

const Student = function (firstName, birthYear, career) {
  // call method help us set the this keydword to the new object created by instantiating Student adn this allows to use the Person's constructor in
  // the Student's constructor
  Person.call(this, firstName, birthYear);
  this.career = career;
};

// Object.create is used to Student inherit Person's protoype, so Student now can use Person's methods

// Note that this lines of code has to first before any other prototype methods decleartion
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hello im ${this.firstName} and i am a ${this.career}`);
};

const mike = new Student("Mike", 2001, "lawyer");

mike.introduce();

console.log(mike.__proto__); // Person { introduce: [Function (anonymous)] }
console.log(alice.__proto__); // alice proto remains the same, so mike didn't modify it
