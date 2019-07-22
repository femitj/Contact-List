import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class BookList extends Component {
  state = {
    value: "" // currently reading, want to read, read
  };

  handleBookShelf = (book, value) => {
    const shelf = value;

    if (this.props.onUpdateBook) {
      this.props.onUpdateBook(book, shelf);
    }
    //const { shelf } = book;
  };
  // handleBookShelf = (e) => {
  //   this.setState({ value: e.target.value });
  // };

  handleSubmitShelf = () => {};

  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(
                    book =>
                      book.shelf === "currentlyReading" && (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url("${
                                    book.imageLinks.thumbnail
                                  }")`
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  value={this.state.value}
                                  onChange={e =>
                                    this.handleBookShelf(book, e.target.value)
                                  }
                                >
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="none">None</option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(
                    book =>
                      book.shelf === "wantToRead" && (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url("${
                                    book.imageLinks.thumbnail
                                  }")`
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  value={this.state.value}
                                  onChange={e =>
                                    this.handleBookShelf(book, e.target.value)
                                  }
                                >
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="none">None</option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(
                    book =>
                      book.shelf === "read" && (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url("${
                                    book.imageLinks.thumbnail
                                  }")`
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select
                                  value={this.state.value}
                                  onChange={e =>
                                    this.handleBookShelf(book, e.target.value)
                                  }
                                >
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="none">None</option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        </li>
                      )
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Link to="./search" className="open-search">
          Add a book
        </Link>
      </div>
    );
  }
}

export default BookList;
