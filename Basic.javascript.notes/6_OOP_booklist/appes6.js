// Implement the Book List usign ES6 (classes)

// Book and UI constructor

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {}

  addBookToList(book) {
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
  }

  showAlert(msg, className) {
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
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
}

// Event listeners
// for adding a book
document.getElementById("book-form").addEventListener("submit", function(e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please Add Required Information!", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book Successfully Added!", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

// for deleting a book
document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book Deleted!", "success");
  e.preventDefault();
});
