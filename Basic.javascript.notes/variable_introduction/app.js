// There are 3 ways to declare a variable.
// variable naming convention
var color = "red";
// variable could be combinations of letter, number, $, _  but it could not start with number.
var _color = "private variable naming";
var $color = "maybe for jquery";

// 1. var
// It's there since the very beginning of js.
var firstName = "Anqi";
var lastName = "Dai";
console.log(firstName + " " + lastName);
// you can reassign value to the var
firstName = "Lingyu";
console.log(firstName);

// 2. let
// let and const are new ones that added since ES6. The 3 are basically the same globally, but let and const have their advantages in scope and block.

// let firstName = "Winnie";(You can't do this cuz will produce the error the identifier firstName has been declared)

let month = "October";
let date = 24;

// 3. const
// IMPORTANT: once you have assigned value to const, you CANNOT reassign. You can mutate the value if it's array or object. But you can't assign a new value to it. (Use const if you are only gonna assign it once)
const num = [1, 2, 3, 4];
console.log(num);
num.push(5);
console.log(num);

const favAlbum = {
  singer: "Taylor Swift",
  name: "1989"
};
console.log(favAlbum);
favAlbum.name = "Red";
console.log(favAlbum);

// several functions of console
console.table(favAlbum);
console.error("This is an error! It will be red!");
console.warn("This is a warning! It will be yellow!");

// The below is to count the time of running certain blocks of code between two time points.
console.time("hello");
var firstName = "Anqi";
var lastName = "Dai";
console.log(firstName + " " + lastName);
// you can reassign value to the var
firstName = "Lingyu";
console.log(firstName);
console.timeEnd("hello");
