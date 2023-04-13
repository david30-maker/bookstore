import { useDispatch } from 'react-redux';
import BooksList from '../components/bookLists';
import AddBook from '../components/addBooks';
import { clearBooks } from '../redux/books/booksSlice';


const Books = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <BooksList />
      <AddBook />
      <button
        onClick={() =>
          dispatch(clearBooks())}
        type="button"
      >
        Clear Books
      </button>
    </div>
  );
};

export default Books;
