// Event bubbling (when there is an event in a child element, all the parent elements will have that event too)
// for example, all of the four will be console logged, because one is the parent of the previous one

document.querySelector(".card-title").addEventListener("click", function(e) {
  console.log("card title");
});

document.querySelector(".card-content").addEventListener("click", function(e) {
  console.log("card content");
});

document.querySelector(".card").addEventListener("click", function(e) {
  console.log("card");
});

document.querySelector(".col").addEventListener("click", function(e) {
  console.log("col");
});

// Event delegation (you put event on a parent element, and  then use conditions to match the actual element(s) you wanna target. The benefit is that you will only write once for multiple targets.)

// Goal: remove the list item row when click the cross mark.

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // console.log(e.target);// this will output the element that is being clicked
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
