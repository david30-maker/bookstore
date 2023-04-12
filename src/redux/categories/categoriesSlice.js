import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state) => {
      let curState = state;
      curState -= 'Under Construction';
      return curState;
    },
  },
});

console.log(categoriesSlice);

export default categoriesSlice.reducer;
