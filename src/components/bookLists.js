import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './bookItems';

const BooksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });
  const bookObject = useSelector((store) => store.books);
  const bookData = (Object.entries(bookObject));

  return (
    <div className="book-list-wrapper">
      {bookData.map(
        (book) => (
          <BookItem
            key={book[0]}
            id={book[0]}
            book={JSON.stringify(book[1][0])}
          />
        ),
      )}
    </div>
  );
};

export default BooksList;
