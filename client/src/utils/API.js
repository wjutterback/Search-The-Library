import axios from 'axios';
//inauthor:${book} -- if add author field
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getBooks: function () {
    return axios.get('/api/books');
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post('/api/books', bookData);
  },
  searchGoogle: function (book) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${book}`
    );
  },
};
