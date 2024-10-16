const myLibrary = [{
    title: "Stormlight Archive",
    author: "Brandon Sanderson",
    pages: 1200, // Changed to number
    read: true, // Changed to boolean
    id: 1,
}, {
    title: "Re: Zero",
    author: "Tappei Nagatsuki",
    pages: 9000, // Changed to number
    read: true, // Changed to boolean
    id: 2,
}];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

const addBookToLibrary = (event) => {

}

// const newElement = document.createElement("h1");

// newElement.textContent = "Hello, World!";
// newElement.id = "myHeading";

// document.body.appendChild(newElement);

const bookList = document.querySelector('#book-list');

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