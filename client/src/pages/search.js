import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  // Loads all books and sets them to books
  function loadBooks(book) {
    API.getBooks(book)
      .then((res) => {
        console.log('before books', books);
        console.log(res.data.items);
        setBooks(res.data.items);
        console.log('books', books);
      })
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange({ target }) {
    const search = target.value;
    setSearchInput(search);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    loadBooks(searchInput);
  }
  function renderThumbnail(link) {
    if (link) {
      return (
        <img
          src={link.thumbnail}
          alt='Book Thumbnail'
          className='float-left inline-block ml-3 mr-3'
        ></img>
      );
    } else return;
  }

  return (
    <Container fluid>
      <Row>
        <div className='col-md-12'>
          <Jumbotron>
            <h1>What Book Will You Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name='title'
              placeholder='Search for a book'
            />
            <FormBtn disabled={!searchInput} onClick={handleFormSubmit}>
              Submit Book
            </FormBtn>
          </form>
        </div>
      </Row>
      <div className='col-md-12'>
        {books.length ? (
          <List>
            {books.map((book) => (
              <ListItem key={book.id}>
                <div style={{ position: 'relative', float: 'right' }}>
                  <a
                    role='button'
                    target='_blank'
                    href={book.volumeInfo.infoLink}
                    rel='noreferrer'
                    className='btn btn-info mr-1'
                  >
                    View
                  </a>
                  <button className='btn btn-success'>Save</button>
                </div>
                <Row>
                  <div className='col-md-6'>
                    <div className='float-left'>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={book.volumeInfo.infoLink}
                      >
                        <strong>
                          <p>{book.volumeInfo.title}</p>
                          <p style={{ fontSize: '13px' }}>
                            Written By
                            {book.volumeInfo.authors.map((author) => {
                              if (
                                book.volumeInfo.authors.indexOf(author) !==
                                book.volumeInfo.authors.length - 1
                              ) {
                                return ` ${author},`;
                              } else return ` ${author}.`;
                            })}
                          </p>
                        </strong>
                      </a>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className='col-md-12 mt-5'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={book.volumeInfo.infoLink}
                    >
                      {renderThumbnail(book.volumeInfo.imageLinks)}
                    </a>

                    <p></p>
                    {book.volumeInfo.description}
                  </div>
                </Row>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </Container>
  );
}

export default Books;
