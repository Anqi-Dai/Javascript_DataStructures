// async actually returns a promise
// async function myFunc() {
//   return "Hello";
// }

// myFunc().then(res => console.log(res));

// use await to wait until promise is resolved.
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; // wait until promise is resolved.
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// get users functions from the jsonplaceholder website
async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // only proceed once it's resolved.
  const data = await response.json();

  // only proceed once second promise is resolved.
  return data;
}

getUsers().then(data => console.log(data));
