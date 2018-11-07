// Traversing the dom
/*
Move up: parent
Down: child, children
left/right: sibling
*/
const list = document.querySelector("ul");
const listItem1 = document.querySelector("li.collection-item");

// childNode: produce a noteList with line breaks show up as node "text"
let val = list.childNodes;
// children: produce a html collection which only shows the elements
val = list.children;
val = list.children.length;
val = list.childElementCount;

// first child and first element child
val = list.firstChild;
val = list.firstElementChild;

// last child and last element child
val = list.lastChild;
val = list.lastElementChild;

val = list.firstChild.nodeName;
val = list.firstChild.nodeType;
// Node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.children[0].children[0]; // the link of delete
list.children[0].children[0].id = "delete-link";

// parentNode and parentElement: usually the same result
val = listItem1.parentNode;
val = listItem1.parentElement;

//nextSibling (next childNode) and nextElementSibling(next element)
val = listItem1.nextSibling;
val = listItem1.nextElementSibling;
val = listItem1.nextElementSibling.previousElementSibling;

console.log(val);

// ****************************************************

// Append a new list item to the current list with text saying Hello World

// Create element
const li = document.createElement("li");

// Add class name, id or attribute
li.className = "collection-item";
li.id = "new-item";
li.setAttribute("title", "item-title");

// Append child
li.appendChild(document.createTextNode("Hello World"));

// The link
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';

// Add link to li
li.appendChild(link);

// Add the li to the ul
document.querySelector("ul").appendChild(li);

console.log(li);

// *******************************************************

// REPLACE ELEMENT
// replace h5 with h2 saying Task List

// create new element
let newTitle = document.createElement("h2");
newTitle.id = "task-title";
newTitle.appendChild(document.createTextNode("Task List"));

// get old element
let oldTitle = document.querySelector("h5");

// replaceChild : new, old
let parentDiv = document.querySelector(".card-action");
parentDiv.replaceChild(newTitle, oldTitle);
console.log(oldTitle);

// REMOVE ELEMENT
// remove the last element which says Hello World

const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");

// call remove function in the child element list
lis[lis.length - 1].remove();

// removeChild (a node)
ul.removeChild(lis[0]);

// CLASSES

const link1 = document.querySelector("li.collection-item").querySelector("a");
val = link1.className; // a string
val = link1.classList; // something like an array
val = link1.classList[0];
link1.classList.add("test");
link1.classList.remove("test");
val = link1;

// ATTRIBUTES

val = link1.getAttribute("href");
link1.setAttribute("href", "http://google.com");
link1.setAttribute("title", "test");
link1.removeAttribute("title");
val = link1.hasAttribute("title");

console.log(val);
