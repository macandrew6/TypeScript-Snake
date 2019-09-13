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
