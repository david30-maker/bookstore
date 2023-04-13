import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
    'Mystery',
    'Construction',
    'Romance',
    'Literary Fiction',
    'Thriller',
    'Economy',
    'Mind',
    'Love',
    'Poetry',
    'Comedy',
    'Drama',
    'Fantasy',
    'Adventure',
    'Spirituality',
    'Self Help',
    'Science',
    'Health',
    'Travel',
    'Food',
    'Art',
    'Music',
    'Sports',
    'Math',
    'Technology',
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, Action) =>
      Boolean(state.categories.includes(Action.payload)),

  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
