// Event Listener and the Event Object

const clickButton = document
  .querySelector(".clear-tasks")
  .addEventListener("click", onclick);

onclick = function(e) {
  // Either add # at href of the a tag to prevent the page automatically submit the form to somewhere else
  // Or do this: preventDefault
  let val;
  val = e; // e is the event object
  e.preventDefault();

  // target is the most important part
  val = e.target; // target is the link
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = "Hello"; // this is a button

  // position of where the click happened (relative to the window)
  val = e.clientY; // if you clicked at the bottom of the button, the value will be bigger
  val = e.clientX;

  // position of where the click happened (relative to the button itself)
  val = e.offsetY;
  val = e.offsetX;

  // timestamp
  val = e.timeStamp;

  // type of the event
  val = e.type;

  console.log(val);
};

// ****************************************************
