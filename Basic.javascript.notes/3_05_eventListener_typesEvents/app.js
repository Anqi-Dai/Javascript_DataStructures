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

  // console.log(val);
};

// ****************************************************

// Mouse Events
const btn = document.querySelector(".clear-tasks");
const heading = document.querySelector("h5");
const card = document.querySelector(".card");

// runEvent = function(e) {
//   console.log(`Event Type: ${e.type}`);

//   // make the heading show the mouse's pos inside that card
//   heading.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;

//   // make the background color of the body as the rgb value consists of the x and y pos of the mouse inside the card (the whole color needs to be a string whether it's a word a hexcode or rgb values).
//   // document.body.style.backgroundColor = `rgba(
//   //   ${e.offsetX},
//   //   ${e.offsetY},
//   //   40,
//   //   0.9
//   // )`;
// };

// click
// btn.addEventListener("click", runEvent);
// double click
// btn.addEventListener("dblclick", runEvent);
// mouse down (click and hold)
// btn.addEventListener("mousedown", runEvent);
// mouse up (click hold and then let go)
// btn.addEventListener("mouseup", runEvent);
// mouse enter (enter that element area)
// card.addEventListener("mouseenter", runEvent);
// mouse leave (leave that element area)
// card.addEventListener("mouseleave", runEvent);
// mouse over (when you move over another element inside that area)
// card.addEventListener("mouseover", runEvent);
// mouse out (when you move out from another element inside that area)
// card.addEventListener("mouseout", runEvent);
// mouse move (as long as your mouse move inside that area)
// card.addEventListener("mousemove", runEvent);
