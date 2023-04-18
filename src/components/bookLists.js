import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './bookItems';

const BookList = () => {
  const dispatch = useDispatch();
  const booksObject = useSelector((store) => store.books).books;

  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bookData = (Object.entries(booksObject));
  return (
    <div className="books-wrap-list">
      {
        bookData.map(
          (book) => <BookItem key={book[0]} id={book[0]} book={JSON.stringify(book[1][0])} />,
        )
      }
    </div>
  );
};

export default BookList;
