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

// Clear fields after submitting
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get the book information submitted from the form
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Construct a Book object
  const book = new Book(title, author, isbn);

  // Construct UI object
  const ui = new UI();

  // Add book to the list
  ui.addBookToList(book);

  // Clear Fields after adding the book
  ui.clearFields();

  e.preventDefault();
});
