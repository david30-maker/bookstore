import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-item">

      <div className="book-title">{JSON.parse(book).title}</div>
      <div className="book-author">{JSON.parse(book).author}</div>
      <button
        type="button"
        className="book-remove"
        id={JSON.parse(book).id}
        onClick={(evet) => dispatch(removeBook(evet.target.id))}
      >
        Remove Book
      </button>
    </div>
  );
};
BookItem.propTypes = {
  book: PropTypes.string.isRequired,
};

export default BookItem;
