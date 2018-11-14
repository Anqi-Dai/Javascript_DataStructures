// Define UI variables
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("ul");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");

addEventListeners();

// functions
function addEventListeners() {
  // Add task when submitting a task through form
  form.addEventListener("submit", addTask);

  // Remove task when clicking the cross button
  //    operate on the ul using event delegation
  taskList.addEventListener("click", removeTask);

  // Clear task when clicking clear button
  clearBtn.addEventListener("click", clearTasks);

  // Filter: show when there is matching input compared to the tasks, not show when there is not
  filter.addEventListener("keyup", filterTask);
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

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    confirm("Are you sure?");
    e.target.parentElement.parentElement.remove();
  }
}

function clearTasks(e) {
  // one naieve way to do it
  taskList.innerHTML = "";
  // faster way is to use while loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTask(e) {
  const inputText = e.target.value.toLowerCase();
  //console.log(inputText); (Good way to debug!)

  document.querySelectorAll(".collection-item").forEach(function(task) {
    if (task.firstChild.textContent.toLowerCase().indexOf(inputText) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
