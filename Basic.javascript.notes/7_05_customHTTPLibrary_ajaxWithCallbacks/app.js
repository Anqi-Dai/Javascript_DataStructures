// this is the place where I really use the easyHTTP lib

const http = new easyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts", function(err, response) {
//   // Also, showing the error if there is any
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Post
// create data
const data = {
  title: "Custome post",
  body: "This is a custome post"
};

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Put
// below I am updating the post with ID 1 to my custome post data
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Delete
// below I am deleting the post with ID of 1
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
