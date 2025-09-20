let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    return book;
}


function renderLibrary() {
  const library = document.querySelector('.library');
  library.innerHTML = ""; 

  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("data-id", book.id);

    const info = document.createElement('p');
    info.setAttribute("id", "book-info");
    info.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.isRead}`;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Read";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";

    const btns = document.createElement('div');
    btns.setAttribute('id', 'btns');
    btns.appendChild(toggleBtn);
    btns.appendChild(deleteBtn);

    card.appendChild(info);
    card.appendChild(btns);
    library.appendChild(card);

    deleteBtn.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
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

