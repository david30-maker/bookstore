import { useSelector } from 'react-redux';
import BookItem from './bookItems';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookItem book={JSON.stringify(book)} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
