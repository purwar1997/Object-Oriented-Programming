'use strict';

// string as a primitive
const s1 = 'Python';
console.log(typeof s1);

// string as an object
// constructor function String() is invoked to create a string object
const s2 = new String('Python');
console.log(typeof s2);

// global window object is the parent object which contains all the web API's inside it
// this keyword in a global scope refers to window object

let num = 120;
// let -> keyword
// num -> indentifier/variable
// 120 -> literal/constant

// object literal
const book = {
  title: 'Shoe Dog',
  author: 'Phil Knight',
  year: 2016,
  pageCount: 400,

  description: function () {
    return 'This book is an autobiography of Phil Knight';
  },

  summary: function () {
    return `${this.title} is written by ${this.author} in the year ${this.year}`;
  },
};

console.log(book.author);
console.log(book['pageCount']);

console.log(book.summary());
console.log(book['description']());

let key = 'title';
console.log(book[key]);

key = 'year';
console.log(book[key]);

// createBook() is a constructor function
function createBook(title, author, year, pageCount, description) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pageCount = pageCount;

  // description() won't be inside __proto__ property
  this.description = function () {
    return description;
  };
}

// summary() will be inside __proto__ property
createBook.prototype.summary = function () {
  return `${this.title} is written by ${this.author} in the year ${this.year}`;
};

// objects are being created by invoking constructor function
const book1 = new createBook('Elon Musk', 'Ashlee Vance', 2014, 360, 'Biography of Elon Musk');
const book2 = new createBook('Steve Jobs', 'Walter Isaacson', 2012, 560, 'Biography of Stve Jobs');

console.log(book1, book2);
console.log(book1.description());
console.log(book2.summary());

// inheritance
function library(location, owner, ...args) {
  this.location = location;
  this.owner = owner;
  createBook.apply(this, args); // args will be an array

  // outside of __proto__
  this.ownedBy = function () {
    return `This library is owned by ${this.owner}`;
  };
}

library.prototype.basedIn = function () {
  return `This library is based in ${this.location}`;
};

library.prototype.contains = function () {
  return `This library contains book ${this.title} written by ${this.author}`;
};

// to inherit __proto__ of parent class
library.prototype = Object.create(createBook.prototype);

const library1 = new library(
  'Mumbai',
  'Shubham',
  'Bhagat Singh',
  'Chaman Lal',
  2010,
  600,
  'Collection of Bhagat Singh writings'
);

const library2 = new library(
  'Agra',
  'Yash',
  'Veer Savarkar',
  'Vikram Sampath',
  2019,
  700,
  'Biography of Veer Savarkar'
);

console.log(library1.year, library1.title, library1.description());
console.log(library2.owner, library2.location, library2.summary(), library2.description());
