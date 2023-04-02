// use Object.create to manually set te prototype of an object

// this object will work as the protoype to all the instances created
const PersonProto = {
  getAge() {
    return new Date().getFullYear() - this.birthYear;
  },
};

// Object.create returns a brand new object that is linked to the proto that were passed as a parameter
const steven = Object.create(PersonProto);

console.log(steven.__proto__); // { getAge: [Function: getAge] }
