import { createSelector } from '@reduxjs/toolkit';

export const selectToDos = state => state.toDo.items;
export const selectIsLoading = state => state.toDo.isLoading;

export const selectFilter = state => state.filter.text;

export const selectFilteredToDos = createSelector(
  [selectToDos, selectFilter],
  (toDos, filter) => {
    return toDos.filter(item => {
      return item.text.toLowerCase().includes(filter.toLowerCase());
    });
  },
);
