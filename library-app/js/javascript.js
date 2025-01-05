const myLibrary = [];
const container = document.getElementById("main");
const addBookBtn = document.getElementById("addBook");
const newBookForm = document.querySelector("form");
const dialog = document.querySelector("dialog");

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


function createCard (book, index){
    const card = document.createElement("div");
    const classList = ["p-6", "border", "border-slate-300", 
        "bg-white", "rounded-xl", "shadow-xl", "flex", "flex-col", "gap-x-4"];
    card.classList.add(...classList);
    card.dataset.index = index
    

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

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

newBookForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const inputs = [...newBookForm.elements];
    let book = [];

    inputs.forEach((item) => {
        book.push(item.value);
        // console.log(item.value);
        // console.log(item.type);
    })
    addBookToLibrary(book)

    clearForm();

    dialog.close();

})

function clearForm() {
    const inputs = [...newBookForm.elements];
    inputs.forEach((item) => {
        if(item.type == 'submit') return;
        item.value = ""
    })
}

addBookToLibrary("Test Book", "Kyle", "300", true)
addBookToLibrary("How the Grinch Stole Christmas", "Dr. Seuss", "12", false)
// console.log(myLibrary)

myLibrary.forEach((book, index) => createCard(book, index))