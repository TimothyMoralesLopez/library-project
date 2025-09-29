/*
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
  this.id = crypto.randomUUID(); 
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}, ID: ${this.id}`; 
};

Book.prototype.toggleReadStatus = function() {
    if (this.read == "Read") {
        this.read = "Not Read";
    }
    else if (this.read == "Not Read") {
        this.read = "Read"; 
    }
}
*/

class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
        this.id = crypto.randomUUID(); 
    }

    info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}, ID: ${this.id}`; 
    }

    toggleReadStatus() {
        if (this.read == "Read") {
            this.read = "Not Read";
        }
        else if (this.read == "Not Read") {
            this.read = "Read"; 
        }
    }
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
    const addedBook = new Book(bookTitle, bookAuthor, bookPages, bookRead); 
    myLibrary.push(addedBook); 
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {

        const newDiv = document.createElement("div");
        newDiv.classList.add("book-div");
        newDiv.id = myLibrary[i].id; 

        let titlePara = document.createElement("p"); 
        titlePara.textContent = `Title: ${myLibrary[i].title}`; 
        newDiv.appendChild(titlePara); 

        let authorPara = document.createElement("p");
        authorPara.textContent = `Author: ${myLibrary[i].author}`;
        newDiv.appendChild(authorPara); 

        let pagesPara = document.createElement("p");
        pagesPara.textContent = `Number of Pages: ${myLibrary[i].pages}`;
        newDiv.appendChild(pagesPara); 

        let readPara = document.createElement("p");
        readPara.textContent = `Read Status: ${myLibrary[i].read}`;
        newDiv.appendChild(readPara); 

        let idPara = document.createElement("p");
        idPara.textContent = `Book ID: ${myLibrary[i].id}`;
        newDiv.appendChild(idPara); 

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Book"; 
        deleteButton.addEventListener("click", () => {
            
            myLibrary.splice(i, 1); 
            clearDisplay();
            displayBooks(); 

        });

        newDiv.appendChild(deleteButton);

        const readButton = document.createElement("button"); 
        readButton.textContent = "Change Read Status"; 
        readButton.addEventListener("click", () => {

            myLibrary[i].toggleReadStatus(); 
            readPara.textContent = `Read Status: ${myLibrary[i].read}`;
            
        }); 

        newDiv.appendChild(readButton);

        document.body.append(newDiv); 
    }
}

function clearDisplay() {

    let booksList = document.querySelectorAll(".book-div");

    for (let i = 0; i < booksList.length; i++) {

        booksList[i].remove(); 

    }

}

const bookDialog = document.querySelector("dialog"); 

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", () => {

    bookDialog.close();

});

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", () => {

    bookDialog.showModal();     

}); 

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (event) => {

    const bookTitle = document.querySelector("#book-title");
    const bookAuthor = document.querySelector("#book-author"); 
    const bookPages = document.querySelector("#book-pages");
    const bookRead = document.querySelector("#book-read"); 

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);

    clearDisplay(); 
    displayBooks();
    bookDialog.close(); 

    event.preventDefault(); 

}); 

const beginningBook = new Book("The Beginning", "Timothy Morales Lopez", 150, "Read");
const middleBook = new Book("The Middle", "Timothy Morales Lopez", 250, "Read");
const endBook = new Book("The End", "Timothy Morales Lopez", 350, "Read");

const myLibrary = [beginningBook, middleBook, endBook];

displayBooks(); 