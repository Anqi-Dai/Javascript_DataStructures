// The scope difference between var let and const

var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Function scope ${a}, ${b}, ${c}`);
}

test();

// Here we can see that var will not be overwritten even if it's defined in a function separately

// But if it's in a if or loop block

if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`If scope ${a}, ${b}, ${c}`);
}

// Here we can see that the "var" variable has been overwirtten if it's redefined in if block.

// Check the thing in for loop

for (let a = 0; a < 10; a++) {
  console.log(`Loop scope a: ${a}`);
}
console.log(`Global scope a: ${a}`);
// so we can see that if we define "a" by let, it will not overwirte the global a, but it will overwrite if we define by "var"

// The conclusion is that when we make new variables, use let and const more.
