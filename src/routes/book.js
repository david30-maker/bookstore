import { useDispatch } from 'react-redux';
import BooksList from '../components/bookLists';
import AddBook from '../components/addBooks';
import { clearBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <BooksList />
      <AddBook />
      <button
        onClick={() => dispatch(clearBook())}
        type="button"
      >
        Clear Books
      </button>
    </div>
  );
};

export default Books;
