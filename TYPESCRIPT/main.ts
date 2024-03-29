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

let randomValue: any = 10;
randomValue = true;
randomValue = 'Jameis';

// => danger zone:
let myVariable: any = 10;
console.log(myVariable.name);
// notice no errors were thrown..

// how to fix
let myVariable2: unknown = 10;

function hasName(obj: any): obj is { name: string  } {
  return !!obj && typeof obj === "object" && "name" in obj
}
if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}
// (myVariable2 as string).toUpperCase();

// 2 major concepts revolving typescript
// Type Inference
let a;
a = 10;
a = true;

let b = 10;
// intelisense senses that variable b is a number type but not a
// because a is defined without a value

// Union of Types
let multiType: number | boolean;
multiType = 20;
multiType = true;

// => Functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// optional paramaters
function add2(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  }
  return num1;
}
// default parameters
function add3(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  }
  return num1;
}

console.log(add(10, 5));

//Interfaces
function fullName(person: {firstName: string, lastName: string}) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};

fullName(p);
// problems arise when objects have more properties (solution follows):
interface Person {
  firstName: string,
  lastName: string
}

function fullName2(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
fullName2(p)

//Classes and Access Modifiers

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let empl1 = new Employee('Andrew');
console.log(empl1.employeeName);
empl1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`Manager delegating task`)
  }
}

let m1 = new Manager('Clark');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//Access Modifiers (public, private, protected)

// variables defaults to public
// private variables can only be accesed within the class it was created in
// protected variables can be accessed through the inheritance chain. but not 
// outside the chain