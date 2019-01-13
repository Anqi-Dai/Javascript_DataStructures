const user = { email: "jdoe@gmail.com" };

try {
  // Produce a ReferenceError when there is such a function
  // myFunction();

  // Produce a TypeError (you can do that on a null)
  // null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');

  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  // runs no matter there is an error occurred
  console.log("Finally runs reguardless of result...");
}

console.log("Program continues...");
