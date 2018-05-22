import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  state = {
    shelf: ""
  }

  updateBookBookshelf = (book, shelf) => {
    this.props.onUpdateBookBookshelf(book, shelf)
  }

  render() {
    const {category,  books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
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
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;