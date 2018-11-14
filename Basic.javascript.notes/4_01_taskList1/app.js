// Define UI variables
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("ul");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");

addEventListeners();

// functions
function addEventListeners() {
  form.addEventListener("submit", addTask);
}

function addTask(e) {
  // check if the input task is empty
  if (taskInput.value === "") {
    alert("Please add some tasks!");
  }
  // create the .collection-item element to add to the ul
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  li.appendChild(link);
  taskList.appendChild(li);

  //clear the input
  taskInput.value = "";

  e.preventDefault();
}
