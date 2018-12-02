// Implement the Book List usign ES6 (classes)
//   and additional Local storage functionality

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

// Add a Local Storage class
class Store {
  static getBooks() {
    let books; // it's crucial to init the var here.

    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    const ui = new UI();

    books.forEach(function(book) {
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    // how to identify the book --- it's tricky, here use the isbn, which should be unique.
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
        // *IMPORTANT: you have to set the new array back to the LS*
        localStorage.setItem("books", JSON.stringify(books));
      }
    });
  }
}

// Event listeners
// display the book list from the LS when the page is loaded
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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

    // Add book to LS
    Store.addBook(book);

    ui.showAlert("Book Successfully Added!", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

// for deleting a book
document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  // remove from the LS by the isbn
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  ui.showAlert("Book Deleted!", "success");
  e.preventDefault();
});
