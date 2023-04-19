import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import './styles/bookItem.css';

const BookItem = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-wrap">
      <div className="book-detail">
        <div className="book-category">{JSON.parse(book).category}</div>
        <div className="book-title">{JSON.parse(book).title}</div>
        <div className="book-author">{JSON.parse(book).author}</div>
        <div className="book-detail-btn">
          <button type="button" className="book-comment">Comments</button>
          <button
            type="button"
            className="book-item__remove"
            id={id}
            onClick={(evet) => {
              dispatch(removeBook(evet.target.id));
              dispatch(deleteBook(evet.target.id));
            }}
          >
            Remove
          </button>
          <div className="divide-Line" />
          <button type="button" className="book-edit">Edit</button>
        </div>
      </div>
      <div className="book-status">
        <div className="Oval-2" />
        <div className="status-data">
          <span className="status-data-title">64%</span>
          <span className="status-data-completed">Completed</span>
        </div>
      </div>
      <div className="book-item-progress">
        <div className="progress-title">Current Chapter</div>
        <div className="progress-detail">Chapter 17</div>
        <button type="button" className="progress-update">Update Progress</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
