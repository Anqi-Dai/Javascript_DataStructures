// Query selector for single elements

let taskTitle = document.getElementById("task-title");
let val = taskTitle.id;
console.log(val);

// Add styles
taskTitle.style.background = "#bbb";
taskTitle.style.padding = "10px";
taskTitle.style.color = "blue";
// taskTitle.style.display = "none";// for example when you hover or there is some other dynamic changes.

// Change content
taskTitle.textContent = "These are tasks";
taskTitle.innerText = "The list of tasks";
// taskTitle.innerHTML = "<span style='color:red'>Task lists!</span>"; // This is gonna overwrite the original text in the h5 tag

// select by class name
val = document.getElementsByClassName("collection-item");
val[0].style.color = "red";
console.log(val);

// Query selector
// select the element by anything including id, class, tagname but you will only get the first one if there are multiple
console.log(document.querySelector("#task-title"));

document.querySelector("#task-title").textContent = "Target listed";
document.querySelector(".collection-item").style.color = "green"; // only the first item turns green here!
document.querySelector(".collection-item:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.background = "gray";
document.querySelector("ul li:nth-child(even)").style.color = "blue"; // still, only the first one in even changes.
