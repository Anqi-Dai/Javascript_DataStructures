// The ES6 classes

/*
The ES6 uses classes to do object oriented programming, just like many other languages including python.

You can write methods outside the constructor.

Static is to define functions that don't rely on a certain instance. how to call such methods is specified below.
*/

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `How are you doing ${this.firstName}`;
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const Angel = new Person("Angel", "Dai", "5-11-1989");
Angel.getsMarried("Zhou");

let val;
val = Angel;
val = Angel.greeting();
val = Angel.calculateAge();
val = Person.addNumbers(1, 1);
console.log(val);
