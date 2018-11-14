// Keyboard and Input events

const form = document.querySelector("form");
const inputTask = document.getElementById("task");
const heading = document.querySelector("h5");

inputTask.value = "";

function runEvent(e) {
  console.log(`Input type: ${e.type}`);
  // to get the content of the input
  // console.log(inputTask.value);
  console.log(e.target.value);
  // heading.innerText = e.target.value;
  e.preventDefault(); // without this line the page will quickly redirect to another page such as index.php
}

// submit
// form.addEventListener("submit", runEvent);
// key down (when you press the key)
form.addEventListener("keydown", runEvent);
// key up (when you release the key)
// form.addEventListener("keyup", runEvent);
// key press (just a general press)
// form.addEventListener("keypress", runEvent);
