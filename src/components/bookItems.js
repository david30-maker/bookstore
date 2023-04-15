import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-wrap">
      <div className="book-details">
        <div className="book-category">{JSON.parse(book).category}</div>
        <div className="book-title">{JSON.parse(book).title}</div>
        <div className="book-item-author">{JSON.parse(book).author}</div>
        <div className="book-detail-btn">
          <button type="button" className="book-comment">Comments</button>
          <button
            type="button"
            className="book-remove"
            id={id}
            onClick={(evet) => {
              dispatch(removeBook(evet.target.id));
              dispatch(deleteBook(evet.target.id));
            }}
          >
            Remove
          </button>
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
        <div className="progress-title">CURRENT CHAPTER</div>
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

// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeBook, deleteBook } from '../redux/books/booksSlice';

// const BookItem = ({ book, id }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="book-wrapper">
//       <div className="book-datail">
//         <div className="book-category">{JSON.parse(book).category}</div>
//         <div className="book-title">{JSON.parse(book).title}</div>
//         <div className="book-author">{JSON.parse(book).author}</div>
//         <div className="bool-detail-btn">
//           <button type="button" className="book-comment">Comment</button>
//           <button
//             type="button"
//             className="book-remove"
//             id={id}
//             onClick={(evet) => {
//               dispatch(removeBook(evet.target.id));
//               dispatch(deleteBook(evet.target.id));
//             }}
//           >
//             Remove Book
//           </button>
//           <button type="button" className="book-edit">Edit</button>
//         </div>
//       </div>
//       <div className="book-status">
//         <div className="oval-2" />
//         <div className="status-data">
//           <span className="status-data-title">64%</span>
//           <span className="status-data-complete">Completed</span>
//         </div>
//       </div>
//       <div className="book-progress">
//         <div className="progess-title">
//           Current Chapter
//         </div>
//         <div className="progess-detail">Chapter 20</div>
//         <button type="button" className="progress-update">Update Progress</button>
//       </div>
//     </div>
//   );
// };
// BookItem.propTypes = {
//   book: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

// export default BookItem;
