'use strict';

const studentProto = {
  bio() {
    return `${this.name} is a ${this.age} years old ${this.course} student`;
  },

  gradStatus() {
    return `${this.name} is ${this.isGraduated ? '' : 'not'} graduated`;
  },
};

// setting methods inside __proto__ property
const student1 = Object.create(studentProto);

// setting properties
student1.name = 'Shubham';
student1.age = 24;
student1.course = 'BCA';
student1.isGraduated = true;

// another way of creating object
const student2 = Object.create(studentProto, {
  name: { value: 'Suyash' },
  age: { value: 19 },
  course: { value: 'Btech' },
  isGraduated: { value: false },
});

console.log(student2.name, student2.course);
console.log(student2.gradStatus());
console.log(student2.bio());

const userProto = {
  signup() {
    this.isRegistered = true;
  },
  login() {
    this.isLogged = true;
  },
  logout() {
    this.isLogged = false;
  },
};

// all these methods will be placed inside __proto__ property of user object
const user = Object.create(userProto);

user.name = 'Kapil';
user.email = 'kapil@clicks.com';
user.password = 'clicks12';

// here Users() is not a constructor() but a normal function
// hence objects can be created without using constructor(), just by using normal functions
// for that, Object.create() method has to be used

function Users(name, email, password) {
  // signup(), login() and logout()methods will be inside __proto__ property
  const user = Object.create(userProto, {
    name: { value: name },
    email: { value: email },
    password: { value: password },
    // aboutUser() will be outside __proto__ property
    aboutUser: {
      value: function () {
        return `${this.name}'s email id and password are ${this.email} and ${this.password} respectively`;
      },
    },
  });

  return user;
}

// no need to use new keyword because of Object.create() method
const user1 = Users('Aman', 'aman@ai.com', 'aman90');
const user2 = Users('John', 'johndoe@gmail.com', 'john230');

console.log(user2.aboutUser());

// objects can be created using three ways
// 1. using class
// 2. using constructor
// 3. using normal functions

// methods of object can be present
// 1. inside __proto__ property
// 2. outside __proto__ property ( with properties)
