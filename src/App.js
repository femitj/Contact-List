import React, { Component } from "react";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import SearchBooks from "./ShowSearchPage";
import * as BooksApi from "./BooksAPI";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksApi.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateShelf = (book, shelf) => {
    BooksApi.update(book, shelf);
    // .then(data => data.book)
    //.then(res => console.log(res));
    // .then(() => {
    //   this.setState(state => ({
    //     books: state.books
    //   }));
    // });
  };

  // componentDidUpdate() {
  //   BooksApi.getAll().then(books => {
  //     this.setState({ books });
  //   });
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps === this.props.books) {
  //     this.setState({ books: prevProps });
  //   }
  // }

  // shouldComponentUpdate() {
  //   BooksApi.getAll().then(books => {
  //     this.setState({ books });
  //   });
  //   return true;
  // }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              onUpdateBook={(book, shelf) => {
                this.updateShelf(book, shelf);
              }}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              books={this.state.books}
              onSearchBook={() => history.push("/")}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
