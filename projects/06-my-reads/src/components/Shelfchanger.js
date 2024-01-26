import React from 'react';
import PropTypes from 'prop-types'

class Shelfchanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired
  }

  render() {
    const { book, shelf, onChangeBookshelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => onChangeBookshelf(book, event.target.value)} defaultValue={shelf}>
          <option value="moveTo" disabled>Move to...</option>
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