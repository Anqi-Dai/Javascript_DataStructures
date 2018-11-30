// The ES5 implementation

// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
//    where all the interactions such as adding the book, delete them, validation, alert happens
function UI() {}

// UI prototype functions

// Add book to the list (create element and then append child to the parent element)
UI.prototype.addBookToList = function(book) {
  // Get the book list element
  const bookList = document.getElementById("book-list");

  // Create tr element for a new row
  const row = document.createElement("tr");

  // Create td element using the book instance
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  // Add the row to the book list
  bookList.appendChild(row);
};

// show alert of error and success
UI.prototype.showAlert = function(msg, className) {
  // create a div element
  const div = document.createElement("div");

  // add className
  div.className = `alert ${className}`;

  // create the text node inside the div to hold the msg
  div.appendChild(document.createTextNode(msg));

  // get the parent and the form to make sure where to insert the div
  const form = document.getElementById("book-form");
  const container = document.querySelector(".container");

  // insert
  container.insertBefore(div, form);

  // make the alert disappear after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Clear fields after submitting
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// delete book
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Event listener for adding a book
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get the book information submitted from the form
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Construct a Book object
  const book = new Book(title, author, isbn);

  // Construct UI object
  const ui = new UI();

  // alert in failing or succeeding in adding books
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please Add Required Information!", "error");
  } else {
    // Add book to the list
    ui.addBookToList(book);

    // show green alert that the book has been added
    ui.showAlert("Book Successfully Added!", "success");

    // Clear Fields after adding the book
    ui.clearFields();
  }

  e.preventDefault();
});

// event listener for deleting a book
document.getElementById("book-list").addEventListener("click", function(e) {
  // Construct UI object
  const ui = new UI();

  // calling the UI prototype deleteBook methods
  ui.deleteBook(e.target);

  // show alert message
  ui.showAlert("Book Deleted!", "success");
});
