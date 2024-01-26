import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book';

class Bookshelf extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  render() {
    const {category,  books, onChangeBookshelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                onChangeBookshelf={onChangeBookshelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;