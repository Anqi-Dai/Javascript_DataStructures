// Function declarations

function lifeMotto() {
  console.log("Don't go through life. Grow through life.");
}

lifeMotto();

// Function expression
const lifeMotto$ = function() {
  console.log("Don't go through life. Grow through life.");
};

lifeMotto$();

// with parameters

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(1, 2));

// with default values for paramters so that it will not output undefined for no input.

const hello = function(firstName = "Angel") {
  return `Hello ${firstName}`;
};

console.log(hello("Lingyu"));

// immediately invokable function expressions (IIFE)
// defining the function and running it at the same time

(function(day = "Thursday") {
  console.log(`Today is ${day}.`);
})("Friday");

// Property methods
// An object could have functions as properties

const todos = {
  add: function() {
    console.log("Add todo ...");
  },
  edit: function(id) {
    console.log(`Edit to do ${id}`);
  }
};

todos.delete = function() {
  console.log("Delete todo ...");
};

todos.add();
todos.edit(21);
todos.delete();

// ***************************************************

// The loops

// for loop

// continue is to skip the code below and enter into the next iteration
// break is to break out of the loop entirely.

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    console.log("7 is my favorite number.");
    continue;
  }
  if (i === 8) {
    console.log("Jump out of the iteration when it's number 8.");
    break;
  }
  console.log(`Number ${i}`);
}

// while loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// do while loop
// The difference between while and do while is that do while will execute the expression at least once.

let j = 100;

do {
  console.log(j);
  j++;
} while (j < 10); // the output will be 100 even though 100 is not smaller than 10.

// for each (loop for array)(which is much more efficient than the for loop)

const color = ["red", "blue", "green", "yellow"];

color.forEach(function(col, index, array) {
  console.log(`${index} ${col} ${array}`);
});

// map for array of objects

const users = [
  { id: 1, name: "Susan" },
  { id: 2, name: "Andy" },
  { id: 3, name: "Tiny" },
  { id: 4, name: "Dylan" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

// for in loop

let user = {
  firstName: "Anqi",
  lastName: "Dai",
  age: 22
};

for (let i in user) {
  console.log(`${i}: ${user[i]}`);
}
