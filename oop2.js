'use strict';

// let userOne = {
//   name: 'Shubham',
//   email: 'shubhampurwar35@gmail.com',

//   login() {
//     console.log(`${this.name} has logged in`);
//   },
//   logout() {
//     console.log(`${this.name} gas logged out`);
//   },
// };

// // accessing properties of an object
// console.log(userOne.email);
// console.log(userOne['name']);
// userOne.login();
// userOne['logout']();

// // adding new properties to an object
// userOne.age = 24;
// userOne.course = 'Btech';

// console.log(userOne);

// // adding new methods to an object
// userOne.signup = function () {
//   console.log(`${this.email} has signed up`);
// };

// userOne.signup();

// userOne.display = function () {
//   console.log(`${this.name} is a ${this.age} years old ${this.course} student`);
// };

// userOne.display();

// // updating values of existing properties
// userOne.email = 'purwar@outlook.com';
// userOne.age = 25;

// console.log(userOne);

// // . notation accepts only final property names
// // [] notation can accept dynamic variables and expressions
// let prop = 'name';
// console.log(userOne[prop]);

// prop = 'course';
// console.log(userOne[prop]);

// classes are used to create multiple objects of same type
// these objects will have similar properties and methods but different values

// constructor() is used to set properties of an object

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.status = null;
    this.score = 0;
  }

  signup() {
    console.log(`${this.name} has signed up.`);
    return this;
  }
  login() {
    console.log(`${this.name} has logged in.`);
    this.status = true;
    return this;
  }
  logout() {
    console.log(`${this.name} has logged out.`);
    this.status = false;
    return this;
  }
  updateScore() {
    this.score++;
    console.log(`${this.name} has a score of ${this.score}`);
    return this;
  }
}

// functions of new keyword
// 1. creates an empty object
// 2. sets the value of 'this' keyword to current object
// 3. invokes the constructor() function and passes the arguments

let userOne = new User('Shubham', 'shubham@gmail.com', 24);
let userTwo = new User('Suyash', 'suyash@outlook.com', 20);
let userThree = new User('Aman', 'gupta20@hotmail.com', 25);

// method chaining
// only possible when the method that is invoked returns an object
userOne.signup().login().logout();
userThree.logout().login();
userOne.updateScore().updateScore();
userTwo.signup().login().updateScore().updateScore().logout();

// class inheritance
// child class Admin will inherit all the properties and methods of parent/base class User
class Admin extends User {
  constructor(name, email, age, dept, contact) {
    // super() is used to call the constructor of super/base class
    // in this case, User class
    super(name, email, age);
    this.department = dept;
    this.contactNo = contact;
  }

  addUser(user) {
    users.push(user);
    return users;
  }
  // deleting users with outlook.com email id
  deleteUser() {
    return users.filter(user => user.email.endsWith('mail.com'));
  }
}

// objects based on Admin class
let adminOne = new Admin('Kapil', 'kapilclicks@gmail.com', 24, 'Art', '9897666776');
let adminTwo = new Admin('Prashant', 'pras1997@outlook.com', 24, 'Gaming', '9897887871');

// list of users
let users = [userOne, adminOne, adminTwo];

// requesting admin to add an user
console.log(adminOne.addUser(userTwo));
console.log(adminTwo.addUser(userThree));

// requesting admin to delete users
console.log(adminOne.deleteUser());

class SuperAdmin extends Admin {
  constructor(name, email, age, dept, contact, qual) {
    super(name, email, age, dept, contact);
    this.qualification = qual;
  }

  // function to delete all users
  clearUsers() {
    users.splice(0, users.length);
    return users;
  }
}

let superAdmin = new SuperAdmin('Aviroop', 'aviroop@ai.com', 40, 'computer', '0123456789', 'PhD');
console.log(superAdmin.clearUsers());
