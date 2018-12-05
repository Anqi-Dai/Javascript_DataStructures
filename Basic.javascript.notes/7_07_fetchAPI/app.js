// Use fetch API to get the data from local text file, JSON file or from external API (The new way)

document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJSON);

document.getElementById("button3").addEventListener("click", getExternal);

// fetch from a local text file
function getText() {
  fetch("sample.txt")
    .then(function(response) {
      return response.text(); // this returns a promise
    })
    .then(function(data) {
      console.log(data); // this finally returns the text in the file
    })
    .catch(function(err) {
      console.log(err);
    });
}

// fetch from a local JSON file
function getJSON() {
  fetch("posts.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // The returned data is already an array (parsed)
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// fetch from an external API (github the first 135 users)
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // The returned data is already an array (parsed)
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
