//number
let apples: number;
apples = 10;

const banana: number = 10;

//string
let speed: string = "fast";

//null && undefined
const nothingMuch: null = null;
const nothing: undefined = undefined;

//build in objects
const now: Date = new Date();

//Arrays
const colors: string[] = ["white", "brown"];
const numbers: number[] = [1, 2, 3];
const truths: boolean[] = [false, true];

//classes
class Car {

}
const car: Car = new Car()


// Object Literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

//function
function logSomething(message: string) : void {
    return undefined;
}

//when to use annotations
// 1) when a js functions returns any
const data = '{x: 1, y: "asda"}';

//JSON.parse() returns an any type
const coordenates: {x: number; y: string} = JSON.parse(data);
//coordenates.asd → Property 'asd' does not exist on type '{ x: number; y: string; }'

//2) when we declare a variable on one line then initialize it later
let isTrue: boolean;
isTrue = true

    //isTrue = 'asd' → Type 'string' is not assignable to type 'boolean'
