import React from 'react';
import PropTypes from 'prop-types'
import Shelfchanger from './Shelfchanger'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  render() {
    const { book, onChangeBookshelf } = this.props;

    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks ? book.imageLinks.smallThumbnail : 'http://via.placeholder.com/128x192'})` }}></div>
          <Shelfchanger
            book={book}
            shelf={book.shelf}
            onChangeBookshelf={onChangeBookshelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
      </li>
    )
  }
}

export default Book;