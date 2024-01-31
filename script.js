const myLibrary = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

Book.prototype.toggleIsRead = function() {
    this.isRead = !this.isRead;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    renderLibrary();
}

let book1 = new Book("Title1", "Author1", false);
let book2 = new Book("Title2", "Author2", false);
let book3 = new Book("Title3", "Author3", false);

book3.toggleIsRead();

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function renderLibrary() {
    let library = document.querySelector(".library");
    library.replaceChildren();
    myLibrary.forEach(book => {
        let bookContainer = document.createElement("div");
        let bookTitle = document.createElement("p");
        let bookAuthor = document.createElement("p");

        bookTitle.innerHTML = `${book.title}`;
        bookAuthor.innerHTML = `${book.author}`;

        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);

        bookContainer.classList.add("book");
        library.appendChild(bookContainer);
    });
}

renderLibrary();

let newBookForm = document.getElementById("new-book-form");
newBookForm.addEventListener("submit", e => {
    e.preventDefault();
    let bookTitle = document.querySelector("#title").value;
    let bookAuthor = document.querySelector("#author").value;

    addBookToLibrary(new Book(bookTitle, bookAuthor, false));
});