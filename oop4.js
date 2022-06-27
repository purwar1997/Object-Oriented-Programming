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
// keys are always of string type
// values can be of any type

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

// CreateBook() is a constructor function
function CreateBook(title, author, year, pageCount, description) {
  // this refers to the object being instansiated
  this.title = title;
  this.author = author;
  this.year = year;
  this.pageCount = pageCount;

  // description() won't be inside __proto__ property
  this.description = function () {
    return description;
  };
}

// summary() and revise() will be inside __proto__ property
CreateBook.prototype.summary = function () {
  return `${this.title} is written by ${this.author} in the year ${this.year}`;
};

CreateBook.prototype.revise = function (newYear) {
  this.year = newYear;
  // revised property will get created when revise() is invoked
  this.revised = true;
};

// Instantiate objects based on Createbook() class
// objects are being created by invoking constructor function
const book1 = new CreateBook('Elon Musk', 'Ashlee Vance', 2014, 360, 'Biography of Elon Musk');
const book2 = new CreateBook('Steve Jobs', 'Walter Isaacson', 2012, 560, 'Biography of Stve Jobs');

console.log(book1, book2);
console.log(book1.description());
console.log(book2.summary());
book1.revise(2020);

// prototype inheritance
function Library(location, owner, ...args) {
  this.location = location;
  this.owner = owner;
  CreateBook.apply(this, args); // args will be an array

  // outside of __proto__
  this.ownedBy = function () {
    return `This library is owned by ${this.owner}`;
  };
}

// to inherit __proto__ of parent class
// Library will inherit all the functions inside __proto__ of Createbook
Library.prototype = Object.create(CreateBook.prototype);

// inside __proto__ property
Library.prototype.basedIn = function () {
  return `This library is based in ${this.location}`;
};

Library.prototype.contains = function () {
  return `This library contains book ${this.title} written by ${this.author}`;
};

const library1 = new Library(
  'Mumbai',
  'Shubham',
  'Bhagat Singh',
  'Chaman Lal',
  2010,
  600,
  'Collection of Bhagat Singh writings'
);

const library2 = new Library(
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

// to access all the keys of an object
console.log(Object.keys(book1));
console.log(Object.keys(library2));

// to access all the values of an object
console.log(Object.values(book2));
console.log(Object.values(library1));

// to access both keys and values
console.log(Object.entries(book1));

// all three methods will return an array
