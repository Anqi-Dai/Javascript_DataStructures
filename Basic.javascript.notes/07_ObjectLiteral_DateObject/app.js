// Object literals
let me = {
  firstName: "Anqi",
  lastName: "Dai",
  location: {
    city: "Boston",
    state: "MA"
  },
  major: "bioinformatics",
  hobbies: ["reading", "music"],
  age: 22,
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val = me.firstName;
val = me.location.state;
val = me.hobbies[1];
val = me.getBirthYear();

// console.log(val);

// loop through an array of objects
let people = [
  { name: "Jane", age: 28 },
  { name: "Lisa", age: 24 },
  { name: "Matt", age: 28 },
  { name: "Hima", age: 40 },
  { name: "Jess", age: 25 },
  { name: "Emily", age: 30 }
];

for (let i = 0; i < people.length; i++) {
  // console.log(people[i].name);
}

// Date and time object

// create new date object

let today = new Date();
let birthday = new Date(1989, 4, 11); // so the way to represent a new date has been changed since Brad's course.
// *Since the month is zero based, so to represent May you have to write 4.*
birthday = new Date("May 11 1989"); // or provide a string like this. I don't think Brad's two other representations work.

// get
val = today.getDate();
val = today.getDay(); // so the day starts at Sunday as 0. Today is Tuesday so it's 2.
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getMonth(); // month is zero based so now it's October it will return 9.
val = today.getSeconds();
val = today.getTime(); // this will return the time stamp, which is how many seconds passed since 1970-1-1.

// set
birthday.setDate(28); // the grammar is like this
birthday.setMonth(1);
birthday.setFullYear(1990);
birthday.setHours(18);
birthday.setMinutes(4);
console.log(birthday);
