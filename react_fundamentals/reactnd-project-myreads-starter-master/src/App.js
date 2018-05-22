import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import Booklist from './components/Booklist'
import Searchbook from './components/Searchbook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
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

  updateBookInfo = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.fetchBookData();
      })
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Searchbook
            books={books}
            onUpdateBookInfo={this.updateBookInfo}
          />
        ) : (
          <Booklist
            books={books}
            onUpdateBookInfo={this.updateBookInfo}
          />
        )}
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>

      </div>
    )
  }
}

export default BooksApp
