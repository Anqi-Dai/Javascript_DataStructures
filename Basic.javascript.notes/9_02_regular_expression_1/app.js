let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
re = /hello/g; // Global search (The g modifier is used to perform a global match (find all matches rather than stopping after the first match).)

console.log(re);
console.log(re.source); // the original string

// exec() - Return result in an array or null
let result = re.exec("hello world");

console.log(result);
console.log(result[0]); // the thing that matches.
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
result = re.test("Hello");
console.log(result);

// match() - Return result array or null
let str = "Hello There";
result = str.match(re);
console.log(result);

// search() - Returns index of the first match if not found retuns -1
str = "Brad Hello There";
result = str.search(re);
console.log(result);

// replace() - Return new string with some or all matches of a pattern
str = "Hello There";
const newStr = str.replace(re, "Hi");
console.log(newStr);
