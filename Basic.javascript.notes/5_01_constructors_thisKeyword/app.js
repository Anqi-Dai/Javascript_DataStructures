// Constructors in ES5.

function Person(name, dob) {
  // dob is for "date of birth", a string
  this.name = name;
  // the Date object in core JS will convert a string to a date obj
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    // below output the difference in milliseconds
    let diff = Date.now() - this.birthday.getTime();
    // convert the above to a date in normal format starting from 1970
    const ageDate = new Date(diff);
    // now minus the 1970 to get the actual age
    const age = ageDate.getUTCFullYear() - 1970;
    return age;
  };
}

const Angel = new Person("Angel", "5/11/1989");
console.log(Angel.calculateAge());
