import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <div className="book-item">
    <div className="book-title">{JSON.parse(book).title}</div>
    <div className="book-author">{JSON.parse(book).author}</div>
    <button type="button" className="book-item__remove" id={JSON.parse(book).id}>Remove Book</button>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.string.isRequired,
};

export default BookItem;
