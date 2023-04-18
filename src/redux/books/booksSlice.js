import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  appID: 'GEuAWlP9fDuVTZwC5FdL',
  url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GEuAWlP9fDuVTZwC5FdL/',
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GEuAWlP9fDuVTZwC5FdL';

export const createApp = createAsyncThunk('books/createApp', async () => {
  const resp = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
  return resp;
});

export const postBooks = createAsyncThunk('books/postBooks', async (newBook) => {
  axios.post(`${url}/books`, newBook);
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const resp = await axios.get(`${url}/books`);
    let { books } = thunkAPI.getState().books;
    books = resp.data;
    return books;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  axios.delete(`${url}/books/${bookId}`);
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      const curState = state.books;
      curState[newBook.item_id] = [{
        title: newBook.title,
        category: newBook.category,
        author: newBook.author,
      }];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const curState = state;
      delete curState.books[bookId];
      return curState;
    },
    filterBooks: (state, action) => {
      const category = action.payload;
      const curState = state;
      curState.books = state.books.find((book) => book.category === category);
      return curState;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      const newState = state;
      newState.books = [];
      return newState;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
      return newState;
    },
    [fetchBooks.rejected]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
      return newState;
    },
  },
});

export const {
  addBook,
  removeBook,
  filterBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
