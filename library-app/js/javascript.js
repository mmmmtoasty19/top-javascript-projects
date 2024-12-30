const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    // this.info = function() {
    //     return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    // }
}

function addBookToLibrary(title,author,pages,read) {
    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
}


console.log(myLibrary)
addBookToLibrary("Test Book", "Kyle", "300", true)
console.log(myLibrary)