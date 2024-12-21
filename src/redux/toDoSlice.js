import { createSlice } from '@reduxjs/toolkit';
import { addToDo, deleteToDo, fetchToDos } from './operations.js';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: { items: [], isLoading: false, isError: '' },
  extraReducers: builder =>
    builder
      .addCase(fetchToDos.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.isLoading = false;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(addToDo.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToDo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addToDo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteToDo.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => {
          return item.id !== action.payload.id;
        });
        state.isLoading = false;
      })
      .addCase(deleteToDo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const toDoReducer = toDoSlice.reducer;
