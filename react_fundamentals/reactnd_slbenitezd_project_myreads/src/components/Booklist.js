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
    const shelves = {
      currentlyReading: ['CurrentlyReading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          { Object.keys(shelves).map((shelf) =>
            <Bookshelf
              key={shelves[shelf][1]}
              category={shelves[shelf][0]}
              books={books.filter((book) => book.shelf === shelves[shelf][1])}
              onChangeBookshelf={onChangeBookshelf}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Booklist;