// Numbers and math object
var num1 = 40;
var num2 = 20;
let val;

// You can do basic math operations
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Using math object to do more complicated operation
val = Math.PI;
val = Math.E;
val = Math.abs(-20);
val = Math.sqrt(16);
val = Math.pow(2, 3);
val = Math.min(1, 2, 7, 8, -9);
val = Math.max(22, 99);
val = Math.round(2.9);
val = Math.round(2.1);
val = Math.floor(2.9);
val = Math.ceil(2.1);
val = Math.random(); // this will be a random decimal number between 0 and 1;
val = Math.ceil(Math.random() * 20 + 1); // this is how you generate a random whole number between 0 and 20.(Unbelievable)

console.log(val);
