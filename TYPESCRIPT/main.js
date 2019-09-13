"use strict";
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
// => Variable Declaration:
var x = 10;
var y = 20;
var sum = 30;
//const must always be initiated with a value
var title = 'epic';
// => Variable Types: pros: (static type checking, intellisense)
//basic types
var isBeginner = true;
var total = 0;
var name = 'andrew';
var sentence = "My name is " + name + " I am a beginner in Typescript";
console.log(sentence);
//subtypes
var u = undefined;
var n = null;
var isNew = null;
var myName = undefined;
//arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Greg', 88];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Jameis';
// => danger zone:
var myVariable = 10;
console.log(myVariable.name);
// notice no errors were thrown..
// how to fix
var myVariable2 = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// (myVariable2 as string).toUpperCase();
// 2 major concepts revolving typescript
// Type Inference
var a;
a = 10;
a = true;
var b = 10;
// intelisense senses that variable b is a number type but not a
// because a is defined without a value
// Union of Types
var multiType;
multiType = 20;
multiType = true;
// => Functions
function add(num1, num2) {
    return num1 + num2;
}
// optional paramaters
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
// default parameters
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add(10, 5));
//Interfaces
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
