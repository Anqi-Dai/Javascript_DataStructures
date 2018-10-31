// conditional
// if else

let id = 100;

// EQUAL
// *Use three equal signs to compare the value and the type*
if (id === 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

// test if value is undefined.
if (typeof id !== "undefined") {
  console.log(`ID is ${id}`);
} else {
  console.log("ID does not exist");
}

// GREATER THAN OR SMALLER THAN
// And &&
const age = 28;
const name = "Angel";

if (age >= 4 && age < 12) {
  console.log(`${name} is a kid.`);
} else if (age >= 12 && age < 19) {
  console.log(`${name} is a teenager.`);
} else if (age >= 19) {
  console.log(`${name} is an adult.`);
}

// OR ||
if (age > 65 || age < 16) {
  console.log(`${name} can not register for race.`);
} else {
  console.log(`${name} is able to register for race.`);
}

// SWITCH

let color = "blue";

switch (color) {
  case "red":
    console.log("Color is red.");
    break;
  case "blue":
    console.log("Color is blue.");
    break;
  default:
    console.log("Color is not red or blue.");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wendesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Satureday";
    break;
}

console.log(`Today is ${day}.`);
