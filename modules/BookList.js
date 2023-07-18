/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import { Book } from './Book.js';

// BookList class
export class BookList {
  constructor() {
    this.books = [];
    this.bookForm = document.getElementById('addbook-form');
    this.bookTitleInput = document.getElementById('title');
    this.bookAuthorInput = document.getElementById('author');
    this.bookListing = document.getElementById('listing');
    this.currentTimeContainer = document.getElementById('current-time'); // Get the container element

    this.bookForm.addEventListener('submit', this.addBook.bind(this));
    this.bookListing.addEventListener('click', this.removeBook.bind(this));

    this.retrieveBooks();
    this.displayBooks();
    this.displayCurrentTime(); // Display the current time when initializing the BookList

    // Update the current time every second (optional)
    setInterval(() => this.displayCurrentTime(), 1000);
  }

  // Add a book to the book list
  addBook(event) {
    event.preventDefault();

    const title = this.bookTitleInput.value;
    const author = this.bookAuthorInput.value;

    if (this.isDuplicateBook(title, author)) {
      alert('This book is already added.');
      return;
    }

    const book = new Book(title, author);
    this.books.push(book);
    this.saveBooks();

    this.displayBooks();
    this.clearInputs();
  }

  // Remove a book from the book list
  removeBook(event) {
    if (event.target.classList.contains('remove-btn')) {
      const bookIndex = event.target.dataset.index;
      this.books.splice(bookIndex, 1);
      this.saveBooks();

      this.displayBooks();
    }
  }

  // Check if a book is already added
  isDuplicateBook(title, author) {
    return this.books.some((book) => book.title === title && book.author === author);
  }

  // Save books to local storage
  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Retrieve books from local storage
  retrieveBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  // Display the list of books
  displayBooks() {
    this.bookListing.innerHTML = '';

    this.books.forEach((book, index) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.style.backgroundColor = index % 2 === 0 ? 'white' : 'lightgray';
      bookItem.innerHTML = `
                <span class="book-details">${book.title} by ${book.author}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

      this.bookListing.appendChild(bookItem);
    });
  }

  // Clear input fields
  clearInputs() {
    this.bookTitleInput.value = '';
    this.bookAuthorInput.value = '';
  }

  // Display the current time in the container with ID "current-time"
  displayCurrentTime() {
    const now = new Date();
    const currentTime = now.toLocaleString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });

    // Update the content of the container with the current time
    this.currentTimeContainer.textContent = currentTime;
  }
}
