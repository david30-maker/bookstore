import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './bookItems';

const BooksList = () => {
  const dispatch = useDispatch();
  const bookObject = useSelector((store) => store.books);
  // let booksArr = useSelector((store) => store.books).books;
  // const category = useSelector((store) => store.categories).categories;
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const bookData = (Object.entries(bookObject));
  // const filterPer = (evet) => {
  //   evet.preventDefault();
  //   const categorySelected = evet.target[0].value;
  //   if (category.includes(categorySelected)) {
  //     if (booksArr.find((book) => book.category === categorySelected)) {
  //       booksArr = booksArr.find((book) => book.category === categorySelected);
  //       console.log(booksArr);
  //       <BooksList />;
  //     } else {
  //       console.log('No books in this category');
  //       booksArr = [];
  //     }
  //   } else {
  //     console.log('No category selected');
  //   }
  // };

  return (
    <div className="book-list-wrapper">
      {/* <h1>All Books</h1>
      <form
        onSubmit={(evet) => filterPer(evet)}
        className="filter-form"
      >
        <select>
          {category.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Filter</button>
      </form>
      {booksArr.map((book) => (
        <div key={book.id}>
          <BookItem book={JSON.stringify(book)} />
        </div>
      )) */}
      {bookData.books.map((book) => <BookItem key={book.id} book={book} />)}
    </div>
  );
};

export default BooksList;
