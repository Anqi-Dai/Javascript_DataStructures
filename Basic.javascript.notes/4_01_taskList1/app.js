/* 
The task list app should do the following:
Add, remove, filter, clear the tasks
And the tasks should be added and removed to the local storage (LS) too, so that the tasks still persist even if the page reloads.
*/

// Define UI variables
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("ul");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");

addEventListeners();

// functions
function addEventListeners() {
  // Right after the DOM is loaded we wanna show the tasks in the local storage so that even though we refresh we still will be able to see them
  document.addEventListener("DOMContentLoaded", getTasks);

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

  // Add task to the LS
  storeTaskInLS(taskInput.value);

  //clear the input
  taskInput.value = "";

  e.preventDefault();
}

// Store task in local storage
function storeTaskInLS(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // push the new task to the tasks array
  tasks.push(task);

  // set it back to LS in strings(you have to choose the specific address to see it in chrome tools)
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// get the tasks from the local storage
function getTasks(e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
  });
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLS(e.target.parentElement.parentElement.textContent);
    }
  }
}

// Remove the task from LS if remove it in the UI
function removeTaskFromLS(taskItem) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach(function(task, index) {
    if (taskItem === task) {
      tasks.splice(index, 1);
    }
  });
  // And then you have to set it back to the local storage to make the change!
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTasks(e) {
  // one naieve way to do it
  taskList.innerHTML = "";
  // faster way is to use while loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // remove tasks in LS too
  localStorage.clear();
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
