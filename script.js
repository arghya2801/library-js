const myLibrary = [{
    title: "Stormlight Archive",
    author: "Brandon Sanderson",
    pages: 1200,
    read: true,
    id: 1,
}, {
    title: "Re: Zero",
    author: "Tappei Nagatsuki",
    pages: 9000,
    read: true,
    id: 2,
}];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function getNextId() {
    if (myLibrary.length === 0) return 1;
    const lastBook = myLibrary[myLibrary.length - 1]; 
    return lastBook.id + 1;
}

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read, getNextId());

    console.log(newBook);
    myLibrary.push(newBook);
    displayBooks(newBook);

    // console.log(myLibrary);

    document.getElementById('book-form').reset();
})

const addBookToLibrary = (event) => {

}

const bookList = document.querySelector('.book-list');

const displayBooks = book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card')

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info')

    const title = document.createElement('p');
    title.textContent = `Title: ${book.title}`;
    bookInfo.append(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    bookInfo.append(author);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    bookInfo.append(pages);

    const status = document.createElement('p');
    status.textContent = `Status: ${book.read ? 'Read' : 'Not Read'}`;
    bookInfo.append(status);

    bookCard.append(bookInfo);

    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons')

    const changeStatusButton = document.createElement('button');
    changeStatusButton.classList.add('change-status');
    changeStatusButton.textContent = 'Change Read Status';

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-item');
    removeButton.textContent = 'Remove';

    cardButtons.append(changeStatusButton, removeButton);
    bookCard.append(cardButtons);
    bookList.append(bookCard);
}

myLibrary.forEach(displayBooks);