import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class Searchbook extends React.Component {
  state = {
    books: [],
    query: ""
  }

  handleInputChangeEvent = (event) => {
    const query = event.target.value;

    this.setState(() => ({
      query: query
    }))

    this.searchBooks(query);
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then((books) => {
        books.length === 0
          ? this.setState(() => ({
              books: []
            }))
          : this.setState(() => ({
              books: books
            }))

      })
  }

  updateBookBookshelf = (book, shelf) => {
    this.props.onUpdateBookInfo(book, shelf)
  }

  render() {
    const { books, query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleInputChangeEvent}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                onChangeBookshelf={(shelf) => {
                  this.updateBookBookshelf(book, shelf)
                }}
              />
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default Searchbook;