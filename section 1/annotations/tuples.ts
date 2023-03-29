//  TUPLE → A tuple is a typed array with a pre-defined length and types for each index.

//tuples immitate an object but tuples don't have key-value pair, just value in this case the value type
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40]; //tuple

//type alias → is used for declaring a new custom type

type Drink = [string, boolean, number]; // this doesn't create an Array it creates a custom type named Drink so you can use it as type annotations for
//tuples or other data structures

const tea: Drink = ["brown", false, 0];
const sprite: Drink = ["clear", true, 40];
