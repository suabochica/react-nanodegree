import React from 'react';
import PropTypes from 'prop-types'

class Shelfchanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  render() {
    let currentShelf = 'None';
    const { book, books, onChangeBookshelf } = this.props;

    for (let item of books) {
      currentShelf = item.shelf;

      break;
    }
    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => onChangeBookshelf(book, event.target.value)} defaultValue={currentShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Shelfchanger;