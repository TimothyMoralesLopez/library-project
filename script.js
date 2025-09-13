const sunBook = new Book("Sun", "T. L. Turris", 350, "Already read");
const moonBook = new Book("Moon", "T. L. Turris", 350, "Already read");
const starBook = new Book("Star", "T. L. Turris", 350, "Already read");

const myLibrary = [sunBook, moonBook, starBook];

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
    if (this.read == "Already read") {
        this.read = "Not yet read";
    }
    if (this.read == "Not yet read") {
        this.read = "Already read"; 
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

        let numberPara = document.createElement("p"); 
        numberPara.textContent = `Book ${(i + 1)}`;
        newDiv.appendChild(numberPara); 

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
        // deleteButton.addEventListener("click"); 
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

displayBooks(); 