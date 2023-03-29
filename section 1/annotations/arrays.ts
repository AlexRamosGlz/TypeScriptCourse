//type inference in arrays
const carBrands = ["Ford", "Honda", "Ferrari"]; // const carBrands: string[]

//nested arrays with type annotation
const nestedArray: string[][] = [["nested"], ["array"]];

//TS can do type inference when extracting values from an array
const hondaCivic = carBrands[1]; //const hondaCivic: string
const fordFiesta: number = carBrands[0]; // Type 'string' is not assignable to type 'number'

//TS can prevent us from adding incompatible values to the array
const releaseDates: number[] = [1998, 1999, 2000];
releaseDates.push("2001"); //Argument of type 'string' is not assignable to parameter of type 'number'.

//we can get help with map, forEach, reduce functions
releaseDates.forEach((date) => {
  //each iterations of the releaseDates array will autocomplete with 'number' type functions since releaseDates is an array of numbers.
  console.log(date.toString());
});

//flexible - arrays can still contain multiple different types
const numberOrString: (number | string)[] = [];

numberOrString.push("string");
numberOrString.push(1);
numberOrString.push(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
