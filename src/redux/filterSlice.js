import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { text: '' },
  reducers: {
    setFilter(state, action) {
      state.text = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
