import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';

function Saved() {
  const [books, setBooks] = useState([]);

  function loadBooks(book) {
    API.getBooks(book)
      .then((res) => {
        console.log(res);
        setBooks(res);
      })
      .catch((err) => console.log(err));
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

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <div className='col-md-12'>
          <Jumbotron>
            <h1>Your Saved Books</h1>
          </Jumbotron>
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
                  <a
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-success'
                    href='/saved'
                  >
                    Delete
                  </a>
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
export default Saved;
