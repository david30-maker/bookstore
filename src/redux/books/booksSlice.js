/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const books = [
  {
    id: uuidv(),
    title: 'The Power of Your Mind',
    author: 'Joseph Murphy',
    category: 'Mind',
  },
  {
    id: uuidv(),
    title: 'The Purpose and Power of Love',
    author: ' Dr. Myles Munroe',
    category: 'Love',
  },
  {
    id: 3,
    title: 'The history of the world',
    author: 'J. H. Parry',
    category: 'History',
  },
  {
    id: uuidv(),
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    id: uuidv(),
    title: 'The Lord of the Rings',
    category: 'Action',
  },
  {
    id: uuidv(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Learning',
  },
  {
    id: uuidv(),
    title: 'Capital in the Twenty-First Century',
    author: 'Thomas Piketty',
    category: 'Economy',
  },
];

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBook: (state) => {
      const newState = state;
      newState.books = [];
      return newState;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const curState = state;
      curState.books = curState.books.filter((book) => book.id !== bookId);
      return curState;
    },
    filterBook: (state, action) => {
      const category = action.payload;
      const curState = state;
      curState.books = curState.books.filter((book) => book.category === category);
      return curState;
    },
  },
});

export const {
  clearBook,
  addBook,
  removeBook,
  filterBook,
} = booksSlice.actions;

export default booksSlice.reducer;
