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
const newElement = document.createElement("h1");

newElement.textContent = "Hello, World!";
newElement.id = "myHeading";

document.body.appendChild(newElement);