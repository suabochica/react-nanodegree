import React from 'react';
import PropTypes from 'prop-types'
import Shelfchanger from './Shelfchanger'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, onChangeBookshelf } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
          <Shelfchanger
            book={book}
            books={books}
            onChangeBookshelf={onChangeBookshelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;