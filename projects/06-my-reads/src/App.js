import React from 'react'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Booklist from './components/Booklist'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.fetchBookData();
  }

  fetchBookData() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }));
      });
  }

  changeBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.updateBooks(book, shelf);
      })
  }

  updateBooks = (newBook, shelf) => {
    const books = this.state.books;
    const updatedBooks = books.filter((book) => book.id !== newBook.id)

    newBook.shelf = shelf
    updatedBooks.push(newBook);

    this.setState(() => ({
      books: updatedBooks
    }))

  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Booklist
                books={books}
                onChangeBookshelf={this.changeBookshelf}
              />
            )}
          />
          <Route
            path="/search"
            render={({ history }) => (
              <Search
                books={books}
                onChangeBookshelf={this.changeBookshelf}
              />
            )}
          />
        </Switch>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
