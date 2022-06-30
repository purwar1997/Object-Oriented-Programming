'use strict';

// in JS, arrays, sets, maps and functions are all objects
// in JS, objects have properties and methods under their __proto__ property

const arr = ['Shubham', 'Kunal'];

const object = {
  a: 20,
  b: 10,
};

const fun = function () {
  console.log('function called');
};

// primitives can also be converted into objects using constructors
// this is called boxing
let str = 'Hello';
console.log(str, typeof str);

str = new String(str);
console.log(str, typeof str);

let num = 200;
console.log(num, typeof num);

num = new Number(num);
console.log(num, typeof num);

let bool = new Boolean(true);
console.log(bool, typeof bool);

// after boxing, primitives can also can have their own methods and properties
console.log(bool.toString());
console.log(num.valueOf());
console.log(num.toString());
console.log(str.length);

// in JS, all objects have their prototype
// prototype in itself is an object, so it also has its own prototype i.e. child prototype

// arr => object
// arr.__proto__ => array
// arr.__proto__.__proto__ => object
// arr.__proto.__proto__.__proto__ => null
// this is called prototype chaining

// object
// object.__proto__ => object
// object.__proto__.__proto__ => null

const user1 = {
  name: 'Shubham',
  age: 24,
  getIntro() {
    return `${this.name}: ${this.age}`;
  },
};

const user2 = {
  name: 'Paras',
};

const user3 = {};

// firstProp() will be placed inside __proto__ property of all objects and can be accessed by all objects
Object.prototype.firstProp = function () {
  return `${this.name} is a bastard`;
};

// firstProp2() and getAge() will be placed inside __proto__ property of all objects not just user2 and user3
// because user2.__proto__ or user3.__proto__ is same as Object.Prototype

// Array.Prototype is same as arr.__proto__
// Function.Prototype is same as fun.__proto__

user2.__proto__.firstProp2 = function () {
  return `${this.name} is a great man`;
};

user3.__proto__.getAge = function () {
  return `User is ${this.age} years old`;
};

// prototypal inheritance
user2.__proto__ = user1; // user2 will inherit all the properties of user1
user3.__proto__ = user2; // user3 will inherit all the properties of user2 and user1
