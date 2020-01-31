//Реализовать цепочку протитопов с помощью Object.create.
let objA = new Object({
    name: 'Anton',
    birthDate: 1985,
    sayHello: function() {
        return `Hello: ${this.name}`;
    }
});

let objB = Object.create(objA, {
    name: {
      value: 'Peter'
    },
    birthDate: {
      value: 1999,
    },
    calculateAge: {
      get() {
        return new Date().getFullYear() - this.birthDate;
      }
    } 
});

let objC = Object.create(objB, {
  name: {
    value: 'Valera'
  },
  birthDate: {
    value: 1992
  }
})
   

console.log(objB.sayHello());
console.log(objB.calculateAge);
console.log(objC.sayHello(), objC.calculateAge);
/////////
// Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)
/////////

let objD = new Object({
  name: 'Karl',
  birthDate: 1989,
  sayHello: function() {
      return `Hello: ${this.name}`;
  }
});

let objE = new Object({
  name: 'Michael',
  birthDate: 1975,
  gender: 'male',
  __proto__: objD,
  showGender: function() {
      return `Gender of ${this.name} is ${this.gender}`;
  }
});

let objF = new Object({
  name: 'Michael',
  birthDate: 1979,
  gender: 'male',
});
Object.setPrototypeOf(objF, objE);
console.log(objE.sayHello());
console.log(objF.showGender());

//Реализовать цепочку протитопов с помощью функций конструкторов.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`hi ${this.name}`);
  }
}

let person = new Person('Peter', 22);
person.sayHello();

function Oldperson(name, age) {
  this.name = name;
  this.age = age;
}
Oldperson.prototype = person;

let oldperson = new Oldperson('Sam', 76);
oldperson.sayHello();