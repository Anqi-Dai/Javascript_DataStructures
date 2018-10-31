// Template literals

const date = "Oct 29";
const day = "Monday";
const weather = "rainy and cloudy";
const mood = "wanting to sleep";

let todayJournal;

todayJournal = `
  Today is ${date} and it's a ${day}. The weather is like ${weather} and I feel ${mood}.
`;

// console.log(todayJournal);

// two ways of creating arrays
let numbers = [3, 4, 5, 6, 7];
let numbers2 = new Array(48, 117, 20, 355, 49, 18, 99);
let colors = ["red", "yellow", "blue", "black", "green"];
let mixed = [1, "hi", true, null, undefined, new Date()];
let val;

// Array methods

// array length
val = numbers.length;

// check if it is an array
val = Array.isArray(numbers);

// mutating an array element
numbers[1] = 11;

// index of an element
val = numbers.indexOf(7);

// add value to the end
numbers.push(8);
// remove value from the end
numbers.pop();

// add value to the front
numbers.unshift(2);
// remove value from the front
numbers.shift();

// splice any positions
numbers.splice(2, 2); // the first param is which index to start, and the second param is how many elements to be spliced out.

// sorting
numbers2.sort(); // by defalut the sort function sort the values like they are strings,
// sorting with a compare function
numbers2.sort(function(x, y) {
  return x - y;
});
// sorting in a descending order
numbers2.sort(function(x, y) {
  return y - x;
});

// find certain value (the first occurance)
val = numbers2.find(function(num) {
  return num < 50;
});

console.log(numbers);
