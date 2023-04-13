import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();

  const getBook = (evet) => {
    evet.preventDefault();

    const newBook = {
      id: Math.floor(Math.random() * 100),
      title: evet.target[0].value,
      category: evet.target[1].value,
      author: 'Author',
    };
    dispatch(addBook(newBook));
  };
  return (
    <form
      className="add-form"
      onSubmit={(evet) => getBook(evet)}
    >
      <span>Add Book</span>
      <input type="text" placeholder="title" />
      <select>
        <option value="Leadership">Leadership</option>
        <option value="Transform">Transform</option>
        <option value="Reaction">Reaction</option>
        <option value="Glory">Glory</option>
        <option value="Love">Love</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;
