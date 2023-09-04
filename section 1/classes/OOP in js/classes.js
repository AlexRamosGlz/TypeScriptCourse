//classes in js are not really classes as in other languages, there just a new syntax so new developer whom have workd with OOP languages can have a smooth transition into js OOP

// ES6 classes are still based in prototype inheritance / delegation, so PersonCl it's an special function that creates new Objects and with it's contructor method
//so this is iqual as const Person = function() {...}
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //and to add new methods to the Object Protoype we only have to declear them inside the class
  //so this is iqual to Person.prototype.getAge = function() {...}
  get getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getJob() {
    return this.job;
  }

  // static methods or properties are not accesible outside the class
  static logSomething() {
    console.log("hello there");
  }
}

//intantiate a new Person Object
const jessica = new PersonCl("Jessica", 1998);

console.log(jessica.getAge);

//with all this knowledge, now we can add a new method as if were normal prototype inheritance / delegation
PersonCl.prototype.setJob = function (job) {
  this.job = job;
};

//and then call it
jessica.setJob("Developer"); // no Error

// PersonCl can call it's static method
PersonCl.logSomething();

// it's object can't
jessica.logSomething(); // jessica.logSomething is not a function

console.log(jessica.getJob()); // Developer

// 1. Classes are NOT hoisted (we can't use them before they are declared in the code)
// 2. Class are first-class citizens (we can pass them into function and also return them from function)
// 3. classes are executed in strict mode

// → → → → → → → inheritance between ES6 Classes ← ← ← ← ← ← ←

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, career) {
    super(firstName, birthYear);
    this.career = career;
  }

  logIntrodue() {
    console.log(`Hello im ${this.firstName} and i am a ${this.career}`);
  }
}

const riley = new StudentCl("Riley", 1996, "Computer Science");

riley.getAge();