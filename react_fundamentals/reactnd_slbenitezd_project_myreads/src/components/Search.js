import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class Search extends React.Component {
  static propTypes = {
    onChangeBookshelf: PropTypes.func.isRequired
  }

  state = {
    booksInSearch: [],
    query: '',
    hasNotSearchResult: false
  }

  onInputChangeEvent = (event) => {
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
    let bookInShelf;

    if (query !== '') {
      BooksAPI.search(query)
        .then((books) => {
          books.forEach((bookInSearch) => {
            bookInShelf = this.props.books.find((bookInHomepage) => bookInHomepage.id === bookInSearch.id)

            bookInShelf ? bookInSearch.shelf = bookInShelf.shelf : bookInSearch.shelf = 'none'
          })

          books.length > 0
            ? this.setState(() => ({
                booksInSearch: books,
                hasNotSearchResult: false
              }))
            : this.clearQuery();
        })
    } else {
      alert(`Please enter a valid query`);
    }
  }

  clearQuery = () => {
    this.setState(() => ({
      booksInSearch: [],
      hasNotSearchResult: true
    }));
  }

  render() {
    const { booksInSearch, query, hasNotSearchResult } = this.state;
    const { onChangeBookshelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.onInputChangeEvent}
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
                    <Book
                      key={book.id}
                      book={book}
                      onChangeBookshelf={onChangeBookshelf}
                    />
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