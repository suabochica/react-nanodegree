import React from 'react';
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class Booklist extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  render() {
    const { books, onChangeBookshelf } = this.props;
    const booksInCurrentlyReading = books.filter((book) => (
      book.shelf === 'currentlyReading'
    ));
    const booksInWantToRead = books.filter((book) => (
      book.shelf === 'wantToRead'
    ));
    const booksInRead = books.filter((book) => (
      book.shelf === 'read'
    ));

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              category={'Currently Reading'}
              books={booksInCurrentlyReading}
              onChangeBookshelf={onChangeBookshelf}
            />
            <Bookshelf
              category={'Want to Read'}
              books={booksInWantToRead}
              onChangeBookshelf={onChangeBookshelf}
            />
            <Bookshelf
              category={'Read'}
              books={booksInRead}
              onChangeBookshelf={onChangeBookshelf}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Booklist;