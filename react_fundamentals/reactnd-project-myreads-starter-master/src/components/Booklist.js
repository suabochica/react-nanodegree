import React from 'react';
import Bookshelf from './Bookshelf'

class Booklist extends React.Component {
  render() {
    const { books, onUpdateBookInfo } = this.props;
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
              onUpdateBookBookshelf={onUpdateBookInfo}
            />
            <Bookshelf
              category={'Want to Read'}
              books={booksInWantToRead}
              onUpdateBookBookshelf={onUpdateBookInfo}
            />
            <Bookshelf
              category={'Read'}
              books={booksInRead}
              onUpdateBookBookshelf={onUpdateBookInfo}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Booklist;