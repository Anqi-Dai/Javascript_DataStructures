// What is callback function
// A function that could be passed into another function as a parameter. In this lecture, it works asynchronously specifically.

// the below example mimic server's action for blog posts.

const posts = [
  { title: "Post one", body: "This is post one." },
  { title: "Post two", body: "This is post two." }
];

// function createPost(post) {
//   // the 2000 ms wait is mimicing the server's response
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// calling the above functions
// The result only shows Post one and Post two because it took 2s to create post but only 1s to get post. The posts are got before the new one is created.
// createPost({ title: "Post three", body: "This is post three." });

// getPosts();

// **************************************************
// Doing it using callback functions

function createPost(post, callback) {
  // the 2000 ms wait is mimicing the server's response
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post three", body: "This is post three." }, getPosts);
