import BooksList from '../components/bookLists';
import AddBook from '../components/addBooks';

const books = [
  {
    id: 1,
    title: 'How To Be Led By The Spirit',
    author: 'Kenneth Hagin',
  },
  {
    id: 2,
    title: 'The Principle of The Kingdom ',
    author: 'Myles Munroe',
  },
  {
    id: 3,
    title: 'Experiencing The Presence',
    author: 'Charles Finney',
  },
];
const Book = () => (
  <div>
    <h1>All Books</h1>
    <BooksList books={books} />
    <AddBook />
  </div>
);

export default Book;
