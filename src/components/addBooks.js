/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { addBook, postBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const getBook = (evet) => {
    evet.preventDefault();

    const newBook = {
      item_id: uuid(),
      title,
      author,
      category: category || categories[0],
    };
    dispatch(addBook(newBook));
    dispatch(postBook(newBook));
  };

  return (
    <form
      className="add-form"
    >
      <span>Add Book</span>
      <input
        onChange={(evet) => setTitle(evet.target.value)}
        type="text"
        placeholder="title"
      />
      <select>
        {categories.map((category) => (
          <option
            onSelect={(evet) => setCategory(evet.target.value)}
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
      <input
        onChange={(evet) => setAuthor(evet.target.value)}
        type="name"
        placeholder="Author"
      />
      <button
        type="submit"
        onClick={(evet) => getBook(evet)}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
