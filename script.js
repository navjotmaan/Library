const myLibrary = [];

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

addBookToLibrary('Siddhartha', 'Herman Hesse', 128, 'Yes');
addBookToLibrary('Atomic Habits', 'James Clear', 271, 'Yes');
addBookToLibrary('Meditations', 'Marcus Aurelius', 180, 'No');
console.log(myLibrary);

function renderLibrary() {
  const library = document.querySelector('.library');
  library.innerHTML = ""; 
  myLibrary.forEach(book => {
    const card = document.createElement('div');
    const deleteBtn = document.createElement('button');
    card.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Read: ${book.isRead}`;
    deleteBtn.textContent = "Remove";
    card.appendChild(deleteBtn);
    library.appendChild(card);

    deleteBtn.addEventListener("click", () => {
      
    })
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