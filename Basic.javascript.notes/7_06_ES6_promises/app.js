// ES6 promises
// It's just a set of syntax and grammar.

const posts = [
  { title: "Post one", body: "This is post one." },
  { title: "Post two", body: "This is post two." }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      let error = false; // error could be set to true to see what will show up when there is an error.
      if (!error) {
        resolve();
      } else {
        reject("Error! Something went wrong...");
      }
    }, 2000);
  });
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

createPost({ title: "Post three", body: "This is post three." })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
