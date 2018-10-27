// String operations
var firstName = "Anqi";
var lastName = "Dai";
const tags = "web development,web design,frontend design,python,javascript";
let val;

// Some string methods and they are very similar to Python
val = firstName.length;
val = firstName[2];
val = firstName.toLocaleUpperCase();
val = firstName.toLocaleLowerCase();
val = firstName.concat(" ", lastName);
// escaping
val = "I'm Anqi and it's good to meet you.";
val = "I'm Anqi and it's good to meet you.";

// Substring method: If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).If either "start" or "end" is less than 0, it is treated as if it were 0.
val = firstName.substring(0, 2);
val = firstName.substring(-1, 2);
val = firstName.substring(3, 1);
val = firstName.slice(0, 1); // very silimar to substring
val = firstName.indexOf("q"); // this gives the index of the first occurance of the char
val = firstName.charAt("0"); // a string to show the index
val = firstName.charAt(firstName.length - 1); // get the last char
val = firstName.replace("qi", "gel");
val = tags.split(",");
val = firstName.includes("An");
val = firstName.concat(lastName).lastIndexOf("i"); // this gives the index (starting from 0) of the last occurance of the char .

console.log(val);
