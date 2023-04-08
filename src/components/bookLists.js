import BookItem from './bookItems';

const BooksList = ({ books }) => (
  books.map((book) => <BookItem key={book.id} book={JSON.stringify(book)} />)
);

export default BooksList;
