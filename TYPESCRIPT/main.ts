export {}
let message = "Welcome back";
console.log(message);

// => Variable Declaration:
let x = 10;
const y = 20;

let sum = 30;
//const must always be initiated with a value
const title = 'epic';

// => Variable Types: pros: (static type checking, intellisense)
//basic types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'andrew';
let sentence: string = `My name is ${name} I am a beginner in Typescript`;

console.log(sentence);

//subtypes
let u: undefined = undefined;
let n: null = null;

let isNew: boolean = null;
let myName: string = undefined;

//arrays
let list1: number[] = [ 1, 2, 3 ]
let list2: Array<number> = [ 1, 2, 3 ]

let person1: [string, number] = ['Greg', 88]

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green

console.log(c);
