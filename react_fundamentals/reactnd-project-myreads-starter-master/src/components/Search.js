import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class Search extends React.Component {
  state = {
    booksInSearch: [],
    query: '',
    hasNotSearchResult: false
  }

  handleInputChangeEvent = (event) => {
    const query = event.target.value;

    this.setState(() => ({
      query: query
    }))

    if (query) {
      this.searchBooks(query);
    } else {
      this.clearQuery();
    }
  }

  searchBooks = (query) => {
    BooksAPI.search(query, 10)
      .then((books) => {
        books.length > 0
          ? this.setState(() => ({
              booksInSearch: books,
              hasNotSearchResult: false
            }))
          : this.clearQuery();
      })
  }

  clearQuery = () => {
    this.setState(() => ({
      booksInSearch: [],
      hasNotSearchResult: true
    }));
  }

  render() {
    const { booksInSearch, query, hasNotSearchResult } = this.state;
    const { books, onChangeBookshelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleInputChangeEvent}
            />

          </div>
        </div>
        <div className="search-books-results">

          {booksInSearch.length > 0 && (
            <div>
              <div className="showing-books">
                <span>Search returned {booksInSearch.length} books</span>
              </div>
              <ol className="books-grid">
                {booksInSearch.map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      books={books}
                      onChangeBookshelf={onChangeBookshelf}
                    />
                  </li>
                ))}
              </ol>
            </div>
          )}

          {hasNotSearchResult && (
            <div>
              <div className=''>
                <span>Search returned 0 books. Please try again!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search;