// Constructors in ES5.

// in the below case, the calculateAge function doesn't change whether it's A or B. So we can put it in the prototype and don't flood our constructor with functions

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // dob is for "date of birth", a stringthe Date object in core JS will convert a string to a date obj
  this.birthday = new Date(dob);
}

// calculateAge function
Person.prototype.calculateAge = function() {
  // below output the difference in milliseconds
  let diff = Date.now() - this.birthday.getTime();
  // convert the above to a date in normal format starting from 1970
  const ageDate = new Date(diff);
  // now minus the 1970 to get the actual age
  const age = ageDate.getUTCFullYear() - 1970;
  return age;
};

// getFullName function
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// nameChangeAfterMarried function
Person.prototype.nameChangeAfterMarried = function(newLastName) {
  this.lastName = newLastName;
};

const Angel = new Person("Angel", "Dai", "5/11/1989");

let val;

val = Angel.calculateAge();
val = Angel.getFullName();
Angel.nameChangeAfterMarried("Zhou");
val = Angel.getFullName();
val = Angel;

// hasOwnProperty (check whether the constructor has XXX in its own property)
val = Angel.hasOwnProperty("firstName");
val = Angel.hasOwnProperty("name");
console.log(val);
