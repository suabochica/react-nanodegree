import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  state = {
    shelf: ""
  }

  render() {
    const {category,  books, onChangeBookshelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
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
      </div>
    )
  }
}

export default Bookshelf;