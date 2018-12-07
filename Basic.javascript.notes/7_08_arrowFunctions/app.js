// Arrow functions (a new feature in ES6)

// the old and long way
const sayHello = function() {
  console.log("Hello!");
};

sayHello();

// arrow functions logging
const sayBye = () => console.log("Bye");

sayBye();

// arrow functions  returning
const sayMorning = () => "Morning!";
console.log(sayMorning());

// arrow functions returning object literals
const userName = () => ({ name: "Winnie" });
console.log(userName());

// with one parameter
const helloUser = name => `Hello ${name}`;
console.log(helloUser("Angel"));

// with multiple parameters you have to use parenthesis
const helloUerFullName = (firstName, lastName) =>
  `Hello ${firstName} ${lastName}`;
console.log(helloUerFullName("Angel", "Dai"));

// used in callback functions
const name = ["Lisa", "Emily", "Yin"];
const nameLengths = name.map(name => name.length);
console.log(nameLengths);

// rewrite the callback functions in ES6 promises
// please see the app.js in 7_07
