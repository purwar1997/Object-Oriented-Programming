// let user = {
//   name: "Shubham",
//   email: "shubham@hotmail.com",
//   age: null,
//   login() {
//     console.log(`${this.email} has logged in`);
//   },
//   logout() {
//     console.log(`${this.email} has logged out`);
//   },
// };

// // to access properties
// console.log(user.email);

// // to access methods
// console.log(user.logout());

// // updating values of properties
// user.name = "Paras";
// user.email = "paras@gmail.com";

// console.log(user);

// // adding new properties
// user.password = "paras201";
// user.signup = function () {
//   console.log(`${this.name} has signed up`);
// };

// console.log(user);

// // [] notation can also be used to access values
// console.log(user["email"]);
// console.log(user["login"]());

// // [] can accept variables and expressions
// let prop = "name";
// console.log(user[prop]);

// prop = "email";
// console.log(user[prop]);

// // accessing all the values of objects
// for (let key of Object.keys(user)) {
//   console.log(user[key]);
// }

// // updating a property after setting it to null
// user.age = 24;

// classes in javascript
// classes are used to create multiple objects that contain same properties but different values

// constructor() inside class creates new objects
// constructor() gets invoked everytime a new object is created
// constructor() is only used to set the values of properties. It can not contain methods.

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.score = 0;
  }
  login() {
    console.log(this.email, 'has logged in');
    return this;
  }
  logout() {
    console.log(this.email, 'has logged out');
    return this;
  }
  signup() {
    console.log(this.name, 'has signed up');
    return this;
  }
  updateScore() {
    this.score++;
    console.log(`${this.name} score is ${this.score}`);
    return this;
  }
}

// new keyword
// 1. creates a new empty object
// 2. sets the value of this keyword to that new empty object
// 3. calls the constructor() function

// constructor() function of class User will get invoked and arguments will be passed

let userOne = new User('Shubham', 'shubham@outlook.com', 'opo90');
let userTwo = new User('Aman', 'aman90@gmail.com', 'aman123');
let userThree = new User('Paras', 'paras1997@hotmail', 'falcon3');

// method chaining is possible only when an object gets returned
console.log(userTwo.login().logout().signup());
console.log(userOne.signup().login());
console.log(userOne.updateScore().updateScore());

// class inheritance
// a new class Admin will get created that will inherit all the properties and methods of User class
// Admin class will also contain its own properties like deleteUser() other than User class properties

class Admin extends User {
  constructor(name, email, password, contactNo) {
    // super() is used to call the constructor() function of the super or parent class
    super(name, email, password);
    this.contactNo = contactNo;
  }
  deleteUser(user) {
    return users.filter(u => u.name !== user.name);
  }
}

// objects based on Admin class
let adminOne = new Admin('Suyash', 'suyash4035@gmail.com', 'pass2', '9897887871');
console.log(adminOne);

let adminTwo = new Admin('John', 'john@js.com', 'pass12', '9411869953');
console.log(adminTwo);

let users = [userOne, userTwo, userThree, adminOne, adminTwo];
console.log(adminOne.deleteUser(userOne));
console.log(adminTwo.deleteUser(userThree));

// creating objects without using classes
// here student is not a class but a constructor() function that will create objects

function Student(name, age, marks, fees, status) {
  this.name = name;
  this.age = age;
  this.marks = marks;
  this.fees = fees;
  this.status = status;
  // here result() method won't be inside the prototype property
  this.result = function () {
    console.log(`${this.name} has ${this.marks > 40 ? 'passed' : 'failed'}`);
  };
}

let stu1 = new Student('Chris', 18, 90, true, 'joined');
let stu2 = new Student('Jack', 20, 30, false, 'not joined');

console.log(stu1.name);
console.log(stu2.age);
stu1.result();
stu2.result();

// to define methods inside the prototype property
// feesPaid() and displayStatus() methods will be inside the prototype property

Student.prototype.feesPaid = function () {
  console.log(this.fees ? 'Fees paid' : 'Fees not paid');
};

stu1.feesPaid();
stu2.feesPaid();

Student.prototype.displayStatus = function () {
  console.log(`${this.name} has ${this.status} college`);
};

stu1.displayStatus();
stu2.displayStatus();

// here coordinator() is a constructor() function that will create objects
function Coordinator(coordinate, contactNo, ...args) {
  this.coordinate = coordinate;
  this.contactNo = contactNo;
  // 'this' keyword will pass the current object
  // to inherit properties of student
  Student.apply(this, args);
}

// to inherit methods of Student inside its prototype property
Coordinator.prototype = Object.create(Student.prototype);

let coord = new Coordinator('Dance', '8171619162', 'Mark', 22, 100, true, 'joined');

console.log(coord.fees);
console.log(coord.coordinate);
console.log(coord.result());
console.log(coord.feesPaid());
console.log(coord.displayStatus());

// adding methods to the prototype property of Coordinator
Coordinator.prototype.display = function () {
  console.log(this.name, 'coordinates', this.coordinate);
  console.log(`Contact ${this.name} by ${this.contactNo}`);
};

const students = [stu1, stu2, coord];

// remove student that has not joined college
Coordinator.prototype.removeStudent = function () {
  return students.filter(stu => stu.status === 'joined');
};

console.log(coord.removeStudent());
