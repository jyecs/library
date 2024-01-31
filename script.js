const myLibrary = [];

function Book(name, author, isRead) {
    this.name = name;
    this.author = author;
    this.isRead = isRead;
}

Book.prototype.toggleIsRead = function() {
    this.isRead = !this.isRead;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let book1 = new Book("Title1", "Author1", false);
let book2 = new Book("Title2", "Author2", false);
let book3 = new Book("Title3", "Author3", false);

book3.toggleIsRead();

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

console.log(myLibrary);