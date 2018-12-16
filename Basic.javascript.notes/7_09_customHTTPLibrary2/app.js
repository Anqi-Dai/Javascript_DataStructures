// actually make class instances (using the class)
// using json placeholder's user data

const http = new HTTP();

// the synchronous way (we get undefined).
// const users = http.get("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// the asynchronous way
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// create a user data
const data = {
  name: "Angel Dai",
  username: "adai",
  email: "adai@gmail.com"
};

// post an user (add one)
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// update an user
//  for example update user number 2
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// delete an user
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
