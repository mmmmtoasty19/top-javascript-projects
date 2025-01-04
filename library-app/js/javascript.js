const myLibrary = [];
const container = document.getElementById("main");

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


function createCard (book){
    const card = document.createElement("div");
    const classList = ["p-6", "border", "border-slate-300", 
        "bg-white", "rounded-xl", "shadow-xl", "flex", "flex-col", "gap-x-4"];
    card.classList.add(...classList);
    

    Object.keys(book).forEach((element) => {
        if (element == 'title') {
            let item = document.createElement('h2');
            item.textContent = `${book[element]}`;
            item.classList.add(...["font-bold", "text-2xl"])
            card.appendChild(item);
        } else {
            let item = document.createElement('p');
            item.textContent = `${element}: ${book[element]}`;
            card.appendChild(item);
        }
    })

    container.appendChild(card);

}


console.log(myLibrary)
addBookToLibrary("Test Book", "Kyle", "300", true)
console.log(myLibrary)

myLibrary.forEach((book) => createCard(book))