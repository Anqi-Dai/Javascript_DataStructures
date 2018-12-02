// Working in AJAX with external API (a simple Chuck Norris Joke API to generate some random jokes)

document
  .getElementById("button")
  .addEventListener("click", generateRandomJokes);

function generateRandomJokes(e) {
  const num = document.getElementById("number").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      let output = "";
      const jokes = JSON.parse(this.responseText);
      if (jokes.type === "success") {
        jokes.value.forEach(function(joke) {
          output += `
          <li>${joke.joke}</li>
          `;
        });
      } else {
        output += "<li>Fetching joke failed...</li>";
      }
      // Don't forget to set the innerHTML of the element to be output.
      document.getElementById("joke-output").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
