import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-item-wrap">
      <div className="book-details">
        <div className="book-item__category">{JSON.parse(book).category}</div>
        <div className="book-item__title">{JSON.parse(book).title}</div>
        <div className="book-item__author">{JSON.parse(book).author}</div>
        <div className="book-details-btns">
          <button type="button" className="book-item__comment">Comments</button>
          <button
            type="button"
            className="book-item__remove"
            id={id}
            onClick={(e) => {
              dispatch(removeBook(e.target.id));
              dispatch(deleteBook(e.target.id));
            }}
          >
            Remove
          </button>
          <button type="button" className="book-item__edit">Edit</button>
        </div>
      </div>
      <div className="book-item__status">
        <div className="Oval-2" />
        <div className="status-data">
          <span className="status-data__title">64%</span>
          <span className="status-data__completed">Completed</span>
        </div>
      </div>
      <div className="book-item__progress">
        <div className="progress-title">CURRENT CHAPTER</div>
        <div className="progress-details">Chapter 17</div>
        <button type="button" className="progress-update">UPDATE PROGRESS</button>
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
//     <div className="book-wrap">
//       <div className="book-detail">
//         <div className="book-category">{JSON.parse(book).category}</div>
//         <div className="book-title">{JSON.parse(book).title}</div>
//         <div className="book-item-author">{JSON.parse(book).author}</div>
//         <div className="book-detail-btn">
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
//             Remove
//           </button>
//           <button type="button" className="book-edit">Edit</button>
//         </div>
//       </div>
//       <div className="book-status">
//         <div className="Oval-2" />
//         <div className="status-data">
//           <span className="status-data-title">64%</span>
//           <span className="status-data-completed">Completed</span>
//         </div>
//       </div>
//       <div className="book-item-progress">
//         <div className="progress-title">Current Chapter</div>
//         <div className="progress-detail">Chapter 17</div>
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

// // import PropTypes from 'prop-types';
// // import { useDispatch } from 'react-redux';
// // import { removeBook, deleteBook } from '../redux/books/booksSlice';

// // const BookItem = ({ book, id }) => {
// //   const dispatch = useDispatch();

// //   return (
// //     <div className="book-wrapper">
// //       <div className="book-datail">
// //         <div className="book-category">{JSON.parse(book).category}</div>
// //         <div className="book-title">{JSON.parse(book).title}</div>
// //         <div className="book-author">{JSON.parse(book).author}</div>
// //         <div className="bool-detail-btn">
// //           <button type="button" className="book-comment">Comment</button>
// //           <button
// //             type="button"
// //             className="book-remove"
// //             id={id}
// //             onClick={(evet) => {
// //               dispatch(removeBook(evet.target.id));
// //               dispatch(deleteBook(evet.target.id));
// //             }}
// //           >
// //             Remove Book
// //           </button>
// //           <button type="button" className="book-edit">Edit</button>
// //         </div>
// //       </div>
// //       <div className="book-status">
// //         <div className="oval-2" />
// //         <div className="status-data">
// //           <span className="status-data-title">64%</span>
// //           <span className="status-data-complete">Completed</span>
// //         </div>
// //       </div>
// //       <div className="book-progress">
// //         <div className="progess-title">
// //           Current Chapter
// //         </div>
// //         <div className="progess-detail">Chapter 20</div>
// //         <button type="button" className="progress-update">Update Progress</button>
// //       </div>
// //     </div>
// //   );
// // };
// // BookItem.propTypes = {
// //   book: PropTypes.string.isRequired,
// //   id: PropTypes.string.isRequired,
// // };

// // export default BookItem;
