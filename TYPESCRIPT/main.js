"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName2(p);
//Classes and Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var empl1 = new Employee('Andrew');
console.log(empl1.employeeName);
empl1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Clark');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//Access Modifiers (public, private, protected)
// variables defaults to public
// private variables can only be accesed within the class it was created in
// protected variables can be accessed through the inheritance chain. but not 
// outside the chain
