let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    return book;
}

console.log(myLibrary);

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
}

function renderLibrary() {
  const library = document.querySelector('.library');
  library.innerHTML = ""; 

  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.setAttribute("data-id", book.id);

    const info = document.createElement('p');
    info.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.isRead}`;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Read";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";

    card.appendChild(info);
    card.appendChild(deleteBtn);
    card.appendChild(toggleBtn);
    library.appendChild(card);

    deleteBtn.addEventListener("click", () => {
      myLibrary = myLibrary.filter(book => book.id !== id);
      renderLibrary();
    });

    toggleBtn.addEventListener("click", () => {
      book.toggleRead();
      renderLibrary();
    });
    
  });
}

renderLibrary();

const form = document.querySelector('#form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isread").value;
    
    addBookToLibrary(title, author, pages, isRead);

    renderLibrary();
    form.reset();
    document.getElementById('formDialog').close();
});

