/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-classes-per-file */
import { DateTime } from 'luxon';
import { BookCollection } from '../modules/bookCollection';

const collection = new BookCollection();
collection.initialize();

const welcomeMessage = document.getElementById('welcome-message');
const booksCollection = document.getElementById('booksCollection');
const newBook = document.getElementById('addBooks');
const contact = document.getElementById('contacts');

booksCollection.addEventListener('click', () => {
  welcomeMessage.style.display = 'none';
  newBook.style.display = 'block';
  contact.style.display = 'block';
});

newBook.addEventListener('click', () => {
  welcomeMessage.style.display = 'none';
  booksCollection.style.display = 'block';
  contact.style.display = 'block';
});

contact.addEventListener('click', () => {
  welcomeMessage.style.display = 'none';
  booksCollection.style.display = 'block';
  newBook.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
  const currentDateElement = document.getElementById('current-date');
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

  currentDateElement.textContent = now;
});