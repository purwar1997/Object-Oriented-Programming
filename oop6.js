'use strict';

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// inside __proto__ property
Book.prototype.summary = function () {
  return `${this.title} is written by ${this.author} in year ${this.year}`;
};

// Instantiate an object based on Book() constructor
const book1 = new Book('Sapiens', 'Yuval Harrari', 2018);

console.log(book1.author);
console.log(book1.summary());

// Prototype Inheritance
function Magazine(category, ...args) {
  // using apply() method
  Book.apply(this, args); // an array of values will be passed
  this.category = category;
}

// inheriting prototype
Magazine.prototype = Object.create(Book.prototype);

// inside __proto__ property
Magazine.prototype.getCategory = function () {
  return `${this.title} is of ${this.category} category`;
};

const mag1 = new Magazine('Science', 'Nature', 'Richard', 2021);
const mag2 = new Magazine('Business', 'Forbes', 'Alex Smith', 2019);

console.log(mag1.summary());
console.log(mag2.getCategory());

// Tabloid() constructor
function Tabloid(title, author, year, month) {
  // using call() method
  Book.call(this, title, author, year); // individual values will be passed
  this.month = month;
}

Tabloid.prototype = Object.create(Book.prototype);

Tabloid.prototype.getMonth = function () {
  return `${this.title} is of ${this.month} month`;
};

const tab1 = new Tabloid('Fashion week', 'Alice Joe', 2022, 'November');
console.log(tab1.getMonth());
console.log(tab1.summary());

// setting constructors of child classes
Magazine.prototype.constructor = Magazine;
Tabloid.prototype.constructor = Tabloid;
