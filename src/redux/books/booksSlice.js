import { createSlice } from '@reduxjs/toolkit';

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

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const curState = state;
      curState.books = curState.books.filter((book) => book.id !== bookId);
      return curState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
