'use strict';

// creating objects without using class keyword
// objects can be created by only using constructor() function

function User(name, email) {
  this.name = name;
  this.email = email;
  this.isOnline = false;
  this.isRegistered = false;

  // login() and logout() won't be inside the _proto_ property
  this.login = function () {
    console.log(`${this.name} has logged in`);
    this.isOnline = true;
    return this;
  };

  this.logout = function () {
    console.log(`${this.name} has logged out`);
    this.isOnline = false;
    return this;
  };
}

let userOne = new User('shubham', 'shubham@gmail.com');
let userTwo = new User('naval', 'naval@ai.com');
let userThree = new User('kunal', 'shah@outlook.com');

// to declare methods inside the _proto_ property
// signup() and status() will be inside the _proto_ property

User.prototype.signup = function () {
  console.log(`${this.email} has signed up`);
  this.isRegistered = true;
  return this;
};

User.prototype.status = function () {
  console.log(`${this.name} has ${this.isRegistered ? 'signed up' : 'not signed up'}`);
  console.log(`${this.name} has ${this.isOnline ? 'logged in' : 'logged out'}`);
};

// creating an Admin class that inherits all the properties and methods of User class
function Admin(dept, contact, ...values) {
  this.department = dept;
  this.contactNo = contact;
  // Because of User.apply(), Admin will inherit all the properties of User expect methods inside the __proto__ property
  // 'this' will pass the current object and values parameter will always be an array
  User.apply(this, values);
}

// signup() and status() won't be inherited because they are inside the __proto__ property of User class
// to inherit all the methods inside __proto__ property of User class

Admin.prototype = Object.create(User.prototype);

let adminOne = new Admin('Art', '9897887871', 'Kapil', 'Kapil12@hotmail.com');
let adminTwo = new Admin('Gaming', '8171619162', 'Prashant', 'gamerboy@ai.com');

console.log(adminOne.name);
console.log(adminTwo.email);
console.log(adminOne.login());
console.log(adminTwo.logout());

console.log(adminOne.signup());
console.log(adminTwo.status());

let users = [userOne, userTwo, adminOne, adminTwo];

Admin.prototype.deleteUser = function (user) {
  return users.filter(u => u.email !== user.email);
};

Admin.prototype.addUser = function (user) {
  users.push(user);
  return users;
};

console.log(adminOne.deleteUser(userOne));
console.log(adminTwo.deleteUser(userTwo));
console.log(adminOne.addUser(userThree));

// creating a superadmin class that will inherit all the properties and methods of admin class
function superAdmin(qual, ...values) {
  this.qualification = qual;
  Admin.apply(this, values);
}

// inheriting all the methods inside __proto__ of its parent class Admin
superAdmin.prototype = Object.create(Admin.prototype);

// having its own methods
superAdmin.prototype.clearUsers = function () {
  users.splice(0, users.length);
  return users;
};

let superadmin = new superAdmin('PhD', 'Computer', '4354690867', 'Sonu', 'sonu@outlook.com');
console.log(superadmin.clearUsers());
